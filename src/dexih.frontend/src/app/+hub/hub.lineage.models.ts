import {HubCache, DexihDatalink, DexihTable, DexihTableColumn, DexihDatalinkColumn, DexihDatalinkTable,
    DexihDatalinkTransform, DexihDatalinkTransformItem, eDeltaType, eDatalinkTransformItemType, DexihFunctionParameter,
    eMappingStatus, eLoadStrategy
} from './hub.models'
import { eTransformType, eTypeCode } from './hub.remote.models';

export enum eObjectType {
    SourceTable,
    TargetTable,
    Transform
}

export enum eObjectUse {
    Sort,
    Mapping,
    Function,
    Join,
    PassThrough,
    Source,
    Target
}

export class ImpactLineage {
    public objectType: eObjectType;
    public objectUse: eObjectUse;

    public column: DexihDatalinkColumn;
    public link: string;

    public ImpactItems: ImpactLineage[];
    public LineageItems: ImpactLineage[];

    private currentMappingStatus(): eMappingStatus {
        switch (this.objectUse) {
            case eObjectUse.Sort:
                return eMappingStatus.Sorted;
            case eObjectUse.Mapping:
                return eMappingStatus.Mapped;
            case eObjectUse.Function:
                return eMappingStatus.Mapped;
            case eObjectUse.Join:
                return eMappingStatus.Joined;
            case eObjectUse.PassThrough:
                return eMappingStatus.PassThroughMap;
            case eObjectUse.Source:
                return eMappingStatus.Mapped;
            case eObjectUse.Target:
                return eMappingStatus.Mapped;
        }
    }

    // look at forward mappings to get current impact mapping status for column
    public GetImpact(): eMappingStatus {
        let mappingStatus = eMappingStatus.NotMapped;

        this.ImpactItems.forEach(impact => {
            let newStatus = impact.GetImpact();
            if (newStatus < mappingStatus) {
                mappingStatus = newStatus;
            }
        });

        return mappingStatus;
    }

    public GetLineage(): eMappingStatus {
        let mappingStatus = eMappingStatus.NotMapped;
        return mappingStatus;
    }
}


export class InputOutputColumns {

    // used to find a column within a node structure.
    findColumn(column: DexihDatalinkColumn, nodeDatalinkColumnKey: number): boolean {
        if (!nodeDatalinkColumnKey) {
            return false;
        }
        if (column.key === nodeDatalinkColumnKey) {
            return true;
        }
        if (column.childColumns) {
            for (let childColumn of column.childColumns) {
                if (this.findColumn(childColumn, nodeDatalinkColumnKey)) {
                    return true;
                }
            };
        }
        return false;
    }

    // used to find a node column within a node structure.
    findNodeColumn(column: DexihDatalinkColumn, columns: DexihDatalinkColumn[]): DexihDatalinkColumn {
        if (!column || !columns || columns.length === 0) {
            return null;
        }

        for (let col of columns) {
            if (col.key === column.key) {
                return col;
            }
            if (col.childColumns) {
                let returnCol = this.findNodeColumn(column, col.childColumns);
                if (returnCol) {
                    return returnCol;
                }
            }
        }

        return null;
    }

    // used to find a node column within a node structure.
    findParentColumns(column: DexihDatalinkColumn, columns: DexihDatalinkColumn[]): DexihDatalinkColumn[] {
        if (!column || !columns || columns.length === 0) {
            return null;
        }

        for (let col of columns) {
            if (col.key === column.key) {
                return columns;
            }
            if (col.childColumns) {
                let returnCol = this.findParentColumns(column, col.childColumns);
                if (returnCol) {
                    return returnCol;
                }
            }
        }

        return null;
    }

    // gets all allowable columns given the specified nodeLevel
    validColumns(nodeDatalinkColumnKey: number, columns: DexihDatalinkColumn[]): DexihDatalinkColumn[] {
        if (!nodeDatalinkColumnKey) {
            return columns;
        }

        let validColumns: DexihDatalinkColumn[] = [];

        columns.forEach(col => {
            validColumns.push(col);
            if (col.key === nodeDatalinkColumnKey) {
                if (col.childColumns) {
                    validColumns = validColumns.concat(col.childColumns);
                }
            } else if (this.findColumn(col, nodeDatalinkColumnKey)) {
                let cols = this.validColumns(nodeDatalinkColumnKey, col.childColumns);
                validColumns = validColumns.concat(cols);
            }
        });

        return validColumns;
    }

    findValidColumn(column: DexihDatalinkColumn, nodeDatalinkColumnKey: number, columns: DexihDatalinkColumn[])
        : DexihDatalinkColumn {

        for (let col of columns) {
            if (col.key === column.key) {
                return col;
            }

            if (this.findColumn(col, nodeDatalinkColumnKey)) {
                let newCol = this.findValidColumn(column, nodeDatalinkColumnKey, col.childColumns);
                if (newCol) { return newCol };
            }
        };

        return null;
    }


