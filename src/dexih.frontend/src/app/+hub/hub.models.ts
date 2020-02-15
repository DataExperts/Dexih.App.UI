import { BehaviorSubject} from 'rxjs';
import { Message } from '../+auth/auth.models';
import { DexihHubVariable, DexihHub, DexihFunctionParameter, DexihConnection, DexihTable,
    DexihTableColumn, DexihDatalinkTransform, DexihColumnValidation, DexihFileFormat, DexihDatalink,
    DexihDatalinkTest, DexihDatajob, DexihView, DexihDashboard, DexihApi, DexihCustomFunction,
    DexihTrigger, TransformProperties, eStatus, eParameterDirection, eConnectionPurpose, eDeltaType,
    eSourceType, eImportAction, eSecurityFlag, eUpdateStrategy, eFailAction, eInvalidAction,
    eFunctionCaching, eCleanAction, eDuplicateStrategy, eRunStatus, ePermission, eTypeCode,
    eTransformWriterMethod, eTransformItemType, eFunctionType, eDataObjectType, eSharedObjectType, eSortDirection, eSeriesGrain, eDayOfWeek, ChartConfig, eLOVObjectType, DexihListOfValues, InputParameterBase, DexihDatalinkTestStep, eTransformTypeItems, eTransformType } from '../shared/shared.models';

// export class RemoteMessage {
//     public messageId: string;
//     public securityToken: string;
//     public remoteAgentId: string;
//     public method: string;
//     public hubKey: number;
//     public success: boolean;
//     public message: string;
//     public exceptionDetails: string;
//     public cache: HubCache;
//     public parameters: Array<Parameter>;
//     public hubVariables: Array<DexihHubVariable>;
//     public value;

//     constructor () {
//     }
// }

export enum eCacheStatus {
    NoHub,
    NotLoaded,
    Loading,
    Loaded,
    Error
};

export class EntityStatus {
    public lastStatus: eStatus;
    public message: string;
    public isBusy: boolean;

    public constructor() {
        this.isBusy = false;
        this.lastStatus = eStatus.None;
    }
}

export class Parameter {
    public key: string;
    public value;
}

export enum eSearchObjectType {
    All,
    Connection,
    Table,
    TableColumn,
    FileFormat,
    Datalink,
    Datajob,
    ColumnValidation,
    View,
    Api,
    Dashboard,
    ListOfValues,
    DatalinkTest
}

export const SearchObjectTypes = [
    {key: eSearchObjectType.All, name: 'All'},
    {key: eSearchObjectType.Connection, name: 'Connection'},
    {key: eSearchObjectType.Table, name: 'Table'},
    {key: eSearchObjectType.TableColumn, name: 'Table Column'},
    {key: eSearchObjectType.FileFormat, name: 'File Format'},
    {key: eSearchObjectType.Datalink, name: 'Datalink'},
    {key: eSearchObjectType.Datajob, name: 'Datajob'},
    {key: eSearchObjectType.ColumnValidation, name: 'Column Validation'},
    {key: eSearchObjectType.View, name: 'View'},
    {key: eSearchObjectType.Api, name: 'Api'},
    {key: eSearchObjectType.Dashboard, name: 'Dashboard'},
    {key: eSearchObjectType.ListOfValues, name: 'List of Values'},
    {key: eSearchObjectType.DatalinkTest, name: 'Datalink Test'},
];

export class SearchResult {
    public object: any;
    public objectParent: any;
    public objectType: eSearchObjectType;

    constructor(object: any, objectParent, objectType: eSearchObjectType) {
        this.object = object;
        this.objectType = objectType;
        this.objectParent = objectParent;
    }
}


export class SharedObjectProperty {
    public type: eSharedObjectType;
    public parentType: eSharedObjectType;
    public name: string;
    public parentKey: string;
    public property: string;
    public cacheProperty: string;
    public cacheAddMethod: string;
    public cacheGetMethod: string;
    public icon: string;
    public routerLink: string;
    public displayName: string;
    public description: string;
}

export const sharedObjectProperties: SharedObjectProperty[] = [
    {
        type: eSharedObjectType.Connection, name: 'Connection', cacheProperty: 'dexihConnections', property: 'connections',
        parentKey: '', parentType: null, cacheAddMethod: 'cacheAddConnection', cacheGetMethod: '',
        icon: 'fa-database', routerLink: 'connections',
        displayName: 'Connections', description: 'Connections to data sources such as databases, flat files and web services.'
    },
    {
        type: eSharedObjectType.Table, name: 'Table', cacheProperty: 'dexihTables', property: 'tables',
        parentKey: 'connectionKey', parentType: eSharedObjectType.Connection, cacheAddMethod: 'cacheAddTable',
        cacheGetMethod: 'getTableCache', icon: 'fa-table', routerLink: 'tables',
        displayName: 'Tables', description: 'References to structured and unstructured datasets.'
    },
    {
        type: eSharedObjectType.Datalink, name: 'Datalink', cacheProperty: 'dexihDatalinks', property: 'datalinks',
        parentKey: '', parentType: null, cacheAddMethod: 'cacheAddDatalink', cacheGetMethod: 'getDatalinkCache',
        icon: 'fa-exchange', routerLink: 'datalinks',
        displayName: 'Datalinks', description: 'Runnable or queryable data sets of data transformations.'
    },
    {
        type: eSharedObjectType.Datajob, name: 'Datajob', cacheProperty: 'dexihDatajobs', property: 'datajobs',
        parentKey: '', parentType: null, cacheAddMethod: 'cacheAddDatajob',
        cacheGetMethod: 'getDatajobCache', icon: 'fa-calendar', routerLink: 'datajobs',
        displayName: 'Jobs and Schedules',
        description: 'Job which can be scheduled or run on demand, which contains a sequence of datalinks'
    },
    {
        type: eSharedObjectType.View, name: 'View', cacheProperty: 'dexihViews', property: 'views',
        parentKey: '', parentType: null, cacheAddMethod: 'cacheAddView',
        cacheGetMethod: 'getViewCache', icon: 'fa-bar-chart', routerLink: 'views',
        displayName: 'Views', description: 'Charts and tabular views of table or datalinks outputs.'
    },
    {
        type: eSharedObjectType.Dashboard, name: 'Dashboard', cacheProperty: 'dexihDashboards', property: 'dashboards',
        parentKey: '', parentType: null, cacheAddMethod: 'cacheAddDashboard',
        cacheGetMethod: 'getDashboardCache', icon: 'fa-pie-chart', routerLink: 'dashboards',
        displayName: 'Dashboards', description: 'A collection of views gathered into a single dashboard.'
    },
    {
        type: eSharedObjectType.Api, name: 'Api', cacheProperty: 'dexihApis', property: 'apis',
        parentKey: '', parentType: null, cacheAddMethod: 'cacheAddApi',
        cacheGetMethod: 'getApiCache', icon: 'fa-feed', routerLink: 'apis',
        displayName: 'Api\'s', description: 'Published Rest based Api\'s which can be used to access data using third party tools'
    },
    {
        type: eSharedObjectType.FileFormat, name: 'FileFormat', cacheProperty: 'dexihFileFormats', property: 'fileFormats',
        parentKey: '', parentType: null, cacheAddMethod: 'cacheAddFileFormat',
        cacheGetMethod: '', icon: 'fa-file-text-o', routerLink: 'fileFormats',
        displayName: 'File Formats', description: 'Definitions for delimited flat files'
    },
    {
        type: eSharedObjectType.ColumnValidation, name: 'ColumnValidation', cacheProperty: 'dexihColumnValidations',
        property: 'columnValidations',
        parentKey: '', parentType: null, cacheAddMethod: 'cacheAddColumnValidation',
        cacheGetMethod: 'getColumnValidationCache', icon: 'fa-check-square-o',
        routerLink: 'columnValidations',
        displayName: 'Column Validations', description: 'Validation rule that can be applied to columns within a table.'
    },
    {
        type: eSharedObjectType.HubVariable, name: 'HubVariable', cacheProperty: 'dexihHubVariables', property: 'hubVariables',
        parentKey: '', parentType: null, cacheAddMethod: 'cacheAddHubVariable',
        cacheGetMethod: '', icon: 'fa-fw fa-at', routerLink: 'hubVariables',
        displayName: 'Variables', description: 'Variables which can be used as global configuration throughout the hub.'
    },
    {
        type: eSharedObjectType.ListOfValues, name: 'List Of Values', cacheProperty: 'dexihListOfValues', property: 'listOfValues',
        parentKey: '', parentType: null, cacheAddMethod: 'cacheAddListOfValues',
        cacheGetMethod: 'getListOfValuesCache', icon: 'fa-list-alt', routerLink: 'listOfValues',
        displayName: 'List Of Values',
        description: 'List of values which can be used for parameter drop downs and validations.'
    },
    {
        type: eSharedObjectType.CustomFunction, name: 'CustomFunction', cacheProperty: 'dexihCustomFunctions', property: 'customFunctions',
        parentKey: '', parentType: null, cacheAddMethod: 'cacheAddCustomFunction',
        cacheGetMethod: '', icon: 'fa-code', routerLink: 'customFunctions',
        displayName: 'Functions', description: 'Custom c# functions which can be used in datalinks.'
    },
    {
        type: eSharedObjectType.DatalinkTest, name: 'DatalinkTest', cacheProperty: 'dexihDatalinkTests', property: 'datalinkTests',
        parentKey: '', parentType: null, cacheAddMethod: 'cacheAddDatalinkTest',
        cacheGetMethod: 'getDatalinkTestCache', icon: 'fa-flag-checkered', routerLink: 'datalinkTests',
        displayName: 'Datalink Tests',
        description: 'Regression tests which can be used to ensure datalinks function after upgrades or modification.'
    },
    
];

export class SharedObject {
    public type: eSharedObjectType;
    public item: any;
    public parentItem: any;
    public key: number;
    public name: string;
    public label: string;
    public updateDate: Date;
    public description: string;
}

export class HubCacheChange {
    constructor(
        public changeClass: eSharedObjectType,
        public changeType: eImportAction,
        public data: any
    ) {}
}


export class HubCache {

    public hub: DexihHub;

    public hubPermission: ePermission;

    public readonly status: eCacheStatus;

    private _sequenceGenerator = 0;

    public static parameterIsOutput(p: DexihFunctionParameter): boolean {
        return p.direction === eParameterDirection.Output
        || p.direction === eParameterDirection.ResultOutput
        || p.direction === eParameterDirection.ResultReturnValue
        || p.direction === eParameterDirection.ReturnValue
    }

    public static parameterIsInput(p: DexihFunctionParameter): boolean {
        return p.direction === eParameterDirection.Input
        || p.direction === eParameterDirection.ResultInput
    }

    constructor(status: eCacheStatus, hub: DexihHub)  {
        this.status = status;
        if (hub) {
            this.hub = hub;
        }
    }

    get canAdministrate(): boolean {
        if (this.hub) {
            return this.hubPermission === ePermission.Owner;
        }

        return false;
    }

    get canRead(): boolean {
        if (this.hub) {
            return this.hubPermission === ePermission.Owner ||
                this.hubPermission === ePermission.FullReader ||
                this.hubPermission === ePermission.User;
        }

        return false;
    }

    get canWrite(): boolean {
        if (this.hub) {
            return this.hubPermission === ePermission.Owner ||
                this.hubPermission === ePermission.User;
        }

        return false;
    }

    // create a simple unique, sequence, starting from -1, which is used to generate temporary keys.
    public getNextSequence(): number {
        this._sequenceGenerator--;
        return this._sequenceGenerator;
    }

    public getManagedConnections(): Array<DexihConnection> {
        let connections = this.hub.dexihConnections.filter(c => c.purpose === eConnectionPurpose.Managed && c.isValid);
        return connections;
    }

    public getCacheItem(itemType: eSharedObjectType, key: number) {
        if (!this.hub) { return; }

        switch (itemType) {
            case eSharedObjectType.Api:
                return this.hub.dexihApis.find(c => c.key === key && c.isValid);
            case eSharedObjectType.ColumnValidation:
                return this.hub.dexihColumnValidations.find(c => c.key === key && c.isValid);
            case eSharedObjectType.Connection:
                return this.hub.dexihConnections.find(c => c.key === key && c.isValid);
            case eSharedObjectType.CustomFunction:
                return this.hub.dexihCustomFunctions.find(c => c.key === key && c.isValid);
            case eSharedObjectType.Datajob:
                return this.hub.dexihDatajobs.find(c => c.key === key && c.isValid);
            case eSharedObjectType.Datalink:
                return this.hub.dexihDatalinks.find(c => c.key === key && c.isValid);
            case eSharedObjectType.DatalinkTest:
                return this.hub.dexihDatalinkTests.find(c => c.key === key && c.isValid);
            case eSharedObjectType.FileFormat:
                return this.hub.dexihFileFormats.find(c => c.key === key && c.isValid);
            case eSharedObjectType.HubVariable:
                return this.hub.dexihHubVariables.find(c => c.key === key && c.isValid);
            case eSharedObjectType.Table:
                return this.getTable(key);
            case eSharedObjectType.View:
                return this.hub.dexihViews.find(c => c.key === key && c.isValid);
        }

        return null;
    }

