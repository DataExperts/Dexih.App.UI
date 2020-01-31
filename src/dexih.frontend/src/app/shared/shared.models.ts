// Auto generated shared classes.
// Regenerate at http://localhost:5000/api/Dev/JSModels.

// tslint:disable: no-inferrable-types no-use-before-declare

// auto generated classes

export class ApiData {
    public apiStatus: eApiStatus = null;
    public hubKey: number = 0;
    public apiKey: number = 0;
    public selectQuery: SelectQuery = null;
    public securityKey: string = null;
    public successCount: number = 0;
    public errorCount: number = 0;
   }
   
   export class ApplicationUser {
    public id: string = '0d9f2394-cb3d-4a3e-92e2-907ce940b811';
    public email: string = null;
    public concurrencyStamp: string = null;
    public emailConfirmed: boolean = false;
    public lockoutEnabled: boolean = false;
    public lockoutEnd: any = null;
    public normalizedEmail: string = null;
    public passwordHash: string = null;
    public phoneNumber: string = null;
    public securityStamp: string = '555832bc-ad2f-48e8-af40-8e5379074bdd';
    public userName: string = null;
    public accessFailedCount: number = 0;
    public normalizedUserName: string = null;
    public phoneNumberConfirmed: boolean = false;
    public twoFactorEnabled: boolean = false;
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
    public notifyPrivateMessage: boolean = false;
    public notifySupportMessage: boolean = false;
   }
   
   export class AppSettingsSection {
    public userPrompt: boolean = true;
    public remoteAgentId: string = null;
    public user: string = null;
    public userToken: string = null;
    public encryptionKey: string = null;
    public webServer: string = 'https://dexih.com';
    public name: string = null;
    public autoUpgrade: boolean = false;
    public allowPreReleases: boolean = false;
    public autoStartPath: string = null;
   }
   
   export class CacheManager {
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
   
   export class ChartConfig {
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
    public colorScheme: string = 'natural';
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
   
   export class ClientMessage {
    public command: eClientCommand = eClientCommand.Connect;
    public value: any = null;
    public success: boolean = false;
    public message: string = null;
    public exceptionDetails: string = null;
   }
   
   export class ConnectionAttribute {
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
   
   export class ConnectionReference {
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
   
   export class DatalinkProgress {
    public instanceId: string = null;
    public securityToken: string = null;
    public command: eMessageCommand = eMessageCommand.Connect;
    public results: ManagedTask[] = [];
   }
   
   export class DataPack {
    public name: string = null;
    public columns: DataPackColumn[] = [];
    public data: any[] = [];
    public transformProperties: TransformProperties = null;
   }
   
   export class DataPackColumn {
    public name: string = null;
    public logicalName: string = null;
    public dataType: eTypeCode = eTypeCode.Unknown;
   }
   
   export class DeleteQuery {
    public table: string = null;
    public filters: Filter[] = [];
   }
   
   export class DexihActiveAgent {
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
    public namingStandards: string[] = [];
   }
   
   export class DexihApi {
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
   
   export class DexihApiParameter {
    public apiKey: number = 0;
    public api: DexihApi = null;
    public value: string = null;
    public listOfValuesKey: number = null;
    public allowUserSelect: boolean = true;
    public valueDesc: string = null;
    public key: number = 0;
    public name: string = null;
    public description: string = null;
    public hubKey: number = 0;
    public createDate: Date = null;
    public updateDate: Date = null;
    public isValid: boolean = true;
   }
   
   export class DexihBaseEntity {
    public createDate: Date = null;
    public updateDate: Date = null;
    public isValid: boolean = true;
   }
   
   export class DexihColumnBase {
    public position: number = 0;
    public logicalName: string = null;
    public columnGroup: string = null;
    public dataType: eTypeCode = eTypeCode.String;
    public maxLength: number = null;
    public precision: number = null;
    public isUnicode: boolean = null;
    public scale: number = null;
    public allowDbNull: boolean = false;
    public deltaType: eDeltaType = eDeltaType.TrackingField;
    public defaultValue: string = null;
    public isUnique: boolean = false;
    public isMandatory: boolean = false;
    public isIncrementalUpdate: boolean = false;
    public isInput: boolean = false;
    public rank: number = 0;
    public securityFlag: eSecurityFlag = eSecurityFlag.None;
    public key: number = 0;
    public name: string = null;
    public description: string = null;
    public hubKey: number = 0;
    public createDate: Date = null;
    public updateDate: Date = null;
    public isValid: boolean = true;
   }
   
   export class DexihColumnValidation {
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
   
   export class DexihConnection {
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
    public key: number = 0;
    public name: string = null;
    public description: string = null;
    public hubKey: number = 0;
    public createDate: Date = null;
    public updateDate: Date = null;
    public isValid: boolean = true;
   }
   
   export class DexihCustomFunction {
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
   
   export class DexihCustomFunctionParameter {
    public customFunctionKey: number = 0;
    public position: number = 0;
    public direction: eParameterDirection = null;
    public dataType: eTypeCode = eTypeCode.Unknown;
    public allowNull: boolean = false;
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
   
   export class DexihDashboard {
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
   
   export class DexihDashboardItem {
    public cols: number = 0;
    public rows: number = 0;
    public x: number = 0;
    public y: number = 0;
    public header: boolean = false;
    public scrollable: boolean = false;
    public viewKey: number = 0;
    public dashboardKey: number = 0;
    public parameters: DexihDashboardItemParameter[] = [];
    public key: number = 0;
    public name: string = null;
    public description: string = null;
    public hubKey: number = 0;
    public createDate: Date = null;
    public updateDate: Date = null;
    public isValid: boolean = true;
   }
   
   export class DexihDashboardItemParameter {
    public dashboardItemKey: number = 0;
    public value: string = null;
    public listOfValuesKey: number = null;
    public allowUserSelect: boolean = true;
    public valueDesc: string = null;
    public key: number = 0;
    public name: string = null;
    public description: string = null;
    public hubKey: number = 0;
    public createDate: Date = null;
    public updateDate: Date = null;
    public isValid: boolean = true;
   }
   
   export class DexihDashboardParameter {
    public dashboardKey: number = 0;
    public value: string = null;
    public listOfValuesKey: number = null;
    public allowUserSelect: boolean = true;
    public valueDesc: string = null;
    public key: number = 0;
    public name: string = null;
    public description: string = null;
    public hubKey: number = 0;
    public createDate: Date = null;
    public updateDate: Date = null;
    public isValid: boolean = true;
   }
   
   export class DexihDatajob {
    public failAction: eFailAction = eFailAction.Abend;
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
   
   export class DexihDatajobParameter {
    public datajobKey: number = 0;
    public value: string = null;
    public listOfValuesKey: number = null;
    public allowUserSelect: boolean = true;
    public valueDesc: string = null;
    public key: number = 0;
    public name: string = null;
    public description: string = null;
    public hubKey: number = 0;
    public createDate: Date = null;
    public updateDate: Date = null;
    public isValid: boolean = true;
   }
   
   export class DexihDatalink {
    public sourceDatalinkTableKey: number = 0;
    public auditConnectionKey: number = null;
    public updateStrategy: eUpdateStrategy = eUpdateStrategy.Reload;
    public loadStrategy: eTransformWriterMethod = eTransformWriterMethod.Bulk;
    public datalinkType: eDatalinkType = null;
    public rowsPerCommit: number = 1000;
    public rowsPerProgress: number = 1000;
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
   
   export class DexihDatalinkColumn {
    public key: number = 0;
    public datalinkTableKey: number = null;
    public childColumns: DexihDatalinkColumn[] = [];
    public position: number = 0;
    public logicalName: string = null;
    public columnGroup: string = null;
    public dataType: eTypeCode = eTypeCode.String;
    public maxLength: number = null;
    public precision: number = null;
    public isUnicode: boolean = null;
    public scale: number = null;
    public allowDbNull: boolean = false;
    public deltaType: eDeltaType = eDeltaType.TrackingField;
    public defaultValue: string = null;
    public isUnique: boolean = false;
    public isMandatory: boolean = false;
    public isIncrementalUpdate: boolean = false;
    public isInput: boolean = false;
    public rank: number = 0;
    public securityFlag: eSecurityFlag = eSecurityFlag.None;
    public name: string = null;
    public description: string = null;
    public hubKey: number = 0;
    public createDate: Date = null;
    public updateDate: Date = null;
    public isValid: boolean = true;
   }
   
   export class DexihDatalinkDependency {
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
   
   export class DexihDatalinkParameter {
    public datalinkKey: number = 0;
    public value: string = null;
    public listOfValuesKey: number = null;
    public allowUserSelect: boolean = true;
    public valueDesc: string = null;
    public key: number = 0;
    public name: string = null;
    public description: string = null;
    public hubKey: number = 0;
    public createDate: Date = null;
    public updateDate: Date = null;
    public isValid: boolean = true;
   }
   
   export class DexihDatalinkProfile {
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
   
   export class DexihDatalinkStep {
    public datajobKey: number = 0;
    public datalinkKey: number = null;
    public position: number = 0;
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
   
   export class DexihDatalinkStepColumn {
    public datalinkStepKey: number = 0;
    public position: number = 0;
    public logicalName: string = null;
    public columnGroup: string = null;
    public dataType: eTypeCode = eTypeCode.String;
    public maxLength: number = null;
    public precision: number = null;
    public isUnicode: boolean = null;
    public scale: number = null;
    public allowDbNull: boolean = false;
    public deltaType: eDeltaType = eDeltaType.TrackingField;
    public defaultValue: string = null;
    public isUnique: boolean = false;
    public isMandatory: boolean = false;
    public isIncrementalUpdate: boolean = false;
    public isInput: boolean = false;
    public rank: number = 0;
    public securityFlag: eSecurityFlag = eSecurityFlag.None;
    public key: number = 0;
    public name: string = null;
    public description: string = null;
    public hubKey: number = 0;
    public createDate: Date = null;
    public updateDate: Date = null;
    public isValid: boolean = true;
   }
   
   export class DexihDatalinkStepParameter {
    public datalinkStepKey: number = 0;
    public value: string = null;
    public listOfValuesKey: number = null;
    public allowUserSelect: boolean = true;
    public valueDesc: string = null;
    public key: number = 0;
    public name: string = null;
    public description: string = null;
    public hubKey: number = 0;
    public createDate: Date = null;
    public updateDate: Date = null;
    public isValid: boolean = true;
   }
   
   export class DexihDatalinkTable {
    public sourceTableKey: number = null;
    public sourceDatalinkKey: number = null;
    public rowsStartAt: number = 1;
    public rowsEndAt: number = 1;
    public rowsIncrement: number = 1;
    public sourceType: eSourceType = eSourceType.Table;
    public disablePushDown: boolean = false;
    public dexihDatalinkColumns: DexihDatalinkColumn[] = [];
    public key: number = 0;
    public name: string = null;
    public description: string = null;
    public hubKey: number = 0;
    public createDate: Date = null;
    public updateDate: Date = null;
    public isValid: boolean = true;
   }
   
   export class DexihDatalinkTarget {
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
   
   export class DexihDatalinkTest {
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
   
   export class DexihDatalinkTestStep {
    public position: number = 0;
    public datalinkTestKey: number = 0;
    public datalinkKey: number = 0;
    public targetConnectionKey: number = 0;
    public targetTableName: string = null;
    public targetSchema: string = null;
    public expectedConnectionKey: number = 0;
    public expectedTableName: string = null;
    public expectedSchema: string = null;
    public errorConnectionKey: number = 0;
    public errorTableName: string = null;
    public errorSchema: string = null;
    public dexihDatalinkTestTables: DexihDatalinkTestTable[] = [];
    public key: number = 0;
    public name: string = null;
    public description: string = null;
    public hubKey: number = 0;
    public createDate: Date = null;
    public updateDate: Date = null;
    public isValid: boolean = true;
   }
   
   export class DexihDatalinkTestTable {
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
   
   export class DexihDatalinkTransform {
    public datalinkKey: number = 0;
    public position: number = 0;
    public passThroughColumns: boolean = false;
    public joinDatalinkTableKey: number = null;
    public joinSortDatalinkColumnKey: number = null;
    public nodeDatalinkColumnKey: number = null;
    public transformType: eTransformType = null;
    public transformClassName: string = null;
    public transformAssemblyName: string = null;
    public joinDuplicateStrategy: eDuplicateStrategy = eDuplicateStrategy.Abend;
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
   
   export class DexihDatalinkTransformItem {
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
    public functionCaching: eFunctionCaching = eFunctionCaching.NoCache;
    public customFunctionKey: number = null;
    public sortDirection: eSortDirection = null;
    public filterCompare: eCompare = null;
    public aggregate: eAggregate = null;
    public seriesGrain: eSeriesGrain = null;
    public seriesFill: boolean = false;
    public seriesStart: string = null;
    public seriesFinish: string = null;
    public functionCode: string = null;
    public functionResultCode: string = null;
    public onError: eErrorAction = eErrorAction.Abend;
    public onNull: eErrorAction = eErrorAction.Abend;
    public notCondition: boolean = false;
    public invalidAction: eInvalidAction = eInvalidAction.Abend;
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
   
   export class DexihFileFormat {
    public isDefault: boolean = false;
    public matchHeaderRecord: boolean = true;
    public skipHeaderRows: number = 0;
    public allowComments: boolean = false;
    public bufferSize: number = 2048;
    public comment: string = '#';
    public delimiter: string = ',';
    public detectColumnCountChanges: boolean = false;
    public hasHeaderRecord: boolean = true;
    public ignoreHeaderWhiteSpace: boolean = false;
    public ignoreReadingExceptions: boolean = false;
    public ignoreQuotes: boolean = false;
    public quote: string = '"';
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
   
   export class DexihFunctionArrayParameter {
    public functionParameterKey: number = 0;
    public datalinkColumnKey: number = null;
    public value: string = null;
    public listOfValues: string[] = [];
    public entityStatus: EntityStatus = null;
    public datalinkColumn: DexihDatalinkColumn = null;
    public position: number = 0;
    public direction: eParameterDirection = null;
    public dataType: eTypeCode = eTypeCode.Unknown;
    public allowNull: boolean = false;
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
   
   export class DexihFunctionParameter {
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
    public allowNull: boolean = false;
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
   
   export class DexihFunctionParameterBase {
    public datalinkColumnKey: number = null;
    public value: string = null;
    public listOfValues: string[] = [];
    public entityStatus: EntityStatus = null;
    public datalinkColumn: DexihDatalinkColumn = null;
    public position: number = 0;
    public direction: eParameterDirection = null;
    public dataType: eTypeCode = eTypeCode.Unknown;
    public allowNull: boolean = false;
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
   
   export class DexihHub {
    public hubKey: number = 0;
    public name: string = null;
    public description: string = null;
    public encryptionKey: string = null;
    public sharedAccess: eSharedAccess = eSharedAccess.Public;
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
    public dexihListOfValues: DexihListOfValues[] = [];
    public createDate: Date = null;
    public updateDate: Date = null;
    public isValid: boolean = true;
   }
   
   export class DexihHubEntity {
    public hubKey: number = 0;
    public createDate: Date = null;
    public updateDate: Date = null;
    public isValid: boolean = true;
   }
   
   export class DexihHubUser {
    public hubKey: number = 0;
    public userId: string = null;
    public permission: ePermission = ePermission.None;
    public createDate: Date = null;
    public updateDate: Date = null;
    public isValid: boolean = true;
   }
   
   export class DexihHubVariable {
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
   
   export class DexihIssue {
    public type: eIssueType = eIssueType.Other;
    public category: eIssueCategory = eIssueCategory.Other;
    public severity: eIssueSeverity = eIssueSeverity.Critical;
    public link: string = null;
    public data: string = null;
    public gitHubLink: string = null;
    public isPrivate: boolean = true;
    public hubKey: number = 0;
    public userId: string = null;
    public issueStatus: eIssueStatus = eIssueStatus.Open;
    public dexihIssueComments: DexihIssueComment[] = [];
    public userName: string = null;
    public key: number = 0;
    public name: string = null;
    public description: string = null;
    public createDate: Date = null;
    public updateDate: Date = null;
    public isValid: boolean = true;
   }
   
   export class DexihIssueComment {
    public issueKey: number = 0;
    public key: number = 0;
    public comment: string = null;
    public userId: string = null;
    public userName: string = null;
    public createDate: Date = null;
    public updateDate: Date = null;
    public isValid: boolean = true;
   }
   
   export class DexihListOfValues {
    public sourceType: eLOVObjectType = null;
    public sourceTableKey: number = null;
    public sourceDatalinkKey: number = null;
    public selectQuery: SelectQuery = null;
    public keyColumn: string = null;
    public nameColumn: string = null;
    public descriptionColumn: string = null;
    public staticData: ListOfValuesItem[] = [];
    public cache: boolean = false;
    public cacheSeconds: number = 0;
    public key: number = 0;
    public name: string = null;
    public description: string = null;
    public hubKey: number = 0;
    public createDate: Date = null;
    public updateDate: Date = null;
    public isValid: boolean = true;
   }
   
   export class DexihParameterBase {
    public position: number = 0;
    public direction: eParameterDirection = null;
    public dataType: eTypeCode = eTypeCode.Unknown;
    public allowNull: boolean = false;
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
   
   export class DexihRemoteAgent {
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
    public dexihRemoteAgentHubs: DexihRemoteAgentHub[] = [];
    public createDate: Date = null;
    public updateDate: Date = null;
    public isValid: boolean = true;
   }
   
   export class DexihRemoteAgentHub {
    public remoteAgentHubKey: number = 0;
    public remoteAgentKey: number = 0;
    public isDefault: boolean = false;
    public isAuthorized: boolean = false;
    public hubKey: number = 0;
    public createDate: Date = null;
    public updateDate: Date = null;
    public isValid: boolean = true;
   }
   
   export class DexihTable {
    public connectionKey: number = 0;
    public schema: string = null;
    public baseTableName: string = null;
    public logicalName: string = null;
    public tableType: eTableType = eTableType.Table;
    public sourceConnectionName: string = null;
    public fileFormatKey: number = null;
    public rejectedTableName: string = null;
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
   
   export class DexihTableColumn {
    public tableKey: number = null;
    public childColumns: DexihTableColumn[] = [];
    public columnValidationKey: number = null;
    public entityStatus: EntityStatus = null;
    public position: number = 0;
    public logicalName: string = null;
    public columnGroup: string = null;
    public dataType: eTypeCode = eTypeCode.String;
    public maxLength: number = null;
    public precision: number = null;
    public isUnicode: boolean = null;
    public scale: number = null;
    public allowDbNull: boolean = false;
    public deltaType: eDeltaType = eDeltaType.TrackingField;
    public defaultValue: string = null;
    public isUnique: boolean = false;
    public isMandatory: boolean = false;
    public isIncrementalUpdate: boolean = false;
    public isInput: boolean = false;
    public rank: number = 0;
    public securityFlag: eSecurityFlag = eSecurityFlag.None;
    public key: number = 0;
    public name: string = null;
    public description: string = null;
    public hubKey: number = 0;
    public createDate: Date = null;
    public updateDate: Date = null;
    public isValid: boolean = true;
   }
   
   export class DexihTrigger {
    public datajobKey: number = 0;
    public startDate: Date = null;
    public intervalTime: any = null;
    public position: number = 0;
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
   
   export class DexihView {
    public viewType: eViewType = eViewType.Table;
    public sourceTableKey: number = null;
    public sourceDatalinkKey: number = null;
    public sourceType: eDataObjectType = null;
    public autoRefresh: boolean = true;
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
   
   export class DexihViewParameter {
    public viewKey: number = 0;
    public value: string = null;
    public listOfValuesKey: number = null;
    public allowUserSelect: boolean = true;
    public valueDesc: string = null;
    public key: number = 0;
    public name: string = null;
    public description: string = null;
    public hubKey: number = 0;
    public createDate: Date = null;
    public updateDate: Date = null;
    public isValid: boolean = true;
   }
   
   export class DownloadData {
    public transformSettings: TransformSettings = null;
    public cache: CacheManager = null;
    public downloadObjects: DownloadObject[] = [];
    public downloadFormat: eDownloadFormat = null;
    public zipFiles: boolean = false;
   }
   
   export class DownloadObject {
    public objectType: eDataObjectType = null;
    public objectKey: number = 0;
    public query: SelectQuery = null;
    public inputParameters: InputParameter[] = [];
    public inputColumns: InputColumn[] = [];
    public datalinkTransformKey: number = null;
   }
   
   export class DownloadReadyBase {
    public instanceId: string = null;
    public securityToken: string = null;
    public connectionId: string = null;
    public reference: string = null;
    public hubKey: number = 0;
   }
   
   export class DownloadReadyMessage {
    public url: string = null;
    public instanceId: string = null;
    public securityToken: string = null;
    public connectionId: string = null;
    public reference: string = null;
    public hubKey: number = 0;
   }
   
   export class DownloadUrl {
    public url: string = null;
    public downloadUrlType: eDownloadUrlType = null;
    public isEncrypted: boolean = false;
   }
   
   export class EntityStatus {
    public lastStatus: eStatus = eStatus.None;
    public message: string = '';
    public isBusy: boolean = false;
   }
   
   export class FileConfiguration {
    public matchHeaderRecord: boolean = true;
    public skipHeaderRows: number = 0;
    public setWhiteSpaceCellsToNull: boolean = true;
   }
   
   export class Filter {
    public column1: TableColumn = null;
    public value1: any = null;
    public compareDataType: eTypeCode = eTypeCode.Unknown;
    public column2: TableColumn = null;
    public value2: any = null;
    public operator: eCompare = eCompare.IsEqual;
    public andOr: eAndOr = eAndOr.And;
   }
   
   export class FlatFile {
    public autoManageFiles: boolean = false;
    public useCustomFilePaths: boolean = false;
    public fileRootPath: string = null;
    public fileIncomingPath: string = '';
    public fileOutgoingPath: string = '';
    public fileProcessedPath: string = '';
    public fileRejectedPath: string = '';
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
    public tableType: eTableType = eTableType.Table;
    public isVersioned: boolean = false;
    public queryString: string = null;
    public outputSortFields: Sort[] = [];
    public columns: TableColumn[] = [];
    public maxImportLevels: number = 10;
   }
   
   export class FunctionParameter {
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
    public isPassword: boolean = false;
   }
   
   export class FunctionReference {
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
   
   export class HubUser {
    public firstName: string = null;
    public lastName: string = null;
    public userName: string = null;
    public id: string = null;
    public permission: ePermission = ePermission.None;
   }
   
   export class Import {
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
    public listOfValues: ImportObject<DexihListOfValues>[] = [];
    public warnings: string[] = [];
   }
   
   export class ImportAction {
    public objectType: eSharedObjectType = null;
    public action: eImportAction = null;
   }
   
   export class ImportObject<T> {
    public item: T = null;
    public importAction: eImportAction = null;
   }
   
   export class InputColumn {
    public datalinkKey: number = 0;
    public datalinkName: string = null;
    public name: string = null;
    public logicalName: string = null;
    public dataType: eTypeCode = eTypeCode.Unknown;
    public rank: number = 0;
    public value: any = null;
    public defaultValue: any = null;
   }
   
   export class InputParameter {
    public name: string = null;
    public value: string = null;
   }
   
   export class InputParameterBase {
    public value: string = null;
    public listOfValuesKey: number = null;
    public allowUserSelect: boolean = true;
    public valueDesc: string = null;
    public key: number = 0;
    public name: string = null;
    public description: string = null;
    public hubKey: number = 0;
    public createDate: Date = null;
    public updateDate: Date = null;
    public isValid: boolean = true;
   }
   
   export class InputParameters {
   }
   
   export class InsertQuery {
    public insertColumns: QueryColumn[] = [];
   }
   
   export class ListOfValuesItem {
    public key: string = null;
    public name: string = null;
    public description: string = null;
   }
   
   export class LoggingSection {
    public includeScopes: boolean = false;
    public logLevel: LogLevelSection = new LogLevelSection();
    public logFilePath: string = null;
   }
   
   export class LoginModel {
   }
   
   export class LogLevelSection {
    public default: logLevel = logLevel.Information;
    public system: logLevel = logLevel.Information;
    public microsoft: logLevel = logLevel.Information;
   }
   
   export class ManagedTask {
    public success: boolean = false;
    public message: string = null;
    public taskId: string = null;
    public originatorId: string = null;
    public name: string = null;
    public description: string = null;
    public lastUpdate: Date = null;
    public status: eManagedTaskStatus = eManagedTaskStatus.Created;
    public category: string = null;
    public categoryKey: number = 0;
    public referenceKey: number = 0;
    public referenceId: string = null;
    public percentage: number = 0;
    public counter: number = 0;
    public concurrentTaskAction: eConcurrentTaskAction = eConcurrentTaskAction.Abend;
    public stepName: string = null;
    public startTime: Date = null;
    public endTime: Date = null;
    public triggers: ManagedTaskTrigger[] = [];
    public fileWatchers: ManagedTaskFileWatcher[] = [];
    public nextTriggerTime: Date = null;
    public runCount: number = 0;
    public dependentTaskIds: string[] = [];
    public dependenciesMet: boolean = true;
    public data: any = null;
    public exceptionDetails: string = '';
   }
   
   export class ManagedTaskFileWatcher {
    public path: string = null;
    public filter: string = null;
    public isStarted: boolean = false;
   }
   
   export class ManagedTaskProgressItem {
    public stepName: string = null;
    public percentage: number = 0;
    public counter: number = 0;
   }
   
   export class ManagedTaskTrigger {
    public startDate: Date = null;
    public endDate: Date = null;
    public intervalType: eIntervalType = eIntervalType.Interval;
    public intervalTime: any = null;
    public daysOfWeek: eDayOfWeek[] = [];
    public daysOfMonth: number[] = [];
    public weeksOfMonth: eWeekOfMonth[] = [];
    public skipDates: Date[] = [];
    public startTime: any = null;
    public endTime: any = null;
    public maxRecurs: number = 1;
    public details: string = 'Error: Interval specified, however no interval time set.\n';
   }
   
   export class NamingStandards {
   }
   
   export class NetworkSection {
    public externalDownloadUrl: string = null;
    public localIpAddress: string = null;
    public localPort: number = null;
    public proxyUrl: string = null;
    public downloadPort: number = 33944;
    public enforceHttps: boolean = true;
    public autoGenerateCertificate: boolean = true;
    public dynamicDomain: string = 'dexih.com';
    public certificateFilename: string = null;
    public certificatePassword: string = null;
    public enableUPnP: boolean = true;
   }
   
   export class ParameterArray {
    public name: string = null;
    public dataType: eTypeCode = eTypeCode.Unknown;
    public rank: number = 0;
   }
   
   export class ParameterColumn {
    public name: string = null;
    public dataType: eTypeCode = eTypeCode.Unknown;
    public rank: number = 0;
    public value: any = null;
   }
   
   export class ParameterJoinColumn {
    public name: string = null;
    public dataType: eTypeCode = eTypeCode.Unknown;
    public rank: number = 0;
    public value: any = null;
   }
   
   export class ParameterOutputColumn {
    public name: string = null;
    public dataType: eTypeCode = eTypeCode.Unknown;
    public rank: number = 0;
    public value: any = null;
   }
   
   export class Parameters {
   }
   
   export class ParameterValue {
    public name: string = null;
    public dataType: eTypeCode = eTypeCode.Unknown;
    public rank: number = 0;
    public value: any = null;
   }
   
   export class PermissionsSection {
    public allowLocalFiles: boolean = true;
    public allowAllPaths: boolean = false;
    public allowedPaths: string[] = [];
    public allowAllHubs: boolean = true;
    public allowedHubs: number[] = [];
   }
   
   export class PrivacySection {
    public allowDataDownload: boolean = true;
    public allowDataUpload: boolean = true;
    public allowLanAccess: boolean = true;
    public allowExternalAccess: boolean = true;
    public allowProxy: boolean = true;
   }
   
   export class QueryColumn {
    public column: TableColumn = null;
    public value: any = null;
   }
   
   export class RegisterModel {
    public provider: eLoginProvider = eLoginProvider.Dexih;
    public userName: string = null;
    public email: string = null;
    public code: string = null;
    public password: string = null;
    public firstname: string = null;
    public lastname: string = null;
    public subscription: boolean = false;
    public terms: boolean = false;
    public authenticationToken: string = null;
   }
   
   export class RemoteAgentProperties {
    public name: string = null;
    public ipAddress: string = null;
    public securityToken: string = null;
    public remoteAgentKey: number = 0;
    public encryptionKey: string = null;
    public userId: string = null;
    public connectionId: string = null;
    public namingStandards: string[] = [];
    public downloadUrls: DownloadUrl[] = [];
   }
   
   export class RemoteAgentSettings {
    public embedUserName: boolean = false;
    public environment: eEnvironment = null;
    public logLevel: logLevel = logLevel.Trace;
    public remoteApplicationSettings: RemoteAgentSettingsSubset = null;
   }
   
   export class RemoteAgentSettingsSubset {
    public allowedHubs: number[] = [];
    public allowedPaths: string[] = [];
    public allowAllHubs: boolean = true;
    public allowAllPaths: boolean = true;
    public allowDownload: boolean = true;
    public allowExternalAccess: boolean = true;
    public allowLanAccess: boolean = true;
    public allowLocalFiles: boolean = true;
    public allowProxy: boolean = true;
    public allowUpload: boolean = true;
    public autoGenerateCertificate: boolean = true;
    public autoSchedule: boolean = true;
    public autoUpgrade: boolean = true;
    public downloadPort: number = 33944;
    public enableUPnP: boolean = true;
    public encryptionKey: string = null;
    public enforceHttps: boolean = true;
    public externalDownloadUrl: string = null;
    public firstRun: boolean = false;
    public name: string = null;
    public preRelease: boolean = false;
    public remoteAgentId: string = null;
    public user: string = null;
    public userToken: string = null;
    public webServer: string = null;
   }
   
   export class RemoteAgentStatus {
    public activeApis: ApiData[] = [];
    public activeDatajobs: ManagedTask[] = [];
    public activeDatalinks: ManagedTask[] = [];
    public activeDatalinkTests: ManagedTask[] = [];
    public previousDatajobs: ManagedTask[] = [];
    public previousDatalinks: ManagedTask[] = [];
    public previousDatalinkTests: ManagedTask[] = [];
    public remoteLibraries: RemoteLibraries = null;
    public requiresUpgrade: boolean = false;
   }
   
   export class RemoteLibraries {
    public functions: FunctionReference[] = [];
    public connections: ConnectionReference[] = [];
    public transforms: TransformReference[] = [];
   }
   
   export class RemoteMessage {
    public messageId: string = null;
    public securityToken: string = null;
    public method: string = null;
    public hubKey: number = 0;
    public timeOut: number = null;
    public hubVariables: DexihHubVariable[] = [];
    public clientConnectionId: string = null;
    public downloadUrl: DownloadUrl = null;
    public value: any[] = [];
    public success: boolean = true;
    public message: string = null;
    public exceptionDetails: string = null;
   }
   
   export class RemoteSettings {
    public appSettings: AppSettingsSection = new AppSettingsSection();
    public systemSettings: SystemSettingsSection = new SystemSettingsSection();
    public logging: LoggingSection = new LoggingSection();
    public runtime: RuntimeSection = new RuntimeSection();
    public network: NetworkSection = new NetworkSection();
    public privacy: PrivacySection = new PrivacySection();
    public permissions: PermissionsSection = new PermissionsSection();
    public namingStandards: string[] = [];
   }
   
   export class RenewSslCertificateModel {
    public domain: string = null;
    public password: string = null;
   }
   
   export class ResponseMessage {
    public messageId: string = null;
    public securityToken: string = null;
    public success: boolean = false;
    public message: string = null;
    public exceptionDetails: string = null;
   }
   
   export class RuntimeSection {
    public configDirectory: string = null;
    public appSettingsPath: string = null;
    public password: string = null;
    public localIpAddress: string = null;
    public externalIpAddress: string = null;
    public defaultProxyUrl: string = null;
    public remoteAgentKey: number = 0;
    public userHash: string = null;
    public version: string = null;
    public latestVersion: string = null;
    public latestDownloadUrl: string = null;
    public generateUserToken: boolean = false;
    public saveSettings: boolean = false;
    public doUpgrade: boolean = false;
   }
   
   export class SelectColumn {
    public column: TableColumn = null;
    public aggregate: eAggregate = eAggregate.None;
    public outputColumn: TableColumn = null;
   }
   
   export class SelectQuery {
    public columns: SelectColumn[] = [];
    public tableName: string = null;
    public filters: Filter[] = [];
    public sorts: Sort[] = [];
    public groups: TableColumn[] = [];
    public groupFilters: Filter[] = [];
    public rows: number = -1;
    public inputColumns: TableColumn[] = [];
    public fileName: string = null;
    public path: eFlatFilePath = eFlatFilePath.None;
   }
   
   export class SharedData {
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
   
   export class Sort {
    public column: TableColumn = null;
    public direction: eSortDirection = null;
   }
   
   export class Sorts {
   }
   
   export class SystemSettingsSection {
    public maxAcknowledgeWait: number = 5000;
    public responseTimeout: number = 1000000;
    public cancelDelay: number = 1000;
    public encryptionIterations: number = 1000;
    public maxPreviewDuration: number = 10000;
    public maxConcurrentTasks: number = 50;
    public maxUploadSize: number = 1000000000;
    public socketTransportType: string = 'WebSockets';
   }
   
   export class Table {
    public name: string = null;
    public schema: string = null;
    public sourceConnectionName: string = null;
    public logicalName: string = null;
    public description: string = null;
    public baseTableName: string = null;
    public tableType: eTableType = eTableType.Table;
    public isVersioned: boolean = false;
    public queryString: string = null;
    public outputSortFields: Sort[] = [];
    public columns: TableColumn[] = [];
    public maxImportLevels: number = 10;
   }
   
   export class TableColumn {
    public referenceTable: string = null;
    public name: string = null;
    public logicalName: string = null;
    public description: string = null;
    public dataType: eTypeCode = eTypeCode.Unknown;
    public maxLength: number = null;
    public columnGroup: string = null;
    public rank: number = 0;
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
   
   export class TableColumns {
   }
   
   export class TransformAttribute {
    public name: string = null;
    public description: string = null;
    public transformType: eTransformType = null;
   }
   
   export class TransformPerformance {
    public transformName: string = null;
    public action: string = null;
    public rows: number = 0;
    public seconds: number = 0;
    public children: TransformPerformance[] = [];
   }
   
   export class TransformProperties {
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
   
   export class TransformReference {
    public transformClassName: string = null;
    public transformAssemblyName: string = null;
    public transformType: eTransformType = null;
    public name: string = null;
    public description: string = null;
   }
   
   export class TransformSettings {
    public hubVariables: DexihHubVariable[] = [];
    public inputParameters: InputParameterBase[] = [];
    public remoteSettings: RemoteSettings = null;
   }
   
   export class TransformWriterOptions {
   }
   
   export class TransformWriterResult {
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
    public triggerMethod: eTriggerMethod = eTriggerMethod.Manual;
    public triggerInfo: string = null;
    public performanceSummary: TransformPerformance[] = [];
    public profileTableName: string = null;
    public rejectTableName: string = null;
    public isCurrent: boolean = true;
    public isPrevious: boolean = false;
    public isPreviousSuccess: boolean = false;
    public childResults: TransformWriterResult[] = [];
    public runStatus: eRunStatus = eRunStatus.Initialised;
    public isRunning: boolean = true;
    public isFinished: boolean = false;
    public isScheduled: boolean = false;
    public percentageComplete: number = 0;
   }
   
   export class UpdateQuery {
    public updateColumns: QueryColumn[] = [];
    public filters: Filter[] = [];
   }
   
   export class UserModel {
    public email: string = null;
    public userName: string = null;
    public emailConfirmed: boolean = false;
    public accessFailedCount: number = 0;
    public id: string = null;
    public lockoutEnabled: boolean = false;
    public lockoutEnd: any = null;
    public logins: any[] = [];
    public roles: string[] = [];
    public claims: any[] = [];
    public twoFactorEnabled: boolean = false;
    public phoneNumber: string = null;
    public phoneNumberConfirmed: boolean = false;
    public firstName: string = null;
    public lastName: string = null;
    public terms: boolean = false;
    public subscription: boolean = false;
    public inviteQuota: number = 0;
    public hubQuota: number = 0;
    public isRegistered: boolean = false;
    public isInvited: boolean = false;
    public isEnabled: boolean = false;
   }
   
   export class WebService {
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
    public tableType: eTableType = eTableType.Table;
    public isVersioned: boolean = false;
    public queryString: string = null;
    public outputSortFields: Sort[] = [];
    public columns: TableColumn[] = [];
    public maxImportLevels: number = 10;
   }
   
   // auto generated enums
   
   export enum eAggregate {
    None = 0,
    Sum = 1,
    Average = 2,
    Min = 3,
    Max = 4,
    Count = 5,
    First = 6,
    Last = 7,
   }
   
   export const eAggregateItems = [
    {key: eAggregate.None, name: 'None'},
    {key: eAggregate.Sum, name: 'Sum'},
    {key: eAggregate.Average, name: 'Average'},
    {key: eAggregate.Min, name: 'Min'},
    {key: eAggregate.Max, name: 'Max'},
    {key: eAggregate.Count, name: 'Count'},
    {key: eAggregate.First, name: 'First'},
    {key: eAggregate.Last, name: 'Last'},
   ]
   
   export enum eAndOr {
    And = 1,
    Or = 2,
   }
   
   export const eAndOrItems = [
    {key: 0, name: 'Unknown'},
    {key: eAndOr.And, name: 'And'},
    {key: eAndOr.Or, name: 'Or'},
   ]
   
   export enum eApiStatus {
    Activated = 1,
    Deactivated = 2,
   }
   
   export const eApiStatusItems = [
    {key: 0, name: 'Unknown'},
    {key: eApiStatus.Activated, name: 'Activated'},
    {key: eApiStatus.Deactivated, name: 'Deactivated'},
   ]
   
   export enum eChartType {
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
    {key: 0, name: 'Unknown'},
    {key: eChartType.BarVertical, name: 'BarVertical'},
    {key: eChartType.BarHorizontal, name: 'BarHorizontal'},
    {key: eChartType.BarVertical2D, name: 'BarVertical2D'},
    {key: eChartType.BarHorizontal2D, name: 'BarHorizontal2D'},
    {key: eChartType.BarVerticalStacked, name: 'BarVerticalStacked'},
    {key: eChartType.BarHorizontalStacked, name: 'BarHorizontalStacked'},
    {key: eChartType.BarVerticalNormalized, name: 'BarVerticalNormalized'},
    {key: eChartType.BarHorizontalNormalized, name: 'BarHorizontalNormalized'},
    {key: eChartType.Pie, name: 'Pie'},
    {key: eChartType.PieAdvanced, name: 'PieAdvanced'},
    {key: eChartType.PieGrid, name: 'PieGrid'},
    {key: eChartType.Line, name: 'Line'},
    {key: eChartType.Area, name: 'Area'},
    {key: eChartType.Polar, name: 'Polar'},
    {key: eChartType.AreaStacked, name: 'AreaStacked'},
    {key: eChartType.AreaNormalized, name: 'AreaNormalized'},
    {key: eChartType.Scatter, name: 'Scatter'},
    {key: eChartType.Error, name: 'Error'},
    {key: eChartType.Bubble, name: 'Bubble'},
    {key: eChartType.ForceDirected, name: 'ForceDirected'},
    {key: eChartType.HeatMap, name: 'HeatMap'},
    {key: eChartType.TreeMap, name: 'TreeMap'},
    {key: eChartType.Cards, name: 'Cards'},
    {key: eChartType.Gauge, name: 'Gauge'},
    {key: eChartType.LinearGauge, name: 'LinearGauge'},
    {key: eChartType.Map, name: 'Map'},
   ]
   
   export enum eCleanAction {
    DefaultValue = 1,
    Truncate = 2,
    Blank = 3,
    Null = 4,
    OriginalValue = 5,
    CleanValue = 6,
   }
   
   export const eCleanActionItems = [
    {key: 0, name: 'Unknown'},
    {key: eCleanAction.DefaultValue, name: 'DefaultValue'},
    {key: eCleanAction.Truncate, name: 'Truncate'},
    {key: eCleanAction.Blank, name: 'Blank'},
    {key: eCleanAction.Null, name: 'Null'},
    {key: eCleanAction.OriginalValue, name: 'OriginalValue'},
    {key: eCleanAction.CleanValue, name: 'CleanValue'},
   ]
   
   export enum eClientCommand {
    Connect = 0,
    Disconnect = 1,
    Message = 2,
    RemoteAgentUpdate = 3,
    RemoteAgentDelete = 4,
    RemoteAgentDeleteKey = 5,
    HubUpdate = 6,
    HubDelete = 7,
    Task = 8,
    FileDownload = 9,
    DownloadReady = 10,
    HubChange = 11,
    HubError = 12,
    DatalinkProgress = 13,
    DatalinkStatus = 14,
    DatajobProgress = 15,
    DatajobStatus = 16,
    DatalinkTestProgress = 17,
    TableProgress = 18,
    ApiStatus = 19,
    ApiQuery = 20,
    FlatFilesReady = 21,
    Command = 22,
   }
   
   export const eClientCommandItems = [
    {key: eClientCommand.Connect, name: 'Connect'},
    {key: eClientCommand.Disconnect, name: 'Disconnect'},
    {key: eClientCommand.Message, name: 'Message'},
    {key: eClientCommand.RemoteAgentUpdate, name: 'RemoteAgentUpdate'},
    {key: eClientCommand.RemoteAgentDelete, name: 'RemoteAgentDelete'},
    {key: eClientCommand.RemoteAgentDeleteKey, name: 'RemoteAgentDeleteKey'},
    {key: eClientCommand.HubUpdate, name: 'HubUpdate'},
    {key: eClientCommand.HubDelete, name: 'HubDelete'},
    {key: eClientCommand.Task, name: 'Task'},
    {key: eClientCommand.FileDownload, name: 'FileDownload'},
    {key: eClientCommand.DownloadReady, name: 'DownloadReady'},
    {key: eClientCommand.HubChange, name: 'HubChange'},
    {key: eClientCommand.HubError, name: 'HubError'},
    {key: eClientCommand.DatalinkProgress, name: 'DatalinkProgress'},
    {key: eClientCommand.DatalinkStatus, name: 'DatalinkStatus'},
    {key: eClientCommand.DatajobProgress, name: 'DatajobProgress'},
    {key: eClientCommand.DatajobStatus, name: 'DatajobStatus'},
    {key: eClientCommand.DatalinkTestProgress, name: 'DatalinkTestProgress'},
    {key: eClientCommand.TableProgress, name: 'TableProgress'},
    {key: eClientCommand.ApiStatus, name: 'ApiStatus'},
    {key: eClientCommand.ApiQuery, name: 'ApiQuery'},
    {key: eClientCommand.FlatFilesReady, name: 'FlatFilesReady'},
    {key: eClientCommand.Command, name: 'Command'},
   ]
   
   export enum eCompare {
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
    {key: eCompare.IsEqual, name: 'IsEqual'},
    {key: eCompare.GreaterThan, name: 'GreaterThan'},
    {key: eCompare.GreaterThanEqual, name: 'GreaterThanEqual'},
    {key: eCompare.LessThan, name: 'LessThan'},
    {key: eCompare.LessThanEqual, name: 'LessThanEqual'},
    {key: eCompare.NotEqual, name: 'NotEqual'},
    {key: eCompare.IsIn, name: 'IsIn'},
    {key: eCompare.IsNull, name: 'IsNull'},
    {key: eCompare.IsNotNull, name: 'IsNotNull'},
    {key: eCompare.Like, name: 'Like'},
   ]
   
   export enum eConcurrentTaskAction {
    Parallel = 1,
    Abend = 2,
    Sequence = 3,
   }
   
   export const eConcurrentTaskActionItems = [
    {key: 0, name: 'Unknown'},
    {key: eConcurrentTaskAction.Parallel, name: 'Parallel'},
    {key: eConcurrentTaskAction.Abend, name: 'Abend'},
    {key: eConcurrentTaskAction.Sequence, name: 'Sequence'},
   ]
   
   export enum eConnectionCategory {
    SqlDatabase = 1,
    NoSqlDatabase = 2,
    DatabaseFile = 3,
    File = 4,
    WebService = 5,
    Hub = 6,
   }
   
   export const eConnectionCategoryItems = [
    {key: 0, name: 'Unknown'},
    {key: eConnectionCategory.SqlDatabase, name: 'SqlDatabase'},
    {key: eConnectionCategory.NoSqlDatabase, name: 'NoSqlDatabase'},
    {key: eConnectionCategory.DatabaseFile, name: 'DatabaseFile'},
    {key: eConnectionCategory.File, name: 'File'},
    {key: eConnectionCategory.WebService, name: 'WebService'},
    {key: eConnectionCategory.Hub, name: 'Hub'},
   ]
   
   export enum eConnectionPurpose {
    Source = 1,
    Managed = 2,
    Target = 3,
   }
   
   export const eConnectionPurposeItems = [
    {key: 0, name: 'Unknown'},
    {key: eConnectionPurpose.Source, name: 'Source'},
    {key: eConnectionPurpose.Managed, name: 'Managed'},
    {key: eConnectionPurpose.Target, name: 'Target'},
   ]
   
   export enum eDatalinkType {
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
    {key: 0, name: 'Unknown'},
    {key: eDatalinkType.General, name: 'General', description: 'Non-categorized general purpose datalink'},
    {key: eDatalinkType.Stage, name: 'Stage', description: 'Staging - loads data into a central/interim database'},
    {key: eDatalinkType.Validate, name: 'Validate', description: 'Validate - performs data validation and cleaning'},
    {key: eDatalinkType.Transform, name: 'Transform', description: 'Transform - reshapes, aggregates data'},
    {key: eDatalinkType.Deliver, name: 'Deliver', description: 'Deliver - prepares data for delivering to a system/database'},
    {key: eDatalinkType.Publish, name: 'Publish', description: 'Publish - sends data to a target system/database'},
    {key: eDatalinkType.Share, name: 'Share', description: 'Share - datalink designed to be shared with other users'},
    {key: eDatalinkType.Query, name: 'Query', description: 'Query - datalink query used for data extracts or as a source for other datalinks'},
   ]
   
   export enum eDataObjectType {
    Table = 1,
    Datalink = 2,
    View = 3,
    Dashboard = 4,
    Api = 5,
   }
   
   export const eDataObjectTypeItems = [
    {key: 0, name: 'Unknown'},
    {key: eDataObjectType.Table, name: 'Table'},
    {key: eDataObjectType.Datalink, name: 'Datalink'},
    {key: eDataObjectType.View, name: 'View'},
    {key: eDataObjectType.Dashboard, name: 'Dashboard'},
    {key: eDataObjectType.Api, name: 'Api'},
   ]
   
   export enum eDataPrivacyStatus {
    NotAllowed = 1,
    Proxy = 2,
    Lan = 3,
    Internet = 4,
   }
   
   export const eDataPrivacyStatusItems = [
    {key: 0, name: 'Unknown'},
    {key: eDataPrivacyStatus.NotAllowed, name: 'NotAllowed'},
    {key: eDataPrivacyStatus.Proxy, name: 'Proxy'},
    {key: eDataPrivacyStatus.Lan, name: 'Lan'},
    {key: eDataPrivacyStatus.Internet, name: 'Internet'},
   ]
   
   export enum eDayOfWeek {
    Sunday = 1,
    Monday = 2,
    Tuesday = 3,
    Wednesday = 4,
    Thursday = 5,
    Friday = 6,
    Saturday = 7,
   }
   
   export const eDayOfWeekItems = [
    {key: 0, name: 'Unknown'},
    {key: eDayOfWeek.Sunday, name: 'Sunday'},
    {key: eDayOfWeek.Monday, name: 'Monday'},
    {key: eDayOfWeek.Tuesday, name: 'Tuesday'},
    {key: eDayOfWeek.Wednesday, name: 'Wednesday'},
    {key: eDayOfWeek.Thursday, name: 'Thursday'},
    {key: eDayOfWeek.Friday, name: 'Friday'},
    {key: eDayOfWeek.Saturday, name: 'Saturday'},
   ]
   
   export enum eDeltaType {
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
    RowKey = 20,
    PartitionKey = 21,
    TimeStamp = 22,
    DatabaseOperation = 23,
    ResponseSuccess = 24,
    ResponseData = 25,
    ResponseStatus = 26,
    ResponseSegment = 27,
    Error = 28,
    Url = 29,
    UpdateReason = 30,
   }
   
   export const eDeltaTypeItems = [
    {key: 0, name: 'Unknown'},
    {key: eDeltaType.AutoIncrement, name: 'AutoIncrement'},
    {key: eDeltaType.DbAutoIncrement, name: 'DbAutoIncrement'},
    {key: eDeltaType.SourceSurrogateKey, name: 'SourceSurrogateKey'},
    {key: eDeltaType.ValidFromDate, name: 'ValidFromDate'},
    {key: eDeltaType.ValidToDate, name: 'ValidToDate'},
    {key: eDeltaType.CreateDate, name: 'CreateDate'},
    {key: eDeltaType.UpdateDate, name: 'UpdateDate'},
    {key: eDeltaType.CreateAuditKey, name: 'CreateAuditKey'},
    {key: eDeltaType.UpdateAuditKey, name: 'UpdateAuditKey'},
    {key: eDeltaType.IsCurrentField, name: 'IsCurrentField'},
    {key: eDeltaType.Version, name: 'Version'},
    {key: eDeltaType.NaturalKey, name: 'NaturalKey'},
    {key: eDeltaType.TrackingField, name: 'TrackingField'},
    {key: eDeltaType.NonTrackingField, name: 'NonTrackingField'},
    {key: eDeltaType.IgnoreField, name: 'IgnoreField'},
    {key: eDeltaType.ValidationStatus, name: 'ValidationStatus'},
    {key: eDeltaType.RejectedReason, name: 'RejectedReason'},
    {key: eDeltaType.FileName, name: 'FileName'},
    {key: eDeltaType.FileRowNumber, name: 'FileRowNumber'},
    {key: eDeltaType.RowKey, name: 'RowKey'},
    {key: eDeltaType.PartitionKey, name: 'PartitionKey'},
    {key: eDeltaType.TimeStamp, name: 'TimeStamp'},
    {key: eDeltaType.DatabaseOperation, name: 'DatabaseOperation'},
    {key: eDeltaType.ResponseSuccess, name: 'ResponseSuccess'},
    {key: eDeltaType.ResponseData, name: 'ResponseData'},
    {key: eDeltaType.ResponseStatus, name: 'ResponseStatus'},
    {key: eDeltaType.ResponseSegment, name: 'ResponseSegment'},
    {key: eDeltaType.Error, name: 'Error'},
    {key: eDeltaType.Url, name: 'Url'},
    {key: eDeltaType.UpdateReason, name: 'UpdateReason'},
   ]
   
   export enum eDownloadFormat {
    Csv = 1,
    Json = 2,
    JsonCompact = 3,
   }
   
   export const eDownloadFormatItems = [
    {key: 0, name: 'Unknown'},
    {key: eDownloadFormat.Csv, name: 'Csv'},
    {key: eDownloadFormat.Json, name: 'Json'},
    {key: eDownloadFormat.JsonCompact, name: 'JsonCompact'},
   ]
   
   export enum eDownloadUrlType {
    Proxy = 1,
    Direct = 2,
   }
   
   export const eDownloadUrlTypeItems = [
    {key: 0, name: 'Unknown'},
    {key: eDownloadUrlType.Proxy, name: 'Proxy'},
    {key: eDownloadUrlType.Direct, name: 'Direct'},
   ]
   
   export enum eDuplicateStrategy {
    Abend = 0,
    First = 1,
    Last = 2,
    All = 3,
   }
   
   export const eDuplicateStrategyItems = [
    {key: eDuplicateStrategy.Abend, name: 'Abend'},
    {key: eDuplicateStrategy.First, name: 'First'},
    {key: eDuplicateStrategy.Last, name: 'Last'},
    {key: eDuplicateStrategy.All, name: 'All'},
   ]
   
   export enum eEnvironment {
    Windows = 1,
    Osx = 2,
    Linux = 3,
   }
   
   export const eEnvironmentItems = [
    {key: 0, name: 'Unknown'},
    {key: eEnvironment.Windows, name: 'Windows', description: 'Windows 7/8/8.1/10'},
    {key: eEnvironment.Osx, name: 'Osx', description: 'Mac OSX'},
    {key: eEnvironment.Linux, name: 'Linux', description: 'Linux'},
   ]
   
   export enum eErrorAction {
    Abend = 1,
    Null = 2,
    Ignore = 3,
    Execute = 4,
   }
   
   export const eErrorActionItems = [
    {key: 0, name: 'Unknown'},
    {key: eErrorAction.Abend, name: 'Abend'},
    {key: eErrorAction.Null, name: 'Null'},
    {key: eErrorAction.Ignore, name: 'Ignore'},
    {key: eErrorAction.Execute, name: 'Execute'},
   ]
   
   export enum eFailAction {
    Continue = 1,
    ContinueNonDependent = 2,
    Abend = 3,
   }
   
   export const eFailActionItems = [
    {key: 0, name: 'Unknown'},
    {key: eFailAction.Continue, name: 'Continue'},
    {key: eFailAction.ContinueNonDependent, name: 'ContinueNonDependent'},
    {key: eFailAction.Abend, name: 'Abend'},
   ]
   
   export enum eFlatFilePath {
    None = 0,
    Incoming = 1,
    Outgoing = 2,
    Processed = 3,
    Rejected = 4,
   }
   
   export const eFlatFilePathItems = [
    {key: eFlatFilePath.None, name: 'None'},
    {key: eFlatFilePath.Incoming, name: 'Incoming'},
    {key: eFlatFilePath.Outgoing, name: 'Outgoing'},
    {key: eFlatFilePath.Processed, name: 'Processed'},
    {key: eFlatFilePath.Rejected, name: 'Rejected'},
   ]
   
   export enum eFunctionCaching {
    NoCache = 0,
    EnableCache = 1,
    CallOnce = 2,
   }
   
   export const eFunctionCachingItems = [
    {key: eFunctionCaching.NoCache, name: 'NoCache'},
    {key: eFunctionCaching.EnableCache, name: 'EnableCache'},
    {key: eFunctionCaching.CallOnce, name: 'CallOnce'},
   ]
   
   export enum eFunctionType {
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
    {key: 0, name: 'Unknown'},
    {key: eFunctionType.Map, name: 'Map'},
    {key: eFunctionType.Condition, name: 'Condition'},
    {key: eFunctionType.Aggregate, name: 'Aggregate'},
    {key: eFunctionType.Series, name: 'Series'},
    {key: eFunctionType.Rows, name: 'Rows'},
    {key: eFunctionType.Validate, name: 'Validate'},
    {key: eFunctionType.Profile, name: 'Profile'},
    {key: eFunctionType.Sort, name: 'Sort'},
    {key: eFunctionType.JoinCondition, name: 'JoinCondition'},
   ]
   
   export enum eGenericType {
    None = 1,
    Numeric = 2,
    All = 3,
    String = 4,
   }
   
   export const eGenericTypeItems = [
    {key: 0, name: 'Unknown'},
    {key: eGenericType.None, name: 'None'},
    {key: eGenericType.Numeric, name: 'Numeric'},
    {key: eGenericType.All, name: 'All'},
    {key: eGenericType.String, name: 'String'},
   ]
   
   export enum eImportAction {
    Replace = 1,
    New = 2,
    Leave = 3,
    Skip = 4,
    Delete = 5,
   }
   
   export const eImportActionItems = [
    {key: 0, name: 'Unknown'},
    {key: eImportAction.Replace, name: 'Replace'},
    {key: eImportAction.New, name: 'New'},
    {key: eImportAction.Leave, name: 'Leave'},
    {key: eImportAction.Skip, name: 'Skip'},
    {key: eImportAction.Delete, name: 'Delete'},
   ]
   
   export enum eIntervalType {
    None = 0,
    Once = 1,
    Interval = 2,
    Daily = 3,
    Monthly = 4,
   }
   
   export const eIntervalTypeItems = [
    {key: eIntervalType.None, name: 'None'},
    {key: eIntervalType.Once, name: 'Once'},
    {key: eIntervalType.Interval, name: 'Interval'},
    {key: eIntervalType.Daily, name: 'Daily'},
    {key: eIntervalType.Monthly, name: 'Monthly'},
   ]
   
   export enum eInvalidAction {
    Pass = 1,
    Clean = 2,
    RejectClean = 3,
    Reject = 4,
    Discard = 5,
    Abend = 6,
   }
   
   export const eInvalidActionItems = [
    {key: 0, name: 'Unknown'},
    {key: eInvalidAction.Pass, name: 'Pass'},
    {key: eInvalidAction.Clean, name: 'Clean'},
    {key: eInvalidAction.RejectClean, name: 'RejectClean'},
    {key: eInvalidAction.Reject, name: 'Reject'},
    {key: eInvalidAction.Discard, name: 'Discard'},
    {key: eInvalidAction.Abend, name: 'Abend'},
   ]
   
   export enum eIssueCategory {
    Other = 0,
    Web = 1,
    Saving = 2,
    RemoteAgent = 3,
    Datalink = 4,
    Datajob = 5,
    Api = 6,
    View = 7,
    Dashboard = 8,
    Security = 9,
   }
   
   export const eIssueCategoryItems = [
    {key: eIssueCategory.Other, name: 'Other', description: 'Other'},
    {key: eIssueCategory.Web, name: 'Web', description: 'Web Interface'},
    {key: eIssueCategory.Saving, name: 'Saving', description: 'Saving / loading / importing / exporting items'},
    {key: eIssueCategory.RemoteAgent, name: 'RemoteAgent', description: 'Remote Agent Configuration / Connections'},
    {key: eIssueCategory.Datalink, name: 'Datalink', description: 'Running / previewing datalink'},
    {key: eIssueCategory.Datajob, name: 'Datajob', description: 'Scheduling / running datajob'},
    {key: eIssueCategory.Api, name: 'Api', description: 'Using the API'},
    {key: eIssueCategory.View, name: 'View', description: 'Using a View'},
    {key: eIssueCategory.Dashboard, name: 'Dashboard', description: 'Using a Dashboard'},
    {key: eIssueCategory.Security, name: 'Security', description: 'Login, permissions, and other security issues'},
   ]
   
   export enum eIssueSeverity {
    Critical = 0,
    Major = 1,
    Minor = 2,
    Trivial = 3,
   }
   
   export const eIssueSeverityItems = [
    {key: eIssueSeverity.Critical, name: 'Critical', description: 'Critical (currently unusable)'},
    {key: eIssueSeverity.Major, name: 'Major', description: 'Major (temporary workarounds exist)'},
    {key: eIssueSeverity.Minor, name: 'Minor', description: 'Minor (productivity imporovments)'},
    {key: eIssueSeverity.Trivial, name: 'Trivial', description: 'Trivial (Nice to Have)'},
   ]
   
   export enum eIssueStatus {
    Open = 0,
    UnderReview = 1,
    InProgress = 2,
    Complete = 3,
    Closed = 4,
   }
   
   export const eIssueStatusItems = [
    {key: eIssueStatus.Open, name: 'Open', description: 'Open - Issue has been opened.'},
    {key: eIssueStatus.UnderReview, name: 'UnderReview', description: 'Under Review - Issue is under review by support team.'},
    {key: eIssueStatus.InProgress, name: 'InProgress', description: 'In Progress - Issue is currently being worked on.'},
    {key: eIssueStatus.Complete, name: 'Complete', description: 'Complete - Issue has been completed.'},
    {key: eIssueStatus.Closed, name: 'Closed', description: 'Closed'},
   ]
   
   export enum eIssueType {
    Other = 0,
    Bug = 1,
    Request = 2,
    Question = 3,
    Feedback = 4,
   }
   
   export const eIssueTypeItems = [
    {key: eIssueType.Other, name: 'Other', description: 'Other'},
    {key: eIssueType.Bug, name: 'Bug', description: 'Bug'},
    {key: eIssueType.Request, name: 'Request', description: 'Feature Request'},
    {key: eIssueType.Question, name: 'Question', description: 'Question'},
    {key: eIssueType.Feedback, name: 'Feedback', description: 'General Feedback'},
   ]
   
   export enum eLoginProvider {
    Dexih = 1,
    Google = 2,
    Microsoft = 3,
   }
   
   export const eLoginProviderItems = [
    {key: 0, name: 'Unknown'},
    {key: eLoginProvider.Dexih, name: 'Dexih'},
    {key: eLoginProvider.Google, name: 'Google'},
    {key: eLoginProvider.Microsoft, name: 'Microsoft'},
   ]
   
   export enum eLOVObjectType {
    Table = 1,
    Datalink = 2,
    View = 3,
    Static = 4,
   }
   
   export const eLOVObjectTypeItems = [
    {key: 0, name: 'Unknown'},
    {key: eLOVObjectType.Table, name: 'Table'},
    {key: eLOVObjectType.Datalink, name: 'Datalink'},
    {key: eLOVObjectType.View, name: 'View'},
    {key: eLOVObjectType.Static, name: 'Static'},
   ]
   
   export enum eManagedTaskStatus {
    Created = 1,
    FileWatching = 2,
    Scheduled = 3,
    Queued = 4,
    Running = 5,
    Cancelled = 6,
    Error = 7,
    Completed = 8,
   }
   
   export const eManagedTaskStatusItems = [
    {key: 0, name: 'Unknown'},
    {key: eManagedTaskStatus.Created, name: 'Created'},
    {key: eManagedTaskStatus.FileWatching, name: 'FileWatching'},
    {key: eManagedTaskStatus.Scheduled, name: 'Scheduled'},
    {key: eManagedTaskStatus.Queued, name: 'Queued'},
    {key: eManagedTaskStatus.Running, name: 'Running'},
    {key: eManagedTaskStatus.Cancelled, name: 'Cancelled'},
    {key: eManagedTaskStatus.Error, name: 'Error'},
    {key: eManagedTaskStatus.Completed, name: 'Completed'},
   ]
   
   export enum eMessageCommand {
    Connect = 0,
    Disconnect = 1,
    MessageResponse = 2,
    RemoteAgentUpdate = 3,
    RemoteAgentDelete = 4,
    RemoteAgentDeleteKey = 5,
    HubUpdate = 6,
    HubDelete = 7,
    Task = 8,
    FileDownload = 9,
    DownloadReady = 10,
    HubChange = 11,
    HubError = 12,
    DatalinkProgress = 13,
    DatalinkStatus = 14,
    DatajobProgress = 15,
    DatajobStatus = 16,
    DatalinkTestProgress = 17,
    TableProgress = 18,
    ApiStatus = 19,
    ApiQuery = 20,
    FlatFilesReady = 21,
    RemoteMethod = 22,
   }
   
   export const eMessageCommandItems = [
    {key: eMessageCommand.Connect, name: 'Connect'},
    {key: eMessageCommand.Disconnect, name: 'Disconnect'},
    {key: eMessageCommand.MessageResponse, name: 'MessageResponse'},
    {key: eMessageCommand.RemoteAgentUpdate, name: 'RemoteAgentUpdate'},
    {key: eMessageCommand.RemoteAgentDelete, name: 'RemoteAgentDelete'},
    {key: eMessageCommand.RemoteAgentDeleteKey, name: 'RemoteAgentDeleteKey'},
    {key: eMessageCommand.HubUpdate, name: 'HubUpdate'},
    {key: eMessageCommand.HubDelete, name: 'HubDelete'},
    {key: eMessageCommand.Task, name: 'Task'},
    {key: eMessageCommand.FileDownload, name: 'FileDownload'},
    {key: eMessageCommand.DownloadReady, name: 'DownloadReady'},
    {key: eMessageCommand.HubChange, name: 'HubChange'},
    {key: eMessageCommand.HubError, name: 'HubError'},
    {key: eMessageCommand.DatalinkProgress, name: 'DatalinkProgress'},
    {key: eMessageCommand.DatalinkStatus, name: 'DatalinkStatus'},
    {key: eMessageCommand.DatajobProgress, name: 'DatajobProgress'},
    {key: eMessageCommand.DatajobStatus, name: 'DatajobStatus'},
    {key: eMessageCommand.DatalinkTestProgress, name: 'DatalinkTestProgress'},
    {key: eMessageCommand.TableProgress, name: 'TableProgress'},
    {key: eMessageCommand.ApiStatus, name: 'ApiStatus'},
    {key: eMessageCommand.ApiQuery, name: 'ApiQuery'},
    {key: eMessageCommand.FlatFilesReady, name: 'FlatFilesReady'},
    {key: eMessageCommand.RemoteMethod, name: 'RemoteMethod'},
   ]
   
   export enum eParameterDirection {
    Input = 1,
    Output = 2,
    ResultInput = 3,
    ResultOutput = 4,
    ReturnValue = 5,
    ResultReturnValue = 6,
    Join = 7,
   }
   
   export const eParameterDirectionItems = [
    {key: 0, name: 'Unknown'},
    {key: eParameterDirection.Input, name: 'Input'},
    {key: eParameterDirection.Output, name: 'Output'},
    {key: eParameterDirection.ResultInput, name: 'ResultInput'},
    {key: eParameterDirection.ResultOutput, name: 'ResultOutput'},
    {key: eParameterDirection.ReturnValue, name: 'ReturnValue'},
    {key: eParameterDirection.ResultReturnValue, name: 'ResultReturnValue'},
    {key: eParameterDirection.Join, name: 'Join'},
   ]
   
   export enum ePermission {
    None = 0,
    Suspended = 1,
    PublishReader = 2,
    FullReader = 3,
    User = 4,
    Owner = 5,
   }
   
   export const ePermissionItems = [
    {key: ePermission.None, name: 'None', description: 'No access.'},
    {key: ePermission.Suspended, name: 'Suspended', description: 'Suspended (banned from hub)'},
    {key: ePermission.PublishReader, name: 'PublishReader', description: 'Publish Reader (only access shared)'},
    {key: ePermission.FullReader, name: 'FullReader', description: 'Reader (read only access)'},
    {key: ePermission.User, name: 'User', description: 'User (add/modify permission)'},
    {key: ePermission.Owner, name: 'Owner', description: 'Owner (full permissions)'},
   ]
   
   export enum eRunStatus {
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
    {key: 0, name: 'Unknown'},
    {key: eRunStatus.Initialised, name: 'Initialised'},
    {key: eRunStatus.Scheduled, name: 'Scheduled'},
    {key: eRunStatus.Started, name: 'Started'},
    {key: eRunStatus.Running, name: 'Running'},
    {key: eRunStatus.RunningErrors, name: 'RunningErrors'},
    {key: eRunStatus.Finished, name: 'Finished'},
    {key: eRunStatus.FinishedErrors, name: 'FinishedErrors'},
    {key: eRunStatus.Abended, name: 'Abended'},
    {key: eRunStatus.Cancelled, name: 'Cancelled'},
    {key: eRunStatus.NotRunning, name: 'NotRunning'},
    {key: eRunStatus.Passed, name: 'Passed'},
    {key: eRunStatus.Failed, name: 'Failed'},
   ]
   
   export enum eSecurityFlag {
    None = 0,
    FastEncrypt = 1,
    FastDecrypt = 2,
    FastEncrypted = 3,
    StrongEncrypt = 4,
    StrongDecrypt = 5,
    StrongEncrypted = 6,
    OneWayHash = 7,
    OneWayHashed = 8,
    Hide = 9,
   }
   
   export const eSecurityFlagItems = [
    {key: eSecurityFlag.None, name: 'None'},
    {key: eSecurityFlag.FastEncrypt, name: 'FastEncrypt'},
    {key: eSecurityFlag.FastDecrypt, name: 'FastDecrypt'},
    {key: eSecurityFlag.FastEncrypted, name: 'FastEncrypted'},
    {key: eSecurityFlag.StrongEncrypt, name: 'StrongEncrypt'},
    {key: eSecurityFlag.StrongDecrypt, name: 'StrongDecrypt'},
    {key: eSecurityFlag.StrongEncrypted, name: 'StrongEncrypted'},
    {key: eSecurityFlag.OneWayHash, name: 'OneWayHash'},
    {key: eSecurityFlag.OneWayHashed, name: 'OneWayHashed'},
    {key: eSecurityFlag.Hide, name: 'Hide'},
   ]
   
   export enum eSeriesGrain {
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
    {key: 0, name: 'Unknown'},
    {key: eSeriesGrain.Second, name: 'Second'},
    {key: eSeriesGrain.Minute, name: 'Minute'},
    {key: eSeriesGrain.Hour, name: 'Hour'},
    {key: eSeriesGrain.Day, name: 'Day'},
    {key: eSeriesGrain.Week, name: 'Week'},
    {key: eSeriesGrain.Month, name: 'Month'},
    {key: eSeriesGrain.Year, name: 'Year'},
    {key: eSeriesGrain.Number, name: 'Number'},
   ]
   
   export enum eSharedAccess {
    Public = 1,
    Registered = 2,
    Reader = 3,
   }
   
   export const eSharedAccessItems = [
    {key: 0, name: 'Unknown'},
    {key: eSharedAccess.Public, name: 'Public', description: 'Shared data can be accessed by the public.'},
    {key: eSharedAccess.Registered, name: 'Registered', description: 'Shared data can be accessed any registered user.'},
    {key: eSharedAccess.Reader, name: 'Reader', description: 'Shared data can be accessed only by users with "PublishReader" permission.'},
   ]
   
   export enum eSharedObjectType {
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
    ListOfValues = 14,
   }
   
   export const eSharedObjectTypeItems = [
    {key: 0, name: 'Unknown'},
    {key: eSharedObjectType.Connection, name: 'Connection'},
    {key: eSharedObjectType.Table, name: 'Table'},
    {key: eSharedObjectType.FileFormat, name: 'FileFormat'},
    {key: eSharedObjectType.Datalink, name: 'Datalink'},
    {key: eSharedObjectType.Datajob, name: 'Datajob'},
    {key: eSharedObjectType.RemoteAgent, name: 'RemoteAgent'},
    {key: eSharedObjectType.ColumnValidation, name: 'ColumnValidation'},
    {key: eSharedObjectType.HubVariable, name: 'HubVariable'},
    {key: eSharedObjectType.CustomFunction, name: 'CustomFunction'},
    {key: eSharedObjectType.DatalinkTest, name: 'DatalinkTest'},
    {key: eSharedObjectType.View, name: 'View'},
    {key: eSharedObjectType.Api, name: 'Api'},
    {key: eSharedObjectType.Dashboard, name: 'Dashboard'},
    {key: eSharedObjectType.ListOfValues, name: 'ListOfValues'},
   ]
   
   export enum eSortDirection {
    Ascending = 1,
    Descending = 2,
   }
   
   export const eSortDirectionItems = [
    {key: 0, name: 'Unknown'},
    {key: eSortDirection.Ascending, name: 'Ascending'},
    {key: eSortDirection.Descending, name: 'Descending'},
   ]
   
   export enum eSourceType {
    Datalink = 1,
    Table = 2,
    Rows = 3,
    Function = 4,
   }
   
   export const eSourceTypeItems = [
    {key: 0, name: 'Unknown'},
    {key: eSourceType.Datalink, name: 'Datalink'},
    {key: eSourceType.Table, name: 'Table'},
    {key: eSourceType.Rows, name: 'Rows'},
    {key: eSourceType.Function, name: 'Function'},
   ]
   
   export enum eStatus {
    None = 1,
    Ready = 2,
    Imported = 3,
    Updated = 4,
    Added = 5,
    Error = 6,
   }
   
   export const eStatusItems = [
    {key: 0, name: 'Unknown'},
    {key: eStatus.None, name: 'None'},
    {key: eStatus.Ready, name: 'Ready'},
    {key: eStatus.Imported, name: 'Imported'},
    {key: eStatus.Updated, name: 'Updated'},
    {key: eStatus.Added, name: 'Added'},
    {key: eStatus.Error, name: 'Error'},
   ]
   
   export enum eTableType {
    Table = 1,
    View = 2,
    Query = 3,
   }
   
   export const eTableTypeItems = [
    {key: 0, name: 'Unknown'},
    {key: eTableType.Table, name: 'Table'},
    {key: eTableType.View, name: 'View'},
    {key: eTableType.Query, name: 'Query'},
   ]
   
   export enum eTestTableAction {
    None = 1,
    Truncate = 2,
    DropCreate = 3,
    TruncateCopy = 4,
    DropCreateCopy = 5,
   }
   
   export const eTestTableActionItems = [
    {key: 0, name: 'Unknown'},
    {key: eTestTableAction.None, name: 'None'},
    {key: eTestTableAction.Truncate, name: 'Truncate'},
    {key: eTestTableAction.DropCreate, name: 'DropCreate'},
    {key: eTestTableAction.TruncateCopy, name: 'TruncateCopy'},
    {key: eTestTableAction.DropCreateCopy, name: 'DropCreateCopy'},
   ]
   
   export enum eTransformItemType {
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
    {key: 0, name: 'Unknown'},
    {key: eTransformItemType.BuiltInFunction, name: 'BuiltInFunction'},
    {key: eTransformItemType.CustomFunction, name: 'CustomFunction'},
    {key: eTransformItemType.ColumnPair, name: 'ColumnPair'},
    {key: eTransformItemType.JoinPair, name: 'JoinPair'},
    {key: eTransformItemType.Sort, name: 'Sort'},
    {key: eTransformItemType.Column, name: 'Column'},
    {key: eTransformItemType.FilterPair, name: 'FilterPair'},
    {key: eTransformItemType.AggregatePair, name: 'AggregatePair'},
    {key: eTransformItemType.Series, name: 'Series'},
    {key: eTransformItemType.JoinNode, name: 'JoinNode'},
    {key: eTransformItemType.GroupNode, name: 'GroupNode'},
    {key: eTransformItemType.Node, name: 'Node'},
    {key: eTransformItemType.UnGroup, name: 'UnGroup'},
   ]
   
   export enum eTransformType {
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
    {key: 0, name: 'Unknown'},
    {key: eTransformType.Mapping, name: 'Mapping'},
    {key: eTransformType.Filter, name: 'Filter'},
    {key: eTransformType.Sort, name: 'Sort'},
    {key: eTransformType.Group, name: 'Group'},
    {key: eTransformType.Aggregate, name: 'Aggregate'},
    {key: eTransformType.Series, name: 'Series'},
    {key: eTransformType.Join, name: 'Join'},
    {key: eTransformType.Rows, name: 'Rows'},
    {key: eTransformType.Lookup, name: 'Lookup'},
    {key: eTransformType.Validation, name: 'Validation'},
    {key: eTransformType.Delta, name: 'Delta'},
    {key: eTransformType.Concatenate, name: 'Concatenate'},
    {key: eTransformType.Profile, name: 'Profile'},
    {key: eTransformType.Internal, name: 'Internal'},
   ]
   
   export enum eTransformWriterMethod {
    Bulk = 1,
    Transaction = 2,
   }
   
   export const eTransformWriterMethodItems = [
    {key: 0, name: 'Unknown'},
    {key: eTransformWriterMethod.Bulk, name: 'Bulk'},
    {key: eTransformWriterMethod.Transaction, name: 'Transaction'},
   ]
   
   export enum eTriggerMethod {
    NotTriggered = 1,
    Manual = 2,
    Schedule = 3,
    FileWatcher = 4,
    External = 5,
    Datajob = 6,
   }
   
   export const eTriggerMethodItems = [
    {key: 0, name: 'Unknown'},
    {key: eTriggerMethod.NotTriggered, name: 'NotTriggered'},
    {key: eTriggerMethod.Manual, name: 'Manual'},
    {key: eTriggerMethod.Schedule, name: 'Schedule'},
    {key: eTriggerMethod.FileWatcher, name: 'FileWatcher'},
    {key: eTriggerMethod.External, name: 'External'},
    {key: eTriggerMethod.Datajob, name: 'Datajob'},
   ]
   
   export enum eTypeCode {
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
    {key: eTypeCode.Unknown, name: 'Unknown'},
    {key: eTypeCode.Binary, name: 'Binary'},
    {key: eTypeCode.Byte, name: 'Byte'},
    {key: eTypeCode.Char, name: 'Char'},
    {key: eTypeCode.SByte, name: 'SByte'},
    {key: eTypeCode.UInt16, name: 'UInt16'},
    {key: eTypeCode.UInt32, name: 'UInt32'},
    {key: eTypeCode.UInt64, name: 'UInt64'},
    {key: eTypeCode.Int16, name: 'Int16'},
    {key: eTypeCode.Int32, name: 'Int32'},
    {key: eTypeCode.Int64, name: 'Int64'},
    {key: eTypeCode.Decimal, name: 'Decimal'},
    {key: eTypeCode.Double, name: 'Double'},
    {key: eTypeCode.Single, name: 'Single'},
    {key: eTypeCode.String, name: 'String'},
    {key: eTypeCode.Text, name: 'Text'},
    {key: eTypeCode.Boolean, name: 'Boolean'},
    {key: eTypeCode.DateTime, name: 'DateTime'},
    {key: eTypeCode.Time, name: 'Time'},
    {key: eTypeCode.Guid, name: 'Guid'},
    {key: eTypeCode.Json, name: 'Json'},
    {key: eTypeCode.Xml, name: 'Xml'},
    {key: eTypeCode.Enum, name: 'Enum'},
    {key: eTypeCode.CharArray, name: 'CharArray'},
    {key: eTypeCode.Object, name: 'Object'},
    {key: eTypeCode.Node, name: 'Node'},
    {key: eTypeCode.Geometry, name: 'Geometry'},
   ]
   
   export enum eUpdateStrategy {
    Reload = 1,
    Append = 2,
    AppendUpdate = 3,
    AppendUpdateDelete = 4,
    AppendUpdatePreserve = 5,
    AppendUpdateDeletePreserve = 6,
   }
   
   export const eUpdateStrategyItems = [
    {key: 0, name: 'Unknown'},
    {key: eUpdateStrategy.Reload, name: 'Reload'},
    {key: eUpdateStrategy.Append, name: 'Append'},
    {key: eUpdateStrategy.AppendUpdate, name: 'AppendUpdate'},
    {key: eUpdateStrategy.AppendUpdateDelete, name: 'AppendUpdateDelete'},
    {key: eUpdateStrategy.AppendUpdatePreserve, name: 'AppendUpdatePreserve'},
    {key: eUpdateStrategy.AppendUpdateDeletePreserve, name: 'AppendUpdateDeletePreserve'},
   ]
   
   export enum eViewType {
    Table = 1,
    Chart = 2,
   }
   
   export const eViewTypeItems = [
    {key: 0, name: 'Unknown'},
    {key: eViewType.Table, name: 'Table'},
    {key: eViewType.Chart, name: 'Chart'},
   ]
   
   export enum eWeekOfMonth {
    First = 1,
    Second = 2,
    Third = 3,
    Fourth = 4,
    Last = 5,
   }
   
   export const eWeekOfMonthItems = [
    {key: 0, name: 'Unknown'},
    {key: eWeekOfMonth.First, name: 'First'},
    {key: eWeekOfMonth.Second, name: 'Second'},
    {key: eWeekOfMonth.Third, name: 'Third'},
    {key: eWeekOfMonth.Fourth, name: 'Fourth'},
    {key: eWeekOfMonth.Last, name: 'Last'},
   ]
   
   export enum logLevel {
    Trace = 0,
    Debug = 1,
    Information = 2,
    Warning = 3,
    Error = 4,
    Critical = 5,
    None = 6,
   }
   
   export const logLevelItems = [
    {key: logLevel.Trace, name: 'Trace'},
    {key: logLevel.Debug, name: 'Debug'},
    {key: logLevel.Information, name: 'Information'},
    {key: logLevel.Warning, name: 'Warning'},
    {key: logLevel.Error, name: 'Error'},
    {key: logLevel.Critical, name: 'Critical'},
    {key: logLevel.None, name: 'None'},
   ]
   
   