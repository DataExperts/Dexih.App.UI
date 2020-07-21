import { HttpClient, HttpHeaders, HttpRequest, HttpEventType, HttpResponse } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as FileSaver from 'file-saver';
import { BehaviorSubject, Observable, Subscription, Subject, ReplaySubject } from 'rxjs';
import { timeout, first, take } from 'rxjs/operators'
import { eLogLevel, LogFactory } from '../../logging';
import {
    DexihHubAuth, ExternalLoginResult, Message,
    User, UserLoginInfo, ExternalLogin, FileHandler, eFileStatus, RemoteToken, PromiseWithCancel, CancelToken, eHubAccess
} from './auth.models';
import { UserAgentApplication, AuthResponse, CacheLocation } from 'msal';
import { DModalComponent } from 'ngx-d-components';
import { Location } from '@angular/common';
import { DexihRemoteAgent, DexihActiveAgent, DownloadUrl, CacheManager, eClientCommand, eLoginProvider,
    eTypeCode, ManagedTask, eManagedTaskStatus, ePermission, eSharedAccess, DexihIssue,
    DexihDashboard, ListOfValuesItem, SharedData, eDownloadFormat, eDataObjectType, InputColumn, SelectQuery, InputParameterBase } from '../shared/shared.models';
import { PreviewResults } from '../+hub/hub.models';
import { WebSocketService} from './websocket.service';
import { environment } from '../../environments/environment';
import { Functions } from '../shared/utils/functions';

declare var gapi: any;

@Injectable()
export class AuthService implements OnDestroy {
    // Create an observable user, so consuming components can update when credentials change.
    private _currentUser = new BehaviorSubject<User>(null);
    private _refreshUserAttempted = false;
    private _refreshUserPromise;
    public _hubs = new BehaviorSubject<Array<DexihHubAuth>>(null);
    private _hubErrors = new BehaviorSubject<Array<Message>>([]);

    private _displayHelp = new BehaviorSubject<boolean>(false);

    private _tasks = new BehaviorSubject<Array<ManagedTask>>([]);

    private _notification = new Subject<Message>();
    private _notifications: Message[] = [];

    private _logErrors = new BehaviorSubject<Message>(null);

    private _waitMessages = new Map<string, any>();
    private _waitMessagesObserve = new BehaviorSubject<any>(this._waitMessages);

    private _globalCache = new ReplaySubject<CacheManager>();

    private _remoteAgents = new BehaviorSubject<Array<DexihRemoteAgent>>(null);

    // store the URL so we can redirect after logging in
    public redirectUrl: string;

    private _userSubscribe: Subscription;
    private _webSocketSubscribe: Subscription;
    private _logErrorsSubscribe: Subscription;

    private modalComponent: DModalComponent;

    private logger = new LogFactory('auth.service');

    private updateRemoteAgentsFlag = false;

    private sharedItemsIndex: SharedData[];

    private webSocketService: WebSocketService;

    private isInitialized = false;

    private xSrfToken = null;

    constructor(
        private http: HttpClient,
        private router: Router,
        private route: ActivatedRoute,
        private location: Location,
    ) {
    }

    ngOnDestroy() {
        this.logger.LogC(() => `ngOnDestroy.`, eLogLevel.Debug);

        if (this._userSubscribe) { this._userSubscribe.unsubscribe(); }
        if (this._webSocketSubscribe) { this._webSocketSubscribe.unsubscribe(); }
        if (this._remoteAgents) { this._remoteAgents.unsubscribe(); }
        if (this._logErrorsSubscribe) { this._logErrorsSubscribe.unsubscribe(); }
    }

    defaultHeaders(): HttpHeaders {
        return new HttpHeaders({
            'Content-Type': 'application/json',
            'X-XSRF-TOKEN': Functions.getCookie('XSRF-TOKEN') ?? ''
        });
    }

    initialize() {
        // only initialize once
        if (this.isInitialized) { return; }
        this.isInitialized = true;

        this.logger.LogC(() => 'Initializing AuthService', eLogLevel.Information);

        this.webSocketService = new WebSocketService(this.location);

        this.refreshGlobalCache();
        this.refreshUser();

        // whenever user login changes, update the list of hubs, and establish a websocket connection.
        if (this._userSubscribe) { this._userSubscribe.unsubscribe(); }
        this._userSubscribe = this.getUserObservable().subscribe(async (user) => {
            if (user) {
                this.logger.LogC(() => `New authorized user ${user.email}`, eLogLevel.Information);
                this.refreshHubs();

                await this.webSocketService.initializeWebSocket();

                if (this._webSocketSubscribe) { this._webSocketSubscribe.unsubscribe(); }
                this._webSocketSubscribe = this.webSocketService.getWebSocketObservable().subscribe(data => {
                    if (data) {
                        switch (data.command) {
                            case eClientCommand.Disconnect: {
                                this._remoteAgents.next(null);
                            }
                                break;
                            case eClientCommand.Connect:
                                // this.refreshGlobalCache();
                                // this.refreshUser();
                                this.pingRemoteAgents();
                                break;
                            case eClientCommand.ActiveAgentUpdate: {
                                let remoteAgents = <DexihRemoteAgent[]>this._remoteAgents.value;
                                if (remoteAgents) {
                                    let activeAgent = <DexihActiveAgent>data.value;
                                    let remoteAgent = remoteAgents.find(c => c.remoteAgentKey === activeAgent.remoteAgentKey);
                                    if (remoteAgent) {
                                        let existingIndex = remoteAgent['activeAgents']
                                            .findIndex(c => c.instanceId === activeAgent.instanceId);
                                        if (existingIndex >= 0) {
                                            remoteAgent['activeAgents'][existingIndex] = activeAgent;
                                        } else {
                                            remoteAgent['activeAgents'].push(activeAgent);
                                        }
                                    } else {
                                        remoteAgent = new DexihRemoteAgent();
                                        remoteAgent.remoteAgentKey = activeAgent.remoteAgentKey;
                                        remoteAgent.name = activeAgent.name;
                                        remoteAgent['activeAgents'] = [activeAgent];
                                        remoteAgents.push(remoteAgent);
                                    }
                                    this._remoteAgents.next(remoteAgents);
                                } else {
                                    let activeAgent = <DexihActiveAgent>data.value;
                                    let remoteAgent = new DexihRemoteAgent();
                                    remoteAgent.remoteAgentKey = activeAgent.remoteAgentKey;
                                    remoteAgent.name = activeAgent.name;
                                    remoteAgent['activeAgents'] = [activeAgent];
                                    this._remoteAgents.next([remoteAgent]);
                                }
                                break;
                            }
                            case eClientCommand.RemoteAgentDelete: {
                                let remoteAgents = <DexihRemoteAgent[]>this._remoteAgents.value;
                                if (remoteAgents) {
                                    let instanceId = data.value;
                                    remoteAgents.forEach(remoteAgent => {
                                        let existingIndex = remoteAgent['activeAgents'].findIndex(c => c.instanceId === instanceId);
                                        if (existingIndex >= 0) {
                                            remoteAgent['activeAgents'].splice(existingIndex, 1);
                                        }
                                    });
                                    this._remoteAgents.next(remoteAgents);
                                }
                                break;
                            }

                            case eClientCommand.RemoteAgentUpdateKey: {
                                let remoteAgents = <DexihRemoteAgent[]>this._remoteAgents.value;
                                let index = remoteAgents.findIndex(c => c.remoteAgentKey === data.value);
                                if (index >= 0) {
                                    remoteAgents[index] = data.value;
                                } else {
                                    remoteAgents.push(data.value);
                                }
                                this._remoteAgents.next(remoteAgents);
                                break;
                            }

                            case eClientCommand.RemoteAgentDeleteKey: {
                                let remoteAgents = <DexihRemoteAgent[]>this._remoteAgents.value;
                                let index = remoteAgents.findIndex(c => c.remoteAgentKey === data.value);
                                if (index >= 0) {
                                    remoteAgents.splice(index, 1);
                                    this._remoteAgents.next(remoteAgents);
                                }
                                break;
                            }

                            case eClientCommand.HubUpdate: {
                                this.logger.LogC(() => `hub-update: ${data.value}`, eLogLevel.Debug);

                                let hub: DexihHubAuth = data.value;
                                this.setHubAccess(hub);
                                let hubs = this._hubs.getValue();
                                if (hubs) {
                                    let previousHub = hubs.find(c => c.hubKey === hub.hubKey);
                                    if (previousHub) {
                                        Object.assign(previousHub, hub);
                                        this._hubs
                                            .next(hubs.sort((a, b) => a.name.toLocaleLowerCase() > b.name.toLocaleLowerCase() ? 1 : -1));
                                    } else {
                                        hubs.push(hub);
                                        this._hubs
                                            .next(hubs.sort((a, b) => a.name.toLocaleLowerCase() > b.name.toLocaleLowerCase() ? 1 : -1));
                                    }
                                }
                            }
                                break;
                            case eClientCommand.HubDelete: {
                                this.logger.LogC(() => `hubs-delete: ${data.value}`, eLogLevel.Debug);

                                let hubKeys: Array<number> = data.value;

                                let hubs = this._hubs.getValue();
                                if (hubs) {
                                    hubKeys.forEach(hubKey => {
                                        let previousHub = hubs.find(c => c.hubKey === hubKey);
                                        if (previousHub) {
                                            let index = hubs.indexOf(previousHub);
                                            hubs.splice(index, 1);
                                        }
                                    });
                                    this._hubs.next(hubs);
                                }
                            }
                                break;
                            case eClientCommand.Task:
                                this.logger.LogC(() => `task: ${data.value}`, eLogLevel.Debug);

                                const task = data.value;
                                this.addUpdateTask(task);
                                break;
                            case eClientCommand.FileDownload: {
                                this.logger.LogC(() => `file-download: ${data.value}`, eLogLevel.Debug);

                                const downloadData = data.value;

                                let formBody = {
                                    HubKey: downloadData.hubKey,
                                    SecurityToken: downloadData.securityToken,
                                    FileReference: downloadData.reference
                                }

                                this.downloadFile('/api/Remote/GetFileStream',
                                    formBody, downloadData.fileName, downloadData.contentType).then(() => {
                                        // if (currentTask) {
                                        //     currentTask.percentage = 100;
                                        //     currentTask.status = eManagedTaskStatus.Success;
                                        //     this.addUpdateTask(currentTask);
                                        // }
                                    }).catch(reason => {
                                        // currentTask.percentage = 0;
                                        // currentTask.status = eManagedTaskStatus.Error;
                                        // currentTask.message = reason;
                                        // this.addUpdateTask(currentTask);
                                        this._hubErrors.next(reason);
                                    });
                            }
                                break;
                            case eClientCommand.DownloadReady: {
                                this.logger.LogC(() => `download-ready ${data.value.url}`, eLogLevel.Debug);

                                if (data.value.url.startsWith('http://')) {
                                    this.modalComponent.confirm(
                                        'Download (NOT ENCRYPTED)',
                                        // tslint:disable-next-line:max-line-length
                                        'Your download is ready from a remote agent that is not configured for encrypted (https) downloads.  Would you still like to download the data?',
                                        'Download Now',
                                        'Discard'
                                    ).then((result) => {
                                        if (result) {
                                            window.open(data.value.url);
                                        }
                                    }).catch(reason => {
                                        this._hubErrors.next(reason);
                                    });
                                } else {
                                    let newWin = window.open(data.value.url);

                                    if (!newWin || newWin.closed || typeof newWin.closed === 'undefined') {
                                        this.modalComponent.confirm(
                                            'Download ready',
                                            'Your download is ready.  Click here to download directly.',
                                            'Download Now',
                                            'Discard'
                                        ).then((result) => {
                                            if (result) {
                                                window.open(data.value.url);
                                            }
                                        }).catch(reason => {
                                            this._hubErrors.next(reason);
                                        });
                                    }
                                }
                            }
                                break;
                        }
                    }
                });
            }
        });

        if (this._logErrorsSubscribe) { this._logErrorsSubscribe.unsubscribe(); }
        this._logErrorsSubscribe = this._logErrors.asObservable().subscribe((logMessage: Message) => {
            if (!logMessage) { return; }

            let headers = this.defaultHeaders(); // new HttpHeaders({ 'Content-Type': 'application/json' });

            const m = {
                message: logMessage.message,
                details: logMessage.exceptionDetails,
                context: 'global',
                url: this.router.url
            };

            this.logger.LogC(() =>
                `Global Error (this has been logged for further analysis)\n
                Message: ${logMessage.message}\n
                Details: ${logMessage.exceptionDetails}\n
                Url: ${this.router.url}\n
            `, eLogLevel.Error);

            const body = JSON.stringify(m);

            this.http.post<Message>(this.getApiUrl('/api/Account/LogError'),
                body,
                { withCredentials: true, headers: headers }).subscribe(() => {
                // doesn't matter what is returned.
            });
        });
    }

