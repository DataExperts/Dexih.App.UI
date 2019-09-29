import {  OnDestroy } from '@angular/core';
import { Observable, Subscription, BehaviorSubject} from 'rxjs';
import { LogFactory, eLogLevel } from '../../logging';
import { HubConnection, HubConnectionBuilder, LogLevel, HubConnectionState } from '@aspnet/signalr';
import { Location } from '@angular/common';
import { ClientMessage, RemoteMessage, eClientCommand } from '../shared/shared.models';

export class AuthWebSocket implements OnDestroy {
    // private webSocket: WebSocket;
    private _webSocketStatus = new BehaviorSubject<string>('Disconnected');
    private _connectHubSubscription: Subscription;

    public _webSocketMessages = new BehaviorSubject<ClientMessage>(null);
    private _connectionId: string;

    private startingWebSocket = false;

    private logger = new LogFactory('Auth.Websocket');

    private hubConnection: HubConnection;
    private hubConnected = new BehaviorSubject<boolean>(false);

    constructor(public location: Location
    ) {
        this._webSocketStatus.next('Disconnected');
    }

    ngOnDestroy() {
        if (this._webSocketStatus) { this._webSocketStatus.unsubscribe(); }
        if (this._connectHubSubscription) { this._connectHubSubscription.unsubscribe(); }
    }

    public async initializeWebSocket() {
        this.logger.LogC(() => `InitializeWebSocket`, eLogLevel.Debug);

        this._webSocketStatus.next('Connecting');

        if (this.hubConnection) {
            await this.hubConnection.stop();
        }

        this.hubConnection = new HubConnectionBuilder()
            .configureLogging(LogLevel.Trace)
            .withUrl(this.location.prepareExternalUrl('/browser'))
            .build();

        this.hubConnection.on('Command', (remoteMessage: ClientMessage) => {
            this.logger.LogC(() => `startWebSocket: receive new message: ${remoteMessage.command}.`, eLogLevel.Debug);
            this._webSocketMessages.next(remoteMessage);
        });

        this.hubConnection.onclose(async (err: any) => {
            this.logger.LogC(() => `startWebSocket disconnected. ${err}.`, eLogLevel.Error);
            this._webSocketStatus.next(`${err}.  Check your network connection.`);
            this.hubConnected.next(false);
            this.sendDisconnect();
            this._connectionId = null;

            // wait 5 seconds, then attempt to reconnect.
            setTimeout(() => this.startWebSocket(), 5000);
        });

        await this.startWebSocket();
    }

    public getWebSocketObservable(): Observable<ClientMessage> {
        return this._webSocketMessages.asObservable();
    }

    public getWebSocketStatusObservable(): Observable<string> {
        return this._webSocketStatus.asObservable();
    }

    public getWebSocketConnectionId() {
        return this._connectionId;
    }

    private startWebSocket(): Promise<void> {
        if (!this.startingWebSocket) {
            this.startingWebSocket = true;

            return new Promise<void>(async (resolve, reject) => {
                if (this.hubConnection.state === HubConnectionState.Connected) {
                    resolve();
                    this.startingWebSocket = false;
                    return;
                }

                this.hubConnection.start().then(() => {
                    this._webSocketStatus.next('Connected');
                    this.hubConnected.next(true);
                    this.sendConnect().then(() => {
                        resolve();
                        this.logger.LogC(() => `startWebSocket: Hub started.`, eLogLevel.Debug);
                        this.startingWebSocket = false;
                    }).catch(reason => {
                        reject(reason);
                        this.startingWebSocket = false;
                    });
                })
                    .catch(err => {
                        this._webSocketStatus.next(`${err}.  Check your network connection.`);
                        this.sendDisconnect();
                        this.hubConnected.next(false);
                        this.logger.LogC(() => `startWebSocket: Hub start failed ${err}.`, eLogLevel.Debug);
                        setTimeout(() => {
                            this.startingWebSocket = false;
                            this.startWebSocket();
                        }, 5000);
                        resolve();
                    });
            });
        }
    }

    private sendDisconnect() {
        const disconnectMessage = new ClientMessage();
        disconnectMessage.command = eClientCommand.Disconnect;
        this._webSocketMessages.next(disconnectMessage);
    }

    private sendConnect(): Promise<void> {
        return new Promise<void>((resolve, reject) => {
            const message = new ClientMessage();
            return this.hubConnection.invoke('Connect').then(value => {
                this._connectionId = value;
                message.command = eClientCommand.Connect;
                this._webSocketMessages.next(message);
                resolve();
            }).catch(reason => {
                this._webSocketMessages.next(reason);
                reject(reason);
            });
        });
    }


}