    // gets a flattened list of the available source columns, which can be used to populate drop-downs
    getAvailableColumns(columns: DexihDatalinkColumn[], nodeDatalinkColumnKey: number, levelCount: number): DexihDatalinkColumn[] {
        let returnColumns = [];

        columns.forEach(column => {
          let newColumn = Object.assign({}, column);
          newColumn.logicalName = '-'.repeat(levelCount) + column.logicalName;
          returnColumns.push(newColumn);
          if (column.dataType === eTypeCode.Node && column.childColumns) {
            let io = new InputOutputColumns();
            if (io.findColumn(column, nodeDatalinkColumnKey)) {
              let childColumns = this.getAvailableColumns(column.childColumns, nodeDatalinkColumnKey, levelCount + 1);
              returnColumns.push.apply(returnColumns, childColumns);
            }
          }
        });

        return returnColumns;
      }

      public getDatalinkOutputColumns(datalink: DexihDatalink): DexihDatalinkColumn[] {
        if (datalink.dexihDatalinkTransforms.length > 0) {
            let transforms = datalink.dexihDatalinkTransforms.sort((a, b) => b.position - a.position);
            return transforms[0].runTime.outputColumns;
        } else {
            return datalink.sourceDatalinkTable.dexihDatalinkColumns;
        }
      }

    /// used to copy a datalink column from source to target, modifying properties which shouldn't be passed across.
    public copyDatalinkColumn(column: DexihDatalinkColumn, newPosition: number, newGroup: string): DexihDatalinkColumn {
        if (!column) { return null; }

        let newColumn = new DexihDatalinkColumn();
        Object.assign(newColumn, column);
        if (column.childColumns) {
            newColumn.childColumns = column.childColumns
            .sort((a, b) => a.position - b.position)
            .map((c, index) => this.copyDatalinkColumn(c, index, newGroup + '.' + column.logicalName));
        }
        newColumn.isIncrementalUpdate = false;
        newColumn.isInput = false;
        newColumn.position = newPosition;

        if (newGroup) {
            newColumn.columnGroup = newGroup;
        } else {
            newColumn.columnGroup = column.columnGroup;
        }
        return newColumn;
    }

    public copyDatalinkColumns(columns: DexihDatalinkColumn[]): DexihDatalinkColumn[] {
        let newColumns: DexihDatalinkColumn[] = [];
        columns.forEach(column => {
            newColumns.push(this.copyDatalinkColumn(column, column.position, column.columnGroup));
        });
        return newColumns;
    }

    public copyDatalinkTable(table: DexihDatalinkTable): DexihDatalinkTable {
        let newTable = Object.assign({}, table);
        let newColumns: DexihDatalinkColumn[] = [];

        table.dexihDatalinkColumns.forEach(column => {
            newColumns.push(this.copyDatalinkColumn(column, column.position, column.columnGroup));
        });
        newTable.dexihDatalinkColumns = newColumns;

        return newTable;
    }