    // redirects a link click to either a route or an external web site based on the link format
    // the event should be from the click event (click)="getRoute(event)"
    getRoute(event) {
        let element = event.target;
        while (element) {
            let link: string = element.getAttribute('href');
      
            if (link) {
                if (link.endsWith('.md') && !link.startsWith('http')) {
                  this.router.navigate([], { relativeTo: this.route, queryParams: {'path': link} });
                } else if (link.startsWith('route:')) {
                  // don't allow link clicks unless logged in
                } else if (link.startsWith('unsafe:route:')) {
                    let route = link.substr(13);
                    this.router.navigate([route]);
                } else if (link.startsWith('#')) {
                    this.router.navigate(['.', link]);
                } else {
                    window.open(link);
                }
                event.preventDefault();
            }
      
            element = element.parentElement;
        }
      }

    // // converts a string from underscore notation to camel case
    // toCamelCase(str): string {
    //     return str.substring(0, 1).toLowerCase() +
    //         str.substring(1).replace(/_([a-z])(?=[a-z]|$)/g, function ($0, $1) { return $1.toUpperCase(); });
    // }

    // // this function adds alternative getters and setters for the camel cased counterparts
    // // to the runtime message's prototype (i.e. without having to register a custom class):
    // addCamelCase(type) {
    //     // type.name = this.toCamelCase(type.name);
    //     if (type.fieldsArray) {
    //         type.fieldsArray.forEach(field => {
    //             field.name = this.toCamelCase(field.name);
    //         });
    //     }

    //     // flatten oneofs array
    //     if (type.oneofsArray) {
    //         type.oneofsArray.forEach(oneof => {
    //             oneof.name = this.toCamelCase(oneof.name);
    //         });
    //     }
    //     return type;
    // }

    setHubAccess(hub: DexihHubAuth) {
        if (hub.dexihHubUsers.findIndex(c => c.permission === ePermission.Owner || c.permission === ePermission.User) >= 0) {
            hub['hubAccess'] = eHubAccess.User;
          } else if (hub.dexihHubUsers.findIndex(c => c.permission === ePermission.FullReader) >= 0) {
            hub['hubAccess'] = eHubAccess.ReadOnly;
          } else if (hub.sharedAccess === eSharedAccess.Public || hub.sharedAccess === eSharedAccess.Registered) {
            hub['hubAccess'] = eHubAccess.Public;
          }
    }

    // set available remoteAgents
    getRemoteAgentsObservable(): Observable<DexihRemoteAgent[]> {
        return this._remoteAgents.asObservable();
    }

    getRemoteAgentsPromise(): Promise<DexihRemoteAgent[]> {
        // return new Promise<DexihRemoteAgent[]>((resolve, reject) => {
        //   let subscription = this._remoteAgents.subscribe(
        //     result => {
        //         resolve(result);
        //         subscription.unsubscribe();
        //     },
        //     error => {
        //         reject(error);
        //     }
        //     );
        // });

        return this._remoteAgents.asObservable().pipe(take(1)).toPromise();
    }

    // gets an instance of a remote agent.
    getRemoteAgent(remoteAgentKey: number): DexihRemoteAgent {
        let remoteAgents = this._remoteAgents.value;
        if (remoteAgents) {
            return remoteAgents.find(c => c.remoteAgentKey === remoteAgentKey);
        } else {
            return null;
        }
    }

    getAuthErrorsObservable(): Observable<Array<Message>> {
        return this._hubErrors.asObservable();
    }

    getAuthErrors(): Array<Message> {
        return this._hubErrors.value;
    }

    public getUserObservable(): Observable<User> {
        return this._currentUser.asObservable();
    }

    public getUser(): User {
        if (this._currentUser) {
            return this._currentUser.value;
        } else {
            return null;
        }
    }

    public getDisplayHelp(): Observable<boolean> {
        return this._displayHelp.asObservable();
    }

    public setDisplayHelp(value: boolean) {
        this._displayHelp.next(value);
    }


    // if logged in returns the user, otherwise returns null.
    public isLoggedIn(): Promise<User> {
        if (!this._refreshUserAttempted) {
            return Promise.resolve(this._currentUser.value);
        } else {
            return this.refreshUser();
        }
    }

    public getWebSocketObservable() {
        return this.webSocketService?.getWebSocketObservable();
    }

    public getWebSocketStatusObservable() {
        return this.webSocketService?.getWebSocketStatusObservable();
    }

    public getWebSocketConnectionId() {
        return this.webSocketService?.getWebSocketConnectionId();
    }

    public JsonNoNulls(data) {
        return JSON.stringify(data, (key, value) => {
            // don't bother saving the null values.
            if (value === null) { return undefined; }

            switch (key) {
                case 'currentStatus':
                case 'entityStatus':
                case 'previousStatus':
                case 'runTime':
                    return undefined;
            }

            return value;
        });
    }

    public getApiUrl(url) {
        if (environment.apiUrl ) {
            return environment.apiUrl + url;
        } else {
            // adds path information if the app is installed under a subfolder.
            return this.location.prepareExternalUrl(url);
        }
    }

