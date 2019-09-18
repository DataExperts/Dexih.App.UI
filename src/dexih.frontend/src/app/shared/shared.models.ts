// Auto generated shared classes.
// Regenerate at http://localhost:5000/Proto/JSModels.


// auto generated classes

export class ApiData{
	public apiStatus: eApiStatus = null;
	public hubKey: number = 0;
	public apiKey: number = 0;
	public selectQuery: SelectQuery = null;
	public securityKey: string = null;
	public successCount: number = 0;
	public errorCount: number = 0;
}

export class ApplicationUser{
	public isInvited: boolean = false;
	public isRegistered: boolean = false;
	public isEnabled: boolean = false;
	public firstName: string = null;
	public lastName: string = null;
	public terms: boolean = false;
	public subscription: boolean = false;
	public inviteQuota: number = 0;
	public hubQuota: number = 0;
	public privateKey: string = null;
	public certificateChain: string = null;
	public certificateExpiry: Date = null;
}

export class AppSettingsSection{
	public userPrompt: boolean = true;
	public remoteAgentId: string = null;
	public user: string = null;
	public userToken: string = null;
	public encryptionKey: string = null;
	public webServer: string = "https://dexih.com";
	public name: string = null;
	public autoUpgrade: boolean = false;
	public allowPreReleases: boolean = false;
	public autoStartPath: string = null;
}

export class CacheManager{
	public hub: DexihHub = null;
	public buildVersion: string = null;
	public buildDate: Date = null;
	public googleClientId: string = null;
	public microsoftClientId: string = null;
	public googleMapsAPIKey: string = null;
	public defaultRemoteLibraries: RemoteLibraries = null;
	public hubKey: number = 0;
	public cacheEncryptionKey: string = null;
}

export class ChartConfig{
	public labelColumn: string = null;
	public seriesColumn: string = null;
	public seriesColumns: string[] = [];
	public xColumn: string = null;
	public yColumn: string = null;
	public minColumn: string = null;
	public maxColumn: string = null;
	public radiusColumn: string = null;
	public latitudeColumn: string = null;
	public longitudeColumn: string = null;
	public chartType: eChartType = eChartType.BarVertical;
	public colorScheme: string = "natural";
	public showGradient: boolean = false;
	public showXAxis: boolean = true;
	public showYAxis: boolean = true;
	public showLegend: boolean = false;
	public legendPosition: string = null;
	public showXAxisLabel: boolean = true;
	public showYAxisLabel: boolean = true;
	public showGridLines: boolean = false;
	public xAxisLabel: string = null;
	public yAxisLabel: string = null;
	public xScaleMax: number = null;
	public xScaleMin: number = null;
	public yScaleMax: number = null;
	public yScaleMin: number = null;
	public autoScale: boolean = true;
	public explodeSlices: boolean = false;
	public doughnut: boolean = false;
}

export class ConnectionAttribute{
	public connectionCategory: eConnectionCategory = null;
	public name: string = null;
	public description: string = null;
	public databaseDescription: string = null;
	public serverDescription: string = null;
	public allowsConnectionString: boolean = false;
	public allowsSql: boolean = false;
	public allowsFlatFiles: boolean = false;
	public allowsManagedConnection: boolean = false;
	public allowsSourceConnection: boolean = false;
	public allowsTargetConnection: boolean = false;
	public allowsUserPassword: boolean = false;
	public allowsWindowsAuth: boolean = false;
	public requiresDatabase: boolean = false;
	public requiresLocalStorage: boolean = false;
}

export class ConnectionReference{
	public connectionAssemblyName: string = null;
	public connectionClassName: string = null;
	public connectionCategory: eConnectionCategory = null;
	public name: string = null;
	public description: string = null;
	public databaseDescription: string = null;
	public serverDescription: string = null;
	public allowsConnectionString: boolean = false;
	public allowsSql: boolean = false;
	public allowsFlatFiles: boolean = false;
	public allowsManagedConnection: boolean = false;
	public allowsSourceConnection: boolean = false;
	public allowsTargetConnection: boolean = false;
	public allowsUserPassword: boolean = false;
	public allowsWindowsAuth: boolean = false;
	public requiresDatabase: boolean = false;
	public requiresLocalStorage: boolean = false;
}

export class DataPack{
	public name: string = null;
	public columns: DataPackColumn[] = [];
	public data: any[] = [];
}

export class DataPackColumn{
	public name: string = null;
	public logicalName: string = null;
	public dataType: eTypeCode = eTypeCode.Unknown;
}

export class DeleteQuery{
	public table: string = null;
	public filters: Filter[] = [];
}

export class DexihActiveAgent{
	public remoteAgentKey: number = 0;
	public instanceId: string = null;
	public user: string = null;
	public name: string = null;
	public isRunning: boolean = false;
	public ipAddress: string = null;
	public isEncrypted: boolean = false;
	public dataPrivacyStatus: eDataPrivacyStatus = null;
	public downloadUrls: DownloadUrl[] = [];
	public upgradeAvailable: boolean = false;
	public version: string = null;
	public latestVersion: string = null;
	public latestDownloadUrl: string = null;
}

export class DexihApi{
	public sourceType: eSourceType = null;
	public sourceTableKey: number = null;
	public sourceDatalinkKey: number = null;
	public autoStart: boolean = false;
	public cacheQueries: boolean = false;
	public cacheResetInterval: any = null;
	public logDirectory: string = null;
	public selectQuery: SelectQuery = null;
	public parameters: DexihApiParameter[] = [];
	public isShared: boolean = false;
	public key: number = 0;
	public name: string = null;
	public description: string = null;
	public hubKey: number = 0;
	public createDate: Date = null;
	public updateDate: Date = null;
	public isValid: boolean = true;
}

export class DexihApiParameter{
	public apiKey: number = 0;
	public api: DexihApi = null;
	public value: string = null;
	public key: number = 0;
	public name: string = null;
	public description: string = null;
	public hubKey: number = 0;
	public createDate: Date = null;
	public updateDate: Date = null;
	public isValid: boolean = true;
}

export class DexihBaseEntity{
	public createDate: Date = null;
	public updateDate: Date = null;
	public isValid: boolean = true;
}

export class DexihColumnBase{
	public position: number = 0;
	public logicalName: string = null;
	public columnGroup: string = null;
	public dataType: eTypeCode = eTypeCode.Unknown;
	public maxLength: number = null;
	public precision: number = null;
	public isUnicode: boolean = null;
	public scale: number = null;
	public allowDbNull: boolean = false;
	public deltaType: eDeltaType = null;
	public defaultValue: string = null;
	public isUnique: boolean = false;
	public isMandatory: boolean = false;
	public isIncrementalUpdate: boolean = false;
	public isInput: boolean = false;
	public rank: number = 0;
	public securityFlag: eSecurityFlag = null;
	public key: number = 0;
	public name: string = null;
	public description: string = null;
	public hubKey: number = 0;
	public createDate: Date = null;
	public updateDate: Date = null;
	public isValid: boolean = true;
}

export class DexihColumnValidation{
	public dataType: eTypeCode = eTypeCode.Unknown;
	public minLength: number = null;
	public maxLength: number = null;
	public allowDbNull: boolean = false;
	public minValue: number = null;
	public maxValue: number = null;
	public patternMatch: string = null;
	public regexMatch: string = null;
	public listOfValues: string[] = [];
	public listOfNotValues: string[] = [];
	public lookupColumnKey: number = null;
	public lookupIsValid: boolean = false;
	public lookupMultipleRecords: boolean = false;
	public invalidAction: eInvalidAction = null;
	public cleanAction: eCleanAction = null;
	public cleanValue: string = null;
	public key: number = 0;
	public name: string = null;
	public description: string = null;
	public hubKey: number = 0;
	public createDate: Date = null;
	public updateDate: Date = null;
	public isValid: boolean = true;
}

export class DexihConnection{
	public connectionAssemblyName: string = null;
	public connectionClassName: string = null;
	public purpose: eConnectionPurpose = null;
	public server: string = null;
	public useWindowsAuth: boolean = false;
	public username: string = null;
	public password: string = null;
	public usePasswordVariable: boolean = false;
	public defaultDatabase: string = null;
	public filename: string = null;
	public useConnectionString: boolean = false;
	public connectionString: string = null;
	public useConnectionStringVariable: boolean = false;
	public embedTableKey: boolean = false;
	public passwordRaw: string = null;
	public connectionStringRaw: string = null;
	public key: number = 0;
	public name: string = null;
	public description: string = null;
	public hubKey: number = 0;
	public createDate: Date = null;
	public updateDate: Date = null;
	public isValid: boolean = true;
}

export class DexihCustomFunction{
	public methodCode: string = null;
	public resultCode: string = null;
	public returnType: eTypeCode = null;
	public functionType: eFunctionType = null;
	public isGeneric: boolean = false;
	public genericTypeDefault: eTypeCode = eTypeCode.Unknown;
	public dexihCustomFunctionParameters: DexihCustomFunctionParameter[] = [];
	public key: number = 0;
	public name: string = null;
	public description: string = null;
	public hubKey: number = 0;
	public createDate: Date = null;
	public updateDate: Date = null;
	public isValid: boolean = true;
}

export class DexihCustomFunctionParameter{
	public customFunctionKey: number = 0;
	public position: number = 0;
	public direction: eParameterDirection = null;
	public dataType: eTypeCode = eTypeCode.Unknown;
	public isGeneric: boolean = false;
	public rank: number = 0;
	public key: number = 0;
	public name: string = null;
	public description: string = null;
	public hubKey: number = 0;
	public createDate: Date = null;
	public updateDate: Date = null;
	public isValid: boolean = true;
}

export class DexihDashboard{
	public isShared: boolean = false;
	public minRows: number = 0;
	public minCols: number = 0;
	public maxRows: number = 0;
	public maxCols: number = 0;
	public autoRefresh: boolean = false;
	public dexihDashboardItems: DexihDashboardItem[] = [];
	public parameters: DexihDashboardParameter[] = [];
	public key: number = 0;
	public name: string = null;
	public description: string = null;
	public hubKey: number = 0;
	public createDate: Date = null;
	public updateDate: Date = null;
	public isValid: boolean = true;
}

export class DexihDashboardItem{
	public cols: number = 0;
	public rows: number = 0;
	public x: number = 0;
	public y: number = 0;
	public header: boolean = false;
	public scrollable: boolean = false;
	public viewKey: number = 0;
	public dashboardKey: number = null;
	public parameters: DexihDashboardItemParameter[] = [];
	public key: number = 0;
	public name: string = null;
	public description: string = null;
	public hubKey: number = 0;
	public createDate: Date = null;
	public updateDate: Date = null;
	public isValid: boolean = true;
}

export class DexihDashboardItemParameter{
	public dashboardItemKey: number = 0;
	public value: string = null;
	public key: number = 0;
	public name: string = null;
	public description: string = null;
	public hubKey: number = 0;
	public createDate: Date = null;
	public updateDate: Date = null;
	public isValid: boolean = true;
}