    public buildInputOutput(hubCache: HubCache, datalink: DexihDatalink) {

        // get a reverse sorted list of transforms prior to the current one.
        let transforms = datalink.dexihDatalinkTransforms
            .filter(a => a.isValid)
            .sort((a, b) => a.position - b.position);

        transforms.forEach((transform, index) => {
            let inputColumns: DexihDatalinkColumn[] = [];

            // if this is the first transform, then the inputs columns will come from the source.
            if (index === 0) {
                inputColumns = datalink.sourceDatalinkTable.dexihDatalinkColumns
                    .sort((a, b) => a.position - b.position)
                    .map((c, i) => this.copyDatalinkColumn(c, i, c.columnGroup));

                // initialize all input columns to not mapped.
                inputColumns.forEach(c => {
                    c.runTime = {impact: eMappingStatus.NotMapped, lineage: eMappingStatus.NotMapped}
                });
            } else {
                // get outputs from the previous transform
                inputColumns = transforms[index - 1].runTime.outputColumns
                    .sort((a, b) => a.position - b.position)
                    .map((c, i) => this.copyDatalinkColumn(c, i, c.columnGroup));
            }

            // get a sorted list of the transform items.
            let transformItems = transform.dexihDatalinkTransformItems
                .sort((a, b) => a.position - b.position);

            // outputColumns contains columns at the top level.
            let outputColumns: DexihDatalinkColumn[] = [];

            // transformColumns the current node which is being transformed (i.e. which mappings and other operations should be applied to)
            let transformColumns = outputColumns;

            let pos = 0;

            let nodeColumn = transform.nodeDatalinkColumn ?
                this.findNodeColumn(transform.nodeDatalinkColumn, inputColumns) : null;

            // if the mapping uses a node level, copy parent columns, and set new node level.
            if (nodeColumn) {
                outputColumns = this.copyDatalinkColumns(inputColumns);

                nodeColumn = transform.nodeDatalinkColumn ?
                this.findNodeColumn(transform.nodeDatalinkColumn, outputColumns) : null;

                // create a copy of the inputs columns
                inputColumns.forEach((column) => {
                    transformColumns.push(this.copyDatalinkColumn(column, pos++, column.columnGroup));
                });

                nodeColumn.childColumns = [];
                transformColumns = nodeColumn.childColumns;
            }

            // add group columns
            transformItems
                .filter(c => (c.transformItemType === eDatalinkTransformItemType.Series
                    || c.transformItemType === eDatalinkTransformItemType.Column) &&
                    c.sourceDatalinkColumn )
                .forEach(item => {
                transformColumns.push(this.copyDatalinkColumn(item.sourceDatalinkColumn, pos++, 'Group'));
            });

            // if there is group node, all non-group columns should be child columns.
            let groupNode = transformItems.find(c => c.transformItemType === eDatalinkTransformItemType.GroupNode)
            if (groupNode) {
                let groupColumn = this.copyDatalinkColumn(groupNode.targetDatalinkColumn, pos++, 'Group Node');
                transformColumns.push(groupColumn);

                // set the current node level to the group column, so transforms are mapped as it's child columns.
                transformColumns = groupColumn.childColumns;
            }

            // if the transform is a join, then pull in the join table columns
            if ((transform.transformType === eTransformType.Join || transform.transformType === eTransformType.Lookup)
                && transform.joinDatalinkTable) {
                let joinColumns: DexihDatalinkColumn[];
                let joinNode = transform.dexihDatalinkTransformItems.find(c => c.transformItemType === eDatalinkTransformItemType.JoinNode)

                if (joinNode) {
                    let joinColumn = joinNode.targetDatalinkColumn;
                    if (joinColumn) {
                        joinColumn = this.copyDatalinkColumn(joinColumn, pos++, 'Join Node');
                        joinColumn.childColumns = [];
                        transformColumns.push(joinColumn);
                        joinColumns = joinColumn.childColumns;
                    } else {
                        joinColumns = [];
                    }
                } else {
                    joinColumns = transformColumns;
                }

                // set join position to high number so join columns are positioned after other columns.
                let joinPos = 10000;
                transform.joinDatalinkTable.dexihDatalinkColumns.forEach(c => {
                    let jc = this.copyDatalinkColumn(c, joinPos++, transform.joinDatalinkTable.name);
                    joinColumns.push(jc);
                });
            }

            // if the transform is a Concatenate, then merge common column names together.
            if (transform.transformType === eTransformType.Concatenate && transform.joinDatalinkTable) {
                // get the join tables.
                let joinTable = transform.joinDatalinkTable;

                // add any missing columns in the join table to the main table.
                joinTable.dexihDatalinkColumns.forEach(concat => {
                    if (!transformColumns.find(c => c.name === concat.name)) {
                        transformColumns.push(this.copyDatalinkColumn(concat, pos++, 'Concatenate'));
                    }
                });
            }

            // add other mapped columns to the current node level.
            transformItems.forEach(item => {
                // if the item type of a column (used for group transform), then the source column is pushed to the output.
                switch (item.transformItemType) {
                    case eDatalinkTransformItemType.AggregatePair:
                    case eDatalinkTransformItemType.BuiltInFunction:
                    case eDatalinkTransformItemType.ColumnPair:
                    case eDatalinkTransformItemType.CustomFunction:
                        if (item.targetDatalinkColumn) {
                            transformColumns.push(item.targetDatalinkColumn);
                        }
                        item.dexihFunctionParameters.filter(c => HubCache.parameterIsOutput(c)).forEach(param => {
                            if (param.datalinkColumn) {
                                transformColumns.push(param.datalinkColumn);
                            }

                            param.arrayParameters.forEach(arrayParam => {
                                if (arrayParam.datalinkColumn) {
                                    transformColumns.push(arrayParam.datalinkColumn);
                                }
                            });
                        });
                        break;
                }
            });

            // add the passThrough columns
            if (transform.passThroughColumns) {
                let columns = inputColumns;
                // get the matching node from the inputs
                if (nodeColumn) {
                    let node = this.findNodeColumn(nodeColumn, columns);
                    if (node) {
                        columns = node.childColumns;
                    }
                }
                columns.forEach(column => {
                    if (transformColumns.findIndex(c => c.name === column.name && c.columnGroup === column.columnGroup  ) < 0) {
                        let newColumn = this.copyDatalinkColumn(column, pos++, column.columnGroup)
                        transformColumns.push(newColumn);
                    }
                });
            }

            transform.runTime = {inputColumns: inputColumns, outputColumns: outputColumns, transformColumns: transformColumns }
        });

        // set the columns for the targets
        let targetColumns: DexihDatalinkColumn[];
        if (transforms.length > 0) {
            targetColumns = transforms[0].runTime.outputColumns;
        } else {
            targetColumns = datalink.sourceDatalinkTable.dexihDatalinkColumns;
        }

        datalink.dexihDatalinkTargets.forEach(target => {
            if (target.nodeDatalinkColumn) {
                let validColumns =  this.validColumns(target.nodeDatalinkColumn.key, targetColumns);
                target.runTime = {inputColumns: validColumns }
            } else {
                target.runTime = {inputColumns: targetColumns};
            }

        });

    }
}

