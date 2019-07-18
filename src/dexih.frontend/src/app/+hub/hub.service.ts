import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, Subscription, combineLatest, Subject} from 'rxjs';

import { Message, ManagedTask, ePermission, DexihActiveAgent } from '../+auth/auth.models';
import { AuthService } from '../+auth/auth.service';
import { eLogLevel, LogFactory } from '../../logging';
import {
    DexihColumnValidation,
    DexihConnection,
    DexihDatajob,
    DexihDatalink,
    DexihDatalinkStep,
    DexihDatalinkTransformItem,
    DexihFileFormat,
    DexihHub,
    DexihHubVariable,
    DexihRemoteAgentHub,
    DexihTable,
    eSharedObjectType,
    eConnectionPurpose,
    eDatalinkType,
    eDeltaType,
    eFlatFilePath,
    eRunStatus,
    FileProperties,
    HubCache,
    HubCacheChange,
    Import,
    RemoteMessage,
    Table,
    TransformWriterResult,
    TableColumn,
    DexihCustomFunction,
    eCacheStatus,
    ImportObject,
    eImportAction,
    DexihTableColumn,
    DexihColumnBase,
    DexihDatalinkTest,
    InputColumn,
    DexihView,
    DexihApi,
    ApiData,
    TransformProperties,
    PreviewResults
} from './hub.models';
import { DownloadObject, eDownloadFormat, SelectQuery } from './hub.query.models';
import { RemoteLibraries, RemoteAgentStatus, eTypeCode } from './hub.remote.models';
import { GlobalCache } from '../+auth/global.models';

@Injectable()
export class HubService implements OnInit, OnDestroy {
    private _subscription: Subscription;
    private _webSocketSubscription: Subscription;

    private _hubCache = new BehaviorSubject<HubCache>(new HubCache(eCacheStatus.NoHub, null));
    private _hubMessages = new BehaviorSubject<Array<Message>>([]);

    private _hubCacheChange = new Subject<HubCacheChange>();

    private _remoteLibraries = new BehaviorSubject<RemoteLibraries>(null);

    private _globalCache: GlobalCache;

    // private _activeAgents: DexihActiveAgent[];
    private _remoteAgent = new BehaviorSubject<DexihActiveAgent>(null);

    public newDatajob: DexihDatajob;
    public newTable: DexihTable;

    // used to track if the hub is currently refreshing to avoid multiple calls.
    private _refreshHubRunning = false;

    private logger = new LogFactory('hub.service');

    constructor(
        private authService: AuthService
    ) {
        this.logger.LogC(() => ` Initialized.`, eLogLevel.Information);

        // listen to any message coming from the server.
        this._webSocketSubscription = this.authService.getWebSocketObservable().subscribe(message => {
            if (message) {
                this.processWebSocketMessage(message);
            }
        });

        this._subscription = combineLatest(
            authService.getGlobalCacheObservable(),
            this.authService.getHubsObservable(),
            this.getHubCacheObservable(),
            this.authService.getRemoteAgentsObservable()
        ).subscribe(result => {
            let globalCache = result[0];
            let hubs = result[1];
            let hubCache = result[2];
            let remoteAgents = result[3];

            this._globalCache = globalCache;

            if (hubCache && hubCache.hub) {

                // if remote libraries are not loaded (from remoteAgent) then use the default.
                if (!this._remoteLibraries.value) {
                    let remoteLibraries = new RemoteLibraries();
                    if (globalCache && globalCache.defaultRemoteLibraries) {
                        remoteLibraries.connections = globalCache.defaultRemoteLibraries.connections;
                        remoteLibraries.transforms = globalCache.defaultRemoteLibraries.transforms;
                        remoteLibraries.functions = globalCache.defaultRemoteLibraries.functions;
                        this._remoteLibraries.next(remoteLibraries);
                    }
                }

                // if the hub is not available, reset.
                if (hubs) {
                    if (hubCache && hubCache.hub) {
                        let hubFound = hubs.find(h => h.hubKey === hubCache.hub.hubKey);
                        if (!hubFound) {
                            this.resetHubCache();
                        }
                    }
                } else {
                    this.resetHubCache();
                }

                this.resetRemoteAgent(hubCache);
            }
        });
    }

    ngOnInit() {

    }

    ngOnDestroy() {
        this.logger.LogC(() => `OnDestroy.`, eLogLevel.Debug);

        if (this._subscription) { this._subscription.unsubscribe(); }
        if (this._webSocketSubscription) { this._webSocketSubscription.unsubscribe(); }
        if (this._remoteAgent) { this._remoteAgent.unsubscribe(); }
        if (this._hubCache) { this._hubCache.unsubscribe(); }
    }

    public isHubCacheLoaded(): boolean {
        return this.getHubCache().status === eCacheStatus.Loaded;
    }

    // gets the hub cache
    getHubCacheObservable(): Observable<HubCache> {
        return this._hubCache.asObservable();
    }

    // gets the hub cache
    getHubCache(): HubCache {
        return this._hubCache.value;
    }

    // hubCacheChange detects specific changes to objects and is used to monitor object changes from other sessions when editing forms.
    getHubCacheChangeObservable(): Observable<HubCacheChange> {
        return this._hubCacheChange.asObservable();
    }

    getHubMessagesObservable(): Observable<Array<Message>> {
        return this._hubMessages.asObservable();
    }

    getHubMessages(): Array<Message> {
        return this._hubMessages.value;
    }

    addHubMessage(message: any, log = false) {
        let converted = message;
        if (message.stack) {
            converted = new Message(false, 'Client Error: ' + message.message, message.stack, '');
        }
        this.authService.addUpdateNotification(converted, log);
        let messages = this.getHubMessages();
        messages.push(converted);
        this._hubMessages.next(messages);
    }

    addHubErrorMessage(message: string) {
        let newMessage = new Message(false, message, null, null);
        this.addHubMessage(newMessage);
    }

    addHubClientErrorMessage(error: Error, context: string) {
        let message = context + '.  The following error occurred on the client: ' + error.message;
        let newMessage = new Message(false, message, error.stack, null);
        this.addHubMessage(newMessage, true);

    }

    addHubSuccessMessage(message: string) {
        let newMessage = new Message(true, message, null, null);
        this.addHubMessage(newMessage);
    }


    // update the hubKey and refresh the cache.
    updateHub(hubKey: number, name: string ): void {
        this.logger.LogC(() => `updateHub, hubKey: ${hubKey}, name: ${name}.`, eLogLevel.Debug);

        this._hubMessages.next([]);

        if (!hubKey || hubKey === 0) {
            let hubCache = new HubCache(eCacheStatus.NoHub, new DexihHub(0, name));
            this._hubCache.next(hubCache);
        } else if (!this._hubCache.getValue().hub || this._hubCache.getValue().hub.hubKey !== hubKey) {
            this.refreshHubCache(hubKey, name);
        }
    }

    // refresh the hubCache.
    refreshHubCache(hubKey: number, name: string): void {
        if (!this._refreshHubRunning) {
            this._refreshHubRunning = true;

            this.logger.LogC(() => `refreshHubCache, hubKey: ${hubKey}, name: ${name}.`, eLogLevel.Debug);

            this._hubCache.next(new HubCache(eCacheStatus.Loading, new DexihHub(hubKey, name)));

            this.authService.post('/api/Hub/GetHubCache', { hubKey: hubKey }, 'Loading the hub cache...').then(result => {
                let hub: DexihHub = result.value.hub;
                hub.hubPermission = result.value.permission;

                this.logger.LogC(() => `refreshHubCache, hub loaded ${hub.name}.`, eLogLevel.Debug);

                // update the status for datalink and datajobs.  These are use to monitor execution status.
                hub.dexihDatalinks.forEach(datalink => {
                    datalink.currentStatus = new BehaviorSubject<TransformWriterResult>(null);
                    datalink.previousStatus = new BehaviorSubject<TransformWriterResult>(null);
                });

                hub.dexihDatajobs.forEach(datajob => {
                    datajob.currentStatus = new BehaviorSubject<TransformWriterResult>(null);
                    datajob.previousStatus = new BehaviorSubject<TransformWriterResult>(null);
                });

                hub.dexihDatalinkTests.forEach(datalinkTest => {
                    datalinkTest.currentStatus = new BehaviorSubject<TransformWriterResult>(null);
                    datalinkTest.previousStatus = new BehaviorSubject<TransformWriterResult>(null);
                });

                hub.dexihTables.forEach(table => {
                    table.currentStatus = new BehaviorSubject<TransformWriterResult>(null);
                    table.previousStatus = new BehaviorSubject<TransformWriterResult>(null);
                });

                hub.dexihApis.forEach(api => {
                    api.currentStatus = new BehaviorSubject<ApiData>(null);
                });

                let hubCache: HubCache = new HubCache(eCacheStatus.Loaded, hub);
                this.resetRemoteAgent(hubCache);
                this._hubCache.next(hubCache);

                this._refreshHubRunning = false;
            }).catch(reason => {
                this.logger.LogC(() => `refreshHubCache, hub load error: ${reason.message}.`, eLogLevel.Error);
                this._hubCache.next(new HubCache(eCacheStatus.Error, null));
                this.addHubMessage(reason);

                this._refreshHubRunning = false;
            });
        }
    }

    resetHubCache(): void {
        this._hubCache.next(new HubCache(eCacheStatus.NoHub, null));
    }

    // set current remoteAgent
    getRemoteAgentObservable(): Observable<DexihActiveAgent> {
        return this._remoteAgent.asObservable();
    }

    getRemoteAgentCurrent(): DexihActiveAgent {
        return this._remoteAgent.value;
    }

    getRemoteLibrariesObservable(): Observable<RemoteLibraries> {
        return this._remoteLibraries.asObservable();
    }

    // sets the remote agent to the appropriate default agent when a status changes.
    resetRemoteAgent(hubCache: HubCache) {
        let activeAgent = this._remoteAgent.value;

        if (hubCache && hubCache.hub && hubCache.hub.dexihRemoteAgentHubs) {
            // check if currently selected agent is still valid for this hub.
            if (activeAgent) {
                if (hubCache.hub.dexihRemoteAgentHubs
                    .find(c => c.isAuthorized && c.isValid && c.remoteAgentKey === activeAgent.remoteAgentKey)) {
                    let remoteAgent = this.authService.getRemoteAgent(activeAgent.remoteAgentKey);
                    if (remoteAgent && remoteAgent.activeAgents &&
                        remoteAgent.activeAgents.find(c => c.instanceId === activeAgent.instanceId)) {
                        return;
                    }
                }
            }

            let defaultAgents = hubCache.hub.dexihRemoteAgentHubs.filter(c => c.isDefault && c.isAuthorized && c.isValid);
            for (let i = 0; i < defaultAgents.length; i++) {
                let remoteAgent = this.authService.getRemoteAgent(defaultAgents[i].remoteAgentKey);
                if (remoteAgent && remoteAgent.activeAgents && remoteAgent.activeAgents.length > 0) {
                    this._remoteAgent.next(remoteAgent.activeAgents[0]);
                    this.getRemoteAgentStatus(hubCache);
                    return;
                }
            }
            let otherAgents = hubCache.hub.dexihRemoteAgentHubs.filter(c => !c.isDefault && c.isAuthorized && c.isValid);
            for (let i = 0; i < otherAgents.length; i++) {
                let remoteAgent = this.authService.getRemoteAgent(otherAgents[i].remoteAgentKey);
                if (remoteAgent && remoteAgent.activeAgents && remoteAgent.activeAgents.length > 0) {
                    this._remoteAgent.next(remoteAgent.activeAgents[0]);
                    this.getRemoteAgentStatus(hubCache);
                    return;
                }
            }

            this.setNoRemoteAgent(hubCache);
        } else {
            this.setNoRemoteAgent(hubCache);
        }
    }

    setCurrentRemoteAgent(activeAgent: DexihActiveAgent) {
        if (activeAgent) {
            let remoteAgentHubs = this._hubCache.value.hub.dexihRemoteAgentHubs;
            let authorized = remoteAgentHubs.findIndex(c => c.remoteAgentKey === activeAgent.remoteAgentKey && c.isAuthorized);
            if (authorized < 0) {
                this.addHubErrorMessage('Can not select the remote agent as it is not authorized.')
            } else {
                this._remoteAgent.next(activeAgent);
            }
        }
    }

    setNoRemoteAgent(hubCache: HubCache) {
        this._remoteAgent.next(null);
        let hub = hubCache.hub;

        if (!hub) { return; }

        hub.dexihApis.forEach(api => {
            api.currentStatus.next(null);
        });

        // merge the datalink/datajob status into the cached objects.
        hub.dexihDatalinks.forEach(datalink => {
            datalink.currentStatus.next(null);
            datalink.previousStatus.next(null);
        });

        hub.dexihTables.forEach(table => {
            table.currentStatus.next(null);
            table.previousStatus.next(null);
        });

        hub.dexihDatajobs.forEach(datajob => {
            datajob.currentStatus.next(null);
            datajob.previousStatus.next(null);
        });

        hub.dexihDatalinkTests.forEach(test => {
            test.currentStatus.next(null);
            test.previousStatus.next(null);
        });
    }