    isLoaded(): boolean {
        return this.status === eCacheStatus.Loaded;
    }

    getHubUrl(): string {
        return '/hub/' + this.hub.hubKey;
    }


    public getConnection(connectionKey): DexihConnection {
        let connection = this.hub.dexihConnections.find(c => c.key === connectionKey);
        return connection;
    }

    public getConnectionCopy(connectionKey): DexihConnection {
        let connection = this.hub.dexihConnections.find(c => c.key === connectionKey);
        let connectionCopy = Object.assign({}, connection);
        return connectionCopy;
    }

    public getTable(tableKey: number): DexihTable {
        let hub = this.hub;
        let table = hub.dexihTables.find(c => c.key === tableKey);
        return table;
    }

    public getTransformName(transform: DexihDatalinkTransform): string {
        if (transform.name) {
            return transform.name;
        }

        let name = eTransformTypeItems[transform.transformType].name;

        switch(transform.transformType) {
            case eTransformType.Join:
            case eTransformType.Lookup:
                name = name + ' ' + transform.joinDatalinkTable.name;
        }

        if(transform.nodeDatalinkColumn) {
            name = name + ' at ' + transform.nodeDatalinkColumn.name
        }

        return name;
    }

    public getColumn(columnKey: number) {
        let hub = this.hub;
        for (let i = 0; i < hub.dexihTables.length; i++) {
            let table = hub.dexihTables[i];
            let column = table.dexihTableColumns.find(c => c.key === columnKey);
            if (column) { return column; }
        }
        return null;
    }

    public getDatalinkTestStep(datalinkTestStepKey: number): DexihDatalinkTestStep {
        let hub = this.hub;
        for (let test of hub.dexihDatalinkTests) {
            let testStep = test.dexihDatalinkTestSteps.find(c => c.key === datalinkTestStepKey);
            if (testStep) {
                return testStep;
            }
        }
        return null;
    }


    public newColumn(table: DexihTable, deltaType: eDeltaType): DexihTableColumn {
        let column = new DexihTableColumn();
        // if new column, then set a temporary key of -1 or lower.
        let minKey = -1;
        let maxPos = 0;
        table.dexihTableColumns.forEach(t => {
            if (t.key <= minKey ) {
                minKey = t.key - 1;
            }
            if (t.position >= maxPos) {
                maxPos = t.position + 1;
            }
        });
        column.key = minKey;
        column.position = maxPos;

        if (deltaType != null) {
            column.deltaType = deltaType;

            let deltaTypeDetail = deltaTypes.find(c => c.key === deltaType);

            if (deltaTypeDetail.unique) {
                let index = table.dexihTableColumns.findIndex(c => c.deltaType === deltaType);
                if (index >= 0) {
                    return null;
                }
            }

            if (deltaTypeDetail.defaultName) {
                column.name = deltaTypeDetail.defaultName;
                column.logicalName = deltaTypeDetail.defaultName;
                column.dataType = deltaTypeDetail.dataType;

                if (deltaType === eDeltaType.AutoIncrement || deltaType === eDeltaType.DbAutoIncrement) {
                    column.name =  table.name + 'Key';
                    column.logicalName = column.name;
                }
            }
       }

       return column;
    }

    private addColumn(table: DexihTable, deltaType: eDeltaType, name: string, dataType: eTypeCode, allowDbNull: boolean) {
        let column = this.newColumn(table, deltaType);
        column.name = name;
        column.logicalName = name;
        column.allowDbNull = allowDbNull;
        column.dataType = dataType;
        table.dexihTableColumns.push(column);
    }

    public getProfileTable(name: string, connectionKey: number): DexihTable {
        let table = new DexihTable();
        table.connectionKey = connectionKey;
        table.name = name;
        table.logicalName = name;
        table.key = this.getNextSequence();

        this.addColumn(table, eDeltaType.TrackingField, 'AuditKey', eTypeCode.Int64, false);
        this.addColumn(table, eDeltaType.TrackingField, 'Profile', eTypeCode.String, false);
        this.addColumn(table, eDeltaType.TrackingField, 'ColumnName', eTypeCode.String, false);
        this.addColumn(table, eDeltaType.TrackingField, 'IsSummary', eTypeCode.Boolean, false);
        this.addColumn(table, eDeltaType.TrackingField, 'Value', eTypeCode.String, true);
        this.addColumn(table, eDeltaType.TrackingField, 'Count', eTypeCode.Int32, true);

        return table;
    }



    public getConnectionTables(): ConnectionTables[] {
        let connections: ConnectionTables[] = [];
        this.hub.dexihConnections.forEach(c => {
            let newConnection = <ConnectionTables> Object.assign({}, c);
            let tables = this.hub.dexihTables.filter(t => c.key === t.connectionKey && t.isValid);
            newConnection.dexihTables = tables;
            connections.push(newConnection);
        });

        return connections;
    }

    public getTables(): DexihTable[] {
        return this.hub.dexihTables;
    }

    public getDatalinkTransform(datalinkTransformKey: number): DexihDatalinkTransform {
        for (let i = 0; i < this.hub.dexihDatalinks.length; i++) {
            let datalink = this.hub.dexihDatalinks[i];
            for (let j = 0; j < datalink.dexihDatalinkTransforms.length; j++) {
                if (datalink.dexihDatalinkTransforms[j].key === datalinkTransformKey) {
                    return datalink.dexihDatalinkTransforms[j];
                }
            }
        }

        return null;
    }

    public getColumnValidation(columnValidationKey: number): DexihColumnValidation {
        let columnValidation: DexihColumnValidation = null;
        if (this.hub.dexihColumnValidations) {
            columnValidation = this.hub.dexihColumnValidations.find(c => c.key === columnValidationKey);
        }
        if (!columnValidation) {
            columnValidation = new DexihColumnValidation();
            columnValidation.name = 'No validation';
        }

        return columnValidation;
    }

    public getFileFormat(fileFormatKey: number): DexihFileFormat {
        let fileFormat: DexihFileFormat = null;
        if (this.hub.dexihFileFormats) {
            fileFormat = this.hub.dexihFileFormats.find(c => c.key === fileFormatKey);
        }
        return fileFormat;
    }

    public search(search: string, searchObject: eSearchObjectType): Array<SearchResult> {
        const results = Array<SearchResult>();

        if (!search) {
            return results;
        }

        let searchAll = searchObject === eSearchObjectType.All;

        this.hub.dexihConnections.forEach(connection => {
            if (searchAll || searchObject === eSearchObjectType.Connection) {
                this.searchItem(search, connection, null, eSearchObjectType.Connection, results);
            }
        });


        this.hub.dexihTables.forEach(table => {
            if (searchAll || searchObject === eSearchObjectType.Table) {
                let connection = this.hub.dexihConnections.find(c => c.key === table.connectionKey);
                this.searchItem(search, table, connection, eSearchObjectType.Table, results);
            }

            if (searchAll || searchObject === eSearchObjectType.TableColumn) {
                table.dexihTableColumns.forEach(column => {
                    this.searchItem(search, column, table, eSearchObjectType.TableColumn, results);
                })
            }
        });

        if (searchAll || searchObject === eSearchObjectType.Datalink) {
            this.hub.dexihDatalinks.forEach(datalink => {
                this.searchItem(search, datalink, null, eSearchObjectType.Datalink, results);
            });
        }
        if (searchAll || searchObject === eSearchObjectType.Datajob) {
            this.hub.dexihDatajobs.forEach(datajob => {
                this.searchItem(search, datajob, null, eSearchObjectType.Datajob, results);
            });
        }
        if (searchAll || searchObject === eSearchObjectType.ColumnValidation) {
            this.hub.dexihColumnValidations.forEach(columnValidation => {
                this.searchItem(search, columnValidation, null, eSearchObjectType.ColumnValidation, results);
            });
        }
        if (searchAll || searchObject === eSearchObjectType.FileFormat) {
            this.hub.dexihFileFormats.forEach(fileFormat => {
                this.searchItem(search, fileFormat, null, eSearchObjectType.FileFormat, results);
            });
        }
        if (searchAll || searchObject === eSearchObjectType.View) {
            this.hub.dexihViews.forEach(view => {
                this.searchItem(search, view, null, eSearchObjectType.View, results);
            });
        }
        if (searchAll || searchObject === eSearchObjectType.Api) {
            this.hub.dexihApis.forEach(api => {
                this.searchItem(search, api, null, eSearchObjectType.Api, results);
            });
        }
        if (searchAll || searchObject === eSearchObjectType.Dashboard) {
            this.hub.dexihDashboards.forEach(d => {
                this.searchItem(search, d, null, eSearchObjectType.Dashboard, results);
            });
        }
        if (searchAll || searchObject === eSearchObjectType.ListOfValues) {
            this.hub.dexihListOfValues.forEach(d => {
                this.searchItem(search, d, null, eSearchObjectType.ListOfValues, results);
            });
        }
        if (searchAll || searchObject === eSearchObjectType.DatalinkTest) {
            this.hub.dexihDatalinkTests.forEach(d => {
                this.searchItem(search, d, null, eSearchObjectType.DatalinkTest, results);
            });
        }
        return results;
    }

    public searchItem(search: string, item: any, itemParent: any, objectType: eSearchObjectType, results: Array<SearchResult>) {
        const keys = Object.keys(item);
        let found = false;
        keys.forEach(key => {
            if (!found) {
                if ((typeof item[key] === 'string' || item[key] instanceof String)) {
                    if (item[key].toLowerCase().indexOf(search) > -1) {
                        results.push(new SearchResult(item, itemParent, objectType));
                        found = true;
                    }
                }
            }
        });
    }

    public dataTypeToString(column: any): string {
        let value = eTypeCode[column.dataType];

        if (this.dataTypeIsString(column.dataType) && column.maxLength) {
            value = value + '(' + column.maxLength + ')';
        }
        if (this.dataTypeIsDecimal(column.dataType) && (column.precision || column.scale)) {
            value = value + '(' + column.precision + ',' + column.scale + ')';
        }
        if (column.dataType === eTypeCode.Node && column.childColumns) {
            value = value + '(' + column.childColumns.length + ')';
        }

        for (let i = 0; i < column.rank; i++) {
            value = value + '[]';
        }


        return value;
    }

    public dataTypeIsString(dataType: eTypeCode): boolean {
        return dataType === eTypeCode.String || dataType === eTypeCode.CharArray;
    }

    public dataTypeIsDecimal(dataType: eTypeCode): boolean {
        return dataType === eTypeCode.Double || dataType === eTypeCode.Decimal || dataType === eTypeCode.Single;
    }

    public defaultTableLogicalName(schema: string, name: string): string {
        if (schema) {
            return schema + '.' + name;
        } else {
            return name;
        }
    }

    /**
     * Adds the datalink dependencies to the cache
     * @constructor
     * @param {DexihDatalink} datalink - The datalink to search dependencies
     * @param {DexihHub} hub - The hub to add the dependencies to.
     */
    public getDatalinkCache(datalink: DexihDatalink, hub: DexihHub): DexihHub {
        if (datalink.sourceDatalinkTable.sourceType === eSourceType.Datalink) {
            this.cacheAddDatalink(datalink.sourceDatalinkTable.sourceDatalinkKey, hub);
        } else if (datalink.sourceDatalinkTable.sourceType === eSourceType.Table) {
            this.cacheAddTable(datalink.sourceDatalinkTable.sourceTableKey, hub);
        }
        this.cacheAddConnection(datalink.auditConnectionKey, hub);
        this.getParametersCache(datalink.parameters, hub);

        datalink.dexihDatalinkTargets.forEach(target => {
            this.cacheAddTable(target.tableKey, hub);
        });

        datalink.dexihDatalinkTransforms.forEach(t => {
            if (t.joinDatalinkTable) {
                if (t.joinDatalinkTable.sourceType === eSourceType.Datalink) {
                    this.cacheAddDatalink(t.joinDatalinkTable.sourceDatalinkKey, hub);
                } else if (t.joinDatalinkTable.sourceType === eSourceType.Table) {
                    this.cacheAddTable(t.joinDatalinkTable.sourceTableKey, hub);
                }
            }

            t.dexihDatalinkTransformItems.forEach(ti => {
                if (ti.customFunctionKey) {
                    this.cacheAddCustomFunction(ti.customFunctionKey, hub);
                }
            })
        });
        return hub;
    }


