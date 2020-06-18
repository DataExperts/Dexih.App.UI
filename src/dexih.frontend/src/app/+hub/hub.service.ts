import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, Subscription, combineLatest, Subject} from 'rxjs';
import { Message, PromiseWithCancel, CancelToken } from '../+auth/auth.models';
import { AuthService } from '../+auth/auth.service';
import { eLogLevel, LogFactory } from '../../logging';
import {
    FileProperties,
    HubCache,
    HubCacheChange,
    eCacheStatus,
    PreviewResults,
    FlatFilesReady,
    DexihInputParameter
} from './hub.models';
import { RemoteAgentStatus, transformTypes } from './hub.remote.models';
import { DexihDatajob, DexihTable, DexihHub, DexihRemoteAgentHub, DexihConnection, DexihDatalink, InputColumn,
    InputParameter, DexihView, DexihDashboard, DexihApi, SelectQuery, DexihColumnValidation, DexihCustomFunction,
    DexihDatalinkTransformItem, DexihFileFormat, DexihHubVariable, DexihDatalinkTest, DexihDatalinkStep, TransformWriterResult,
    TransformProperties, Import, eImportAction, eRunStatus, eDatalinkType, eDeltaType, eConnectionPurpose, eFlatFilePath,
    ApiData, DownloadObject, eDownloadFormat, DexihActiveAgent, ImportObject, ePermission, eTypeCode, eDataObjectType,
    eSharedObjectType, RemoteLibraries, ConnectionReference, TransformReference,
    FunctionReference, eFunctionType, ClientMessage, eClientCommand, HubUser, DexihListOfValues, ManagedTask,
    eLOVObjectType, ListOfValuesItem, DexihTag, DexihTagObject } from '../shared/shared.models';
import { filter, take, first } from 'rxjs/operators';

@Injectable()
export class HubService implements OnInit, OnDestroy {
    private _subscription: Subscription;
    private _webSocketSubscription: Subscription;

    private _hubKey = 0;
    private _hubCache = new BehaviorSubject<HubCache>(new HubCache(eCacheStatus.NoHub, null));
    private _hubMessages = new BehaviorSubject<Array<Message>>([]);

    // updates whenever the local hub cache changes
    private _hubCacheChange = new Subject<HubCacheChange>();

    // updates whenever a new transformWriter result is updated
    private _transformWriterResultChange = new Subject<TransformWriterResult>();

    // updates whenever an api is started/stopped
    private _apiStatusChange = new Subject<DexihApi>();

    private _remoteLibraries = new BehaviorSubject<RemoteLibraries>(null);

    // updates whenever a bulk file upload is completed.
    private _flatFiles = new Subject<FlatFilesReady>();

    // private _activeAgents: DexihActiveAgent[];
    private _remoteAgent = new BehaviorSubject<DexihActiveAgent>(null);
    private isResettingRemoteAgent = false;

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