    // gets the current remote agent
    getCurrentRemoteAgentInstanceId(required = true): string {
        let agent = this._remoteAgent.getValue();
        if (!agent) {
            if (required) {
                let message = 'The operation can not be completed, as there is no remote agent selected.';
                this.addHubErrorMessage(message)
                throw(message);
            } else {
                return '';
            }
        } else {
            return agent.instanceId;
        }
    }

    private processWebSocketMessage(data: RemoteMessage) {
            this.logger.LogC(() => `processWebSocketMessage, method: ${data.method}, value: ${data.value}.`, eLogLevel.Debug);

            switch (data.method) {
                case 'connect':
                    let cache = this.getHubCache();

                    // if there is an existing cache, and there is a reconnect, then reload it.
                    // otherwise, it will be loaded by the hubComponent.
                    if (cache && cache.status === eCacheStatus.Loaded) {
                        this.refreshHubCache(cache.hub.hubKey, cache.hub.name);
                        this.resetRemoteAgent(this._hubCache.value);
                    }
                    break;
                case 'remoteAgent-update':
                case 'remoteAgent-delete':
                case 'remoteAgent-deleteKey':
                case 'disconnect': {
                    this.resetRemoteAgent(this._hubCache.value);
                    break;
                }
                case 'hub-change': {
                    let hubChange: Import = data.value;
                    this.updateHubChange(hubChange);
                    break;
                }
                case 'hub-error': {
                    let message: Message = data.value;
                    this.addHubMessage(message);
                    break;
                }
                case 'datalink-progress' : {
                    let task: ManagedTask = data.value;
                    this.addDatalinkProgress(task);
                }
                break;
                case 'datalink-status' : {
                    let task: ManagedTask = data.value;
                    this.addDatalinkProgress(task);
                }
                break;
                case 'datajob-progress' : {
                    let task: ManagedTask = data.value;
                    this.addDatajobProgress(task);
                }
                break;
                case 'datajob-status' : {
                    let task: ManagedTask = data.value;
                    this.addDatajobProgress(task);
                }
                break;
                case 'datalinkTest-progress' : {
                    let task: ManagedTask = data.value;
                    this.addDatalinkTestProgress(task);
                }
                break;
                case 'api-status': {
                    let apiData: ApiData = data.value;
                    this.addApiStatus(apiData);
                }
                break;
            }
            this.logger.LogC(() => `processWebSocketMessage completed, method: ${data.method}.`, eLogLevel.Debug);
    }

    private updateHubChange(hubChange: Import) {
        let hubCache = this.getHubCache();

        this.mergeChange(hubChange.hubVariables, hubCache.hub.dexihHubVariables, 'key', eSharedObjectType.HubVariable);
        this.mergeChange(hubChange.columnValidations, hubCache.hub.dexihColumnValidations, 'key',
            eSharedObjectType.ColumnValidation);
        this.mergeChange(hubChange.connections, hubCache.hub.dexihConnections, 'key', eSharedObjectType.Connection);
        this.mergeChange(hubChange.datajobs, hubCache.hub.dexihDatajobs, 'key', eSharedObjectType.Datajob);
        this.mergeChange(hubChange.datalinks, hubCache.hub.dexihDatalinks, 'key', eSharedObjectType.Datalink);
        this.mergeChange(hubChange.fileFormats, hubCache.hub.dexihFileFormats, 'key', eSharedObjectType.FileFormat);
        this.mergeChange(hubChange.customFunctions, hubCache.hub.dexihCustomFunctions, 'key',
            eSharedObjectType.CustomFunction);
        this.mergeChange(hubChange.remoteAgentHubs, hubCache.hub.dexihRemoteAgentHubs, 'key', eSharedObjectType.RemoteAgent);
        this.mergeChange(hubChange.datalinkTests, hubCache.hub.dexihDatalinkTests, 'key', eSharedObjectType.DatalinkTest);
        this.mergeChange(hubChange.views, hubCache.hub.dexihViews, 'key', eSharedObjectType.View);
        this.mergeChange(hubChange.apis, hubCache.hub.dexihApis, 'key', eSharedObjectType.Api);
        this.mergeChange(hubChange.tables, hubCache.hub.dexihTables, 'key', eSharedObjectType.Table);

        if (hubChange.remoteAgentHubs.length > 0) {
            this.resetRemoteAgent(hubCache);
        }
    }

    private mergeChange(source: ImportObject<any>[], target: any[], keyField: string, changeClass: eSharedObjectType) {
        if (source && source.length > 0) {
            source.forEach(item => {
                let current = target.find(c => c[keyField] === item.item[keyField]);

                // if the change is a datalink or datajob, preserve the current/previous status.
                if (changeClass === eSharedObjectType.Datalink || changeClass === eSharedObjectType.Datajob ||
                    changeClass === eSharedObjectType.Table) {
                    if (current) {
                        item.item.currentStatus = current.currentStatus;
                        item.item.previousStatus = current.previousStatus;
                    } else {
                        item.item.currentStatus = new BehaviorSubject<TransformWriterResult>(null);
                        item.item.previousStatus = new BehaviorSubject<TransformWriterResult>(null);
                    }
                }

                if ( changeClass === eSharedObjectType.Api) {
                    if (current) {
                        item.item.currentStatus = current.currentStatus;
                        item.item.previousStatus = current.previousStatus;
                    } else {
                        item.item.currentStatus = new BehaviorSubject<ApiData>(null);
                        item.item.previousStatus = new BehaviorSubject<ApiData>(null);
                    }
                }

                // if the change is a connection, preserve the existing tables.
                if (changeClass === eSharedObjectType.Connection && current) {
                    item.item.dexihTables = current.dexihTables;
                }

                switch (item.importAction) {
                    case eImportAction.New:
                    case eImportAction.Replace:
                        if (current) {
                            Object.assign(current, item.item);
                        } else {
                            current = item.item;
                            target.push(item.item);
                        }
                        break;
                    case eImportAction.Delete:
                        if (current) {
                            let index = target.findIndex(c => c[keyField] === item.item[keyField]);
                            target.splice(index, 1);
                        }
                }

                this._hubCacheChange.next(new HubCacheChange(changeClass, item.importAction, current));
            })
        }
    }

    private addApiStatus(apiData: ApiData) {
        const api = this._hubCache.value.hub.dexihApis.find(c => c.key === apiData.apiKey);
        if (api) {
            api.currentStatus.next(apiData);
            this._hubCacheChange.next(new HubCacheChange(eSharedObjectType.ApiStatus, eImportAction.Replace, api));
        }
    }

        // updates the datalink progress observables.
    private addDatalinkProgress(task: ManagedTask) {
        if (!this.isHubCacheLoaded()) { return; }
        let writerResult: TransformWriterResult = task.data;
        if (!writerResult) {return; }
        const datalink = this._hubCache.value.hub.dexihDatalinks.find(c => c.key === writerResult.referenceKey);
        if (datalink) {
            if (writerResult.runStatus === eRunStatus.Abended ||
                writerResult.runStatus === eRunStatus.Finished ||
                writerResult.runStatus === eRunStatus.FinishedErrors ) {
                    datalink.previousStatus.next(writerResult);
                    datalink.currentStatus.next(null);
            } else {
                datalink.currentStatus.next(writerResult);
            }

            if (writerResult.targetTableKey > 0) {
                this.addTableProgress(writerResult);
            }

            if (writerResult.childResults) {
                writerResult.childResults.forEach(c => {
                    this.addTableProgress(c);
                });
            }
            this._hubCacheChange.next(new HubCacheChange(eSharedObjectType.TransformWriterResult, eImportAction.Replace, writerResult));
        }
    }

    private addDatalinkTestProgress(task: ManagedTask) {
        let writerResult: TransformWriterResult = task.data;
        if (!writerResult) {return; }
        const datalinkTest = this._hubCache.value.hub.dexihDatalinkTests.find(c => c.key === writerResult.referenceKey);
        if (datalinkTest) {
            if (writerResult.runStatus === eRunStatus.Abended ||
                writerResult.runStatus === eRunStatus.Finished ||
                writerResult.runStatus === eRunStatus.FinishedErrors ) {
                    datalinkTest.previousStatus.next(writerResult);
                    datalinkTest.currentStatus.next(null);
            } else {
                datalinkTest.currentStatus.next(writerResult);
            }
            this._hubCacheChange.next(new HubCacheChange(eSharedObjectType.TransformWriterResult, eImportAction.Replace, writerResult));
        }
    }

    private addTableProgress(writerResult: TransformWriterResult) {
        if (!writerResult) {return; }
        const table = this._hubCache.value.getTable(writerResult.targetTableKey);
        if (table) {
            if (writerResult.runStatus === eRunStatus.Abended ||
                writerResult.runStatus === eRunStatus.Finished ||
                writerResult.runStatus === eRunStatus.FinishedErrors ) {
                    table.previousStatus.next(writerResult);
                    table.currentStatus.next(null);
            } else {
                table.currentStatus.next(writerResult);
            }
            this._hubCacheChange.next(new HubCacheChange(eSharedObjectType.TransformWriterResult, eImportAction.Replace, writerResult));

            if (writerResult.childResults) {
                writerResult.childResults.forEach(c => {
                    this.addTableProgress(c);
                });
            }
        }
    }


      // updates the datalink progress observables.
    private addDatajobProgress(task: ManagedTask) {
        if (!this.isHubCacheLoaded()) { return; }
        let writerResult: TransformWriterResult = task.data;
        if (!writerResult || !writerResult.auditKey) {return; }
        const datajob = this._hubCache.value.hub.dexihDatajobs.find(c => c.key === writerResult.referenceKey);
        if (datajob) {
            if (writerResult.runStatus === eRunStatus.Abended ||
                writerResult.runStatus === eRunStatus.Finished ||
                writerResult.runStatus === eRunStatus.FinishedErrors ) {
                    datajob.previousStatus.next(writerResult);
                    datajob.currentStatus.next(null);
            } else {
                datajob.currentStatus.next(writerResult);
            }
            this._hubCacheChange.next(new HubCacheChange(eSharedObjectType.TransformWriterResult, eImportAction.Replace, writerResult));
        }
    }

     deleteRemoteAgent(remoteAgent: DexihRemoteAgentHub): Promise<boolean> {
        return new Promise<boolean>((resolve, reject) => {
            this.authService.confirmDialog('Delete remote agent?', 'This action will delete the selected ' +
                 ' remote agent from this hub.  <p></p>Are you sure?').then(confirm => {
                    // call the delete.
                    this.authService.post('/api/Hub/DeleteRemoteAgent', {
                            hubKey: this._hubCache.value.hub.hubKey,
                            remoteAgentHubKey:  remoteAgent.remoteAgentHubKey,
                        }, 'Deleting the hub remote agent...').then(result => {
                        resolve(result.value);
                        return result;
                    }).catch(reason => {
                        this.logger.LogC(() => `DeleteRemoteAgent, error: ${reason.message}.`, eLogLevel.Error);
                        this.addHubMessage(reason);
                        reject(reason);
                        return false;
                    });
                }).catch(reason => {
                    resolve(false);
                    return false;
                });
            });
    }

    saveRemoteAgent(remoteAgentHub: DexihRemoteAgentHub): Promise<boolean> {
        return new Promise<boolean>((resolve, reject) => {
            let remoteAgent = this.authService.getRemoteAgent(remoteAgentHub.remoteAgentKey);
            if (!remoteAgent.activeAgents || remoteAgent.activeAgents.length === 0 ) {
                let message = new Message(false, 'The agent must be connected.', '', null);
                this.addHubMessage(message);
                reject(message);
                return;
            }

            let instanceId = remoteAgent.activeAgents[0].instanceId;

            this.authService.post('/api/Hub/SaveRemoteAgent', {
                    hubKey: this._hubCache.value.hub.hubKey,
                    value: remoteAgentHub,
                    remoteAgentInstanceId: instanceId
                }, 'Saving the hub remote agent...').then(result => {
                resolve(result.value);
                return result;
            }).catch(reason => {
                this.logger.LogC(() => `SaveRemoteAgent, error: ${reason.message}.`, eLogLevel.Error);
                this.addHubMessage(reason);
                reject(reason);
            });
        });
    }