    // post form data
    public postForm(url, data, waitMessage = 'Please wait while the operation completes.', cancelToken = null): Promise<any> {
        // let headers = new HttpHeaders({
        //     // 'Authorization': `Bearer ${authToken}`,
        //     // 'Content-Type': 'multipart/form-data'
        // });

        const headers = this.defaultHeaders();

        return this.postBody(url, data, headers, waitMessage, cancelToken);
    }

    // posts a command that will be collected from a remoteAgent
    public postRemote<T>(url: string, data, remoteAgent: DexihActiveAgent,
        waitMessage = 'Please wait while the operation completes.', cancelToken: CancelToken = null): PromiseWithCancel<T> {
        let messageKey = this.addWaitMessage(waitMessage, null, cancelToken);

        if (!cancelToken) {
            cancelToken = new CancelToken();
        }

        let promise = new PromiseWithCancel<any>((resolve, reject) => {

            // post the command to the web server, and receive unique id that can call the remote agent.
            this.postRemoteGetKey(url, data, remoteAgent, cancelToken).then(key => {

                // call the remote agent with the unique id.
                this.getRemoteData<T>(remoteAgent, key, cancelToken, 'download').then(result => {
                    this.removeWaitMessage(messageKey);
                    resolve(result);
                }).catch(reason => {
                    this.removeWaitMessage(messageKey);
                    reject(reason);
                    // reject(`The request failed to the remote agent at ${url} for reason: ${reason}`);
                });
            }).catch(reason => {
                this.removeWaitMessage(messageKey);
                reject(reason);
            });
        });

        return promise;
    }

    public postRemoteGetKey(url: string, data, remoteAgent: DexihActiveAgent,
         cancelToken: CancelToken): PromiseWithCancel<string> {
        if (!cancelToken) {
            cancelToken = new CancelToken();
        }

        // let headers = new HttpHeaders({
        //     // 'Authorization': `Bearer ${authToken}`,
        //     'Content-Type': 'application/json'
        // });

        const headers = this.defaultHeaders();
       
        if (!cancelToken) {
           cancelToken = new CancelToken();
       }

        let promise = new PromiseWithCancel<any>((resolve, reject) => {
            if (!remoteAgent) {
                reject(new Message(false, 'The request failed, as there are no available remote agents.', null, null));
                return;
            }

            data.remoteAgentId = remoteAgent.instanceId;

            // get the best download route
            this.getBestDownloadUrl(remoteAgent, 0).then(downloadUrl => {
                data.downloadUrl = downloadUrl;

                let json = this.JsonNoNulls(data);

                // post command to api server, and return the unique key which can be
                // used to collect the results form the remote agent.
                const apiUrl = this.getApiUrl(url);
                this.http.post(apiUrl, json, { withCredentials: true, headers: headers, responseType: 'text' })
                .toPromise().then(key => {
                    resolve(key);
                }).catch(reason => {

                    // special return code, which means the remote agent has changed.
                    if (reason.status === 426) {

                        // the new agent is returned as part of the error.
                        remoteAgent = JSON.parse(reason.error);

                        // run the query again with the new remote agent.
                        this.getBestDownloadUrl(remoteAgent, 0).then(downloadUrl2 => {
                            localStorage.setItem(`hub-remote-agent-${data.hubKey}`, JSON.stringify(remoteAgent));
                            data.downloadUrl = downloadUrl2;
                            data.remoteAgentId = remoteAgent.instanceId;
                            json = this.JsonNoNulls(data);
                            this.http.post(apiUrl, json, { withCredentials: true, headers: headers, responseType: 'text' })
                            .toPromise().then(key => {
                                resolve(key);
                            }).catch(reason2 => reject(reason2));
                        }).catch(reason2 => reject(reason2));
                    } else {
                        reject(this.httpError(url, reason));
                    }
                });
            }).catch(reason => {
                reject(reason);
            });
        });

        return promise;
    }

    public postFormRemoteGetKey(url: string, formData: FormData, remoteAgent: DexihActiveAgent,
        cancelToken: CancelToken): PromiseWithCancel<string> {
       if (!cancelToken) {
           cancelToken = new CancelToken();
       }

       formData.append('remoteAgentId', remoteAgent.instanceId);

       let promise = new PromiseWithCancel<any>((resolve, reject) => {
           this.getBestDownloadUrl(remoteAgent, 0).then(downloadUrl => {
            //    if (downloadUrl && downloadUrl.downloadUrlType === eDownloadUrlType.Proxy) {
            //         formData.append('responseUrl', downloadUrl.url);
            //    }

            formData.append('downloadUrlJson', JSON.stringify(downloadUrl));

               this.http.post(this.getApiUrl(url), formData, { withCredentials: true, responseType: 'text' })
               .toPromise().then(key => {
                   resolve(key);
               }).catch(reason => {
                   reject(this.httpError(url, reason));
               });
           }).catch(reason => {
               reject(reason);
           });
       });

       return promise;
   }

    /// posts to api, and returns raw result.
    public postGetRaw(url: string, data, waitMessage = 'Please wait while the operation completes.',
      cancelToken: CancelToken): PromiseWithCancel<string> {
        let messageKey = this.addWaitMessage(waitMessage);
       if (!cancelToken) {
           cancelToken = new CancelToken();
       }

    //    let headers = new HttpHeaders({
    //        // 'Authorization': `Bearer ${authToken}`,
    //        'Content-Type': 'application/json'
    //    });

        const headers = this.defaultHeaders();

       let promise = new PromiseWithCancel<any>((resolve, reject) => {
            this.http.post(this.getApiUrl(url), this.JsonNoNulls(data), { withCredentials: true, headers: headers, responseType: 'text' })
            .toPromise().then(value => {
                this.removeWaitMessage(messageKey);
                resolve(value);
            }).catch(reason => {
                this.removeWaitMessage(messageKey);
                reject(this.httpError(url, reason));
            });
       });

       return promise;
   }

    // returns a url to upload files to
    public postRemoteUpload(url: string, data, remoteAgent: DexihActiveAgent,
        waitMessage = 'Please wait while the operation completes.', cancelToken: CancelToken):
            PromiseWithCancel<{url: string, key: string}> {
        let messageKey = this.addWaitMessage(waitMessage);
        if (!cancelToken) {
            cancelToken = new CancelToken();
        }

        // let headers = new HttpHeaders({
        //     // 'Authorization': `Bearer ${authToken}`,
        //     'Content-Type': 'application/json'
        // });

        const headers = this.defaultHeaders();

        data.remoteAgentId = remoteAgent.instanceId;

        let promise = new PromiseWithCancel<{url: string, key: string}>((resolve, reject) => {
            this.getBestDownloadUrl(remoteAgent, 0).then(downloadUrl => {
                data.downloadUrl = downloadUrl;
                // if (downloadUrl && downloadUrl.downloadUrlType === eDownloadUrlType.Proxy) {
                //     data.responseUrl = downloadUrl.url;
                // }

                this.http.post(this.getApiUrl(url), this.JsonNoNulls(data),
                { withCredentials: true, headers: headers, responseType: 'text' })
                .toPromise().then(key => {
                    this.removeWaitMessage(messageKey);
                    resolve({url: downloadUrl.url + '/upload/' + key, key});
                }).catch(reason => {
                    this.removeWaitMessage(messageKey);
                    reject(this.httpError(url, reason));
                });
            }).catch(reason => {
                this.removeWaitMessage(messageKey);
                reject(reason);
            });
        })

        return promise;
    }

    // gets the url to execute a remote command
    public async getRemoteUrl(activeAgent: DexihActiveAgent, key: string, command: 'upload' | 'download' | 'setRaw' = 'download',
        extra: string): Promise<string> {
        let baseUrl: string;

        if (!activeAgent) {
            let message = new Message(false, 'The data cannot be downloaded as there is no current remote agent.', null, null);
            return Promise.reject(message);
        } else if (activeAgent['currentDownloadUrl']) {
            baseUrl = activeAgent['currentDownloadUrl'].url;
        } else if (activeAgent.downloadUrls.length === 0) {
            let message = new Message(false, 'Current remote agent does not have data download/upload available.', null, null);
            return Promise.reject(message);
        } else {
            let download = await this.getBestDownloadUrl(activeAgent, 0);
            baseUrl = download.url;
        }

        let downloadUrl: string;
        downloadUrl = baseUrl + '/' + command + '/' + key;

        if (extra) {
            downloadUrl += '/' + extra;
        }

        return Promise.resolve(downloadUrl);
    }

    // gets the url to execute a remote command
    public async getRemoteData<T>(activeAgent: DexihActiveAgent, key: string, cancelToken: CancelToken, command: 'upload' | 'download' | 'setRaw' = 'download', extra = ''): Promise<T> {
        let downloadUrl = await this.getRemoteUrl(activeAgent, key, command, extra);
        return this.getFromExternal<T>(downloadUrl, null, cancelToken);
    }

