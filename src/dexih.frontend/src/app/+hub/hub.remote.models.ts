import { eTypeCode, eFunctionType, eTransformType, ApiData, RemoteLibraries, ManagedTask } from '../shared/shared.models';


export class RemoteAgentStatus {
    public previousDatajobs: Array<ManagedTask>;
    public previousDatalinks: Array<ManagedTask>;
    public previousDatalinkTests: Array<ManagedTask>;
    public activeDatajobs: Array<ManagedTask>;
    public activeDatalinks: Array<ManagedTask>;
    public activeDatalinkTests: Array<ManagedTask>;
    public remoteLibraries: RemoteLibraries;
    public activeApis: Array<ApiData>;

    constructor() {
        this.activeDatajobs = [];
        this.activeDatalinks = [];
        this.activeApis = [];
    }
}

// export class RemoteLibraries {
//     public functions: FunctionReference[];
//     public connections: ConnectionReference[];
//     public transforms: TransformReference[];

//     public GetConnectionReference(connection: DexihConnection): ConnectionReference {
//         if (connection && this.connections) {
//             let ref = this.connections.find(c =>
//                 c.connectionAssemblyName === connection.connectionAssemblyName
//                 && c.connectionClassName === connection.connectionClassName);

//             return ref;
//         } else {
//             return null;
//         }
//     }

//     public GetTransformReference(transform: DexihDatalinkTransform): TransformReference {
//         if (transform && this.transforms) {
//             let ref = this.transforms.find(c =>
//                 c.transformAssemblyName === transform.transformAssemblyName
//                 && c.transformClassName === transform.transformClassName);

//             return ref;
//         } else {
//             return null;
//         }
//     }

//     // transforms that can be added/removed within a datalink
//     public GetUserConfigTransformReference(): TransformReference[] {
//         if (!this.transforms) {
//             return [];
//         }
//         let userConfig = transformTypes.filter(c => c.allowUserConfig);
//         return this.transforms.filter(c => userConfig.findIndex(u => u.key === c.transformType ) >= 0 );
//     }

//     public GetFunctionReference(item: DexihDatalinkTransformItem): FunctionReference {
//         if (this.functions && item && item.functionClassName) {
//             let ref = this.functions.find(c =>
//                 c.functionAssemblyName === item.functionAssemblyName
//                 && c.functionClassName === item.functionClassName);

//             return ref;
//         } else {
//             return null;
//         }
//     }
// }

// export enum eFunctionType {
//     Map = <any>'Map',
//     Condition = <any>'Condition',
//     Aggregate = <any>'Aggregate',
//     Series = <any>'Series',
//     Rows = <any>'Rows',
//     Validate = <any>'Validate',
//     Profile = <any>'Profile',
// }

export const functionTypes = [
    {key: eFunctionType.Condition, name: 'Condition Function'},
    {key: eFunctionType.Map, name: 'Mapping Function'},
    {key: eFunctionType.Aggregate, name: 'Aggregate Function'},
    {key: eFunctionType.Rows, name: 'Row Generating Function'},
    {key: eFunctionType.Profile, name: 'Profile Function'},
    {key: eFunctionType.Validate, name: 'Validation Function'},
]

// export enum eGenericType {
//     None = <any>'None',
//     Numeric = <any>'Numeric',
//     All = <any>'All',
//     String = <any>'String',
// }


// export class FunctionReference {
//     public functionType: eFunctionType;
//     public category: string;
//     public name: string;
//     public description: string;


//     public functionClassName: string;
//     public functionMethodName: string;
//     public functionAssemblyName: string;
//     public resultMethodName: string;
//     public resetMethodName: string;
//     public importMethodName: string;

//     public isGeneric: boolean;
//     public genericTypeDefault: eTypeCode;
//     public genericType: eGenericType;

//     /// <summary>
//     /// Used for profiling functions, indicates the property use to switch detailed results on/off.
//     /// </summary>
//     public detailedFlagName: string;

//     /// <summary>
//     /// Used to map a filter equivalent operator
//     /// </summary>
//     public compare: eCompare;

//     public IsStandardFunction: boolean;

//     public returnParameters: FunctionParameter[];
//     public returnRank: number;
//     public inputParameters: FunctionParameter[];
//     public outputParameters: FunctionParameter[];

//     public resultReturnParameters: FunctionParameter[];
//     public resultInputParameters: FunctionParameter[];
//     public resultOutputParameters: FunctionParameter[];
// }