    /**
     * Adds the datalinkTest dependencies to the cache
     * @constructor
     * @param {DexihDatalinkTest} datalinkTest - The datalinkTest to search dependencies
     * @param {DexihHub} hub - The hub to add the dependencies to.
     */
    public getDatalinkTestCache(datalinkTest: DexihDatalinkTest, hub: DexihHub): DexihHub {
        datalinkTest.dexihDatalinkTestSteps.forEach(step => {
            const datalinkDup = hub.dexihDatalinks.find(c => c.key === step.datalinkKey);
            if (!datalinkDup) {
                const datalink = this.hub.dexihDatalinks.find(c => c.key === step.datalinkKey);
                if (datalink) {
                    this.getDatalinkCache(datalink, hub);
                    hub.dexihDatalinks.push(datalink);
                }
            }
            this.cacheAddConnection(step.expectedConnectionKey, hub);
            this.cacheAddConnection(step.targetConnectionKey, hub);

            step.dexihDatalinkTestTables.forEach(c => {
                this.cacheAddConnection(c.sourceConnectionKey, hub);
                this.cacheAddConnection(c.testConnectionKey, hub);
            });
        });

        return hub;
    }

    public getTableCache(table: DexihTable, hub: DexihHub): DexihHub {
        this.cacheAddConnection(table.connectionKey, hub);
        return hub;
    }

    public getDatajobCache(datajob: DexihDatajob, hub: DexihHub): DexihHub {
        this.cacheAddConnection(datajob.auditConnectionKey, hub);
        this.getParametersCache(datajob.parameters, hub);

        datajob.dexihDatalinkSteps.forEach(step => {
            this.getParametersCache(step.parameters, hub);

            const datalinkDup = hub.dexihDatalinks.find(c => c.key === step.datalinkKey);
            if (!datalinkDup) {
                const datalink = this.hub.dexihDatalinks.find(c => c.key === step.datalinkKey);
                if (datalink) {
                    this.getDatalinkCache(datalink, hub);
                    hub.dexihDatalinks.push(datalink);
                }
            }
        });

        return hub;
    }

    public getColumnValidationCache(columnValidation: DexihColumnValidation, hub: DexihHub): DexihHub {
        if (columnValidation.lookupColumnKey > 0) {
            let lookupColumn = this.getColumn(columnValidation.lookupColumnKey);
            this.cacheAddTable(lookupColumn.tableKey, hub);
        }

        return hub;
    }

    public getViewCache(view: DexihView, hub: DexihHub): DexihHub {
        this.cacheAddDatalink(view.sourceDatalinkKey, hub);
        this.cacheAddTable(view.sourceTableKey, hub);
        this.getParametersCache(view.parameters, hub);

        return hub;
    }

    public getDashboardCache(dashboard: DexihDashboard, hub: DexihHub): DexihHub {
        dashboard.dexihDashboardItems.forEach(item => {
            this.cacheAddView(item.viewKey, hub);
        });
        this.getParametersCache(dashboard.parameters, hub);

        return hub;
    }

    public getParametersCache(parameters: InputParameterBase[], hub: DexihHub): DexihHub {
        parameters.forEach(parameter => {
            this.cacheAddListOfValues(parameter.listOfValuesKey, hub);
        });

        return hub;
    }

    public getListOfValuesCache(lov: DexihListOfValues, hub: DexihHub): DexihHub {
        this.cacheAddDatalink(lov.sourceDatalinkKey, hub);
        this.cacheAddTable(lov.sourceTableKey, hub);

        return hub;
    }

    public getApiCache(api: DexihApi, hub: DexihHub): DexihHub {
        this.cacheAddDatalink(api.sourceDatalinkKey, hub);
        this.cacheAddTable(api.sourceTableKey, hub);
        this.getParametersCache(api.parameters, hub);

        return hub;
    }

    public getSharedObjects(): SharedObject[] {
        let data: SharedObject[] = [];

        sharedObjectProperties.forEach(o => {
            let parentObject;
            if (o.parentType) {
                parentObject = sharedObjectProperties.find(c => c.type === o.parentType);
            }

            data = data.concat(this.hub[o.cacheProperty].map(item => {
                let parentItem: any;

                if (parentObject) {
                    parentItem = this.hub[parentObject.cacheProperty].find(c => c.key === item[o.parentKey]);
                }

                let obj: SharedObject = {
                    item: item,
                    label: o.name,
                    type: o.type,
                    parentItem: parentItem,
                    key: item.key,
                    name: (parentItem ? `(${parentItem.name}) ` : '' ) + item.name,
                    description: item.description,
                    updateDate: item.updateDate
                };

                return obj;
            }));
        });

        return data;
    }

    public cacheAddObject(sharedType: eSharedObjectType, item: any, hub: DexihHub) {
        let sharedObject = sharedObjectProperties.find(c => c.type === sharedType);
        let key = item.key;

        this[sharedObject.cacheAddMethod](key, hub);

    }

    public cacheAddDatajob(datajobKey: number, hub: DexihHub): DexihDatajob {
        // check if datajob is already added.
        const dup = hub.dexihDatajobs.find(c => c.key === datajobKey);
        if (!dup) {
            let datajob = this.hub.dexihDatajobs.find(c => c.key === datajobKey);
            if (datajob) {
                this.getDatajobCache(datajob, hub);

                let datajobCopy = Object.assign({}, datajob);
                datajobCopy['currentStatus'] = null;
                datajobCopy['previousStatus'] = null;

                hub.dexihDatajobs.push(datajobCopy);
            }
            return datajob;
        }

        return null;
    }

    public cacheAddDatalink(datalinkKey: number, hub: DexihHub): DexihDatalink {
        // check if datalink is already added.
        const dupDatalink = hub.dexihDatalinks.find(c => c.key === datalinkKey);
        if (!dupDatalink) {
            let datalink = this.hub.dexihDatalinks.find(c => c.key === datalinkKey);
            if (datalink) {
                this.getDatalinkCache(datalink, hub);

                let datalinkCopy = Object.assign({}, datalink);
                datalinkCopy['currentStatus'] = null;
                datalinkCopy['entityStatus'] = null;
                datalinkCopy['previousStatus'] = null;

                hub.dexihDatalinks.push(datalinkCopy);
            }
            return datalink;
        }

        return null;
    }

    public cacheAddDatalinkTest(datalinkTestKey: number, hub: DexihHub): DexihDatalinkTest {
        // check if datalink is already added.
        const dupDatalinkTest = hub.dexihDatalinkTests.find(c => c.key === datalinkTestKey);
        if (!dupDatalinkTest) {
            let datalinkTest = this.hub.dexihDatalinkTests.find(c => c.key === datalinkTestKey);
            if (datalinkTest) {
                this.getDatalinkTestCache(datalinkTest, hub);

                let datalinkTestCopy = Object.assign({}, datalinkTest);
                datalinkTestCopy['currentStatus'] = null;
                datalinkTestCopy['entityStatus'] = null;
                datalinkTestCopy['previousStatus'] = null;

                hub.dexihDatalinkTests.push(datalinkTestCopy);
            }
            return datalinkTest;
        }

        return null;
    }

    public cacheAddConnection(connectionKey: number, hub: DexihHub): DexihConnection {
        if (connectionKey > 0) {
            let connection = hub.dexihConnections.find(c => c.key === connectionKey);
            if (!connection) {
                connection = this.getConnectionCopy(connectionKey);
                hub.dexihConnections.push(connection);
            }

            return connection;
        }
    }

    public cacheAddTable(tableKey: number, hub: DexihHub): DexihTable {
        if (tableKey > 0) {
            let table = hub.dexihTables.find(t => t.key === tableKey);

            if (!table) {
                table = this.getTable(tableKey);

                hub.dexihTables.push(table);

                this.cacheAddConnection(table.connectionKey, hub);

                if (table.fileFormatKey) {
                    this.cacheAddFileFormat(table.fileFormatKey, hub);
                }

                table.dexihTableColumns.forEach(c => {
                    if (c.columnValidationKey) {
                        this.cacheAddColumnValidation(c.columnValidationKey, hub);
                    }
                });
            }

            return table;
        }
    }

    public cacheAddColumnValidation(columnValidationKey: number, hub: DexihHub): DexihColumnValidation {
        if (columnValidationKey > 0) {
            const dupValidation = hub.dexihColumnValidations.find(c => c.key === columnValidationKey);
            if (!dupValidation) {
                let columnValidation = this.hub.dexihColumnValidations
                    .find(c => c.key === columnValidationKey && c.isValid);
                if (columnValidation) {

                    this.getColumnValidationCache(columnValidation, hub);
                    hub.dexihColumnValidations.push(columnValidation);
                    return columnValidation;
                }
            }
        }
    }

    public cacheAddCustomFunction(customFunctionKey: number, hub: DexihHub): DexihCustomFunction {
        if (customFunctionKey > 0) {
            const dupFunction = hub.dexihCustomFunctions.find(c => c.key === customFunctionKey);
            if (!dupFunction) {
                let customFunction = this.hub.dexihCustomFunctions
                    .find(c => c.key === customFunctionKey && c.isValid);
                if (customFunction) {
                    hub.dexihCustomFunctions.push(customFunction);
                    return customFunction;
                }
            }
        }
    }

    public cacheAddFileFormat(fileFormatKey: number, hub: DexihHub): DexihFileFormat {
        if (fileFormatKey > 0) {
            const dup = hub.dexihFileFormats.find(c => c.key === fileFormatKey);
            if (!dup) {
                let fileFormat = this.hub.dexihFileFormats
                    .find(c => c.key === fileFormatKey && c.isValid);
                if (fileFormat) {
                    hub.dexihFileFormats.push(fileFormat);
                    return fileFormat;
                }
            }
        }
    }

    public cacheAddView(viewKey: number, hub: DexihHub): DexihView {
        if (viewKey > 0) {
            const dup = hub.dexihViews.find(c => c.key === viewKey);
            if (!dup) {
                let view = this.hub.dexihViews
                    .find(c => c.key === viewKey && c.isValid);
                if (view) {
                    hub.dexihViews.push(view);
                    if (view.sourceType === eDataObjectType.Table) {
                        this.cacheAddTable(view.sourceTableKey, hub);
                    }
                    if (view.sourceType === eDataObjectType.Datalink) {
                        this.cacheAddDatalink(view.sourceDatalinkKey, hub);
                    }
                    return view;
                }
            }
        }
    }

    public cacheAddDashboard(dashboardKey: number, hub: DexihHub): DexihDashboard {
        if (dashboardKey > 0) {
            const dup = hub.dexihDashboards.find(c => c.key === dashboardKey);
            if (!dup) {
                let dashboard = this.hub.dexihDashboards
                    .find(c => c.key === dashboardKey && c.isValid);
                if (dashboard) {
                    dashboard.dexihDashboardItems.filter(c => c.viewKey > 0).forEach(item => {
                        this.cacheAddView(item.viewKey, hub);
                    });
                    return dashboard;
                }
            }
        }
    }

    public cacheAddListOfValues(listOfValuesKey: number, hub: DexihHub): DexihListOfValues {
        if (listOfValuesKey > 0) {
            const dup = hub.dexihListOfValues.find(c => c.key === listOfValuesKey);
            if (!dup) {
                let lov = this.hub.dexihListOfValues
                    .find(c => c.key === listOfValuesKey && c.isValid);
                if (lov) {
                    hub.dexihListOfValues.push(lov);
                    if (lov.sourceType === eLOVObjectType.Table) {
                        this.cacheAddTable(lov.sourceTableKey, hub);
                    }
                    if (lov.sourceType === eLOVObjectType.Datalink) {
                        this.cacheAddDatalink(lov.sourceDatalinkKey, hub);
                    }
                    return lov;
                }
            }
        }
    }

    public cacheAddApi(apiKey: number, hub: DexihHub): DexihApi {
        if (apiKey > 0) {
            const dup = hub.dexihApis.find(c => c.key === apiKey);
            if (!dup) {
                let api = this.hub.dexihApis
                    .find(c => c.key === apiKey && c.isValid);
                if (api) {
                    hub.dexihApis.push(api);
                    if (api.sourceType === eSourceType.Table) {
                        this.cacheAddTable(api.sourceTableKey, hub);
                    }
                    if (api.sourceType === eSourceType.Datalink) {
                        this.cacheAddDatalink(api.sourceDatalinkKey, hub);
                    }
                    return api;
                }
            }
        }
    }

    public cacheAddHubVariable(hubVariableKey: number, hub: DexihHub): DexihHubVariable {
        if (hubVariableKey > 0) {
            const dup = hub.dexihHubVariables.find(c => c.key === hubVariableKey);
            if (!dup) {
                let variable = this.hub.dexihHubVariables
                    .find(c => c.key === hubVariableKey && c.isValid);
                if (variable) {
                    hub.dexihHubVariables.push(variable);
                    return variable;
                }
            }
        }
    }

    public getTriggerDetails(trigger: DexihTrigger): string {
        let details = '';

        if (trigger.startDate) {
            details += 'Starts on/after: ' + (new Date(trigger.startDate)).toLocaleDateString() + '<br/>';
        }
        if (trigger.startTime) {
            details += 'Runs after: ' + trigger.startTime + '<br/>';
        }
        if (trigger.endTime) {
            details += 'Ends after: ' + trigger.endTime + '<br/>';
        }
        if (trigger.daysOfWeek && trigger.daysOfWeek.length > 0 && trigger.daysOfWeek.length < 7 ) {
            details += 'Only on: ' + trigger.daysOfWeek.map(c => eDayOfWeek[c]).join() + '<br/>';
        }
        if (trigger.intervalTime) {
            details += 'Run at interval: ' +  trigger.intervalTime + '<br/>';
        }
        if (trigger.maxRecurs) {
            details += 'Recurs for: ' +  trigger.maxRecurs + '<br/>';
        }

        return details;
    }