    // post an object which is converted to json.
    public post<T>(url, data, waitMessage = 'Please wait while the operation completes.',
        cancelToken: CancelToken = null): PromiseWithCancel<T> {
        // let headers = new HttpHeaders({
        //     // 'Authorization': `Bearer ${authToken}`,
        //     'content-type': 'application/json'
        // });

        const headers = this.defaultHeaders();

        let body: string;
        if (data) {
            data.clientConnectionId = this.getWebSocketConnectionId()
            body = this.JsonNoNulls(data);
        } else {
            body = '{}';
        }

        return this.postBody(url, body, headers, waitMessage, cancelToken);
    }

    // posts data to the api.
    private postBody<T>(url, body, headers, waitMessage = 'Please wait while the operation completes.',
        cancelToken: CancelToken): PromiseWithCancel<any> {

        if (!cancelToken) {
            cancelToken = new CancelToken();
        }

        let promise = new PromiseWithCancel<T>((resolve, reject) => {
            let messageKey = this.addWaitMessage(waitMessage);
            this.logger.LogC(() => `post url: ${url}, data: ${body}.`, eLogLevel.Debug);

            let subscription = this.http.post<T>(this.getApiUrl(url), body, { withCredentials: true, headers: headers }).subscribe(
                result => {
                    this.removeWaitMessage(messageKey);
                    resolve(result);
                }, error => {
                    this.removeWaitMessage(messageKey);
                    reject(this.httpError(url, error));
                }, () => {
                    this.removeWaitMessage(messageKey);
                });

            cancelToken.cancelMethod = () => {
                subscription.unsubscribe();
                reject(new Message(false, 'Cancelled', null, null));
            }
        }, cancelToken);

        return promise;
    }

    // get from the api
    public getFromApi<T>(url, waitMessage = 'Please wait while the operation completes.', cancelToken: CancelToken):
        PromiseWithCancel<T> {
        let messageKey: string = null;
        if (waitMessage) {
            messageKey = this.addWaitMessage(waitMessage);
        }
        let baseUrl = this.getApiUrl(url);

        if (!cancelToken) {
            cancelToken = new CancelToken();
        }

        let promise = new PromiseWithCancel<T>((resolve, reject) => {
            let subscription = this.http.get<T>(baseUrl, {withCredentials: true}).subscribe(result => {
                this.removeWaitMessage(messageKey);
                resolve(result);
            }, error => {
                this.removeWaitMessage(messageKey);
                reject(this.httpError(url, error));
            }, () => {
                cancelToken.cancelMethod = null;
            });

            cancelToken.cancelMethod = () => {
                subscription.unsubscribe();
                reject(new Message(false, 'Cancelled', null, null));
            }
        }, cancelToken);

        return promise;
    }

    // calls an external url (mostly used for remote agent calls).
    public getFromExternal<T>(url, waitMessage = 'Please wait while the operation completes.', cancelToken: CancelToken):
    PromiseWithCancel<T> {
        let messageKey: string = null;
        if (waitMessage) {
            messageKey = this.addWaitMessage(waitMessage);
        }

        if (!cancelToken) {
            cancelToken = new CancelToken();
        }

        let promise = new PromiseWithCancel<T>((resolve, reject) => {
            let subscription = this.http.get<T>(url).subscribe(result => {
                this.removeWaitMessage(messageKey);
                resolve(result);
            }, error => {
                this.removeWaitMessage(messageKey);
                reject(this.httpError(url, error));
            }, () => {
                cancelToken.cancelMethod = null;
            });

            cancelToken.cancelMethod = () => {
                subscription.unsubscribe();
                reject(new Message(false, 'Cancelled', null, null));
            }
        }, cancelToken);

        return promise;
    }

    private httpError(url: string, error: any): Message {
        let message = new Message(false, 'Http Error', `Error calling ${url}.`, null);
        if (error.error) {
            if (error.error.error) {
                message.message = error.error.error.message;
                message.exceptionDetails += error.error.error.stack;
            } else {
                if (error.status === 400) {
                    if (typeof(error.error) === 'string') {
                        message = JSON.parse(error.error);
                    } else {
                        message = error.error;
                    }
                } else {
                    message.message = error.error;
                }
            }
        } else {
            this.logger.LogC(() =>
                `post warning error:${error}`, eLogLevel.Error);
            if (error.status === 504) {
                message.message = 'The Integration Hub API could not be reached.';
            }
            message.message = error.message;
        }

        return message;
    }

    public postConfirm<T>(url, data, waitMessage = 'Please wait while the operation completes.',
        confirmMessage = 'Please confirm action?', cancelToken = null): Promise<T> {
        return new Promise<T>((resolve, reject) => {
            this.confirmDialog('Please confirm?', confirmMessage)
            .then(result => {
                if (result) {
                    resolve(this.post<T>(url, data, waitMessage, cancelToken));
                } else {
                    reject();
                }
            }).catch(() => { reject(); });
        });
    }

    

    public upload(file: FileHandler): Promise<Message> {
        return new Promise<Message>((resolve, reject) => {

            if (!file.file) {
                return new Message(false, 'The specified file was not found.', '', '');
            }

            // create a new multipart-form for every file
            const formData: FormData = new FormData();
            formData.append('file', file.file, file.file.name);


            // create a http-post request and pass the form
            // tell it to report the upload progress
            const req = new HttpRequest('POST', file.url, formData, {
                // withCredentials: true,
                // headers: headers,
                reportProgress: true
            });

            file.progress = 0;
            file.status = eFileStatus.Uploading;

            // send the http-request and subscribe for progress-updates
            file.httpSubscription = this.http.request(req).subscribe(event => {
                if (event.type === HttpEventType.UploadProgress) {

                    // calculate the progress percentage
                    const percentDone = Math.round(100 * event.loaded / event.total);

                    // pass the percentage into the progress-stream
                    file.status = eFileStatus.Uploading;
                    file.progress = percentDone;
                } else if (event instanceof HttpResponse) {
                    if (event.body) {
                        let result = <Message>event.body;
                        if (result.success) {
                            // Close the progress-stream if we get an answer form the API
                            // The upload is complete
                            file.status = eFileStatus.Complete;
                            file.progress = 100;
                            resolve(result);
                        } else {
                            file.status = eFileStatus.Error;
                            file.message = result.message;
                            file.progress = 0;
                            reject(result);
                        }
                    } else {
                        // Close the progress-stream if we get an answer form the API
                        // The upload is complete
                        file.status = eFileStatus.Complete;
                        file.progress = 100;
                        resolve(new Message(true, 'File upload successful.', '', ''));
                    }
                }
            }, error => {
                let message: Message;
                if (error.error) {
                    message = error.error;
                } else {
                    message = new Message(false, error.message, error, '');
                }

                file.status = eFileStatus.Error;
                file.message = message.message;
                file.progress = 0;

                reject(message);
            });
        });

    }

    // converts columns returned by preview into columns which can be displayed on <d-table>
    public constructDataTableColumns(columns: Array<any>): Array<any> {
        let dtColumns = [];

        if (columns) {
            columns.forEach((c, index) => {
                let name = c.logicalName ? c.logicalName : c.name;

                switch (c.dataType) {
                    case eTypeCode.DateTime:
                        dtColumns.push({ name: index, title: name, format: 'DateTime'});
                        break;
                    case eTypeCode.Date:
                        dtColumns.push({ name: index, title: name, format: 'Date'});
                        break;
                    case eTypeCode.Boolean:
                        dtColumns.push({ name: index, title: name, format: 'Boolean'});
                        break;
                    case eTypeCode.Json:
                        dtColumns.push({ name: index, title: name, format: 'Json'});
                        break;
                    case eTypeCode.Xml:
                        dtColumns.push({ name: index, title: name, format: 'Code'});
                        break;
                    case eTypeCode.CharArray:
                        dtColumns.push({name: index, title: name, format: 'CharArray'});
                        break;
                    case eTypeCode.Node:
                        dtColumns.push({name: index, title: name, format: 'Node',
                            childColumns: this.constructDataTableColumns(c.childColumns) });
                        break;
                    default:
                        dtColumns.push({ name: index, title: name, format: ''});
                }
            });
        }

        return dtColumns;
    }

    // this needs to be set by a top level component so the dialog has a container to load into.
    setDialogDefaultContainer(modalComponent: DModalComponent) {
        // this.overlay.defaultViewContainer = defaultViewContainer;
        this.modalComponent = modalComponent;
    }

    confirmDialog(title: string, body: string): Promise<boolean> {
        return this.modalComponent.confirm(title, body, 'Confirm', 'Cancel');
    }

    promptDialog(title: string, body: string, inputPrompt = '', inputValue = ''): Promise<string> {
        return this.modalComponent.prompt(title, body, inputPrompt, inputValue);
    }

    informationDialog(title: string, body: any, details: string = null): Promise<boolean> {
        return this.modalComponent.information(title, body, 'Close', details);
    }


    public getLoginProviders(): Promise<Array<UserLoginInfo>> {
        return this.post<Array<UserLoginInfo>>('/api/Account/ExternalLogins', null, 'Getting external login information.')
    }