export class DexihDashboardParameter{
	public dashboardKey: number = 0;
	public value: string = null;
	public key: number = 0;
	public name: string = null;
	public description: string = null;
	public hubKey: number = 0;
	public createDate: Date = null;
	public updateDate: Date = null;
	public isValid: boolean = true;
}

export class DexihDatajob{
	public failAction: eFailAction = null;
	public auditConnectionKey: number = null;
	public fileWatch: boolean = false;
	public autoStart: boolean = false;
	public dexihDatalinkSteps: DexihDatalinkStep[] = [];
	public dexihTriggers: DexihTrigger[] = [];
	public parameters: DexihDatajobParameter[] = [];
	public key: number = 0;
	public name: string = null;
	public description: string = null;
	public hubKey: number = 0;
	public createDate: Date = null;
	public updateDate: Date = null;
	public isValid: boolean = true;
}

export class DexihDatajobParameter{
	public datajobKey: number = 0;
	public value: string = null;
	public key: number = 0;
	public name: string = null;
	public description: string = null;
	public hubKey: number = 0;
	public createDate: Date = null;
	public updateDate: Date = null;
	public isValid: boolean = true;
}

export class DexihDatalink{
	public sourceDatalinkTableKey: number = 0;
	public auditConnectionKey: number = null;
	public updateStrategy: eUpdateStrategy = eUpdateStrategy.Reload;
	public loadStrategy: eTransformWriterMethod = null;
	public datalinkType: eDatalinkType = null;
	public rowsPerCommit: number = 0;
	public rowsPerProgress: number = 0;
	public rollbackOnFail: boolean = false;
	public isQuery: boolean = false;
	public maxRows: number = 0;
	public addDefaultRow: boolean = false;
	public profileTableName: string = null;
	public isShared: boolean = false;
	public entityStatus: EntityStatus = new EntityStatus();
	public dexihDatalinkProfiles: DexihDatalinkProfile[] = [];
	public dexihDatalinkTransforms: DexihDatalinkTransform[] = [];
	public dexihDatalinkTargets: DexihDatalinkTarget[] = [];
	public parameters: DexihDatalinkParameter[] = [];
	public sourceDatalinkTable: DexihDatalinkTable = null;
	public key: number = 0;
	public name: string = null;
	public description: string = null;
	public hubKey: number = 0;
	public createDate: Date = null;
	public updateDate: Date = null;
	public isValid: boolean = true;
}

export class DexihDatalinkColumn{
	public key: number = 0;
	public datalinkTableKey: number = null;
	public childColumns: DexihDatalinkColumn[] = [];
	public position: number = 0;
	public logicalName: string = null;
	public columnGroup: string = null;
	public dataType: eTypeCode = eTypeCode.Unknown;
	public maxLength: number = null;
	public precision: number = null;
	public isUnicode: boolean = null;
	public scale: number = null;
	public allowDbNull: boolean = false;
	public deltaType: eDeltaType = null;
	public defaultValue: string = null;
	public isUnique: boolean = false;
	public isMandatory: boolean = false;
	public isIncrementalUpdate: boolean = false;
	public isInput: boolean = false;
	public rank: number = 0;
	public securityFlag: eSecurityFlag = null;
	public name: string = null;
	public description: string = null;
	public hubKey: number = 0;
	public createDate: Date = null;
	public updateDate: Date = null;
	public isValid: boolean = true;
}

export class DexihDatalinkDependency{
	public datalinkStepKey: number = 0;
	public dependentDatalinkStepKey: number = 0;
	public key: number = 0;
	public name: string = null;
	public description: string = null;
	public hubKey: number = 0;
	public createDate: Date = null;
	public updateDate: Date = null;
	public isValid: boolean = true;
}

export class DexihDatalinkParameter{
	public datalinkKey: number = 0;
	public value: string = null;
	public key: number = 0;
	public name: string = null;
	public description: string = null;
	public hubKey: number = 0;
	public createDate: Date = null;
	public updateDate: Date = null;
	public isValid: boolean = true;
}

export class DexihDatalinkProfile{
	public datalinkKey: number = 0;
	public functionClassName: string = null;
	public functionAssemblyName: string = null;
	public functionMethodName: string = null;
	public detailedResults: boolean = false;
	public key: number = 0;
	public name: string = null;
	public description: string = null;
	public hubKey: number = 0;
	public createDate: Date = null;
	public updateDate: Date = null;
	public isValid: boolean = true;
}

export class DexihDatalinkStep{
	public datajobKey: number = 0;
	public datalinkKey: number = null;
	public dexihDatalinkStepColumns: DexihDatalinkStepColumn[] = [];
	public dexihDatalinkDependencies: DexihDatalinkDependency[] = [];
	public parameters: DexihDatalinkStepParameter[] = [];
	public key: number = 0;
	public name: string = null;
	public description: string = null;
	public hubKey: number = 0;
	public createDate: Date = null;
	public updateDate: Date = null;
	public isValid: boolean = true;
}

export class DexihDatalinkStepColumn{
	public datalinkStepKey: number = 0;
	public position: number = 0;
	public logicalName: string = null;
	public columnGroup: string = null;
	public dataType: eTypeCode = eTypeCode.Unknown;
	public maxLength: number = null;
	public precision: number = null;
	public isUnicode: boolean = null;
	public scale: number = null;
	public allowDbNull: boolean = false;
	public deltaType: eDeltaType = null;
	public defaultValue: string = null;
	public isUnique: boolean = false;
	public isMandatory: boolean = false;
	public isIncrementalUpdate: boolean = false;
	public isInput: boolean = false;
	public rank: number = 0;
	public securityFlag: eSecurityFlag = null;
	public key: number = 0;
	public name: string = null;
	public description: string = null;
	public hubKey: number = 0;
	public createDate: Date = null;
	public updateDate: Date = null;
	public isValid: boolean = true;
}

export class DexihDatalinkStepParameter{
	public datalinkStepKey: number = 0;
	public value: string = null;
	public key: number = 0;
	public name: string = null;
	public description: string = null;
	public hubKey: number = 0;
	public createDate: Date = null;
	public updateDate: Date = null;
	public isValid: boolean = true;
}

export class DexihDatalinkTable{
	public sourceTableKey: number = null;
	public sourceDatalinkKey: number = null;
	public rowsStartAt: number = null;
	public rowsEndAt: number = null;
	public rowsIncrement: number = null;
	public sourceType: eSourceType = null;
	public dexihDatalinkColumns: DexihDatalinkColumn[] = [];
	public key: number = 0;
	public name: string = null;
	public description: string = null;
	public hubKey: number = 0;
	public createDate: Date = null;
	public updateDate: Date = null;
	public isValid: boolean = true;
}

export class DexihDatalinkTarget{
	public datalinkKey: number = 0;
	public nodeDatalinkColumnKey: number = null;
	public nodeDatalinkColumn: DexihDatalinkColumn = null;
	public position: number = 0;
	public tableKey: number = 0;
	public key: number = 0;
	public name: string = null;
	public description: string = null;
	public hubKey: number = 0;
	public createDate: Date = null;
	public updateDate: Date = null;
	public isValid: boolean = true;
}

export class DexihDatalinkTest{
	public auditConnectionKey: number = null;
	public dexihDatalinkTestSteps: DexihDatalinkTestStep[] = [];
	public key: number = 0;
	public name: string = null;
	public description: string = null;
	public hubKey: number = 0;
	public createDate: Date = null;
	public updateDate: Date = null;
	public isValid: boolean = true;
}

export class DexihDatalinkTestStep{
	public position: number = 0;
	public datalinkTestKey: number = 0;
	public datalinkKey: number = 0;
	public targetConnectionKey: number = 0;
	public targetTableName: string = null;
	public targetSchema: string = null;
	public expectedConnectionKey: number = 0;
	public expectedTableName: string = null;
	public expectedSchema: string = null;
	public dexihDatalinkTestTables: DexihDatalinkTestTable[] = [];
	public key: number = 0;
	public name: string = null;
	public description: string = null;
	public hubKey: number = 0;
	public createDate: Date = null;
	public updateDate: Date = null;
	public isValid: boolean = true;
}

export class DexihDatalinkTestTable{
	public datalinkTestStepKey: number = 0;
	public action: eTestTableAction = null;
	public tableKey: number = 0;
	public sourceConnectionKey: number = 0;
	public sourceSchema: string = null;
	public sourceTableName: string = null;
	public testConnectionKey: number = 0;
	public testSchema: string = null;
	public testTableName: string = null;
	public key: number = 0;
	public name: string = null;
	public description: string = null;
	public hubKey: number = 0;
	public createDate: Date = null;
	public updateDate: Date = null;
	public isValid: boolean = true;
}

export class DexihDatalinkTransform{
	public datalinkKey: number = 0;
	public position: number = 0;
	public passThroughColumns: boolean = false;
	public joinDatalinkTableKey: number = null;
	public joinSortDatalinkColumnKey: number = null;
	public nodeDatalinkColumnKey: number = null;
	public transformType: eTransformType = null;
	public transformClassName: string = null;
	public transformAssemblyName: string = null;
	public joinDuplicateStrategy: eDuplicateStrategy = null;
	public entityStatus: EntityStatus = null;
	public dexihDatalinkTransformItems: DexihDatalinkTransformItem[] = [];
	public joinDatalinkTable: DexihDatalinkTable = null;
	public joinSortDatalinkColumn: DexihDatalinkColumn = null;
	public nodeDatalinkColumn: DexihDatalinkColumn = null;
	public maxInputRows: number = 0;
	public maxOutputRows: number = 0;
	public key: number = 0;
	public name: string = null;
	public description: string = null;
	public hubKey: number = 0;
	public createDate: Date = null;
	public updateDate: Date = null;
	public isValid: boolean = true;
}

export class DexihDatalinkTransformItem{
	public datalinkTransformKey: number = 0;
	public position: number = 0;
	public transformItemType: eTransformItemType = null;
	public targetDatalinkColumnKey: number = null;
	public sourceDatalinkColumnKey: number = null;
	public joinDatalinkColumnKey: number = null;
	public filterDatalinkColumnKey: number = null;
	public sourceValue: string = null;
	public joinValue: string = null;
	public filterValue: string = null;
	public functionClassName: string = null;
	public functionAssemblyName: string = null;
	public functionMethodName: string = null;
	public isGeneric: boolean = false;
	public genericTypeCode: eTypeCode = null;
	public functionCaching: eFunctionCaching = null;
	public customFunctionKey: number = null;
	public sortDirection: eDirection = null;
	public filterCompare: eCompare = null;
	public aggregate: eAggregate = null;
	public seriesGrain: eSeriesGrain = null;
	public seriesFill: boolean = false;
	public seriesStart: string = null;
	public seriesFinish: string = null;
	public functionCode: string = null;
	public functionResultCode: string = null;
	public onError: eErrorAction = null;
	public onNull: eErrorAction = null;
	public notCondition: boolean = false;
	public invalidAction: eInvalidAction = null;
	public entityStatus: EntityStatus = null;
	public dexihFunctionParameters: DexihFunctionParameter[] = [];
	public sourceDatalinkColumn: DexihDatalinkColumn = null;
	public targetDatalinkColumn: DexihDatalinkColumn = null;
	public joinDatalinkColumn: DexihDatalinkColumn = null;
	public filterDatalinkColumn: DexihDatalinkColumn = null;
	public key: number = 0;
	public name: string = null;
	public description: string = null;
	public hubKey: number = 0;
	public createDate: Date = null;
	public updateDate: Date = null;
	public isValid: boolean = true;
}