    public CopyDatalink(originalDatalink: DexihDatalink): DexihDatalink {
        let copyDatalink = Object.assign({}, originalDatalink);
        copyDatalink.name = copyDatalink.name + ' (copy)'
        copyDatalink.key = null;

        let datalinkColumnKeys = {};

        if (copyDatalink.sourceDatalinkTable) {
            copyDatalink.sourceDatalinkTable.key = null;
            copyDatalink.sourceDatalinkTable.dexihDatalinkColumns.forEach(c => {
                c.datalinkTableKey = null;
                let key = this.getNextSequence();
                datalinkColumnKeys[c.key] = key;
                c.key = key;
            });
        }

        copyDatalink.dexihDatalinkTransforms.sort((a, b) => a.position - b.position).forEach(t => {
            t.key = this.getNextSequence();

            if (t.joinDatalinkTable) {
                t.joinDatalinkTable.key = null;
                t.joinDatalinkTable.dexihDatalinkColumns.forEach(c => {
                    c.datalinkTableKey = null;
                    let key = this.getNextSequence();
                    datalinkColumnKeys[c.key] = key;
                    c.key = key;
                });
            }

            t.dexihDatalinkTransformItems.forEach(i => {
                i.datalinkTransformKey = t.key;
                i.key = this.getNextSequence();

                if (i.filterDatalinkColumn) {
                    i.filterDatalinkColumn.key = datalinkColumnKeys[i.filterDatalinkColumn.key];
                }
                if (i.joinDatalinkColumn) {
                    i.joinDatalinkColumn.key = datalinkColumnKeys[i.joinDatalinkColumn.key];
                }
                if (i.sourceDatalinkColumn) {
                    i.sourceDatalinkColumn.key = datalinkColumnKeys[i.sourceDatalinkColumn.key];
                }

                if (i.targetDatalinkColumn) {
                    let key = this.getNextSequence();
                    datalinkColumnKeys[i.targetDatalinkColumn.key] = key;
                    i.targetDatalinkColumn.key = key;
                }

                i.dexihFunctionParameters.forEach(p => {
                    p.datalinkTransformItemKey = i.key;
                    p.key = this.getNextSequence();

                    if (p.datalinkColumn) {
                        if (p.direction === eParameterDirection.Input) {
                            p.datalinkColumn.key = datalinkColumnKeys[p.datalinkColumn.key];
                        } else {
                            let key = this.getNextSequence();
                            datalinkColumnKeys[p.datalinkColumn.key] = key;
                            p.datalinkColumn.key = key;
                        }
                    }
                });
            });
        });

        return copyDatalink;
    }
}

export class DataCache {
    public data = new BehaviorSubject<PreviewResults>(null);
    public isRefreshing = false;

    public refresh(previewQuery: Promise<PreviewResults>) {
        this.isRefreshing = true;
        previewQuery.then((result) => {
            this.data.next(result);
            this.isRefreshing = false;
        }).catch(() => {
            this.data.next(null);
            this.isRefreshing = false;
        });
    }
}

// export enum eSharedObjectType {
//     None = <any>'None',
//     Connection = <any>'Connection',
//     Table = <any>'Table',
//     FileFormat = <any>'FileFormat',
//     Datalink = <any>'Datalink',
//     Datajob = <any>'Datajob',
//     DatalinkTransform = <any>'DatalinkTransform',
//     DatalinkTransformItem = <any>'DatalinkTransformItem',
//     RemoteAgent = <any>'RemoteAgent',
//     ColumnValidation = <any>'ColumnValidation',
//     TransformWriterResult = <any>'TransformWriterResult',
//     HubVariable = <any>'HubVariable',
//     CustomFunction = <any>'CustomFunction',
//     DatalinkTest = <any>'DatalinkTest',
//     View = <any>'View',
//     Api = <any>'Api',
//     Dashboard = <any>'Dashboard',
//     ApiStatus = <any>'ApiStatus',
// }



// export enum eSharedDataObjectType {
//     Table = <any>'Table',
//     Datalink = <any>'Datalink',
//     View = <any>'View',
//     Dashboard = <any>'Dashboard',
//     Api = <any>'Api'
// }

// export class SharedData {
//     public hubKey: number;
//     public hubName: string;

//     public objectType: eSharedDataObjectType;
//     public objectKey: number;
//     public name: string;
//     public logicalName: string;
//     public description: string;
//     public updateDate: Date;

//     public parameters: any[];
//     public inputColumns: InputColumn[];
//     public query: SelectQuery;
//     public outputColumns: DexihColumnBase[];

// }

// export enum eApiStatus {
//     Activated = <any>'Activated',
//     Deactivated = <any>'Deactivated',
// }
// export class ApiData {
//     public apiStatus: eApiStatus;
//     public hubKey: number;
//     public apiKey: number;
//     public securityKey = '';
//     public successCount = 0;
//     public errorCount = 0;
// }

// export class DexihApi extends EntityBase {
//     public key = 0;
//     public name: string = null;
//     public description: string = null;
//     public sourceType: eSourceType = eSourceType.Table;
//     public sourceTableKey = 0;
//     public sourceDatalinkKey = 0;
//     public selectQuery = new SelectQuery();
//     public cacheQueries = true;
//     public cacheResetInterval: string = null;
//     public logDirectory = '';
//     public autoStart = false;
//     public isShared = false;

//     public parameters: DexihInputParameter[] = [];

//     public currentStatus: BehaviorSubject<ApiData>;
// }

// export class DexihColumnBase extends EntityBase {
//     public position = 0;
//     public name: string = null;
//     public logicalName: string = null;
//     public columnGroup: string = null;
//     public description: string = null;
//     public dataType: eTypeCode;
//     public maxLength: number = null;
//     public precision: number = null;
//     public scale: number = null;
//     public allowDbNull = true;
//     public isUnicode = true;
//     public deltaType: eDeltaType = eDeltaType.TrackingField;
//     public defaultValue: string = null;
//     public isUnique = false;
//     public isMandatory = false;
//     public isIncrementalUpdate = false;
//     public isInput = false;
//     public rank = 0;
//     public securityFlag: eSecurityFlag = eSecurityFlag.None;

//     public isSourceColumn = false;
//     public isGeneratedColumn = false;

//     public mappingStatus: eMappingStatus;

//     public entityStatus: EntityStatus;

//     public runTime: {lineage: eMappingStatus, impact: eMappingStatus}

//     constructor() {
//         super();
//         this.securityFlag = eSecurityFlag.None;
//         this.isUnique = false;
//         this.isMandatory = false;
//         this.isIncrementalUpdate = false;
//         this.allowDbNull = false;
//         this.isUnicode = false;
//         this.dataType = eTypeCode.String;
//         this.deltaType = eDeltaType.NaturalKey;
//     }
// }

export class DexihInputParameter {
    public key = 0;
    public name: string = null;
    public description: string = null;
    public value = null;
}

// export class DexihConnection extends EntityBase {
//     public key = 0;
//     public purpose: eConnectionPurpose = eConnectionPurpose.Source;
//     public name: string = null;
//     public description: string = null;
//     public server: string = null;
//     public useWindowsAuth = false;
//     public username = '';
//     public password = '';
//     public usePasswordVariable = false;
//     public defaultDatabase: string = null;
//     public filename: string = null;
//     public useConnectionString = false;
//     public useConnectionStringVariable = false;
//     public connectionString: string = null;
//     public embedTableKey = false;
//     public passwordRaw: string = null;
//     public connectionStringRaw: string = null;

//     // public dexihTables: Array<DexihTable> = null;

//     public databases: Array<string> = null;

//     public connectionAssemblyName = '';
//     public connectionClassName = '';

//     constructor( name: string) {
//         super();
//         this.name = name;
//         // this.dexihTables = new Array<DexihTable>();
//     }
// }

// export class DexihCustomFunction extends EntityBase {
//     public key = 0;
//     public functionType: eFunctionType = eFunctionType.Map;
//     public methodCode = '';
//     public resultCode = '';
//     public name = '';
//     public description = '';
//     public returnType: eTypeCode = eTypeCode.String;
//     public isGeneric = false;
//     public genericTypeDefault: eTypeCode = eTypeCode.String;

//     public dexihCustomFunctionParameters: DexihCustomFunctionParameter[] = [];
// }

// export class DexihCustomFunctionParameter extends EntityBase {
//     public key = 0;
//     public name: string = null;
//     public position = 0;
//     public direction: eParameterDirection = null;
//     public isGeneric = false;
//     public dataType: eTypeCode = eTypeCode.String
//     public rank = 0;
// }

// export class DexihColumnValidation extends EntityBase {
//     public key = 0;
//     public name = '';
//     public description: string = null;
//     public dataType: eTypeCode = eTypeCode.String;
//     public minLength: number = null;
//     public maxLength: number = null;
//     public allowDbNull = false;
//     public minValue: number = null;
//     public maxValue: number = null;
//     public patternMatch: string = null;
//     public regexMatch: string = null;
//     public listOfValues: string[] = [];
//     public listOfNotValues: string[] = [];
//     public lookupColumnKey: number = null;
//     public lookupIsValid = true;
//     public lookupMultipleRecords = false;
//     public invalidAction: eInvalidAction = eInvalidAction.Abend;
//     public cleanAction: eCleanAction = eCleanAction.Null;
//     public cleanValue: string = null;
// }

// export class DexihDashboard extends EntityBase {
//     public key = 0;
//     public name = '';
//     public description: string = null;
//     public isShared = false;
//     public minCols = 4;
//     public maxCols = 100;
//     public minRows = 4;
//     public maxRows = 100;
//     public autoRefresh = true;

//     public dexihDashboardItems: Array<DexihDashboardItem> = [];
//     public parameters: Array<DexihInputParameter> = [];
// }

// export class DexihDashboardItem extends EntityBase {
//     public key = 0;
//     public name = '';
//     public description: string = null;
//     public cols = 1;
//     public rows = 1;
//     public x = 0;
//     public y = 0;
//     public header = true;
//     public scrollable = false;

//     public parameters: Array<DexihInputParameter> = [];
//     public viewKey = 0;
// }

// export class DexihDatajob extends EntityBase {
//     public key = 0;
//     public name: string = null;
//     public description: string = null;
//     public failAction = eFailAction.Abend;
//     public auditConnectionKey = 0;
//     public fileWatch = false;
//     public autoStart = false;
// //    public externalTrigger = false;

//     public dexihDatalinkSteps: Array<DexihDatalinkStep> = null;
//     public dexihTriggers: Array<DexihTrigger> = null;

//     public parameters: Array<DexihInputParameter> = [];

//     public previousStatus: BehaviorSubject<TransformWriterResult>;
//     public currentStatus: BehaviorSubject<TransformWriterResult>;

//     constructor() {
//         super();
//         this.dexihDatalinkSteps = [];
//         this.dexihTriggers = [];
//     }
// }
// export class DexihDatalinkDependency extends EntityBase {
//     public key = 0;
//     public datalinkStepKey = 0;
//     public dependentDatalinkStepKey = 0;
// }
// export class DexihDatalinkProfile extends EntityBase {
//     public key = 0;
//     public datalinkKey = 0;

//     public functionClassName: string = null;
//     public functionAssemblyName: string = null;
//     public functionMethodName: string = null;
//     public detailedResults = false;

// // properties used by components
//     public name: string;
//     public description: string;
// }
// export class DexihDatalink extends EntityBase {
//     public key = 0;
//     public name: string = null;
//     public description: string = null;
//     // public targetTableKey = null;
//     public auditConnectionKey = null;
//     public updateStrategy: eUpdateStrategy = eUpdateStrategy.Reload;
//     public datalinkType: eDatalinkType = eDatalinkType.General;
//     public loadStrategy: eTransformWriterMethod = eTransformWriterMethod.Bulk;
//     public rowsPerCommit = 1000;
//     public rowsPerProgress = 1000;
//     public rollbackOnFail = false;
//     public isQuery = false;
//     public maxRows = 0;
//     public addDefaultRow = false;
//     public isShared = false;
//     public profileTableName: string = null;

//     public sourceDatalinkTable = new DexihDatalinkTable();
//     public dexihDatalinkTransforms: Array<DexihDatalinkTransform> = [];
//     public dexihDatalinkProfiles: Array<DexihDatalinkProfile> = [];
//     public dexihDatalinkTargets: Array<DexihDatalinkTarget> = [];
//     public parameters: Array<DexihInputParameter> = [];

//     public targetTable: DexihTable;

// // properties used by components.
//     public sourceTableName: string;
//     public targetTableName: string;

