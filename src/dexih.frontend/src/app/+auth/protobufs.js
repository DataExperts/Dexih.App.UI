/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/light");

var $root = ($protobuf.roots["default"] || ($protobuf.roots["default"] = new $protobuf.Root()))
.setOptions({
  csharp_namespace: "ProtoBuf.Bcl"
})
.addJSON({
  CacheManager: {
    fields: {
      Hub: {
        type: "DexihBaseEntity",
        id: 1
      },
      BuildVersion: {
        type: "string",
        id: 2
      },
      BuildDate: {
        type: ".bcl.DateTime",
        id: 3
      },
      GoogleClientId: {
        type: "string",
        id: 4
      },
      MicrosoftClientId: {
        type: "string",
        id: 5
      },
      GoogleMapsAPIKey: {
        type: "string",
        id: 6
      },
      DefaultRemoteLibraries: {
        type: "RemoteLibraries",
        id: 7
      }
    }
  },
  ChartConfig: {
    fields: {
      LabelColumn: {
        type: "string",
        id: 1
      },
      SeriesColumn: {
        type: "string",
        id: 2
      },
      SeriesColumns: {
        rule: "repeated",
        type: "string",
        id: 3
      },
      XColumn: {
        type: "string",
        id: 4
      },
      YColumn: {
        type: "string",
        id: 5
      },
      MinColumn: {
        type: "string",
        id: 6
      },
      MaxColumn: {
        type: "string",
        id: 7
      },
      RadiusColumn: {
        type: "string",
        id: 8
      },
      LatitudeColumn: {
        type: "string",
        id: 9
      },
      LongitudeColumn: {
        type: "string",
        id: 10
      },
      ChartType: {
        type: "EChartType",
        id: 11,
        options: {
          "default": "BarVertical"
        }
      },
      ColorScheme: {
        type: "string",
        id: 12
      },
      ShowGradient: {
        type: "bool",
        id: 13,
        options: {
          "default": false
        }
      },
      ShowXAxis: {
        type: "bool",
        id: 14,
        options: {
          "default": false
        }
      },
      ShowYAxis: {
        type: "bool",
        id: 15,
        options: {
          "default": false
        }
      },
      ShowLegend: {
        type: "bool",
        id: 16,
        options: {
          "default": false
        }
      },
      LegendPosition: {
        type: "string",
        id: 17
      },
      ShowXAxisLabel: {
        type: "bool",
        id: 18,
        options: {
          "default": false
        }
      },
      ShowYAxisLabel: {
        type: "bool",
        id: 19,
        options: {
          "default": false
        }
      },
      ShowGridLines: {
        type: "bool",
        id: 20,
        options: {
          "default": false
        }
      },
      XAxisLabel: {
        type: "string",
        id: 21
      },
      YAxisLabel: {
        type: "string",
        id: 22
      },
      XScaleMax: {
        type: "double",
        id: 23
      },
      XScaleMin: {
        type: "double",
        id: 24
      },
      YScaleMax: {
        type: "double",
        id: 25
      },
      YScaleMin: {
        type: "double",
        id: 26
      },
      AutoScale: {
        type: "bool",
        id: 27,
        options: {
          "default": false
        }
      },
      ExplodeSlices: {
        type: "bool",
        id: 28,
        options: {
          "default": false
        }
      },
      Doughnut: {
        type: "bool",
        id: 29,
        options: {
          "default": false
        }
      }
    }
  },
  ConnectionAttribute: {
    oneofs: {
      subtype: {
        oneof: [
          "ConnectionReference"
        ]
      }
    },
    fields: {
      ConnectionCategory: {
        type: "EConnectionCategory",
        id: 1,
        options: {
          "default": "SqlDatabase"
        }
      },
      Name: {
        type: "string",
        id: 2
      },
      Description: {
        type: "string",
        id: 3
      },
      DatabaseDescription: {
        type: "string",
        id: 4
      },
      ServerDescription: {
        type: "string",
        id: 5
      },
      AllowsConnectionString: {
        type: "bool",
        id: 6,
        options: {
          "default": false
        }
      },
      AllowsSql: {
        type: "bool",
        id: 7,
        options: {
          "default": false
        }
      },
      AllowsFlatFiles: {
        type: "bool",
        id: 8,
        options: {
          "default": false
        }
      },
      AllowsManagedConnection: {
        type: "bool",
        id: 9,
        options: {
          "default": false
        }
      },
      AllowsSourceConnection: {
        type: "bool",
        id: 10,
        options: {
          "default": false
        }
      },
      AllowsTargetConnection: {
        type: "bool",
        id: 11,
        options: {
          "default": false
        }
      },
      AllowsUserPassword: {
        type: "bool",
        id: 12,
        options: {
          "default": false
        }
      },
      AllowsWindowsAuth: {
        type: "bool",
        id: 13,
        options: {
          "default": false
        }
      },
      RequiresDatabase: {
        type: "bool",
        id: 14,
        options: {
          "default": false
        }
      },
      RequiresLocalStorage: {
        type: "bool",
        id: 15,
        options: {
          "default": false
        }
      },
      ConnectionReference: {
        type: "ConnectionReference",
        id: 100
      }
    }
  },
  ConnectionReference: {
    fields: {
      ConnectionAssemblyName: {
        type: "string",
        id: 1
      },
      ConnectionClassName: {
        type: "string",
        id: 2
      }
    }
  },
  DexihActiveAgent: {
    fields: {
      RemoteAgentKey: {
        type: "int64",
        id: 1,
        options: {
          "default": 0
        }
      },
      InstanceId: {
        type: "string",
        id: 2
      },
      User: {
        type: "string",
        id: 3
      },
      Name: {
        type: "string",
        id: 4
      },
      IsRunning: {
        type: "bool",
        id: 5,
        options: {
          "default": false
        }
      },
      IpAddress: {
        type: "string",
        id: 6
      },
      IsEncrypted: {
        type: "bool",
        id: 7,
        options: {
          "default": false
        }
      },
      DataPrivacyStatus: {
        type: "EDataPrivacyStatus",
        id: 8,
        options: {
          "default": "NotAllowed"
        }
      },
      DownloadUrls: {
        rule: "repeated",
        type: "DownloadUrl",
        id: 9
      },
      UpgradeAvailable: {
        type: "bool",
        id: 10,
        options: {
          "default": false
        }
      },
      Version: {
        type: "string",
        id: 11
      },
      LatestVersion: {
        type: "string",
        id: 12
      },
      LatestDownloadUrl: {
        type: "string",
        id: 13
      }
    }
  },
  DexihApi: {
    fields: {
      SourceType: {
        type: "ESourceType",
        id: 1,
        options: {
          "default": "Datalink"
        }
      },
      SourceTableKey: {
        type: "int64",
        id: 2
      },
      SourceDatalinkKey: {
        type: "int64",
        id: 3
      },
      AutoStart: {
        type: "bool",
        id: 4,
        options: {
          "default": false
        }
      },
      CacheQueries: {
        type: "bool",
        id: 5,
        options: {
          "default": false
        }
      },
      CacheResetInterval: {
        type: ".bcl.TimeSpan",
        id: 6
      },
      LogDirectory: {
        type: "string",
        id: 7
      },
      SelectQuery: {
        type: "SelectQuery",
        id: 8
      },
      Parameters: {
        rule: "repeated",
        type: "DexihBaseEntity",
        id: 9
      },
      IsShared: {
        type: "bool",
        id: 10,
        options: {
          "default": false
        }
      }
    }
  },
  DexihApiParameter: {
    fields: {
      ApiKey: {
        type: "int64",
        id: 1,
        options: {
          "default": 0
        }
      },
      Api: {
        type: "DexihBaseEntity",
        id: 2
      }
    }
  },
  DexihBaseEntity: {
    oneofs: {
      subtype: {
        oneof: [
          "DexihHub",
          "DexihHubUser",
          "DexihRemoteAgent",
          "DexihHubEntity"
        ]
      }
    },
    fields: {
      CreateDate: {
        type: ".bcl.DateTime",
        id: 1
      },
      UpdateDate: {
        type: ".bcl.DateTime",
        id: 2
      },
      IsValid: {
        type: "bool",
        id: 3,
        options: {
          "default": false
        }
      },
      DexihHub: {
        type: "DexihHub",
        id: 100
      },
      DexihHubUser: {
        type: "DexihHubUser",
        id: 200
      },
      DexihRemoteAgent: {
        type: "DexihRemoteAgent",
        id: 300
      },
      DexihHubEntity: {
        type: "DexihHubEntity",
        id: 10000
      }
    }
  },
  DexihColumnBase: {
    oneofs: {
      subtype: {
        oneof: [
          "DexihDatalinkColumn",
          "DexihDatalinkStepColumn",
          "DexihTableColumn"
        ]
      }
    },
    fields: {
      Position: {
        type: "int32",
        id: 1,
        options: {
          "default": 0
        }
      },
      LogicalName: {
        type: "string",
        id: 2
      },
      ColumnGroup: {
        type: "string",
        id: 3
      },
      DataType: {
        type: "ETypeCode",
        id: 4,
        options: {
          "default": "Binary"
        }
      },
      MaxLength: {
        type: "int32",
        id: 5
      },
      Precision: {
        type: "int32",
        id: 6
      },
      IsUnicode: {
        type: "bool",
        id: 7
      },
      Scale: {
        type: "int32",
        id: 8
      },
      AllowDbNull: {
        type: "bool",
        id: 9,
        options: {
          "default": false
        }
      },
      DeltaType: {
        type: "EDeltaType",
        id: 10,
        options: {
          "default": "AutoIncrement"
        }
      },
      DefaultValue: {
        type: "string",
        id: 11
      },
      IsUnique: {
        type: "bool",
        id: 12,
        options: {
          "default": false
        }
      },
      IsMandatory: {
        type: "bool",
        id: 13,
        options: {
          "default": false
        }
      },
      IsIncrementalUpdate: {
        type: "bool",
        id: 14,
        options: {
          "default": false
        }
      },
      IsInput: {
        type: "bool",
        id: 15,
        options: {
          "default": false
        }
      },
      Rank: {
        type: "int32",
        id: 16,
        options: {
          "default": 0
        }
      },
      SecurityFlag: {
        type: "ESecurityFlag",
        id: 17,
        options: {
          "default": "None"
        }
      },
      DexihDatalinkColumn: {
        type: "DexihDatalinkColumn",
        id: 100
      },
      DexihDatalinkStepColumn: {
        type: "DexihDatalinkStepColumn",
        id: 200
      },
      DexihTableColumn: {
        type: "DexihTableColumn",
        id: 300
      }
    }
  },
  DexihColumnValidation: {
    fields: {
      DataType: {
        type: "ETypeCode",
        id: 1,
        options: {
          "default": "Binary"
        }
      },
      MinLength: {
        type: "int32",
        id: 2
      },
      MaxLength: {
        type: "int32",
        id: 3
      },
      AllowDbNull: {
        type: "bool",
        id: 4,
        options: {
          "default": false
        }
      },
      MinValue: {
        type: ".bcl.Decimal",
        id: 5
      },
      MaxValue: {
        type: ".bcl.Decimal",
        id: 6
      },
      PatternMatch: {
        type: "string",
        id: 7
      },
      RegexMatch: {
        type: "string",
        id: 8
      },
      ListOfValues: {
        rule: "repeated",
        type: "string",
        id: 9
      },
      ListOfNotValues: {
        rule: "repeated",
        type: "string",
        id: 10
      },
      LookupColumnKey: {
        type: "int64",
        id: 11
      },
      LookupIsValid: {
        type: "bool",
        id: 12,
        options: {
          "default": false
        }
      },
      LookupMultipleRecords: {
        type: "bool",
        id: 13,
        options: {
          "default": false
        }
      },
      InvalidAction: {
        type: "EInvalidAction",
        id: 14,
        options: {
          "default": 0
        }
      },
      CleanAction: {
        type: "ECleanAction",
        id: 15,
        options: {
          "default": 0
        }
      },
      CleanValue: {
        type: "string",
        id: 16
      }
    }
  },
  DexihConnection: {
    fields: {
      ConnectionAssemblyName: {
        type: "string",
        id: 1
      },
      ConnectionClassName: {
        type: "string",
        id: 2
      },
      Purpose: {
        type: "EConnectionPurpose",
        id: 3,
        options: {
          "default": "Source"
        }
      },
      Server: {
        type: "string",
        id: 4
      },
      UseWindowsAuth: {
        type: "bool",
        id: 5,
        options: {
          "default": false
        }
      },
      Username: {
        type: "string",
        id: 6
      },
      Password: {
        type: "string",
        id: 7
      },
      UsePasswordVariable: {
        type: "bool",
        id: 8,
        options: {
          "default": false
        }
      },
      DefaultDatabase: {
        type: "string",
        id: 9
      },
      Filename: {
        type: "string",
        id: 10
      },
      UseConnectionString: {
        type: "bool",
        id: 11,
        options: {
          "default": false
        }
      },
      ConnectionString: {
        type: "string",
        id: 12
      },
      UseConnectionStringVariable: {
        type: "bool",
        id: 13,
        options: {
          "default": false
        }
      },
      EmbedTableKey: {
        type: "bool",
        id: 14,
        options: {
          "default": false
        }
      },
      PasswordRaw: {
        type: "string",
        id: 15
      },
      ConnectionStringRaw: {
        type: "string",
        id: 16
      }
    }
  },
  DexihCustomFunction: {
    fields: {
      MethodCode: {
        type: "string",
        id: 1
      },
      ResultCode: {
        type: "string",
        id: 2
      },
      ReturnType: {
        type: "ETypeCode",
        id: 3
      },
      FunctionType: {
        type: "EFunctionType",
        id: 4
      },
      IsGeneric: {
        type: "bool",
        id: 5,
        options: {
          "default": false
        }
      },
      GenericTypeDefault: {
        type: "ETypeCode",
        id: 6,
        options: {
          "default": "Binary"
        }
      },
      DexihCustomFunctionParameters: {
        rule: "repeated",
        type: "DexihBaseEntity",
        id: 7
      }
    }
  },
  DexihCustomFunctionParameter: {
    fields: {
      CustomFunctionKey: {
        type: "int64",
        id: 1,
        options: {
          "default": 0
        }
      }
    }
  },
  DexihDashboard: {
    fields: {
      IsShared: {
        type: "bool",
        id: 1,
        options: {
          "default": false
        }
      },
      MinRows: {
        type: "int32",
        id: 2,
        options: {
          "default": 0
        }
      },
      MinCols: {
        type: "int32",
        id: 3,
        options: {
          "default": 0
        }
      },
      MaxRows: {
        type: "int32",
        id: 4,
        options: {
          "default": 0
        }
      },
      MaxCols: {
        type: "int32",
        id: 5,
        options: {
          "default": 0
        }
      },
      AutoRefresh: {
        type: "bool",
        id: 6,
        options: {
          "default": false
        }
      },
      DexihDashboardItems: {
        rule: "repeated",
        type: "DexihBaseEntity",
        id: 7
      },
      Parameters: {
        rule: "repeated",
        type: "DexihBaseEntity",
        id: 8
      }
    }
  },
  DexihDashboardItem: {
    fields: {
      Cols: {
        type: "int32",
        id: 1,
        options: {
          "default": 0
        }
      },
      Rows: {
        type: "int32",
        id: 2,
        options: {
          "default": 0
        }
      },
      X: {
        type: "int32",
        id: 3,
        options: {
          "default": 0
        }
      },
      Y: {
        type: "int32",
        id: 4,
        options: {
          "default": 0
        }
      },
      Header: {
        type: "bool",
        id: 5,
        options: {
          "default": false
        }
      },
      Scrollable: {
        type: "bool",
        id: 6,
        options: {
          "default": false
        }
      },
      ViewKey: {
        type: "int64",
        id: 7,
        options: {
          "default": 0
        }
      },
      DashboardKey: {
        type: "int64",
        id: 8
      },
      Parameters: {
        rule: "repeated",
        type: "DexihBaseEntity",
        id: 9
      }
    }
  },
  DexihDashboardItemParameter: {
    fields: {
      DashboardItemKey: {
        type: "int64",
        id: 1,
        options: {
          "default": 0
        }
      }
    }
  },
  DexihDashboardParameter: {
    fields: {
      DashboardKey: {
        type: "int64",
        id: 1,
        options: {
          "default": 0
        }
      }
    }
  },
  DexihDatajob: {
    fields: {
      FailAction: {
        type: "EFailAction",
        id: 1,
        options: {
          "default": "Continue"
        }
      },
      AuditConnectionKey: {
        type: "int64",
        id: 2
      },
      FileWatch: {
        type: "bool",
        id: 3,
        options: {
          "default": false
        }
      },
      AutoStart: {
        type: "bool",
        id: 4,
        options: {
          "default": false
        }
      },
      DexihDatalinkSteps: {
        rule: "repeated",
        type: "DexihBaseEntity",
        id: 5
      },
      DexihTriggers: {
        rule: "repeated",
        type: "DexihBaseEntity",
        id: 6
      },
      Parameters: {
        rule: "repeated",
        type: "DexihBaseEntity",
        id: 7
      }
    }
  },
  DexihDatajobParameter: {
    fields: {
      DatajobKey: {
        type: "int64",
        id: 1,
        options: {
          "default": 0
        }
      }
    }
  },
  DexihDatalink: {
    fields: {
      SourceDatalinkTableKey: {
        type: "int64",
        id: 1,
        options: {
          "default": 0
        }
      },
      AuditConnectionKey: {
        type: "int64",
        id: 2
      },
      UpdateStrategy: {
        type: "EUpdateStrategy",
        id: 3,
        options: {
          "default": "Reload"
        }
      },
      LoadStrategy: {
        type: "ETransformWriterMethod",
        id: 4,
        options: {
          "default": "Bulk"
        }
      },
      DatalinkType: {
        type: "EDatalinkType",
        id: 5,
        options: {
          "default": "General"
        }
      },
      RowsPerCommit: {
        type: "int32",
        id: 6,
        options: {
          "default": 0
        }
      },
      RowsPerProgress: {
        type: "int32",
        id: 7,
        options: {
          "default": 0
        }
      },
      RollbackOnFail: {
        type: "bool",
        id: 8,
        options: {
          "default": false
        }
      },
      IsQuery: {
        type: "bool",
        id: 9,
        options: {
          "default": false
        }
      },
      MaxRows: {
        type: "int32",
        id: 10,
        options: {
          "default": 0
        }
      },
      AddDefaultRow: {
        type: "bool",
        id: 11,
        options: {
          "default": false
        }
      },
      ProfileTableName: {
        type: "string",
        id: 12
      },
      IsShared: {
        type: "bool",
        id: 13,
        options: {
          "default": false
        }
      },
      EntityStatus: {
        type: "EntityStatus",
        id: 14
      },
      DexihDatalinkProfiles: {
        rule: "repeated",
        type: "DexihBaseEntity",
        id: 15
      },
      DexihDatalinkTransforms: {
        rule: "repeated",
        type: "DexihBaseEntity",
        id: 16
      },
      DexihDatalinkTargets: {
        rule: "repeated",
        type: "DexihBaseEntity",
        id: 17
      },
      Parameters: {
        rule: "repeated",
        type: "DexihBaseEntity",
        id: 18
      },
      SourceDatalinkTable: {
        type: "DexihBaseEntity",
        id: 19
      }
    }
  },
  DexihDatalinkColumn: {
    fields: {
      Key: {
        type: "int64",
        id: 1,
        options: {
          "default": 0
        }
      },
      DatalinkTableKey: {
        type: "int64",
        id: 2
      },
      ChildColumns: {
        rule: "repeated",
        type: "DexihBaseEntity",
        id: 3
      }
    }
  },
  DexihDatalinkDependency: {
    fields: {
      DatalinkStepKey: {
        type: "int64",
        id: 1,
        options: {
          "default": 0
        }
      },
      DependentDatalinkStepKey: {
        type: "int64",
        id: 2,
        options: {
          "default": 0
        }
      }
    }
  },
  DexihDatalinkParameter: {
    fields: {
      DatalinkKey: {
        type: "int64",
        id: 1,
        options: {
          "default": 0
        }
      }
    }
  },
  DexihDatalinkProfile: {
    fields: {
      DatalinkKey: {
        type: "int64",
        id: 1,
        options: {
          "default": 0
        }
      },
      FunctionClassName: {
        type: "string",
        id: 2
      },
      FunctionAssemblyName: {
        type: "string",
        id: 3
      },
      FunctionMethodName: {
        type: "string",
        id: 4
      },
      DetailedResults: {
        type: "bool",
        id: 5,
        options: {
          "default": false
        }
      }
    }
  },
  DexihDatalinkStep: {
    fields: {
      DatajobKey: {
        type: "int64",
        id: 1,
        options: {
          "default": 0
        }
      },
      DatalinkKey: {
        type: "int64",
        id: 2
      },
      DexihDatalinkStepColumns: {
        rule: "repeated",
        type: "DexihBaseEntity",
        id: 3
      },
      DexihDatalinkDependencies: {
        rule: "repeated",
        type: "DexihBaseEntity",
        id: 4
      },
      Parameters: {
        rule: "repeated",
        type: "DexihBaseEntity",
        id: 5
      }
    }
  },
  DexihDatalinkStepColumn: {
    fields: {
      DatalinkStepKey: {
        type: "int64",
        id: 2,
        options: {
          "default": 0
        }
      }
    }
  },
  DexihDatalinkStepParameter: {
    fields: {
      DatalinkStepKey: {
        type: "int64",
        id: 1,
        options: {
          "default": 0
        }
      }
    }
  },
  DexihDatalinkTable: {
    fields: {
      SourceTableKey: {
        type: "int64",
        id: 1
      },
      SourceDatalinkKey: {
        type: "int64",
        id: 2
      },
      RowsStartAt: {
        type: "int32",
        id: 3
      },
      RowsEndAt: {
        type: "int32",
        id: 4
      },
      RowsIncrement: {
        type: "int32",
        id: 5
      },
      SourceType: {
        type: "ESourceType",
        id: 6,
        options: {
          "default": "Datalink"
        }
      },
      DexihDatalinkColumns: {
        rule: "repeated",
        type: "DexihBaseEntity",
        id: 7
      }
    }
  },
  DexihDatalinkTarget: {
    fields: {
      DatalinkKey: {
        type: "int64",
        id: 1,
        options: {
          "default": 0
        }
      },
      NodeDatalinkColumnKey: {
        type: "int64",
        id: 2
      },
      NodeDatalinkColumn: {
        type: "DexihBaseEntity",
        id: 3
      },
      Position: {
        type: "int32",
        id: 4,
        options: {
          "default": 0
        }
      },
      TableKey: {
        type: "int64",
        id: 5,
        options: {
          "default": 0
        }
      }
    }
  },
  DexihDatalinkTest: {
    fields: {
      AuditConnectionKey: {
        type: "int64",
        id: 1
      },
      DexihDatalinkTestSteps: {
        rule: "repeated",
        type: "DexihBaseEntity",
        id: 2
      }
    }
  },
  DexihDatalinkTestStep: {
    fields: {
      Position: {
        type: "int64",
        id: 1,
        options: {
          "default": 0
        }
      },
      DatalinkTestKey: {
        type: "int64",
        id: 2,
        options: {
          "default": 0
        }
      },
      DatalinkKey: {
        type: "int64",
        id: 3,
        options: {
          "default": 0
        }
      },
      TargetConnectionKey: {
        type: "int64",
        id: 4,
        options: {
          "default": 0
        }
      },
      TargetTableName: {
        type: "string",
        id: 5
      },
      TargetSchema: {
        type: "string",
        id: 6
      },
      ExpectedConnectionKey: {
        type: "int64",
        id: 7,
        options: {
          "default": 0
        }
      },
      ExpectedTableName: {
        type: "string",
        id: 8
      },
      ExpectedSchema: {
        type: "string",
        id: 9
      },
      DexihDatalinkTestTables: {
        rule: "repeated",
        type: "DexihBaseEntity",
        id: 10
      }
    }
  },
  DexihDatalinkTestTable: {
    fields: {
      DatalinkTestStepKey: {
        type: "int64",
        id: 1,
        options: {
          "default": 0
        }
      },
      Action: {
        type: "ETestTableAction",
        id: 2,
        options: {
          "default": "None"
        }
      },
      TableKey: {
        type: "int64",
        id: 3,
        options: {
          "default": 0
        }
      },
      SourceConnectionKey: {
        type: "int64",
        id: 4,
        options: {
          "default": 0
        }
      },
      SourceSchema: {
        type: "string",
        id: 5
      },
      SourceTableName: {
        type: "string",
        id: 6
      },
      TestConnectionKey: {
        type: "int64",
        id: 7,
        options: {
          "default": 0
        }
      },
      TestSchema: {
        type: "string",
        id: 8
      },
      TestTableName: {
        type: "string",
        id: 9
      }
    }
  },
  DexihDatalinkTransform: {
    fields: {
      DatalinkKey: {
        type: "int64",
        id: 1,
        options: {
          "default": 0
        }
      },
      Position: {
        type: "int32",
        id: 2,
        options: {
          "default": 0
        }
      },
      PassThroughColumns: {
        type: "bool",
        id: 3,
        options: {
          "default": false
        }
      },
      JoinDatalinkTableKey: {
        type: "int64",
        id: 4
      },
      JoinSortDatalinkColumnKey: {
        type: "int64",
        id: 5
      },
      NodeDatalinkColumnKey: {
        type: "int64",
        id: 6
      },
      TransformType: {
        type: "ETransformType",
        id: 7,
        options: {
          "default": "Mapping"
        }
      },
      TransformClassName: {
        type: "string",
        id: 8
      },
      TransformAssemblyName: {
        type: "string",
        id: 9
      },
      JoinDuplicateStrategy: {
        type: "EDuplicateStrategy",
        id: 10,
        options: {
          "default": "Abend"
        }
      },
      EntityStatus: {
        type: "EntityStatus",
        id: 11
      },
      DexihDatalinkTransformItems: {
        rule: "repeated",
        type: "DexihBaseEntity",
        id: 12
      },
      JoinDatalinkTable: {
        type: "DexihBaseEntity",
        id: 13
      },
      JoinSortDatalinkColumn: {
        type: "DexihBaseEntity",
        id: 14
      },
      NodeDatalinkColumn: {
        type: "DexihBaseEntity",
        id: 15
      },
      MaxInputRows: {
        type: "int64",
        id: 16,
        options: {
          "default": 0
        }
      },
      MaxOutputRows: {
        type: "int64",
        id: 17,
        options: {
          "default": 0
        }
      }
    }
  },
  DexihDatalinkTransformItem: {
    fields: {
      DatalinkTransformKey: {
        type: "int64",
        id: 1,
        options: {
          "default": 0
        }
      },
      Position: {
        type: "int32",
        id: 2,
        options: {
          "default": 0
        }
      },
      TransformItemType: {
        type: "ETransformItemType",
        id: 3,
        options: {
          "default": "BuiltInFunction"
        }
      },
      TargetDatalinkColumnKey: {
        type: "int64",
        id: 4
      },
      SourceDatalinkColumnKey: {
        type: "int64",
        id: 5
      },
      JoinDatalinkColumnKey: {
        type: "int64",
        id: 6
      },
      FilterDatalinkColumnKey: {
        type: "int64",
        id: 7
      },
      SourceValue: {
        type: "string",
        id: 8
      },
      JoinValue: {
        type: "string",
        id: 9
      },
      FilterValue: {
        type: "string",
        id: 10
      },
      FunctionClassName: {
        type: "string",
        id: 11
      },
      FunctionAssemblyName: {
        type: "string",
        id: 12
      },
      FunctionMethodName: {
        type: "string",
        id: 13
      },
      IsGeneric: {
        type: "bool",
        id: 14,
        options: {
          "default": false
        }
      },
      GenericTypeCode: {
        type: "ETypeCode",
        id: 15
      },
      FunctionCaching: {
        type: "EFunctionCaching",
        id: 16,
        options: {
          "default": "NoCache"
        }
      },
      CustomFunctionKey: {
        type: "int64",
        id: 17
      },
      SortDirection: {
        type: "EDirection",
        id: 18
      },
      FilterCompare: {
        type: "ECompare",
        id: 19
      },
      Aggregate: {
        type: "EAggregate",
        id: 20
      },
      SeriesGrain: {
        type: "ESeriesGrain",
        id: 21
      },
      SeriesFill: {
        type: "bool",
        id: 22,
        options: {
          "default": false
        }
      },
      SeriesStart: {
        type: "string",
        id: 23
      },
      SeriesFinish: {
        type: "string",
        id: 24
      },
      FunctionCode: {
        type: "string",
        id: 25
      },
      FunctionResultCode: {
        type: "string",
        id: 26
      },
      OnError: {
        type: "EErrorAction",
        id: 27,
        options: {
          "default": "Abend"
        }
      },
      OnNull: {
        type: "EErrorAction",
        id: 28,
        options: {
          "default": "Abend"
        }
      },
      NotCondition: {
        type: "bool",
        id: 29,
        options: {
          "default": false
        }
      },
      InvalidAction: {
        type: "EInvalidAction",
        id: 30,
        options: {
          "default": 0
        }
      },
      EntityStatus: {
        type: "EntityStatus",
        id: 31
      },
      DexihFunctionParameters: {
        rule: "repeated",
        type: "DexihBaseEntity",
        id: 32
      },
      SourceDatalinkColumn: {
        type: "DexihBaseEntity",
        id: 33
      },
      TargetDatalinkColumn: {
        type: "DexihBaseEntity",
        id: 34
      },
      JoinDatalinkColumn: {
        type: "DexihBaseEntity",
        id: 35
      },
      FilterDatalinkColumn: {
        type: "DexihBaseEntity",
        id: 36
      }
    }
  },
  DexihFileFormat: {
    fields: {
      IsDefault: {
        type: "bool",
        id: 1,
        options: {
          "default": false
        }
      },
      MatchHeaderRecord: {
        type: "bool",
        id: 2,
        options: {
          "default": false
        }
      },
      SkipHeaderRows: {
        type: "int32",
        id: 3,
        options: {
          "default": 0
        }
      },
      AllowComments: {
        type: "bool",
        id: 4,
        options: {
          "default": false
        }
      },
      BufferSize: {
        type: "int32",
        id: 5,
        options: {
          "default": 0
        }
      },
      Comment: {
        type: "uint32",
        id: 6,
        options: {
          "default": 0
        }
      },
      Delimiter: {
        type: "string",
        id: 7
      },
      DetectColumnCountChanges: {
        type: "bool",
        id: 8,
        options: {
          "default": false
        }
      },
      HasHeaderRecord: {
        type: "bool",
        id: 9,
        options: {
          "default": false
        }
      },
      IgnoreHeaderWhiteSpace: {
        type: "bool",
        id: 10,
        options: {
          "default": false
        }
      },
      IgnoreReadingExceptions: {
        type: "bool",
        id: 11,
        options: {
          "default": false
        }
      },
      IgnoreQuotes: {
        type: "bool",
        id: 12,
        options: {
          "default": false
        }
      },
      Quote: {
        type: "uint32",
        id: 13,
        options: {
          "default": 0
        }
      },
      QuoteAllFields: {
        type: "bool",
        id: 14,
        options: {
          "default": false
        }
      },
      QuoteNoFields: {
        type: "bool",
        id: 15,
        options: {
          "default": false
        }
      },
      SkipEmptyRecords: {
        type: "bool",
        id: 16,
        options: {
          "default": false
        }
      },
      TrimFields: {
        type: "bool",
        id: 17,
        options: {
          "default": false
        }
      },
      TrimHeaders: {
        type: "bool",
        id: 18,
        options: {
          "default": false
        }
      },
      WillThrowOnMissingField: {
        type: "bool",
        id: 19,
        options: {
          "default": false
        }
      },
      SetWhiteSpaceCellsToNull: {
        type: "bool",
        id: 20,
        options: {
          "default": false
        }
      }
    }
  },
  DexihFunctionArrayParameter: {
    fields: {
      FunctionParameterKey: {
        type: "int64",
        id: 1,
        options: {
          "default": 0
        }
      }
    }
  },
  DexihFunctionParameter: {
    fields: {
      DatalinkTransformItemKey: {
        type: "int64",
        id: 1,
        options: {
          "default": 0
        }
      },
      ArrayParameters: {
        rule: "repeated",
        type: "DexihBaseEntity",
        id: 2
      }
    }
  },
  DexihFunctionParameterBase: {
    oneofs: {
      subtype: {
        oneof: [
          "DexihFunctionArrayParameter",
          "DexihFunctionParameter"
        ]
      }
    },
    fields: {
      DatalinkColumnKey: {
        type: "int64",
        id: 1
      },
      Value: {
        type: "string",
        id: 2
      },
      ListOfValues: {
        rule: "repeated",
        type: "string",
        id: 3
      },
      EntityStatus: {
        type: "EntityStatus",
        id: 4
      },
      DatalinkColumn: {
        type: "DexihBaseEntity",
        id: 5
      },
      DexihFunctionArrayParameter: {
        type: "DexihFunctionArrayParameter",
        id: 100
      },
      DexihFunctionParameter: {
        type: "DexihFunctionParameter",
        id: 200
      }
    }
  },
  DexihHub: {
    fields: {
      HubKey: {
        type: "int64",
        id: 1,
        options: {
          "default": 0
        }
      },
      Name: {
        type: "string",
        id: 2
      },
      Description: {
        type: "string",
        id: 3
      },
      EncryptionKey: {
        type: "string",
        id: 4
      },
      SharedAccess: {
        type: "ESharedAccess",
        id: 5,
        options: {
          "default": "Public"
        }
      },
      DexihConnections: {
        rule: "repeated",
        type: "DexihBaseEntity",
        id: 6
      },
      DexihTables: {
        rule: "repeated",
        type: "DexihBaseEntity",
        id: 7
      },
      DexihDatajobs: {
        rule: "repeated",
        type: "DexihBaseEntity",
        id: 8
      },
      DexihDatalinks: {
        rule: "repeated",
        type: "DexihBaseEntity",
        id: 9
      },
      DexihHubUsers: {
        rule: "repeated",
        type: "DexihBaseEntity",
        id: 10
      },
      DexihFileFormats: {
        rule: "repeated",
        type: "DexihBaseEntity",
        id: 11
      },
      DexihHubVariables: {
        rule: "repeated",
        type: "DexihBaseEntity",
        id: 12
      },
      DexihDatalinkTests: {
        rule: "repeated",
        type: "DexihBaseEntity",
        id: 13
      },
      DexihViews: {
        rule: "repeated",
        type: "DexihBaseEntity",
        id: 14
      },
      DexihDashboards: {
        rule: "repeated",
        type: "DexihBaseEntity",
        id: 15
      },
      DexihApis: {
        rule: "repeated",
        type: "DexihBaseEntity",
        id: 16
      },
      DexihColumnValidations: {
        rule: "repeated",
        type: "DexihBaseEntity",
        id: 17
      },
      DexihCustomFunctions: {
        rule: "repeated",
        type: "DexihBaseEntity",
        id: 18
      },
      DexihRemoteAgentHubs: {
        rule: "repeated",
        type: "DexihBaseEntity",
        id: 19
      }
    }
  },
  DexihHubEntity: {
    oneofs: {
      subtype: {
        oneof: [
          "DexihRemoteAgentHub",
          "DexihHubNamedEntity"
        ]
      }
    },
    fields: {
      HubKey: {
        type: "int64",
        id: 1,
        options: {
          "default": 0
        }
      },
      DexihRemoteAgentHub: {
        type: "DexihRemoteAgentHub",
        id: 100
      },
      DexihHubNamedEntity: {
        type: "DexihHubNamedEntity",
        id: 200
      }
    }
  },
  DexihHubNamedEntity: {
    oneofs: {
      subtype: {
        oneof: [
          "DexihApi",
          "DexihColumnBase",
          "DexihColumnValidation",
          "DexihConnection",
          "DexihCustomFunction",
          "DexihDashboard",
          "DexihDashboardItem",
          "DexihDatajob",
          "DexihDatalink",
          "DexihDatalinkDependency",
          "DexihDatalinkProfile",
          "DexihDatalinkStep",
          "DexihDatalinkTable",
          "DexihDatalinkTarget",
          "DexihDatalinkTest",
          "DexihDatalinkTestStep",
          "DexihDatalinkTestTable",
          "DexihDatalinkTransform",
          "DexihDatalinkTransformItem",
          "DexihFileFormat",
          "DexihHubVariable",
          "InputParameterBase",
          "DexihParameterBase",
          "DexihTable",
          "DexihTrigger",
          "DexihView"
        ]
      }
    },
    fields: {
      Key: {
        type: "int64",
        id: 1,
        options: {
          "default": 0
        }
      },
      Name: {
        type: "string",
        id: 2
      },
      Description: {
        type: "string",
        id: 3
      },
      DexihApi: {
        type: "DexihApi",
        id: 100
      },
      DexihColumnBase: {
        type: "DexihColumnBase",
        id: 300
      },
      DexihColumnValidation: {
        type: "DexihColumnValidation",
        id: 400
      },
      DexihConnection: {
        type: "DexihConnection",
        id: 500
      },
      DexihCustomFunction: {
        type: "DexihCustomFunction",
        id: 600
      },
      DexihDashboard: {
        type: "DexihDashboard",
        id: 800
      },
      DexihDashboardItem: {
        type: "DexihDashboardItem",
        id: 900
      },
      DexihDatajob: {
        type: "DexihDatajob",
        id: 1200
      },
      DexihDatalink: {
        type: "DexihDatalink",
        id: 1400
      },
      DexihDatalinkDependency: {
        type: "DexihDatalinkDependency",
        id: 1600
      },
      DexihDatalinkProfile: {
        type: "DexihDatalinkProfile",
        id: 1800
      },
      DexihDatalinkStep: {
        type: "DexihDatalinkStep",
        id: 1900
      },
      DexihDatalinkTable: {
        type: "DexihDatalinkTable",
        id: 2200
      },
      DexihDatalinkTarget: {
        type: "DexihDatalinkTarget",
        id: 2300
      },
      DexihDatalinkTest: {
        type: "DexihDatalinkTest",
        id: 2400
      },
      DexihDatalinkTestStep: {
        type: "DexihDatalinkTestStep",
        id: 2500
      },
      DexihDatalinkTestTable: {
        type: "DexihDatalinkTestTable",
        id: 2600
      },
      DexihDatalinkTransform: {
        type: "DexihDatalinkTransform",
        id: 2700
      },
      DexihDatalinkTransformItem: {
        type: "DexihDatalinkTransformItem",
        id: 2800
      },
      DexihFileFormat: {
        type: "DexihFileFormat",
        id: 2900
      },
      DexihHubVariable: {
        type: "DexihHubVariable",
        id: 3600
      },
      InputParameterBase: {
        type: "InputParameterBase",
        id: 3700
      },
      DexihParameterBase: {
        type: "DexihParameterBase",
        id: 3800
      },
      DexihTable: {
        type: "DexihTable",
        id: 4100
      },
      DexihTrigger: {
        type: "DexihTrigger",
        id: 4300
      },
      DexihView: {
        type: "DexihView",
        id: 4400
      }
    }
  },
  DexihHubUser: {
    fields: {
      HubKey: {
        type: "int64",
        id: 1,
        options: {
          "default": 0
        }
      },
      UserId: {
        type: "string",
        id: 2
      },
      Permission: {
        type: "EPermission",
        id: 3,
        options: {
          "default": 0
        }
      }
    }
  },
  DexihHubVariable: {
    fields: {
      ValueRaw: {
        type: "string",
        id: 1
      },
      Value: {
        type: "string",
        id: 2
      },
      IsEncrypted: {
        type: "bool",
        id: 3,
        options: {
          "default": false
        }
      },
      IsEnvironmentVariable: {
        type: "bool",
        id: 4,
        options: {
          "default": false
        }
      }
    }
  },
  DexihParameterBase: {
    oneofs: {
      subtype: {
        oneof: [
          "DexihCustomFunctionParameter",
          "DexihFunctionParameterBase"
        ]
      }
    },
    fields: {
      Position: {
        type: "int32",
        id: 1,
        options: {
          "default": 0
        }
      },
      Direction: {
        type: "EParameterDirection",
        id: 2,
        options: {
          "default": "Input"
        }
      },
      DataType: {
        type: "ETypeCode",
        id: 3,
        options: {
          "default": "Binary"
        }
      },
      IsGeneric: {
        type: "bool",
        id: 4,
        options: {
          "default": false
        }
      },
      Rank: {
        type: "int32",
        id: 5,
        options: {
          "default": 0
        }
      },
      DexihCustomFunctionParameter: {
        type: "DexihCustomFunctionParameter",
        id: 100
      },
      DexihFunctionParameterBase: {
        type: "DexihFunctionParameterBase",
        id: 200
      }
    }
  },
  DexihRemoteAgent: {
    fields: {
      RemoteAgentKey: {
        type: "int64",
        id: 1,
        options: {
          "default": 0
        }
      },
      Name: {
        type: "string",
        id: 3
      },
      UserId: {
        type: "string",
        id: 4
      },
      RestrictIp: {
        type: "bool",
        id: 5,
        options: {
          "default": false
        }
      },
      AllowExternalConnect: {
        type: "bool",
        id: 6,
        options: {
          "default": false
        }
      },
      IpAddresses: {
        rule: "repeated",
        type: "string",
        id: 7
      },
      RemoteAgentId: {
        type: "string",
        id: 8
      },
      HashedToken: {
        type: "string",
        id: 9
      },
      LastLoginIpAddress: {
        type: "string",
        id: 10
      },
      LastLoginDateTime: {
        type: ".bcl.DateTime",
        id: 11
      },
      ActiveAgents: {
        rule: "repeated",
        type: "DexihActiveAgent",
        id: 12
      },
      DexihRemoteAgentHubs: {
        rule: "repeated",
        type: "DexihBaseEntity",
        id: 13
      }
    }
  },
  DexihRemoteAgentHub: {
    fields: {
      RemoteAgentHubKey: {
        type: "int64",
        id: 1,
        options: {
          "default": 0
        }
      },
      RemoteAgentKey: {
        type: "int64",
        id: 2,
        options: {
          "default": 0
        }
      },
      IsDefault: {
        type: "bool",
        id: 3,
        options: {
          "default": false
        }
      },
      IsAuthorized: {
        type: "bool",
        id: 4,
        options: {
          "default": false
        }
      }
    }
  },
  DexihTable: {
    fields: {
      ConnectionKey: {
        type: "int64",
        id: 1,
        options: {
          "default": 0
        }
      },
      Schema: {
        type: "string",
        id: 2
      },
      BaseTableName: {
        type: "string",
        id: 3
      },
      LogicalName: {
        type: "string",
        id: 4
      },
      TableType: {
        type: "ETableType",
        id: 5,
        options: {
          "default": "Table"
        }
      },
      SourceConnectionName: {
        type: "string",
        id: 6
      },
      FileFormatKey: {
        type: "int64",
        id: 7
      },
      RejectedTableName: {
        type: "string",
        id: 8
      },
      UseQuery: {
        type: "bool",
        id: 9,
        options: {
          "default": false
        }
      },
      QueryString: {
        type: "string",
        id: 10
      },
      RowPath: {
        type: "string",
        id: 11
      },
      FormatType: {
        type: "ETypeCode",
        id: 12,
        options: {
          "default": "Binary"
        }
      },
      SortColumnKeys: {
        rule: "repeated",
        type: "int64",
        id: 13,
        options: {
          packed: false
        }
      },
      AutoManageFiles: {
        type: "bool",
        id: 14,
        options: {
          "default": false
        }
      },
      UseCustomFilePaths: {
        type: "bool",
        id: 15,
        options: {
          "default": false
        }
      },
      FileRootPath: {
        type: "string",
        id: 16
      },
      FileIncomingPath: {
        type: "string",
        id: 17
      },
      FileOutgoingPath: {
        type: "string",
        id: 18
      },
      FileProcessedPath: {
        type: "string",
        id: 19
      },
      FileRejectedPath: {
        type: "string",
        id: 20
      },
      FileMatchPattern: {
        type: "string",
        id: 21
      },
      RestfulUri: {
        type: "string",
        id: 22
      },
      MaxImportLevels: {
        type: "int32",
        id: 23,
        options: {
          "default": 0
        }
      },
      IsVersioned: {
        type: "bool",
        id: 24,
        options: {
          "default": false
        }
      },
      IsShared: {
        type: "bool",
        id: 25,
        options: {
          "default": false
        }
      },
      EntityStatus: {
        type: "EntityStatus",
        id: 26
      },
      FileSample: {
        type: "string",
        id: 27
      },
      DexihTableColumns: {
        rule: "repeated",
        type: "DexihBaseEntity",
        id: 28
      }
    }
  },
  DexihTableColumn: {
    fields: {
      TableKey: {
        type: "int64",
        id: 1
      },
      ChildColumns: {
        rule: "repeated",
        type: "DexihBaseEntity",
        id: 2
      },
      ColumnValidationKey: {
        type: "int64",
        id: 3
      },
      EntityStatus: {
        type: "EntityStatus",
        id: 4
      }
    }
  },
  DexihTrigger: {
    fields: {
      DatajobKey: {
        type: "int64",
        id: 1,
        options: {
          "default": 0
        }
      },
      StartDate: {
        type: ".bcl.DateTime",
        id: 2
      },
      IntervalTime: {
        type: ".bcl.TimeSpan",
        id: 3
      },
      DaysOfWeek: {
        rule: "repeated",
        type: "EDayOfWeek",
        id: 4,
        options: {
          packed: false
        }
      },
      StartTime: {
        type: ".bcl.TimeSpan",
        id: 5
      },
      EndTime: {
        type: ".bcl.TimeSpan",
        id: 6
      },
      CronExpression: {
        type: "string",
        id: 7
      },
      MaxRecurs: {
        type: "int32",
        id: 8
      }
    }
  },
  DexihView: {
    fields: {
      ViewType: {
        type: "EViewType",
        id: 1,
        options: {
          "default": "Table"
        }
      },
      SourceTableKey: {
        type: "int64",
        id: 2
      },
      SourceDatalinkKey: {
        type: "int64",
        id: 3
      },
      SourceType: {
        type: "ESourceType",
        id: 4,
        options: {
          "default": "Datalink"
        }
      },
      AutoRefresh: {
        type: "bool",
        id: 5,
        options: {
          "default": false
        }
      },
      InputValues: {
        rule: "repeated",
        type: "InputColumn",
        id: 6
      },
      SelectQuery: {
        type: "SelectQuery",
        id: 7
      },
      ChartConfig: {
        type: "ChartConfig",
        id: 8
      },
      IsShared: {
        type: "bool",
        id: 9,
        options: {
          "default": false
        }
      },
      Parameters: {
        rule: "repeated",
        type: "DexihBaseEntity",
        id: 10
      }
    }
  },
  DexihViewParameter: {
    fields: {
      ViewKey: {
        type: "int64",
        id: 1,
        options: {
          "default": 0
        }
      }
    }
  },
  DownloadUrl: {
    fields: {}
  },
  EAggregate: {
    values: {
      Sum: 0,
      Average: 1,
      Min: 2,
      Max: 3,
      Count: 4,
      First: 5,
      Last: 6
    }
  },
  EAndOr: {
    values: {
      And: 0,
      Or: 1
    }
  },
  EChartType: {
    values: {
      BarVertical: 0,
      BarHorizontal: 1,
      BarVertical2D: 2,
      BarHorizontal2D: 3,
      BarVerticalStacked: 4,
      BarHorizontalStacked: 5,
      BarVerticalNormalized: 6,
      BarHorizontalNormalized: 7,
      Pie: 8,
      PieAdvanced: 9,
      PieGrid: 10,
      Line: 11,
      Area: 12,
      Polar: 13,
      AreaStacked: 14,
      AreaNormalized: 15,
      Scatter: 16,
      Error: 17,
      Bubble: 18,
      ForceDirected: 19,
      HeatMap: 20,
      TreeMap: 21,
      Cards: 22,
      Gauge: 23,
      LinearGauge: 24,
      Map: 25
    }
  },
  ECleanAction: {
    values: {
      DefaultValue: 1,
      Truncate: 2,
      Blank: 3,
      Null: 4,
      OriginalValue: 5,
      CleanValue: 6
    }
  },
  ECompare: {
    values: {
      IsEqual: 0,
      GreaterThan: 1,
      GreaterThanEqual: 2,
      LessThan: 3,
      LessThanEqual: 4,
      NotEqual: 5,
      IsIn: 6,
      IsNull: 7,
      IsNotNull: 8,
      Like: 9
    }
  },
  EConnectionCategory: {
    values: {
      SqlDatabase: 0,
      NoSqlDatabase: 1,
      DatabaseFile: 2,
      File: 3,
      WebService: 4,
      Hub: 5
    }
  },
  EConnectionPurpose: {
    values: {
      Source: 0,
      Managed: 1,
      Target: 2,
      Internal: 3
    }
  },
  EDataPrivacyStatus: {
    values: {
      NotAllowed: 0,
      Proxy: 1,
      Lan: 2,
      Internet: 3
    }
  },
  EDatalinkType: {
    values: {
      General: 0,
      Stage: 1,
      Validate: 2,
      Transform: 3,
      Deliver: 4,
      Publish: 5,
      Share: 6,
      Query: 7
    }
  },
  EDayOfWeek: {
    values: {
      Sunday: 0,
      Monday: 1,
      Tuesday: 2,
      Wednesday: 3,
      Thursday: 4,
      Friday: 5,
      Saturday: 6
    }
  },
  EDeltaType: {
    values: {
      AutoIncrement: 0,
      DbAutoIncrement: 1,
      SourceSurrogateKey: 2,
      ValidFromDate: 3,
      ValidToDate: 4,
      CreateDate: 5,
      UpdateDate: 6,
      CreateAuditKey: 7,
      UpdateAuditKey: 8,
      IsCurrentField: 9,
      Version: 10,
      NaturalKey: 11,
      TrackingField: 12,
      NonTrackingField: 13,
      IgnoreField: 14,
      ValidationStatus: 15,
      RejectedReason: 16,
      FileName: 17,
      FileRowNumber: 18,
      AzureRowKey: 19,
      AzurePartitionKey: 20,
      TimeStamp: 21,
      DatabaseOperation: 22,
      ResponseSuccess: 23,
      ResponseData: 24,
      ResponseStatus: 25,
      ResponseSegment: 26,
      Error: 27,
      Url: 28
    }
  },
  EDirection: {
    values: {
      Ascending: 0,
      Descending: 1
    }
  },
  EDuplicateStrategy: {
    values: {
      Abend: 0,
      First: 1,
      Last: 2,
      All: 3
    }
  },
  EErrorAction: {
    values: {
      Abend: 0,
      Null: 1,
      Ignore: 2,
      Execute: 3
    }
  },
  EFailAction: {
    values: {
      Continue: 0,
      ContinueNonDependent: 1,
      Abend: 2
    }
  },
  EFlatFilePath: {
    values: {
      Incoming: 0,
      Outgoing: 1,
      Processed: 2,
      Rejected: 3,
      None: 4
    }
  },
  EFunctionCaching: {
    values: {
      NoCache: 0,
      EnableCache: 1,
      CallOnce: 2
    }
  },
  EFunctionType: {
    values: {
      Map: 0,
      Condition: 1,
      Aggregate: 2,
      Series: 3,
      Rows: 4,
      Validate: 5,
      Profile: 6
    }
  },
  EGenericType: {
    values: {
      None: 0,
      Numeric: 1,
      All: 2,
      String: 3
    }
  },
  EInvalidAction: {
    values: {
      Pass: 1,
      Clean: 2,
      RejectClean: 3,
      Reject: 4,
      Discard: 5,
      Abend: 6
    }
  },
  EParameterDirection: {
    values: {
      Input: 0,
      Output: 1,
      ResultInput: 2,
      ResultOutput: 3,
      ReturnValue: 4,
      ResultReturnValue: 5,
      Join: 6
    }
  },
  EPermission: {
    values: {
      Owner: 1,
      User: 2,
      FullReader: 3,
      PublishReader: 4,
      Suspended: 5,
      None: 6
    }
  },
  ESecurityFlag: {
    values: {
      None: 0,
      FastEncrypt: 1,
      FastDecrypt: 2,
      FastEncrypted: 3,
      StrongEncrypt: 4,
      StrongDecrypt: 5,
      StrongEncrypted: 6,
      OneWayHash: 7,
      OnWayHashed: 8,
      Hide: 9
    }
  },
  ESeriesGrain: {
    values: {
      Second: 0,
      Minute: 1,
      Hour: 2,
      Day: 3,
      Week: 4,
      Month: 5,
      Year: 6,
      Number: 7
    }
  },
  ESharedAccess: {
    values: {
      Public: 0,
      Registered: 1,
      Reader: 2
    }
  },
  ESourceType: {
    values: {
      Datalink: 0,
      Table: 1,
      Rows: 2,
      Function: 3
    }
  },
  EStatus: {
    values: {
      None: 0,
      Ready: 1,
      Imported: 2,
      Updated: 3,
      Added: 4,
      Error: 5
    }
  },
  ETableType: {
    values: {
      Table: 0,
      View: 1,
      Query: 2
    }
  },
  ETestTableAction: {
    values: {
      None: 0,
      Truncate: 1,
      DropCreate: 2,
      TruncateCopy: 3,
      DropCreateCopy: 4
    }
  },
  ETransformItemType: {
    values: {
      BuiltInFunction: 0,
      CustomFunction: 1,
      ColumnPair: 2,
      JoinPair: 3,
      Sort: 4,
      Column: 5,
      FilterPair: 6,
      AggregatePair: 7,
      Series: 8,
      JoinNode: 9,
      GroupNode: 10,
      Node: 11,
      UnGroup: 12
    }
  },
  ETransformType: {
    values: {
      Mapping: 0,
      Filter: 1,
      Sort: 2,
      Group: 3,
      Aggregate: 4,
      Series: 5,
      Join: 6,
      Rows: 7,
      Lookup: 8,
      Validation: 9,
      Delta: 10,
      Concatenate: 11,
      Profile: 12,
      Internal: 13
    }
  },
  ETransformWriterMethod: {
    values: {
      Bulk: 0,
      Transaction: 1
    }
  },
  ETypeCode: {
    values: {
      Binary: 0,
      Byte: 1,
      Char: 2,
      SByte: 3,
      UInt16: 4,
      UInt32: 5,
      UInt64: 6,
      Int16: 7,
      Int32: 8,
      Int64: 9,
      Decimal: 10,
      Double: 11,
      Single: 12,
      String: 13,
      Text: 14,
      Boolean: 15,
      DateTime: 16,
      Time: 17,
      Guid: 18,
      Unknown: 19,
      Json: 20,
      Xml: 21,
      Enum: 22,
      CharArray: 23,
      Object: 24,
      Node: 25,
      Geometry: 26
    }
  },
  EUpdateStrategy: {
    values: {
      Reload: 0,
      Append: 1,
      AppendUpdate: 2,
      AppendUpdateDelete: 3,
      AppendUpdatePreserve: 4,
      AppendUpdateDeletePreserve: 5
    }
  },
  EViewType: {
    values: {
      Table: 0,
      Chart: 1
    }
  },
  EntityStatus: {
    fields: {
      LastStatus: {
        type: "EStatus",
        id: 1,
        options: {
          "default": "None"
        }
      },
      Message: {
        type: "string",
        id: 2
      },
      IsBusy: {
        type: "bool",
        id: 3,
        options: {
          "default": false
        }
      }
    }
  },
  Filter: {
    fields: {
      Column1: {
        type: "TableColumn",
        id: 1
      },
      Value1: {
        type: "Object",
        id: 2
      },
      CompareDataType: {
        type: "ETypeCode",
        id: 3,
        options: {
          "default": "Binary"
        }
      },
      Column2: {
        type: "TableColumn",
        id: 4
      },
      Value2: {
        type: "Object",
        id: 5
      },
      Operator: {
        type: "ECompare",
        id: 6,
        options: {
          "default": "IsEqual"
        }
      },
      AndOr: {
        type: "EAndOr",
        id: 7,
        options: {
          "default": "And"
        }
      }
    }
  },
  FunctionParameter: {
    fields: {
      ParameterName: {
        type: "string",
        id: 1
      },
      Name: {
        type: "string",
        id: 2
      },
      Description: {
        type: "string",
        id: 3
      },
      IsGeneric: {
        type: "bool",
        id: 4,
        options: {
          "default": false
        }
      },
      DataType: {
        type: "ETypeCode",
        id: 5,
        options: {
          "default": "Binary"
        }
      },
      AllowNull: {
        type: "bool",
        id: 6,
        options: {
          "default": false
        }
      },
      Rank: {
        type: "int32",
        id: 7,
        options: {
          "default": 0
        }
      },
      IsIndex: {
        type: "bool",
        id: 8,
        options: {
          "default": false
        }
      },
      LinkedName: {
        type: "string",
        id: 9
      },
      LinkedDescription: {
        type: "string",
        id: 10
      },
      IsLabel: {
        type: "bool",
        id: 11,
        options: {
          "default": false
        }
      },
      ListOfValues: {
        rule: "repeated",
        type: "string",
        id: 12
      },
      DefaultValue: {
        type: "string",
        id: 13
      }
    }
  },
  FunctionReference: {
    fields: {
      FunctionType: {
        type: "EFunctionType",
        id: 1,
        options: {
          "default": "Map"
        }
      },
      Category: {
        type: "string",
        id: 2
      },
      Name: {
        type: "string",
        id: 3
      },
      Description: {
        type: "string",
        id: 4
      },
      FunctionAssemblyName: {
        type: "string",
        id: 5
      },
      FunctionClassName: {
        type: "string",
        id: 6
      },
      FunctionMethodName: {
        type: "string",
        id: 7
      },
      ResultMethodName: {
        type: "string",
        id: 8
      },
      ResetMethodName: {
        type: "string",
        id: 9
      },
      ImportMethodName: {
        type: "string",
        id: 10
      },
      GenericType: {
        type: "EGenericType",
        id: 11,
        options: {
          "default": "None"
        }
      },
      GenericTypeDefault: {
        type: "ETypeCode",
        id: 12,
        options: {
          "default": "Binary"
        }
      },
      Compare: {
        type: "ECompare",
        id: 13
      },
      IsStandardFunction: {
        type: "bool",
        id: 14,
        options: {
          "default": false
        }
      },
      ReturnParameters: {
        rule: "repeated",
        type: "FunctionParameter",
        id: 15
      },
      InputParameters: {
        rule: "repeated",
        type: "FunctionParameter",
        id: 16
      },
      OutputParameters: {
        rule: "repeated",
        type: "FunctionParameter",
        id: 17
      },
      ResultReturnParameters: {
        rule: "repeated",
        type: "FunctionParameter",
        id: 18
      },
      ResultInputParameters: {
        rule: "repeated",
        type: "FunctionParameter",
        id: 19
      },
      ResultOutputParameters: {
        rule: "repeated",
        type: "FunctionParameter",
        id: 20
      }
    }
  },
  InputColumn: {
    fields: {
      DatalinkKey: {
        type: "int64",
        id: 1,
        options: {
          "default": 0
        }
      },
      DatalinkName: {
        type: "string",
        id: 2
      },
      Name: {
        type: "string",
        id: 3
      },
      LogicalName: {
        type: "string",
        id: 4
      },
      DataType: {
        type: "ETypeCode",
        id: 5,
        options: {
          "default": "Binary"
        }
      },
      Rank: {
        type: "int32",
        id: 6,
        options: {
          "default": 0
        }
      },
      Value: {
        type: "Object",
        id: 7
      },
      DefaultValue: {
        type: "Object",
        id: 8
      }
    }
  },
  InputParameterBase: {
    oneofs: {
      subtype: {
        oneof: [
          "DexihApiParameter",
          "DexihDashboardParameter",
          "DexihDashboardItemParameter",
          "DexihDatajobParameter",
          "DexihDatalinkParameter",
          "DexihDatalinkStepParameter",
          "DexihViewParameter"
        ]
      }
    },
    fields: {
      Value: {
        type: "string",
        id: 1
      },
      DexihApiParameter: {
        type: "DexihApiParameter",
        id: 100
      },
      DexihDashboardParameter: {
        type: "DexihDashboardParameter",
        id: 200
      },
      DexihDashboardItemParameter: {
        type: "DexihDashboardItemParameter",
        id: 300
      },
      DexihDatajobParameter: {
        type: "DexihDatajobParameter",
        id: 400
      },
      DexihDatalinkParameter: {
        type: "DexihDatalinkParameter",
        id: 500
      },
      DexihDatalinkStepParameter: {
        type: "DexihDatalinkStepParameter",
        id: 600
      },
      DexihViewParameter: {
        type: "DexihViewParameter",
        id: 700
      }
    }
  },
  Object: {
    fields: {}
  },
  RemoteLibraries: {
    fields: {
      Functions: {
        rule: "repeated",
        type: "FunctionReference",
        id: 1
      },
      Connections: {
        rule: "repeated",
        type: "ConnectionAttribute",
        id: 2
      },
      Transforms: {
        rule: "repeated",
        type: "TransformAttribute",
        id: 3
      }
    }
  },
  SelectColumn: {
    fields: {
      Column: {
        type: "TableColumn",
        id: 1
      },
      Aggregate: {
        type: "EAggregate",
        id: 2
      }
    }
  },
  SelectQuery: {
    fields: {
      Columns: {
        rule: "repeated",
        type: "SelectColumn",
        id: 1
      },
      Table: {
        type: "string",
        id: 2
      },
      Filters: {
        rule: "repeated",
        type: "Filter",
        id: 3
      },
      Sorts: {
        rule: "repeated",
        type: "Sort",
        id: 4
      },
      Groups: {
        rule: "repeated",
        type: "TableColumn",
        id: 5
      },
      Rows: {
        type: "int32",
        id: 6,
        options: {
          "default": 0
        }
      },
      InputColumns: {
        rule: "repeated",
        type: "TableColumn",
        id: 7
      },
      FileName: {
        type: "string",
        id: 8
      },
      Path: {
        type: "EFlatFilePath",
        id: 9,
        options: {
          "default": "Incoming"
        }
      }
    }
  },
  Sort: {
    fields: {
      Column: {
        type: "TableColumn",
        id: 1
      },
      Direction: {
        type: "EDirection",
        id: 2,
        options: {
          "default": "Ascending"
        }
      }
    }
  },
  TableColumn: {
    fields: {
      ReferenceTable: {
        type: "string",
        id: 1
      },
      Name: {
        type: "string",
        id: 2
      },
      LogicalName: {
        type: "string",
        id: 3
      },
      Description: {
        type: "string",
        id: 4
      },
      DataType: {
        type: "ETypeCode",
        id: 5,
        options: {
          "default": "Binary"
        }
      },
      MaxLength: {
        type: "int32",
        id: 6
      },
      ColumnGroup: {
        type: "string",
        id: 7
      },
      Rank: {
        type: "int32",
        id: 8,
        options: {
          "default": 0
        }
      },
      BaseDataType: {
        type: "ETypeCode",
        id: 9,
        options: {
          "default": "Binary"
        }
      },
      BaseMaxLength: {
        type: "int32",
        id: 10
      },
      Precision: {
        type: "int32",
        id: 11
      },
      Scale: {
        type: "int32",
        id: 12
      },
      AllowDbNull: {
        type: "bool",
        id: 13,
        options: {
          "default": false
        }
      },
      DeltaType: {
        type: "EDeltaType",
        id: 14,
        options: {
          "default": "AutoIncrement"
        }
      },
      IsUnicode: {
        type: "bool",
        id: 15
      },
      DefaultValue: {
        type: "Object",
        id: 16
      },
      IsUnique: {
        type: "bool",
        id: 17,
        options: {
          "default": false
        }
      },
      IsMandatory: {
        type: "bool",
        id: 18,
        options: {
          "default": false
        }
      },
      SecurityFlag: {
        type: "ESecurityFlag",
        id: 19,
        options: {
          "default": "None"
        }
      },
      IsInput: {
        type: "bool",
        id: 20,
        options: {
          "default": false
        }
      },
      IsIncrementalUpdate: {
        type: "bool",
        id: 21,
        options: {
          "default": false
        }
      },
      IsParent: {
        type: "bool",
        id: 22,
        options: {
          "default": false
        }
      },
      ChildColumns: {
        rule: "repeated",
        type: "TableColumn",
        id: 23
      }
    }
  },
  TransformAttribute: {
    oneofs: {
      subtype: {
        oneof: [
          "TransformReference"
        ]
      }
    },
    fields: {
      TransformType: {
        type: "ETransformType",
        id: 1,
        options: {
          "default": "Mapping"
        }
      },
      Name: {
        type: "string",
        id: 2
      },
      Description: {
        type: "string",
        id: 3
      },
      TransformReference: {
        type: "TransformReference",
        id: 100
      }
    }
  },
  TransformReference: {
    fields: {
      TransformClassName: {
        type: "string",
        id: 1
      },
      TransformAssemblyName: {
        type: "string",
        id: 2
      }
    }
  },
  bcl: {
    nested: {
      TimeSpan: {
        fields: {
          value: {
            type: "sint64",
            id: 1
          },
          scale: {
            type: "TimeSpanScale",
            id: 2
          }
        },
        nested: {
          TimeSpanScale: {
            values: {
              DAYS: 0,
              HOURS: 1,
              MINUTES: 2,
              SECONDS: 3,
              MILLISECONDS: 4,
              TICKS: 5,
              MINMAX: 15
            }
          }
        }
      },
      DateTime: {
        fields: {
          value: {
            type: "sint64",
            id: 1
          },
          scale: {
            type: "TimeSpanScale",
            id: 2
          },
          kind: {
            type: "DateTimeKind",
            id: 3
          }
        },
        nested: {
          TimeSpanScale: {
            values: {
              DAYS: 0,
              HOURS: 1,
              MINUTES: 2,
              SECONDS: 3,
              MILLISECONDS: 4,
              TICKS: 5,
              MINMAX: 15
            }
          },
          DateTimeKind: {
            values: {
              UNSPECIFIED: 0,
              UTC: 1,
              LOCAL: 2
            }
          }
        }
      },
      NetObjectProxy: {
        fields: {
          existingObjectKey: {
            type: "int32",
            id: 1
          },
          newObjectKey: {
            type: "int32",
            id: 2
          },
          existingTypeKey: {
            type: "int32",
            id: 3
          },
          newTypeKey: {
            type: "int32",
            id: 4
          },
          typeName: {
            type: "string",
            id: 8
          },
          payload: {
            type: "bytes",
            id: 10
          }
        }
      },
      Guid: {
        fields: {
          lo: {
            type: "fixed64",
            id: 1
          },
          hi: {
            type: "fixed64",
            id: 2
          }
        }
      },
      Decimal: {
        fields: {
          lo: {
            type: "uint64",
            id: 1
          },
          hi: {
            type: "uint32",
            id: 2
          },
          signScale: {
            type: "uint32",
            id: 3
          }
        }
      }
    }
  }
});

module.exports = $root;
