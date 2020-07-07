### Datalink Tests

Datalink tests enable regression testing.

#### General Properties

Each datalink test consist of the following properties:
* Test Name - A name to represent the test.
* Description - A description of the test.
* A series of test steps. 

The test steps are executed in the sequence specified.  Each step consists of the following properties:

* Step Name - A name to represent the step.
* Description - A description of the step.
* Datalink - The datalink to execute for the test.
* Target tables(s)
* Source table(s)

For each target contained in the datalink the following table connection/table properties are specified:

* Target Connection/Table/Schema - Replaces the target table in the datalink with the specified target.
* Expected Connection/Table/Schema - A table containing the expected data.  This is compared against the target to determine if the test is passed.
* Error Connection/TableSchema - A table used to output mismatched rows when the test runs.

For each source contained in the datalink the following connection/table/schema properties are specified:

* Source Connection/Table/Schema - Replaces the source table in the datalink with the specified source.
* Test Connection/Table/Schema - A table containing the test data for this source.  When the test is executed the test data is copied over the data in the source connection.

#### Automatically Create A Test

A test can be created automatically from an existing datalink by selecting the datalink(s).  Use the following steps to generate a test:

* Run the datalink(s), and perform necessary validations to ensure the source tables and target tables are correct.
* Select the datalink(s) ([here](route:/hub/{{HUBKEY}}/summary/datalinks)), and select "New Datalink Tests" from the menu.
* Complete the form, and the tests will be created.


#### Snapshot Existing Data

The snapshot function allows live tables to be "snapshotted" to the expected and test tables.  The datalink test will then use the snapshot data to perform regression test.