//     public entityStatus: EntityStatus;
//     public previousStatus: BehaviorSubject<TransformWriterResult>;
//     public currentStatus: BehaviorSubject<TransformWriterResult>;
// }

// export class DexihDatalinkTable extends EntityBase {
//     public key = 0;
//     public sourceTableKey = null;
//     public sourceDatalinkKey = null;
//     public name: string = null;
//     public sourceType = eSourceType.Table;

//     public rowsStartAt = null;
//     public rowsEndAt = null;
//     public rowsIncrement = null;

//     public dexihDatalinkColumns: Array<DexihDatalinkColumn> = [];
// }

// export class DexihDatalinkColumn extends DexihColumnBase {
//     public key = 0;
//     public datalinkTableKey = null;

//     public childColumns: Array<DexihDatalinkColumn> = [];
// }

// export class DexihDatalinkStep extends EntityBase {
//     public key = 0;
//     public name: string = null;
//     public datajobKey = 0;
//     public datalinkKey = 0;

//     public dexihDatalinkDependencies: Array<DexihDatalinkDependency> = [];
//     public dexihDatalinkStepColumns: Array<DexihDatalinkStepColumn> = [];
//     public parameters: Array<DexihInputParameter> = [];
// }

// export class DexihDatalinkStepColumn extends DexihColumnBase {
//     public key = 0;
//     public datalinkStepKey = null;
// }

// export class DexihDatalinkTarget extends EntityBase {
//     public key = 0;
//     public datalinkKey: number = null;
//     public nodeDatalinkColumn: DexihDatalinkColumn = null;
//     public tableKey: number = null;
//     public position: number = null;

//     public runTime: {
//         inputColumns: DexihDatalinkColumn[];
//     }
// }

// export class DexihDatalinkTest extends EntityBase {
//     public key = 0;
//     public name: string = null;
//     public auditConnectionKey = 0;
//     public description: string = null;

//     public dexihDatalinkTestSteps: Array<DexihDatalinkTestStep> = [];

//     public entityStatus: EntityStatus;
//     public previousStatus: BehaviorSubject<TransformWriterResult>;
//     public currentStatus: BehaviorSubject<TransformWriterResult>;
// }

// export class DexihDatalinkTestStep extends EntityBase {
//     public key = 0;
//     public datalinkTestKey = 0;
//     public position = 0;
//     public targetConnectionKey = 0;
//     public targetTableName: string = null;
//     public targetSchema: string = null;
//     public expectedConnectionKey = 0;
//     public expectedTableName: string = null;
//     public expectedSchema: string = null;

//     public datalinkKey = 0;

//     public name: string = null;
//     public description: string = null;

//     public dexihDatalinkTestTables: Array<DexihDatalinkTestTable> = [];

// }

// export class DexihDatalinkTestTable extends EntityBase {
//     public key = 0;
//     public datalinkTestStepKey = 0;
//     public tableKey = 0;
//     public sourceConnectionKey = 0;
//     public sourceTableName: string = null;
//     public sourceSchema: string = null;
//     public testConnectionKey = 0;
//     public testTableName: string = null;
//     public testSchema: string = null;
// }

// export class DexihDatalinkTransformItem extends EntityBase {
//     public key = 0;
//     public datalinkTransformKey = 0;
//     public position = 0;
//     public transformItemType: eTransformItemType = null;
//     public sourceValue: string = null;
//     public joinValue: string = null;
//     public sortDirection: eSortDirection = null;
//     public seriesGrain: eSeriesGrain = null;
//     public seriesFill = false;
//     public seriesStart: string = null;
//     public seriesFinish: string = null;
//     public filterCompare: eCompare = null;
//     public filterValue: string = null;
//     public aggregate: eAggregate = null;
//     public returnType: eTypeCode = eTypeCode.String;
//     public functionCode: string = null;
//     public functionResultCode: string = null;
//     public onError: eOnError = null;
//     public onNull: eOnNull = null;
//     public notCondition = false;
//     public invalidAction: eInvalidAction = null;
//     public customFunctionKey: number = null;

//     public entityStatus: EntityStatus;

//     public dexihFunctionParameters: Array<DexihFunctionParameter>;

//     public functionClassName: string = null;
//     public functionAssemblyName: string = null;
//     public functionMethodName: string = null;

//     public genericTypeCode: eTypeCode = null;
//     public functionCaching = eFunctionCaching.NoCache;

//     public targetDatalinkColumn: DexihDatalinkColumn = null;
//     public sourceDatalinkColumn: DexihDatalinkColumn = null;
//     public joinDatalinkColumn: DexihDatalinkColumn = null;
//     public filterDatalinkColumn: DexihDatalinkColumn = null;

//     constructor() {
//         super();
//         this.onError = eOnError.Abend;
//         this.onNull = eOnNull.Execute;
//         this.invalidAction = eInvalidAction.Abend;

//         this.dexihFunctionParameters = [];
//     }

// }
// export class DexihDatalinkTransform extends EntityBase {
//     public key = 0;
//     public datalinkKey = 0;
//     public position = 0;
//     public name: string = null;
//     public description: string = null;
//     public passThroughColumns: boolean = null;
//     public joinTableAlias: string = null;
//     public joinDuplicateStrategy = eDuplicateStrategy.All;

//     public entityStatus: EntityStatus;

//     public dexihDatalinkTransformItems: Array<DexihDatalinkTransformItem>;

//     public transformType: eTransformType = null;
//     public transformClassName: string = null;
//     public transformAssemblyName: string = null ;

//     public maxInputRows = 0;
//     public maxOutputRows = 0;

//     public joinDatalinkTable: DexihDatalinkTable = null;

//     // TODO Implement joinSortDatalinkColumn
//     public joinSortDatalinkColumn: DexihDatalinkColumn = null;

//     public nodeDatalinkColumn: DexihDatalinkColumn = null;

//     public runTime: {
//         inputColumns: DexihDatalinkColumn[];
//         outputColumns: DexihDatalinkColumn[];
//         transformColumns: DexihDatalinkColumn[];
//     }

//     constructor() {
//         super();
//         this.dexihDatalinkTransformItems = new Array<DexihDatalinkTransformItem>();
//     }
// }

// export class DexihFileFormat extends EntityBase {
//     public key = 0;
//     public name: string = null;
//     public description: string = null;
//     public isDefault = false;
//     public allowComments = false;
//     public bufferSize: number;
//     public comment: string;
//     public delimiter: string;
//     public detectColumnCountChanges = false;
//     public hasHeaderRecord = true;
//     public ignoreHeaderWhiteSpace = false;
//     public ignoreReadingExceptions = false;
//     public ignoreQuotes = false;
//     public quote: string;
//     public quoteAllFields = false;
//     public quoteNoFields = false;
//     public skipEmptyRecords = false;
//     public skipHeaderRows = 0;
//     public trimFields = false;
//     public trimHeaders = false;
//     public willThrowOnMissingField = false;
//     public setWhiteSpaceCellsToNull = false;

//     public matchHeaderRecord = true;

//     public isModified: boolean;

//     constructor() {
//         super();
//         this.bufferSize = 2048;
//         this.delimiter = ',';
//         this.quote = '"';
//         this.comment = '#';
//     }
// }
// export class DexihFunctionParameter extends EntityBase {
//     public key = 0;
//     public datalinkTransformItemKey = 0;
//     public name: string = null;
//     public position = 0;
//     public direction: eParameterDirection = null;
//     public isGeneric = false;
//     public dataType: eTypeCode = eTypeCode.String
//     public rank = 0;
//     public arrayParameters: DexihFunctionArrayParameter[] = [];
//     public value: string = null;

//     public datalinkColumn: DexihDatalinkColumn;
//     public entityStatus: EntityStatus;

//     // runtime structures are not exported when saving.
//     public runTime: {functionParameter: FunctionParameter} = {functionParameter: null};
// }

// export class DexihFunctionArrayParameter extends EntityBase {
//     public key = 0;
//     public name: string = null;
//     public position = 0;
//     public direction: eParameterDirection = null;
//     public isGeneric = false;
//     public dataType: eTypeCode = eTypeCode.String;
//     public rank = 0;
//     public value: string = null;
//     public datalinkColumn: DexihDatalinkColumn = null;

//     // runtime structures are not exported when saving.
//     public runTime: {functionParameter: FunctionParameter} = {functionParameter: null};
// }

// export class DexihHub extends EntityBase {
//     public hubKey = 0;
//     public name: string;
//     public description: string;
//     public encryptionKey: string;
//     public maxOwners: number;
//     public maxUsers: number;
//     public maxReaders: number;
//     public maxDatalinks: number;
//     public maxDatajobs: number;
//     public dailyTransactionQuota: number;
//     public expiryDate: Date;

//     public hubPermission: ePermission;

//     public dexihHubVariables: Array<DexihHubVariable>;
//     public dexihConnections: Array<DexihConnection>;
//     public dexihTables: Array<DexihTable>;
//     public dexihDatajobs: Array<DexihDatajob>;
//     public dexihDatalinks: Array<DexihDatalink>;
//     public dexihColumnValidations: Array<DexihColumnValidation>;
//     public dexihFileFormats: Array<DexihFileFormat>;
//     public dexihCustomFunctions: Array<DexihCustomFunction>;
//     public dexihRemoteAgentHubs: Array<DexihRemoteAgentHub>;
//     public dexihDatalinkTests: Array<DexihDatalinkTest>;
//     public dexihViews: Array<DexihView>;
//     public dexihApis: Array<DexihApi>;
//     public dexihDashboards: Array<DexihDashboard>;

//     constructor(hubKey: number, name: string) {
//         super();
//         this.hubKey = hubKey;
//         this.name = name;
//         this.isValid = true;

//         this.dexihHubVariables = new Array<DexihHubVariable>();
//         this.dexihConnections = new Array<DexihConnection>();
//         this.dexihTables = new Array<DexihTable>();
//         this.dexihDatajobs = new Array<DexihDatajob>();
//         this.dexihDatalinks = new Array<DexihDatalink>();
//         this.dexihColumnValidations = new Array<DexihColumnValidation>();
//         this.dexihFileFormats = new Array<DexihFileFormat>();
//         this.dexihCustomFunctions = new Array<DexihCustomFunction>();
//         this.dexihDatalinkTests = new Array<DexihDatalinkTest>();
//         this.dexihViews = new Array<DexihView>();
//         this.dexihApis = new Array<DexihApi>();
//         this.dexihDashboards = new Array<DexihDashboard>();
//     }
// }

// export class DexihHubVariable extends EntityBase {
//     public key = 0;
//     public name: string = null;
//     public value: string = null;
//     public valueRaw: string = null;
//     public isEncrypted = false;
//     public isEnvironmentVariable = false;
// }

// export class DexihRemoteAgentHub extends EntityBase {
//     public remoteAgentHubKey = 0;
//     public remoteAgentKey = 0;
//     public hubKey = 0;
//     public isAuthorized = false;
//     public isDefault = false;
//     public allowExternalConnect = false;

//     public isSelected = false;
// }

// export class DexihTableColumn extends DexihColumnBase {
//     public key = 0;
//     public tableKey = 0;
//     public columnValidationKey: number = null;

//     public parentColumnKey: number = null;
//     public childColumns: DexihTableColumn[] = null;


//     public mappingStatus: eMappingStatus;
//     public entityStatus: EntityStatus;

//     super() {
//         this.securityFlag = eSecurityFlag.None;
//         this.isUnique = false;
//         this.isMandatory = false;
//         this.isIncrementalUpdate = false;
//         this.allowDbNull = false;
//         this.dataType = eTypeCode.String;
//         this.deltaType = eDeltaType.NaturalKey;
//     }
// }

// export class DexihTable extends EntityBase {
//     public key = 0;
//     public connectionKey = 0;
//     public name = '';
//     public schema: string = null;
//     public sourceConnectionName: string = null;
//     public baseTableName: string = null;
//     public logicalName = '';
//     public tableType: eTableType = eTableType.Table;
//     public description: string = null;
//     public useQuery = false;
//     public queryString = null;
//     public fileFormatKey: number = null;
//     public rejectedTableName: string = null;
//     public sortColumnKeys: Array<number> = [];
//     public autoManageFiles = true;
//     public useCustomFilePaths = false;
//     public fileRootPath: string = null;
//     public fileIncomingPath: string = null;
//     public fileOutgoingPath: string = null;
//     public fileProcessedPath: string = null;
//     public fileRejectedPath: string = null;
//     public fileMatchPattern: string = null;
//     public restfulUri: string = null;
//     public formatType: eFormatType = eFormatType.Text;
//     public maxImportLevels = 1;
//     public rowPath: string = null;
//     public isVersioned = false;
//     public isShared = false;
//     public fileSample: string = null;

//     public fileFormat: DexihFileFormat = null;

//     public entityStatus: EntityStatus;

//     public dexihTableColumns: Array<DexihTableColumn>;

//     public previousStatus: BehaviorSubject<TransformWriterResult>;
//     public currentStatus: BehaviorSubject<TransformWriterResult>;