export class DexihFileFormat{
	public isDefault: boolean = false;
	public matchHeaderRecord: boolean = true;
	public skipHeaderRows: number = 0;
	public allowComments: boolean = false;
	public bufferSize: number = 2048;
	public comment: string = "#";
	public delimiter: string = ",";
	public detectColumnCountChanges: boolean = false;
	public hasHeaderRecord: boolean = true;
	public ignoreHeaderWhiteSpace: boolean = false;
	public ignoreReadingExceptions: boolean = false;
	public ignoreQuotes: boolean = false;
	public quote: string = "\"";
	public quoteAllFields: boolean = false;
	public quoteNoFields: boolean = false;
	public skipEmptyRecords: boolean = false;
	public trimFields: boolean = false;
	public trimHeaders: boolean = false;
	public willThrowOnMissingField: boolean = true;
	public setWhiteSpaceCellsToNull: boolean = true;
	public key: number = 0;
	public name: string = null;
	public description: string = null;
	public hubKey: number = 0;
	public createDate: Date = null;
	public updateDate: Date = null;
	public isValid: boolean = true;
}

export class DexihFunctionArrayParameter{
	public functionParameterKey: number = 0;
	public datalinkColumnKey: number = null;
	public value: string = null;
	public listOfValues: string[] = [];
	public entityStatus: EntityStatus = null;
	public datalinkColumn: DexihDatalinkColumn = null;
	public position: number = 0;
	public direction: eParameterDirection = null;
	public dataType: eTypeCode = eTypeCode.Unknown;
	public isGeneric: boolean = false;
	public rank: number = 0;
	public key: number = 0;
	public name: string = null;
	public description: string = null;
	public hubKey: number = 0;
	public createDate: Date = null;
	public updateDate: Date = null;
	public isValid: boolean = true;
}

export class DexihFunctionParameter{
	public datalinkTransformItemKey: number = 0;
	public arrayParameters: DexihFunctionArrayParameter[] = [];
	public datalinkColumnKey: number = null;
	public value: string = null;
	public listOfValues: string[] = [];
	public entityStatus: EntityStatus = null;
	public datalinkColumn: DexihDatalinkColumn = null;
	public position: number = 0;
	public direction: eParameterDirection = null;
	public dataType: eTypeCode = eTypeCode.Unknown;
	public isGeneric: boolean = false;
	public rank: number = 0;
	public key: number = 0;
	public name: string = null;
	public description: string = null;
	public hubKey: number = 0;
	public createDate: Date = null;
	public updateDate: Date = null;
	public isValid: boolean = true;
}

export class DexihFunctionParameterBase{
	public datalinkColumnKey: number = null;
	public value: string = null;
	public listOfValues: string[] = [];
	public entityStatus: EntityStatus = null;
	public datalinkColumn: DexihDatalinkColumn = null;
	public position: number = 0;
	public direction: eParameterDirection = null;
	public dataType: eTypeCode = eTypeCode.Unknown;
	public isGeneric: boolean = false;
	public rank: number = 0;
	public key: number = 0;
	public name: string = null;
	public description: string = null;
	public hubKey: number = 0;
	public createDate: Date = null;
	public updateDate: Date = null;
	public isValid: boolean = true;
}

export class DexihHub{
	public hubKey: number = 0;
	public name: string = null;
	public description: string = null;
	public encryptionKey: string = null;
	public sharedAccess: eSharedAccess = null;
	public dexihConnections: DexihConnection[] = [];
	public dexihTables: DexihTable[] = [];
	public dexihDatajobs: DexihDatajob[] = [];
	public dexihDatalinks: DexihDatalink[] = [];
	public dexihHubUsers: DexihHubUser[] = [];
	public dexihFileFormats: DexihFileFormat[] = [];
	public dexihHubVariables: DexihHubVariable[] = [];
	public dexihDatalinkTests: DexihDatalinkTest[] = [];
	public dexihViews: DexihView[] = [];
	public dexihDashboards: DexihDashboard[] = [];
	public dexihApis: DexihApi[] = [];
	public dexihColumnValidations: DexihColumnValidation[] = [];
	public dexihCustomFunctions: DexihCustomFunction[] = [];
	public dexihRemoteAgentHubs: DexihRemoteAgentHub[] = [];
	public createDate: Date = null;
	public updateDate: Date = null;
	public isValid: boolean = true;
}

export class DexihHubEntity{
	public hubKey: number = 0;
	public createDate: Date = null;
	public updateDate: Date = null;
	public isValid: boolean = true;
}

export class DexihHubNamedEntity{
	public key: number = 0;
	public name: string = null;
	public description: string = null;
	public hubKey: number = 0;
	public createDate: Date = null;
	public updateDate: Date = null;
	public isValid: boolean = true;
}

export class DexihHubUser{
	public hubKey: number = 0;
	public userId: string = null;
	public permission: ePermission = null;
	public createDate: Date = null;
	public updateDate: Date = null;
	public isValid: boolean = true;
}

export class DexihHubVariable{
	public valueRaw: string = null;
	public value: string = null;
	public isEncrypted: boolean = false;
	public isEnvironmentVariable: boolean = false;
	public key: number = 0;
	public name: string = null;
	public description: string = null;
	public hubKey: number = 0;
	public createDate: Date = null;
	public updateDate: Date = null;
	public isValid: boolean = true;
}

export class DexihParameterBase{
	public position: number = 0;
	public direction: eParameterDirection = null;
	public dataType: eTypeCode = eTypeCode.Unknown;
	public isGeneric: boolean = false;
	public rank: number = 0;
	public key: number = 0;
	public name: string = null;
	public description: string = null;
	public hubKey: number = 0;
	public createDate: Date = null;
	public updateDate: Date = null;
	public isValid: boolean = true;
}

export class DexihRemoteAgent{
	public remoteAgentKey: number = 0;
	public name: string = null;
	public userId: string = null;
	public restrictIp: boolean = false;
	public allowExternalConnect: boolean = false;
	public ipAddresses: string[] = [];
	public remoteAgentId: string = null;
	public hashedToken: string = null;
	public lastLoginIpAddress: string = null;
	public lastLoginDateTime: Date = null;
	public activeAgents: DexihActiveAgent[] = [];
	public dexihRemoteAgentHubs: DexihRemoteAgentHub[] = [];
	public createDate: Date = null;
	public updateDate: Date = null;
	public isValid: boolean = true;
}

export class DexihRemoteAgentHub{
	public remoteAgentHubKey: number = 0;
	public remoteAgentKey: number = 0;
	public isDefault: boolean = false;
	public isAuthorized: boolean = false;
	public hubKey: number = 0;
	public createDate: Date = null;
	public updateDate: Date = null;
	public isValid: boolean = true;
}

export class DexihTable{
	public connectionKey: number = 0;
	public schema: string = null;
	public baseTableName: string = null;
	public logicalName: string = null;
	public tableType: eTableType = null;
	public sourceConnectionName: string = null;
	public fileFormatKey: number = null;
	public rejectedTableName: string = null;
	public useQuery: boolean = false;
	public queryString: string = null;
	public rowPath: string = null;
	public formatType: eTypeCode = eTypeCode.Json;
	public sortColumnKeys: number[] = [];
	public autoManageFiles: boolean = false;
	public useCustomFilePaths: boolean = false;
	public fileRootPath: string = null;
	public fileIncomingPath: string = null;
	public fileOutgoingPath: string = null;
	public fileProcessedPath: string = null;
	public fileRejectedPath: string = null;
	public fileMatchPattern: string = null;
	public restfulUri: string = null;
	public maxImportLevels: number = 0;
	public isVersioned: boolean = false;
	public isShared: boolean = false;
	public entityStatus: EntityStatus = new EntityStatus();
	public fileSample: string = null;
	public dexihTableColumns: DexihTableColumn[] = [];
	public key: number = 0;
	public name: string = null;
	public description: string = null;
	public hubKey: number = 0;
	public createDate: Date = null;
	public updateDate: Date = null;
	public isValid: boolean = true;
}

export class DexihTableColumn{
	public tableKey: number = null;
	public childColumns: DexihTableColumn[] = [];
	public columnValidationKey: number = null;
	public entityStatus: EntityStatus = null;
	public position: number = 0;
	public logicalName: string = null;
	public columnGroup: string = null;
	public dataType: eTypeCode = eTypeCode.Unknown;
	public maxLength: number = null;
	public precision: number = null;
	public isUnicode: boolean = null;
	public scale: number = null;
	public allowDbNull: boolean = false;
	public deltaType: eDeltaType = null;
	public defaultValue: string = null;
	public isUnique: boolean = false;
	public isMandatory: boolean = false;
	public isIncrementalUpdate: boolean = false;
	public isInput: boolean = false;
	public rank: number = 0;
	public securityFlag: eSecurityFlag = null;
	public key: number = 0;
	public name: string = null;
	public description: string = null;
	public hubKey: number = 0;
	public createDate: Date = null;
	public updateDate: Date = null;
	public isValid: boolean = true;
}

export class DexihTrigger{
	public datajobKey: number = 0;
	public startDate: Date = null;
	public intervalTime: any = null;
	public daysOfWeek: eDayOfWeek[] = [];
	public startTime: any = null;
	public endTime: any = null;
	public cronExpression: string = null;
	public maxRecurs: number = null;
	public key: number = 0;
	public name: string = null;
	public description: string = null;
	public hubKey: number = 0;
	public createDate: Date = null;
	public updateDate: Date = null;
	public isValid: boolean = true;
}

export class DexihView{
	public viewType: eViewType = null;
	public sourceTableKey: number = null;
	public sourceDatalinkKey: number = null;
	public sourceType: eDataObjectType = null;
	public autoRefresh: boolean = false;
	public inputValues: InputColumn[] = [];
	public selectQuery: SelectQuery = null;
	public chartConfig: ChartConfig = null;
	public isShared: boolean = false;
	public parameters: DexihViewParameter[] = [];
	public key: number = 0;
	public name: string = null;
	public description: string = null;
	public hubKey: number = 0;
	public createDate: Date = null;
	public updateDate: Date = null;
	public isValid: boolean = true;
}

export class DexihViewParameter{
	public viewKey: number = 0;
	public value: string = null;
	public key: number = 0;
	public name: string = null;
	public description: string = null;
	public hubKey: number = 0;
	public createDate: Date = null;
	public updateDate: Date = null;
	public isValid: boolean = true;
}

export class DownloadData{
	public transformSettings: TransformSettings = null;
	public cache: CacheManager = null;
	public downloadObjects: DownloadObject[] = [];
	public downloadFormat: eDownloadFormat = null;
	public zipFiles: boolean = false;
}