    // updates all the information on the remoteAgent.
    getRemoteAgentStatus(hubCache: HubCache): Promise<boolean> {
        return new Promise<boolean>((resolve, reject) => {
            let instanceId = this.getCurrentRemoteAgentInstanceId(false);
            if (instanceId) {
                this.authService.post('/api/Hub/GetRemoteAgentStatus', {
                    hubKey: hubCache.hub.hubKey,
                    instanceId: instanceId
                    }, 'Getting the remote agent status...').then(result => {
                    if (result.success) {
                        const agentStatus: RemoteAgentStatus = result.value;
                        const hub = this._hubCache.value.hub;

                        // combine any functions in the libraries on the remote agent with the standard global remote libraries.
                        let remoteLibraries = new RemoteLibraries();
                        remoteLibraries.connections =
                            this._globalCache.defaultRemoteLibraries.connections.concat(agentStatus.remoteLibraries.connections);
                        remoteLibraries.transforms =
                            this._globalCache.defaultRemoteLibraries.transforms.concat(agentStatus.remoteLibraries.transforms);
                        remoteLibraries.functions =
                        this._globalCache.defaultRemoteLibraries.functions.concat(agentStatus.remoteLibraries.functions);

                        this._remoteLibraries.next(remoteLibraries);

                        hub.dexihApis.forEach(api => {
                            api.currentStatus.next(agentStatus.activeApis.find(c => c.apiKey === api.key));
                        });

                        // merge the datalink/datajob status into the cached objects.
                        hub.dexihDatalinks.forEach(datalink => {
                            datalink.currentStatus.next(this.getTransformWriterResult(datalink.key,  agentStatus.activeDatalinks));
                            datalink.previousStatus.next(
                                this.getTransformWriterResult(datalink.key,  agentStatus.previousDatalinks));
                        });

                        hub.dexihTables.forEach(table => {
                            table.currentStatus.next(this.getTransformWriterTable(table.key, agentStatus.activeDatalinks));
                            table.previousStatus.next(this.getTransformWriterTable(table.key, agentStatus.previousDatalinks));
                        });

                        hub.dexihDatajobs.forEach(datajob => {
                            datajob.currentStatus.next(this.getTransformWriterResult(datajob.key,  agentStatus.activeDatajobs));
                            datajob.previousStatus.next(this.getTransformWriterResult(datajob.key,  agentStatus.previousDatajobs));
                        });

                        hub.dexihDatalinkTests.forEach(test => {
                            test.currentStatus.next(this.getTransformWriterResult(test.key,  agentStatus.activeDatalinkTests));
                            test.previousStatus.next(
                                this.getTransformWriterResult(test.key,  agentStatus.previousDatalinkTests));
                        });

                        resolve(true);

                    } else {
                        this.logger.LogC(() => `getRemoteAgentStatus, warning: ${result.message}.`, eLogLevel.Warning);
                        reject(result.message);
                    }
                    return result;
                }).catch(reason => {
                    this.logger.LogC(() => `getRemoteAgentStatus, error: ${reason.message}.`, eLogLevel.Error);
                    this.addHubMessage(reason);
                    reject(reason);
                });
            }
        });
    }

    private getTransformWriterResult(referentKey: number, tasks: ManagedTask[]): TransformWriterResult {
        let task = tasks.find(c => c.data && c.data.referenceKey === referentKey);
        if (!task) { return null; }
        return task.data;
    }

    private getTransformWriterTable(tableKey, tasks: ManagedTask[]): TransformWriterResult {
        for (let task of tasks) {
            let datalinkResult = <TransformWriterResult> task.data;
            if (datalinkResult == null) { return null; }
            let writerResult = this.SearchForTable(tableKey, datalinkResult);
            if (writerResult) { return writerResult; }
        }

        return null;
    }

    private SearchForTable(tableKey: number, writerResult: TransformWriterResult) {
        if (writerResult.targetTableKey === tableKey) { return writerResult; }

        if (writerResult && writerResult.childResults) {
            for (let child of writerResult.childResults) {
                return this.SearchForTable(tableKey, child);
            }
        }

        return null;
    }