    // download a file from the api.
    public downloadFile(url, data, name, type): Promise<boolean> {
        return new Promise<boolean>((resolve, reject) => {
            // let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
            const headers = this.defaultHeaders();

            let body = this.JsonNoNulls(data);

            this.http.post(this.getApiUrl(url), body, { headers: headers, responseType: 'blob' })
                .subscribe(returnData => {
                    // let result: any = returnData;
                    let blob = new Blob([returnData], { type: type });
                    // var url = window.URL.createObjectURL(blob);
                    FileSaver.saveAs(blob, name);
                    resolve(true);
                }, error => {
                    if (error.error) {
                        let reader = new FileReader();
                        reader.readAsText(error.error);
                        reader.onload = function () {
                            let message = JSON.parse(reader.result.toString());
                            reject(message);
                        }
                    } else {
                        reject(error);
                    }
                });
        });
    }


    refreshUser(force = false): Promise<User> {
        if (!force && this._currentUser.value) {
            return Promise.resolve(this._currentUser.value);
        }

        if (this._refreshUserPromise) {
            return this._refreshUserPromise;
        }

        this._refreshUserAttempted = true;
        this._refreshUserPromise = new Promise<User>((resolve) => {
            this.post<User>('/api/Account/GetUser', null, 'Refreshing user details...').then(result => {
                let previousUser = this._currentUser.value;
                if (!previousUser || (
                    result.email !== previousUser.email &&
                    result.firstName !== previousUser.firstName &&
                    result.lastName !== previousUser.lastName &&
                    result.isAdmin !== previousUser.isAdmin &&
                    result.isInvited !== previousUser.isInvited &&
                    result.rememberMe !== previousUser.rememberMe &&
                    result.subscription !== previousUser.subscription &&
                    result.terms !== previousUser.terms
                )) {
                    this._currentUser.next(result);
                }
                resolve(result);
                this._refreshUserPromise = null;
                // this._refreshUserAttempted = false;
            }).catch(reason => {
                this.logger.LogC(() => `refreshUser error:${reason.message}`, eLogLevel.Error);

                this._currentUser.next(null);
                this._hubErrors.next(reason);
                resolve(null);
                this._refreshUserPromise = null;
                // this._refreshUserAttempted = false;
                // reject(reason);
            });
        });

        return this._refreshUserPromise;
    }

    login(user: User): Promise<User> {
        return new Promise<User>((resolve, reject) => {
            // call the login service, followed by get-user.
            // The second call is to ensure the anti-forgery headers are updated when the user credentials have changed.
            this.post('/api/Account/Login',
                {email: user.email, password: user.password, rememberMe: user.rememberMe}, 'Authenticating...').then(() => {
                return this.refreshUser().then(userResult => {
                    resolve(userResult);
                });
            }).catch(reason => {
                this.logger.LogC(() => `login error:${reason.message}`, eLogLevel.Error);

                this._currentUser.next(null);
                this._hubErrors.next(reason);
                reject(reason);
            });
        });
    }

    googleLoadScript(): Promise<boolean> {
        // node: safari seems to require script local
        // original script at https://apis.google.com/js/api.js
        // return this.loadScript('GOOGLE', '/assets/js/google-api.js');
        return this.loadScript('GOOGLE', 'https://apis.google.com/js/api.js', true);
    }

    googleLogin(forceLogin: boolean): Promise<User> {
        return new Promise<User>((resolve, reject) => {
            this.getGlobalCachePromise().then(() => {
            this.googleSignIn(forceLogin).then(externalLogin => {
                let loginResult = this.identityLogin(eLoginProvider.Google, externalLogin.providerKey, externalLogin.authenticationToken);
                resolve(loginResult);
            }).catch(() => {
                reject('Error with google login.');
            });
        }).catch(reason => { reject(reason); });
        });
    }

    googleEnable(): Promise<ExternalLogin> {
        let messageKey: string = null;
        return new Promise<ExternalLogin>((resolve, reject) => {
            try {
                this.getGlobalCachePromise().then(cache => {
                messageKey = this.addWaitMessage('Loading google sign-in scripts...');
                this.googleLoadScript().then(() => {
                    gapi.load('auth2', () => {
                        gapi.auth2.init({
                            ...{ scope: 'email', prompt: 'select_account' },
                            client_id: cache.googleClientId
                        }).then((auth2) => {
                            let login: ExternalLogin = null;
                            if (auth2.isSignedIn.get()) {
                                let user = auth2.currentUser.get();
                                login = new ExternalLogin();
                                let profile = user.getBasicProfile();
                                login.email = profile.getEmail();
                                login.firstName = profile.getGivenName();
                                login.lastName = profile.getFamilyName();
                                login.providerKey = profile.Eea;
                                login.authenticationToken = user.getAuthResponse(true).id_token;
                                resolve(login);
                            } else {
                                resolve(null);
                            }
                        });
                    });
                });
            }).catch(reason => { reject(reason); });

            } catch (e) {
                this.logger.LogC(() => `login error:${e.message}`, eLogLevel.Error);
                this._hubErrors.next(e);
                reject(e);
            } finally {
                if (messageKey) { this.removeWaitMessage(messageKey); }
            }
        });
    }

    googleSignIn(forceLogin: boolean): Promise<ExternalLogin> {
        return new Promise<ExternalLogin>((resolve, reject) => {
            try {
                this.getGlobalCachePromise().then(cache => {
                this.googleLoadScript().then(() => {
                    gapi.load('auth2', () => {
                        gapi.auth2.init({
                            ...{ scope: 'email', prompt: 'select_account' },
                            client_id: cache.googleClientId
                        }).then((auth2) => {
                            function getLoginDetails(): ExternalLogin {
                                let login = new ExternalLogin();
                                let profile = auth2.currentUser.get().getBasicProfile();
                                let idToken = auth2.currentUser.get().getAuthResponse(true).id_token;
                                login.email = profile.getEmail();
                                login.firstName = profile.getGivenName();
                                login.lastName = profile.getFamilyName();
                                login.authenticationToken = idToken;
                                login.providerKey = profile.Eea;
                                return login;
                            }
                            if (!forceLogin && auth2.isSignedIn.get()) {
                                let result = getLoginDetails();
                                resolve(result);
                            } else {
                                auth2.signIn().then(() => {
                                    let result = getLoginDetails();
                                    resolve(result);
                                }).catch(reason => {
                                    reject(reason.error);
                                });
                            }
                        });
                    });
                }).catch(reason => {
                    reject(reason);
                });
            }).catch(reason => { reject(reason); });

            } catch (e) {
                this.logger.LogC(() => `login error:${e.message}`, eLogLevel.Error);
                this._currentUser.next(null);
                this._hubErrors.next(e);
                reject(e);
            }
        });
    }

    googleSignOut(): Promise<boolean> {
        return new Promise<boolean>((resolve, reject) => {
            try {
                this.googleLoadScript().then(() => {
                    let auth2 = gapi.auth2.getAuthInstance();
                    if (auth2) {
                        auth2.signOut().then(() => {
                            resolve(true);
                        });
                    } else {
                        resolve(false);
                    }
                });
            } catch (e) {
                this.logger.LogC(() => `google sign out error:${e.message}`, eLogLevel.Error);
                reject(e);
            }
        });
    }

    microsoftApp(clientId: string): UserAgentApplication {
        const config = {
            auth: {
                clientId: clientId,
                authority: 'https://login.microsoftonline.com/common/',
                redirectUri: location.origin + '/api/Account/MicrosoftRedirect'
            },
            cache: {
                cacheLocation: <CacheLocation>'sessionStorage',
                storeAuthStateInCookie: false
            }
        };

        let userAgentApplication = new UserAgentApplication(config);

        userAgentApplication.handleRedirectCallback((error, errorDesc) => {
            if (error) {
                console.log(error + ':' + errorDesc);
            }
        });

        return userAgentApplication;
    }


    microsoftEnable(): Promise<ExternalLogin> {
        let messageKey: string = null;
        return new Promise<ExternalLogin>(async (resolve, reject) => {
            try {
                this.getGlobalCachePromise().then(cache => {

                messageKey = this.addWaitMessage('Loading microsoft sign-in...');

                let userAgentApplication = this.microsoftApp(cache.microsoftClientId);
                let user = userAgentApplication.getAccount();

                if (user) {
                    let login = new ExternalLogin();

                    let userName = user.name;
                    let userNames = userName.split(' ');

                    login.email = user.userName;
                    login.firstName = userNames[0];
                    login.lastName = userNames.length > 1 ? userNames[1] : '';
                    login.providerKey = user.accountIdentifier;

                    let request = {
                        scopes: ['user.read'],
                        // authority: 'https://login.microsoftonline.com/common/',
                    }
                    userAgentApplication.acquireTokenSilent(request).then(authResponse => {
                        login.authenticationToken = authResponse.accessToken;
                        resolve(login);
                    }).catch(reason => {
                        reject(reason);
                    });

                    this.removeWaitMessage(messageKey);
                } else {
                    resolve(null);
                    this.removeWaitMessage(messageKey);
                }
            }).catch(reason => { reject(reason); });


            } catch (e) {
                if (messageKey) { this.removeWaitMessage(messageKey); }
                this.logger.LogC(() => `login error:${e.message}`, eLogLevel.Error);

                this._currentUser.next(null);
                this._hubErrors.next(e);
                reject(e);
            }
        });
    }

