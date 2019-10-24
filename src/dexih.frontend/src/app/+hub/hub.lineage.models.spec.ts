import { ColumnUsageNode, eDatalinkObjectType, eObjectUse, InputOutputColumns } from './hub.lineage.models';
import { HubCache, eCacheStatus, eMappingStatus } from './hub.models';
import { DexihHub, DexihDatalinkTable, DexihDatalinkColumn, DexihConnection, DexihTable,
    DexihTableColumn, DexihDatalink, eTransformWriterMethod, eTransformType, DexihDatalinkTransform,
    DexihDatalinkTransformItem, eTransformItemType, RemoteLibraries } from '../shared/shared.models';

class LineageTests {

    public hubCache: HubCache;
    public remoteLibraries: RemoteLibraries;

    constructor() {
        let hub = new DexihHub();
        hub.hubKey = 1;
        hub.name = 'test hub';
        this.hubCache = new HubCache(eCacheStatus.Loaded, hub);
        this.remoteLibraries = new RemoteLibraries();

        // add a table to the cache.
        let connection = this.getConnection();
        let table = this.getTable1();
        hub.dexihConnections.push(connection);
        hub.dexihTables.push(table);

    }

    getDatalinkTable1(): DexihDatalinkTable {
        let table = new DexihDatalinkTable();
        table.name = 'source table';

        let column = new DexihDatalinkColumn();
        column.name = 'column1';
        column.position = 1;
        table.dexihDatalinkColumns.push(column);

        column = new DexihDatalinkColumn();
        column.name = 'column2';
        column.position = 2;
        table.dexihDatalinkColumns.push(column);

        column = new DexihDatalinkColumn();
        column.name = 'column3';
        column.position = 3;
        table.dexihDatalinkColumns.push(column);

        return table;
    };

    getDatalinkJoinTable1(): DexihDatalinkTable {
        let table = new DexihDatalinkTable();
        table.name = 'join table';

        let column = new DexihDatalinkColumn();
        column.name = 'column1';
        column.position = 1;
        table.dexihDatalinkColumns.push(column);

        column = new DexihDatalinkColumn();
        column.name = 'join1';
        column.position = 2;
        table.dexihDatalinkColumns.push(column);

        column = new DexihDatalinkColumn();
        column.name = 'join2';
        column.position = 3;
        table.dexihDatalinkColumns.push(column);

        return table;
    };

    getConnection(): DexihConnection {
        let connection = new DexihConnection();
        connection.name = 'test';

        return connection;
    }

    getTable1(): DexihTable {
        let table = new DexihTable();
        table.key = 100;
        table.name = 'target table';

        let column = new DexihTableColumn();
        column.name = 'column1';
        column.position = 1;
        table.dexihTableColumns.push(column);

        column = new DexihTableColumn();
        column.name = 'column2';
        column.position = 2;
        table.dexihTableColumns.push(column);

        column = new DexihTableColumn();
        column.name = 'column3';
        column.position = 3;
        table.dexihTableColumns.push(column);

        return table;
    };

    getDatalinkWithSource(): DexihDatalink {
        let datalink = new DexihDatalink();
        datalink.sourceDatalinkTable = new DexihDatalinkTable();
        datalink.name = 'test';

        datalink.sourceDatalinkTable = this.getDatalinkTable1();

        return datalink;
    }

    getDatalinkWithSourceTarget(): DexihDatalink {
        let datalink = this.getDatalinkWithSource();

        datalink.loadStrategy = eTransformWriterMethod.Bulk;
        // datalink.targetTableKey = 100;
        return datalink;
    }

    getTransform(transformType: eTransformType): DexihDatalinkTransform {
        // create a new mapping transform and add the the datalink
        let mappingTransform = new DexihDatalinkTransform();
        mappingTransform.passThroughColumns = true;
        mappingTransform.position = 1;
        mappingTransform.transformType = transformType;
        return mappingTransform;
    }

