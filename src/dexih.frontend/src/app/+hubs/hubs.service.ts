import { Message, CancelToken } from '../+auth/auth.models';
import { eLogLevel, LogFactory } from '../../logging';
import { Injectable, OnDestroy } from '@angular/core';
import { AuthService } from '../+auth/auth.service';
import { BehaviorSubject, Observable} from 'rxjs';
import { DexihActiveAgent, DexihRemoteAgent, logLevel, eEnvironment, RemoteAgentSettings,
    RemoteAgentSettingsSubset, ManagedTask } from '../shared/shared.models';

@Injectable()
export class HubsService implements OnDestroy {

    private logger = new LogFactory('hubs.service');
    private _hubMessages = new BehaviorSubject<Array<Message>>([]);

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
        let errorStack = '';
        if (typeof error?.message === 'object' && error?.message !== null) {
            errorStack = 'error object details: ' + JSON.stringify(error.message) + '/n';
        }
        let message = context + '.  The following error occurred on the client: ' + error.message;
        let newMessage = new Message(false, message, errorStack + error.stack, null);
        this.addHubMessage(newMessage);
    }

    addHubSuccessMessage(message: string) {
        let newMessage = new Message(true, message, null, null);
        this.addHubMessage(newMessage);
    }

    remoteAgents(): Promise<Array<DexihRemoteAgent>> {
        return this.authService.post<Array<DexihRemoteAgent>>('/api/Account/GetUserRemoteAgents', { }, 'Getting user remote agents...');
    }

    cancelTasks(tasks: Array<ManagedTask>): Promise<boolean> {
        return this.authService.post<boolean>('/api/Account/CancelTasks', tasks, 'Cancelling task(s)...');
    }

    restartAgent(activeAgent: DexihActiveAgent, force: boolean, cancelToken: CancelToken): Promise<boolean> {
        return this.authService.postRemote<boolean>('/api/Account/RestartAgent',
        { instanceId: activeAgent.instanceId, force}, activeAgent, 'Restarting agent...', cancelToken);
    }

    public downloadRemoteAgent(embedUserName: boolean, environment: eEnvironment, ll: logLevel, settings: RemoteAgentSettingsSubset):
    Promise<boolean> {
        return new Promise<boolean>((resolve, reject) => {
            let remoteAgentSettings = new RemoteAgentSettings();
            remoteAgentSettings.embedUserName = embedUserName;
            remoteAgentSettings.environment = environment;
            remoteAgentSettings.logLevel = ll;
            remoteAgentSettings.remoteApplicationSettings = settings;

            this.authService.downloadFile('/api/Remote/DownloadZip', remoteAgentSettings, 'dexih.remote.zip', 'application/zip').then(() => {
                resolve(true);
            }).catch(reason => {
                this.logger.LogC(() => `downloadRemoteAgent, error: ${reason.message}.`, eLogLevel.Error);
                this.addHubMessage(reason);
                reject(reason);
            });
        });
    }

    public downloadRemoteSettings(embedUserName: boolean, environment: eEnvironment, ll: logLevel,
        settings: RemoteAgentSettingsSubset): Promise<boolean> {
        return new Promise<boolean>((resolve, reject) => {
            let remoteAgentSettings = new RemoteAgentSettings();
            remoteAgentSettings.embedUserName = embedUserName;
            remoteAgentSettings.environment = environment;
            remoteAgentSettings.logLevel = ll;
            remoteAgentSettings.remoteApplicationSettings = settings;

            this.authService.downloadFile('/api/Remote/DownloadAppSettings', remoteAgentSettings, 
                'appsettings.json', 'application/json').then(() => {
                    resolve(true);
            }).catch(reason => {
                this.logger.LogC(() => `downloadRemoteSettings, error: ${reason.message}.`, eLogLevel.Error);
                this.addHubMessage(reason);
                reject(reason);
            });
        });
    }
}