// export class FunctionParameter {
//     public name: string;
//     public parameterName: string;
//     public description: string;
//     public isGeneric: boolean;
//     public dataType: eTypeCode;
//     public rank = 0;
//     public isIndex: boolean;
//     public linkedName: string;
//     public linkedDescription: string;
//     public isLabel: boolean;
//     public listOfValues: string[];
//     public defaultValue: any;
// }

// export enum eConnectionCategory {
//     SqlDatabase = <any>'SqlDatabase',
//     NoSqlDatabase = <any>'NoSqlDatabase',
//     DatabaseFile = <any>'DatabaseFile',
//     File = <any>'File',
//     WebService = <any>'WebService',
//     Hub = <any>'Hub',
// }


// export class ConnectionReference {
//     public connectionCategory: eConnectionCategory;
//     public name: string;
//     public description: string;
//     public databaseDescription: string;
//     public serverDescription: string;
//     public allowsConnectionString: boolean;
//     public allowsSql: boolean;
//     public allowsFlatFiles: boolean;
//     public allowsManagedConnection: boolean;
//     public allowsSourceConnection: boolean;
//     public allowsTargetConnection: boolean;
//     public allowsUserPassword: boolean;
//     public allowsWindowsAuth: boolean;
//     public requiresDatabase: boolean;
//     public connectionClassName: string;
//     public connectionAssemblyName: string;
// }

// export enum eTransformType {
//     Mapping = <any>'Mapping',
//     Filter = <any>'Filter',
//     Sort = <any>'Sort',
//     Group = <any>'Group',
//     Aggregate = <any>'Aggregate',
//     Series = <any>'Series',
//     Join = <any>'Join',
//     Rows = <any>'Rows',
//     Lookup = <any>'Lookup',
//     Validation = <any>'Validation',
//     Delta = <any>'Delta',
//     Concatenate = <any>'Concatenate',
//     Profile = <any>'Profile'
// }

export const transformTypes  = [
    {key: eTransformType.Mapping, icon: 'fa fa-random', allowUserConfig: true},
    {key: eTransformType.Filter, icon: 'fa fa-filter', allowUserConfig: true},
    {key: eTransformType.Sort, icon: 'fa fa-sort-alpha-asc', allowUserConfig: true},
    {key: eTransformType.Group, icon: 'fa fa-cubes', allowUserConfig: true},
    {key: eTransformType.Aggregate, icon: 'fa fa-calculator', allowUserConfig: true},
    {key: eTransformType.Series, icon: 'fa fa-line-chart', allowUserConfig: true},
    {key: eTransformType.Join, icon: 'fa fa-link', allowUserConfig: true},
    {key: eTransformType.Rows, icon: 'fa fa-bars', allowUserConfig: true},
    {key: eTransformType.Lookup, icon: 'fa fa-binoculars', allowUserConfig: true},
    {key: eTransformType.Validation, icon: 'fa fa-check-square-o', allowUserConfig: false},
    {key: eTransformType.Delta, icon: 'fa fa-exchange', allowUserConfig: false},
    {key: eTransformType.Concatenate, icon: 'fa fa-angle-double-down', allowUserConfig: true},
    {key: eTransformType.Profile, icon: 'fa fa-angle-double-down', allowUserConfig: false},
];


export class TransformReference {
    public transformType: eTransformType;
    public transformClassName: string;
    public transformAssemblyName: string;

    public name: string;
    public description: string;
}

// export enum eTypeCode {
//     Binary = <any>'Binary',
//     Byte = <any>'Byte',
//     CharArray = <any>'CharArray',
//     SByte = <any>'SByte',
//     UInt16 = <any>'UInt16',
//     UInt32 = <any>'UInt32',
//     UInt64 = <any>'UInt64',
//     Int16 = <any>'Int16',
//     Int32 = <any>'Int32',
//     Int64 = <any>'Int64',
//     Decimal = <any>'Decimal',
//     Double = <any>'Double',
//     Single = <any>'Single',
//     String = <any>'String',
//     Text = <any>'Text',
//     Boolean = <any>'Boolean',
//     DateTime = <any>'DateTime',
//     Time = <any>'Time',
//     Guid = <any>'Guid',
//     Json = <any>'Json',
//     Xml = <any>'Xml',
//     Node = <any>'Node',
//     Geometry = <any>'Geometry'
// }

