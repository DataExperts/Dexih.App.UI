import { HttpClient, HttpHeaders, HttpRequest, HttpEventType, HttpResponse } from '@angular/common/http';
import { Injectable, OnDestroy, ViewContainerRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as FileSaver from 'file-saver';
import { BehaviorSubject, Observable, Subscription, Subject } from 'rxjs';
import { timeout, filter } from 'rxjs/operators'
import { eLogLevel, LogFactory } from '../../logging';
import {
    DexihHubAuth, ExternalLoginResult, Message, ManagedTask,
    User, UserLoginInfo, ExternalLogin, DexihActiveAgent, DownloadUrl, DexihRemoteAgent, FileHandler, eFileStatus, RemoteToken
} from './auth.models';
import { AuthWebSocket } from './auth.websocket';
import { GlobalCache } from './global.models';
import { UserAgentApplication, AuthResponse, CacheLocation } from 'msal';
import { DexihModalComponent } from 'dexih-ngx-components';
import { Location } from '@angular/common';

declare var gapi: any;

@Injectable()
export class AuthService implements OnDestroy {
    // Create an observable user, so consuming components can update when credentials change.
    private _currentUser = new BehaviorSubject<User>(null);
    private _refreshUserAttempted = false;
    public _hubs = new BehaviorSubject<Array<DexihHubAuth>>(null);
    private _hubErrors = new BehaviorSubject<Array<Message>>([]);

    private _displayHelp = new BehaviorSubject<boolean>(false);

    private _webSocket: AuthWebSocket;

    // private _waitDialogReference: DialogRef<OneButtonPreset>;

    private _tasks = new BehaviorSubject<Array<ManagedTask>>([]);

    private _notification = new Subject<Message>();
    private _notifications: Message[] = [];

    private _logErrors = new BehaviorSubject<Message>(null);

    private _waitMessages = new Map<string, string>();
    private _waitMessagesObserve = new BehaviorSubject<Map<string, string>>(this._waitMessages);

    private _globalCache = new BehaviorSubject<GlobalCache>(null);
    private _remoteAgents = new BehaviorSubject<Array<DexihRemoteAgent>>(null);

    // store the URL so we can redirect after logging in
    public redirectUrl: string;

    private _userSubscribe: Subscription;
    private _webSocketSubscribe: Subscription;
    private _logErrorsSubscribe: Subscription;

    private waitOperationCount = 0;

    private modalComponent: DexihModalComponent;

    private logger = new LogFactory('auth.service');

    private updateRemoteAgentsFlag = false;
    private globalCacheRefreshing = false;

    // unique session id, used to refresh global cache when page refresh occurs.
    private sessionId = this.newGuid();

    constructor(
        private http: HttpClient,
        private router: Router,
        private route: ActivatedRoute,
        private location: Location
        // private modal: Modal,
    ) {
        this.logger.LogC(() => 'Initializing AuthService', eLogLevel.Information);

        // bootstrap4Mode();

        this.refreshGlobalCache();
        this.refreshUser();

        this._webSocket = new AuthWebSocket(this.location);

        // whenever user login changes, update the list of hubs, and establish a websocket connection.
        if (this._userSubscribe) { this._userSubscribe.unsubscribe(); }
        this._userSubscribe = this.getUserObservable().subscribe(async (user) => {
            if (user) {
                this.logger.LogC(() => `New authorized user ${user.email}`, eLogLevel.Information);
                this.refreshHubs();

                await this._webSocket.initializeWebSocket();

                if (this._webSocketSubscribe) { this._webSocketSubscribe.unsubscribe(); }
                this._webSocketSubscribe = this._webSocket.getWebSocketObservable().subscribe(data => {
                    if (data) {
                        switch (data.method) {
                            case 'disconnect': {
                                this._remoteAgents.next(null);
                            }
                                break;
                            case 'connect':
                                this.refreshGlobalCache();
                                // this.refreshUser();
                                this.pingRemoteAgents();
                                break;
                            case 'remoteAgent-update': {
                                let remoteAgents = <DexihRemoteAgent[]> this._remoteAgents.value;
                                if (remoteAgents) {
                                    let activeAgent = <DexihActiveAgent> data.value;
                                    let remoteAgent = remoteAgents.find(c => c.remoteAgentKey === activeAgent.remoteAgentKey);
                                    if (remoteAgent) {
                                        let existingIndex = remoteAgent.activeAgents
                                            .findIndex(c => c.instanceId === activeAgent.instanceId);
                                        if (existingIndex >= 0) {
                                            remoteAgent.activeAgents[existingIndex] = activeAgent;
                                        } else {
                                            remoteAgent.activeAgents.push(activeAgent);
                                        }
                                    }
                                    this._remoteAgents.next(remoteAgents);
                                }
                                break;
                            }
                            case 'remoteAgent-delete': {
                                let remoteAgents = <DexihRemoteAgent[]> this._remoteAgents.value;
                                if (remoteAgents) {
                                    let instanceId = data.value;
                                    remoteAgents.forEach(remoteAgent => {
                                        let existingIndex = remoteAgent.activeAgents.findIndex(c => c.instanceId === instanceId);
                                        if (existingIndex >= 0) {
                                            remoteAgent.activeAgents.splice(existingIndex, 1);
                                        }
                                    });
                                    this._remoteAgents.next(remoteAgents);
                                }
                                break;
                            }

                            case 'remoteAgent-deleteKey': {
                                let remoteAgents = <DexihRemoteAgent[]> this._remoteAgents.value;
                                let index = remoteAgents.findIndex(c => c.remoteAgentKey === data.value);
                                if (index >= 0) {
                                    remoteAgents.splice(index, 1);
                                    this._remoteAgents.next(remoteAgents);
                                }
                                break;
                            }

                            case 'hub-update': {
                                this.logger.LogC(() => `hub-update: ${data.value}`, eLogLevel.Debug);

                                let hub: DexihHubAuth = data.value;
                                let hubs = this._hubs.getValue();
                                if (hubs) {
                                    let previousHub = hubs.find(c => c.hubKey === hub.hubKey);
                                    if (previousHub) {
                                        Object.assign(previousHub, hub);
                                        this._hubs.next(hubs);
                                    } else {
                                        hubs.push(hub);
                                        this._hubs.next(hubs);
                                    }
                                }
                            }
                                break;
                            case 'hubs-delete': {
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
                            case 'task':
                                this.logger.LogC(() => `task: ${data.value}`, eLogLevel.Debug);

                                const task = data.value;
                                this.addUpdateTask(task);
                                break;
                            case 'file-download': {
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
                                        //     currentTask.status = eTaskStatus.Success;
                                        //     this.addUpdateTask(currentTask);
                                        // }
                                    }).catch(reason => {
                                        // currentTask.percentage = 0;
                                        // currentTask.status = eTaskStatus.Error;
                                        // currentTask.message = reason;
                                        // this.addUpdateTask(currentTask);
                                        this._hubErrors.next(reason);
                                    });
                            }
                                break;
                            case 'download-ready': {
                                this.logger.LogC(() => `download-ready ${data.value.url}`, eLogLevel.Debug);

                                if (data.value.url.startsWith('http://')) {
                                    this.modalComponent.confirm(
                                        'Download (NOT ENCRYPTED)',
                                        // tslint:disable-next-line:max-line-length
                                        'Your download is ready from a remote agent that is not configured for encrypted (https) downloads.  Would you still like to download the data?',
                                        'Download Now',
                                        'Discard'
                                    ).then((result) => {
                                        if ( result) {
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
                                            if ( result) {
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

            let headers = new HttpHeaders({'Content-Type': 'application/json'});

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

            const baseUrl = this.location.prepareExternalUrl('/api/Account/LogError');
            this.http.post<Message>(baseUrl, body, { withCredentials: true, headers: headers }).subscribe(result => {
                // doesn't matter what is returned.
            });
        });
    }

    ngOnDestroy() {
        this.logger.LogC(() => `ngOnDestroy.`, eLogLevel.Debug);

        if (this._userSubscribe) { this._userSubscribe.unsubscribe(); }
        if (this._webSocketSubscribe) { this._webSocketSubscribe.unsubscribe(); }
        if (this._remoteAgents) { this._remoteAgents.unsubscribe(); }
        if (this._logErrorsSubscribe) { this._logErrorsSubscribe.unsubscribe(); }
    }

    // set available remoteAgents
    getRemoteAgentsObservable(): Observable<DexihRemoteAgent[]> {
        return this._remoteAgents.asObservable();
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
            return new Promise<User>((resolve) => resolve(this._currentUser.value));
        } else {
            return this.refreshUser();
        }
    }

    public getWebSocketObservable() {
        return this._webSocket.getWebSocketObservable();
    }

    public getWebSocketStatusObservable() {
        return this._webSocket.getWebSocketStatusObservable();
    }

    public getWebSocketConnectionId() {
        return this._webSocket.getWebSocketConnectionId();
    }

    // post form data
    public postForm(url, data, waitMessage = 'Please wait while the operation completes.'): Promise<Message> {
        let headers = new HttpHeaders({
            // 'Authorization': `Bearer ${authToken}`,
            // 'Content-Type': 'multipart/form-data'
        });

        return this.postBody(url, data, headers, waitMessage);
    }

    // post an object which is converted to json.
    public post(url, data, waitMessage = 'Please wait while the operation completes.'): Promise<Message> {
        let headers = new HttpHeaders({
            // 'Authorization': `Bearer ${authToken}`,
            'Content-Type': 'application/json'
        });

        let body: string;
        if (data) {
            body = JSON.stringify(data, (key, value) => {
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
        } else {
            body = '{}';
        }

        return this.postBody(url, body, headers, waitMessage);
    }

    // posts data to the api.
    private postBody(url, body, headers, waitMessage = 'Please wait while the operation completes.'): Promise<Message> {
        return new Promise<Message>((resolve, reject) => {
            let messageKey = this.addWaitMessage(waitMessage);
            this.logger.LogC(() => `post url: ${url}, data: ${body}.`, eLogLevel.Debug);

            const baseUrl = this.location.prepareExternalUrl(url);

            this.http.post<Message>(baseUrl, body, { withCredentials: true, headers: headers }).subscribe(
                result => {
                    this.removeWaitMessage(messageKey);

                    // let result: Message = jsonResult.json();
                    if (result.success) {
                        resolve(result);
                        return true;
                    } else {
                        this.logger.LogC(() =>
                            `post warning message:${result.message}, details: ${result.exceptionDetails}`, eLogLevel.Warning);
                        reject(result);
                        return false;
                    }
                }, error => {
                    this.removeWaitMessage(messageKey);

                    if (error.error) {
                        reject(error.error);
                    } else {
                        this.removeWaitMessage(messageKey);
                        this.logger.LogC(() =>
                            `post warning error:${error}`, eLogLevel.Error);
                        if (error.status === 504) {
                            reject(new Message(false, 'The Information Hub API could not be reached.', null, null));
                        }
                        let result = new Message(false, error.message, null, null);
                        reject(result);
                    }
                }, () => {
                    this.removeWaitMessage(messageKey);
                });
        });
    }

    public get(url, waitMessage = 'Please wait while the operation completes.', updateUrl = true): Promise<any> {
        return new Promise<any>((resolve, reject) => {

            let messageKey: string = null;

            if (waitMessage) {
                messageKey = this.addWaitMessage(waitMessage);
            }

            let baseUrl: string;
            if (updateUrl) {
                baseUrl = this.location.prepareExternalUrl(url);
            } else {
                baseUrl = url;
            }

            this.http.get(baseUrl).subscribe(result => {
                this.removeWaitMessage(messageKey);
                let json = <any> result;
                if (json.status) {
                    reject(json.status);
                    return;
                }
                resolve(result);
            }, error => {
                this.removeWaitMessage(messageKey);
                if (error.error) {
                    reject(error.error);
                } else {
                    this.removeWaitMessage(messageKey);
                    this.logger.LogC(() =>
                        `post warning error:${error}`, eLogLevel.Error);
                    if (error.status === 504) {
                        reject(new Message(false, 'The Information Hub API could not be reached.', null, null));
                    }
                    let result = new Message(false, error.message, null, null);
                    reject(result);
                }
            });
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
                file.status = eFileStatus.Error;
                file.message = error.message;
                file.progress = 0;
                let message = new Message(false, error.message, error, '');
                reject(message);
            });
        });

    }

    // this needs to be set by a top level component so the dialog has a container to load into.
    setDialogDefaultContainer(modalComponent: DexihModalComponent) {
        // this.overlay.defaultViewContainer = defaultViewContainer;
        this.modalComponent = modalComponent;
    }

    confirmDialog(title: string, body: string): Promise<boolean> {
        return this.modalComponent.confirm(title, body, 'Confirm', 'Cancel');
    }

    promptDialog(title: string, body: string): Promise<string> {
        return this.modalComponent.prompt(title, body);
    }

    informationDialog(title: string, body: any): Promise<boolean> {
        return this.modalComponent.information(title, body);
    }

    // waitDialogOpen(message: string, title = 'Please wait...') {
    //     // the waitOperationCount var ensures dialog is only open one when multiple requests to open occur.

    //     if (this.waitOperationCount === 0) {
    //         if (this.viewContainerRef) {
    //             if (!this._waitDialogReference) {
    //                 const dialogRef = this.modal.alert()
    //                     .title(title)
    //                     .body(message)
    //                     .okBtn('Cancel')
    //                     .open(this.viewContainerRef);

    //                 dialogRef.result.then().catch();
    //                 this._waitDialogReference = dialogRef;
    //             }
    //         }
    //         this.waitOperationCount++;
    //     }
    // }

    // waitDialogClose() {
    //     if (this.waitOperationCount > 1) {
    //         this.waitOperationCount--;
    //     } else {
    //         if (this._waitDialogReference) {
    //             this._waitDialogReference.close();
    //             this._waitDialogReference = null;
    //         }
    //         this.waitOperationCount = 0;
    //     }
    // }


    /*
 * General utils for managing cookies in Typescript.
 */
    public setCookie(name: string, val: string) {
        const date = new Date();
        const value = val;

        // Set it expire in 7 days
        date.setTime(date.getTime() + (7 * 24 * 60 * 60 * 1000));

        // Set it
        document.cookie = name + '=' + value + '; expires=' + date.toUTCString() + '; path=/';
    }

    public getCookie(name: string) {
        const value = '; ' + document.cookie;
        const parts = value.split('; ' + name + '=');

        if (parts.length === 2) {
            return parts.pop().split(';').shift();
        }
    }

    public deleteCookie(name: string) {
        const date = new Date();

        // Set it expire in -1 days
        date.setTime(date.getTime() + (-1 * 24 * 60 * 60 * 1000));

        // Set it
        document.cookie = name + '=; expires=' + date.toUTCString() + '; path=/';
    }

    // gets the XSRF token which is required to be posted as a header 'X-XSRF-TOKEN'
    // to avoid cross-site request forgery.
    public getXSRFToken() {
        let value = '; ' + document.cookie;
        let parts = value.split('; ' + 'XSRF-TOKEN' + '=');
        if (parts.length === 2) {
            return parts.pop().split(';').shift();
        }
    }

    public getLoginProviders(): Promise<Array<UserLoginInfo>> {
        return new Promise<Array<UserLoginInfo>>((resolve, reject) => {
            this.post('/api/Account/ExternalLogins', null, 'Getting external login information.').then(result => {
                resolve(result.value);
            }).catch(reason => {
                this.logger.LogC(() => `getLoginProviders error:${reason.message}`, eLogLevel.Error);
                reject(reason);
            });
        });

    }

    // download a file from the api.
    public downloadFile(url, data, name, type): Promise<boolean> {
        return new Promise<boolean>((resolve, reject) => {
            let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
            let body = JSON.stringify(data);
            const baseUrl = this.location.prepareExternalUrl(url);
            this.http.post(baseUrl, body, { headers: headers, responseType: 'blob' })
                .subscribe(returnData => {
                    // let result: any = returnData;
                    let blob = new Blob([returnData], { type: type });
                    // var url = window.URL.createObjectURL(blob);
                    FileSaver.saveAs(blob, name);
                    resolve(true);
                }, error => {
                    this.logger.LogC(() => `downloadFile error:${error.message}`, eLogLevel.Error);
                    if (error.error) {
                        let reader = new FileReader();
                        reader.readAsText(error.error);
                        reader.onload = function() {
                            let message = JSON.parse(reader.result.toString());
                            reject(message);
                          }
                    } else {
                        reject(error);
                    }
                });
        });
    }



    refreshUser(): Promise<User> {
        this._refreshUserAttempted = true;
        return new Promise<User>((resolve) => {
            this.post('/api/Account/GetUser', null, 'Refreshing user details...').then(result => {
                let previousUser = this._currentUser.value;
                if (!previousUser || (
                     result.value.email !== previousUser.email &&
                     result.value.email !== previousUser.firstName &&
                     result.value.email !== previousUser.lastName &&
                     result.value.email !== previousUser.isAdmin &&
                     result.value.email !== previousUser.isInvited &&
                     result.value.email !== previousUser.rememberMe &&
                     result.value.email !== previousUser.subscription &&
                     result.value.email !== previousUser.terms
                     )) {
                    this._currentUser.next(result.value);
                }
                resolve(result.value);
                this._refreshUserAttempted = false;
            }).catch(reason => {
                this.logger.LogC(() => `refreshUser error:${reason.message}`, eLogLevel.Error);

                this._currentUser.next(null);
                this._hubErrors.next(reason);
                resolve(null);
                this._refreshUserAttempted = false;
                // reject(reason);
            });
        });
    }


    login(user: User): Promise<User> {
        return new Promise<User>((resolve, reject) => {
            // call the login service, followed by get-user.
            // The second call is to ensure the anti-forgery headers are updated when the user credentials have changed.
            this.post('/api/Account/Login', user, 'Authenticating...').then(() => {
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
        return this.loadScript('GOOGLE', '/assets/js/google-api.js');
    }

    googleLogin(clientId: string, forceLogin: boolean): Promise<User> {
        return new Promise<User>((resolve, reject) => {
            this.googleSignIn(clientId, forceLogin).then(externalLogin => {
                let loginResult = this.identityLogin('GOOGLE', externalLogin.providerKey, externalLogin.authenticationToken);
                resolve(loginResult);
            }).catch(() => {
                reject('Error with google login.');
            });
        });
    }

    googleEnable(clientId: string): Promise<ExternalLogin> {
        let messageKey: string = null;
        return new Promise<ExternalLogin>((resolve, reject) => {
            try {
                messageKey = this.addWaitMessage('Loading google sign-in scripts...');
                this.googleLoadScript().then(() => {
                    gapi.load('auth2', () => {
                        gapi.auth2.init({
                            ...{ scope: 'email', prompt: 'select_account' },
                            client_id: clientId
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
                                resolve(login);
                            } else {
                                resolve(null);
                            }
                        });
                    });
                });
            } catch (e) {
                this.logger.LogC(() => `login error:${e.message}`, eLogLevel.Error);
                this._hubErrors.next(e);
                reject(e);
            } finally {
                if (messageKey) { this.removeWaitMessage(messageKey); }
            }
        });
    }

    googleSignIn(clientId: string, forceLogin: boolean): Promise<ExternalLogin> {
        return new Promise<ExternalLogin>((resolve, reject) => {
            try {
                this.googleLoadScript().then(() => {
                    gapi.load('auth2', () => {
                    gapi.auth2.init({
                        ...{ scope: 'email', prompt: 'select_account' },
                        client_id: clientId
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
                });
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
                // authority: 'https://login.microsoftonline.com/common/',
                redirectUri: location.origin + '/api/Account/MicrosoftRedirect'
            },
            // cache: {
            //     cacheLocation: <CacheLocation> 'sessionStorage',
            //     storeAuthStateInCookie: false
            // }
        };

        let userAgentApplication = new UserAgentApplication(config);

        userAgentApplication.handleRedirectCallback((error, errorDesc) => {
            if (error) {
                console.log(error + ':' + errorDesc);
            }
        });

        return userAgentApplication;
    }


    microsoftEnable(clientId: string): Promise<ExternalLogin> {
        let messageKey: string = null;
        return new Promise<ExternalLogin>(async (resolve, reject) => {
            try {
                messageKey = this.addWaitMessage('Loading microsoft sign-in...');

                let userAgentApplication = this.microsoftApp(clientId);
                let user = userAgentApplication.getAccount();

                if (user) {
                    let login = new ExternalLogin();

                    let userName = user.name;
                    let userNames = userName.split(' ');

                    login.email = user.userName;
                    login.firstName = userNames[0];
                    login.lastName = userNames.length > 1 ? userNames[1] : '';
                    login.providerKey = user.accountIdentifier;
                    resolve(login);
                    this.removeWaitMessage(messageKey);
                } else {
                    resolve(null);
                    this.removeWaitMessage(messageKey);
                }

            } catch (e) {
                if (messageKey) { this.removeWaitMessage(messageKey); }
                this.logger.LogC(() => `login error:${e.message}`, eLogLevel.Error);

                this._currentUser.next(null);
                this._hubErrors.next(e);
                reject(e);
            }
        });
    }

    microsoftLogin(clientId: string, forceLogin: boolean): Promise<User> {
        return new Promise<User>((resolve, reject) => {
            this.microsoftSignIn(clientId, forceLogin).then(externalLogin => {
                let loginResult = this.identityLogin('MICROSOFT', externalLogin.providerKey, externalLogin.authenticationToken);
                resolve(loginResult);
            }).catch((reason) => {
                reject(reason);
            });

        });
    }

    microsoftSignIn(clientId: string, forceLogin: boolean): Promise<ExternalLogin> {
        let messageKey: string = null;
        return new Promise<ExternalLogin>(async (resolve, reject) => {
            try {
                messageKey = this.addWaitMessage('Loading microsoft sign-in...');

                let userAgentApplication = this.microsoftApp(clientId);
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

                tokenPromise.then(async authResponse => {
                    this.removeWaitMessage(messageKey);
                    if (authResponse) {
                        if ( !authResponse.accessToken) {
                            let request = {
                                scopes: ['user.read'],
                                // authority: 'https://login.microsoftonline.com/common/',
                            }

                            authResponse = await userAgentApplication.acquireTokenSilent(request);
                        }

                        let user = authResponse.account;

                        let login = new ExternalLogin();

                        let userName = user.name;
                        let userNames = userName.split(' ');

                        login.email = user.userName;
                        login.firstName = userNames[0];
                        login.lastName = userNames.length > 1 ? userNames[1] : '';
                        login.authenticationToken = authResponse.accessToken;
                        login.providerKey = user.accountIdentifier;
                        resolve(login);
                        return;
                    }
                    reject('Microsoft login failed.');
                }).catch(reason => {
                    this.removeWaitMessage(messageKey);
                    reject(reason);
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

    microsoftSignOut(clientId: string): Promise<boolean> {
        return new Promise<boolean>((resolve, reject) => {
            try {
                let userAgentApplication = this.microsoftApp(clientId)
                userAgentApplication.logout();
                resolve(true);
            } catch (e) {
                this.logger.LogC(() => `microsoft sign out error:${e.message}`, eLogLevel.Error);
                reject(e);
            }
        });
    }



    // called for external identity login.
    identityLogin(provider: string, providerKey: string, authenticationToken: string): Promise<User> {
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

    loadScript(id: string, src: string): Promise<boolean> {
        return new Promise<boolean>((resolve) => {
            // if script already loaded, do nothing
            let script = document.getElementById(id)
            if (script) {
                resolve(true);
            }

            // add the script to the page.
            let newScript = document.createElement('script');
            newScript.id = id;
            newScript.async = true;
            newScript.src = this.location.prepareExternalUrl(src);
            newScript.onload = (() => { resolve(true); });
            document.body.appendChild(newScript);
        });
    }

    // redirects browser to the requested login provider.
    externalLogin(provider: string): Promise<ExternalLoginResult> {
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
    addExternalLogin(provider: string, providerKey: string, authenticationToken: string): Promise<ExternalLoginResult> {
        return new Promise<ExternalLoginResult>((resolve, reject) => {
            this.post('/api/Account/AddExternalLogin', {
                provider: provider,
                providerKey: providerKey,
                authenticationToken: authenticationToken
            }, 'Adding an external login...').then(result => {
                resolve(result.value);
            }).catch(reason => {
                reject(reason);
                // this.logger.LogC(() => `AddExternalLogin error:${reason.message}`, eLogLevel.Error);
                // this.logger.LogC(() => `externalLogin error:${reason.message}`, eLogLevel.Error);
                // window.location.href = '/api/Account/ExternalLogin?provider=' + provider + '&returnUrl=' + returnUrl;
            });
        });
    }

    // redirects browser to the requested login provider.
    removeExternalLogin(provider: string, providerKey: string, ): Promise<boolean> {
        return new Promise<boolean>((resolve, reject) => {
            this.confirmDialog('Remove Login?', 'Are you sure you want to remove the login ' +
                provider + ' from your available logins.  When removed you will not be able to login via ' +
                provider + ' provider.').then(() => {
                    this.post('/api/Account/RemoveExternalLogin', {
                        provider: provider,
                        providerKey: providerKey
                    }, 'Adding an external login...').then((r) => {
                        resolve(r.value);
                    }).catch(reason => {
                        reject(reason);
                        // this.logger.LogC(() => `AddExternalLogin error:${reason.message}`, eLogLevel.Error);
                        // this.logger.LogC(() => `externalLogin error:${reason.message}`, eLogLevel.Error);
                        // window.location.href = '/api/Account/ExternalLogin?provider=' + provider + '&returnUrl=' + returnUrl;
                    });
                }).catch(reason => {
                    reject(reason)
                });
        });
    }

    // called when provider is redirected back.
    externalLoginCallback(): Promise<ExternalLoginResult> {
        return new Promise<ExternalLoginResult>((resolve, reject) => {
            // call the callback api.
            this.post('/api/Account/ExternalLoginCallback', null, 'Completing external login...').then(result => {
                resolve(result.value);
            }).catch(reason => {
                this.logger.LogC(() => `externalLoginCallBack error:${reason.message}`, eLogLevel.Error);
                this._hubErrors.next(reason);
                reject(reason);
            });
        });
    }

    // register an external login
    externalLoginConfirmation(user: User): Promise<User> {
        return new Promise<User>((resolve, reject) => {
            // call the registration service to register details.
            this.post('/api/Account/ExternalLoginConfirmation', user, 'Confirming external login...').then(result => {
                resolve(result.value);
            }).catch(reason => {
                this.logger.LogC(() => `externalLoginConfirmation error:${reason.message}`, eLogLevel.Error);

                this._hubErrors.next(reason);
                reject(reason);
            });
        });
    }


    register(user: User): Promise<User> {
        return new Promise<User>((resolve, reject) => {
            // call the registration service to register details.
            this.post('/api/Account/Register', user, 'Registering user...').then(result => {
                resolve(result.value);
            }).catch(reason => {
                this.logger.LogC(() => `register error:${reason.message}`, eLogLevel.Error);

                this._hubErrors.next(reason);
                reject(reason);
            });
        });
    }

    confirmEmail(email: string, verificationCode: string): Promise<User> {
        let user = new User(email, null, null, false);
        user.code = verificationCode;

        return new Promise<User>((resolve, reject) => {
            // call the login service, followed by getuser.
            // The second call is to ensure the anti-forgery headers are updated when the user credentials have changed.
            this.post('/api/Account/ConfirmEmail', user, 'Confirming email...').then(result => {
                resolve(result.value);
            }).catch(reason => {
                this.logger.LogC(() => `confirmEmail error:${reason.message}`, eLogLevel.Error);

                this._hubErrors.next(reason);
                reject(reason);
            });
        });
    }

    resendConfirmationEmail(email: string): Promise<boolean> {
        let user = new User(email, null, null, false);

        return new Promise<boolean>((resolve, reject) => {
            // call the api to resend the confirmation email to the specified address.
            this.post('/api/Account/ResendConfirmationEmail', user, 'Resending confirmation email...').then(() => {
                resolve(true);
            }).catch(reason => {
                this.logger.LogC(() => `resentConfirmationEmail error:${reason.message}`, eLogLevel.Error);

                this._hubErrors.next(reason);
                reject(reason);
            });
        });
    }

    forgotPassword(email: string): Promise<boolean> {
        let user = new User(email, null, null, false);

        return new Promise<boolean>((resolve, reject) => {
            // call the api to initiate the forgotten password and send a verification email.
            this.post('/api/Account/ForgotPassword', user, 'Sending forgotten password email...').then(() => {
                resolve(true);
            }).catch(reason => {
                this.logger.LogC(() => `forgotPassword error:${reason.message}`, eLogLevel.Error);

                this._hubErrors.next(reason);
                reject(reason);
            });
        });
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

    updateUserDetails(firstName: string, lastName: string, subscription: boolean): Promise<boolean> {
        return new Promise<boolean>((resolve, reject) => {
            // call the login service to reset the password.
            this.post('/api/Account/UpdateDetails',
                {
                    firstName: firstName,
                    lastName: lastName,
                    subscription: subscription
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
            this.confirmDialog('Logout?', 'You can improve your security further after logging out by closing this opened browser')
                .then(result => {
                    if (result) {
                        this.post('/api/Account/Logout', null, 'Logging out current user...').then(result2 => {
                            if (result2) {
                                this._currentUser.next(null);
                                this._hubs.next(null);
                                this.router.navigate(['/auth/login']);
                            }
                            resolve(result2.value);
                        }).catch(reason => {
                            this.logger.LogC(() => `logout error:${reason.message}`, eLogLevel.Error);

                            this._hubErrors.next(reason);
                            reject(reason);
                        });
                    } else {
                        resolve(false);
                    }
                }).catch(() => {
                    resolve(false);
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

            this.post('/api/Account/PingRemoteAgents', {connectionId: connectionId}, 'Pinging active remote agents...')
                .then(result => {
                let agents: Array<DexihRemoteAgent> = result.value;
                agents.forEach(c => c.activeAgents = []);
                this._remoteAgents.next(agents);
            }).catch(reason => {
                this.logger.LogC(() => `updateRemoteAgents, error: ${reason.message}.`, eLogLevel.Error);
                this._remoteAgents.next(null);
            }).then(() => this.updateRemoteAgentsFlag = false);
        }
    }

    saveRemoteAgent(remoteAgent: DexihRemoteAgent): Promise<boolean> {
        return new Promise<boolean>((resolve, reject) => {
            this.post('/api/Account/SaveRemoteAgent', {
                remoteAgent
            }, 'Saving remote agent details...').then(result => {
                resolve(result.value);
                return result;
            }).catch(reason => {
                this.logger.LogC(() => `SaveRemoteAgent, error: ${reason.message}.`, eLogLevel.Error);
                // this.addHubMessage(reason);
                reject(reason);
            });
        });
    }

    public getDownloadUrl(activeAgent: DexihActiveAgent): Promise<DownloadUrl> {
        return new Promise<DownloadUrl>((resolve, reject) => {
            if (!activeAgent) {
                let message = new Message(false, 'The data cannot be downloaded as there is no current remote agent.', null, null);
                reject(message);
            } else {
                if (activeAgent.currentDownloadUrl) {
                    resolve(activeAgent.currentDownloadUrl);
                } else {
                    if (activeAgent.downloadUrls.length === 0) {
                        let message = new Message(false, 'Current remote agent does not have data download/upload available.', null, null);
                        reject(message);
                    }

                    this.getBestDownloadUrl(activeAgent, 0).then(result => {
                        resolve(result);
                    }).catch(reason => {
                        reject(reason);
                    });
                }
            }
        });
    }

    // scans each available download url in order, to find one this client can access.
    public getBestDownloadUrl(activeAgent: DexihActiveAgent, position: number): Promise<DownloadUrl> {
        return new Promise<DownloadUrl>((resolve, reject) => {
            if (position >= activeAgent.downloadUrls.length) {
                let message = new Message(false, 'The client cannot connect to any of the data download/upload endpoints.', null, null);
                reject(message);
                return;
            }

            let url = activeAgent.downloadUrls[position].url + '/ping';

            let messageKey = this.addWaitMessage('Testing remote agent connectivity...');

            this.http.get(url).pipe(timeout(5000)).subscribe(() => {
                activeAgent.currentDownloadUrl = activeAgent.downloadUrls[position];
                this.removeWaitMessage(messageKey);
                resolve(activeAgent.currentDownloadUrl);
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
        this.post('/api/Account/GetAuthorizedHubs', null, 'Getting authorized hubs...').then(result => {
            this._hubs.next(result.value);
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
        return new Promise<DexihHubAuth>((resolve, reject) => {
            this.post('/api/Account/SaveHub', hub, 'Saving hub details...').then(result => {
                resolve(result.value);
            }).catch(reason => {
                this.logger.LogC(() => `saveHub error:${reason.message}`, eLogLevel.Error);

                this._hubErrors.next(reason);
                reject(reason);
            });
        });
    }

    hubNameExists(hubKey: number, hubName: string): boolean {
        if (this._hubs.value) {
            return this._hubs.value.findIndex(c => c.name === hubName && c.hubKey !== hubKey && c.isValid) >= 0 ? true : false;
        } else {
            return false;
        }
    }

    deleteHubs(hubs: Array<DexihHubAuth>): Promise<boolean> {
        return new Promise<boolean>((resolve, reject) => {
            let hubNames = hubs.map(c => c.name).join(', ');

            this.confirmDialog('Delete Hubs?',
                'This action will delete the following hubs, and any related metadata.<p></p>' + hubNames + '<p></p>Are you sure?')
                .then(result => {
                    if (result) {
                        // call the delete.
                        this.post('/api/Account/DeleteHubs', {
                            hubKeys: hubs.map(c => c.hubKey)
                        }, 'Deleting hubs...').then(result2 => {
                            resolve(result2.value);
                            return result2;
                        }).catch(reason => {
                            this.logger.LogC(() => `deleteHubs error:${reason.message}`, eLogLevel.Error);

                            reject(reason);
                            return false;
                        });
                    } else {
                        resolve(false);
                    }
                }).catch(() => {
                    resolve(false);
                });
        });
    }

    removeUserTokens(remoteAgentKeys: Array<number>): Promise<boolean> {
        return new Promise<boolean>((resolve, reject) => {

            this.confirmDialog('Revoke User Tokens?',
                'This action will revoke the selected tokens.  Remote Agents using these tokens will be immediately logged off.<p></p>' +
                '<p></p>Are you sure?')
                .then(result => {
                    if (result) {
                        // call the delete.
                        this.post('/api/Account/RemoveRemoteAgents', remoteAgentKeys, 'Removing remote agents...').then(result2 => {
                            resolve(result2.value);
                            return result2;
                        }).catch(reason => {
                            this.logger.LogC(() => `removeUserTokens error:${reason.message}`, eLogLevel.Error);

                            reject(reason);
                            return false;
                        });
                    } else {
                        resolve(false);
                    }
                }).catch((reason) => {
                    reject(reason);
                });
        });
    }

    refreshRemoteAgentToken(remoteAgentKey: number): Promise<RemoteToken> {
        return new Promise<RemoteToken>((resolve, reject) => {

            this.confirmDialog('Revoke User Tokens?',
                // tslint:disable-next-line:max-line-length
                'This action will revoke the selected token, and create a new one.  Remote agents using these tokens will be immediately logged off.<p></p>' +
                '<p></p>Are you sure?')
                .then(result => {
                    if (result) {
                        // call the delete.
                        this.post('/api/Account/RefreshRemoteAgentToken', remoteAgentKey,
                            'Refreshing remote agent token...').then(result2 => {

                        //     let template = `A new remote agent id and token has been generated for:
                        // <textarea style="width:100%" type="text" disabled=disabled rows="1">${result2.value.remoteAgentId}</textarea>
                        // This token will only be displayed once, and cannot be retrieved again, so ensure this is stored safely.<p></p>
                        // To use this authorization token, copy the token data below and paste into the
                        // <b>UserToken</b> setting on the remote agent.
                        // <p></p>
                        // <b>UserToken</b></p>
                        // <textarea style="width:100%" type="text" disabled=disabled rows="4">${result2.value.userToken}</textarea>
                        // `

                        //     let html = this.sanitizer.bypassSecurityTrustHtml(template);

                        //     // tslint:disable-next-line:max-line-length
                        //     this.informationDialog('New Token', html)

                                resolve(result2.value);
                                return result2;
                            }).catch(reason => {
                                this.logger.LogC(() => `refreshUserToken error:${reason.message}`, eLogLevel.Error);

                                reject(reason);
                                return false;
                            });
                    } else {
                        reject('Cancelled');
                    }
                }).catch(reason => {
                    reject(reason);
                });
        });
    }

    createRemoteAgent(): Promise<RemoteToken> {
        return new Promise<RemoteToken>((resolve, reject) => {

            this.post('/api/Account/CreateRemoteAgent', {
            }, 'Creating remote agent...').then(result2 => {

                // let template = `A new remote agent id and token has been generated.
                //     This token will only be displayed once, and cannot be retrieved again, so ensure this is stored safely.<p></p>
                //     To use this authorization token, copy the token data below and paste into the
                //     <b>UserToken</b> setting on the remote agent.
                //     <p></p>
                //     <p><b>RemoteAgentId</b></p>
                //     <textarea style="width:100%" type="text" disabled=disabled rows="1">${result2.value.remoteAgentId}</textarea>
                //     <b>UserToken</b></p>
                //     <textarea style="width:100%" type="text" disabled=disabled rows="4">${result2.value.userToken}</textarea>
                //     `

                // let html = this.sanitizer.bypassSecurityTrustHtml(template);

                // // tslint:disable-next-line:max-line-length
                // this.informationDialog('New RemoteAgentId & Token', html);

                resolve(result2.value);
                return result2;
            }).catch(reason => {
                this.logger.LogC(() => `refreshUserToken error:${reason.message}`, eLogLevel.Error);

                reject(reason);
                return false;
            });
        });
    }


    getRandomEncryptionKey(): Promise<string> {
        return new Promise<string>((resolve, reject) => {
            this.post('/api/Account/GetRandomEncryptionKey', null, 'Getting random key...').then(result => {
                resolve(result.value);
            }).catch(reason => {
                this.logger.LogC(() => `getRandomEncryptionKey error:${reason.message}`, eLogLevel.Error);

                this._hubErrors.next(reason);
                reject(reason);
            });
        });
    }


    getUserToken(): Promise<{ remoteAgentId: string, userToken: string }> {
        return new Promise<{ remoteAgentId: string, userToken: string }>((resolve, reject) => {
            this.post('/api/Account/CreateRemoteAgent', {}, 'Creating remote agent...').then(result => {
                resolve(result.value);
            }).catch(reason => {
                this.logger.LogC(() => `getUserToken error:${reason.message}`, eLogLevel.Error);

                this._hubErrors.next(reason);
                reject(reason);
            });
        });
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

    addWaitMessage(message: string, maxTime = 10000): string {
        let key = this.newGuid();
        this._waitMessages.set(key, message);
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
        const tasks = this._tasks.value;
        const originalTask = tasks.find(c => c.reference === task.reference);
        if (originalTask) {
            Object.assign(originalTask, task);
        } else {
            tasks.push(task);
        }
        this._tasks.next(tasks);
    }

    getTask(reference: string): ManagedTask {
        const tasks = this._tasks.value;
        const task = tasks.find(c => c.reference === reference);
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

    public isHubCacheLoaded(): boolean {
        if (!this._globalCache.value) {
            return false;
        } else {
            return true;
        }
    }

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

    public getGlobalCacheObservable(): Observable<GlobalCache> {
        return this._globalCache.asObservable();
    }

    public getGlobalCachePromise(): Promise<GlobalCache> {
        return new Promise<GlobalCache>((resolve) => {
            this._globalCache.asObservable().pipe(filter(a => a !== null)).subscribe(c => {
                resolve(c);
            });
        });
    }

    // refresh the hubCache.
    refreshGlobalCache(): Promise<boolean> {
        if (!this.globalCacheRefreshing) {
            this.globalCacheRefreshing = true;
            return new Promise<boolean>((resolve, reject) => {
                this.get('/api/Account/GetGlobalCache?cache=' + this.sessionId, 'Getting global cache...').then(result => {
                    let globalCache: GlobalCache = result.value;
                    this._globalCache.next(globalCache);
                    resolve(true);
                    this.globalCacheRefreshing = false;
                }).catch(reason => {
                    // this._globalCache.error(reason);
                    this._globalCache.next(null);
                    reject(reason);
                    this.globalCacheRefreshing = false;
                });
            });
        }
    }

    logErrorMessage(message: Message) {

    }

}