        // updates all the information on the remoteAgent.
    getHubUsers(): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            const hub = this._hubCache.value.hub;
            this.authService.post('/api/Hub/HubUsers', {hubKey: hub.hubKey }, 'Getting hub users...')
                .then(result => {
                    resolve(result);
            }).catch(reason => {
                this.logger.LogC(() => `getHubUsers, error: ${reason.message}.`, eLogLevel.Error);
                this.addHubMessage(reason);
                reject(reason);
            });
        });
    }

    setUserPermissions(emails: string[], permission: ePermission, sendInvites: boolean): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            const hub = this._hubCache.value.hub;
            this.authService.post('/api/Hub/SetUsersPermission', {
                hubKey: hub.hubKey, emails: emails, permission: permission, sendInvites: sendInvites
            }, 'Setting user permissions...')
                .then(result => {
                    resolve(result);
            }).catch(reason => {
                this.logger.LogC(() => `setUserPermissions, error: ${reason.message}.`, eLogLevel.Error);
                this.addHubMessage(reason);
                reject(reason);
            });
        });
    }

    removeUsers(emails: string[]): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            const hub = this._hubCache.value.hub;
            this.authService.post('/api/Hub/RemoveUsers', {hubKey: hub.hubKey, emails: emails }, 'Removing hub users...')
                .then(result => {
                    resolve(result);
            }).catch(reason => {
                this.logger.LogC(() => `RemoveUsers, error: ${reason.message}.`, eLogLevel.Error);
                this.addHubMessage(reason);
                reject(reason);
            });
        });
    }

    exportHub(hub: DexihHub, filename: string) {
        const content = JSON.stringify(hub, (key, value) => {
            // don't bother saving the null values.
            if (!value) { return undefined; }

            switch (key) {
                case 'currentStatus':
                case 'entityStatus':
                case 'previousStatus':
                case 'runTime':
                    return undefined;
            }
            return value;
        } );

        let blob = new Blob([content], { type: 'application/json;charset=utf-8;' });
        if (navigator.msSaveBlob) { // IE 10+
            navigator.msSaveBlob(blob, filename);
        } else {
            let link = document.createElement('a');
            if (link.download !== undefined) { // feature detection
                // Browsers that support HTML5 download attribute
                let url = URL.createObjectURL(blob);
                link.setAttribute('href', url);
                link.setAttribute('download', filename);
                link.style.visibility = 'hidden';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            }
        }
    }



    importPackage(importPackage: Import): Promise<any> {
        return new Promise<DexihConnection>((resolve, reject) => {
            this.authService.post('/api/Hub/ImportPackage', importPackage, 'Importing package...' ).then(result => {
                resolve(result.value);
                return result;
            }).catch(reason => {
                this.logger.LogC(() => `importPackage, error: ${reason.message}.`, eLogLevel.Error);
                this.addHubMessage(reason);
                reject(reason);
            });
        });
    }

    deleteConnections(connections: Array<DexihConnection>): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
        let connectionNames = connections.map(c => c.name).join('<br>');

        this.authService.confirmDialog('Delete the selected connection(s)',
            'This action will delete the following connections:<p></p>' + connectionNames + '<p></p> Are you sure?').then(confirmed => {
                // call the delete.
                this.authService.post('/api/Hub/DeleteConnections', {
                    hubKey: this._hubCache.value.hub.hubKey,
                    itemKeys: connections.map(c => c.key)
                }, 'Deleting connections...').then(result => {
                    resolve(result.value);
                    return result;
                }).catch(reason => {
                    this.logger.LogC(() => `deleteConnections, error: ${reason.message}.`, eLogLevel.Error);
                    this.addHubMessage(reason);
                    reject(reason);
                    return false;
                });
            }).catch(reason => {
                resolve(false);
                return false;
            });
    });
    }

    // tests the connection and refreshes the databases.
    refreshConnection(connection: DexihConnection): Promise<Array<string>> {
        return new Promise<Array<string>>((resolve, reject) => {
            let remoteMessage = new RemoteMessage();
            remoteMessage.remoteAgentId = this.getCurrentRemoteAgentInstanceId();
            remoteMessage.hubVariables = this._hubCache.value.hub.dexihHubVariables;
            remoteMessage.method = 'RefreshConnection';
            remoteMessage.hubKey = this._hubCache.value.hub.hubKey,
            remoteMessage.value = connection;

            this.authService.post('/api/Hub/RunRemoteCommand', remoteMessage, 'Refreshing connection...')
                .then(result => {
                connection.databases = result.value;
                resolve(result.value);
                return result;
            }).catch(reason => {
                this.logger.LogC(() => `refreshConnection, error: ${reason.message}.`, eLogLevel.Error);
                this.addHubMessage(reason);
                reject(reason);
            });
        });
    }

    // tests the connection and refreshes the databases.
    createDatabase(connection: DexihConnection): Promise<any> {
        return new Promise<DexihConnection>((resolve, reject) => {
            let remoteMessage = new RemoteMessage();
            remoteMessage.remoteAgentId = this.getCurrentRemoteAgentInstanceId();
            remoteMessage.hubVariables = this._hubCache.value.hub.dexihHubVariables;
            remoteMessage.method = 'CreateDatabase';
            remoteMessage.hubKey = this._hubCache.value.hub.hubKey;
            remoteMessage.value = connection;

            this.authService.post('/api/Hub/RunRemoteCommand', remoteMessage, 'Creating new database...')
            .then(result => {
                connection.databases = result.value;
                resolve(result.value);
                return result;
            }).catch(reason => {
                this.logger.LogC(() => `createDatabase, error: ${reason.message}.`, eLogLevel.Error);
               this.addHubMessage(reason);
                reject(reason);
            });
        });
    }

    // saves the current connection.
    saveConnection(connection: DexihConnection): Promise<any> {
        return new Promise<DexihConnection>((resolve, reject) => {
            this.authService.post('/api/Hub/SaveConnection', {
                hubKey: this._hubCache.value.hub.hubKey,
                remoteAgentId: this.getCurrentRemoteAgentInstanceId(false),
                connection: connection
            }, 'Saving connection...').then(result => {
                resolve(result.value);
                return result;
            }).catch(reason => {
                this.logger.LogC(() => `saveConnection, error: ${reason.message}.`, eLogLevel.Error);
                this.addHubMessage(reason);
                reject(reason);
            });
        });
    }

    // decrypted a value in the hub.
    decrypt(value: string): Promise<string> {
        return new Promise<string>((resolve, reject) => {
            this.authService.post('/api/Hub/Decrypt', {
                hubKey: this._hubCache.value.hub.hubKey,
                remoteAgentId: this.getCurrentRemoteAgentInstanceId(),
                value: value
            }, 'Decrypting...').then(result => {
                resolve(result.value);
                return result;
            }).catch(reason => {
                this.logger.LogC(() => `decrypt, error: ${reason.message}.`, eLogLevel.Error);
                this.addHubMessage(reason);
                reject(reason);
            });
        });
    }

    // gets a list of table names in a remote database
    getDatabaseTableNames(connection: DexihConnection): Promise<Array<DexihTable>> {
        return new Promise<Array<DexihTable>>((resolve, reject) => {
            let remoteMessage = new RemoteMessage();
            remoteMessage.remoteAgentId = this.getCurrentRemoteAgentInstanceId();
            remoteMessage.hubVariables = this._hubCache.value.hub.dexihHubVariables;
            remoteMessage.method = 'DatabaseTableNames';
            remoteMessage.hubKey = this._hubCache.value.hub.hubKey;
            remoteMessage.value = connection;

            this.authService.post('/api/Hub/RunRemoteCommand', remoteMessage, 'Getting database table names...')
            .then(result => {
                resolve(result.value);
                return result;
            }).catch(reason => {
                this.logger.LogC(() => `getDatabaseTableNames, error: ${reason.message}.`, eLogLevel.Error);
                this.addHubMessage(reason);
                reject(reason);
            });
        });
    }

    // import a list of specified tables in a remote database
    importTables(tables: Array<DexihTable>, save: boolean): Promise<Array<DexihTable>> {
        return new Promise<Array<DexihTable>>((resolve, reject) => {

            // if there are any table that are already imported, then warn the over of an overwrite.
            let importedTables = tables.filter(c => c.key > 0);

            if (importedTables.length > 0) {
                this.authService.confirmDialog('Re-Import Tables',
                'This action will re-import the following tables, which will reset column customizations ' +
                ' (such as descriptions, column validations, delta types etc.) and may invalidate some datalink mappings. <p></p>' +
                        importedTables.map(c => c.name).join(',') +
                        '  <p></p><p></p>Are you sure you want to continue?').then(confirm => {
                            this.doImport(tables, save).then(result => resolve(result)).catch(reason => reject(reason));
                        }).catch(reason => {
                            resolve(null);
                        });
            } else {
                this.doImport(tables, save).then(result => resolve(result)).catch(reason => reject(reason));
            }
        });
    }

    public doImport(tables: Array<DexihTable>, save: boolean): Promise<Array<DexihTable>> {
        return new Promise<Array<DexihTable>>((resolve, reject) => {
            this.authService.post('/api/Hub/ImportTables', {
                hubKey: this._hubCache.value.hub.hubKey,
                remoteAgentId: this.getCurrentRemoteAgentInstanceId(),
                tables: tables,
                save: save
            }, 'Importing tables...')
            .then(result => {
                resolve(result.value);
                return result;
            }).catch(reason => {
                this.logger.LogC(() => `doImport, error: ${reason.message}.`, eLogLevel.Error);
                this.addHubMessage(reason);
                reject(reason);
            });
        });
    }

        // import a list of specified tables in a remote database
    reImportTables(tableKeys: Array<number>, save: boolean): Promise<Array<DexihTable>> {
        return new Promise<Array<DexihTable>>((resolve, reject) => {
            const cache = this._hubCache.value;

            let tables: Array<DexihTable> = [];
            let connections: Array<DexihConnection> = [];
            tableKeys.forEach(tableKey => {
                const table = cache.getTable(tableKey);
                if (!table) {
                    const message = `Error: The re-import failed, as the table with the key ${tableKey} could not be found.`;
                    this.addHubErrorMessage(message);
                    this.logger.LogC(() => message, eLogLevel.Error);
                    reject(message);
                }
                tables.push(table);
            });

            this.authService.confirmDialog('Re-Import Tables',
            'This action will re-import the following tables, which will reset column customizations ' +
            ' (such as descriptions, column validations, delta types etc.) and may invalidate some datalink mappings. <p></p>' +
                    tables.map(c => c.name).join(',') +
                    '  <p></p><p></p>Are you sure you want to continue?').then(confirm => {

                        this.doImport(tables, save)
                            .then(result => {
                                resolve(result);
                            }).catch(reason => {
                                reject(reason);
                            });
                    }).catch(reason => {
                        resolve(null);
                    });
        });
    }

    clearTables(tableKeys: Array<number>): Promise<boolean> {
        return new Promise<boolean>((resolve, reject) => {
            const cache = this._hubCache.value;

            let tables: Array<DexihTable> = [];
            let connections: Array<DexihConnection> = [];
            tableKeys.forEach(tableKey => {
                const table = cache.getTable(tableKey);
                if (!table) {
                    const message = `Error: The clear tables failed, as the table with the key ${tableKey} could not be found.`;
                    this.addHubErrorMessage(message);
                    this.logger.LogC(() => message, eLogLevel.Error);
                    reject(message);
                }
                tables.push(table);
            });

            this.authService.confirmDialog('Clear Tables',
            'This action will remove <b>ALL DATA</b> from the following tables.  This action cannot be reversed.' +
                    tables.map(c => c.name).join(',') +
                    '  <p></p><p></p>Are you sure you want to continue?').then(confirm => {

                        this.authService.post('/api/Hub/ClearTables', {
                            hubKey: this._hubCache.value.hub.hubKey,
                            remoteAgentId: this.getCurrentRemoteAgentInstanceId(),
                            tables: tables,
                        }, 'Clearing tables...')
                        .then(result => {
                            resolve(result.value);
                            return result;
                        }).catch(reason => {
                            this.logger.LogC(() => `clearTables, error: ${reason.message}.`, eLogLevel.Error);
                            this.addHubMessage(reason);
                            reject(reason);
                        });
                    }).catch(reason => {
                        resolve(null);
                    });
        });
    }

    createTables(tables: Array<DexihTable>): Promise<boolean> {
        return new Promise<boolean>((resolve, reject) => {
            const cache = this._hubCache.value;

            this.authService.confirmDialog('Re-Create Tables',
            // tslint:disable-next-line:max-line-length
            'This action will drop and re-create the following tables, removing <b>ALL DATA</b>.  This action cannot be reversed.<p></p><p></p>' +
                    tables.map(c => c.name).join(',') +
                    '  <p></p><p></p>Are you sure you want to continue?').then(confirm => {

                        this.authService.post('/api/Hub/CreateTables', {
                            hubKey: this._hubCache.value.hub.hubKey,
                            remoteAgentId: this.getCurrentRemoteAgentInstanceId(false),
                            tables: tables,
                            dropTables: true
                        }, 'Creating tables...')
                        .then(result => {
                            resolve(result.value);
                            return result;
                        }).catch(reason => {
                            this.logger.LogC(() => `createTables, error: ${reason.message}.`, eLogLevel.Error);
                            this.addHubMessage(reason);
                            reject(reason);
                        });
                    }).catch(reason => {
                        resolve(null);
                    });
        });
    }

    // remove imported tables
    deleteTables(tables: Array<DexihTable>): Promise<boolean> {
        return new Promise<boolean>((resolve, reject) => {
            const names = tables.map(c => c.name).join('<br>');
            this.authService.confirmDialog('Delete Tables',
            'This action will delete the selected tables from the repository metadata ' +
            '(note, this action \"does not\" delete tables from the underlying database).<p></p>' +
            names +
            ' <p></p><p></p>Are you sure you want to continue?'
            ).then(confirm => {
                // call the delete.
                this.authService.post('/api/Hub/DeleteTables', {
                    hubKey: this._hubCache.value.hub.hubKey,
                    remoteAgentId: this.getCurrentRemoteAgentInstanceId(false),
                    tableKeys: tables.map(t => t.key)
                }, 'Deleting tables...').then(result => {
                    resolve(result.value);
                    return result;
                }).catch(reason => {
                    this.logger.LogC(() => `deleteTables, error: ${reason.message}.`, eLogLevel.Error);
                    this.addHubMessage(reason);
                    reject(reason);
                });
            }).catch(reason => {
                resolve(false);
                return false;
            });
        });
    }

    shareTables(tableKeys: Array<number>, isShared: boolean): Promise<boolean> {
        return new Promise<boolean>((resolve, reject) => {
            // call the delete.
            this.authService.post('/api/Hub/ShareTables', {
                hubKey: this._hubCache.value.hub.hubKey,
                tableKeys: tableKeys,
                isShared: isShared
            }, 'Sharing tables...').then(result => {
                resolve(result.value);
                return result;
            }).catch(reason => {
                this.logger.LogC(() => `shareTables, error: ${reason.message}.`, eLogLevel.Error);
                this.addHubMessage(reason);
                reject(reason);
            });
        });
    }

    // save an updated table
    saveTable(table: DexihTable): Promise<DexihTable> {
        return new Promise<DexihTable>((resolve, reject) => {
            let value = table;

            this.authService.post('/api/Hub/SaveTable', {
                hubKey: this._hubCache.value.hub.hubKey,
                value: value
            }, 'Saving table...').then(result => {
                resolve(result.value);
                return result;
            }).catch(reason => {
                this.logger.LogC(() => `saveTable, error: ${reason.message}.`, eLogLevel.Error);
                this.addHubMessage(reason);
                reject(reason);
            });
        });
    }

    // create datalinks
    createDatalinks(sourceTableKeys: Array<number>, name: string, datalinkType: eDatalinkType,
        targetConnectionKey: number, targetTableKey: number,
        targetTableName: string, auditConnectionKey: number,
        addSourceColumns: boolean, auditColumns: Array<eDeltaType>): Promise<Array<DexihDatalink>> {
        return new Promise<Array<DexihDatalink>>((resolve, reject) => {
            this.authService.post('/api/Hub/CreateDatalinks', {
                hubKey: this._hubCache.value.hub.hubKey,
                remoteAgentId: this.getCurrentRemoteAgentInstanceId(),
                sourceTableKeys: sourceTableKeys,
                datalinkName: name,
                datalinkType: datalinkType,
                targetConnectionKey: targetConnectionKey,
                targetTableKey: targetTableKey,
                targetTableName: targetTableName,
                auditConnectionKey: auditConnectionKey,
                addSourceColumns,
                auditColumns
            }, 'Creating datalinks...').then(result => {
                resolve(result.value);
                return result;
            }).catch(reason => {
                this.logger.LogC(() => `createDatalinks, error: ${reason.message}.`, eLogLevel.Error);
                this.addHubMessage(reason);
               reject(reason);
            });
        });
    }

        // remove datalinks
    deleteDatalinks(datalinks: Array<DexihDatalink>): Promise<boolean> {
        return new Promise<boolean>((resolve, reject) => {
            const datalinkNames = datalinks.map(c => c.name).join('<br>');
            this.authService.confirmDialog('Delete Datalinks',
            'This action will delete the following datalinks and underlying transforms from the repository metadata.<p></p>' +
            datalinkNames +
            '<p></p><p></p>Are you sure you want to continue?'
            ).then(confirm => {
                // call the delete.
                this.authService.post('/api/Hub/DeleteDatalinks', {
                    hubKey: this._hubCache.value.hub.hubKey,
                    remoteAgentId: this.getCurrentRemoteAgentInstanceId(false),
                    itemKeys: datalinks.map(d => d.key)
                }, 'Deleting datalinks...').then(result => {
                    resolve(result.value);
                    return result;
                }).catch(reason => {
                    this.logger.LogC(() => `deleteDatalinks, error: ${reason.message}.`, eLogLevel.Error);
                    this.addHubMessage(reason);
                    reject(reason);
                });
            }).catch(reason => {
                  resolve(false);
                return false;
            });
        });
    }

    shareDatalinks(datalinkKeys: Array<number>, isShared: boolean): Promise<boolean> {
        return new Promise<boolean>((resolve, reject) => {
            // call the delete.
            this.authService.post('/api/Hub/ShareDatalinks', {
                hubKey: this._hubCache.value.hub.hubKey,
                remoteAgentId: this.getCurrentRemoteAgentInstanceId(),
                datalinkKeys: datalinkKeys,
                isShared: isShared
            }, 'Sharing datalinks...').then(result => {
                resolve(result.value);
                return result;
            }).catch(reason => {
                this.logger.LogC(() => `shareDatalinks, error: ${reason.message}.`, eLogLevel.Error);
                this.addHubMessage(reason);
                reject(reason);
            });
        });
    }

    // copies the object excluding listed keys.
    private omitKeys(obj, keys: Array<string>) {
        let dup = {};
        Object.keys(obj).forEach(key => {
            if (keys.indexOf(key) === -1) {
                dup[key] = obj[key];
            }
        });

        return dup;
    }

    runDatalinks(datalinksKeys: Array<number>, truncateTarget: boolean,
        resetIncremental: boolean, resetIncrementalValue: string, inputColumns: InputColumn[]): Promise<boolean> {

        return new Promise<boolean>((resolve, reject) => {
            if (truncateTarget) {
                this.authService.confirmDialog('Truncate Target Tables',
                'This action will truncate all data in the target tables in the selected datalinks and reload from source.  ' +
                '<p></p><p></p>Are you sure you want to continue?'
                ).then(confirm => {
                    this.doRunDatalinks(datalinksKeys, truncateTarget, resetIncremental, resetIncrementalValue, inputColumns);
                }).catch(reason => {
                    resolve(false);
                });
            } else {
                this.doRunDatalinks(datalinksKeys, truncateTarget, resetIncremental, resetIncrementalValue, inputColumns);
            }
        });
    }

    private doRunDatalinks(datalinkKeys: Array<number>, truncateTarget: boolean,
        resetIncremental: boolean, resetIncrementalValue: string, inputColumns: InputColumn[]) {

        return new Promise<boolean>((resolve, reject) => {
            this.authService.post('/api/Hub/RunDatalinks', {
                hubKey: this._hubCache.value.hub.hubKey,
                remoteAgentId: this.getCurrentRemoteAgentInstanceId(),
                connectionId: this.authService.getWebSocketConnectionId(),
                datalinkKeys: datalinkKeys,
                truncateTarget: truncateTarget,
                resetIncremental: resetIncremental,
                resetIncrementalValue: resetIncrementalValue,
                inputColumns: inputColumns
            }, 'Running datalinks...').then(result => {
                resolve(result.value);
                return result;
            }).catch(reason => {
                this.logger.LogC(() => `runDatalinks, error: ${reason.message}.`, eLogLevel.Error);
                this.addHubMessage(reason);
                reject(reason);
            });
        });
    }

    public runDatalinkTests(datalinkTestKeys: Array<number>) {

        return new Promise<boolean>((resolve, reject) => {
            this.authService.post('/api/Hub/RunDatalinkTests', {
                hubKey: this._hubCache.value.hub.hubKey,
                remoteAgentId: this.getCurrentRemoteAgentInstanceId(),
                connectionId: this.authService.getWebSocketConnectionId(),
                datalinkTestKeys: datalinkTestKeys
            }, 'Running datalink tests...').then(result => {
                resolve(result.value);
                return result;
            }).catch(reason => {
                this.logger.LogC(() => `runDatalinkTests, error: ${reason.message}.`, eLogLevel.Error);
                this.addHubMessage(reason);
                reject(reason);
            });
        });
    }

    cancelDatalinkTests(datalinkTestKeys: Array<number>): Promise<boolean> {
        return new Promise<boolean>((resolve, reject) => {
            this.authService.post('/api/Hub/CancelDatalinkTests', {
                hubKey: this._hubCache.value.hub.hubKey,
                remoteAgentId: this.getCurrentRemoteAgentInstanceId(),
                datalinkTestKeys: datalinkTestKeys
            }, 'Cancelling datalink tests...').then(result => {
                resolve(result.value);
                return result;
            }).catch(reason => {
                this.logger.LogC(() => `cancelDatalinkTests, error: ${reason.message}.`, eLogLevel.Error);
                this.addHubMessage(reason);
                reject(reason);
            });
        });
    }

    cancelDatalinks(datalinkKeys: Array<number>): Promise<boolean> {
        return new Promise<boolean>((resolve, reject) => {
            this.authService.post('/api/Hub/CancelDatalinks', {
                hubKey: this._hubCache.value.hub.hubKey,
                remoteAgentId: this.getCurrentRemoteAgentInstanceId(),
                datalinkKeys: datalinkKeys
            }, 'Cancelling datalinks...').then(result => {
                resolve(result.value);
                return result;
            }).catch(reason => {
                this.logger.LogC(() => `cancelDatalinks, error: ${reason.message}.`, eLogLevel.Error);
                this.addHubMessage(reason);
                reject(reason);
            });
        });
    }

    getAuditResults(auditType: string, connectionKeys: Array<number>, referenceKeys: Array<number>, childItems: boolean, rows: number):
         Promise<Array<TransformWriterResult>> {
        return new Promise<Array<TransformWriterResult>>((resolve, reject) => {
            let hub = this._hubCache.value;
            let connections = hub.hub.dexihConnections
                .filter(c => c.purpose === eConnectionPurpose.Managed && connectionKeys.indexOf(c.key) >= 0);

            let remoteMessage = new RemoteMessage();
            remoteMessage.remoteAgentId = this.getCurrentRemoteAgentInstanceId();
            remoteMessage.method = 'GetResults';
            remoteMessage.hubVariables = this._hubCache.value.hub.dexihHubVariables;
            remoteMessage.hubKey = this._hubCache.value.hub.hubKey;
            remoteMessage.value = {
                connections: connections,
                auditType: auditType,
                referenceKeys: referenceKeys,
                childItems: childItems,
                rows: rows
            };

            this.authService.post('/api/Hub/RunRemoteCommand', remoteMessage, 'Retrieving audit results...')
                .then(result => {
                    resolve(result.value);
                }).catch(reason => {
                    this.logger.LogC(() => `getResults, error: ${reason.message}.`, eLogLevel.Error);
                    this.addHubMessage(reason);
                    reject(reason);
                });
        });
    }

    getResultDetail(auditConnectionKey: number, auditKey: number): Promise<TransformWriterResult> {
        return new Promise<TransformWriterResult>((resolve, reject) => {
            let hub = this._hubCache.value;
            let connections = hub.hub.dexihConnections.filter(c => c.purpose === eConnectionPurpose.Managed
                && auditConnectionKey === c.key);

            let remoteMessage = new RemoteMessage();
            remoteMessage.remoteAgentId = this.getCurrentRemoteAgentInstanceId();
            remoteMessage.method = 'GetResults';
            remoteMessage.hubVariables = this._hubCache.value.hub.dexihHubVariables;
            remoteMessage.hubKey = this._hubCache.value.hub.hubKey;
            remoteMessage.value = {
                connections: connections,
                auditKey: auditKey,
                childItems: true
            };

            let overallResult = true;
            this.authService.post('/api/Hub/RunRemoteCommand', remoteMessage, 'Retrieving audit result...')
                .then(result => {
                    resolve(result.value[0]);
            }).catch(reason => {
                this.logger.LogC(() => `getResultDetail, error: ${reason.message}.`, eLogLevel.Error);
                this.addHubMessage(reason);
                reject(reason);
                overallResult = false;
            });
        });
    }

    deleteDatajobs(datajobs: Array<DexihDatajob>): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
        let names = datajobs.map(c => c.name).join('<br>');

        this.authService.confirmDialog('Delete Data Jobs',
        'This action will delete the following data jobs, and any schedules and dependencies ' +
            '(Note, this will NOT delete the datalinks): <p></p> ' + names  + '<p></p>  Are you sure?')
        .then(confirm => {
                // call the delete.
                this.authService.post('/api/Hub/DeleteDatajobs', {
                    hubKey: this._hubCache.value.hub.hubKey,
                    itemKeys: datajobs.map(t => t.key)
                }, 'Deleting datajob(s)...').then(result => {
                    resolve(result.value);
                    return result;
                }).catch(reason => {
                    this.logger.LogC(() => `deleteDatajobs, error: ${reason.message}.`, eLogLevel.Error);
                    this.addHubMessage(reason);
                    reject(reason);
                });
        }).catch(reason => {
                resolve(false);
                    return false;
        });
    });
}


    runDatajobs(datajobs: Array<DexihDatajob>, truncateTarget: boolean,
        resetIncremental: boolean, resetIncrementalValue: string): Promise<boolean> {

            return new Promise<boolean>((resolve, reject) => {

            this.authService.post('/api/Hub/RunDatajobs', {
                hubKey: this._hubCache.value.hub.hubKey,
                remoteAgentId: this.getCurrentRemoteAgentInstanceId(),
                connectionId: this.authService.getWebSocketConnectionId(),
                datajobKeys: datajobs.map(d => d.key),
                truncateTarget: truncateTarget,
                resetIncremental: resetIncremental,
                resetIncrementalValue: resetIncrementalValue
            }, 'Running datajob(s)...').then(result => {
                resolve(result.value);
                return result;
            }).catch(reason => {
                this.logger.LogC(() => `runDatajobs, error: ${reason.message}.`, eLogLevel.Error);
                this.addHubMessage(reason);
                reject(reason);
            });
        });
    }


    deactivateDatajobs(datajobKeys: Array<number>): Promise<boolean> {
        return new Promise<boolean>((resolve, reject) => {
            this.authService.post('/api/Hub/DeactivateDatajobs', {
                hubKey: this._hubCache.value.hub.hubKey,
                remoteAgentId: this.getCurrentRemoteAgentInstanceId(),
                connectionId: this.authService.getWebSocketConnectionId(),
                datajobKeys: datajobKeys
            }, 'Deactivating datajob(s)...').then(result => {
                resolve(result.value);
                return result;
            }).catch(reason => {
                this.logger.LogC(() => `DeactivateDatajobs, error: ${reason.message}.`, eLogLevel.Error);
                this.addHubMessage(reason);
                reject(reason);
            });
        });
    }


    activateDatajobs(datajobs: Array<DexihDatajob>): Promise<boolean> {
        return new Promise<boolean>((resolve, reject) => {
            this.authService.post('/api/Hub/ActivateDatajobs', {
                hubKey: this._hubCache.value.hub.hubKey,
                remoteAgentId: this.getCurrentRemoteAgentInstanceId(),
                connectionId: this.authService.getWebSocketConnectionId(),
                datajobKeys: datajobs.map(d => d.key),
            }, 'Activating datajob(s)...').then(result => {
                resolve(result.value);
                return result;
            }).catch(reason => {
                this.logger.LogC(() => `ActivateDatajobs, error: ${reason.message}.`, eLogLevel.Error);
                this.addHubMessage(reason);
                reject(reason);
            });
        });
    }

    saveDatajob(datajob: DexihDatajob) {
        return new Promise<Array<DexihDatajob>>((resolve, reject) => {
            this.authService.post('/api/Hub/SaveDatajobs', {
                hubKey: this._hubCache.value.hub.hubKey,
                value: datajob
            }, 'Saving datajob(s)...').then(result => {
                resolve(result.value);
                return result;
            }).catch(reason => {
                this.logger.LogC(() => `saveDatajob, error: ${reason.message}.`, eLogLevel.Error);
                this.addHubMessage(reason);
                reject(reason);
            });
        });
    }

    saveView(view: DexihView) {
        return new Promise<Array<DexihView>>((resolve, reject) => {
            this.authService.post('/api/Hub/SaveView', {
                hubKey: this._hubCache.value.hub.hubKey,
                value: view
            }, 'Saving view...').then(result => {
                resolve(result.value);
                return result;
            }).catch(reason => {
                this.logger.LogC(() => `save view, error: ${reason.message}.`, eLogLevel.Error);
                this.addHubMessage(reason);
                reject(reason);
            });
        });
    }

    deleteViews(views: Array<DexihView>): Promise<boolean> {
        return new Promise<boolean>((resolve, reject) => {
            let viewNames = views.map(c => c.name).join('<br>');

            this.authService.confirmDialog('Delete Views(s)',
            'This action will delete the following views, from the hub and cannot be reversed.<p></p>' +
                viewNames + '<p></p>Are you sure?'
            ).then(confirm => {
                    // call the delete.
                    this.authService.post('/api/Hub/DeleteViews', {
                        hubKey: this._hubCache.value.hub.hubKey,
                        itemKeys: views.map(c => c.key)
                    }, 'Deleting views(s)...').then(result => {
                        resolve(result.value);
                        return result;
                    }).catch(reason => {
                        this.logger.LogC(() => `deleteViews, error: ${reason.message}.`, eLogLevel.Error);
                        this.addHubMessage(reason);
                        reject(reason);
                        return false;
                    });
            }).catch(reason => {
                    resolve(false);
                    return false;
            });
        });
    }

    saveApi(api: DexihApi) {
        return new Promise<Array<DexihApi>>((resolve, reject) => {
            this.authService.post('/api/Hub/SaveApi', {
                hubKey: this._hubCache.value.hub.hubKey,
                value: api
            }, 'Saving api...').then(result => {
                resolve(result.value);
                return result;
            }).catch(reason => {
                this.logger.LogC(() => `save api, error: ${reason.message}.`, eLogLevel.Error);
                this.addHubMessage(reason);
                reject(reason);
            });
        });
    }

    deleteApis(apis: Array<DexihApi>): Promise<boolean> {
        return new Promise<boolean>((resolve, reject) => {
            let apiNames = apis.map(c => c.name).join('<br>');

            this.authService.confirmDialog('Delete Apis(s)',
            // tslint:disable-next-line:max-line-length
            'This action will delete the following apis, from the hub and cannot be reversed.  Note, this action will NOT deactivate currently active Api\'s.<p></p>.' +
                apiNames + '<p></p>Are you sure?'
            ).then(confirm => {
                    // call the delete.
                    this.authService.post('/api/Hub/DeleteApis', {
                        hubKey: this._hubCache.value.hub.hubKey,
                        itemKeys: apis.map(c => c.key)
                    }, 'Deleting api(s)...').then(result => {
                        resolve(result.value);
                        return result;
                    }).catch(reason => {
                        this.logger.LogC(() => `deleteApis, error: ${reason.message}.`, eLogLevel.Error);
                        this.addHubMessage(reason);
                        reject(reason);
                        return false;
                    });
            }).catch(reason => {
                    resolve(false);
                    return false;
            });
        });
    }

    activateApis(apis: Array<DexihApi>): Promise<boolean> {
        return new Promise<boolean>((resolve, reject) => {
            this.authService.post('/api/Hub/ActivateApis', {
                hubKey: this._hubCache.value.hub.hubKey,
                remoteAgentId: this.getCurrentRemoteAgentInstanceId(),
                connectionId: this.authService.getWebSocketConnectionId(),
                apiKeys: apis.map(d => d.key),
            }, 'Activating Api(s)...').then(result => {
                resolve(result.value);
                return result;
            }).catch(reason => {
                this.logger.LogC(() => `ActivateApis, error: ${reason.message}.`, eLogLevel.Error);
                this.addHubMessage(reason);
                reject(reason);
            });
        });
    }

    deactivateApis(apiKeys: Array<number>): Promise<boolean> {
        return new Promise<boolean>((resolve, reject) => {
            this.authService.post('/api/Hub/DeactivateApis', {
                hubKey: this._hubCache.value.hub.hubKey,
                remoteAgentId: this.getCurrentRemoteAgentInstanceId(),
                connectionId: this.authService.getWebSocketConnectionId(),
                apiKeys: apiKeys
            }, 'Deactivating Api(s)...').then(result => {
                resolve(result.value);
                return result;
            }).catch(reason => {
                this.logger.LogC(() => `DeactivateApis, error: ${reason.message}.`, eLogLevel.Error);
                this.addHubMessage(reason);
                reject(reason);
            });
        });
    }

    previewTableData(table: DexihTable, showRejectedData, selectQuery: SelectQuery, inputColumns: InputColumn[]):
    Promise<PreviewResults> {
        let hub = new DexihHub(this._hubCache.value.hub.hubKey, 'cache');
        this._hubCache.value.cacheAddConnection(table.connectionKey, hub);

        return this.previewTableDataQuery(table, showRejectedData, selectQuery, inputColumns);
    }

    public constructDataTableColumns(columns: Array<any>): Array<any> {
        let dtColumns = [];

        if (columns) {
            columns.forEach((c, index) => {
                let name = c.logicalName ? c.logicalName : c.name;

                switch (c.dataType) {
                    case eTypeCode.DateTime:
                        dtColumns.push({ name: index, title: name, format: 'DateTime'});
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

    previewTableDataQuery(table: DexihTable, showRejectedData, selectQuery: SelectQuery, inputColumns: InputColumn[]):
        Promise<PreviewResults> {
        return new Promise<PreviewResults>((resolve, reject) => {
            let hub = new DexihHub(this._hubCache.value.hub.hubKey, 'cache');
            this._hubCache.value.cacheAddConnection(table.connectionKey, hub);

            if (!this._remoteAgent.value) {
                let message = new Message(false, 'No selected remote agent.', null, null);
                this.addHubMessage(message);
                reject(message);
                return;
            }

            this.authService.getDownloadUrl(this._remoteAgent.value).then(downloadUrl => {

                this.authService.post('/api/Hub/PreviewTableQuery', {
                    hubKey: this._hubCache.value.hub.hubKey,
                    remoteAgentId: this.getCurrentRemoteAgentInstanceId(),
                    table: table,
                    showRejectedData: showRejectedData,
                    selectQuery: selectQuery,
                    inputColumns: inputColumns,
                    downloadUrl: downloadUrl,
                     }, 'Previewing table...').then(result => {
                        let url = result.value;

                        this.authService.get(url, null, false).then(data => {
                            if (data['success'] === false) {
                                this.addHubMessage(data);
                                reject(data['message']);
                            } else {

                                let columns = this.constructDataTableColumns(data.columns);
                                resolve(
                                    {
                                        name: data.name,
                                        columns: columns,
                                        data: data.data,
                                        transformProperties: data.transformProperties,
                                        status: data.status});
                                return result;
                            }
                        }).catch(reason => {
                            this.addHubMessage(reason);
                            reject(reason);
                        });
                    }).catch(reason => {
                    this.logger.LogC(() => `PreviewTableKeyData, error: ${reason.message}.`, eLogLevel.Error);
                    this.addHubMessage(reason);
                    reject(reason);
                });
            }).catch(reason => {
                this.addHubMessage(reason);
                reject(reason);
            });
        });

    }

    previewTableKeyData(tableKey: number, showRejectedData, selectQuery: SelectQuery, inputColumns: InputColumn[]):
        Promise<PreviewResults> {
        return new Promise<PreviewResults>((resolve, reject) => {

            if (!this._remoteAgent.value) {
                let message = new Message(false, 'No active remote agent.', null, null);
                this.addHubMessage(message);
                reject(message);
                return;
            }
            this.authService.getDownloadUrl(this._remoteAgent.value).then(downloadUrl => {

                this.authService.post('/api/Hub/PreviewTable', {
                    hubKey: this._hubCache.value.hub.hubKey,
                    remoteAgentId: this.getCurrentRemoteAgentInstanceId(),
                    tableKey: tableKey,
                    showRejectedData: showRejectedData,
                    selectQuery: selectQuery,
                    inputColumns: inputColumns,
                    downloadUrl: downloadUrl

                    }, 'Previewing table...').then(result => {
                        // console.debug(result.value);
                       this.authService.get(result.value, null, false).then(data => {
                            if (data['success'] === false) {
                                this.addHubMessage(data);
                                reject(data['message']);
                                return;
                            } else {

                                let columns = this.constructDataTableColumns(data.columns);
                                resolve(
                                    {
                                        name: data.name,
                                        columns: columns,
                                        data: data.data,
                                        transformProperties: data.transformProperties,
                                        status: data.status});
                                return result;
                            }
                        }).catch(reason => {
                            this.addHubMessage(reason);
                            reject(reason);
                        });
                    }).catch(reason => {
                    this.logger.LogC(() => `PreviewTableKeyData, error: ${reason.message}.`, eLogLevel.Error);
                    this.addHubMessage(reason);
                    reject(reason);
                });
            }).catch(reason => {
                this.addHubMessage(reason);
                reject(reason);
            });
        });
    }

    previewDatalinkKeyData(datalinkKey: number, selectQuery: SelectQuery, inputColumns: InputColumn[]):
        Promise<PreviewResults> {
        return new Promise<PreviewResults>((resolve, reject) => {

            if (!this._remoteAgent.value) {
                let message = new Message(false, 'No active remote agent.', null, null);
                this.addHubMessage(message);
                reject(message);
                return;
            }
            this.authService.getDownloadUrl(this._remoteAgent.value).then(downloadUrl => {
                this.authService.post('/api/Hub/PreviewDatalink', {
                    hubKey: this._hubCache.value.hub.hubKey,
                    remoteAgentId: this.getCurrentRemoteAgentInstanceId(),
                    datalinkKey: datalinkKey,
                    selectQuery: selectQuery,
                    inputColumns: inputColumns,
                    downloadUrl: downloadUrl
                }, 'Previewing datalink...').then(result => {

                    // console.debug(result.value);
                    this.authService.get(result.value, null, false).then(data => {
                        if (data['success'] === false) {
                            this.addHubErrorMessage(data['message']);
                            reject(data['message']);
                        } else {
                            let columns = this.constructDataTableColumns(data.columns);
                            resolve(
                                {
                                    name: data.name,
                                    columns: columns,
                                    data: data.data,
                                    transformProperties: data.transformProperties,
                                    status: data.status});
                            return result;
                        }
                    }).catch(reason => {
                        this.addHubMessage(reason);
                        reject(reason);
                    });
                }).catch(reason => {
                    this.logger.LogC(() => `previewDatalinkKeyData, error: ${reason.message}.`, eLogLevel.Error);
                    this.addHubMessage(reason);
                    reject(reason);
                });
            }).catch(reason => {
                this.addHubMessage(reason);
                reject(reason);
            });
        });
    }

    previewTransformData(datalink: DexihDatalink, datalinkTransformKey: number, selectQuery: SelectQuery, inputColumns: InputColumn[]):
        Promise<PreviewResults> {
        return new Promise<PreviewResults>((resolve, reject) => {
            // remove status as they will not parse into json.
            datalink.currentStatus = null;
            datalink.entityStatus = null;
            datalink.previousStatus = null;

            const cache = this._hubCache.value;
            const hub = new DexihHub(cache.hub.hubKey, '');
            cache.getDatalinkCache(datalink, hub);

            if (!this._remoteAgent.value) {
                let message = new Message(false, 'No active remote agent.', null, null);
                this.addHubMessage(message);
                reject(message);
                return;
            }

            this.authService.getDownloadUrl(this._remoteAgent.value).then(downloadUrl => {
                this.authService.post('/api/Hub/PreviewTransform', {
                    hubKey: cache.hub.hubKey,
                    remoteAgentId: this.getCurrentRemoteAgentInstanceId(),
                    datalink: datalink,
                    selectQuery,
                    inputColumns,
                    datalinkTransformKey: datalinkTransformKey,
                    downloadUrl: downloadUrl
                }, 'Getting download location...').then(result => {

                    // console.debug(result.value);
                    this.authService.get(result.value, null, false).then(data => {
                        if (data['success'] === false) {
                            this.addHubMessage(data);
                            reject(data['message']);
                        } else {
                            let columns = this.constructDataTableColumns(data.columns);
                            resolve(
                                {
                                    name: data.name,
                                    columns: columns,
                                    data: data.data,
                                    transformProperties: data.transformProperties,
                                    status: data.status});
                            return result;
                        }
                    }).catch(reason => {
                        this.addHubMessage(reason);
                        reject(reason);
                    });
                }).catch(reason => {
                    this.addHubMessage(reason);
                    reject(reason);
                });
            }).catch(reason => {
                this.addHubMessage(reason);
                reject(reason);
            });
        });
    }

    datalinkProperties(datalinkKey: number, selectQuery: SelectQuery, inputColumns: InputColumn[]):
    Promise<TransformProperties> {
        return new Promise<TransformProperties>((resolve, reject) => {

            if (!this._remoteAgent.value) {
                let message = new Message(false, 'No active remote agent.', null, null);
                this.addHubMessage(message);
                reject(message);
                return;
            }

            this.authService.post('/api/Hub/DatalinkProperties', {
                hubKey: this._hubCache.value.hub.hubKey,
                remoteAgentId: this.getCurrentRemoteAgentInstanceId(),
                datalinkKey: datalinkKey,
                selectQuery: selectQuery,
                inputColumns: inputColumns,
            }, 'Getting datalinks properties...').then(result => {

                if (result.success) {
                    resolve(result.value);
                } else {
                    this.addHubMessage(result);
                    reject(result.message);
                }
            }).catch(reason => {
                this.logger.LogC(() => `previewDatalinkKeyData, error: ${reason.message}.`, eLogLevel.Error);
                this.addHubMessage(reason);
                reject(reason);
            });
        });
    }

    previewProfileData(writerResult: TransformWriterResult, summaryOnly: boolean):
            Promise<{ columns: Array<any>, data: Array<any> }> {
        return new Promise<{ columns: Array<any>, data: Array<any> }>((resolve, reject) => {

            if (!writerResult.profileTableName) {
                let reason = 'This result does not contain profile data.';
                this.addHubMessage(reason);
                reject(reason);
            }

            this.authService.getDownloadUrl(this._remoteAgent.value).then(downloadUrl => {

                const hub = this._hubCache.value.hub;
                let connection = hub.dexihConnections.find(c => c.key === writerResult.auditConnectionKey);
                let remoteMessage = new RemoteMessage();
                remoteMessage.remoteAgentId = this.getCurrentRemoteAgentInstanceId();
                remoteMessage.method = 'PreviewProfile';
                remoteMessage.hubVariables = this._hubCache.value.hub.dexihHubVariables;
                remoteMessage.hubKey = hub.hubKey,
                remoteMessage.value = {
                    auditKey: writerResult.auditKey,
                    profileTableName: writerResult.profileTableName,
                    connection: connection,
                    summaryOnly: summaryOnly,
                    downloadUrl: downloadUrl
                };

                this.authService.post('/api/Hub/RunRemoteCommand', remoteMessage, 'Retrieving the download location...')
                    .then(result => {
                        let url = result.value;

                        this.authService.get(url, null, false).then(data => {
                            if (data['success'] === false) {
                                this.addHubMessage(data);
                                reject(data['message']);
                            } else {

                                let columns = this.constructDataTableColumns(data.columns);
                                resolve({columns: columns, data: data.data});
                                return result;
                            }
                        }).catch(reason => {
                            this.addHubMessage(reason);
                            reject(reason);
                        });

                    // let tableResult: Table = result.value;
                    // let columns = [];

                    // tableResult.columns.forEach((c, index) => {
                    //     switch (c.dataType) {
                    //         case eTypeCode.DateTime:
                    //             columns.push({ name: index, title: c.name, format: 'Date'});
                    //             break;
                    //         default:
                    //             columns.push({ name: index, title: c.name, format: ''});
                    //     }
                    // });
                    // resolve({columns: columns, data: tableResult.data});
                    // return result;
                }).catch(reason => {
                    this.logger.LogC(() => `previewProfileData, error: ${reason.message}.`, eLogLevel.Error);
                    this.addHubMessage(reason);
                    reject(reason);
                });
            }).catch(reason => {
                this.logger.LogC(() => `previewProfileData, error: ${reason.message}.`, eLogLevel.Error);
                this.addHubMessage(reason);
                reject(reason);
            });
        });
    }

    downloadData(downloadObjects: Array<DownloadObject>, zipFiles: boolean, downloadFormat: eDownloadFormat):
        Promise<boolean> {
        return new Promise<boolean>((resolve, reject) => {

            if (!this._remoteAgent.value) {
                let message = new Message(false, 'No active remote agent.', null, null);
                this.addHubMessage(message);
                reject(message);
                return;
            }
            this.authService.getDownloadUrl(this._remoteAgent.value).then(downloadUrl => {
                this.authService.post('/api/Hub/DownloadSharedData', {
                    hubKey: this._hubCache.value.hub.hubKey,
                    remoteAgentId: this.getCurrentRemoteAgentInstanceId(),
                    connectionId: this.authService.getWebSocketConnectionId(),
                    downloadFormat: downloadFormat,
                    zipFiles: zipFiles,
                    downloadObjects: downloadObjects,
                    downloadUrl: downloadUrl
                }, 'Downloading shared data...')
                    .then(result => {
                        let title: string;
                        if (downloadObjects.length === 1) {
                            title = `Download data task`;
                        } else {
                            title = `Download data task for ${downloadObjects.length} items.`;
                        }
                        let task = <ManagedTask>result.value;
                        this.authService.addUpdateTask(task);
                        resolve(true);
                    return result;
                }).catch(reason => {
                    this.logger.LogC(() => `downloadData, error: ${reason.message}.`, eLogLevel.Error);
                    this.addHubMessage(reason);
                    reject(reason);
                });
            }).catch(reason => {
                this.addHubMessage(reason);
                reject(reason);
            });
        });
    }

    downloadTableData(table: DexihTable, showRejectedData, selectQuery: SelectQuery, inputColumns: InputColumn[],
        zipFiles: boolean, downloadFormat: eDownloadFormat):
    Promise<boolean> {
        return new Promise<boolean>((resolve, reject) => {

            if (!this._remoteAgent.value) {
                let message = new Message(false, 'No active remote agent.', null, null);
                this.addHubMessage(message);
                reject(message);
                return;
            }
            this.authService.getDownloadUrl(this._remoteAgent.value).then(downloadUrl => {

                this.authService.post('/api/Hub/DownloadTableData', {
                    hubKey: this._hubCache.value.hub.hubKey,
                    remoteAgentId: this.getCurrentRemoteAgentInstanceId(),
                    connectionId: this.authService.getWebSocketConnectionId(),
                    table: table,
                    showRejectedData: showRejectedData,
                    selectQuery: selectQuery,
                    inputColumns: inputColumns,
                    downloadFormat: downloadFormat,
                    zipFiles: zipFiles,
                    downloadUrl: downloadUrl,
                    }, 'Downloading table data...').then(result => {
                        let task = <ManagedTask>result.value;
                        this.authService.addUpdateTask(task);
                        resolve(true);
                    return result;

                    }).catch(reason => {
                    this.logger.LogC(() => `downloadTableData, error: ${reason.message}.`, eLogLevel.Error);
                    this.addHubMessage(reason);
                    reject(reason);
                });
            }).catch(reason => {
                this.addHubMessage(reason);
                reject(reason);
            });
        });

    }


    downloadDatalinkData(datalink: DexihDatalink, datalinkTransformKey: number, selectQuery: SelectQuery, inputColumns: InputColumn[],
        zipFiles: boolean, downloadFormat: eDownloadFormat):
    Promise<boolean> {
        return new Promise<boolean>((resolve, reject) => {

            if (!this._remoteAgent.value) {
                let message = new Message(false, 'No active remote agent.', null, null);
                this.addHubMessage(message);
                reject(message);
                return;
            }
            this.authService.getDownloadUrl(this._remoteAgent.value).then(downloadUrl => {

                this.authService.post('/api/Hub/DownloadDatalinkData', {
                    hubKey: this._hubCache.value.hub.hubKey,
                    remoteAgentId: this.getCurrentRemoteAgentInstanceId(),
                    connectionId: this.authService.getWebSocketConnectionId(),
                    datalink: datalink,
                    datalinkTransformKey: datalinkTransformKey,
                    selectQuery: selectQuery,
                    inputColumns: inputColumns,
                    downloadFormat: downloadFormat,
                    zipFiles: zipFiles,
                    downloadUrl: downloadUrl,
                    }, 'Downloading table data...').then(result => {
                        let task = <ManagedTask>result.value;
                        this.authService.addUpdateTask(task);
                        resolve(true);
                    return result;

                    }).catch(reason => {
                    this.logger.LogC(() => `downloadTableData, error: ${reason.message}.`, eLogLevel.Error);
                    this.addHubMessage(reason);
                    reject(reason);
                });
            }).catch(reason => {
                this.addHubMessage(reason);
                reject(reason);
            });
        });

    }

    downloadProfileData(writerResult: TransformWriterResult, summaryOnly: boolean): Promise<boolean> {
        let table = this._hubCache.value.getProfileTable(writerResult.profileTableName, writerResult.auditConnectionKey);
        return this.downloadTableData(table, false, null, null, false, eDownloadFormat.Csv);
    }

    deleteColumnValidations(validations: Array<DexihColumnValidation>): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
        let validationNames = validations.map(c => c.name).join('<br>');

        this.authService.confirmDialog('Delete Column Validation(s)',
        'This action will delete the following validations, from the hub and cannot be reversed.<p></p>'
            + validationNames + '<p></p> Are you sure?'
        ).then(confirm => {
                // call the delete.
                this.authService.post('/api/Hub/DeleteColumnValidations', {
                    hubKey: this._hubCache.value.hub.hubKey,
                    itemKeys: validations.map(c => c.key)
                }, 'Deleting column validation...').then(result => {
                    resolve(result.value);
                    return result;
                }).catch(reason => {
                    this.addHubMessage(reason);
                    reject(reason);
                    return false;
                });
        }).catch(reason => {
                this.logger.LogC(() => `deleteColumnValidations, error: ${reason.message}.`, eLogLevel.Error);
                resolve(false);
                return false;
        });

    });
}

    // saves the current validation.
    saveColumnValidation(validation: DexihColumnValidation): Promise<any> {
        return new Promise<DexihColumnValidation>((resolve, reject) => {
            this.authService.post('/api/Hub/SaveColumnValidation', {
                hubKey: this._hubCache.value.hub.hubKey,
                remoteAgentId: this.getCurrentRemoteAgentInstanceId(),
                validation: validation
            }, 'Saving column validation...').then(result => {
                resolve(result.value);
                return result;
            }).catch(reason => {
                this.logger.LogC(() => `saveColumnValidation, error: ${reason.message}.`, eLogLevel.Error);
                this.addHubMessage(reason);
                reject(reason);
            });
        });
    }

    deleteCustomFunctions(customFunctions: Array<DexihCustomFunction>): Promise<boolean> {
        return new Promise<boolean>((resolve, reject) => {
            let functionNames = customFunctions.map(c => c.name).join('<br>');

            this.authService.confirmDialog('Delete Custom Functions(s)',
            'This action will delete the following custom functions, from the hub and cannot be reversed.<p></p>'
                + functionNames + '<p></p> Are you sure?'
            ).then(confirm => {
                    // call the delete.
                    this.authService.post('/api/Hub/DeleteCustomFunctions', {
                        hubKey: this._hubCache.value.hub.hubKey,
                        itemKeys: customFunctions.map(c => c.key)
                    }, 'Deleting custom function(s)...').then(result => {
                        resolve(result.value);
                        return result;
                    }).catch(reason => {
                        this.addHubMessage(reason);
                        reject(reason);
                        return false;
                    });
            }).catch(reason => {
                    this.logger.LogC(() => `deleteCustomFunctions, error: ${reason.message}.`, eLogLevel.Error);
                    resolve(false);
                    return false;
            });
        });
    }

        // saves the current function.
        saveCustomFunction(customFunction: DexihCustomFunction): Promise<any> {
            return new Promise<DexihCustomFunction>((resolve, reject) => {
                this.authService.post('/api/Hub/SaveCustomFunction', {
                    hubKey: this._hubCache.value.hub.hubKey,
                    remoteAgentId: this.getCurrentRemoteAgentInstanceId(),
                    customFunction: customFunction
                }, 'Saving custom functions...').then(result => {
                    resolve(result.value);
                    return result;
                }).catch(reason => {
                    this.logger.LogC(() => `saveCustomFunction, error: ${reason.message}.`, eLogLevel.Error);
                    this.addHubMessage(reason);
                    reject(reason);
                });
            });
        }

            // tests the connection and refreshes the databases.
    testCustomFunction(datalinkTransformItem: DexihDatalinkTransformItem, testValues: Array<any>): Promise<Array<any>> {
        return new Promise<Array<any>>((resolve, reject) => {
            const cache = this._hubCache.value;
            const hub = new DexihHub(cache.hub.hubKey, '');

            let remoteMessage = new RemoteMessage();
            remoteMessage.remoteAgentId = this.getCurrentRemoteAgentInstanceId();
            remoteMessage.method = 'TestCustomFunction';
            remoteMessage.hubKey = cache.hub.hubKey;
            remoteMessage.hubVariables = cache.hub.dexihHubVariables
            remoteMessage.value = {
                datalinkTransformItem: datalinkTransformItem,
                hub: hub,
                testValues: testValues
            };

            this.authService.post('/api/Hub/RunRemoteCommand', remoteMessage, 'Testing custom function...')
                .then(result => {
                resolve(result.value);
                return result;
            }).catch(reason => {
                this.addHubMessage(reason);
                reject(reason);
            });
        });
    }

        // tests the connection and refreshes the databases.
    downloadCustomFunction(datalinkTransformItem: DexihDatalinkTransformItem, testValues: Array<any>): Promise<Array<any>> {
        return new Promise<Array<any>>((resolve, reject) => {
            const cache = this._hubCache.value;

            this.authService.downloadFile('/api/Hub/DownloadFunctionCode',
                { hubKey: cache.hub.hubKey, datalinkTransformItem, testValues}, 'CustomFunction.zip', 'application/zip').then(result => {
                    this.addHubSuccessMessage('The custom function code has been downloaded.');
                }).catch(reason => {
                    this.addHubMessage(reason);
                    reject(reason);
                });

        });
    }

    deleteFileFormats(validations: Array<DexihFileFormat>): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
        let fileFormatNames = validations.map(c => c.name).join('<br>>');

        this.authService.confirmDialog('Delete File Format(s)',
        'This action will delete the following file formats, from the hub and cannot be reversed.<p></p>' +
            fileFormatNames + '<p></p>Are you sure?'
        ).then(confirm => {
                // call the delete.
                this.authService.post('/api/Hub/DeleteFileFormats', {
                    hubKey: this._hubCache.value.hub.hubKey,
                    itemKeys: validations.map(c => c.key)
                }, 'Deleting file format(s)...').then(result => {
                    resolve(result.value);
                    return result;
                }).catch(reason => {
                    this.logger.LogC(() => `deleteFileFormats, error: ${reason.message}.`, eLogLevel.Error);
                    this.addHubMessage(reason);
                    reject(reason);
                    return false;
                });
        }).catch(reason => {
                resolve(false);
                return false;
        });
    });
}

    // saves the current connection.
    saveFileFormat(fileFormat: DexihFileFormat): Promise<any> {
        return new Promise<DexihFileFormat>((resolve, reject) => {
            this.authService.post('/api/Hub/SaveFileFormat', {
                hubKey: this._hubCache.value.hub.hubKey,
                remoteAgentId: this.getCurrentRemoteAgentInstanceId(),
                fileFormat: fileFormat
            }, 'Saving file format(s)...').then(result => {
                resolve(result.value);
                return result;
            }).catch(reason => {
                this.logger.LogC(() => `saveFileFormat, error: ${reason.message}.`, eLogLevel.Error);
                this.addHubMessage(reason);
                reject(reason);
            });
        });
    }

            // tests the connection and refreshes the databases.
    testColumnValidation(columnValidation: DexihColumnValidation, testValue: string):
        Promise<{success: boolean, cleanedValue: string, rejectReason: string}> {
        return new Promise<{success: boolean, cleanedValue: string, rejectReason: string}>((resolve, reject) => {

            // add dependencies to the cache.
            let hub = new DexihHub(this._hubCache.value.hub.hubKey, 'cache');
            this._hubCache.value.getColumnValidationCache(columnValidation, hub);
            hub.dexihColumnValidations.push(columnValidation);

            let remoteMessage = new RemoteMessage();
            remoteMessage.remoteAgentId = this.getCurrentRemoteAgentInstanceId();
            remoteMessage.method = 'TestColumnValidation';
            remoteMessage.hubVariables = this._hubCache.value.hub.dexihHubVariables;
            remoteMessage.hubKey = hub.hubKey;
            remoteMessage.value = {
                columnValidation: columnValidation,
                hub: hub,
                testValue: testValue
            };

            this.authService.post('/api/Hub/RunRemoteCommand', remoteMessage, 'Testing column validation...')
                .then(result => {
                resolve(result.value);
                return result;
            }).catch(reason => {
                this.logger.LogC(() => `testColumnValidation, error: ${reason.message}.`, eLogLevel.Error);
                this.addHubMessage(reason);
                reject(reason);
            });
        });
    }


    deleteHubVariables(variables: Array<DexihHubVariable>): Promise<boolean> {
        return new Promise<boolean>((resolve, reject) => {
            let variableNames = variables.map(c => c.name).join('<br>');

            this.authService.confirmDialog('Delete Hub Variable(s)',
            'This action will delete the following variables, from the hub and cannot be reversed.<p></p>' +
            variableNames + '<p></p>Are you sure?'
            ).then(confirm => {
                    // call the delete.
                    this.authService.post('/api/Hub/DeleteHubVariables', {
                        hubKey: this._hubCache.value.hub.hubKey,
                        itemKeys: variables.map(c => c.key)
                    }, 'Deleting hub variable(s)...').then(result => {
                        resolve(result.value);
                        return result;
                    }).catch(reason => {
                        this.logger.LogC(() => `deleteHubVariables, error: ${reason.message}.`, eLogLevel.Error);
                        this.addHubMessage(reason);
                        reject(reason);
                        return false;
                    });
            }).catch(reason => {
                    resolve(false);
                    return false;
            });
        });
    }

        // saves the current connection.
        saveHubVariable(hubVariable: DexihHubVariable): Promise<any> {
            return new Promise<DexihHubVariable>((resolve, reject) => {
                this.authService.post('/api/Hub/HubVariable', {
                    hubKey: this._hubCache.value.hub.hubKey,
                    remoteAgentId: this.getCurrentRemoteAgentInstanceId(),
                    hubVariable: hubVariable
                }, 'Saving hub variable...').then(result => {
                    resolve(result.value);
                    return result;
                }).catch(reason => {
                    this.logger.LogC(() => `saveHubVariable, error: ${reason.message}.`, eLogLevel.Error);
                    this.addHubMessage(reason);
                    reject(reason);
                });
            });
        }

        deleteDatalinkTests(items: Array<DexihDatalinkTest>): Promise<boolean> {
            return new Promise<boolean>((resolve, reject) => {
                let itemNames = items.map(c => c.name).join('<br>');

                this.authService.confirmDialog('Delete Datalink Test(s)',
                'This action will delete the following datalink tests, from the hub and cannot be reversed.<p></p>' +
                itemNames + '<p></p>Are you sure?'
                ).then(confirm => {
                        // call the delete.
                        this.authService.post('/api/Hub/DeleteDatalinkTests', {
                            hubKey: this._hubCache.value.hub.hubKey,
                            itemKeys: items.map(c => c.key)
                        }, 'Deleting datalink test(s)...').then(result => {
                            resolve(result.value);
                            return result;
                        }).catch(reason => {
                            this.logger.LogC(() => `deleteDatalinkTest, error: ${reason.message}.`, eLogLevel.Error);
                            this.addHubMessage(reason);
                            reject(reason);
                            return false;
                        });
                }).catch(reason => {
                        resolve(false);
                        return false;
                });
            });
        }

        // saves the current connection.
        saveDatalinkTest(item: DexihDatalinkTest): Promise<any> {
            return new Promise<DexihDatalinkTest>((resolve, reject) => {
                this.authService.post('/api/Hub/SaveDatalinkTest', {
                    hubKey: this._hubCache.value.hub.hubKey,
                    remoteAgentId: this.getCurrentRemoteAgentInstanceId(),
                    value: item
                }, 'Saving datalink test...').then(result => {
                    resolve(result.value);
                    return result;
                }).catch(reason => {
                    this.logger.LogC(() => `saveDatalinkTest, error: ${reason.message}.`, eLogLevel.Error);
                    this.addHubMessage(reason);
                    reject(reason);
                });
            });
        }

        // saves the current connection.
        newDatalinkTest(name: string, datalinkKeys: Array<number>, auditConnectionKey: number, targetConnectionKey: number,
            sourceConnectionKey: number, snapshotData: boolean): Promise<any> {
            return new Promise<DexihDatalinkTest>((resolve, reject) => {
                this.authService.post('/api/Hub/NewDatalinkTest', {
                    hubKey: this._hubCache.value.hub.hubKey,
                    remoteAgentId: this.getCurrentRemoteAgentInstanceId(),
                    connectionId: this.authService.getWebSocketConnectionId(),
                    name,
                    datalinkKeys,
                    auditConnectionKey,
                    targetConnectionKey,
                    sourceConnectionKey,
                    snapshotData
                }, 'New Datalink test...').then(result => {
                    resolve(result.value);
                    return result;
                }).catch(reason => {
                    this.logger.LogC(() => `newDatalinkTest, error: ${reason.message}.`, eLogLevel.Error);
                    this.addHubMessage(reason);
                    reject(reason);
                });
            });
        }

        runDatalinkTestSnapshot(items: Array<DexihDatalinkTest>): Promise<boolean> {
            return new Promise<boolean>((resolve, reject) => {
                let itemNames = items.map(c => c.name).join('<br>');

                this.authService.confirmDialog('Snapshot Datalink Test(s) Data',
                // tslint:disable-next-line:max-line-length
                'This action will delete all data in the test tables, and refresh them with the actual data in the datalink source/target tables.  This cannot be reversed.<p></p>' +
                itemNames + '<p></p>Are you sure?'
                ).then(confirm => {
                        // call the delete.
                        this.authService.post('/api/Hub/RunDatalinkTestSnapshot', {
                            hubKey: this._hubCache.value.hub.hubKey,
                            remoteAgentId: this.getCurrentRemoteAgentInstanceId(),
                            connectionId: this.authService.getWebSocketConnectionId(),
                            datalinkTestKeys: items.map(c => c.key)
                        }, 'Running datalink test snapshot...').then(result => {
                            resolve(result.value);
                            return result;
                        }).catch(reason => {
                            this.logger.LogC(() => `runDatalinkTestSnapshot, error: ${reason.message}.`, eLogLevel.Error);
                            this.addHubMessage(reason);
                            reject(reason);
                            return false;
                        });
                }).catch(reason => {
                        resolve(false);
                        return false;
                });
            });
        }

    setNewDatajob(datalinks: Array<DexihDatalink>) {
        const datajob = this.createDefaultDatajob();
        datajob.key = 0;

        let stepKey = -1;
        datalinks.forEach(datalink => {
            const step = new DexihDatalinkStep();
            step.name = datalink.name;
            step.key = stepKey--;
            step.datalinkKey = datalink.key;
            step.isValid = true;

            datajob.dexihDatalinkSteps.push(step);
        });

        this.newDatajob = datajob;
    }

    createDefaultDatajob(): DexihDatajob {
        const datajob = new DexihDatajob();
        let hub: DexihHub = this._hubCache.value.hub;

        let managedConnections = hub.dexihConnections.filter(c => c.purpose === eConnectionPurpose.Managed)

        if (managedConnections.length > 0) {
            datajob.auditConnectionKey = managedConnections[0].key;
        }

        return datajob;
    }

    getLocalPath(table: DexihTable, flatFilePath: eFlatFilePath): string {
        let connection = this._hubCache.value.getConnection(table.connectionKey)

        let subdirectory: string;

        if (table.useCustomFilePaths) {
            switch (flatFilePath) {
                case eFlatFilePath.Incoming:
                    subdirectory = table.fileIncomingPath;
                    break;
                case eFlatFilePath.Processed:
                    subdirectory = table.fileProcessedPath;
                    break;
                case eFlatFilePath.Rejected:
                    subdirectory = table.fileRejectedPath;
                    break;
                case eFlatFilePath.Outgoing:
                    subdirectory = table.fileOutgoingPath;
                break;
            }
        } else {
            subdirectory = flatFilePath.toString();
        }

        return this.fixTrailingSlash(connection.server) +
            this.fixTrailingSlash(connection.defaultDatabase) +
            this.fixTrailingSlash(table.fileRootPath) +
            this.fixTrailingSlash(subdirectory);
    }

    private fixTrailingSlash(value: string) {
        if (!value) {
            return '';
        } else if (value.endsWith('/')) {
            return value;
        } else {
            return value + '/';
        }
    }

    createPaths(table: DexihTable): Promise<Array<FileProperties>> {
        return new Promise<Array<FileProperties>>((resolve, reject) => {
            let hub = new DexihHub(this._hubCache.value.hub.hubKey, 'cache');
            this._hubCache.value.cacheAddConnection(table.connectionKey, hub);

            let remoteMessage = new RemoteMessage();
            remoteMessage.remoteAgentId = this.getCurrentRemoteAgentInstanceId();
            remoteMessage.method = 'CreateFilePaths';
            remoteMessage.hubKey = hub.hubKey;
            remoteMessage.hubVariables = this._hubCache.value.hub.dexihHubVariables;
            remoteMessage.value = {
                table: table,
                hub: hub,
            };

            this.authService.post('/api/Hub/RunRemoteCommand', remoteMessage, 'Creating file paths...')
                .then(result => {

                resolve(result.value);
                return result;
            }).catch(reason => {
                this.logger.LogC(() => `createPaths, error: ${reason.message}.`, eLogLevel.Error);
                this.addHubMessage(reason);
                reject(reason);
            });
        });
    }

    getFileList(table: DexihTable, flatFilePath: eFlatFilePath): Promise<Array<FileProperties>> {
        return new Promise<Array<FileProperties>>((resolve, reject) => {
            let hub = new DexihHub(this._hubCache.value.hub.hubKey, 'cache');
            this._hubCache.value.cacheAddConnection(table.connectionKey, hub);

            let remoteMessage = new RemoteMessage();
            remoteMessage.remoteAgentId = this.getCurrentRemoteAgentInstanceId();
            remoteMessage.method = 'GetFileList';
            remoteMessage.hubKey = hub.hubKey;
            remoteMessage.hubVariables = this._hubCache.value.hub.dexihHubVariables;
            remoteMessage.value = {
                table: table,
                hub: hub,
                path: flatFilePath,
            };

            this.authService.post('/api/Hub/RunRemoteCommand', remoteMessage, 'Getting file list...')
                .then(result => {

                resolve(result.value);
                return result;
            }).catch(reason => {
                this.logger.LogC(() => `getFileList, error: ${reason.message}.`, eLogLevel.Error);
                this.addHubMessage(reason);
                reject(reason);
            });
        });
    }

    deleteFiles(table: DexihTable, flatFilePath: eFlatFilePath, files: Array<string>):
    Promise<Array<FileProperties>> {
        return new Promise<Array<FileProperties>>((resolve, reject) => {
        let fileNames = '<p>' + files.map(c => c).join('</p><p>') + '</p>';
            this.authService.confirmDialog('Delete File (s)',
            'This action will delete the following files, from the connection and cannot be reversed.<p></p>' +
            fileNames + '<p></p>Are you sure?'
            ).then(confirm => {
                let hub = new DexihHub(this._hubCache.value.hub.hubKey, 'cache');
                this._hubCache.value.cacheAddConnection(table.connectionKey, hub);

                let remoteMessage = new RemoteMessage();
                remoteMessage.remoteAgentId = this.getCurrentRemoteAgentInstanceId();
                remoteMessage.method = 'DeleteFiles';
                remoteMessage.hubKey = hub.hubKey;
                remoteMessage.hubVariables = this._hubCache.value.hub.dexihHubVariables;
                remoteMessage.value = {
                    table: table,
                    hub: hub,
                    path: flatFilePath,
                    files: files
                };

                this.authService.post('/api/Hub/RunRemoteCommand', remoteMessage, 'Deleting files...')
                    .then(result => {

                    resolve(result.value);
                    return result;
                }).catch(reason => {
                    this.logger.LogC(() => `deleteFiles, error: ${reason.message}.`, eLogLevel.Error);
                    this.addHubMessage(reason);
                    reject(reason);
                });
            }).catch(reason => resolve(null));
        });
    }

    moveFiles(table: DexihTable, fromFilePath: eFlatFilePath, toFilePath: eFlatFilePath, files: Array<string>):
    Promise<Array<FileProperties>> {
        return new Promise<Array<FileProperties>>((resolve, reject) => {
            let hub = new DexihHub(this._hubCache.value.hub.hubKey, 'cache');
            this._hubCache.value.cacheAddConnection(table.connectionKey, hub);

            let remoteMessage = new RemoteMessage();
            remoteMessage.remoteAgentId = this.getCurrentRemoteAgentInstanceId();
            remoteMessage.method = 'MoveFiles';
            remoteMessage.hubKey = hub.hubKey;
            remoteMessage.hubVariables = this._hubCache.value.hub.dexihHubVariables;
            remoteMessage.value = {
                table: table,
                hub: hub,
                fromPath: fromFilePath,
                toPath: toFilePath,
                files: files
            };

            this.authService.post('/api/Hub/RunRemoteCommand', remoteMessage, 'Moving files...')
                .then(result => {

                resolve(result.value);
                return result;
            }).catch(reason => {
                this.logger.LogC(() => `moveFiles, error: ${reason.message}.`, eLogLevel.Error);
                this.addHubMessage(reason);
                reject(reason);
            });
        }).catch();
    }

    downloadFiles(table: DexihTable, flatFilePath: eFlatFilePath, files: Array<string>):
    Promise<boolean> {
        return new Promise<boolean>((resolve, reject) => {
            if (!this._remoteAgent.value) {
                let message = new Message(false, 'No active remote agent.', null, null);
                this.addHubMessage(message);
                reject(message);
                return;
            }
            this.authService.getDownloadUrl(this._remoteAgent.value).then(downloadUrl => {
                    this.authService.post('/api/Hub/DownloadFiles', {
                    hubKey: this._hubCache.value.hub.hubKey,
                    connectionId: this.authService.getWebSocketConnectionId(),
                    remoteAgentId: this.getCurrentRemoteAgentInstanceId(),
                    tableKey: table.key,
                    path: flatFilePath,
                    files: files,
                    downloadUrl: downloadUrl
                }, 'Downloading files...')
                    .then(result => {
                        let title: string;
                        if (files.length === 1) {
                            title = `Download from ${table.name} file ${files[0]}`;
                        } else {
                            title = `Download from ${table.name} ${files.length} files.`;
                        }
                        let task = new ManagedTask();
                        task.reference = result.value;
                        task.name = title;
                        task.percentage = 0;
                        this.authService.addUpdateTask(task);
                        resolve(true);
                    return result;
                }).catch(reason => {
                    this.logger.LogC(() => `downloadFiles, error: ${reason.message}.`, eLogLevel.Error);
                    this.addHubMessage(reason);
                    reject(reason);
                });
            }).catch(reason => {
                this.addHubMessage(reason);
                reject(reason);
            });

        });
    }

    uploadFile(table: DexihTable, filePath: eFlatFilePath, fileName: string):
    Promise<string> {
        return new Promise<string>((resolve, reject) => {
            if (!this._remoteAgent.value) {
                let message = new Message(false, 'No active remote agent.', null, null);
                this.addHubMessage(message);
                reject(message);
                return;
            }
            this.authService.getDownloadUrl(this._remoteAgent.value).then(downloadUrl => {
                    this.authService.post('/api/Hub/UploadFile', {
                    hubKey: this._hubCache.value.hub.hubKey,
                    connectionId: this.authService.getWebSocketConnectionId(),
                    remoteAgentId: this.getCurrentRemoteAgentInstanceId(),
                    tableKey: table.key,
                    path: filePath,
                    fileName: fileName,
                    downloadUrl: downloadUrl
                }, 'Uploading file...')
                    .then(result => {
                        resolve(result.value);
                    return result;
                }).catch(reason => {
                    this.logger.LogC(() => `uploadFile, error: ${reason.message}.`, eLogLevel.Error);
                    this.addHubMessage(reason);
                    reject(reason);
                });
            }).catch(reason => {
                this.addHubMessage(reason);
                reject(reason);
            });

        });
    }
}