    microsoftLogin(forceLogin: boolean): Promise<User> {
        return new Promise<User>((resolve, reject) => {
            this.microsoftSignIn(forceLogin).then(externalLogin => {
                let loginResult = this.identityLogin(eLoginProvider.Microsoft,
                    externalLogin.providerKey, externalLogin.authenticationToken);
                resolve(loginResult);
            }).catch((reason) => {
                reject(reason);
            });

        });
    }

    microsoftSignIn(forceLogin: boolean): Promise<ExternalLogin> {
        let messageKey: string = null;
        return new Promise<ExternalLogin>(async (resolve, reject) => {
            try {
                messageKey = this.addWaitMessage('Loading microsoft sign-in...');

                this.getGlobalCachePromise().then(cache => {

                let userAgentApplication = this.microsoftApp(cache.microsoftClientId);
                let tokenPromise: Promise<AuthResponse>;
                // let user = userAgentApplication.getUser();

                if (forceLogin) {
                    let request = {
                        scopes: ['user.read'],
                        // authority: 'https://login.microsoftonline.com/common/',
                        prompt: 'select_account'
                    }
                    tokenPromise = userAgentApplication.loginPopup(request);
                } else {
                    let user = userAgentApplication.getAccount();
                    let request = {
                        scopes: ['user.read'],
                        // authority: 'https://login.microsoftonline.com/common/',
                    }
                    if (user) {
                        tokenPromise = userAgentApplication.acquireTokenSilent(request);
                    } else {
                        tokenPromise = userAgentApplication.loginPopup(request);
                    }
                }

                tokenPromise.then(authResponse => {
                    this.removeWaitMessage(messageKey);
                    if (authResponse) {
                        if (!authResponse.accessToken) {
                            let request = {
                                scopes: ['user.read'],
                                // authority: 'https://login.microsoftonline.com/common/',
                            }

                            userAgentApplication.acquireTokenSilent(request).then(result => {
                                resolve(this.microsoftAuthResponseToLogin(result));
                            }).catch(reason => {
                                reject(reason);
                            });
                        } else {
                            resolve(this.microsoftAuthResponseToLogin(authResponse));
                        }
                    } else {
                        reject(new Message(false, 'Microsoft login failed.', null, null));
                    }
                }).catch(reason => {
                    this.removeWaitMessage(messageKey);
                    reject(reason);
                }).catch(reason => { reject(reason); });
            });

            } catch (e) {
                if (messageKey) { this.removeWaitMessage(messageKey); }
                this.logger.LogC(() => `login error:${e.message}`, eLogLevel.Error);

                this._currentUser.next(null);
                this._hubErrors.next(e);
                reject(e);
            }
        });
    }

    private microsoftAuthResponseToLogin(authResponse: AuthResponse): ExternalLogin {
        let user = authResponse.account;
        let login = new ExternalLogin();
        let userName = user.name;
        let userNames = userName.split(' ');
        login.email = user.userName;
        login.firstName = userNames[0];
        login.lastName = userNames.length > 1 ? userNames[1] : '';
        login.authenticationToken = authResponse.accessToken;
        login.providerKey = user.accountIdentifier;
        return login;
    }


    microsoftSignOut(): Promise<boolean> {
        return new Promise<boolean>((resolve, reject) => {
            try {
                this.getGlobalCachePromise().then(cache => {
                let userAgentApplication = this.microsoftApp(cache.microsoftClientId)
                userAgentApplication.logout();
                resolve(true);
                }).catch(reason => { reject(reason); });
            } catch (e) {
                this.logger.LogC(() => `microsoft sign out error:${e.message}`, eLogLevel.Error);
                reject(e);
            }
        });
    }



    // called for external identity login.
    identityLogin(provider: eLoginProvider, providerKey: string, authenticationToken: string): Promise<User> {
        return new Promise<User>((resolve, reject) => {
            // call the callback api.
            this.post('/api/Account/ExternalLogin', {
                provider: provider,
                providerKey: providerKey,
                authenticationToken: authenticationToken
            }, 'Validating external login...')
                .then(() => {
                    return this.refreshUser().then(userResult => {
                        resolve(userResult);
                    });
                }).catch(reason => {
                    this.logger.LogC(() => `externalLoginCallBack error:${reason.message}`, eLogLevel.Error);
                    this._hubErrors.next(reason);
                    reject(reason);
                });
        });
    }

    loadScript(id: string, src: string, isExternal = false): Promise<boolean> {
        return new Promise<boolean>((resolve) => {
            // if script already loaded, do nothing
            let script = document.getElementById(id)
            if (script) {
                resolve(true);
                return;
            }

            // add the script to the page.
            let newScript = document.createElement('script');
            newScript.id = id;
            newScript.type = 'text/javascript';
            newScript.async = true;
            newScript.src = isExternal ? src : this.location.prepareExternalUrl(src);
            newScript.onload = (() => { resolve(true); });
            document.head.appendChild(newScript);
        });
    }

    // redirects browser to the requested login provider.
    externalLogin(provider: eLoginProvider): Promise<ExternalLoginResult> {
        return new Promise<ExternalLoginResult>((resolve) => {
            // attempt to receive external login details (this will save a leaving the page)
            this.externalLoginCallback().then(loginResult => {
                if (loginResult.isSignedIn) {
                    return this.refreshUser().then(() => {
                        resolve(loginResult);
                    });
                } else {
                    resolve(loginResult);
                }

            }).catch(reason => {
                this.logger.LogC(() => `externalLogin error:${reason.message}`, eLogLevel.Error);
                window.location.href = '/api/Account/ExternalLogin?provider=' + provider + '&returnUrl=/auth/login';
            });
        });
    }

    // redirects browser to the requested login provider.
    addExternalLogin(provider: eLoginProvider, providerKey: string, authenticationToken: string): Promise<ExternalLoginResult> {
        return this.post<ExternalLoginResult>('/api/Account/AddExternalLogin', {
            provider: provider,
            providerKey: providerKey,
            authenticationToken: authenticationToken
        }, 'Adding an external login...')
    }

    // redirects browser to the requested login provider.
    removeExternalLogin(provider: eLoginProvider, providerKey: string, ): Promise<boolean> {
        return this.postConfirm<boolean>('/api/Account/RemoveExternalLogin', {
            provider: provider,
            providerKey: providerKey
        }, 'Removing external login...',
        'Are you sure you want to remove the login ' +
        provider + ' from your available logins.  When removed you will not be able to login via ' +
        provider + ' provider.');
    }

    // called when provider is redirected back.
    externalLoginCallback(): Promise<ExternalLoginResult> {
        return this.post<ExternalLoginResult>('/api/Account/ExternalLoginCallback', null, 'Completing external login...')
    }

    // register an external login
    externalLoginConfirmation(user: User): Promise<User> {
        return this.post<User>('/api/Account/ExternalLoginConfirmation', user, 'Confirming external login...');
    }


    register(user: User): Promise<User> {
        return this.post<User>('/api/Account/Register', user, 'Registering user...');
    }

    confirmEmail(email: string, verificationCode: string): Promise<User> {
        let user = new User(email, null, null, false);
        user.code = verificationCode;

        return this.post<User>('/api/Account/ConfirmEmail', user, 'Confirming email...');
    }

    resendConfirmationEmail(email: string): Promise<boolean> {
        let user = new User(email, null, null, false);
        return this.post<boolean>('/api/Account/ResendConfirmationEmail', user, 'Resending confirmation email...');
    }

    forgotPassword(email: string): Promise<boolean> {
        let user = new User(email, null, null, false);
        return this.post<boolean>('/api/Account/ForgotPassword', user, 'Sending forgotten password email...')
    }

    resetPassword(email: string, verificationCode: string, password: string): Promise<boolean> {
        let user = new User(email, email, password, false);
        user.code = verificationCode;

        return new Promise<boolean>((resolve, reject) => {
            // call the login service to reset the password.
            this.post('/api/Account/ResetPassword', user, 'Resetting password...').then(() => {
                // after resetting password, we can log the user in.
                return this.refreshUser().then(() => {
                    resolve(true);
                });
            }).catch(reason => {
                this.logger.LogC(() => `resetPassword error:${reason.message}`, eLogLevel.Error);

                this._hubErrors.next(reason);
                reject(reason);
            });
        });
    }

    changePassword(password: string, newPassword: string): Promise<boolean> {
        return new Promise<boolean>((resolve, reject) => {
            // call the login service to reset the password.
            this.post('/api/Account/ChangePassword', {
                password: password,
                newPassword: newPassword
            }, 'Changing password...').then(() => {
                resolve(true);
            }).catch(reason => {
                this.logger.LogC(() => `changePassword error:${reason.message}`, eLogLevel.Error);
                this._hubErrors.next(reason);
                reject(reason);
            });
        });
    }