export class DownloadObject{
	public objectType: eDataObjectType = null;
	public objectKey: number = 0;
	public query: SelectQuery = null;
	public inputParameters: InputParameter[] = [];
	public inputColumns: InputColumn[] = [];
	public datalinkTransformKey: number = null;
}

export class DownloadUrl{
	public url: string = null;
	public downloadUrlType: eDownloadUrlType = null;
	public isEncrypted: boolean = false;
}

export class EntityStatus{
	public lastStatus: eStatus = eStatus.None;
	public message: string = "";
	public isBusy: boolean = false;
}

export class FileConfiguration{
	public matchHeaderRecord: boolean = true;
	public skipHeaderRows: number = 0;
	public setWhiteSpaceCellsToNull: boolean = true;
}

export class Filter{
	public column1: TableColumn = null;
	public value1: any = null;
	public compareDataType: eTypeCode = eTypeCode.Unknown;
	public column2: TableColumn = null;
	public value2: any = null;
	public operator: eCompare = eCompare.IsEqual;
	public andOr: eAndOr = null;
}

export class FlatFile{
	public autoManageFiles: boolean = false;
	public useCustomFilePaths: boolean = false;
	public fileRootPath: string = null;
	public fileIncomingPath: string = "";
	public fileOutgoingPath: string = "";
	public fileProcessedPath: string = "";
	public fileRejectedPath: string = "";
	public fileMatchPattern: string = null;
	public formatType: eTypeCode = eTypeCode.Unknown;
	public fileConfiguration: FileConfiguration = new FileConfiguration();
	public fileSample: string = null;
	public rowPath: string = null;
	public name: string = null;
	public schema: string = null;
	public sourceConnectionName: string = null;
	public logicalName: string = null;
	public description: string = null;
	public baseTableName: string = null;
	public tableType: eTableType = null;
	public isVersioned: boolean = false;
	public useQuery: boolean = false;
	public queryString: string = null;
	public outputSortFields: Sort[] = [];
	public columns: TableColumn[] = [];
	public maxImportLevels: number = 10;
}

export class FunctionParameter{
	public parameterName: string = null;
	public name: string = null;
	public description: string = null;
	public isGeneric: boolean = false;
	public dataType: eTypeCode = eTypeCode.Unknown;
	public allowNull: boolean = false;
	public rank: number = 0;
	public isIndex: boolean = false;
	public linkedName: string = null;
	public linkedDescription: string = null;
	public isLabel: boolean = false;
	public listOfValues: string[] = [];
	public defaultValue: string = null;
}

export class FunctionReference{
	public functionType: eFunctionType = null;
	public category: string = null;
	public name: string = null;
	public description: string = null;
	public functionAssemblyName: string = null;
	public functionClassName: string = null;
	public functionMethodName: string = null;
	public resultMethodName: string = null;
	public resetMethodName: string = null;
	public importMethodName: string = null;
	public genericType: eGenericType = null;
	public genericTypeDefault: eTypeCode = eTypeCode.Unknown;
	public compare: eCompare = eCompare.IsEqual;
	public isStandardFunction: boolean = false;
	public returnParameters: FunctionParameter[] = [];
	public inputParameters: FunctionParameter[] = [];
	public outputParameters: FunctionParameter[] = [];
	public resultReturnParameters: FunctionParameter[] = [];
	public resultInputParameters: FunctionParameter[] = [];
	public resultOutputParameters: FunctionParameter[] = [];
}

export class Import{
	public hubKey: number = 0;
	public hubVariables: ImportObject<DexihHubVariable>[] = [];
	public datajobs: ImportObject<DexihDatajob>[] = [];
	public datalinks: ImportObject<DexihDatalink>[] = [];
	public connections: ImportObject<DexihConnection>[] = [];
	public tables: ImportObject<DexihTable>[] = [];
	public columnValidations: ImportObject<DexihColumnValidation>[] = [];
	public fileFormats: ImportObject<DexihFileFormat>[] = [];
	public customFunctions: ImportObject<DexihCustomFunction>[] = [];
	public remoteAgentHubs: ImportObject<DexihRemoteAgentHub>[] = [];
	public datalinkTests: ImportObject<DexihDatalinkTest>[] = [];
	public views: ImportObject<DexihView>[] = [];
	public apis: ImportObject<DexihApi>[] = [];
	public dashboards: ImportObject<DexihDashboard>[] = [];
	public warnings: string[] = [];
}

export class ImportAction{
	public objectType: eSharedObjectType = null;
	public action: eImportAction = null;
}

export class ImportObject<T>{
	public item: T = null;
	public importAction: eImportAction = null;
}

export class InputColumn{
	public datalinkKey: number = 0;
	public datalinkName: string = null;
	public name: string = null;
	public logicalName: string = null;
	public dataType: eTypeCode = eTypeCode.Unknown;
	public rank: number = 0;
	public value: any = null;
	public defaultValue: any = null;
}

export class InputParameter{
	public name: string = null;
	public value: string = null;
}

export class InputParameterBase{
	public value: string = null;
	public key: number = 0;
	public name: string = null;
	public description: string = null;
	public hubKey: number = 0;
	public createDate: Date = null;
	public updateDate: Date = null;
	public isValid: boolean = true;
}

export class InputParameters{
}

export class InsertQuery{
	public insertColumns: QueryColumn[] = [];
}

export class LoggingSection{
	public includeScopes: boolean = false;
	public logLevel: LogLevelSection = new LogLevelSection();
	public logFilePath: string = null;
}

export class LogLevelSection{
	public default: logLevel = logLevel.Information;
	public system: logLevel = logLevel.Information;
	public microsoft: logLevel = logLevel.Information;
}

export class NamingStandard{
	public name: string = null;
	public value: string = null;
}

export class NamingStandards{
}

export class NetworkSection{
	public externalDownloadUrl: string = null;
	public localIpAddress: string = null;
	public localPort: number = null;
	public proxyUrl: string = null;
	public downloadPort: number = 33944;
	public enforceHttps: boolean = true;
	public autoGenerateCertificate: boolean = true;
	public dynamicDomain: string = "dexih.com";
	public certificateFilename: string = null;
	public certificatePassword: string = null;
	public enableUPnP: boolean = true;
}

export class ParameterArray{
	public value: any = null;
	public name: string = null;
	public dataType: eTypeCode = eTypeCode.Unknown;
	public rank: number = 0;
}

export class ParameterColumn{
	public name: string = null;
	public dataType: eTypeCode = eTypeCode.Unknown;
	public rank: number = 0;
	public value: any = null;
}

export class ParameterJoinColumn{
	public name: string = null;
	public dataType: eTypeCode = eTypeCode.Unknown;
	public rank: number = 0;
	public value: any = null;
}

export class ParameterOutputColumn{
	public name: string = null;
	public dataType: eTypeCode = eTypeCode.Unknown;
	public rank: number = 0;
	public value: any = null;
}

export class Parameters{
}

export class ParameterValue{
	public name: string = null;
	public dataType: eTypeCode = eTypeCode.Unknown;
	public rank: number = 0;
	public value: any = null;
}

export class PermissionsSection{
	public allowLocalFiles: boolean = true;
	public allowAllPaths: boolean = false;
	public allowedPaths: string[] = [];
	public allowAllHubs: boolean = true;
	public allowedHubs: number[] = [];
}

export class PrivacySection{
	public allowDataDownload: boolean = true;
	public allowDataUpload: boolean = true;
	public allowLanAccess: boolean = true;
	public allowExternalAccess: boolean = true;
	public allowProxy: boolean = true;
}

export class QueryColumn{
	public column: TableColumn = null;
	public value: any = null;
}

export class RemoteAgentProperties{
	public name: string = null;
	public ipAddress: string = null;
	public securityToken: string = null;
	public remoteAgentKey: number = 0;
	public encryptionKey: string = null;
	public userId: string = null;
	public connectionId: string = null;
}

export class RemoteLibraries{
	public functions: FunctionReference[] = [];
	public connections: ConnectionReference[] = [];
	public transforms: TransformReference[] = [];
}

export class RemoteMessage{
	public messageId: string = null;
	public securityToken: string = null;
	public method: string = null;
	public hubKey: number = 0;
	public timeOut: number = null;
	public hubVariables: DexihHubVariable[] = [];
}

export class RemoteSettings{
	public appSettings: AppSettingsSection = new AppSettingsSection();
	public systemSettings: SystemSettingsSection = new SystemSettingsSection();
	public logging: LoggingSection = new LoggingSection();
	public runtime: RuntimeSection = new RuntimeSection();
	public network: NetworkSection = new NetworkSection();
	public privacy: PrivacySection = new PrivacySection();
	public permissions: PermissionsSection = new PermissionsSection();
	public namingStandards: NamingStandard[] = [];
}

export class ResponseMessage{
	public messageId: string = null;
	public securityToken: string = null;
	public method: string = null;
	public hubKey: number = 0;
	public timeOut: number = null;
	public hubVariables: DexihHubVariable[] = [];
}

export class RuntimeSection{
	public configDirectory: string = null;
	public appSettingsPath: string = null;
	public password: string = null;
	public localIpAddress: string = null;
	public externalIpAddress: string = null;
	public defaultProxyUrl: string = null;
	public remoteAgentKey: number = 0;
	public user: ApplicationUser = null;
	public userHash: string = null;
	public version: string = null;
	public latestVersion: string = null;
	public latestDownloadUrl: string = null;
	public generateUserToken: boolean = false;
	public saveSettings: boolean = false;
	public doUpgrade: boolean = false;
}

export class SelectColumn{
	public column: TableColumn = null;
	public aggregate: eAggregate = null;
}

export class SelectQuery{
	public columns: SelectColumn[] = [];
	public table: string = null;
	public filters: Filter[] = [];
	public sorts: Sort[] = [];
	public groups: TableColumn[] = [];
	public rows: number = -1;
	public inputColumns: TableColumn[] = [];
	public fileName: string = null;
	public path: eFlatFilePath = null;
}

export class SharedData{
	public hubKey: number = 0;
	public hubName: string = null;
	public objectType: eDataObjectType = null;
	public objectKey: number = 0;
	public name: string = null;
	public logicalName: string = null;
	public description: string = null;
	public updateDate: Date = null;
	public inputColumns: InputColumn[] = [];
	public parameters: InputParameterBase[] = [];
	public query: SelectQuery = null;
	public outputColumns: DexihColumnBase[] = [];
}

export class Sort{
	public column: TableColumn = null;
	public direction: eDirection = null;
}

export class Sorts{
}

export class SystemSettingsSection{
	public maxAcknowledgeWait: number = 5000;
	public responseTimeout: number = 1000000;
	public cancelDelay: number = 1000;
	public encryptionIterations: number = 1000;
	public maxPreviewDuration: number = 10000;
	public maxConcurrentTasks: number = 50;
	public maxUploadSize: number = 1000000000;
	public socketTransportType: string = "WebSockets";
}

