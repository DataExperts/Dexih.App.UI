import { ManagedTask, Message, CancelToken } from '../+auth/auth.models';
import { eLogLevel, LogFactory } from '../../logging';
import { Injectable, OnDestroy } from '@angular/core';
import { AuthService } from '../+auth/auth.service';
import { BehaviorSubject, Observable, Subscription} from 'rxjs';
import { eEnvironment, RemoteApplicationSettings } from './remoteAgents/remoteAgent-download/remoteAgent-download.models';
import { eDownloadFormat, DexihActiveAgent, InputColumn, SelectQuery,
    eTypeCode, DexihRemoteAgent, SharedData, eDataObjectType, DataPack } from '../shared/shared.models';
import { PreviewResults } from '../+hub/hub.models';

@Injectable()
export class HubsService implements OnDestroy {

    private logger = new LogFactory('hubs.service');
    private _hubMessages = new BehaviorSubject<Array<Message>>([]);


    private sharedItemsIndex: SharedData[];

    constructor(
        private authService: AuthService
        ) {
    }

    ngOnDestroy() {
    }

    getHubMessagesObservable(): Observable<Array<Message>> {
        return this._hubMessages.asObservable();
    }

    getHubMessages(): Array<Message> {
        return this._hubMessages.value;
    }

    addHubMessage(message: Message) {
        this.authService.addUpdateNotification(message, false);
        let messages = this.getHubMessages();
        messages.push(message);
        this._hubMessages.next(messages);
    }

    addHubErrorMessage(message: string) {
        let newMessage = new Message(false, message, null, null);
        this.addHubMessage(newMessage);
    }

    addHubClientErrorMessage(error: Error, context: string) {
        let message = context + '.  The following error occurred on the client: ' + error.message;
        let newMessage = new Message(false, message, error.stack, null);
        this.addHubMessage(newMessage);
    }

    addHubSuccessMessage(message: string) {
        let newMessage = new Message(true, message, null, null);
        this.addHubMessage(newMessage);
    }

    // gets all shared data items
    getSharedDataIndex(searchString: string, hubKeys: number[], maxResults: number, reload: boolean): Promise<SharedData[]> {
        if (reload || !this.sharedItemsIndex) {
            return this.authService.post<SharedData[]>('/api/SharedData/SharedDataIndex', {
                searchString, hubKeys, maxResults
            }, 'Getting shared data index...');
        } else {
            Promise.resolve(this.sharedItemsIndex);
        }
    }

    downloadData(sharedItems: Array<SharedData>, zipFiles: boolean, downloadFormat: eDownloadFormat, cancelToken: CancelToken):
        Promise<boolean> {
        return new Promise<boolean>((resolve, reject) => {

            // get distinct list of hubKeys
            let flags = [], hubKeys = []
            for (let i = 0; i < sharedItems.length; i++) {
                if (flags[sharedItems[i].hubKey]) { continue };
                flags[sharedItems[i].hubKey] = true;
                hubKeys.push(sharedItems[i].hubKey);
            }

            hubKeys.forEach(hubKey => {
                this.authService.post<DexihActiveAgent>('/api/SharedData/GetActiveAgent', { hubKey: hubKey}, 'Getting active remote agent...')
                .then(activeAgent => {

                    this.authService.postRemote<ManagedTask[]>('/api/SharedData/DownloadData', {
                        clientId: this.authService.getWebSocketConnectionId(),
                        downloadFormat: downloadFormat,
                        zipFiles: zipFiles,
                        sharedItems: sharedItems.filter(c => c.hubKey === hubKey),
                        remoteAgentId: activeAgent.instanceId,
                    }, activeAgent, 'Downloading data...', cancelToken)
                        .then(tasks => {
                        tasks.forEach(task => {
                            this.authService.addUpdateTask(task);
                        })
                        resolve(true);
                    }).catch(reason => {
                        this.logger.LogC(() => `downloadData, error: ${reason.message}.`, eLogLevel.Error);
                        reject(reason);
                    });
                });
            });
        });
    }