export class ColumnUsageNode {
    public impactTree: Array<ColumnUsageNode>;
    public lineageTree: Array<ColumnUsageNode>;

    public constructor(
        public objectType: eObjectType,
        public objectUse: eObjectUse,
        public datalink: DexihDatalink,
        // public table: DexihTable,
        public datalinkColumn: DexihDatalinkColumn,
        public tableColumn: DexihTableColumn,
        public datalinkTransform: DexihDatalinkTransform,
        public datalinkTransformItem: DexihDatalinkTransformItem,
        public mappingStatus: eMappingStatus,
        public hubCache: HubCache
    ) {}

    // get the parameters and array parameter in a single list to save recursive calls.
    private flattenParameters(params: DexihFunctionParameter[]): any[] {
        let flat = <any[]> params;

        params.forEach(p => {
            flat = flat.concat(p.arrayParameters);
        })

        return flat;
    }

    // builds the impactTree and returns a status to indicate how the column is mapped.
    public createDatalinkImpact(useNextTransform: boolean): eMappingStatus  {
       this.impactTree = [];
       let newMappingStatus: eMappingStatus = eMappingStatus.NotMapped;

        let nextTransform: DexihDatalinkTransform = null;
       if (useNextTransform) {
            switch (this.objectType) {
                case  eObjectType.SourceTable:
                    if (this.datalink.dexihDatalinkTransforms.length > 0 ) {
                        nextTransform = this.datalink.dexihDatalinkTransforms.sort((a, b) => a.position - b.position)[0];
                    }
                    break;
                case eObjectType.Transform:
                    let transforms = this.datalink.dexihDatalinkTransforms
                        .filter(c => c.position > this.datalinkTransform.position).sort((a, b) => a.position - b.position);
                    if (transforms.length > 0 ) {
                        nextTransform = transforms[0];
                    } else {
                        this.mappingStatus = eMappingStatus.Mapped;
                    }
                    break;
                case eObjectType.TargetTable:
                    return;
            }
       } else {
           if (this.datalinkTransform) {
                nextTransform = this.datalinkTransform;
           } else {
               if (this.datalink.dexihDatalinkTransforms.length > 0) {
                    let transforms = this.datalink.dexihDatalinkTransforms.sort((a, b) => b.position - a.position); // sort asc
                    nextTransform = transforms[0];
               }
           }
       }

        // find all occurrences of the current column in the next transform.
        if (nextTransform) {
            let columnIsMapped = false;
            nextTransform.dexihDatalinkTransformItems.forEach(item => {
                switch (item.transformItemType) {
                    case eDatalinkTransformItemType.Column:
                        // if this column is mapped, then add it to the impact tree.
                        if (item.sourceDatalinkColumn &&
                                item.sourceDatalinkColumn.key === this.datalinkColumn.key ) {
                            let column = item.sourceDatalinkColumn;
                            if (column) {
                                let newImpactTree =
                                    new ColumnUsageNode(eObjectType.Transform, eObjectUse.Mapping, this.datalink,
                                        column, null, nextTransform, null, eMappingStatus.Mapped, this.hubCache);
                                let newStatus = newImpactTree.createDatalinkImpact(true);
                                if (newStatus < newMappingStatus) {
                                    newMappingStatus = newStatus;
                                }
                                this.impactTree.push(newImpactTree);
                                if (column.name === this.datalinkColumn.name) {
                                    columnIsMapped = true;
                                }
                            } else {
                                this.mappingStatus = eMappingStatus.Error;
                                return eMappingStatus.Error;
                            }
                        }
                        break;
                    case eDatalinkTransformItemType.ColumnPair:
                        // if this column is mapped, then add it to the impact tree.
                        if (item.sourceDatalinkColumn &&
                                item.sourceDatalinkColumn.key === this.datalinkColumn.key &&
                                item.targetDatalinkColumn ) {
                            let column = item.targetDatalinkColumn;
                            if (column) {
                                let newImpactTree =
                                    new ColumnUsageNode(eObjectType.Transform, eObjectUse.Mapping, this.datalink,
                                        column, null, nextTransform, null, eMappingStatus.Mapped, this.hubCache);
                                let newStatus = newImpactTree.createDatalinkImpact(true);
                                if (newStatus < newMappingStatus) {
                                    newMappingStatus = newStatus;
                                }
                                this.impactTree.push(newImpactTree);
                                if (item.targetDatalinkColumn.name === this.datalinkColumn.name) {
                                    columnIsMapped = true;
                                }
                            } else {
                                this.mappingStatus = eMappingStatus.Error;
                                return eMappingStatus.Error;
                            }
                        }
                        break;
                    case eDatalinkTransformItemType.BuiltInFunction:
                    case eDatalinkTransformItemType.CustomFunction:
                        // if the column is part of a function parameter, then add it to the tree.

                        let inputParams = this.flattenParameters(item.dexihFunctionParameters
                            .filter(p => HubCache.parameterIsInput(p)));

                            inputParams.forEach(inputParam => {

                                if (inputParam.datalinkColumn &&
                                    inputParam.datalinkColumn.key === this.datalinkColumn.key) {
                                    // add the target column (if mapped)
                                    if (item.targetDatalinkColumn) {
                                        let column = item.targetDatalinkColumn;
                                        if (column) {
                                            let newImpactTree = new ColumnUsageNode(eObjectType.Transform, eObjectUse.Function,
                                                this.datalink, column, null, nextTransform, item, eMappingStatus.Mapped, this.hubCache);
                                            let newStatus = newImpactTree.createDatalinkImpact(true);
                                            if (newStatus < newMappingStatus) {
                                                newMappingStatus = newStatus;
                                            }
                                            this.impactTree.push(newImpactTree);
                                            if (column.name === this.datalinkColumn.name) {
                                                columnIsMapped = true;
                                            }
                                        } else {
                                            this.mappingStatus = eMappingStatus.Error;
                                            return eMappingStatus.Error;
                                        }
                                    }

                                    let outParams = this.flattenParameters(item.dexihFunctionParameters
                                        .filter(p => HubCache.parameterIsOutput(p)));

                                    // add any output parameters
                                    outParams.forEach(outParam => {
                                        if (outParam.datalinkColumn) {
                                            let column = outParam.datalinkColumn;
                                            if (column) {
                                                let newImpactTree = new ColumnUsageNode(eObjectType.Transform, eObjectUse.Function,
                                                    this.datalink, column, null, nextTransform,
                                                    item, eMappingStatus.Mapped, this.hubCache);
                                                let newStatus = newImpactTree.createDatalinkImpact(true);
                                                if (newStatus < newMappingStatus) {
                                                    newMappingStatus = newStatus;
                                                }
                                                this.impactTree.push(newImpactTree);
                                                if (column.name === this.datalinkColumn.name) {
                                                    columnIsMapped = true;
                                                }
                                            } else {
                                                this.mappingStatus = eMappingStatus.Error;
                                                return eMappingStatus.Error;
                                            }
                                        }
                                    });
                                }
                            });
                        break;
                    case eDatalinkTransformItemType.JoinPair:
                        // if this column part of a join add it.
                        if (item.sourceDatalinkColumn && item.sourceDatalinkColumn.key
                                === this.datalinkColumn.key) {
                            let joinTable = nextTransform.joinDatalinkTable;
                            if (joinTable) {
                                let column = item.joinDatalinkColumn;

                                if (column) {
                                    let newImpactTree = new ColumnUsageNode(eObjectType.Transform, eObjectUse.Join,
                                        this.datalink, column, null, nextTransform, item, eMappingStatus.Joined, this.hubCache);
                                    this.impactTree.push(newImpactTree);
                                } else {
                                    this.mappingStatus = eMappingStatus.Error;
                                    return eMappingStatus.Error;
                                }
                            } else {
                                return eMappingStatus.Error;
                            }
                        }
                        break;
                    case eDatalinkTransformItemType.Sort:
                        // if this column part of a sort, add it.
                        if (item.sourceDatalinkColumn &&
                                item.sourceDatalinkColumn.key === this.datalinkColumn.key) {
                            let newImpactTree = new ColumnUsageNode(eObjectType.Transform, eObjectUse.Sort,
                                    this.datalink, this.datalinkColumn, null, nextTransform, item, eMappingStatus.Sorted, this.hubCache);
                            this.impactTree.push(newImpactTree);
                        }
                        break;
                }

            });

            // if the column was not mapped, and the transform passes through columns without mapping, then add it.
            if (!columnIsMapped && nextTransform.passThroughColumns) {
                if (this.mappingStatus === eMappingStatus.Mapped) {
                    newMappingStatus = eMappingStatus.Mapped;
                } else {
                    newMappingStatus = eMappingStatus.NotMapped;
                }
                let newImpactTree = new ColumnUsageNode(eObjectType.Transform, eObjectUse.PassThrough,
                        this.datalink, this.datalinkColumn, null, nextTransform, null, this.mappingStatus, this.hubCache);
                let newStatus = newImpactTree.createDatalinkImpact(true);
                if (newStatus < newMappingStatus) {
                    newMappingStatus = newStatus;
                }
                this.impactTree.push(newImpactTree);
            }

        } else {
            // if there is no next transform, then check against the target tables.
            for (let target of this.datalink.dexihDatalinkTargets) {

                let table = this.hubCache.getTable(target.tableKey);

                if (table) {
                    let column = table.dexihTableColumns.find(c => c.isValid && c.name === this.datalinkColumn.name);
                    if (column) {
                        if (this.mappingStatus === eMappingStatus.Mapped) {
                            newMappingStatus = eMappingStatus.Mapped;
                        } else {
                            if (this.isAutoGenerateColumn(column.deltaType)) {
                                newMappingStatus = eMappingStatus.AutoGenerate;
                            } else {
                                if (!this.datalinkTransform || this.datalinkTransform.passThroughColumns) {
                                    newMappingStatus = eMappingStatus.PassThroughMap;
                                } else {
                                    newMappingStatus = eMappingStatus.NotMapped;
                                }

                            }
                        }
                    } else {
                        if (this.mappingStatus === eMappingStatus.Mapped) {
                            newMappingStatus = eMappingStatus.MappedToNothing;
                        } else {
                            if (!this.datalinkTransform || this.datalinkTransform.passThroughColumns) {
                                newMappingStatus = eMappingStatus.PassThroughToNothing;
                            } else {
                                newMappingStatus = eMappingStatus.NotMapped;
                            }
                    }
                    }
                    let newImpactTree = new ColumnUsageNode(eObjectType.Transform, eObjectUse.Target,
                            this.datalink, null, column, null, null, newMappingStatus, this.hubCache);
                    this.impactTree.push(newImpactTree);
                } else {
                    if (!this.datalink.isQuery) {
                        if (this.mappingStatus === eMappingStatus.Mapped) {
                            newMappingStatus = eMappingStatus.MappedToVirtual;
                        } else {
                            newMappingStatus = eMappingStatus.PassThroughToVirtual;
                        }

                    } else {
                        newMappingStatus = eMappingStatus.Error;
                    }
                }

                if (this.mappingStatus === eMappingStatus.NotMapped) { break; }
            }

        }

        return newMappingStatus;


    }