//     constructor() {
//         super();
//         this['entityStatus'] = new EntityStatus();
//         this['entityStatus'].isBusy = false;
//         this['entityStatus'].lastStatus = eStatus.None;

//         this.key = 0;
//         this.dexihTableColumns = new Array<DexihTableColumn>();
//     }
// }

// export class DexihTrigger extends EntityBase {
//     public key = 0;
//     public datajobKey = 0;
//     public startDate: string = null;
//     public intervalTime: string = null;
//     public daysOfWeek: Array<eDayOfWeek> = [
//         eDayOfWeek.Sunday,
//         eDayOfWeek.Monday,
//         eDayOfWeek.Tuesday,
//         eDayOfWeek.Wednesday,
//         eDayOfWeek.Thursday,
//         eDayOfWeek.Friday,
//         eDayOfWeek.Saturday,
//     ];
//     public startTime: string = null;
//     public endTime: string = null;
//     public cronExpression: string = null;
//     public maxRecurs: number = null;
// }

// export class DexihView extends EntityBase {
//     public key = 0;
//     public name: string = null;
//     public description: string = null;
//     public viewType: eViewType = eViewType.Table;
//     public sourceType: eSourceType = eSourceType.Table;
//     public sourceTableKey = 0;
//     public sourceDatalinkKey = 0;
//     public inputValues: InputColumn[] = null;
//     public selectQuery = new SelectQuery();
//     public chartConfig = new ChartConfig();
//     public autoRefresh = true;
//     public isShared = false;

//     public parameters: Array<DexihInputParameter> = [];
// }

// export class ChartConfig {
//     public labelColumn: string = null;
//     public seriesColumn: string = null;
//     public seriesColumns = [];
//     public xColumn: string = null;
//     public yColumn: string = null;
//     public minColumn: string = null;
//     public maxColumn: string = null;
//     public radiusColumn: string = null;
//     public longitudeColumn: string = null;
//     public latitudeColumn: string = null;

//     public chartType = eChartType.BarVertical;
//     public colorScheme = 'natural';
//     public showGradient = false;
//     public showXAxis = true;
//     public showYAxis = true;
//     public showLegend = false;
//     public legendPosition: 'right' | 'below'  = 'below';
//     public showXAxisLabel = true;
//     public showYAxisLabel = true;
//     public showGridLines = false;
//     public xAxisLabel: string = null;
//     public yAxisLabel: string = null;
//     public xScaleMax = null;
//     public xScaleMin = null;
//     public yScaleMax = null;
//     public yScaleMin = null;
//     public autoScale = true;

//     // pie charts only
//     public explodeSlices = false;
//     public doughnut = false;
// }

// export enum eSourceType {
//     Table = <any>'Table',
//     Datalink = <any>'Datalink'
// }

// export enum eViewType {
//     Table = <any>'Table',
//     Chart = <any>'Chart'
// }

// export enum eTableType {
//     Table = <any>'Table',
//     View = <any>'View',
//     Query = <any>'Query',
// }

// export enum eTestTableAction {
//     None = <any>'None',
//     Truncate = <any>'Truncate',
//     DropCreate = <any>'DropCreate',
//     TruncateCopy = <any>'TruncateCopy',
//     DropCreateCopy = <any>'DropCreateCop',
// }

// export enum eStatus {
//     None = <any>'None',
//     Pending = <any>'Pending',
//     Error = <any>'Error',
//     Imported = <any>'Imported',
//     Added = <any>'Added',
//     Updated = <any>'Updated',
//     Deleted = <any>'Deleted',
// }

// export enum eSortDirection {
//     Ascending = <any>'Ascending',
//     Descending = <any>'Descending',
// }

export const sortDirections = [
    {key: eSortDirection.Ascending, name: 'Ascending'},
    {key: eSortDirection.Descending, name: 'Descending'},
];

// export enum eSeriesGrain {
//     Second = <any>'Second',
//     Minute = <any>'Minute',
//     Hour = <any>'Hour',
//     Day = <any>'Day',
//     Week = <any>'Week',
//     Month = <any>'Month',
//     Year = <any>'Year',
//     Number = <any>'Number',
// }
export const seriesGrains = [
    {key: eSeriesGrain.Second, name: 'Second'},
    {key: eSeriesGrain.Minute, name: 'Minute'},
    {key: eSeriesGrain.Hour, name: 'Hour'},
    {key: eSeriesGrain.Day, name: 'Day'},
    {key: eSeriesGrain.Week, name: 'Week'},
    {key: eSeriesGrain.Month, name: 'Month'},
    {key: eSeriesGrain.Year, name: 'Year'},
    {key: eSeriesGrain.Number, name: 'Number'},
];

// export enum eDeltaType {
//     SourceSurrogateKey = <any>'SourceSurrogateKey',
//     ValidFromDate = <any>'ValidFromDate',
//     ValidToDate = <any>'ValidToDate',
//     CreateDate = <any>'CreateDate',
//     UpdateDate = <any>'UpdateDate',
//     CreateAuditKey = <any>'CreateAuditKey',
//     UpdateAuditKey = <any>'UpdateAuditKey',
//     IsCurrentField = <any>'IsCurrentField',
//     Version = <any>'Version',
//     NaturalKey = <any>'NaturalKey',
//     TrackingField = <any>'TrackingField',
//     NonTrackingField = <any>'NonTrackingField',
//     IgnoreField = <any>'IgnoreField',
//     ValidationStatus = <any>'ValidationStatus',
//     RejectedReason = <any>'RejectedReason',
//     FileName = <any>'FileName',
//     FileRowNumber = <any>'FileRowNumber',
//     AzureRowKey = <any>'AzureRowKey', // special column type for Azure Storage Tables.
//     AzurePartitionKey = <any>'AzurePartitionKey', // special column type for Azure Storage Tables.
//     TimeStamp = <any>'TimeStamp', // column that is generated by the database.
//     DbAutoIncrement = <any>'DbAutoIncement',
//     AutoIncrement = <any>'AutoIncrement', // column is auto incremented by the integration hub function.
//     ResponseSuccess = <any>'ResponseSuccess', // webservice/function response aws successful
//     ResponseData = <any>'ResponseData',  // raw data from a webservice/function response
//     ResponseStatus = <any>'ResponseStatus',  // status code from a webservice/function call
//     ResponseSegment = <any>'ResponseSegment',  // status code from a webservice/function call
//     Error = <any>'Error',  // status code from a webservice/function call
//     Url = <any>'Url',  // status code from a webservice/function call
// }

// export enum eChartType {
//     BarVertical = <any>'BarVertical',
//     BarHorizontal = <any>'BarHorizontal',
//     BarVertical2D = <any>'BarVertical2D',
//     BarHorizontal2D = <any>'BarHorizontal2D',
//     BarVerticalStacked = <any>'BarVerticalStacked',
//     BarHorizontalStacked = <any>'BarHorizontalStacked',
//     BarVerticalNormalized = <any>'BarVerticalNormalized',
//     BarHorizontalNormalized = <any>'BarHorizontalNormalized',
//     Pie = <any>'Pie',
//     PieAdvanced = <any>'PieAdvanced',
//     PieGrid = <any>'PieGrid',
//     Line = <any>'Line',
//     Area = <any>'Area',
//     Polar = <any>'Polar',
//     AreaStacked = <any>'AreaStacked',
//     AreaNormalized = <any>'AreaNormalized',
//     Scatter = <any>'Scatter',
//     Error = <any>'Error',
//     Bubble = <any>'Bubble',
//     ForceDirected = <any>'ForceDirected',
//     HeatMap = <any>'HeatMap',
//     TreeMap = <any>'TreeMap',
//     Cards = <any>'Cards',
//     Gauge = <any>'Gauge',
//     LinearGauge = <any>'LinearGauge',
//     Map = <any>'Map'
// }

export const deltaTypes = [
    {key: eDeltaType.SourceSurrogateKey, name: 'Source Surrogate Key', dataType: eTypeCode.Int64, defaultName: 'SourceSk', unique: true},
    {key: eDeltaType.ValidFromDate, name: 'Valid From Date', dataType: eTypeCode.DateTime, defaultName: 'ValidFromDate', unique: true},
    {key: eDeltaType.ValidToDate, name: 'Valid To Date', dataType: eTypeCode.DateTime, defaultName: 'ValidToDate', unique: true},
    {key: eDeltaType.CreateDate, name: 'Create Date', dataType: eTypeCode.DateTime, defaultName: 'CreateDate', unique: true},
    {key: eDeltaType.UpdateDate, name: 'Update Date', dataType: eTypeCode.DateTime, defaultName: 'UpdateDate', unique: true},
    {key: eDeltaType.CreateAuditKey, name: 'Create Audit Key', dataType: eTypeCode.Int64, defaultName: 'CreateAuditKey', unique: true},
    {key: eDeltaType.UpdateAuditKey, name: 'Update Audit Key', dataType: eTypeCode.Int64, defaultName: 'UpdateAuditKey', unique: true},
    {key: eDeltaType.IsCurrentField, name: 'Is Current Field', dataType: eTypeCode.Boolean, defaultName: 'IsCurrent', unique: true},
    {key: eDeltaType.Version, name: 'Record Version', dataType: eTypeCode.Boolean, defaultName: 'Version', unique: true},
    {key: eDeltaType.NaturalKey, name: 'Natural Key', dataType: null, defaultName: null, unique: false},
    {key: eDeltaType.TrackingField, name: 'Tracking Field', dataType: null, defaultName: null, unique: false},
    {key: eDeltaType.NonTrackingField, name: 'Non-Tracking Field', dataType: null, defaultName: null, unique: false},
    {key: eDeltaType.IgnoreField, name: 'Ignored Field', dataType: null, defaultName: null, unique: false},
    {key: eDeltaType.RejectedReason, name: 'Reject Reason', dataType: eTypeCode.String, defaultName: 'RejectReason', unique: true},
    {key: eDeltaType.FileName, name: 'File Name', dataType: eTypeCode.String, defaultName: 'FileName', unique: true},
    {key: eDeltaType.FileRowNumber, name: 'File Row Number', dataType: eTypeCode.Int64, defaultName: 'FileRowNumber', unique: true},
    {key: eDeltaType.RowKey, name: 'RowKey (Azure/Mongo)', dataType: null, defaultName: null, unique: true},
    {key: eDeltaType.PartitionKey, name: 'PartitionKey (Azure only)', dataType: null, defaultName: null, unique: true},
    {key: eDeltaType.TimeStamp, name: 'Auto TimeStamp', dataType: null, defaultName: null, unique: true},
    {key: eDeltaType.AutoIncrement, name: 'Auto Increment', dataType: eTypeCode.Int64, defaultName: 'Sk', unique: true},
    {key: eDeltaType.DbAutoIncrement, name: 'Database Auto Increment', dataType: eTypeCode.Int64, defaultName: 'Sk', unique: true},
    {key: eDeltaType.ResponseSuccess, name: 'Response Success', dataType: eTypeCode.String, defaultName: 'ResponseSuccess', unique: false},
    {key: eDeltaType.ResponseData, name: 'Response Data', dataType: eTypeCode.String, defaultName: 'ResponseData', unique: false},
    {key: eDeltaType.ResponseStatus, name: 'Response Status', dataType: eTypeCode.String, defaultName: 'ResponseStatus', unique: true},
    {key: eDeltaType.ResponseSegment, name: 'Response Segment', dataType: eTypeCode.String, defaultName: null, unique: false},
    {key: eDeltaType.DatabaseOperation, name: 'Database Operation', dataType: eTypeCode.String, defaultName: null, unique: false},
    {key: eDeltaType.Error, name: 'Error', dataType: eTypeCode.String, defaultName: null, unique: false},
    {key: eDeltaType.Url, name: 'Url', dataType: eTypeCode.String, defaultName: null, unique: false},
    {key: eDeltaType.ValidationStatus, name: 'Validation Status',
        dataType: eTypeCode.String, defaultName: 'ValidationStatus', unique: true},
]

// export enum eSecurityFlag {
//     None = <any>'None',
//     FastEncrypt = <any>'FastEncrypt',
//     FastDecrypt = <any>'FastDecrypt',
//     FastEncrypted = <any>'FastEncrypted',
//     StrongEncrypt = <any>'StrongEncrypt',
//     StrongDecrypt = <any>'StrongDecrypt',
//     StrongEncrypted = <any>'StrongEncrypted',
//     OneWayHash = <any>'OneWayHash',
//     OneWayHashed = <any>'OneWayHashed',
//     Hide = <any>'Hide'
// }