    getMapping(inputColumn: DexihDatalinkColumn ): DexihDatalinkTransformItem {
        // add a mapping
        let mapping = new DexihDatalinkTransformItem();
        mapping.sourceDatalinkColumn = inputColumn;
        mapping.transformItemType = eTransformItemType.ColumnPair;
        let targetColumn = new DexihDatalinkColumn();
        Object.assign(targetColumn, mapping.sourceDatalinkColumn);
        mapping.targetDatalinkColumn = targetColumn;

        return mapping;
    }

    getJoin(inputColumn: DexihDatalinkColumn, joinColumn: DexihDatalinkColumn ): DexihDatalinkTransformItem {
        // add a mapping
        let join = new DexihDatalinkTransformItem();
        join.sourceDatalinkColumn = inputColumn;
        join.transformItemType = eTransformItemType.JoinPair;
        join.joinDatalinkColumn = joinColumn;

        return join;
    }

}

// describe('input columns tests', () => {
//     // create an empty datalink with a source table only.
//     let lineageTest = new LineageTests();
//     let io = new InputOutputColumns();

//     // check the input & output columns are setting correctly for a datalink with no transforms.
//     it('empty datalink', () => {
//         let datalink = lineageTest.getDatalinkWithSource();

//         // check output columns should be 3.
//         let outputs = io.getOutputColumns(lineageTest.hubCache, datalink, null);
//         expect(3).toBe(outputs.length);

//         // check input columns should be 3.
//         let inputs = io.getInputColumns(lineageTest.hubCache,  datalink, null, []);
//         expect(3).toBe(inputs[0].dexihDatalinkColumns.length, 'expected 3 source columns.');

//         let columnUsage = new ColumnUsageNode(eDatalinkObjectType.SourceTable, eObjectUse.Source,
//             datalink, datalink.sourceDatalinkTable.dexihDatalinkColumns[0], null, null, null, null, lineageTest.hubCache);
//         let mappingStatus = columnUsage.createDatalinkImpact(false);
//         expect(eMappingStatus.PassThroughToVirtual).toBe(mappingStatus, 'impact should be passThroughToVirtual');

//     });

//     // check the input & output columns are setting correctly for a datalink with source & target
//     it('datalink with source/target table', () => {
//         let datalink = lineageTest.getDatalinkWithSourceTarget();

//         // check output columns should be 3.
//         let outputs = io.getOutputColumns(lineageTest.hubCache,  datalink, null);
//         expect(3).toBe(outputs.length);

//         // check input columns should be 3.
//         let inputs = io.getInputColumns(lineageTest.hubCache,  datalink, null, []);
//         expect(3).toBe(inputs[0].dexihDatalinkColumns.length, 'expected 3 source columns.');

//         let columnUsage = new ColumnUsageNode(eDatalinkObjectType.SourceTable, eObjectUse.Source,
//             datalink, datalink.sourceDatalinkTable.dexihDatalinkColumns[0], null, null, null, null, lineageTest.hubCache);
//         let mappingStatus = columnUsage.createDatalinkImpact(false);
//         expect(eMappingStatus.PassThroughMap).toBe(mappingStatus, 'impact should be PassThrough');

//     });

//     // check the input & output columns are setting correctly for a datalink one transform with passThrough = true
//     it('datalink - with transform passThrough = true', () => {
//         let datalink = lineageTest.getDatalinkWithSource();
//         let mappingTransform = lineageTest.getTransform(eTransformType.Mapping);
//         mappingTransform.passThroughColumns = true;
//         datalink.dexihDatalinkTransforms.push(mappingTransform);

//         // check output columns should be 3.
//         let outputs = io.getOutputColumns(lineageTest.hubCache,  datalink, null);
//         expect(3).toBe(outputs.length);

//         // check output columns should be 3.
//         outputs = io.getOutputColumns(lineageTest.hubCache, datalink, mappingTransform);
//         expect(3).toBe(outputs.length);