export const TypeCodes = [
    {key: eTypeCode.String, name: 'String', isNumeric: false, isString: true},
    {key: eTypeCode.CharArray, name: 'Char[fixed length string]', isNumeric: false, isString: true},
    {key: eTypeCode.Text, name: 'Text', isNumeric: false, isString: true},
    {key: eTypeCode.Binary, name: 'Binary', isNumeric: false, isString: false},
    {key: eTypeCode.Boolean, name: 'Boolean', isNumeric: false, isString: false},
    {key: eTypeCode.DateTime, name: 'Date & Time', isNumeric: false, isString: false},
    {key: eTypeCode.Decimal, name: 'Decimal', isNumeric: true, isString: false},
    {key: eTypeCode.Double, name: 'Double', isNumeric: true, isString: false},
    {key: eTypeCode.Int16, name: 'Short Integer', isNumeric: true, isString: false},
    {key: eTypeCode.Int32, name: 'Integer', isNumeric: true, isString: false},
    {key: eTypeCode.Int64, name: 'Long Integer', isNumeric: true, isString: false},
    {key: eTypeCode.UInt16, name: 'Unsigned Short Integer', isNumeric: true, isString: false},
    {key: eTypeCode.UInt32, name: 'Unsigned Integer', isNumeric: true, isString: false},
    {key: eTypeCode.UInt64, name: 'Unsigned Long Integer', isNumeric: true, isString: false},
    {key: eTypeCode.Byte, name: 'Byte', isNumeric: false, isString: false},
    {key: eTypeCode.SByte, name: 'Signed Byte', isNumeric: false, isString: false},
    {key: eTypeCode.Time, name: 'Time', isNumeric: false, isString: false},
    {key: eTypeCode.Guid, name: 'Guid', isNumeric: false, isString: false},
    {key: eTypeCode.Xml, name: 'Xml', isNumeric: false, isString: false},
    {key: eTypeCode.Json, name: 'Json', isNumeric: false, isString: false},
    {key: eTypeCode.Geometry, name: 'Geometry (spacial data)', isNumeric: false, isString: false},
    {key: eTypeCode.Node, name: 'Node (contains child nodes)', isNumeric: false, isString: false},

];

export enum eBasicType {
    Any,
    String,
    Numeric,
    Date,
    Time,
    Boolean,
    Binary
}

// Functions to simplify display of typeCodes.
export class TypeFunctions {
    constructor(
        public dataType: eTypeCode,
        public maxLength: number,
        public precision: number,
        public scale: number ) {

    }

    // converts a typeCode to basicType.
    public getBasicTypeCode(): eBasicType {
        switch (this.dataType) {
            case eTypeCode.Byte:
            case eTypeCode.SByte:
            case eTypeCode.UInt16:
            case eTypeCode.UInt32:
            case eTypeCode.UInt64:
            case eTypeCode.Int16:
            case eTypeCode.Int32:
            case eTypeCode.Int64:
            case eTypeCode.Decimal:
            case eTypeCode.Double:
            case eTypeCode.Single: return eBasicType.Numeric;
            case eTypeCode.Guid:
            case eTypeCode.Text:
            case eTypeCode.CharArray:
            case eTypeCode.String: return eBasicType.String;
            case eTypeCode.Boolean: return eBasicType.Boolean;
            case eTypeCode.DateTime: return eBasicType.Date;
            case eTypeCode.Time: return eBasicType.Time;
            case eTypeCode.Binary: return eBasicType.Binary;
            default: return eBasicType.Any;
        }
    }

    // tests if column is string type.
    public columnIsString(): boolean {
        return this.dataType === eTypeCode.String || this.dataType === eTypeCode.CharArray;
    }

    // tests if column is a decimal type.
    public columnIsDecimal(): boolean {
        return this.dataType === eTypeCode.Double || this.dataType === eTypeCode.Decimal || this.dataType === eTypeCode.Single;
    }

    // formats the type with bracket indicating precision (e.g. string(10) or decimal(5,2) )
    public columnType(): string {
        let type: string = eTypeCode[this.dataType];
        if (this.columnIsString() && this.maxLength > 0) {
            type = type + '(' + this.maxLength + ')';
        }
        if (this.columnIsDecimal()) {
            type = type + '(' + this.precision + ', ' + this.scale + ')';
        }

        return type;
    }
}