export const securityFlags = [
    {key: eSecurityFlag.None, name: 'Not Secured'},
    {key: eSecurityFlag.FastEncrypt, name: 'Fast Encrypt (encrypted when read)'},
    {key: eSecurityFlag.FastDecrypt, name: 'Fast Decrypt (decrypted when written)'},
    {key: eSecurityFlag.FastEncrypted, name: 'Fast Encrypted Field'},
    {key: eSecurityFlag.StrongEncrypt, name: 'Strong Encrypt (encrypted when read)'},
    {key: eSecurityFlag.StrongDecrypt, name: 'Strong Decrypt (decrypted when written)'},
    {key: eSecurityFlag.StrongEncrypted, name: 'Strong Encrypted Field'},
    {key: eSecurityFlag.OneWayHash, name: 'Hash (when read)'},
    {key: eSecurityFlag.OneWayHashed, name: 'Hashed field'},
    {key: eSecurityFlag.Hide, name: 'Hide the field'},
]

// export enum eDatalinkType {
//     General = <any>'General',
//     Stage = <any>'Stage',
//     Validate = <any>'Validate',
//     Transform = <any>'Transform',
//     Deliver = <any>'Deliver',
//     Publish = <any>'Publish',
//     Share = <any>'Share',
//     Query = <any>'Query'
// }

// export const datalinkTypes = [
//     {key: eDatalinkType.General, name: 'General', description: 'Non-categorized general purpose datalink'},
//     {key: eDatalinkType.Stage, name: 'Staging', description: 'Staging - loads data into a central/interim database'},
//     {key: eDatalinkType.Validate, name: 'Validate', description: 'Validate - performs data validation and cleaning'},
//     {key: eDatalinkType.Transform, name: 'Transform', description: 'Transform - reshapes, aggregates data'},
//     {key: eDatalinkType.Deliver, name: 'Deliver', description: 'Deliver - prepares data for delivering to a system/database'},
//     {key: eDatalinkType.Publish, name: 'Publish', description: 'Publish - sends data to a target system/database'},
//     {key: eDatalinkType.Share, name: 'Share', description: 'Share - datalink designed to be shared with other users'},
//     {key: eDatalinkType.Query, name: 'Query',
//              description: 'Query - datalink query used for data extracts or as a source for other datalinks'},
// ]

// export enum eTransformWriterMethod {
//     Bulk = <any>'Bulk',
//     Transaction = <any>'Transaction',
// }

export const loadStrategies = [
    {key: eTransformWriterMethod.Bulk, description: 'Bulk load - target tables loaded in parallel as fast as possible'},
    {key: eTransformWriterMethod.Transaction, description: 'Transaction - Target tables loaded in transactions to ensure data integrity'},
]

// export enum eUpdateStrategy {
//     Reload = <any>'Reload',
//     Append = <any>'Append',
//     AppendUpdate = <any>'AppendUpdate',
//     AppendUpdateDelete = <any>'AppendUpdateDelete',
//     AppendUpdatePreserve = <any>'AppendUpdatePreserve',
//     AppendUpdateDeletePreserve = <any>'AppendUpdateDeletePreserve',
// }

export const updateStrategies = [
    {key: eUpdateStrategy.Reload, description: 'Truncate target table and reload'},
    {key: eUpdateStrategy.Append, description: 'Append all rows to target table'},
    {key: eUpdateStrategy.AppendUpdate, description: 'Append new rows and update existing rows'},
    {key: eUpdateStrategy.AppendUpdateDelete, description: 'Append new rows, update existing rows, and delete "deleted" rows'},
    {key: eUpdateStrategy.AppendUpdatePreserve, description: 'Append new rows and update existing rows, and preserve changes'},
    {key: eUpdateStrategy.AppendUpdateDeletePreserve, description: 'Append new rows, check for updates and deletes, and preserve changes'},
]

// export enum eConnectionPurpose {
//     Source = <any>'Source',
//     Managed = <any>'Managed',
//     Target = <any>'Target',
//     Internal = <any>'Internal'
// }

// export const connectionPurposes = [
//     {key: eConnectionPurpose.Source, name: 'Source Database/Service'},
//     {key: eConnectionPurpose.Managed, name: 'Managed (by Integration Hub) Database'},
//     {key: eConnectionPurpose.Target, name: 'Target Database'},
// ]

// export enum eParameterDirection {
//     Input = <any>'Input',
//     Output = <any>'Output',
//     Join = <any>'Join',
//     ResultInput = <any>'ResultInput',
//     ResultOutput = <any>'ResultOutput',
//     ReturnValue = <any>'ReturnValue',
//     ResultReturnValue = <any>'ResultReturnValue',
// };

// export enum eTransformItemType {
//     BuiltInFunction = <any>'BuiltInFunction',
//     CustomFunction = <any>'CustomFunction',
//     ColumnPair = <any>'ColumnPair',
//     JoinPair = <any>'JoinPair',
//     FilterPair = <any>'FilterPair',
//     AggregatePair = <any>'AggregatePair',
//     Series = <any>'Series',
//     Sort = <any>'Sort',
//     Column = <any>'Column',
//     JoinNode = <any>'JoinNode',
//     GroupNode = <any>'GroupNode',
//     Node = <any>'Node',
//     UnGroup = <any>'UnGroup'
// }

export const transformItemTypes = [
    // tslint:disable-next-line:max-line-length
    {key: eTransformItemType.BuiltInFunction, name: 'Built in Function', useSource: false, useTarget: false, useJoin: false, useFilter: false},
    // tslint:disable-next-line:max-line-length
    {key: eTransformItemType.CustomFunction, name: 'Custom Function', useSource: false, useTarget: false, useJoin: false, useFilter: false},
    {key: eTransformItemType.ColumnPair, name: 'Mapping', useSource: true, useTarget: true, useJoin: false, useFilter: false},
    {key: eTransformItemType.JoinPair, name: 'Join', useSource: true, useTarget: false, useJoin: true, useFilter: false},
    {key: eTransformItemType.FilterPair, name: 'Filter', useSource: true, useTarget: true, useJoin: false, useFilter: true},
    {key: eTransformItemType.AggregatePair, name: 'Aggregate', useSource: true, useTarget: true, useJoin: false, useFilter: false},
    {key: eTransformItemType.Series, name: 'Series', useSource: true, useTarget: false, useJoin: false, useFilter: false},
    {key: eTransformItemType.Sort, name: 'Sort By', useSource: true, useTarget: false, useJoin: false, useFilter: false},
    {key: eTransformItemType.Column, name: 'Group By', useSource: true, useTarget: false, useJoin: false, useFilter: false},
    {key: eTransformItemType.JoinNode, name: 'Join Node', useSource: true, useTarget: false, useJoin: true, useFilter: false},
    {key: eTransformItemType.GroupNode, name: 'Group Node', useSource: true, useTarget: false, useJoin: false, useFilter: false},
    {key: eTransformItemType.Node, name: 'Node', useSource: true, useTarget: false, useJoin: false, useFilter: false},
    {key: eTransformItemType.UnGroup, name: 'Un-Group', useSource: true, useTarget: false, useJoin: false, useFilter: false},
]

// export enum eTransformFunctionType {
//     Condition = <any>'Condition',
//     Mapping = <any>'Mapping',
//     Aggregate = <any>'Aggregate',
//     Series = <any>'Series',
//     Rows = <any>'Rows',
//     Profile = <any>'Profile',
//     Validation = <any>'Validation',
//     JoinCondition = <any>'JoinCondition',
//     Sort = <any>'Sort'
// }

export const transformFunctionTypes = [
    {key: eFunctionType.Condition, name: 'Condition Function'},
    {key: eFunctionType.Map, name: 'Mapping Function'},
    {key: eFunctionType.Aggregate, name: 'Aggregate Function'},
    {key: eFunctionType.Rows, name: 'Row Generating Function'},
    {key: eFunctionType.Profile, name: 'Profile Function'},
    {key: eFunctionType.Validate, name: 'Validation Function'},
    {key: eFunctionType.JoinCondition, name: 'Join Condition'},
    {key: eFunctionType.Sort, name: 'Sort Function'},
]

// export enum eOnError {
//     Abend = <any>'Abend',
//     Null = <any>'Null',
//     Ignore = <any>'Ignore'
// }
// export const onErrorActions = [
//     {key: eOnError.Abend, name: 'Abend Datalink'},
//     {key: eOnError.Null, name: 'Return Null'},
//     {key: eOnError.Ignore, name: 'Discard the row'},
// ];

// export enum eOnNull {
//     Execute = <any>'Execute',
//     Abend = <any>'Abend',
//     Null = <any>'Null',
//     Ignore = <any>'Ignore'
// }

// export const onNullActions = [
//     {key: eOnNull.Execute, name: 'Execute Function'},
//     {key: eOnNull.Abend, name: 'Abend Datalink'},
//     {key: eOnNull.Null, name: 'Return Null'},
//     {key: eOnNull.Ignore, name: 'Discard the row'},
// ];

// export enum eParseErrorAction {
//     RaiseEvent = <any>'RaiseEvent',
//     AdvanceToNextLine = <any>'AdvanceToNextLine',
//     ThrowException = <any>'ThrowException',
// }

// export const ParseErrorActions = [
//     {key: eParseErrorAction.ThrowException, name: 'Abend Datalink'},
//     {key: eParseErrorAction.RaiseEvent, name: 'Reject Record'},
//     {key: eParseErrorAction.AdvanceToNextLine, name: 'Continue next line'},
// ];

// export enum eMissingFieldAction {
//     ParseError = <any>'ParseError',
//     ReplaceByEmpty = <any>'ReplaceByEmpty',
//     ReplaceByNull = <any>'ReplaceByNull',
// };

// export const  MissingFieldActions = [
//     {key: eMissingFieldAction.ParseError, name: 'Raise parse error'},
//     {key: eParseErrorAction.RaiseEvent, name: 'Reject Record'},
//     {key: eParseErrorAction.AdvanceToNextLine, name: 'Continue next line'},
// ];

// export enum eValueTrimmingOptions {
//     None = <any>'None',
//     UnquotedOnly = <any>'UnquotedOnly',
//     QuotedOnly = <any>'QuotedOnly',
//     All = <any>'All',
// };

// export const  ValueTrimmingOptions = [
//     {key: eValueTrimmingOptions.All, name: 'All'},
//     {key: eValueTrimmingOptions.None, name: 'None'},
//     {key: eValueTrimmingOptions.QuotedOnly, name: 'Quoted Fields Only'},
//     {key: eValueTrimmingOptions.UnquotedOnly, name: 'Unquoted Fields Only'},
// ];

// export enum eFailAction {
//     Continue = <any>'Continue',
//     ContinueNonDependent = <any>'ContinueNonDependent',
//     Abend = <any>'Abend',
// }

export const FailActions = [
    {key: eFailAction.Abend, name: 'Abend the job'},
    {key: eFailAction.Continue, name: 'Continue to next datalink'},
    {key: eFailAction.ContinueNonDependent, name: 'Continue with non-dependent datalinks'},
];

// export enum eInvalidAction {
//     Pass= <any>'Pass',
//     Clean = <any>'Clean',
//     RejectClean= <any>'RejectClean',
//     Reject = <any>'Reject',
//     Discard= <any>'Discard',
//     Abend= <any>'Abend',
// }

export const InvalidActions = [
    {key: eInvalidAction.Pass, name: 'Pass Record'},
    {key: eInvalidAction.Clean, name: 'Clean Record'},
    {key: eInvalidAction.RejectClean, name: 'Reject/Clean Record'},
    {key: eInvalidAction.Reject, name: 'Reject Record'},
    {key: eInvalidAction.Discard, name: 'Discard Record'},
    {key: eInvalidAction.Abend, name: 'Abend Datalink'},
];

// export enum eFunctionCaching {
//     NoCache= <any>'NoCache',
//     EnableCache= <any>'EnableCache',
//     CallOnce= <any>'CallOnce',
// }

export const FunctionCache = [
    {key: eFunctionCaching.NoCache, name: 'No cache (function called for each row)'},
    {key: eFunctionCaching.EnableCache, name: 'Enable cache (function called when values change)'},
    {key: eFunctionCaching.CallOnce, name: 'Call Once (function called for first row only)'},
]

// export enum eCleanAction {
//     DefaultValue = <any>'DefaultValue',
//     Truncate = <any>'Truncate',
//     Blank = <any>'Blank',
//     Null = <any>'Null',
//     OriginalValue = <any>'OriginalValue',
//     CleanValue = <any>'CleanValue',
// }

export const CleanActions = [
    {key: eCleanAction.DefaultValue, name: 'Use columns default value'},
    {key: eCleanAction.Truncate, name: 'Truncate (if string) to the maximum allowed length'},
    {key: eCleanAction.Blank, name: 'Set to blank'},
    {key: eCleanAction.Null, name: 'Set to null'},
    {key: eCleanAction.OriginalValue, name: 'Use the original value'},
    {key: eCleanAction.CleanValue, name: 'Use the specified clean value'},
];

// export enum eDuplicateStrategy {
//     Abend = <any>'Abend',
//     First = <any>'First',
//     Last = <any>'Last',
//     All = <any>'All',
// }

export const duplicateStrategies = [
    {key: eDuplicateStrategy.Abend, name: 'Abend Datalink'},
    {key: eDuplicateStrategy.First, name: 'First Match'},
    {key: eDuplicateStrategy.Last, name: 'Last Match'},
    {key: eDuplicateStrategy.All, name: 'All matches (duplicate rows)'},
];