    // starts a preview, and returns the url to get the download stream.
    previewDataUrl(hubKey: number, objectKey: number, objectType: eDataObjectType,
        inputColumns: InputColumn[], selectQuery: SelectQuery, cancelToken: CancelToken):
        Promise<string> {
        return new Promise<string>((resolve, reject) => {
            this.authService.post<DexihActiveAgent>('/api/SharedData/GetActiveAgent', { hubKey: hubKey }, 'Getting active remote agent...')
            .then(activeAgent => {
                this.authService.postRemote('/api/SharedData/PreviewData', {
                    hubKey: hubKey,
                    objectType: objectType,
                    objectKey: objectKey,
                    selectQuery: selectQuery,
                    remoteAgentId: activeAgent.instanceId,
                    inputColumns: inputColumns
                }, activeAgent, 'Previewing data...', cancelToken);
            }).catch(reason => {
                reject(reason);
            });
        });
    }

    // gets preview data from a download stream.
    previewData(url: string, cancelToken: CancelToken):
        Promise<{name: string, columns: Array<any>, data: Array<any> }> {
            return new Promise<{name: string, columns: Array<any>, data: Array<any> }>((resolve, reject) => {

                this.authService.get<PreviewResults>(url, 'Getting preview results...', false, cancelToken).then(data => {
                    let tableResult: DataPack = data;
                    let columns = [];

                    tableResult.columns.forEach((c, index) => {
                        let name = c.logicalName ? c.logicalName : c.name;
                        switch (c.dataType) {
                            case eTypeCode.DateTime:
                                columns.push({ name: index, title: name, format: 'Date'});
                                break;
                                case eTypeCode.Json:
                                case eTypeCode.Xml:
                                columns.push({ name: index, title: name, format: 'Code'});
                                break;
                            default:
                                columns.push({ name: index, title: name, format: ''});
                        }
                    });
                    resolve({name: tableResult.name, columns: columns, data: tableResult.data});
                }).catch(reason => {
                    // this.addHubMessage(reason);
                    reject(reason);
                });
        });
    }

    remoteAgents(): Promise<Array<DexihRemoteAgent>> {
        return this.authService.post<Array<DexihRemoteAgent>>('/api/Account/GetUserRemoteAgents', { }, 'Getting user remote agents...');
    }

    cancelTasks(tasks: Array<ManagedTask>): Promise<boolean> {
        return this.authService.post<boolean>('/api/Account/CancelTasks', tasks, 'Cancelling task(s)...');
    }

    restartAgents(instanceIds: string[], force: boolean): Promise<boolean> {
        return this.authService.post<boolean>('/api/Account/RestartAgents', { instanceIds, force}, 'Restarting agent(s)...');
    }

    public downloadRemoteAgent(embedUserName: boolean, environment: eEnvironment, logLevel: eLogLevel, settings: RemoteApplicationSettings):
    Promise<boolean> {
        return new Promise<boolean>((resolve, reject) => {
            this.authService.downloadFile('/api/Remote/DownloadZip', {
                embedUserName,
                environment,
                logLevel,
                RemoteApplicationSettings: settings
            }, 'dexih.remote.zip', 'application/zip').then(() => {
                resolve(true);
            }).catch(reason => {
                this.logger.LogC(() => `downloadRemoteAgent, error: ${reason.message}.`, eLogLevel.Error);
                this.addHubMessage(reason);
                reject(reason);
            });
        });
    }

    public downloadRemoteSettings(embedUserName: boolean, environment: eEnvironment, logLevel: eLogLevel,
        settings: RemoteApplicationSettings): Promise<boolean> {
        return new Promise<boolean>((resolve, reject) => {
            this.authService.downloadFile('/api/Remote/DownloadAppSettings', {
                embedUserName,
                environment,
                logLevel,
                RemoteApplicationSettings: settings
            }, 'appsettings.json', 'application/json').then(() => {
                    resolve(true);
            }).catch(reason => {
                this.logger.LogC(() => `downloadRemoteSettings, error: ${reason.message}.`, eLogLevel.Error);
                this.addHubMessage(reason);
                reject(reason);
            });
        });
    }

}