            if (hubCache && hubCache.hub && globalCache) {

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

                // // if the hub is not available, reset.
                // if (hubs) {
                //     if (hubCache && hubCache.hub) {
                //         let hubFound = hubs.find(h => h.hubKey === hubCache.hub.hubKey);
                //         if (!hubFound) {
                //             this.resetHubCache();
                //         }
                //     }
                // } else {
                //     this.resetHubCache();
                // }

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

    public createHub(key: number, name: string): DexihHub {
        let hub = new DexihHub();
        hub.hubKey = key;
        hub.name = name;

        return hub;
    }

    public isHubCacheLoaded(): boolean {
        return this.getHubCache().status === eCacheStatus.Loaded;
    }

    getHubUrl(): string {
        return '/hub/' + this._hubKey;
    }

    // gets the hub cache
    getHubCacheObservable(filterLoaded = false): Observable<HubCache> {
        let observable = this._hubCache.asObservable();

        if (filterLoaded) {
            observable = observable.pipe(filter(c => c !== null && c.isLoaded() === true) );
        }

        return observable;
    }

    getHubCachePromise(): Promise<HubCache> {
        return this._hubCache.asObservable().pipe(first()).toPromise();
    }

    // gets the hub cache
    getHubCache(): HubCache {
        return this._hubCache.value;
    }

    // hubCacheChange detects specific changes to objects and is used to monitor object changes from other sessions when editing forms.
    getHubCacheChangeObservable(): Observable<HubCacheChange> {
        return this._hubCacheChange.asObservable();
    }

    getTransformWriterResultChangeObservable(): Observable<TransformWriterResult> {
        return this._transformWriterResultChange.asObservable();
    }

    geApiStatusChangeObservable(): Observable<DexihApi> {
        return this._apiStatusChange.asObservable();
    }

    getFlatFilesObservable(): Observable<FlatFilesReady> {
        return this._flatFiles.asObservable();
    }

    getHubMessagesObservable(): Observable<Array<Message>> {
        return this._hubMessages.asObservable();
    }

    getHubMessages(): Array<Message> {
        return this._hubMessages.value;
    }

    addHubMessage(message: any, log = false, context = '') {
        let converted = message;
        if (message.stack) {
            converted = new Message(false, 'Client Error: ' + message.message, message.stack, '');
        } else {
            converted = new Message(message.success, context + ': ' + message.message, message.exceptionDetails, message.value);
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
    async updateHub(hubKey: number, name: string ): Promise<void> {
        this.logger.LogC(() => `updateHub, hubKey: ${hubKey}, name: ${name}.`, eLogLevel.Debug);

        this._hubMessages.next([]);

        if (hubKey === null || hubKey === 0) {
            let hubCache = new HubCache(eCacheStatus.NoHub, this.createHub(0, name));
            this._hubKey = 0;
            this._hubCache.next(hubCache);
        } else if (!this._hubCache.getValue().hub || this._hubCache.getValue().hub.hubKey !== hubKey) {
            await this.refreshHubCache(hubKey, name);
        }
    }

    // refresh the hubCache.
    async refreshHubCache(hubKey: number, name: string): Promise<void> {
        if (!this._refreshHubRunning) {
            this._refreshHubRunning = true;

            this.logger.LogC(() => `refreshHubCache, hubKey: ${hubKey}, name: ${name}.`, eLogLevel.Debug);

            this._hubKey = hubKey;
            this._hubCache.next(new HubCache(eCacheStatus.Loading, this.createHub(hubKey, name)));

            try {
                let result = await this.hubPost<{permission: ePermission, hub: DexihHub}>
                ('/api/Hub/GetHubCache', {}, 'Loading the hub cache...')
                let hub: DexihHub = result.hub;
                let permission = result.permission;

                this.logger.LogC(() => `refreshHubCache, hub loaded ${hub.name}.`, eLogLevel.Debug);

                // update the status for datalink and datajobs.  These are use to monitor execution status.
                hub.dexihDatalinks.forEach(datalink => {
                    datalink['currentStatus'] = new BehaviorSubject<TransformWriterResult>(null);
                    datalink['previousStatus'] = new BehaviorSubject<TransformWriterResult>(null);
                });

                hub.dexihDatajobs.forEach(datajob => {
                    datajob['currentStatus'] = new BehaviorSubject<TransformWriterResult>(null);
                    datajob['previousStatus'] = new BehaviorSubject<TransformWriterResult>(null);
                });

                hub.dexihDatalinkTests.forEach(datalinkTest => {
                    datalinkTest['currentStatus'] = new BehaviorSubject<TransformWriterResult>(null);
                    datalinkTest['previousStatus'] = new BehaviorSubject<TransformWriterResult>(null);
                });

                hub.dexihTables.forEach(table => {
                    table['currentStatus'] = new BehaviorSubject<TransformWriterResult>(null);
                    table['previousStatus'] = new BehaviorSubject<TransformWriterResult>(null);
                });

                hub.dexihApis.forEach(api => {
                    api['currentStatus'] = new BehaviorSubject<ApiData>(null);
                });

                let hubCache: HubCache = new HubCache(eCacheStatus.Loaded, hub);
                hubCache.hubPermission = permission;
                this.resetRemoteAgent(hubCache);
                this._hubCache.next(hubCache);

                this._refreshHubRunning = false;
            } catch(reason) {
                this.logger.LogC(() => `refreshHubCache, hub load error: ${reason.message}.`, eLogLevel.Error);
                this._hubCache.next(new HubCache(eCacheStatus.Error, null));
                this.addHubMessage(reason);

                this._refreshHubRunning = false;
            }
        }
    }

    resetHubCache(): void {
        this._hubKey = 0;
        this._hubCache.next(new HubCache(eCacheStatus.NoHub, null));
    }

    // set current remoteAgent
    getRemoteAgentObservable(filterActive = false): Observable<DexihActiveAgent> {
        let observable = this._remoteAgent.asObservable();
        if (filterActive) {
            observable = observable.pipe(filter(c => c !== null && c.isRunning) );
        }

        return observable;
    }

    getRemoteAgentCurrent(): DexihActiveAgent {
        return this._remoteAgent.value;
    }

    getRemoteLibrariesObservable(): Observable<RemoteLibraries> {
        return this._remoteLibraries.asObservable();
    }

    getRemoteLibrariesPromise(): Promise<RemoteLibraries> {
        return this._remoteLibraries.asObservable().pipe(filter(c => c !== null), take(1)).toPromise();
    }

    // sets the remote agent to the appropriate default agent when a status changes.
    async resetRemoteAgent(hubCache: HubCache) {
        if (this.isResettingRemoteAgent) { return; }

        try {
            if (!hubCache || !hubCache.hub || !hubCache.hub.dexihRemoteAgentHubs) {
                this.setNoRemoteAgent(hubCache);
                return;
            }

            this.isResettingRemoteAgent = true;

            let activeAgent = this._remoteAgent.value;

            let remoteAgents = await this.authService.getRemoteAgentsPromise();

            if (!remoteAgents) {
                this.setNoRemoteAgent(hubCache);
                return;
            }

            // check if currently selected agent is still valid for this hub.
            if (activeAgent) {
                if (hubCache.hub.dexihRemoteAgentHubs
                    .find(c => c.isAuthorized && c.isValid && c.remoteAgentKey === activeAgent.remoteAgentKey)) {
                    let remoteAgent = remoteAgents.find(c => c.remoteAgentKey === activeAgent.remoteAgentKey);
                    if (remoteAgent && remoteAgent['activeAgents'] &&
                        remoteAgent['activeAgents'].find(c => c.instanceId === activeAgent.instanceId)) {
                        return;
                    }
                }
            }

            let defaultAgents = hubCache.hub.dexihRemoteAgentHubs.filter(c => c.isDefault && c.isAuthorized && c.isValid);
            for (let i = 0; i < defaultAgents.length; i++) {
                let remoteAgent = remoteAgents.find(c => c.remoteAgentKey === defaultAgents[i].remoteAgentKey);
                if (remoteAgent && remoteAgent['activeAgents'] && remoteAgent['activeAgents'].length > 0) {
                    this._remoteAgent.next(remoteAgent['activeAgents'][0]);
                    await this.getRemoteAgentStatus(hubCache);
                    return;
                }
            }
            let otherAgents = hubCache.hub.dexihRemoteAgentHubs.filter(c => !c.isDefault && c.isAuthorized && c.isValid);
            for (let i = 0; i < otherAgents.length; i++) {
                let remoteAgent = remoteAgents.find(c => c.remoteAgentKey === otherAgents[i].remoteAgentKey);
                if (remoteAgent && remoteAgent['activeAgents'] && remoteAgent['activeAgents'].length > 0) {
                    this._remoteAgent.next(remoteAgent['activeAgents'][0]);
                    await this.getRemoteAgentStatus(hubCache);
                    return;
                }
            }

            this.setNoRemoteAgent(hubCache);
        } catch (reason) {
            this.addHubMessage(reason, true, 'Resetting remote agent' );
        } finally {
            this.isResettingRemoteAgent = false;
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
            api['currentStatus'].next(null);
        });

        // merge the datalink/datajob status into the cached objects.
        hub.dexihDatalinks.forEach(datalink => {
            datalink['currentStatus'].next(null);
            datalink['previousStatus'].next(null);
        });

        hub.dexihTables.forEach(table => {
            table['currentStatus'].next(null);
            table['previousStatus'].next(null);
        });

        hub.dexihDatajobs.forEach(datajob => {
            datajob['currentStatus'].next(null);
            datajob['previousStatus'].next(null);
        });

        hub.dexihDatalinkTests.forEach(test => {
            test['currentStatus'].next(null);
            test['previousStatus'].next(null);
        });
    }

    // gets the current remote agent
    getCurrentRemoteAgentId(required = true): string {
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

    public GetConnectionReference(connection: DexihConnection): Promise<ConnectionReference> {
        return new Promise<ConnectionReference>((resolve, reject) => {
            this.getRemoteLibrariesPromise().then(remoteLibraries => {
                if (connection) {
                    let ref = remoteLibraries.connections.find(c =>
                        c.connectionAssemblyName === connection.connectionAssemblyName
                        && c.connectionClassName === connection.connectionClassName);

                    resolve(ref);

                } else {
                    resolve(null);
                }
            }).catch(reason => reject(reason));
        });
    }

    // transforms that can be added/removed within a datalink
    public GetUserConfigTransformReference(): Promise<TransformReference[]> {
        return new Promise<TransformReference[]>((resolve, reject) => {
            this.getRemoteLibrariesPromise().then(remoteLibraries => {
                let userConfig = transformTypes.filter(c => c.allowUserConfig);
                resolve(remoteLibraries.transforms.filter(c => userConfig.findIndex(u => u.key === c.transformType ) >= 0 ));
            }).catch(reason => reject(reason));
        });
    }

    public GetFunctionReference(item: DexihDatalinkTransformItem): Promise<FunctionReference> {
        return new Promise<FunctionReference>((resolve, reject) => {
            this.getRemoteLibrariesPromise().then(remoteLibraries => {
                if (item) {
                    let ref = remoteLibraries.functions.find(c =>
                        c.functionAssemblyName === item.functionAssemblyName
                        && c.functionClassName === item.functionClassName
                        && c.functionMethodName === item.functionMethodName);

                    resolve(ref);

                } else {
                    resolve(null);
                }
            }).catch(reason => reject(reason));
        });
    }

    public GetFunctionsByType(functionType: eFunctionType): Promise<FunctionReference[]> {
        return new Promise<FunctionReference[]>((resolve, reject) => {
            this.getRemoteLibrariesPromise().then(remoteLibraries => {
                resolve(remoteLibraries.functions.filter(c => c.functionType === functionType));
            }).catch(reason => reject(reason));
        });
    }

    private processWebSocketMessage(data: ClientMessage) {
            this.logger.LogC(() => `processWebSocketMessage, method: ${data.command}, value: ${data.value}.`, eLogLevel.Debug);

            switch (data.command) {
                case eClientCommand.Connect:
                    let cache = this.getHubCache();

                    // if there is an existing cache, and there is a reconnect, then reload it.
                    // otherwise, it will be loaded by the hubComponent.
                    if (cache && cache.status === eCacheStatus.Loaded) {
                        this.refreshHubCache(cache.hub.hubKey, cache.hub.name);
                        // this.resetRemoteAgent(this._hubCache.value);
                    }
                    break;
                // case 'remoteAgent-update':
                // case 'remoteAgent-delete':
                // case 'remoteAgent-deleteKey':
                // case 'disconnect': {
                //     this.resetRemoteAgent(this._hubCache.value);
                //     break;
                // }
                case eClientCommand.HubChange: {
                    let hubChange: Import = data.value;
                    this.updateHubChange(hubChange);
                    break;
                }
                case eClientCommand.HubError: {
                    let message: Message = data.value;
                    this.addHubMessage(message);
                    break;
                }
                case eClientCommand.DatalinkProgress : {
                    let task: ManagedTask = data.value;
                    this.addDatalinkProgress(task);
                }
                break;
                case eClientCommand.DatalinkStatus : {
                    let task: ManagedTask = data.value;
                    this.addDatalinkProgress(task);
                }
                break;
                case eClientCommand.DatajobProgress : {
                    let task: ManagedTask = data.value;
                    this.addDatajobProgress(task);
                }
                break;
                case eClientCommand.DatajobProgress : {
                    let task: ManagedTask = data.value;
                    this.addDatajobProgress(task);
                }
                break;
                case eClientCommand.DatalinkTestProgress : {
                    let task: ManagedTask = data.value;
                    this.addDatalinkTestProgress(task);
                }
                break;
                case eClientCommand.ApiStatus: {
                    let apiData: ApiData = data.value;
                    this.addApiStatus(apiData);
                }
                break;
                case eClientCommand.FlatFilesReady:
                    let flatFiles: FlatFilesReady = data.value;
                    this._flatFiles.next(flatFiles);

            }
            this.logger.LogC(() => `processWebSocketMessage completed, method: ${data.command}.`, eLogLevel.Debug);
    }

    public updateHubChange(hubChange: Import) {
        if (!hubChange) { return; }

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
        this.mergeChange(hubChange.dashboards, hubCache.hub.dexihDashboards, 'key', eSharedObjectType.Dashboard);
        this.mergeChange(hubChange.listOfValues, hubCache.hub.dexihListOfValues, 'key', eSharedObjectType.ListOfValues);
        this.mergeChange(hubChange.tags, hubCache.hub.dexihTags, 'key', eSharedObjectType.Tags);

        if (hubChange.tagObjects && hubChange.tagObjects.length > 0) {
            this.mergeChangeTagObjects(hubChange.tagObjects, hubCache.hub.dexihTagObjects);
        }

        if (hubChange.remoteAgentHubs && hubChange.remoteAgentHubs.length > 0) {
            this.resetRemoteAgent(hubCache);
        }
    }

    private mergeChange(source: ImportObject<any>[], target: any[], keyField: string, changeClass: eSharedObjectType) {
        if (source && source.length > 0) {
            source.forEach(item => {
                let current = target.find(c => c[keyField] === item.item[keyField]);

                if (current && current.updateDate === item.item.updateDate) {
                    return;
                }

                // if the change is a datalink or datajob, preserve the current/previous status.
                if (changeClass === eSharedObjectType.Datalink || changeClass === eSharedObjectType.Datajob ||
                    changeClass === eSharedObjectType.Table || changeClass === eSharedObjectType.DatalinkTest) {
                    if (current) {
                        item.item['currentStatus'] = current['currentStatus'];
                        item.item['previousStatus'] = current['previousStatus'];
                    } else {
                        item.item['currentStatus'] = new BehaviorSubject<TransformWriterResult>(null);
                        item.item['previousStatus'] = new BehaviorSubject<TransformWriterResult>(null);
                    }
                }

                if ( changeClass === eSharedObjectType.Api) {
                    if (current) {
                        item.item['currentStatus'] = current['currentStatus'];
                        item.item['previousStatus'] = current['previousStatus'];
                    } else {
                        item.item['currentStatus'] = new BehaviorSubject<ApiData>(null);
                        item.item['previousStatus'] = new BehaviorSubject<ApiData>(null);
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
            });
        }
    }

    private mergeChangeTagObjects(source: ImportObject<DexihTagObject>[], target: DexihTagObject[]) {
        if (source && source.length > 0) {
            source.forEach(item => {
                let current = target
                    .find(c => c.tagKey === item.item.tagKey
                        && c.objectKey === item.item.objectKey && c.objectType === item.item.objectType);

                if (current && current.updateDate === item.item.updateDate) {
                    return;
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
                            let index = target
                            .findIndex(c => c.tagKey === item.item.tagKey
                                && c.objectKey === item.item.objectKey && c.objectType === item.item.objectType);
                            target.splice(index, 1);
                        }
                }

                this._hubCacheChange.next(new HubCacheChange(eSharedObjectType.TagObjects, item.importAction, current));
            });
        }
    }

    private addApiStatus(apiData: ApiData) {
        const api = this._hubCache.value.hub.dexihApis.find(c => c.key === apiData.apiKey);
        if (api) {
            api['currentStatus'].next(apiData);
            this._apiStatusChange.next(api);
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
                    datalink['previousStatus'].next(writerResult);
                    datalink['currentStatus'].next(null);
            } else {
                datalink['currentStatus'].next(writerResult);
            }

            if (writerResult.targetTableKey > 0) {
                this.addTableProgress(writerResult);
            }

            if (writerResult.childResults) {
                writerResult.childResults.forEach(c => {
                    this.addTableProgress(c);
                });
            }

            this._transformWriterResultChange.next(writerResult);
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
                    datalinkTest['previousStatus'].next(writerResult);
                    datalinkTest['currentStatus'].next(null);
            } else {
                datalinkTest['currentStatus'].next(writerResult);
            }
            this._transformWriterResultChange.next(writerResult);
        }
    }

    private addTableProgress(writerResult: TransformWriterResult) {
        if (!writerResult) {return; }
        const table = this._hubCache.value.getTable(writerResult.targetTableKey);
        if (table) {
            if (writerResult.runStatus === eRunStatus.Abended ||
                writerResult.runStatus === eRunStatus.Finished ||
                writerResult.runStatus === eRunStatus.FinishedErrors ) {
                    table['previousStatus'].next(writerResult);
                    table['currentStatus'].next(null);
            } else {
                table['currentStatus'].next(writerResult);
            }
            this._transformWriterResultChange.next(writerResult);

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
        if (!writerResult) {return; }
        const datajob = this._hubCache.value.hub.dexihDatajobs.find(c => c.key === writerResult.referenceKey);
        if (datajob) {
            if (writerResult.runStatus === eRunStatus.Abended ||
                writerResult.runStatus === eRunStatus.Cancelled ||
                writerResult.runStatus === eRunStatus.Finished ||
                writerResult.runStatus === eRunStatus.FinishedErrors ) {
                    let currentStatus: TransformWriterResult = datajob['currentStatus'].value;
                    if (currentStatus !== null) {
                        if (currentStatus.auditKey === writerResult.auditKey) {
                            datajob['currentStatus'].next(null);
                        }
                    }
                    datajob['previousStatus'].next(writerResult);
                } else {
                datajob['currentStatus'].next(writerResult);
            }
            this._transformWriterResultChange.next(writerResult);
        }
    }

    public hubPostConfirm<T>(url: string, data: any, waitMessage: string, confirmMessage: string) {
        data.hubKey = this._hubKey;
        return new Promise<T>((resolve, reject) => {
            this.authService.postConfirm<T>(url, data, waitMessage, confirmMessage).then(result => {
                resolve(result);
            }).catch(reason => {
                // reason = null is for cancel.
                if (reason == null || typeof reason === undefined) {
                    resolve(null);
                    return;
                }

                this.logger.LogMessage(reason);
                // this.addHubMessage(reason);
                reject(reason);
            });
        });
    }

    public hubPost<T>(url: string, data: any, waitMessage: string): Promise<T> {
        data.hubKey = this._hubKey;
        return new Promise<T>((resolve, reject) => {
            this.authService.post<T>(url, data, waitMessage).then(result => {
                resolve(result);
            }).catch(reason => {
                if (reason) { this.logger.LogMessage(reason); }
               // this.addHubMessage(reason);
                reject(reason);
            });
        });
    }

    public hubPostRemote<T>(url: string, data: any, waitMessage: string, cancelToken: CancelToken): PromiseWithCancel<T> {
        data.hubKey = this._hubKey;
        return new PromiseWithCancel<T>((resolve, reject) => {
            this.authService.postRemote<T>(url, data, this.getRemoteAgentCurrent(), waitMessage, cancelToken).then(result => {
                resolve(result);
            }).catch(reason => {
                if (reason) { this.logger.LogMessage(reason); }
                // this.addHubMessage(reason);
                reject(reason);
            });
        });
    }

    public hubPostRemoteConfirm<T>(url: string, data: any, waitMessage: string,
        confirmMessage: string, cancelToken: CancelToken): PromiseWithCancel<T> {
        data.hubKey = this._hubKey;
        return new PromiseWithCancel<T>((resolve, reject) => {
            this.authService.confirmDialog('Please confirm...', confirmMessage).then(confirm => {
                if (confirm) {
                    resolve(this.hubPostRemote<T>(url, data, waitMessage, cancelToken));
                } else {
                    reject();
                }
            }).catch(() => reject() );
        });
    }

    public getRemoteResponse<T>(key: string, cancelToken: CancelToken, command: 'upload' | 'download' | 'setRaw' = 'download',
        extra = ''): Promise<T> {
        let remoteAgent = this.getRemoteAgentCurrent();
        return this.authService.getRemoteData<T>(remoteAgent, key, cancelToken, command, extra);
    }

     deleteRemoteAgent(remoteAgent: DexihRemoteAgentHub): Promise<boolean> {
         return this.hubPostConfirm<boolean>('/api/Hub/DeleteRemoteAgent', {
            remoteAgentHubKey:  remoteAgent.remoteAgentHubKey,
        }, 'Deleting the hub remote agent...',
        'This action will delete the selected ' +
        ' remote agent from this hub.  <p></p>Are you sure?'
        );
    }

    saveRemoteAgent(remoteAgentHub: DexihRemoteAgentHub): Promise<boolean> {
        return this.hubPost('/api/Hub/SaveRemoteAgent', {
            hubKey: this._hubKey,
            value: remoteAgentHub
        }, 'Saving the hub remote agent...')
    }

    // updates all the information on the remoteAgent.
    private getRemoteAgentStatus(hubCache: HubCache): Promise<boolean> {
        return new Promise<boolean>((resolve, reject) => {
            let remoteAgent = this.getRemoteAgentCurrent();
            if (remoteAgent) {
                let remoteAgentPromise = this.hubPostRemote<RemoteAgentStatus>('/api/Hub/GetRemoteAgentStatus', {
                    hubKey: hubCache.hub.hubKey }, 'Getting the remote agent status...', null);
                let globalCachePromise = this.authService.getGlobalCachePromise();
                let hubPromise = this.getHubCachePromise();

                Promise.all([remoteAgentPromise, globalCachePromise, hubPromise]).then(values => {
                    let agentStatus = values[0];
                    let globalCache = values[1];
                    let hub = values[2].hub;

                    // combine any functions in the libraries on the remote agent with the standard global remote libraries.
                    let remoteLibraries = new RemoteLibraries();
                    remoteLibraries.connections =
                        globalCache.defaultRemoteLibraries.connections.concat(agentStatus.remoteLibraries.connections);
                    remoteLibraries.transforms =
                        globalCache.defaultRemoteLibraries.transforms.concat(agentStatus.remoteLibraries.transforms);
                    remoteLibraries.functions =
                        globalCache.defaultRemoteLibraries.functions.concat(agentStatus.remoteLibraries.functions);

                    this._remoteLibraries.next(remoteLibraries);

                    hub.dexihApis.forEach(api => {
                        api['currentStatus'].next(agentStatus.activeApis.find(c => c.apiKey === api.key));
                    });

                    // merge the datalink/datajob status into the cached objects.
                    hub.dexihDatalinks.forEach(datalink => {
                        datalink['currentStatus'].next(this.getTransformWriterResult(datalink.key,  agentStatus.activeDatalinks));
                        datalink['previousStatus'].next(
                            this.getTransformWriterResult(datalink.key,  agentStatus.previousDatalinks));
                    });

                    hub.dexihTables.forEach(table => {
                        table['currentStatus'].next(this.getTransformWriterTable(table.key, agentStatus.activeDatalinks));
                        table['previousStatus'].next(this.getTransformWriterTable(table.key, agentStatus.previousDatalinks));
                    });

                    hub.dexihDatajobs.forEach(datajob => {
                        datajob['currentStatus'].next(this.getTransformWriterResult(datajob.key,  agentStatus.activeDatajobs));
                        datajob['previousStatus'].next(this.getTransformWriterResult(datajob.key,  agentStatus.previousDatajobs));
                    });

                    hub.dexihDatalinkTests.forEach(test => {
                        test['currentStatus'].next(this.getTransformWriterResult(test.key,  agentStatus.activeDatalinkTests));
                        test['previousStatus'].next(
                            this.getTransformWriterResult(test.key,  agentStatus.previousDatalinkTests));
                    });

                    resolve(true);

                }).catch(reason => {
                    // this.addHubMessage(reason, true, 'Refreshing Remote Agent');
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
    getHubUsers(): Promise<HubUser[]> {
        return this.hubPost<HubUser[]>('/api/Hub/HubUsers', {}, 'Getting hub users...');
    }

    setUserPermissions(emails: string[], permission: ePermission, sendInvites: boolean): Promise<any> {
        return this.hubPost('/api/Hub/SetUsersPermission', {
            emails: emails, permission: permission, sendInvites: sendInvites
        }, 'Setting user permissions...');
    }

    setUserAlerts(userIds: string[], alertEmails, sendInvites: boolean): Promise<any> {
        return this.hubPost('/api/Hub/SetUsersAlerts', {
            userIds: userIds, alertEmails: alertEmails, sendInvites: sendInvites
        }, 'Setting user permissions...');
    }

    removeUsers(emails: string[]): Promise<any> {
        return this.hubPost('/api/Hub/RemoveUsers', {emails: emails }, 'Removing hub users...');
    }

    exportHub(hub: DexihHub, filename: string) {
        const content = JSON.stringify(hub, (key, value) => {
            // don't bother saving the null values.
            if (value === null ) { return undefined; }

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
            if (typeof link.download !== undefined) { // feature detection
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
        return this.hubPost<any>('/api/Hub/ImportPackage', importPackage, 'Importing package...' );
    }

    deleteConnections(connections: Array<DexihConnection>): Promise<boolean> {
        let connectionNames = connections.map(c => c.name).join('<br>');

        return this.hubPostConfirm<boolean>('/api/Hub/DeleteConnections', {
            itemKeys: connections.map(c => c.key)}, 'Deleting connections...',
            'This action will delete the following connections:<p></p>' + connectionNames + '<p></p> Are you sure?');
    }

    // tests the connection and refreshes the databases.
    refreshConnection(connection: DexihConnection, cancelToken: CancelToken): PromiseWithCancel<Array<string>> {
        return this.hubPostRemote<Array<string>>('/api/Hub/RefreshConnection',
            {value: connection}, 'Refreshing connection...', cancelToken);
    }

    // tests the connection and refreshes the databases.
    createDatabase(connection: DexihConnection, cancelToken: CancelToken): PromiseWithCancel<any> {
        return this.hubPostRemote<Array<string>>('/api/Hub/CreateDatabase', {value: connection}, 'Creating new database...', cancelToken);
    }

    // decrypted a value in the hub.
    async encrypt(value: string, cancelToken: CancelToken): Promise<string> {
        let key = await this.authService.postRemoteGetKey('/api/Hub/Encrypt', {hubKey: this._hubKey},
            this.getRemoteAgentCurrent(), cancelToken);
        await this.getRemoteResponse<string>(key, cancelToken, 'setRaw', value);
        let result = await this.getRemoteResponse<string>(key, cancelToken, 'download');
        return result;
    }

    // decrypted a value in the hub.
    decrypt(value: string, cancelToken: CancelToken): PromiseWithCancel<string> {
        return this.hubPostRemote<string>('/api/Hub/Decrypt', {value: value}, 'Decrypting...', cancelToken);
    }

    // gets a list of table names in a remote database
    getDatabaseTableNames(connection: DexihConnection, cancelToken: CancelToken): PromiseWithCancel<Array<DexihTable>> {
        return this.hubPostRemote<Array<DexihTable>>('/api/Hub/DatabaseTableNames',
            {value: connection}, 'Getting database table names...', cancelToken);
    }

    // import a list of specified tables in a remote database
    importTables(tables: Array<DexihTable>, save: boolean, cancelToken: CancelToken): Promise<Array<DexihTable>> {
        // if there are any table that are already imported, then warn the over of an overwrite.
        let importedTables = tables.filter(c => c.key > 0);

        if (importedTables.length > 0) {
            return new Promise<Array<DexihTable>>((resolve, reject) => {
            this.authService.confirmDialog('Re-Import Tables',
            'This action will re-import the following tables, which will reset column customizations ' +
            ' (such as descriptions, column validations, delta types etc.) and may invalidate some datalink mappings. <p></p>' +
                    importedTables.map(c => c.name).join(',') +
                    '  <p></p><p></p>Are you sure you want to continue?').then(confirm => {
                        if (confirm) {
                            this.doImport(tables, save, cancelToken).then(result => {
                                resolve(result);
                            }).catch(reason => reject(reason));
                        } else {
                            resolve(null);
                        }
                    }).catch(reason => {
                        reject(reason);
                    });
                });
        } else {
            return this.doImport(tables, save, cancelToken);
        }
    }

    public doImport(tables: Array<DexihTable>, save: boolean, cancelToken: CancelToken): Promise<Array<DexihTable>> {
        return new Promise<Array<DexihTable>>((resolve, reject) => {
            this.hubPostRemote<DexihTable[]>('/api/Hub/ImportTables', {
            tables: tables,
        }, 'Importing tables...', cancelToken).then(importedTables => {
            if (save) {
                resolve(this.saveTables(importedTables));
            } else {
                let hub = this.getHubCache();
                importedTables.forEach(t => {
                    t.dexihTableColumns.forEach(c => {
                        if (c.key === 0) {
                            c.key = hub.getNextSequence();
                        }
                    });
                });
                resolve(importedTables);
            }
        }).catch(reason => reject(reason));
    });
    }

        // import a list of specified tables in a remote database
    reImportTables(tableKeys: Array<number>, save: boolean, cancelToken: CancelToken): Promise<Array<DexihTable>> {
        return new Promise<Array<DexihTable>>((resolve, reject) => {
            const cache = this._hubCache.value;

            let tables: Array<DexihTable> = [];
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

                        if (confirm) {
                        this.doImport(tables, save, cancelToken)
                            .then(result => {
                                resolve(result);
                            }).catch(reason => {
                                reject(reason);
                            });
                        } else {
                            resolve(null);
                        }
                    }).catch(() => {
                        resolve(null);
                    });
        });
    }

    clearTables(tableKeys: Array<number>, cancelToken: CancelToken): Promise<boolean> {
        const cache = this._hubCache.value;

        let tables: Array<DexihTable> = [];
        tableKeys.forEach(tableKey => {
            const table = cache.getTable(tableKey);
            if (!table) {
                const message = `Error: The clear tables failed, as the table with the key ${tableKey} could not be found.`;
                this.addHubErrorMessage(message);
                this.logger.LogC(() => message, eLogLevel.Error);
                return Promise.reject(message);
            }
            tables.push(table);
        });

        return this.hubPostRemoteConfirm<boolean>('/api/Hub/ClearTables', {
            tables: tables,
        }, 'Clearing tables...',
        'This action will remove <b>ALL DATA</b> from the following tables.  This action cannot be reversed.' +
        tables.map(c => c.name).join(',') +
        '  <p></p><p></p>Are you sure you want to continue?', cancelToken);
    }

    createTables(tables: Array<DexihTable>, cancelToken: CancelToken): Promise<boolean> {
        return this.hubPostRemoteConfirm<boolean>('/api/Hub/CreateTables', {
            tables: tables,
            dropTables: true
        }, 'Clearing tables...',
        // tslint:disable-next-line:max-line-length
        'This action will drop and re-create the following tables, removing <b>ALL DATA</b>.  This action cannot be reversed.<p></p><p></p>' +
        tables.map(c => c.name).join(',') +
        '  <p></p><p></p>Are you sure you want to continue?', cancelToken);
    }

    // remove imported tables
    deleteTables(tables: Array<DexihTable>): Promise<boolean> {
        const names = tables.map(c => c.name).join('<br>');

        return this.hubPostConfirm('/api/Hub/DeleteTables', {
            hubKey: this._hubKey,
            remoteAgentId: this.getCurrentRemoteAgentId(false),
            itemKeys: tables.map(t => t.key)
        }, 'Deleting tables...',
        'This action will delete the selected tables from the repository metadata ' +
        '(note, this action \"does not\" delete tables from the underlying database).<p></p>' +
        names +
        ' <p></p><p></p>Are you sure you want to continue?'
        );
    }

    // save an updated table
    saveTables(tables: DexihTable[]): Promise<DexihTable[]> {
        return this.hubPost('/api/Hub/SaveTables', {value: tables}, 'Saving tables..');
    }

    // get dbml string
    getDbml(tables: Array<DexihTable>) {
        this.authService.downloadFile('/api/Hub/DBML', {
            hubKey: this._hubKey,
            remoteAgentId: this.getCurrentRemoteAgentId(false),
            itemKeys: tables.map(t => t.key)
        }, 'Getting DBML...', 'text/plain');
    }

    // create datalinks
    createDatalinks(sourceTableKeys: Array<number>, name: string, datalinkType: eDatalinkType,
        targetConnectionKey: number, targetTableKey: number,
        targetTableName: string, auditConnectionKey: number,
        addSourceColumns: boolean, auditColumns: Array<eDeltaType>): Promise<Array<DexihDatalink>> {
            return this.hubPost<Array<DexihDatalink>>('/api/Hub/CreateDatalinks', {
                hubKey: this._hubKey,
                remoteAgentId: this.getCurrentRemoteAgentId(),
                sourceTableKeys: sourceTableKeys,
                datalinkName: name,
                datalinkType: datalinkType,
                targetConnectionKey: targetConnectionKey,
                targetTableKey: targetTableKey,
                targetTableName: targetTableName,
                auditConnectionKey: auditConnectionKey,
                addSourceColumns,
                auditColumns
            }, 'Creating datalinks...')
    }

        // remove datalinks
    deleteDatalinks(datalinks: Array<DexihDatalink>): Promise<boolean> {
        const datalinkNames = datalinks.map(c => c.name).join('<br>');

        return this.hubPostConfirm<boolean>('/api/Hub/DeleteDatalinks', {
            itemKeys: datalinks.map(d => d.key)
        }, 'Deleting datalinks...',
        'This action will delete the following datalinks and underlying transforms from the repository metadata.<p></p>' +
        datalinkNames +
        '<p></p><p></p>Are you sure you want to continue?');
    }

    shareItems(keys: Array<number>, objectType: eDataObjectType, isShared: boolean): Promise<boolean> {
        return this.hubPost<boolean>('/api/Hub/ShareItems', {
            keys: keys,
            objectType: objectType,
            isShared: isShared
        }, 'Sharing items...')
    }

    runDatalinks(datalinkKeys: Array<number>, truncateTarget: boolean,
        resetIncremental: boolean, resetIncrementalValue: string, inputColumns: InputColumn[],
        inputParameters: InputParameter[], cancelToken: CancelToken): Promise<boolean> {

        let data = {
            connectionId: this.authService.getWebSocketConnectionId(),
            datalinkKeys: datalinkKeys,
            truncateTarget: truncateTarget,
            resetIncremental: resetIncremental,
            resetIncrementalValue: resetIncrementalValue,
            inputColumns: inputColumns,
            inputParameters: inputParameters
        };

        if (truncateTarget) {
            return this.hubPostRemoteConfirm('/api/Hub/RunDatalinks', data, 'Running datalinks...',
            'This action will truncate all data in the target tables in the selected datalinks and reload from source.  ' +
            '<p></p><p></p>Are you sure you want to continue?', cancelToken);
        } else {
            return this.hubPostRemote('/api/Hub/RunDatalinks', data, 'Running datalinks...', cancelToken);
        }
    }


    public runDatalinkTests(datalinkTestKeys: Array<number>, cancelToken: CancelToken): Promise<boolean> {
        return this.hubPostRemote<boolean>('/api/Hub/RunDatalinkTests', {
            connectionId: this.authService.getWebSocketConnectionId(),
            datalinkTestKeys: datalinkTestKeys
        }, 'Running datalink tests...', cancelToken);
    }

    cancelDatalinkTests(datalinkTestKeys: Array<number>, cancelToken: CancelToken): Promise<boolean> {
        return this.hubPostRemote<boolean>('/api/Hub/CancelDatalinkTests', {
            itemKeys: datalinkTestKeys
        }, 'Cancelling datalink tests...', cancelToken)
    }

    cancelDatalinks(datalinkKeys: Array<number>, cancelToken: CancelToken): Promise<boolean> {
        return this.hubPostRemote<boolean>('/api/Hub/CancelDatalinks', {
            hubKey: this._hubKey,
            remoteAgentId: this.getCurrentRemoteAgentId(),
            itemKeys: datalinkKeys
        }, 'Cancelling datalinks...', cancelToken)
    }

    getAuditResults(auditType: string, connectionKeys: Array<number>, referenceKeys: Array<number>,
        childItems: boolean, rows: number, cancelToken: CancelToken): Promise<Array<TransformWriterResult>> {
             return this.hubPostRemote<Array<TransformWriterResult>>('/api/Hub/PreviewAuditResults', {
                connectionKeys,
                referenceKeys: referenceKeys,
                auditType: auditType,
                childItems: childItems,
                rows: rows,
                }, 'Previewing audit results...', cancelToken);
    }

    getResultDetail(auditConnectionKey: number, auditKey: number, cancelToken: CancelToken): Promise<TransformWriterResult[]> {
        return this.hubPostRemote<TransformWriterResult[]>('/api/Hub/PreviewAuditResults', {
            connectionKeys: [auditConnectionKey],
            referenceKeys: [],
            auditKey: auditKey,
            childItems: true,
            rows: 1
            }, 'Previewing audit results...', cancelToken);
    }

    deleteDatajobs(datajobs: Array<DexihDatajob>): Promise<boolean> {
        let names = datajobs.map(c => c.name).join('<br>');

        return this.hubPostConfirm<boolean>(
            '/api/Hub/DeleteDatajobs', {
                hubKey: this._hubKey,
                itemKeys: datajobs.map(t => t.key)
            }, 'Deleting datajob(s)...',
            'This action will delete the following data jobs, and any schedules and dependencies ' +
            '(Note, this will NOT delete the datalinks): <p></p> ' + names  + '<p></p>  Are you sure?'
        );
    }

    runDatajobs(datajobs: Array<DexihDatajob>, truncateTarget: boolean,
        resetIncremental: boolean, resetIncrementalValue: string, inputParameters: InputParameter[],
        cancelToken: CancelToken): Promise<boolean> {

            var data = {
                connectionId: this.authService.getWebSocketConnectionId(),
                datajobKeys: datajobs.map(d => d.key),
                truncateTarget: truncateTarget,
                resetIncremental: resetIncremental,
                resetIncrementalValue: resetIncrementalValue,
                inputParameters: inputParameters
            };

            if (truncateTarget) {
                return this.hubPostRemoteConfirm('/api/Hub/RunDatajobs', data, 'Running datajobs...',
                'This action will truncate all data in the target tables for datalinks in this job.  ' +
                '<p></p><p></p>Are you sure you want to continue?', cancelToken);
            } else {
                return this.hubPostRemote('/api/Hub/RunDatajobs', data, 'Running datajobs...', cancelToken);
            }
    }

    deactivateDatajobs(datajobKeys: Array<number>, cancelToken: CancelToken): Promise<boolean> {
        return this.hubPostRemote<boolean>('/api/Hub/DeactivateDatajobs', {
                connectionId: this.authService.getWebSocketConnectionId(),
                datajobKeys: datajobKeys
            }, 'Deactivating datajob(s)...', cancelToken
        );
    }

    activateDatajobs(datajobs: Array<DexihDatajob>, inputParameters: InputParameter[], cancelToken: CancelToken): Promise<boolean> {
        return this.hubPostRemote<boolean>('/api/Hub/ActivateDatajobs', {
            connectionId: this.authService.getWebSocketConnectionId(),
            datajobKeys: datajobs.map(d => d.key),
            inputParameters: inputParameters
        }, 'Activating datajob(s)...', cancelToken);
    }

    saveView(view: DexihView): Promise<DexihView> {
        return this.hubPost<DexihView>('/api/Hub/SaveView', {
            value: view
        }, 'Saving view...');
    }

    deleteViews(views: Array<DexihView>): Promise<boolean> {
        let viewNames = views.map(c => c.name).join('<br>');

        return this.hubPostConfirm<boolean>('/api/Hub/DeleteViews', {
            itemKeys: views.map(c => c.key)
        }, 'Deleting views(s)...',
        'This action will delete the following views, from the hub and cannot be reversed.<p></p>' +
        viewNames + '<p></p>Are you sure?');
    }

    saveDashboard(dashboard: DexihDashboard): Promise<DexihDashboard> {
        return this.hubPost<DexihDashboard>('/api/Hub/SaveDashboard', {
            value: dashboard
        }, 'Saving Dashboard...');
    }

    deleteDashboards(dashboards: Array<DexihDashboard>): Promise<boolean> {
        let names = dashboards.map(c => c.name).join('<br>');

        return this.hubPostConfirm<boolean>('/api/Hub/DeleteDashboards', {
            itemKeys: dashboards.map(c => c.key)
        }, 'Deleting Dashboard(s)...',
        'This action will delete the following dashboards, from the hub and cannot be reversed.<p></p>' +
                names + '<p></p>Are you sure?');
    }

    saveListOfValues(lov: DexihListOfValues): Promise<DexihListOfValues> {
        return this.hubPost<DexihListOfValues>('/api/Hub/SaveListOfValues', {
            value: lov
        }, 'Saving list of values...');
    }

    deleteListOfValues(lov: Array<DexihListOfValues>): Promise<boolean> {
        let names = lov.map(c => c.name).join('<br>');

        return this.hubPostConfirm<boolean>('/api/Hub/DeleteListOfValues', {
            itemKeys: lov.map(c => c.key)
        }, 'Deleting list of value(s)...',
        'This action will delete the following list of values, from the hub and cannot be reversed.<p></p>' +
        names + '<p></p>Are you sure?');
    }

    saveTag(tag: DexihTag): Promise<DexihTag> {
        return this.hubPost<DexihTag>('/api/Hub/SaveTags', {
            value: tag
        }, 'Saving tag...');
    }

    deleteTags(tags: Array<DexihTag>): Promise<boolean> {
        let names = tags.map(c => c.name).join('<br>');

        return this.hubPostConfirm<boolean>('/api/Hub/DeleteTags', {
            itemKeys: tags.map(c => c.key)
        }, 'Deleting tags(s)...',
        'This action will delete the following tags, from the hub and cannot be reversed.<p></p>' +
        names + '<p></p>Are you sure?');
    }

    saveTagObjects(tagKey: number, isChecked: boolean, objectKeys: Array<{objectType: eSharedObjectType, objectKey: number}>) {
        return this.hubPost('/api/Hub/SaveTagObjects', {
            tagKey,
            isChecked,
            objectKeys
        }, 'Saving tags...');
    }

    deleteTagObjects(objectKeys: Array<{objectType: eSharedObjectType, objectKey: number}>) {
        return this.hubPost('/api/Hub/DeleteTagObjects', {
            objectKeys
        }, 'Deleting tags...');
    }


    saveApi(api: DexihApi): Promise<DexihApi> {
        return this.hubPost<DexihApi>('/api/Hub/SaveApi', {
            value: api
        }, 'Saving api...');
    }

    deleteApis(apis: Array<DexihApi>): Promise<boolean> {
        let apiNames = apis.map(c => c.name).join('<br>');

        return this.hubPostConfirm('/api/Hub/DeleteApis', {
            itemKeys: apis.map(c => c.key)
        }, 'Deleting api(s)...',
            // tslint:disable-next-line:max-line-length
            'This action will delete the following apis, from the hub and cannot be reversed.  Note, this action will NOT deactivate currently active Api\'s.<p></p>.' +
            apiNames + '<p></p>Are you sure?'
        );

    }

    activateApis(apis: Array<DexihApi>, cancelToken: CancelToken): Promise<boolean> {
        return this.hubPostRemote<boolean>('/api/Hub/ActivateApis', {
            connectionId: this.authService.getWebSocketConnectionId(),
            apiKeys: apis.map(d => d.key),
        }, 'Activating Api(s)...', cancelToken);

    }

    deactivateApis(apiKeys: Array<number>, cancelToken: CancelToken): Promise<boolean> {
        return this.hubPostRemote<boolean>('/api/Hub/DeactivateApis', {
            connectionId: this.authService.getWebSocketConnectionId(),
            apiKeys: apiKeys
        }, 'Deactivating Api(s)...', cancelToken);
    }

    previewTableData(table: DexihTable, showRejectedData, selectQuery: SelectQuery, inputColumns: InputColumn[],
        parameters: DexihInputParameter[], cancelToken: CancelToken): PromiseWithCancel<PreviewResults> {
        let hub = this.createHub(this._hubKey, 'cache');
        this._hubCache.value.cacheAddConnection(table.connectionKey, hub);

        return this.previewTableDataQuery(table, showRejectedData, selectQuery, inputColumns, parameters, cancelToken);
    }



    getData(url: string, data: any, waitMessage: string, cancelToken): PromiseWithCancel<PreviewResults> {
        return new PromiseWithCancel<PreviewResults>((resolve, reject) => {
            this.hubPostRemote<PreviewResults>(url, data, waitMessage, cancelToken).then(previewData => {
                let columns = this.authService.constructDataTableColumns(previewData.columns);
                resolve({
                    name: previewData.name,
                    columns: columns,
                    data: previewData.data,
                    transformProperties: previewData.transformProperties,
                    status: previewData.status,
                    viewConfig: previewData.viewConfig
                });
            }).catch(reason => {
                this.addHubMessage(reason, true, 'Preview Data');
                reject(reason);
            });
        });
    }

    previewTableDataQuery(table: DexihTable, showRejectedData, selectQuery: SelectQuery, inputColumns: InputColumn[],
        inputParameters: DexihInputParameter[], cancelToken: CancelToken):
        PromiseWithCancel<PreviewResults> {
            return this.getData('/api/Hub/PreviewTableQuery', {
                hubKey: this._hubKey,
                remoteAgentId: this.getCurrentRemoteAgentId(),
                table: table,
                showRejectedData: showRejectedData,
                selectQuery: selectQuery,
                inputColumns: inputColumns,
                inputParameters: inputParameters,
            }, 'Retrieving table data...', cancelToken);
    }

    previewTableKeyData(tableKey: number, showRejectedData, selectQuery: SelectQuery, inputColumns: InputColumn[],
        inputParameters: DexihInputParameter[], cancelToken: CancelToken):
        PromiseWithCancel<PreviewResults> {
            return this.getData('/api/Hub/PreviewTable', {
                tableKey: tableKey,
                showRejectedData: showRejectedData,
                selectQuery: selectQuery,
                inputColumns: inputColumns,
                inputParameters: inputParameters,
            }, 'Retrieving table data...', cancelToken);
    }

    previewDatalinkKeyData(datalinkKey: number, previewUpdates: boolean, selectQuery: SelectQuery, inputColumns: InputColumn[],
        inputParameters: DexihInputParameter[], cancelToken: CancelToken):
    PromiseWithCancel<PreviewResults> {

        return this.getData('/api/Hub/PreviewDatalink', {
            datalinkKey: datalinkKey,
            previewUpdates: previewUpdates,
            selectQuery: selectQuery,
            inputColumns: inputColumns,
            inputParameters: inputParameters,
        }, 'Retrieving datalink data..', cancelToken);
    }

    previewTransformData(datalink: DexihDatalink, datalinkTransformKey: number, selectQuery: SelectQuery, inputColumns: InputColumn[],
        inputParameters: DexihInputParameter[], cancelToken: CancelToken):
        PromiseWithCancel<PreviewResults> {
            // remove status as they will not parse into json.
            datalink['currentStatus'] = null;
            datalink.entityStatus = null;
            datalink['previousStatus'] = null;

            return this.getData('/api/Hub/PreviewTransform', {
                datalink: datalink,
                selectQuery,
                inputColumns,
                inputParameters: inputParameters,
                datalinkTransformKey: datalinkTransformKey,
            }, 'Retrieving transform data...', cancelToken)
    }

    previewView(view: DexihView, inputColumns: InputColumn[],
        inputParameters: DexihInputParameter[], cancelToken: CancelToken): PromiseWithCancel<PreviewResults> {

        return this.getData('/api/Hub/PreviewView', {
            hubKey: this._hubKey,
            remoteAgentId: this.getCurrentRemoteAgentId(),
            view: view,
            inputColumns: inputColumns,
            inputParameters: inputParameters,
        }, 'Retrieving view data...', cancelToken);
    }

    previewViewKey(viewKey: number, inputColumns: InputColumn[], parentParameters: InputParameter[],
        inputParameters: DexihInputParameter[], cancelToken: CancelToken): PromiseWithCancel<PreviewResults> {

        return this.getData('/api/Hub/PreviewViewKey', {
            hubKey: this._hubKey,
            remoteAgentId: this.getCurrentRemoteAgentId(),
            viewKey: viewKey,
            inputColumns: inputColumns,
            inputParameters: inputParameters,
            parentParameters: parentParameters
        }, 'Retrieving view data...', cancelToken);
    }

    previewDashboard(dashboard: DexihDashboard, inputParameters: DexihInputParameter[], cancelToken: CancelToken):
    Promise<{dashboardItemKey: string, dataKey: string}[]> {

        let remoteAgent = this.getRemoteAgentCurrent();

        if (!remoteAgent) {
            let message = new Message(false, 'No active remote agent.', null, null);
            this.addHubMessage(message);
            return Promise.reject(message);
        }

        return new PromiseWithCancel<{dashboardItemKey: string, dataKey: string}[]>((resolve, reject) => {
            this.authService.getBestDownloadUrl(remoteAgent, 0).then(url => {
                this.hubPost<{dashboardItemKey: string, dataKey: string}[]>('/api/Hub/PreviewDashboard', {
                    hubKey: this._hubKey,
                    remoteAgentId: this.getCurrentRemoteAgentId(),
                    downloadUrl: url,
                    dashboard: dashboard,
                    inputParameters: inputParameters,
                }, 'Retrieving dashboard data...').then(urls => {
                    resolve(urls);
                }).catch(reason => reject(reason));
            }).catch(reason => reject(reason));
        });
    }

    previewListOfValues(listOfValues: DexihListOfValues, resetCache: boolean, cancelToken: CancelToken):
        PromiseWithCancel<ListOfValuesItem[]> {
        if (listOfValues.sourceType === eLOVObjectType.Static) {
            return new PromiseWithCancel<ListOfValuesItem[]>((resolve) => {
                resolve(listOfValues.staticData);
            });
        }

        return this.hubPostRemote<ListOfValuesItem[]>('/api/Hub/PreviewListOfValues', {
            hubKey: this._hubKey,
            remoteAgentId: this.getCurrentRemoteAgentId(),
            listOfValues: listOfValues,
            resetCache: resetCache
        }, 'Getting list of values...', cancelToken);
    }

    previewListOfValuesKey(listOfValuesKey: number, resetCache: boolean, cancelToken: CancelToken): PromiseWithCancel<ListOfValuesItem[]> {
        let hub: DexihHub = this._hubCache.value.hub;
        let listOfValues = hub.dexihListOfValues.find(c => c.key === listOfValuesKey);

        if (listOfValues.sourceType === eLOVObjectType.Static) {
            return new PromiseWithCancel<ListOfValuesItem[]>((resolve) => {
                resolve(listOfValues.staticData);
            });
        }

        return this.hubPostRemote<ListOfValuesItem[]>('/api/Hub/PreviewListOfValuesKey', {
            hubKey: this._hubKey,
            remoteAgentId: this.getCurrentRemoteAgentId(),
            listOfValuesKey: listOfValuesKey,
            resetCache: resetCache
        }, 'Getting list of values...', cancelToken);
    }

    // downloads a dataset from the provided url
    downloadUrlData(url: string, cancelToken: CancelToken): PromiseWithCancel<PreviewResults> {
        let promise = new PromiseWithCancel<PreviewResults>((resolve, reject) => {
                let httpPromise = this.authService.get<PreviewResults>(url, null, false, cancelToken);
                httpPromise.then(data => {
                    if (data['success'] === false) {
                        this.addHubMessage(data);
                        reject(data['message']);
                    } else {
                        let columns = this.authService.constructDataTableColumns(data.columns);
                        resolve({
                            name: data.name,
                            columns: columns,
                            data: data.data,
                            transformProperties: data.transformProperties,
                            status: data.status,
                            viewConfig: data.viewConfig
                        });
                        return;
                    }
                }).catch(reason => {
                    this.addHubMessage(reason.error);
                    reject(reason.error);
                });
            }, cancelToken);

        return promise;
    }

    datalinkProperties(datalinkKey: number, selectQuery: SelectQuery, inputColumns: InputColumn[], cancelToken: CancelToken):
    Promise<TransformProperties> {
        return this.hubPostRemote<TransformProperties>('/api/Hub/DatalinkProperties', {
            hubKey: this._hubKey,
            remoteAgentId: this.getCurrentRemoteAgentId(),
            datalinkKey: datalinkKey,
            selectQuery: selectQuery,
            inputColumns: inputColumns,
        }, 'Getting datalinks properties...', cancelToken);

    }

    previewProfileData(writerResult: TransformWriterResult, summaryOnly: boolean, cancelToken: CancelToken):
        PromiseWithCancel<{ columns: Array<any>, data: Array<any> }> {

        if (!writerResult.profileTableName) {
            let message = new Message(false, 'This result does not contain profile data.', null, null);
            this.addHubMessage(message);
            Promise.reject(message);
        }

        const hub = this._hubCache.value.hub;
        let connection = hub.dexihConnections.find(c => c.key === writerResult.auditConnectionKey);

        return this.getData('/api/Hub/PreviewProfile', {
            hubKey: this._hubKey,
            remoteAgentId: this.getCurrentRemoteAgentId(),
            auditKey: writerResult.auditKey,
            profileTableName: writerResult.profileTableName,
            connection: connection,
            summaryOnly: summaryOnly,
        }, 'Retrieving profile data...', cancelToken);
    }

    downloadData(downloadObjects: Array<DownloadObject>, zipFiles: boolean, downloadFormat: eDownloadFormat, cancelToken: CancelToken):
        Promise<boolean> {

        return new Promise<boolean>((resolve, reject) => {
            this.hubPostRemote<ManagedTask>('/api/Hub/DownloadSharedData', {
                connectionId: this.authService.getWebSocketConnectionId(),
                downloadFormat: downloadFormat,
                zipFiles: zipFiles,
                downloadObjects: downloadObjects,
            }, 'Downloading shared data...', cancelToken).then(task => {
                this.authService.addUpdateTask(task);
                this.addHubSuccessMessage('The download task has started.');
                resolve(true);
            });
        });
    }

    downloadTableData(table: DexihTable, showRejectedData, selectQuery: SelectQuery, inputColumns: InputColumn[],
        zipFiles: boolean, downloadFormat: eDownloadFormat, cancelToken: CancelToken):
        Promise<boolean> {
        return new Promise<boolean>((resolve, reject) => {
            this.hubPostRemote<ManagedTask>('/api/Hub/DownloadTableData', {
                hubKey: this._hubKey,
                remoteAgentId: this.getCurrentRemoteAgentId(),
                connectionId: this.authService.getWebSocketConnectionId(),
                table: table,
                showRejectedData: showRejectedData,
                selectQuery: selectQuery,
                inputColumns: inputColumns,
                downloadFormat: downloadFormat,
                zipFiles: zipFiles,
                }, 'Downloading table data...', cancelToken).then(task => {
                    this.authService.addUpdateTask(task);
                    this.addHubSuccessMessage('The download task has started.');
                    resolve(true);
                });
            });
    }

    downloadDatalinkData(datalink: DexihDatalink, datalinkTransformKey: number, selectQuery: SelectQuery, inputColumns: InputColumn[],
        zipFiles: boolean, downloadFormat: eDownloadFormat, cancelToken: CancelToken):
    Promise<boolean> {
        return new Promise<boolean>((resolve, reject) => {
            this.hubPostRemote<ManagedTask>('/api/Hub/DownloadDatalinkData', {
                hubKey: this._hubKey,
                remoteAgentId: this.getCurrentRemoteAgentId(),
                connectionId: this.authService.getWebSocketConnectionId(),
                datalink: datalink,
                datalinkTransformKey: datalinkTransformKey,
                selectQuery: selectQuery,
                inputColumns: inputColumns,
                downloadFormat: downloadFormat,
                zipFiles: zipFiles,
                }, 'Downloading table data...', cancelToken).then(task => {
                    this.authService.addUpdateTask(task);
                    this.addHubSuccessMessage('The download task has started.');
                    resolve(true);
                });
            });
    }

    downloadProfileData(writerResult: TransformWriterResult, cancelToken: CancelToken): Promise<boolean> {
        let table = this._hubCache.value.getProfileTable(writerResult.profileTableName, writerResult.auditConnectionKey);
        return this.downloadTableData(table, false, null, null, false, eDownloadFormat.Csv, cancelToken);
    }

    deleteColumnValidations(validations: Array<DexihColumnValidation>): Promise<boolean> {
        let validationNames = validations.map(c => c.name).join('<br>');

        return this.hubPostConfirm<boolean>('/api/Hub/DeleteColumnValidations', {
            hubKey: this._hubKey,
            itemKeys: validations.map(c => c.key)
        }, 'Deleting column validation...', 'This action will delete the following validations, from the hub and cannot be reversed.<p></p>'
        + validationNames + '<p></p> Are you sure?');
    }

    // saves the current validation.
    saveColumnValidation(validation: DexihColumnValidation): Promise<DexihColumnValidation> {
        return this.hubPost<DexihColumnValidation>('/api/Hub/SaveColumnValidation', {
            hubKey: this._hubKey,
            remoteAgentId: this.getCurrentRemoteAgentId(),
            validation: validation
        }, 'Saving column validation...');
    }

    deleteCustomFunctions(customFunctions: Array<DexihCustomFunction>): Promise<boolean> {
        let functionNames = customFunctions.map(c => c.name).join('<br>');

        return this.hubPostConfirm<boolean>('/api/Hub/DeleteCustomFunctions', {
            hubKey: this._hubKey,
            itemKeys: customFunctions.map(c => c.key)
        }, 'Deleting custom function(s)...',
        'This action will delete the following custom functions, from the hub and cannot be reversed.<p></p>'
                + functionNames + '<p></p> Are you sure?');
    }

            // tests the connection and refreshes the databases.
    testCustomFunction(datalinkTransformItem: DexihDatalinkTransformItem,
        testValues: Array<any>, cancelToken: CancelToken): PromiseWithCancel<Array<any>> {
        return this.hubPostRemote<Array<any>>('/api/Hub/TestCustomFunction',
                {value: datalinkTransformItem, testValues: testValues}, 'Testing custom function...', cancelToken);
    }

        // tests the connection and refreshes the databases.
    downloadCustomFunction(datalinkTransformItem: DexihDatalinkTransformItem, testValues: Array<any>): Promise<Array<any>> {
        return new Promise<Array<any>>((resolve, reject) => {
            const cache = this._hubCache.value;

            this.authService.downloadFile('/api/Hub/DownloadFunctionCode',
                { hubKey: cache.hub.hubKey, datalinkTransformItem, testValues}, 'CustomFunction.zip', 'application/zip').then(() => {
                    this.addHubSuccessMessage('The custom function code has been downloaded.');
                }).catch(reason => {
                    this.addHubMessage(reason);
                    reject(reason);
                });

        });
    }

    deleteFileFormats(validations: Array<DexihFileFormat>): Promise<boolean> {
        let fileFormatNames = validations.map(c => c.name).join('<br>>');

        return this.hubPostConfirm<boolean>('/api/Hub/DeleteFileFormats', {
            hubKey: this._hubKey,
            itemKeys: validations.map(c => c.key)
        }, 'Deleting file format(s)...',
        'This action will delete the following file formats, from the hub and cannot be reversed.<p></p>' +
                fileFormatNames + '<p></p>Are you sure?');
    }


            // tests the connection and refreshes the databases.
    testColumnValidation(columnValidation: DexihColumnValidation, testValue: string, cancelToken: CancelToken):
        PromiseWithCancel<{success: boolean, cleanedValue: string, rejectReason: string}> {
            return this.hubPostRemote<{success: boolean, cleanedValue: string, rejectReason: string}>('/api/Hub/TestColumnValidation',
                {value: columnValidation, testValue: testValue}, 'Testing column validation...', cancelToken);
    }


    deleteHubVariables(variables: Array<DexihHubVariable>): Promise<boolean> {
        let variableNames = variables.map(c => c.name).join('<br>');

        return this.hubPostConfirm<boolean>('/api/Hub/DeleteHubVariables', {
            hubKey: this._hubKey,
            itemKeys: variables.map(c => c.key)
        }, 'Deleting hub variable(s)...',
        'This action will delete the following variables, from the hub and cannot be reversed.<p></p>' +
            variableNames + '<p></p>Are you sure?');
    }

    deleteDatalinkTests(items: Array<DexihDatalinkTest>): Promise<boolean> {
        let itemNames = items.map(c => c.name).join('<br>');

        return this.hubPostConfirm<boolean>('/api/Hub/DeleteDatalinkTests', {
            hubKey: this._hubKey,
            itemKeys: items.map(c => c.key)
        }, 'Deleting datalink test(s)...',
        'This action will delete the following datalink tests, from the hub and cannot be reversed.<p></p>' +
        itemNames + '<p></p>Are you sure?');
    }

    newDatalinkTest(name: string, datalinkKeys: Array<number>, auditConnectionKey: number, targetConnectionKey: number,
        sourceConnectionKey: number): Promise<DexihDatalinkTest> {

            return this.hubPost<DexihDatalinkTest>('/api/Hub/NewDatalinkTest', {
                hubKey: this._hubKey,
                remoteAgentId: this.getCurrentRemoteAgentId(),
                connectionId: this.authService.getWebSocketConnectionId(),
                name,
                datalinkKeys,
                auditConnectionKey,
                targetConnectionKey,
                sourceConnectionKey,
            }, 'New Datalink test...');
    }

    runDatalinkTestSnapshot(items: Array<DexihDatalinkTest>, cancelToken: CancelToken): Promise<boolean> {
        let itemNames = items.map(c => c.name).join('<br>');

        return this.hubPostRemoteConfirm('/api/Hub/RunDatalinkTestSnapshot', {
            hubKey: this._hubKey,
            remoteAgentId: this.getCurrentRemoteAgentId(),
            connectionId: this.authService.getWebSocketConnectionId(),
            datalinkTestKeys: items.map(c => c.key)
        }, 'Running datalink test snapshot...',
        // tslint:disable-next-line:max-line-length
        'This action will delete all data in the test tables, and refresh them with the actual data in the datalink source/target tables.  This cannot be reversed.<p></p>' +
        itemNames + '<p></p>Are you sure?', cancelToken);
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

    createPaths(table: DexihTable, cancelToken: CancelToken): PromiseWithCancel<boolean> {
        return this.hubPostRemote<boolean>('/api/Hub/CreateFilePaths', {value: table}, 'Creating files paths..', cancelToken);
    }

    getFileList(table: DexihTable, flatFilePath: eFlatFilePath, cancelToken: CancelToken): PromiseWithCancel<Array<FileProperties>> {
        return this.hubPostRemote<Array<FileProperties>>('/api/Hub/GetFileList', {value: table, path: flatFilePath}, 'Getting files list...'
        , cancelToken);
    }

    deleteFiles(table: DexihTable, flatFilePath: eFlatFilePath, files: Array<string>, cancelToken: CancelToken):
    PromiseWithCancel<boolean> {
        let fileNames = '<p>' + files.map(c => c).join('</p><p>') + '</p>';

        return this.hubPostRemoteConfirm<boolean>('/api/Hub/DeleteFiles',
        {value: table, path: flatFilePath, files: files}, 'Deleting files...',
        'This action will delete the following files, from the connection and cannot be reversed.<p></p>' +
            fileNames + '<p></p>Are you sure?',
                    cancelToken);
    }

    moveFiles(table: DexihTable, fromFilePath: eFlatFilePath, toFilePath: eFlatFilePath, files: Array<string>, cancelToken: CancelToken):
        PromiseWithCancel<boolean> {
        return this.hubPostRemote<boolean>('/api/Hub/MoveFiles', {
            value: table, fromPath: fromFilePath,
            toPath: toFilePath,
            files: files}, 'Moving files...', cancelToken);
    }

    downloadFiles(table: DexihTable, flatFilePath: eFlatFilePath, files: Array<string>, cancelToken: CancelToken):
    Promise<boolean> {

        return new Promise<boolean>((resolve, reject) => {
            this.hubPostRemote<ManagedTask>('/api/Hub/DownloadFiles', {
                hubKey: this._hubKey,
                connectionId: this.authService.getWebSocketConnectionId(),
                remoteAgentId: this.getCurrentRemoteAgentId(),
                tableKey: table.key,
                path: flatFilePath,
                files: files,
            }, 'Downloading files...', cancelToken).then(task => {
                this.authService.addUpdateTask(task);
                resolve(true);
            }).catch(reason => reject(reason));
        });
    }

    uploadFile(table: DexihTable, filePath: eFlatFilePath, fileName: string, cancelToken: CancelToken):
    Promise<string> {
        return new Promise<string>((resolve, reject) => {
            let remoteAgent = this.getRemoteAgentCurrent();
            this.authService.postRemoteUpload('/api/Hub/UploadFile', {
                hubKey: this._hubKey,
                remoteAgentId: remoteAgent.instanceId,
                connectionId: this.authService.getWebSocketConnectionId(),
                tableKey: table.key,
                path: filePath,
                fileName: fileName,
            }, remoteAgent, 'Uploading file...', cancelToken).then(url => {
                resolve(url.url + '/file/' + fileName);
            });
        });
    }

    bulkUploadFiles(connectionKey: number, fileFormatKey: number, formatType: eTypeCode , fileName: string, cancelToken: CancelToken):
    Promise<{url: string, reference: string}> {
        return new Promise<{url: string, reference: string}>((resolve, reject) => {
            let remoteAgent = this.getRemoteAgentCurrent();
            this.authService.postRemoteUpload('/api/Hub/BulkUploadFile', {
                hubKey: this._hubKey,
                remoteAgentId: remoteAgent.instanceId,
                connectionId: this.authService.getWebSocketConnectionId(),
                connectionKey: connectionKey,
                fileFormatKey: fileFormatKey,
                formatType: formatType,
                fileName: fileName,
            }, remoteAgent, 'Uploading file...', cancelToken).then(url => {
                resolve({reference: url.key, url: url.url + '/file/' + fileName});
            }).catch(reason => reject(reason));
        });
    }

}