export class Table{
	public name: string = null;
	public schema: string = null;
	public sourceConnectionName: string = null;
	public logicalName: string = null;
	public description: string = null;
	public baseTableName: string = null;
	public tableType: eTableType = null;
	public isVersioned: boolean = false;
	public useQuery: boolean = false;
	public queryString: string = null;
	public outputSortFields: Sort[] = [];
	public columns: TableColumn[] = [];
	public maxImportLevels: number = 10;
}

export class TableColumn{
	public referenceTable: string = null;
	public name: string = null;
	public logicalName: string = null;
	public description: string = null;
	public dataType: eTypeCode = eTypeCode.Unknown;
	public maxLength: number = null;
	public columnGroup: string = null;
	public rank: number = 0;
	public baseDataType: eTypeCode = eTypeCode.Unknown;
	public baseMaxLength: number = null;
	public precision: number = null;
	public scale: number = null;
	public allowDbNull: boolean = false;
	public deltaType: eDeltaType = null;
	public isUnicode: boolean = null;
	public defaultValue: any = null;
	public isUnique: boolean = false;
	public isMandatory: boolean = false;
	public securityFlag: eSecurityFlag = eSecurityFlag.None;
	public isInput: boolean = false;
	public isIncrementalUpdate: boolean = false;
	public isParent: boolean = false;
	public childColumns: TableColumn[] = [];
}

export class TableColumns{
}

export class TransformAttribute{
	public transformType: eTransformType = null;
	public name: string = null;
	public description: string = null;
}

export class TransformPerformance{
	public transformName: string = null;
	public action: string = null;
	public rows: number = 0;
	public seconds: number = 0;
	public children: TransformPerformance[] = [];
}

export class TransformProperties{
	public name: string = null;
	public transformType: eTransformType = null;
	public transformName: string = null;
	public selectQuery: SelectQuery = null;
	public properties: any[] = [];
	public rows: number = 0;
	public seconds: number = 0;
	public primaryProperties: TransformProperties = null;
	public referenceProperties: TransformProperties = null;
}

export class TransformReference{
	public transformClassName: string = null;
	public transformAssemblyName: string = null;
	public transformType: eTransformType = null;
	public name: string = null;
	public description: string = null;
}

export class TransformSettings{
	public hubVariables: DexihHubVariable[] = [];
	public inputParameters: InputParameterBase[] = [];
	public remoteSettings: RemoteSettings = null;
}

export class TransformWriterResult{
	public transformWriterOptions: any = null;
	public auditKey: number = 0;
	public auditType: string = null;
	public referenceKey: number = 0;
	public parentAuditKey: number = 0;
	public referenceName: string = null;
	public sourceTableKey: number = 0;
	public sourceTableName: string = null;
	public targetTableKey: number = 0;
	public targetTableName: string = null;
	public hubKey: number = 0;
	public auditConnectionKey: number = 0;
	public lastRowTotal: number = 0;
	public lastMaxIncrementalValue: any = null;
	public rowsPerProgressEvent: number = 1000;
	public rowsTotal: number = 0;
	public rowsCreated: number = 0;
	public rowsUpdated: number = 0;
	public rowsDeleted: number = 0;
	public rowsPreserved: number = 0;
	public rowsIgnored: number = 0;
	public rowsRejected: number = 0;
	public rowsFiltered: number = 0;
	public rowsSorted: number = 0;
	public rowsReadPrimary: number = 0;
	public rowsReadReference: number = 0;
	public passed: number = 0;
	public failed: number = 0;
	public readTicks: number = 0;
	public writeTicks: number = 0;
	public processingTicks: number = 0;
	public maxIncrementalValue: any = null;
	public maxSurrogateKey: number = 0;
	public message: string = null;
	public exceptionDetails: string = null;
	public initializeTime: Date = null;
	public scheduledTime: Date = null;
	public startTime: Date = null;
	public endTime: Date = null;
	public lastUpdateTime: Date = null;
	public triggerMethod: eTriggerMethod = null;
	public triggerInfo: string = null;
	public performanceSummary: TransformPerformance[] = [];
	public profileTableName: string = null;
	public rejectTableName: string = null;
	public isCurrent: boolean = true;
	public isPrevious: boolean = false;
	public isPreviousSuccess: boolean = false;
	public childResults: TransformWriterResult[] = [];
	public runStatus: eRunStatus = eRunStatus.Initialised;
}

export class UpdateQuery{
	public updateColumns: QueryColumn[] = [];
	public filters: Filter[] = [];
}

export class WebService{
	public restfulUri: string = null;
	public rowPath: string = null;
	public formatType: eTypeCode = eTypeCode.Json;
	public fileConfiguration: FileConfiguration = new FileConfiguration();
	public name: string = null;
	public schema: string = null;
	public sourceConnectionName: string = null;
	public logicalName: string = null;
	public description: string = null;
	public baseTableName: string = null;
	public tableType: eTableType = null;
	public isVersioned: boolean = false;
	public useQuery: boolean = false;
	public queryString: string = null;
	public outputSortFields: Sort[] = [];
	public columns: TableColumn[] = [];
	public maxImportLevels: number = 10;
}

// auto generated enums

export enum eAggregate{
	Sum = 1,
	Average = 2,
	Min = 3,
	Max = 4,
	Count = 5,
	First = 6,
	Last = 7,
}

export const eAggregateItems = [
	{key: 0, name: 'Unknown', description: 'Unknown'},
	{key: eAggregate.Sum, name: 'Sum', description: ''},
	{key: eAggregate.Average, name: 'Average', description: ''},
	{key: eAggregate.Min, name: 'Min', description: ''},
	{key: eAggregate.Max, name: 'Max', description: ''},
	{key: eAggregate.Count, name: 'Count', description: ''},
	{key: eAggregate.First, name: 'First', description: ''},
	{key: eAggregate.Last, name: 'Last', description: ''},
]

export enum eAndOr{
	And = 1,
	Or = 2,
}

export const eAndOrItems = [
	{key: 0, name: 'Unknown', description: 'Unknown'},
	{key: eAndOr.And, name: 'And', description: ''},
	{key: eAndOr.Or, name: 'Or', description: ''},
]

export enum eApiStatus{
	Activated = 1,
	Deactivated = 2,
}

export const eApiStatusItems = [
	{key: 0, name: 'Unknown', description: 'Unknown'},
	{key: eApiStatus.Activated, name: 'Activated', description: ''},
	{key: eApiStatus.Deactivated, name: 'Deactivated', description: ''},
]

export enum eChartType{
	BarVertical = 1,
	BarHorizontal = 2,
	BarVertical2D = 3,
	BarHorizontal2D = 4,
	BarVerticalStacked = 5,
	BarHorizontalStacked = 6,
	BarVerticalNormalized = 7,
	BarHorizontalNormalized = 8,
	Pie = 9,
	PieAdvanced = 10,
	PieGrid = 11,
	Line = 12,
	Area = 13,
	Polar = 14,
	AreaStacked = 15,
	AreaNormalized = 16,
	Scatter = 17,
	Error = 18,
	Bubble = 19,
	ForceDirected = 20,
	HeatMap = 21,
	TreeMap = 22,
	Cards = 23,
	Gauge = 24,
	LinearGauge = 25,
	Map = 26,
}

export const eChartTypeItems = [
	{key: 0, name: 'Unknown', description: 'Unknown'},
	{key: eChartType.BarVertical, name: 'BarVertical', description: ''},
	{key: eChartType.BarHorizontal, name: 'BarHorizontal', description: ''},
	{key: eChartType.BarVertical2D, name: 'BarVertical2D', description: ''},
	{key: eChartType.BarHorizontal2D, name: 'BarHorizontal2D', description: ''},
	{key: eChartType.BarVerticalStacked, name: 'BarVerticalStacked', description: ''},
	{key: eChartType.BarHorizontalStacked, name: 'BarHorizontalStacked', description: ''},
	{key: eChartType.BarVerticalNormalized, name: 'BarVerticalNormalized', description: ''},
	{key: eChartType.BarHorizontalNormalized, name: 'BarHorizontalNormalized', description: ''},
	{key: eChartType.Pie, name: 'Pie', description: ''},
	{key: eChartType.PieAdvanced, name: 'PieAdvanced', description: ''},
	{key: eChartType.PieGrid, name: 'PieGrid', description: ''},
	{key: eChartType.Line, name: 'Line', description: ''},
	{key: eChartType.Area, name: 'Area', description: ''},
	{key: eChartType.Polar, name: 'Polar', description: ''},
	{key: eChartType.AreaStacked, name: 'AreaStacked', description: ''},
	{key: eChartType.AreaNormalized, name: 'AreaNormalized', description: ''},
	{key: eChartType.Scatter, name: 'Scatter', description: ''},
	{key: eChartType.Error, name: 'Error', description: ''},
	{key: eChartType.Bubble, name: 'Bubble', description: ''},
	{key: eChartType.ForceDirected, name: 'ForceDirected', description: ''},
	{key: eChartType.HeatMap, name: 'HeatMap', description: ''},
	{key: eChartType.TreeMap, name: 'TreeMap', description: ''},
	{key: eChartType.Cards, name: 'Cards', description: ''},
	{key: eChartType.Gauge, name: 'Gauge', description: ''},
	{key: eChartType.LinearGauge, name: 'LinearGauge', description: ''},
	{key: eChartType.Map, name: 'Map', description: ''},
]

export enum eCleanAction{
	DefaultValue = 1,
	Truncate = 2,
	Blank = 3,
	Null = 4,
	OriginalValue = 5,
	CleanValue = 6,
}

export const eCleanActionItems = [
	{key: 0, name: 'Unknown', description: 'Unknown'},
	{key: eCleanAction.DefaultValue, name: 'DefaultValue', description: ''},
	{key: eCleanAction.Truncate, name: 'Truncate', description: ''},
	{key: eCleanAction.Blank, name: 'Blank', description: ''},
	{key: eCleanAction.Null, name: 'Null', description: ''},
	{key: eCleanAction.OriginalValue, name: 'OriginalValue', description: ''},
	{key: eCleanAction.CleanValue, name: 'CleanValue', description: ''},
]

export enum eCompare{
	IsEqual = 0,
	GreaterThan = 1,
	GreaterThanEqual = 2,
	LessThan = 3,
	LessThanEqual = 4,
	NotEqual = 5,
	IsIn = 6,
	IsNull = 7,
	IsNotNull = 8,
	Like = 9,
}

export const eCompareItems = [
	{key: eCompare.IsEqual, name: 'IsEqual', description: ''},
	{key: eCompare.GreaterThan, name: 'GreaterThan', description: ''},
	{key: eCompare.GreaterThanEqual, name: 'GreaterThanEqual', description: ''},
	{key: eCompare.LessThan, name: 'LessThan', description: ''},
	{key: eCompare.LessThanEqual, name: 'LessThanEqual', description: ''},
	{key: eCompare.NotEqual, name: 'NotEqual', description: ''},
	{key: eCompare.IsIn, name: 'IsIn', description: ''},
	{key: eCompare.IsNull, name: 'IsNull', description: ''},
	{key: eCompare.IsNotNull, name: 'IsNotNull', description: ''},
	{key: eCompare.Like, name: 'Like', description: ''},
]