//         // check input columns should be 3.
//         let inputs = io.getInputColumns(lineageTest.hubCache,  datalink, null, []);
//         expect(3).toBe(inputs[1].dexihDatalinkColumns.length);

//         // get impact information from source column
//         let columnUsage = new ColumnUsageNode(eDatalinkObjectType.SourceTable, eObjectUse.Source,
//             datalink, datalink.sourceDatalinkTable.dexihDatalinkColumns[0], null, null, null, null, lineageTest.hubCache);
//         let mappingStatus = columnUsage.createDatalinkImpact(false);
//         expect(eMappingStatus.PassThroughToVirtual).toBe(mappingStatus, 'impact should be passThroughToVirtual');

//     });

//     // check the input & output columns are setting correctly for a datalink with a mapping transform set to passThrough = false;
//     it('datalink - with transform passThrough = false', () => {
//         let datalink = lineageTest.getDatalinkWithSourceTarget();
//         let mappingTransform = lineageTest.getTransform(eTransformType.Mapping);
//         mappingTransform.passThroughColumns = false;
//         datalink.dexihDatalinkTransforms.push(mappingTransform);

//         // check output columns should be 3.
//         let outputs = io.getOutputColumns(lineageTest.hubCache, datalink, null);
//         expect(3).toBe(outputs.length, 'check1');

//         // check output columns should be 0.
//         outputs = io.getOutputColumns(lineageTest.hubCache,  datalink, mappingTransform);
//         expect(0).toBe(outputs.length, 'check2');

//         // check input columns should be 3.
//         let inputs = io.getInputColumns(lineageTest.hubCache,  datalink, null, []);
//         expect(0).toBe(inputs[0].dexihDatalinkColumns.length, 'check3');

//         // check input columns should be 3.
//         inputs = io.getInputColumns(lineageTest.hubCache, datalink, mappingTransform, []);
//         expect(3).toBe(inputs[0].dexihDatalinkColumns.length, 'check4');

//         let targetTable = lineageTest.getTable1();

//         // get lineage information from target column
//         let columnUsage = new ColumnUsageNode(eDatalinkObjectType.TargetTable, eObjectUse.Target,
//             datalink, null, targetTable.dexihTableColumns[0], null, null, null, lineageTest.hubCache);
//         let mappingStatus = columnUsage.createDatalinkLineage(false);
//         expect(eMappingStatus.NotMapped).toBe(mappingStatus, 'target columns are not not mapped');

//         // get lineage information from target column
//         columnUsage = new ColumnUsageNode(eDatalinkObjectType.TargetTable, eObjectUse.Target,
//             datalink, datalink.sourceDatalinkTable.dexihDatalinkColumns[0], null, null, null, null, lineageTest.hubCache);
//         mappingStatus = columnUsage.createDatalinkImpact(false);
//         expect(eMappingStatus.NotMapped).toBe(mappingStatus, 'source columns are passThrough to nothing');

//     });

//     // check the input & output columns are setting correctly for a datalink with a mapping transform set to passThrough = false
//     // , and a mapping.
//     it('datalink - with transform w/mapping & passThrough = false', () => {
//         let datalink = lineageTest.getDatalinkWithSource();
//         let mappingTransform = lineageTest.getTransform(eTransformType.Mapping);
//         mappingTransform.passThroughColumns = false;
//         datalink.dexihDatalinkTransforms.push(mappingTransform);

//         let mapping = lineageTest.getMapping(datalink.sourceDatalinkTable.dexihDatalinkColumns[0]);
//         mappingTransform.dexihDatalinkTransformItems.push(mapping);

//         // check output columns should be 1.
//         let outputs = io.getOutputColumns(lineageTest.hubCache,  datalink, null);
//         expect(1).toBe(outputs.length);

//         // check output columns should be 1.
//         outputs = io.getOutputColumns(lineageTest.hubCache, datalink, mappingTransform);
//         expect(1).toBe(outputs.length);