// export enum eSourceType {
//     Datalink = <any>'Datalink',
//     Table = <any>'Table',
//     Rows = <any>'Rows',
// }

export const sourceTypes = [
    {key: eSourceType.Datalink, name: 'Datalink'},
    {key: eSourceType.Table, name: 'Table'},
    {key: eSourceType.Rows, name: 'Static Row Set'},
];

// export class Table {
//     public name: string;
//     public baseTableName: string;
//     public logicalName: string;
//     public description: string;
//     public sourceConnectionName: string;

//     public columns: Array<TableColumn>;

//     public data: Array<Array<any>>;
// }

// export class TableColumn {
//     public name: string;
//     public logicalName: string;
//     public columnGroup: string;
//     public description: string;
//     public dataType: eTypeCode;
//     public maxLength: number;
//     public isUnicode: boolean;
//     public precision: number;
//     public scale: number;
//     public allowDbNull: boolean;
//     public deltaType: eDeltaType;
//     public defaultValue: string;
//     public isUnique: boolean;
//     public isMandatory: boolean;
//     public isIncrementalUpdate: boolean;
//     public securityFlag: eSecurityFlag;
// }

// export class TransformPerformance {
//     public transformName: string;
//     public action: string;
//     public rows: number;
//     public seconds: number;
//     public children: TransformPerformance[];
// }

// export class TransformWriterResult {
//         public auditKey: number;
//         public auditType: string;
//         public referenceKey: number;
//         public parentAuditKey: number;
//         public referenceName: string;
//         public sourceTableKey: number;
//         public sourceTableName: string;
//         public targetTableKey: number;
//         public targetTableName: string;

//         public hubKey: string;
//         public auditConnectionKey: number;

//         public lastRowTotal: number;
//         public lastMaxIncrementalValue: any;

//         public rowsTotal: number;
//         public rowsCreated: number;
//         public rowsUpdated: number;
//         public rowsDeleted: number;
//         public rowsPreserved: number;
//         public rowsIgnored: number;
//         public rowsRejected: number;
//         public rowsFiltered: number;
//         public rowsSorted: number;
//         public rowsReadPrimary: number;
//         public rowsReadReference: number;

//         public readTicks: number;
//         public writeTicks: number;
//         public processingTicks: number;

//         public maxIncrementalValue: any;
//         public maxSurrogateKey: number;

//         public message: string;
//         public exceptionDetails: string;
//         public initializeTime: string;
//         public scheduledTime: string;
//         public startTime: string;
//         public endTime: string;
//         public lastUpdateTime: string;
//         public triggerMethod: eTriggerMethod;
//         public triggerInfo: string;
//         public performanceSummary: TransformPerformance[];

//         public runStatus: eRunStatus;

//         public profileTableName: string;
//         public rejectTableName: string;

//         public childResults: TransformWriterResult[];
// }


export class FileProperties {
    public fileName: string;
    public lastModified: Date;
    public length: number;
    public contentType: string;
}

// export class ImportOptions {
//     public connections = eImportAction.Replace;
//     public tables = eImportAction.Replace;
//     public fileFormats = eImportAction.Replace;
//     public datalinks = eImportAction.Replace;
//     public datajobs = eImportAction.Replace;
//     public columnValidations = eImportAction.Replace;
//     public hubVariables = eImportAction.Replace;
//     public customFunctions = eImportAction.Replace;
//     public datalinkTests = eImportAction.Replace;
//     public views = eImportAction.Replace;
//     public apis = eImportAction.Replace;
// }

// export class ImportAction {
//     public objectType: eSharedObjectType;
//     public action: eImportAction;
// }

// export class Import {
//     public hubKey: number;
//     public hubVariables: ImportObject<DexihHubVariable>[];
//     public datajobs: ImportObject<DexihDatajob>[];
//     public datalinks: ImportObject<DexihDatalink>[];
//     public connections: ImportObject<DexihConnection>[];
//     public tables: ImportObject<DexihTable>[];
//     public fileFormats: ImportObject<DexihFileFormat>[];
//     public columnValidations: ImportObject<DexihColumnValidation>[];
//     public customFunctions: ImportObject<DexihCustomFunction>[];
//     public remoteAgentHubs: ImportObject<DexihRemoteAgentHub>[];
//     public datalinkTests: ImportObject<DexihDatalinkTest>[];
//     public views: ImportObject<DexihView>[];
//     public apis: ImportObject<DexihApi>[];
//     public warnings: string[] = [];
//     public dashboards: ImportObject<DexihDashboard>[];
// }

// export class ImportObject<T> {
//     public item: T;
//     public importAction: eImportAction;
// }

// export enum eRunStatus {
//     Initialised = <any>'Initialised',
//     Scheduled = <any>'Scheduled',
//     Started = <any>'Started',
//     Running = <any>'Running',
//     RunningErrors = <any>'RunningErrors',
//     Finished = <any>'Finished',
//     FinishedErrors = <any>'FinishedErrors',
//     Abended = <any>'Abended',
//     Cancelled = <any>'Cancelled',
//     NotRunning = <any>'NotRunning',
//     Passed = <any>'Passed',
//     Failed= <any>'Failed'
// }

export const runStatus = [
    {key: eRunStatus.Initialised, name: 'Initialized'},
    {key: eRunStatus.Scheduled, name: 'Scheduled'},
    {key: eRunStatus.Started, name: 'Started'},
    {key: eRunStatus.Running, name: 'Running'},
    {key: eRunStatus.RunningErrors, name: 'Running(errors)'},
    {key: eRunStatus.Finished, name: 'Finished'},
    {key: eRunStatus.FinishedErrors, name: 'Finished(errors)'},
    {key: eRunStatus.Abended, name: 'Abended'},
    {key: eRunStatus.Cancelled, name: 'Cancelled'},
    {key: eRunStatus.NotRunning, name: 'Not Running'},
    {key: eRunStatus.Passed, name: 'Test Passed'},
    {key: eRunStatus.Failed, name: 'Test Failed'},
];


// export enum eTriggerMethod {
//     NotTriggered = <any>'NotTriggered',
//     Manual = <any>'Manual',
//     Schedule = <any>'Schedule',
//     FileWatcher = <any>'FileWatcher',
//     External = <any>'External',
//     Datajob = <any>'Datajob',
// }

// // Summary:
// //     Specifies the day of the week.
// export enum eDayOfWeek {
//     Sunday = <any>'Sunday',
//     Monday = <any>'Monday',
//     Tuesday  = <any>'Tuesday',
//     Wednesday = <any>'Wednesday',
//     Thursday  = <any>'Thursday',
//     Friday = <any>'Friday',
//     Saturday  = <any>'Saturday'
// }

// export enum eFlatFilePath {
//     Incoming = <any>'incoming',
//     Processed = <any>'processed',
//     Rejected = <any>'rejected',
//     Outgoing = <any>'outgoing',
//     None = <any>'none',
// }

// export enum eFormatType {
//     Xml = <any>'Xml',
//     Json = <any>'Json',
//     Text = <any>'Text',
// }

export const formatTypes  = [
    {key: eTypeCode.Xml, name: 'Xml'},
    {key: eTypeCode.Json, name: 'Json'},
    {key: eTypeCode.Text, name: 'Text'},
];

// export enum eImportAction {
//     Replace = <any>'Replace',
//     New = <any>'New',
//     Leave = <any>'Leave',
//     Skip = <any>'Skip',
//     Delete =  <any>'Delete'
// }

export const importActions  = [
    {key: eImportAction.Replace, name: 'Replace existing'},
    {key: eImportAction.New, name: 'Create a new version'},
    {key: eImportAction.Leave, name: 'Leave existing version'},
    {key: eImportAction.Skip, name: 'Skip item(s)'},
];

// export class InputColumn {
//     public datalinkKey = 0;
//     public datalinkName: string = null;
//     public name: string = null;
//     public logicalName: string = null;
//     public dataType: eTypeCode;
//     public value: string = null;
//     public rank = 0;

//     constructor() {
//         this.dataType = eTypeCode.String;
//     }
// }

// // mapping status enum.  Note, order is important.
export enum eMappingStatus {
    MappedToNothing, // indicates a column has been mapped but is not in the target.
    Mapped, // indicates a column has been mapped from source-target
    PassThroughToNothing, // indicates a column has been passedThrough but not in the target.
    PassThroughMap, // indicates a column has been default mapped as part of a passThrough setting.
    MappedToVirtual, // indicates virtual table target.
    PassThroughToVirtual,
    AutoGenerate, // indicates a target column is autoGenerating and does not require a map.
    Joined, // used in a join
    Sorted,
    NotMapped, // indicates a column in the target has not been mapped, and will be defaulted.
    Error,
}

export interface MappingStatusInfo {
    key: eMappingStatus;
    name: string;
    statusClass: string;
}

export const lineageMappingStatuses: MappingStatusInfo[] = [
    // tslint:disable-next-line:max-line-length
    {key: eMappingStatus.Mapped, name: 'From Mapped', statusClass: 'fa fa-arrow-circle-left text-success'},
    {key: eMappingStatus.PassThroughToNothing, name: 'From Pass-through to Nothing', statusClass: 'fa fa-arrow-circle-left text-warning'},
    {key: eMappingStatus.PassThroughMap, name: 'From Pass-through', statusClass: 'fa fa-arrow-circle-o-left text-success'},
    {key: eMappingStatus.MappedToVirtual, name: 'From Virtual', statusClass: 'fa fa-square text-success'},
    {key: eMappingStatus.PassThroughToVirtual, name: 'Passed-through to Virtual', statusClass: 'fa fa-square-o text-success'},
    {key: eMappingStatus.AutoGenerate, name: 'Auto Generated', statusClass: 'fa fa-circle text-success'},
    {key: eMappingStatus.Joined, name: 'Joined', statusClass: 'fa fa-code-fork text-success'},
    {key: eMappingStatus.Sorted, name: 'Sorted', statusClass: 'fa fa-sort-alpha-asc text-success'},
    {key: eMappingStatus.MappedToNothing, name: 'Mapped to Nothing', statusClass: 'fa fa-check-square text-warning'},
    {key: eMappingStatus.NotMapped, name: 'Not mapped', statusClass: 'fa fa-times-circle text-warning'},
    {key: eMappingStatus.Error, name: 'Error', statusClass: 'fa fa-exclamation-triangle text-danger'},
];

export const impactMappingStatuses: MappingStatusInfo[] = [
    // tslint:disable-next-line:max-line-length
    {key: eMappingStatus.Mapped, name: 'Mapped to Target', statusClass: 'fa fa-arrow-circle-right text-success'},
    {key: eMappingStatus.PassThroughToNothing, name: 'Passed-through to Nothing', statusClass: 'fa fa-arrow-circle-right text-warning'},
    {key: eMappingStatus.PassThroughMap, name: 'Passed-through to Target', statusClass: 'fa fa-arrow-circle-o-right text-success'},
    {key: eMappingStatus.MappedToVirtual, name: 'Mapped to Virtual', statusClass: 'fa fa-square text-success'},
    {key: eMappingStatus.PassThroughToVirtual, name: 'Passed-through to Virtual', statusClass: 'fa fa-square-o text-success'},
    {key: eMappingStatus.AutoGenerate, name: 'Auto Generated', statusClass: 'fa fa-circle text-success'},
    {key: eMappingStatus.Joined, name: 'Joined', statusClass: 'fa fa-code-fork text-success'},
    {key: eMappingStatus.Sorted, name: 'Sorted', statusClass: 'fa fa-sort-alpha-asc text-success'},
    {key: eMappingStatus.MappedToNothing, name: 'Mapped to Nothing', statusClass: 'fa fa-arrow-circle-o-right text-warning'},
    {key: eMappingStatus.NotMapped, name: 'Not mapped', statusClass: 'fa fa-times-circle text-warning'},
    {key: eMappingStatus.Error, name: 'Error', statusClass: 'fa fa-exclamation-triangle text-danger'},
];

export class ConnectionTables extends DexihConnection {
    public dexihTables: DexihTable[];
}

// export class TransformProperties {
//     public name: string;
//     public transformName: string;
//     public transformType: eTransformType;
//     public selectQuery: SelectQuery;
//     public properties: {[key: string]: number};
//     public primaryProperties: TransformProperties;
//     public referenceProperties: TransformProperties;
//     public rows: number;
//     public seconds: number;
// }

export class PreviewResults {
    public name: string;
    public columns: Array<any>;
    public chartConfig: ChartConfig;
    public data: Array<any>;
    public transformProperties: TransformProperties;
    public status: Message;
}

export class FlatFilesReady {
    public hubKey: number;
    public reference: string;
    public tables: DexihTable[];
}

export class DashboardUrl {
    public dashboardItemKey: number;
    public downloadUrl: string;
}

// export class InputParameter {
//     public name: string = null;
//     public value = null;
// }

// export class LOVItem {
//     public key;
//     public name: string;
//     public description: string;
// }