export enum eConnectionCategory{
	SqlDatabase = 1,
	NoSqlDatabase = 2,
	DatabaseFile = 3,
	File = 4,
	WebService = 5,
	Hub = 6,
}

export const eConnectionCategoryItems = [
	{key: 0, name: 'Unknown', description: 'Unknown'},
	{key: eConnectionCategory.SqlDatabase, name: 'SqlDatabase', description: ''},
	{key: eConnectionCategory.NoSqlDatabase, name: 'NoSqlDatabase', description: ''},
	{key: eConnectionCategory.DatabaseFile, name: 'DatabaseFile', description: ''},
	{key: eConnectionCategory.File, name: 'File', description: ''},
	{key: eConnectionCategory.WebService, name: 'WebService', description: ''},
	{key: eConnectionCategory.Hub, name: 'Hub', description: ''},
]

export enum eConnectionPurpose{
	Source = 1,
	Managed = 2,
	Target = 3,
	Internal = 4,
}

export const eConnectionPurposeItems = [
	{key: 0, name: 'Unknown', description: 'Unknown'},
	{key: eConnectionPurpose.Source, name: 'Source', description: ''},
	{key: eConnectionPurpose.Managed, name: 'Managed', description: ''},
	{key: eConnectionPurpose.Target, name: 'Target', description: ''},
	{key: eConnectionPurpose.Internal, name: 'Internal', description: ''},
]

export enum eDatalinkType{
	General = 1,
	Stage = 2,
	Validate = 3,
	Transform = 4,
	Deliver = 5,
	Publish = 6,
	Share = 7,
	Query = 8,
}

export const eDatalinkTypeItems = [
	{key: 0, name: 'Unknown', description: 'Unknown'},
	{key: eDatalinkType.General, name: 'General', description: 'Non-categorized general purpose datalink'},
	{key: eDatalinkType.Stage, name: 'Stage', description: 'Staging - loads data into a central/interim database'},
	{key: eDatalinkType.Validate, name: 'Validate', description: 'Validate - performs data validation and cleaning'},
	{key: eDatalinkType.Transform, name: 'Transform', description: 'Transform - reshapes, aggregates data'},
	{key: eDatalinkType.Deliver, name: 'Deliver', description: 'Deliver - prepares data for delivering to a system/database'},
	{key: eDatalinkType.Publish, name: 'Publish', description: 'Publish - sends data to a target system/database'},
	{key: eDatalinkType.Share, name: 'Share', description: 'Share - datalink designed to be shared with other users'},
	{key: eDatalinkType.Query, name: 'Query', description: 'Query - datalink query used for data extracts or as a source for other datalinks'},
]

export enum eDataObjectType{
	Table = 1,
	Datalink = 2,
	View = 3,
	Dashboard = 4,
	Api = 5,
}

export const eDataObjectTypeItems = [
	{key: 0, name: 'Unknown', description: 'Unknown'},
	{key: eDataObjectType.Table, name: 'Table', description: ''},
	{key: eDataObjectType.Datalink, name: 'Datalink', description: ''},
	{key: eDataObjectType.View, name: 'View', description: ''},
	{key: eDataObjectType.Dashboard, name: 'Dashboard', description: ''},
	{key: eDataObjectType.Api, name: 'Api', description: ''},
]

export enum eDataPrivacyStatus{
	NotAllowed = 1,
	Proxy = 2,
	Lan = 3,
	Internet = 4,
}

export const eDataPrivacyStatusItems = [
	{key: 0, name: 'Unknown', description: 'Unknown'},
	{key: eDataPrivacyStatus.NotAllowed, name: 'NotAllowed', description: ''},
	{key: eDataPrivacyStatus.Proxy, name: 'Proxy', description: ''},
	{key: eDataPrivacyStatus.Lan, name: 'Lan', description: ''},
	{key: eDataPrivacyStatus.Internet, name: 'Internet', description: ''},
]

export enum eDayOfWeek{
	Sunday = 1,
	Monday = 2,
	Tuesday = 3,
	Wednesday = 4,
	Thursday = 5,
	Friday = 6,
	Saturday = 7,
}

export const eDayOfWeekItems = [
	{key: 0, name: 'Unknown', description: 'Unknown'},
	{key: eDayOfWeek.Sunday, name: 'Sunday', description: ''},
	{key: eDayOfWeek.Monday, name: 'Monday', description: ''},
	{key: eDayOfWeek.Tuesday, name: 'Tuesday', description: ''},
	{key: eDayOfWeek.Wednesday, name: 'Wednesday', description: ''},
	{key: eDayOfWeek.Thursday, name: 'Thursday', description: ''},
	{key: eDayOfWeek.Friday, name: 'Friday', description: ''},
	{key: eDayOfWeek.Saturday, name: 'Saturday', description: ''},
]

export enum eDeltaType{
	AutoIncrement = 1,
	DbAutoIncrement = 2,
	SourceSurrogateKey = 3,
	ValidFromDate = 4,
	ValidToDate = 5,
	CreateDate = 6,
	UpdateDate = 7,
	CreateAuditKey = 8,
	UpdateAuditKey = 9,
	IsCurrentField = 10,
	Version = 11,
	NaturalKey = 12,
	TrackingField = 13,
	NonTrackingField = 14,
	IgnoreField = 15,
	ValidationStatus = 16,
	RejectedReason = 17,
	FileName = 18,
	FileRowNumber = 19,
	AzureRowKey = 20,
	AzurePartitionKey = 21,
	TimeStamp = 22,
	DatabaseOperation = 23,
	ResponseSuccess = 24,
	ResponseData = 25,
	ResponseStatus = 26,
	ResponseSegment = 27,
	Error = 28,
	Url = 29,
}

export const eDeltaTypeItems = [
	{key: 0, name: 'Unknown', description: 'Unknown'},
	{key: eDeltaType.AutoIncrement, name: 'AutoIncrement', description: ''},
	{key: eDeltaType.DbAutoIncrement, name: 'DbAutoIncrement', description: ''},
	{key: eDeltaType.SourceSurrogateKey, name: 'SourceSurrogateKey', description: ''},
	{key: eDeltaType.ValidFromDate, name: 'ValidFromDate', description: ''},
	{key: eDeltaType.ValidToDate, name: 'ValidToDate', description: ''},
	{key: eDeltaType.CreateDate, name: 'CreateDate', description: ''},
	{key: eDeltaType.UpdateDate, name: 'UpdateDate', description: ''},
	{key: eDeltaType.CreateAuditKey, name: 'CreateAuditKey', description: ''},
	{key: eDeltaType.UpdateAuditKey, name: 'UpdateAuditKey', description: ''},
	{key: eDeltaType.IsCurrentField, name: 'IsCurrentField', description: ''},
	{key: eDeltaType.Version, name: 'Version', description: ''},
	{key: eDeltaType.NaturalKey, name: 'NaturalKey', description: ''},
	{key: eDeltaType.TrackingField, name: 'TrackingField', description: ''},
	{key: eDeltaType.NonTrackingField, name: 'NonTrackingField', description: ''},
	{key: eDeltaType.IgnoreField, name: 'IgnoreField', description: ''},
	{key: eDeltaType.ValidationStatus, name: 'ValidationStatus', description: ''},
	{key: eDeltaType.RejectedReason, name: 'RejectedReason', description: ''},
	{key: eDeltaType.FileName, name: 'FileName', description: ''},
	{key: eDeltaType.FileRowNumber, name: 'FileRowNumber', description: ''},
	{key: eDeltaType.AzureRowKey, name: 'AzureRowKey', description: ''},
	{key: eDeltaType.AzurePartitionKey, name: 'AzurePartitionKey', description: ''},
	{key: eDeltaType.TimeStamp, name: 'TimeStamp', description: ''},
	{key: eDeltaType.DatabaseOperation, name: 'DatabaseOperation', description: ''},
	{key: eDeltaType.ResponseSuccess, name: 'ResponseSuccess', description: ''},
	{key: eDeltaType.ResponseData, name: 'ResponseData', description: ''},
	{key: eDeltaType.ResponseStatus, name: 'ResponseStatus', description: ''},
	{key: eDeltaType.ResponseSegment, name: 'ResponseSegment', description: ''},
	{key: eDeltaType.Error, name: 'Error', description: ''},
	{key: eDeltaType.Url, name: 'Url', description: ''},
]

export enum eDirection{
	Ascending = 1,
	Descending = 2,
}

export const eDirectionItems = [
	{key: 0, name: 'Unknown', description: 'Unknown'},
	{key: eDirection.Ascending, name: 'Ascending', description: ''},
	{key: eDirection.Descending, name: 'Descending', description: ''},
]

export enum eDownloadFormat{
	Csv = 1,
	Json = 2,
	JsonCompact = 3,
}

export const eDownloadFormatItems = [
	{key: 0, name: 'Unknown', description: 'Unknown'},
	{key: eDownloadFormat.Csv, name: 'Csv', description: ''},
	{key: eDownloadFormat.Json, name: 'Json', description: ''},
	{key: eDownloadFormat.JsonCompact, name: 'JsonCompact', description: ''},
]

export enum eDownloadUrlType{
	Proxy = 1,
	Direct = 2,
}

export const eDownloadUrlTypeItems = [
	{key: 0, name: 'Unknown', description: 'Unknown'},
	{key: eDownloadUrlType.Proxy, name: 'Proxy', description: ''},
	{key: eDownloadUrlType.Direct, name: 'Direct', description: ''},
]

export enum eDuplicateStrategy{
	Abend = 1,
	First = 2,
	Last = 3,
	All = 4,
}

export const eDuplicateStrategyItems = [
	{key: 0, name: 'Unknown', description: 'Unknown'},
	{key: eDuplicateStrategy.Abend, name: 'Abend', description: ''},
	{key: eDuplicateStrategy.First, name: 'First', description: ''},
	{key: eDuplicateStrategy.Last, name: 'Last', description: ''},
	{key: eDuplicateStrategy.All, name: 'All', description: ''},
]

export enum eErrorAction{
	Abend = 1,
	Null = 2,
	Ignore = 3,
	Execute = 4,
}

export const eErrorActionItems = [
	{key: 0, name: 'Unknown', description: 'Unknown'},
	{key: eErrorAction.Abend, name: 'Abend', description: ''},
	{key: eErrorAction.Null, name: 'Null', description: ''},
	{key: eErrorAction.Ignore, name: 'Ignore', description: ''},
	{key: eErrorAction.Execute, name: 'Execute', description: ''},
]

export enum eFailAction{
	Continue = 1,
	ContinueNonDependent = 2,
	Abend = 3,
}

export const eFailActionItems = [
	{key: 0, name: 'Unknown', description: 'Unknown'},
	{key: eFailAction.Continue, name: 'Continue', description: ''},
	{key: eFailAction.ContinueNonDependent, name: 'ContinueNonDependent', description: ''},
	{key: eFailAction.Abend, name: 'Abend', description: ''},
]