    updateUserDetails(user: User): Promise<boolean> {
        return new Promise<boolean>((resolve, reject) => {
            // call the login service to reset the password.
            this.post('/api/Account/UpdateDetails',
                {
                    userName: user.userName,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    subscription: user.subscription,
                    notifyPrivateMessage: user.notifyPrivateMessage,
                    notifySupportMessage: user.notifySupportMessage
                }, 'Updating user details...').then(() => {
                    this.refreshUser();
                    resolve(true);
                }).catch(reason => {
                    this.logger.LogC(() => `updateUserDetails error:${reason.message}`, eLogLevel.Error);

                    this._hubErrors.next(reason);
                    reject(reason);
                });
        });
    }

    logout(): Promise<boolean> {
        return new Promise<boolean>((resolve, reject) => {
            this.postConfirm<boolean>('/api/Account/Logout', null, 'Logging out current user...',
            'Proceed to logout?  You can improve your security further after logging out by closing this opened browser').then(() => {
                    this._currentUser.next(null);
                    this._hubs.next(null);

                    // this refresh is just to reset the XSRF token
                    // now that the user is logged out.
                    this.refreshUser().then(() => {
                        this.router.navigate(['/auth/login']);
                    });
                }).catch(reason => {
                    if (reason) {
                        this.logger.LogC(() => `logout error:${reason.message}`, eLogLevel.Error);

                        this._hubErrors.next(reason);
                        reject(reason);
                    }
                });
        });
    }

    public pingRemoteAgents() {
        if (!this.updateRemoteAgentsFlag) {
            this.updateRemoteAgentsFlag = true;
            // update the remote agents for this hub.
            let connectionId = this.getWebSocketConnectionId();
            if (!connectionId) {
                this.updateRemoteAgentsFlag = false;
                return;
            }

            this.post('/api/Account/PingRemoteAgents', { connectionId: connectionId }, null)
                .then(result => {
                    let currentAgents = this._remoteAgents.getValue();

                    let newAgents = <DexihRemoteAgent[]>result;

                    if (currentAgents == null) {
                        currentAgents = newAgents;
                        newAgents.map(c => c['activeAgents'] = []);
                    } else {

                        newAgents.forEach(newAgent => {
                            let currentAgent = currentAgents.find(c => c.remoteAgentKey === newAgent.remoteAgentKey);
                            if (currentAgent) {
                                let activeAgents = currentAgent['activeAgents'];
                                Object.assign(currentAgent, newAgent);
                                currentAgent['activeAgents'] = activeAgents;
                            } else {
                                newAgent['activeAgents'] = [];
                                currentAgents.push(newAgent);
                            }
                        });

                        for (let i = currentAgents.length - 1; i >= 0; i--) {
                            if (newAgents.findIndex(c => c.remoteAgentKey === currentAgents[i].remoteAgentKey) < 0) {
                                currentAgents.splice(i, 1);
                            }
                        }
                    }
                    this._remoteAgents.next(currentAgents);

                }).catch(reason => {
                    this.logger.LogC(() => `updateRemoteAgents, error: ${reason.message}.`, eLogLevel.Error);
                    this._remoteAgents.next(null);
                }).then(() => this.updateRemoteAgentsFlag = false);
        }
    }

    saveRemoteAgent(remoteAgent: DexihRemoteAgent): Promise<boolean> {
        return this.post<boolean>('/api/Account/SaveRemoteAgent', remoteAgent, 'Saving remote agent details...');
    }

    // scans each available download url in order, to find one this client can access.
    public getBestDownloadUrl(activeAgent: DexihActiveAgent, position: number): Promise<DownloadUrl> {
        return new Promise<DownloadUrl>((resolve, reject) => {
            if (position >= activeAgent.downloadUrls.length) {
                let message = new Message(false, 'The client cannot connect to any of the data download/upload endpoints.', null, null);
                reject(message);
                return;
            }

            // if there is only one location, then save a ping test.
            if (activeAgent.downloadUrls.length === 1) {
                resolve(activeAgent.downloadUrls[0]);
                return;
            }

            if (activeAgent['currentDownloadUrl']) {
                resolve(activeAgent['currentDownloadUrl']);
                return;
            }

            let url = activeAgent.downloadUrls[position].url + '/ping';

            let messageKey = this.addWaitMessage('Testing remote agent connectivity...');

            this.http.get(url).pipe(timeout(5000)).subscribe(() => {
                activeAgent['currentDownloadUrl'] = activeAgent.downloadUrls[position];
                this.removeWaitMessage(messageKey);
                resolve(activeAgent['currentDownloadUrl']);
            }, () => {
                this.removeWaitMessage(messageKey);
                this.getBestDownloadUrl(activeAgent, position + 1).then(result => {
                    resolve(result);
                }).catch(msg => {
                    reject(msg);
                });
            });
        });
    }

    refreshHubs(): void {
        this.post<DexihHubAuth[]>('/api/Account/GetAuthorizedHubs', null, 'Getting authorized hubs...').then(result => {
            let hubs = result.sort((a, b) => a.name.toLocaleLowerCase() > b.name.toLocaleLowerCase() ? 1 : -1);
            hubs.forEach(hub => {
                this.setHubAccess(hub);
            });
            this._hubs.next(hubs);
        }).catch(reason => {
            this.logger.LogC(() => `refreshHubs error:${reason.message}`, eLogLevel.Error);

            this._hubErrors.next(reason);
            this._hubs.next(null);
        });
    }

    getHubsObservable(): Observable<Array<DexihHubAuth>> {
        return this._hubs.asObservable();
    }

    getHubs(): Array<DexihHubAuth> {
        return this._hubs.value;
    }

    saveHub(hub: DexihHubAuth): Promise<DexihHubAuth> {
        return this.post<DexihHubAuth>('/api/Account/SaveHub', hub, 'Saving hub details...');
    }

    saveIssue(issue: DexihIssue): Promise<DexihIssue> {
        return this.post<DexihIssue>('/api/Account/SaveIssue', issue, 'Creating issue ... ');
    }

    getIssue(issueKey: number, cancelToken: CancelToken): Promise<DexihIssue> {
        return this.post<DexihIssue>('/api/Account/GetIssue', {issueKey: issueKey}, 'Getting issues ... ', cancelToken);
    }

    getIssues(cancelToken: CancelToken): Promise<DexihIssue[]> {
        return this.post<DexihIssue[]>('/api/Account/GetIssues', { }, 'Getting issues ... ', cancelToken);
    }

    addIssueComment(issueKey: number, comment: string) {
        return this.post<DexihIssue>('/api/Account/AddIssueComment', {issueKey: issueKey, comment: comment}, 'Getting issues ... ');
    }

    hubNameExists(hubKey: number, hubName: string): boolean {
        if (this._hubs.value) {
            return this._hubs.value.findIndex(c => c.name === hubName && c.hubKey !== hubKey && c.isValid) >= 0 ? true : false;
        } else {
            return false;
        }
    }

    deleteHubs(hubs: Array<DexihHubAuth>): Promise<boolean> {
        let hubNames = hubs.map(c => c.name).join(', ');
        return this.postConfirm<boolean>('/api/Account/DeleteHubs', {
            hubKeys: hubs.map(c => c.hubKey)
        }, 'Deleting hubs...',
        'This action will delete the following hubs, and any related metadata.<p></p>' + hubNames + '<p></p>Are you sure?');
    }

    removeUserTokens(remoteAgentKeys: Array<number>): Promise<boolean> {
        let connectionId = this.getWebSocketConnectionId();

        return this.postConfirm<boolean>('/api/Account/RemoveRemoteAgents', { connectionId, remoteAgentKeys }, 'Removing remote agents...',
        'This action will revoke the selected tokens.  Remote Agents using these tokens will be immediately logged off.<p></p>' +
                '<p></p>Are you sure?');
    }

    refreshRemoteAgentToken(remoteAgentKey: number): Promise<RemoteToken> {
        let connectionId = this.getWebSocketConnectionId();

        return this.postConfirm<RemoteToken>('/api/Account/RefreshRemoteAgentToken', { connectionId, remoteAgentKey },
        'Refreshing remote agent token...',
         // tslint:disable-next-line:max-line-length
         'This action will revoke the selected token, and create a new one.  Remote agents using these tokens will be immediately logged off.<p></p>' +
         '<p></p>Are you sure?');
    }

    createRemoteAgent(): Promise<RemoteToken> {
        return this.post<RemoteToken>('/api/Account/CreateRemoteAgent', {
        }, 'Creating remote agent...');
    }


    getRandomEncryptionKey(): Promise<string> {
        return this.postGetRaw('/api/Account/GetRandomEncryptionKey', null, 'Getting random key...', null)
    }


    getUserToken(): Promise<{ remoteAgentId: string, userToken: string }> {
        return this.post<{ remoteAgentId: string, userToken: string }>('/api/Account/CreateRemoteAgent', {}, 'Creating remote agent...')
    }