//         // check input columns should be 1.
//         let inputs = io.getInputColumns(lineageTest.hubCache, datalink, null, []);
//         expect(1).toBe(inputs[0].dexihDatalinkColumns.length);

//         // check input columns should be 1.
//         inputs = io.getInputColumns(lineageTest.hubCache, datalink, mappingTransform, []);
//         expect(3).toBe(inputs[0].dexihDatalinkColumns.length);

//         // get lineage information from target column
//         let columnUsage = new ColumnUsageNode(eDatalinkObjectType.TargetTable, eObjectUse.Target,
//             datalink, datalink.sourceDatalinkTable.dexihDatalinkColumns[0], null, null, null, null, lineageTest.hubCache);
//         let mappingStatus = columnUsage.createDatalinkImpact(false);
//         expect(eMappingStatus.MappedToVirtual).toBe(mappingStatus, '1st source column is mapped');

//     });

//         // check the input & output columns are setting correctly for a datalink with a mapping transform set to passThrough = false
//     // , and a mapping.
//     it('datalink - with transform w/join', () => {
//         let datalink = lineageTest.getDatalinkWithSource();
//         let joinTransform = lineageTest.getTransform(eTransformType.Join);
//         datalink.dexihDatalinkTransforms.push(joinTransform);

//         let joinTable = lineageTest.getDatalinkJoinTable1();
//         joinTransform.joinDatalinkTable = joinTable;

//         let join = lineageTest.getJoin(datalink.sourceDatalinkTable.dexihDatalinkColumns[0], joinTable.dexihDatalinkColumns[0]);
//         joinTransform.dexihDatalinkTransformItems.push(join);

//         // check output columns should be 5
//         let outputs = io.getOutputColumns(lineageTest.hubCache, datalink, null);
//         expect(5).toBe(outputs.length, '4 output columns, 3 in source, and 3 in join.');

//         // check output columns should be 5
//         outputs = io.getOutputColumns(lineageTest.hubCache, datalink, joinTransform);
//         expect(5).toBe(outputs.length);

//         // check input columns should be 3
//         let inputs = io.getInputColumns(lineageTest.hubCache, datalink, null, []);
//         expect(3).toBe(inputs[1].dexihDatalinkColumns.length);

//         // check input columns should be 3.
//         inputs = io.getInputColumns(lineageTest.hubCache, datalink, joinTransform, []);
//         expect(3).toBe(inputs[0].dexihDatalinkColumns.length);

//         // get impact information from target column
//         let columnUsage = new ColumnUsageNode(eDatalinkObjectType.TargetTable, eObjectUse.Target,
//             datalink, datalink.sourceDatalinkTable.dexihDatalinkColumns[0], null, null, null, null, lineageTest.hubCache);
//         let mappingStatus = columnUsage.createDatalinkImpact(false);
//         expect(eMappingStatus.PassThroughToVirtual).toBe(mappingStatus, '1st source column is used for join');

//         // get impact information for join column
//         columnUsage = new ColumnUsageNode(eDatalinkObjectType.TargetTable, eObjectUse.Target,
//             datalink, joinTable.dexihDatalinkColumns[1], null, null, null, null, lineageTest.hubCache);
//         mappingStatus = columnUsage.createDatalinkImpact(false);
//         expect(eMappingStatus.PassThroughToVirtual).toBe(mappingStatus, 'join columns should passThrough');

//         // get lineage information for join column
//         columnUsage = new ColumnUsageNode(eDatalinkObjectType.TargetTable, eObjectUse.Target,
//             datalink, joinTable.dexihDatalinkColumns[1], null, null, null, null, lineageTest.hubCache);
//         mappingStatus = columnUsage.createDatalinkLineage(false);
//         expect(eMappingStatus.PassThroughMap).toBe(mappingStatus, 'join columns should passThrough');
//     });

// });