export enum eFlatFilePath{
	Incoming = 1,
	Outgoing = 2,
	Processed = 3,
	Rejected = 4,
	None = 5,
}

export const eFlatFilePathItems = [
	{key: 0, name: 'Unknown', description: 'Unknown'},
	{key: eFlatFilePath.Incoming, name: 'Incoming', description: ''},
	{key: eFlatFilePath.Outgoing, name: 'Outgoing', description: ''},
	{key: eFlatFilePath.Processed, name: 'Processed', description: ''},
	{key: eFlatFilePath.Rejected, name: 'Rejected', description: ''},
	{key: eFlatFilePath.None, name: 'None', description: ''},
]

export enum eFunctionCaching{
	NoCache = 1,
	EnableCache = 2,
	CallOnce = 3,
}

export const eFunctionCachingItems = [
	{key: 0, name: 'Unknown', description: 'Unknown'},
	{key: eFunctionCaching.NoCache, name: 'NoCache', description: ''},
	{key: eFunctionCaching.EnableCache, name: 'EnableCache', description: ''},
	{key: eFunctionCaching.CallOnce, name: 'CallOnce', description: ''},
]

export enum eFunctionType{
	Map = 1,
	Condition = 2,
	Aggregate = 3,
	Series = 4,
	Rows = 5,
	Validate = 6,
	Profile = 7,
	Sort = 8,
	JoinCondition = 9,
}

export const eFunctionTypeItems = [
	{key: 0, name: 'Unknown', description: 'Unknown'},
	{key: eFunctionType.Map, name: 'Map', description: ''},
	{key: eFunctionType.Condition, name: 'Condition', description: ''},
	{key: eFunctionType.Aggregate, name: 'Aggregate', description: ''},
	{key: eFunctionType.Series, name: 'Series', description: ''},
	{key: eFunctionType.Rows, name: 'Rows', description: ''},
	{key: eFunctionType.Validate, name: 'Validate', description: ''},
	{key: eFunctionType.Profile, name: 'Profile', description: ''},
	{key: eFunctionType.Sort, name: 'Sort', description: ''},
	{key: eFunctionType.JoinCondition, name: 'JoinCondition', description: ''},
]

export enum eGenericType{
	None = 1,
	Numeric = 2,
	All = 3,
	String = 4,
}

export const eGenericTypeItems = [
	{key: 0, name: 'Unknown', description: 'Unknown'},
	{key: eGenericType.None, name: 'None', description: ''},
	{key: eGenericType.Numeric, name: 'Numeric', description: ''},
	{key: eGenericType.All, name: 'All', description: ''},
	{key: eGenericType.String, name: 'String', description: ''},
]

export enum eImportAction{
	Replace = 1,
	New = 2,
	Leave = 3,
	Skip = 4,
	Delete = 5,
}

export const eImportActionItems = [
	{key: 0, name: 'Unknown', description: 'Unknown'},
	{key: eImportAction.Replace, name: 'Replace', description: ''},
	{key: eImportAction.New, name: 'New', description: ''},
	{key: eImportAction.Leave, name: 'Leave', description: ''},
	{key: eImportAction.Skip, name: 'Skip', description: ''},
	{key: eImportAction.Delete, name: 'Delete', description: ''},
]

export enum eInvalidAction{
	Pass = 1,
	Clean = 2,
	RejectClean = 3,
	Reject = 4,
	Discard = 5,
	Abend = 6,
}

export const eInvalidActionItems = [
	{key: 0, name: 'Unknown', description: 'Unknown'},
	{key: eInvalidAction.Pass, name: 'Pass', description: ''},
	{key: eInvalidAction.Clean, name: 'Clean', description: ''},
	{key: eInvalidAction.RejectClean, name: 'RejectClean', description: ''},
	{key: eInvalidAction.Reject, name: 'Reject', description: ''},
	{key: eInvalidAction.Discard, name: 'Discard', description: ''},
	{key: eInvalidAction.Abend, name: 'Abend', description: ''},
]

export enum eParameterDirection{
	Input = 1,
	Output = 2,
	ResultInput = 3,
	ResultOutput = 4,
	ReturnValue = 5,
	ResultReturnValue = 6,
	Join = 7,
}

export const eParameterDirectionItems = [
	{key: 0, name: 'Unknown', description: 'Unknown'},
	{key: eParameterDirection.Input, name: 'Input', description: ''},
	{key: eParameterDirection.Output, name: 'Output', description: ''},
	{key: eParameterDirection.ResultInput, name: 'ResultInput', description: ''},
	{key: eParameterDirection.ResultOutput, name: 'ResultOutput', description: ''},
	{key: eParameterDirection.ReturnValue, name: 'ReturnValue', description: ''},
	{key: eParameterDirection.ResultReturnValue, name: 'ResultReturnValue', description: ''},
	{key: eParameterDirection.Join, name: 'Join', description: ''},
]

export enum ePermission{
	Owner = 1,
	User = 2,
	FullReader = 3,
	PublishReader = 4,
	Suspended = 5,
	None = 6,
}

export const ePermissionItems = [
	{key: 0, name: 'Unknown', description: 'Unknown'},
	{key: ePermission.Owner, name: 'Owner', description: ''},
	{key: ePermission.User, name: 'User', description: ''},
	{key: ePermission.FullReader, name: 'FullReader', description: ''},
	{key: ePermission.PublishReader, name: 'PublishReader', description: ''},
	{key: ePermission.Suspended, name: 'Suspended', description: ''},
	{key: ePermission.None, name: 'None', description: ''},
]

export enum eRunStatus{
	Initialised = 1,
	Scheduled = 2,
	Started = 3,
	Running = 4,
	RunningErrors = 5,
	Finished = 6,
	FinishedErrors = 7,
	Abended = 8,
	Cancelled = 9,
	NotRunning = 10,
	Passed = 11,
	Failed = 12,
}

export const eRunStatusItems = [
	{key: 0, name: 'Unknown', description: 'Unknown'},
	{key: eRunStatus.Initialised, name: 'Initialised', description: ''},
	{key: eRunStatus.Scheduled, name: 'Scheduled', description: ''},
	{key: eRunStatus.Started, name: 'Started', description: ''},
	{key: eRunStatus.Running, name: 'Running', description: ''},
	{key: eRunStatus.RunningErrors, name: 'RunningErrors', description: ''},
	{key: eRunStatus.Finished, name: 'Finished', description: ''},
	{key: eRunStatus.FinishedErrors, name: 'FinishedErrors', description: ''},
	{key: eRunStatus.Abended, name: 'Abended', description: ''},
	{key: eRunStatus.Cancelled, name: 'Cancelled', description: ''},
	{key: eRunStatus.NotRunning, name: 'NotRunning', description: ''},
	{key: eRunStatus.Passed, name: 'Passed', description: ''},
	{key: eRunStatus.Failed, name: 'Failed', description: ''},
]

export enum eSecurityFlag{
	None = 1,
	FastEncrypt = 2,
	FastDecrypt = 3,
	FastEncrypted = 4,
	StrongEncrypt = 5,
	StrongDecrypt = 6,
	StrongEncrypted = 7,
	OneWayHash = 8,
	OneWayHashed = 9,
	Hide = 10,
}

export const eSecurityFlagItems = [
	{key: 0, name: 'Unknown', description: 'Unknown'},
	{key: eSecurityFlag.None, name: 'None', description: ''},
	{key: eSecurityFlag.FastEncrypt, name: 'FastEncrypt', description: ''},
	{key: eSecurityFlag.FastDecrypt, name: 'FastDecrypt', description: ''},
	{key: eSecurityFlag.FastEncrypted, name: 'FastEncrypted', description: ''},
	{key: eSecurityFlag.StrongEncrypt, name: 'StrongEncrypt', description: ''},
	{key: eSecurityFlag.StrongDecrypt, name: 'StrongDecrypt', description: ''},
	{key: eSecurityFlag.StrongEncrypted, name: 'StrongEncrypted', description: ''},
	{key: eSecurityFlag.OneWayHash, name: 'OneWayHash', description: ''},
	{key: eSecurityFlag.OneWayHashed, name: 'OneWayHashed', description: ''},
	{key: eSecurityFlag.Hide, name: 'Hide', description: ''},
]

export enum eSeriesGrain{
	Second = 1,
	Minute = 2,
	Hour = 3,
	Day = 4,
	Week = 5,
	Month = 6,
	Year = 7,
	Number = 8,
}

export const eSeriesGrainItems = [
	{key: 0, name: 'Unknown', description: 'Unknown'},
	{key: eSeriesGrain.Second, name: 'Second', description: ''},
	{key: eSeriesGrain.Minute, name: 'Minute', description: ''},
	{key: eSeriesGrain.Hour, name: 'Hour', description: ''},
	{key: eSeriesGrain.Day, name: 'Day', description: ''},
	{key: eSeriesGrain.Week, name: 'Week', description: ''},
	{key: eSeriesGrain.Month, name: 'Month', description: ''},
	{key: eSeriesGrain.Year, name: 'Year', description: ''},
	{key: eSeriesGrain.Number, name: 'Number', description: ''},
]

export enum eSharedAccess{
	Public = 1,
	Registered = 2,
	Reader = 3,
}

export const eSharedAccessItems = [
	{key: 0, name: 'Unknown', description: 'Unknown'},
	{key: eSharedAccess.Public, name: 'Public', description: ''},
	{key: eSharedAccess.Registered, name: 'Registered', description: ''},
	{key: eSharedAccess.Reader, name: 'Reader', description: ''},
]

export enum eSharedObjectType{
	Connection = 1,
	Table = 2,
	FileFormat = 3,
	Datalink = 4,
	Datajob = 5,
	RemoteAgent = 6,
	ColumnValidation = 7,
	HubVariable = 8,
	CustomFunction = 9,
	DatalinkTest = 10,
	View = 11,
	Api = 12,
	Dashboard = 13,
}

export const eSharedObjectTypeItems = [
	{key: 0, name: 'Unknown', description: 'Unknown'},
	{key: eSharedObjectType.Connection, name: 'Connection', description: ''},
	{key: eSharedObjectType.Table, name: 'Table', description: ''},
	{key: eSharedObjectType.FileFormat, name: 'FileFormat', description: ''},
	{key: eSharedObjectType.Datalink, name: 'Datalink', description: ''},
	{key: eSharedObjectType.Datajob, name: 'Datajob', description: ''},
	{key: eSharedObjectType.RemoteAgent, name: 'RemoteAgent', description: ''},
	{key: eSharedObjectType.ColumnValidation, name: 'ColumnValidation', description: ''},
	{key: eSharedObjectType.HubVariable, name: 'HubVariable', description: ''},
	{key: eSharedObjectType.CustomFunction, name: 'CustomFunction', description: ''},
	{key: eSharedObjectType.DatalinkTest, name: 'DatalinkTest', description: ''},
	{key: eSharedObjectType.View, name: 'View', description: ''},
	{key: eSharedObjectType.Api, name: 'Api', description: ''},
	{key: eSharedObjectType.Dashboard, name: 'Dashboard', description: ''},
]

