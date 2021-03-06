import { Message, CancelToken } from '../+auth/auth.models';
import { eLogLevel, LogFactory } from '../../logging';
import { Injectable, OnDestroy } from '@angular/core';
import { AuthService } from '../+auth/auth.service';
import { BehaviorSubject, Observable} from 'rxjs';
import { eDownloadFormat, DexihActiveAgent, InputColumn, SelectQuery,
    SharedData, eDataObjectType, DexihDashboard, InputParameterBase, ManagedTask, ListOfValuesItem } from '../shared/shared.models';
import { PreviewResults } from '../+hub/hub.models';

@Injectable()
export class PublicService implements OnDestroy {

    private logger = new LogFactory('public.service');
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
        let errorStack = '';
        if (typeof error?.message === 'object' && error?.message !== null) {
            errorStack = 'error object details: ' + JSON.stringify(error.message) + '/n';
        }
        let newMessage = new Message(false, message, errorStack + error.stack, null);
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

                    this.authService.postRemote<ManagedTask>('/api/SharedData/DownloadData', {
                        hubKey: hubKey,
                        clientId: this.authService.getWebSocketConnectionId(),
                        downloadFormat: downloadFormat,
                        zipFiles: zipFiles,
                        sharedItems: sharedItems.filter(c => c.hubKey === hubKey),
                        remoteAgentId: activeAgent.instanceId,
                    }, activeAgent, 'Downloading data...', cancelToken)
                        .then(task => {
                        this.authService.addUpdateTask(task);
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
    previewData(hubKey: number, objectKey: number, objectType: eDataObjectType,
        inputColumns: InputColumn[], selectQuery: SelectQuery, parameters: InputParameterBase[], cancelToken: CancelToken):
        Promise<PreviewResults> {

        return new Promise<PreviewResults>((resolve, reject) => {
            this.authService.post<DexihActiveAgent>('/api/SharedData/GetActiveAgent', { hubKey: hubKey }, 'Getting active remote agent...')
            .then(activeAgent => {
                this.authService.postRemote<PreviewResults>('/api/SharedData/PreviewData', {
                    hubKey: hubKey,
                    objectType: objectType,
                    objectKey: objectKey,
                    selectQuery: selectQuery,
                    remoteAgentId: activeAgent.instanceId,
                    inputColumns: inputColumns,
                    parameters: parameters
                }, activeAgent, 'Previewing data...', cancelToken).then(result => {
                    result.columns = this.authService.constructDataTableColumns(result.columns);
                    resolve(result);
                }).catch(reason => {
                    reject(reason);
                })
            }).catch(reason => {
                reject(reason);
            });
        });
    }

      // starts a preview, and returns the url to get the download stream.
      previewListOfValues(hubKey: number, objectKey: number, objectType: eDataObjectType, parameterName,
        resetCache: boolean, cancelToken: CancelToken):
        Promise<ListOfValuesItem[]> {

        return new Promise<ListOfValuesItem[]>((resolve, reject) => {
            this.authService.post<DexihActiveAgent>('/api/SharedData/GetActiveAgent', { hubKey: hubKey }, 'Getting active remote agent...')
            .then(activeAgent => {
                this.authService.postRemote<ListOfValuesItem[]>('/api/SharedData/PreviewListOfValues', {
                    hubKey: hubKey,
                    objectType: objectType,
                    objectKey: objectKey,
                    parameterName: parameterName,
                    resetCache: resetCache,
                    remoteAgentId: activeAgent.instanceId,
                }, activeAgent, 'Previewing list of values...', cancelToken).then(result => {
                    resolve(result);
                }).catch(reason => {
                    reject(reason);
                })
            }).catch(reason => {
                reject(reason);
            });
        });
    }

    getDashboard(hubKey: number, dashboardKey: number): Promise<DexihDashboard> {

        return new Promise<DexihDashboard>((resolve, reject) => {
            this.authService.post<DexihDashboard>('/api/SharedData/PreviewDashboard', {
                hubKey: hubKey,
                dashboardKey: dashboardKey,
            }, 'Getting dashboard download locations...').then(dashboard => {
                resolve(dashboard);
            }).catch(reason => reject(reason));
        });
    }



}