    parentRoute(route: ActivatedRoute): ActivatedRoute {
        let currentRoute = route.parent;

        while (currentRoute) {
            if (currentRoute.outlet === 'primary') {
                let routeSnapshot = currentRoute.snapshot;
                let pageTitle = routeSnapshot.data['pageTitle'];
                let navigateSkip = routeSnapshot.data['navigateSkip'];

                if (pageTitle && !(navigateSkip === true)) {
                    return currentRoute;
                }
            }
            currentRoute = currentRoute.parent;
        }

        return route.root;
    }

    // navigates up one page, ignoring any empty routes
    navigateUp() {
        let breadcrumbs: Array<any> = [];
        let currentRoute = this.route.root;
        let url = '';
        do {
            let childrenRoutes = currentRoute.children;
            currentRoute = null;
            childrenRoutes.forEach(route => {
                if (route.outlet === 'primary') {
                    let routeSnapshot = route.snapshot;
                    url += '/' + routeSnapshot.url.map(segment => segment.path).join('/');
                    let pageTitle = routeSnapshot.data['pageTitle'];
                    let navigateSkip = routeSnapshot.data['navigateSkip'];
                    if (pageTitle && !(navigateSkip === true) &&
                        breadcrumbs.findIndex((value) => value.pageTitle === pageTitle) === -1) {
                        breadcrumbs.push({
                            pageTitle: pageTitle,
                            url: url,
                        });
                    }
                    currentRoute = route;
                }
            });
        } while (currentRoute);

        if (breadcrumbs.length < 2) {
            this.router.navigate(['/'], { queryParamsHandling: 'merge' });
        } else {
            parent = breadcrumbs[breadcrumbs.length - 2].url;
            this.logger.LogC(() => `navigateUp :${parent}`, eLogLevel.Debug);
            this.router.navigate([parent], { queryParamsHandling: 'merge' });
        }
    }

    getWaitMessagesObservable(): Observable<Map<string, string>> {
        return this._waitMessagesObserve.asObservable();
    }

    addWaitMessage(message: string, maxTime = 10000, cancelToken: CancelToken = null): string {
        let key = this.newGuid();
        this._waitMessages.set(key, {message: message, cancelToken: cancelToken});
        this._waitMessagesObserve.next(this._waitMessages);

        if (maxTime > 0) {
            setTimeout(() => {
                if (this._waitMessages.has(key)) {
                    this.removeWaitMessage(key);
                    let errorMessage = new Message(false, `The '${message}' will continue to run in the background.`, null, null);
                    this.addUpdateNotification(errorMessage, false);
                }
            }, maxTime);
        }
        return key;
    }


    removeWaitMessage(key: string) {
        if (this._waitMessages.has(key)) {
            this._waitMessages.delete(key);
            this._waitMessagesObserve.next(this._waitMessages);
        }
    }

    getTasksObservable(): Observable<Array<ManagedTask>> {
        return this._tasks.asObservable();
    }

    addUpdateTask(task: ManagedTask) {
        if (task.status === eManagedTaskStatus.Error) {
            const message = new Message(false, `The task ${task.name} failed.  Message: ${task.message}`,
                task.exceptionDetails, null);
            this.addUpdateNotification(message, false);
        }

        const tasks = this._tasks.value;
        const originalTask = tasks.find(c => c.taskId === task.taskId);
        if (originalTask) {
            Object.assign(originalTask, task);
        } else {
            tasks.push(task);
        }
        this._tasks.next(tasks);
    }

    getTask(reference: string): ManagedTask {
        const tasks = this._tasks.value;
        const task = tasks.find(c => c.taskId === reference);
        return task;
    }

    getNotificationObservable(): Observable<Message> {
        return this._notification.asObservable();
    }

    addUpdateNotification(message: Message, log: boolean): string {
        if (!message.reference) {
            message.reference = this.newGuid();
        }
        this._notifications.push(message);

        this._notification.next(message);

        if (log) {
            this._logErrors.next(message);
        }

        return message.reference;
    }

    getNotifications(): Message[] {
        return this._notifications;
    }

    getNotification(reference: string): Message {
        const message = this._notifications.find(c => c.reference === reference);
        return message;
    }

    // public isHubCacheLoaded(): boolean {
    //     if (!this._globalCache.value) {
    //         return false;
    //     } else {
    //         return true;
    //     }
    // }

    /**
     * Generates a new GUID.
     */
    public newGuid(): string {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            // tslint:disable-next-line:no-bitwise
            let r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }

    public refreshGlobalCache() {
        let promise = this.getFromApi<CacheManager>('/api/Account/GetGlobalCache', null, null);
        promise.then(cache => {
            this._globalCache.next(cache);
        }).catch(reason => {
            let message = new Message(false, 'Update global cache failed: ' + reason, reason, null);
            this.addUpdateNotification(message, false);

            // If cache load error, try again to refresh.
            setTimeout(() => {
                this.refreshGlobalCache();
            }, 5000);
        });
    }

    public getGlobalCacheObservable(): Observable<CacheManager> {
        return this._globalCache.asObservable();
    }

    public getGlobalCachePromise(): Promise<CacheManager> {
        return this.getGlobalCacheObservable().pipe(first()).toPromise();
    }

    // gets all shared data items
    getSharedDataIndex(searchString: string, hubKeys: number[], maxResults: number, reload: boolean): Promise<SharedData[]> {
        if (reload || !this.sharedItemsIndex) {
            return this.post<SharedData[]>('/api/SharedData/SharedDataIndex', {
                searchString, hubKeys, maxResults
            }, 'Getting shared data index...');
        } else {
            Promise.resolve(this.sharedItemsIndex);
        }
    }

    getSharedDataObject(hubKey: number, objectType: eDataObjectType, objectKey: number): Promise<SharedData> {
        return this.post<SharedData>('/api/SharedData/SharedDataObject', {
            hubKey, objectType, objectKey
        }, 'Getting shared item...');
    }

    getActiveAgent(hubKey: number): Promise<DexihActiveAgent> {
        // the activeAgent is cached in a localstorage to save an extra roundtrip.
        let agent = localStorage.getItem(`hub-remote-agent-${hubKey}`);

        if (agent) {
            let remoteAgent = <DexihActiveAgent>JSON.parse(agent);
            return Promise.resolve(remoteAgent);
        }

        return new Promise<DexihActiveAgent>((resolve, reject) => {

            this.post<DexihActiveAgent>('/api/SharedData/GetActiveAgent', { hubKey: hubKey }, 'Getting active remote agent...')
                .then(activeAgent => {
                    this.getBestDownloadUrl(activeAgent, 0).then(() => {
                        localStorage.setItem(`hub-remote-agent-${hubKey}`, JSON.stringify(activeAgent));
                        resolve(activeAgent);
                    });
                }).catch(reason => reject(reason));
        });
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

            let clientId = this.getWebSocketConnectionId();
            if (!clientId) {
                let message = new Message(false, 'Data downloads are only available for registered users.', null, null);
                reject(message);
                return;
            }

            hubKeys.forEach(hubKey => {
                this.getActiveAgent(hubKey).then(activeAgent => {
                    this.postRemote<ManagedTask>('/api/SharedData/DownloadData', {
                        hubKey: hubKey,
                        clientId: this.getWebSocketConnectionId(),
                        downloadFormat: downloadFormat,
                        zipFiles: zipFiles,
                        sharedItems: sharedItems.filter(c => c.hubKey === hubKey),
                        remoteAgentId: activeAgent.instanceId,
                    }, activeAgent, 'Downloading data...', cancelToken)
                        .then(task => {
                        this.addUpdateTask(task);
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
        inputColumns: InputColumn[], selectQuery: SelectQuery, parameters: InputParameterBase[],
        parentParameters: InputParameterBase[], cancelToken: CancelToken):
        Promise<PreviewResults> {

        return new Promise<PreviewResults>((resolve, reject) => {
            this.getActiveAgent(hubKey).then(activeAgent => {
                this.postRemote<PreviewResults>('/api/SharedData/PreviewData', {
                    hubKey: hubKey,
                    objectType: objectType,
                    objectKey: objectKey,
                    selectQuery: selectQuery,
                    remoteAgentId: activeAgent.instanceId,
                    inputColumns: inputColumns,
                    parameters: parameters,
                    parentParameters: parentParameters
                }, activeAgent, 'Previewing data...', cancelToken).then(result => {
                    result.columns = this.constructDataTableColumns(result.columns);
                    resolve(result);
                }).catch(reason => {
                    reject(reason);
                });
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
            this.getActiveAgent(hubKey).then(activeAgent => {
                this.postRemote<ListOfValuesItem[]>('/api/SharedData/PreviewListOfValues', {
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
                });
            }).catch(reason => {
                reject(reason);
            });
        });
    }

    getDashboard(hubKey: number, dashboardKey: number): Promise<DexihDashboard> {

        return new Promise<DexihDashboard>((resolve, reject) => {
            this.post<DexihDashboard>('/api/SharedData/PreviewDashboard', {
                hubKey: hubKey,
                dashboardKey: dashboardKey,
            }, 'Getting dashboard download locations...').then(dashboard => {
                resolve(dashboard);
            }).catch(reason => reject(reason));
        });
    }

}