export enum eSourceType{
	Datalink = 1,
	Table = 2,
	Rows = 3,
	Function = 4,
}

export const eSourceTypeItems = [
	{key: 0, name: 'Unknown', description: 'Unknown'},
	{key: eSourceType.Datalink, name: 'Datalink', description: ''},
	{key: eSourceType.Table, name: 'Table', description: ''},
	{key: eSourceType.Rows, name: 'Rows', description: ''},
	{key: eSourceType.Function, name: 'Function', description: ''},
]

export enum eStatus{
	None = 1,
	Ready = 2,
	Imported = 3,
	Updated = 4,
	Added = 5,
	Error = 6,
}

export const eStatusItems = [
	{key: 0, name: 'Unknown', description: 'Unknown'},
	{key: eStatus.None, name: 'None', description: ''},
	{key: eStatus.Ready, name: 'Ready', description: ''},
	{key: eStatus.Imported, name: 'Imported', description: ''},
	{key: eStatus.Updated, name: 'Updated', description: ''},
	{key: eStatus.Added, name: 'Added', description: ''},
	{key: eStatus.Error, name: 'Error', description: ''},
]

export enum eTableType{
	Table = 1,
	View = 2,
	Query = 3,
}

export const eTableTypeItems = [
	{key: 0, name: 'Unknown', description: 'Unknown'},
	{key: eTableType.Table, name: 'Table', description: ''},
	{key: eTableType.View, name: 'View', description: ''},
	{key: eTableType.Query, name: 'Query', description: ''},
]

export enum eTestTableAction{
	None = 1,
	Truncate = 2,
	DropCreate = 3,
	TruncateCopy = 4,
	DropCreateCopy = 5,
}

export const eTestTableActionItems = [
	{key: 0, name: 'Unknown', description: 'Unknown'},
	{key: eTestTableAction.None, name: 'None', description: ''},
	{key: eTestTableAction.Truncate, name: 'Truncate', description: ''},
	{key: eTestTableAction.DropCreate, name: 'DropCreate', description: ''},
	{key: eTestTableAction.TruncateCopy, name: 'TruncateCopy', description: ''},
	{key: eTestTableAction.DropCreateCopy, name: 'DropCreateCopy', description: ''},
]

export enum eTransformItemType{
	BuiltInFunction = 1,
	CustomFunction = 2,
	ColumnPair = 3,
	JoinPair = 4,
	Sort = 5,
	Column = 6,
	FilterPair = 7,
	AggregatePair = 8,
	Series = 9,
	JoinNode = 10,
	GroupNode = 11,
	Node = 12,
	UnGroup = 13,
}

export const eTransformItemTypeItems = [
	{key: 0, name: 'Unknown', description: 'Unknown'},
	{key: eTransformItemType.BuiltInFunction, name: 'BuiltInFunction', description: ''},
	{key: eTransformItemType.CustomFunction, name: 'CustomFunction', description: ''},
	{key: eTransformItemType.ColumnPair, name: 'ColumnPair', description: ''},
	{key: eTransformItemType.JoinPair, name: 'JoinPair', description: ''},
	{key: eTransformItemType.Sort, name: 'Sort', description: ''},
	{key: eTransformItemType.Column, name: 'Column', description: ''},
	{key: eTransformItemType.FilterPair, name: 'FilterPair', description: ''},
	{key: eTransformItemType.AggregatePair, name: 'AggregatePair', description: ''},
	{key: eTransformItemType.Series, name: 'Series', description: ''},
	{key: eTransformItemType.JoinNode, name: 'JoinNode', description: ''},
	{key: eTransformItemType.GroupNode, name: 'GroupNode', description: ''},
	{key: eTransformItemType.Node, name: 'Node', description: ''},
	{key: eTransformItemType.UnGroup, name: 'UnGroup', description: ''},
]

export enum eTransformType{
	Mapping = 1,
	Filter = 2,
	Sort = 3,
	Group = 4,
	Aggregate = 5,
	Series = 6,
	Join = 7,
	Rows = 8,
	Lookup = 9,
	Validation = 10,
	Delta = 11,
	Concatenate = 12,
	Profile = 13,
	Internal = 14,
}

export const eTransformTypeItems = [
	{key: 0, name: 'Unknown', description: 'Unknown'},
	{key: eTransformType.Mapping, name: 'Mapping', description: ''},
	{key: eTransformType.Filter, name: 'Filter', description: ''},
	{key: eTransformType.Sort, name: 'Sort', description: ''},
	{key: eTransformType.Group, name: 'Group', description: ''},
	{key: eTransformType.Aggregate, name: 'Aggregate', description: ''},
	{key: eTransformType.Series, name: 'Series', description: ''},
	{key: eTransformType.Join, name: 'Join', description: ''},
	{key: eTransformType.Rows, name: 'Rows', description: ''},
	{key: eTransformType.Lookup, name: 'Lookup', description: ''},
	{key: eTransformType.Validation, name: 'Validation', description: ''},
	{key: eTransformType.Delta, name: 'Delta', description: ''},
	{key: eTransformType.Concatenate, name: 'Concatenate', description: ''},
	{key: eTransformType.Profile, name: 'Profile', description: ''},
	{key: eTransformType.Internal, name: 'Internal', description: ''},
]

export enum eTransformWriterMethod{
	Bulk = 1,
	Transaction = 2,
}

export const eTransformWriterMethodItems = [
	{key: 0, name: 'Unknown', description: 'Unknown'},
	{key: eTransformWriterMethod.Bulk, name: 'Bulk', description: ''},
	{key: eTransformWriterMethod.Transaction, name: 'Transaction', description: ''},
]

export enum eTriggerMethod{
	NotTriggered = 1,
	Manual = 2,
	Schedule = 3,
	FileWatcher = 4,
	External = 5,
	Datajob = 6,
}

export const eTriggerMethodItems = [
	{key: 0, name: 'Unknown', description: 'Unknown'},
	{key: eTriggerMethod.NotTriggered, name: 'NotTriggered', description: ''},
	{key: eTriggerMethod.Manual, name: 'Manual', description: ''},
	{key: eTriggerMethod.Schedule, name: 'Schedule', description: ''},
	{key: eTriggerMethod.FileWatcher, name: 'FileWatcher', description: ''},
	{key: eTriggerMethod.External, name: 'External', description: ''},
	{key: eTriggerMethod.Datajob, name: 'Datajob', description: ''},
]

export enum eTypeCode{
	Unknown = 0,
	Binary = 1,
	Byte = 2,
	Char = 3,
	SByte = 4,
	UInt16 = 5,
	UInt32 = 6,
	UInt64 = 7,
	Int16 = 8,
	Int32 = 9,
	Int64 = 10,
	Decimal = 11,
	Double = 12,
	Single = 13,
	String = 14,
	Text = 15,
	Boolean = 16,
	DateTime = 17,
	Time = 18,
	Guid = 19,
	Json = 20,
	Xml = 21,
	Enum = 22,
	CharArray = 23,
	Object = 24,
	Node = 25,
	Geometry = 26,
}

export const eTypeCodeItems = [
	{key: eTypeCode.Unknown, name: 'Unknown', description: ''},
	{key: eTypeCode.Binary, name: 'Binary', description: ''},
	{key: eTypeCode.Byte, name: 'Byte', description: ''},
	{key: eTypeCode.Char, name: 'Char', description: ''},
	{key: eTypeCode.SByte, name: 'SByte', description: ''},
	{key: eTypeCode.UInt16, name: 'UInt16', description: ''},
	{key: eTypeCode.UInt32, name: 'UInt32', description: ''},
	{key: eTypeCode.UInt64, name: 'UInt64', description: ''},
	{key: eTypeCode.Int16, name: 'Int16', description: ''},
	{key: eTypeCode.Int32, name: 'Int32', description: ''},
	{key: eTypeCode.Int64, name: 'Int64', description: ''},
	{key: eTypeCode.Decimal, name: 'Decimal', description: ''},
	{key: eTypeCode.Double, name: 'Double', description: ''},
	{key: eTypeCode.Single, name: 'Single', description: ''},
	{key: eTypeCode.String, name: 'String', description: ''},
	{key: eTypeCode.Text, name: 'Text', description: ''},
	{key: eTypeCode.Boolean, name: 'Boolean', description: ''},
	{key: eTypeCode.DateTime, name: 'DateTime', description: ''},
	{key: eTypeCode.Time, name: 'Time', description: ''},
	{key: eTypeCode.Guid, name: 'Guid', description: ''},
	{key: eTypeCode.Json, name: 'Json', description: ''},
	{key: eTypeCode.Xml, name: 'Xml', description: ''},
	{key: eTypeCode.Enum, name: 'Enum', description: ''},
	{key: eTypeCode.CharArray, name: 'CharArray', description: ''},
	{key: eTypeCode.Object, name: 'Object', description: ''},
	{key: eTypeCode.Node, name: 'Node', description: ''},
	{key: eTypeCode.Geometry, name: 'Geometry', description: ''},
]

export enum eUpdateStrategy{
	Reload = 1,
	Append = 2,
	AppendUpdate = 3,
	AppendUpdateDelete = 4,
	AppendUpdatePreserve = 5,
	AppendUpdateDeletePreserve = 6,
}

export const eUpdateStrategyItems = [
	{key: 0, name: 'Unknown', description: 'Unknown'},
	{key: eUpdateStrategy.Reload, name: 'Reload', description: ''},
	{key: eUpdateStrategy.Append, name: 'Append', description: ''},
	{key: eUpdateStrategy.AppendUpdate, name: 'AppendUpdate', description: ''},
	{key: eUpdateStrategy.AppendUpdateDelete, name: 'AppendUpdateDelete', description: ''},
	{key: eUpdateStrategy.AppendUpdatePreserve, name: 'AppendUpdatePreserve', description: ''},
	{key: eUpdateStrategy.AppendUpdateDeletePreserve, name: 'AppendUpdateDeletePreserve', description: ''},
]

export enum eViewType{
	Table = 1,
	Chart = 2,
}

export const eViewTypeItems = [
	{key: 0, name: 'Unknown', description: 'Unknown'},
	{key: eViewType.Table, name: 'Table', description: ''},
	{key: eViewType.Chart, name: 'Chart', description: ''},
]

export enum logLevel{
	Trace = 0,
	Debug = 1,
	Information = 2,
	Warning = 3,
	Error = 4,
	Critical = 5,
	None = 6,
}

export const logLevelItems = [
	{key: logLevel.Trace, name: 'Trace', description: ''},
	{key: logLevel.Debug, name: 'Debug', description: ''},
	{key: logLevel.Information, name: 'Information', description: ''},
	{key: logLevel.Warning, name: 'Warning', description: ''},
	{key: logLevel.Error, name: 'Error', description: ''},
	{key: logLevel.Critical, name: 'Critical', description: ''},
	{key: logLevel.None, name: 'None', description: ''},
]