    public createDatalinkLineage(usePreviousTransform: boolean): eMappingStatus  {
       this.lineageTree = [];
       let newMappingStatus: eMappingStatus = eMappingStatus.NotMapped;
       let currentColumn = this.datalinkColumn;

       if (!currentColumn || this.tableColumn ) {
            currentColumn = new DexihDatalinkColumn();
            Object.assign(currentColumn, this.tableColumn);
       }

        let previousTransform: DexihDatalinkTransform = null;
        if (usePreviousTransform) {
            switch (this.objectType) {
                case  eObjectType.SourceTable:
                    return;
                case eObjectType.Transform:
                    let transforms = this.datalink.dexihDatalinkTransforms
                        .filter(c => c.position < this.datalinkTransform.position).sort((a, b) => a.position - b.position); // sort asc
                    if (transforms.length > 0 ) {
                        previousTransform = transforms[transforms.length - 1];
                    }
                    break;
                case eObjectType.TargetTable:
                    // check for column types which will populate without mappings (i.e. auto-generate)
                    if (this.tableColumn && this.isAutoGenerateColumn(this.tableColumn.deltaType)) {
                        newMappingStatus = eMappingStatus.AutoGenerate;
                    } else {
                        newMappingStatus = eMappingStatus.NotMapped;
                    }

                    if (this.datalink.dexihDatalinkTransforms.length > 0 ) {
                        // get the last transform.
                        let transforms2 = this.datalink.dexihDatalinkTransforms.sort((a, b ) => b.position - a.position);
                        previousTransform = transforms2[0];

                        // map the column name to the transform.
                        if (this.tableColumn) {
                            let column = previousTransform.runTime.outputColumns.find(c => c.name === this.tableColumn.name);
                            if (column) {
                                currentColumn = column;
                            }
                        } else {
                            currentColumn = this.datalinkColumn;
                        }

                    } else {
                        if (this.tableColumn) {
                            let outputs = this.datalink.sourceDatalinkTable.dexihDatalinkColumns;
                            let column = outputs.find(c => c.name === this.tableColumn.name);
                            if (column) {
                                currentColumn = column;
                            }
                        } else {
                            currentColumn = this.datalinkColumn;
                        }

                    }
                    break;
            }
        } else {
            previousTransform = this.datalinkTransform;

            if (this.datalinkTransform) {
                previousTransform = this.datalinkTransform;
           } else {
               if (this.datalink.dexihDatalinkTransforms.length > 0) {
                    let transforms = this.datalink.dexihDatalinkTransforms.sort((a, b) => a.position - b.position); // sort desc
                    previousTransform = transforms[0]; // get last transform
               }
           }

        }

        // find all occurrences of the current column in the next transform.
        if (previousTransform) {
            let columnIsMapped = false;
            previousTransform.dexihDatalinkTransformItems.forEach(item => {
                switch (item.transformItemType) {
                    case eDatalinkTransformItemType.Column:
                    // if this column is mapped, then add it to the impact tree.
                    if (item.sourceDatalinkColumn &&
                        item.sourceDatalinkColumn.key) {
                        let newLineageTree = new ColumnUsageNode(eObjectType.Transform, eObjectUse.Mapping,
                            this.datalink, item.sourceDatalinkColumn, null, previousTransform, null,
                            eMappingStatus.Mapped, this.hubCache);
                        let newStatus = newLineageTree.createDatalinkLineage(true);
                        if (newStatus < newMappingStatus) {
                            newMappingStatus = newStatus;
                        }
                        this.lineageTree.push(newLineageTree);
                        // if (item.sourceDatalinkColumn.name === this.datalinkColumn.name) {
                            columnIsMapped = true;
                        // }
                    }
                    break;
                    case eDatalinkTransformItemType.ColumnPair:
                        // if this column is mapped, then add it to the impact tree.
                        if (item.targetDatalinkColumn &&
                            item.targetDatalinkColumn.key === currentColumn.key
                            && item.sourceDatalinkColumn) {
                            let newLineageTree = new ColumnUsageNode(eObjectType.Transform, eObjectUse.Mapping,
                                this.datalink, item.sourceDatalinkColumn, null, previousTransform, null,
                                eMappingStatus.Mapped, this.hubCache);
                            let newStatus = newLineageTree.createDatalinkLineage(true);
                            if (newStatus < newMappingStatus) {
                                newMappingStatus = newStatus;
                            }
                            this.lineageTree.push(newLineageTree);
                            // if (item.sourceDatalinkColumn.name === this.datalinkColumn.name) {
                                columnIsMapped = true;
                            // }
                        }
                        break;
                    case eDatalinkTransformItemType.BuiltInFunction:
                    case eDatalinkTransformItemType.CustomFunction:

                        // if this column is mapped, then add it to the impact tree.
                        if (item.targetDatalinkColumn &&
                            item.targetDatalinkColumn.key === currentColumn.key) {
                            newMappingStatus = eMappingStatus.Mapped;

                            let inputParams = this.flattenParameters(item.dexihFunctionParameters
                                .filter(p => HubCache.parameterIsOutput(p)));
                            inputParams.filter(c => c.datalinkColumn).forEach(inParam => {
                                if (inParam.datalinkColumn) {
                                    let newLineageTree = new ColumnUsageNode(eObjectType.Transform, eObjectUse.Function,
                                            this.datalink, inParam.datalinkColumn, null, previousTransform, item,
                                            eMappingStatus.Mapped, this.hubCache);
                                    let newStatus = newLineageTree.createDatalinkLineage(true);
                                    if (newStatus < newMappingStatus) {
                                        newMappingStatus = newStatus;
                                    }
                                    this.lineageTree.push(newLineageTree);
                                    // if (inParam.datalinkColumn.name === this.datalinkColumn.name) {
                                        columnIsMapped = true;
                                    // }
                                }
                            });
                        }

                        // add any output parameters
                        let outParams = this.flattenParameters(item.dexihFunctionParameters
                            .filter(p => HubCache.parameterIsOutput(p)));
                        outParams.filter(c => c.datalinkColumn).forEach(outParam => {
                                if (outParam.datalinkColumn.key === currentColumn.key) {
                                    newMappingStatus = eMappingStatus.Mapped;
                                    item.dexihFunctionParameters
                                        .filter(p => HubCache.parameterIsOutput(p) && p.datalinkColumn).forEach(inParam => {
                                    if (inParam.datalinkColumn) {
                                        let newLineageTree = new ColumnUsageNode(eObjectType.Transform, eObjectUse.Function,
                                            this.datalink, inParam.datalinkColumn, null, previousTransform, item,
                                            eMappingStatus.Mapped, this.hubCache);
                                        let newStatus = newLineageTree.createDatalinkLineage(true);
                                        if (newStatus < newMappingStatus) {
                                            newMappingStatus = newStatus;
                                        }
                                        this.lineageTree.push(newLineageTree);
                                        // if (inParam.datalinkColumn.name === this.datalinkColumn.name) {
                                            columnIsMapped = true;
                                        // }
                                    }
                                });
                            }

                        });


                        break;
                    case eDatalinkTransformItemType.JoinPair:
                        // if this column part of a join add it.
                        if (item.sourceDatalinkColumn && item.sourceDatalinkColumn.key === currentColumn.key) {
                            let table = previousTransform.joinDatalinkTable;
                            let column = item.joinDatalinkColumn;
                            if (table && column) {
                                let newLineageTree = new ColumnUsageNode(eObjectType.Transform, eObjectUse.Join,
                                        this.datalink, column, null, previousTransform, item, eMappingStatus.Joined, this.hubCache);
                                this.lineageTree.push(newLineageTree);
                            } else {
                                return eMappingStatus.Error;
                            }
                        }

                        break;
                    case eDatalinkTransformItemType.Sort:
                        // if this column part of a sort, add it.
                        if (item.sourceDatalinkColumn && item.sourceDatalinkColumn.key === currentColumn.key) {
                            let newLineageTree = new ColumnUsageNode( eObjectType.Transform, eObjectUse.Sort,
                                this.datalink, currentColumn, null, previousTransform, item, eMappingStatus.Sorted, this.hubCache);
                            this.lineageTree.push(newLineageTree);
                        }

                        break;
                }

            });

            // if the column was not mapped, and the transform passes through columns without mapping, then add it.
            if (!columnIsMapped && previousTransform.passThroughColumns) {
                if (this.mappingStatus === eMappingStatus.Mapped) {
                    newMappingStatus = eMappingStatus.Mapped;
                } else if (this.objectType === eObjectType.TargetTable && this.tableColumn &&
                    this.isAutoGenerateColumn(this.tableColumn.deltaType)) {
                    newMappingStatus = eMappingStatus.AutoGenerate;
                }
                let newLineageTree = new ColumnUsageNode(eObjectType.Transform, eObjectUse.PassThrough,
                        this.datalink, currentColumn, null, previousTransform, null, this.mappingStatus, this.hubCache);
                let newStatus = newLineageTree.createDatalinkLineage(true);
                if (newStatus < newMappingStatus) {
                    newMappingStatus = newStatus;
                }
                this.lineageTree.push(newLineageTree);
            } else if (!columnIsMapped && previousTransform.joinDatalinkTable) {
                // if there is a join table, then check against that.
                let table = previousTransform.joinDatalinkTable;
                let column = table.dexihDatalinkColumns.find(c => c.isValid && c.name === currentColumn.name);
                if (column) {
                    if (this.mappingStatus === eMappingStatus.Mapped) {
                        newMappingStatus = eMappingStatus.Mapped;
                    } else if (newMappingStatus === eMappingStatus.NotMapped) {
                        newMappingStatus = eMappingStatus.PassThroughMap;
                    }
                    let newLineageTree = new ColumnUsageNode(eObjectType.Transform, eObjectUse.Join, this.datalink,
                        column, null, null, null, newMappingStatus, this.hubCache);
                    this.lineageTree.push(newLineageTree);
                }
            } else if (!columnIsMapped) {
                if (newMappingStatus !== eMappingStatus.AutoGenerate) {
                    newMappingStatus = eMappingStatus.NotMapped;
                }
            } else {
                newMappingStatus = eMappingStatus.Mapped;
            }
        } else {
            // if there is no previous transform, then check against the source table.
            let table = this.datalink.sourceDatalinkTable;
            let column = table.dexihDatalinkColumns.find(c => c.isValid && c.name === currentColumn.name);
            if (column) {
                if (this.mappingStatus === eMappingStatus.Mapped) {
                    newMappingStatus = eMappingStatus.Mapped;
                } else if (newMappingStatus === eMappingStatus.NotMapped) {
                    newMappingStatus = eMappingStatus.PassThroughMap;
                }
            } else {
                if (this.mappingStatus === eMappingStatus.Mapped) {
                    newMappingStatus = eMappingStatus.MappedToNothing;
                } else if (!newMappingStatus) {
                    newMappingStatus = eMappingStatus.PassThroughToNothing;
                }
            }
            let newLineageTree = new ColumnUsageNode(eObjectType.Transform, eObjectUse.Source, this.datalink,
                    column, null, null, null, newMappingStatus, this.hubCache);
            this.lineageTree.push(newLineageTree);

        }

        return newMappingStatus;
    }


    public isAutoGenerateColumn(deltaType: eDeltaType): boolean {
        let returnValue: boolean;
        switch (deltaType) {
            case eDeltaType.AutoIncrement:
            case eDeltaType.DbAutoIncrement:
            case eDeltaType.Version:
            case eDeltaType.ValidFromDate:
            case eDeltaType.ValidToDate:
            case eDeltaType.AzurePartitionKey:
            case eDeltaType.AzureRowKey:
            case eDeltaType.CreateAuditKey:
            case eDeltaType.CreateDate:
            case eDeltaType.FileName:
            case eDeltaType.IsCurrentField:
            case eDeltaType.RejectedReason:
            case eDeltaType.SourceSurrogateKey:
            case eDeltaType.TimeStamp:
            case eDeltaType.UpdateAuditKey:
            case eDeltaType.UpdateDate:
            case eDeltaType.ValidationStatus: {
                returnValue = true;
            }
            break;
            default:
                returnValue = false;
        }
        return returnValue;
    }

}



