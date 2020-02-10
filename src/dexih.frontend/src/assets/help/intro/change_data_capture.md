### Change Data Capture

Change Data Capture (CDC) is the process applying changes to a target table.  There are two key mechanisms in the integration hub to detect data changes; source based or target based.

<img src="{{SERVER}}/assets/img/dexih/cdc_process.png" width="100%" />

> Note: Source based and Target based CDC are not mutually exclusive, and in many circumstances a combination of both will be used to determine the changes.

#### Source Based CDC

Source based CDC references the source table to determine changes from the previous data load.  The benefit of source based CDC is generally **performance**, as only new rows will be processed.  Source based CDC is only possible when the source table has information to support this.  This can be achieved when:

* **Incremental Column** - A column in the source table that increments to a higher value each time a row is inserted or updated.  With this type of column the datalink is able to query the source table as follows:
    ```
    select \* from table where incrementing_column > {highest value from previous execution}
    ```
    An example of this is a column named `last_updated` that updates to the current date/time every time the table is updated.
    To identity an incremental column, edit the source table column, and select `Is Incremental`.  Any datalink using this table will now automatically pull changes from the source table.
* **Versioned Source Table** - A versioned source table is a table that stores change history.  Current supported is the Sql Server [Temporal Table](https://docs.microsoft.com/en-us/sql/relational-databases/tables/temporal-tables?view=sql-server-2017).  

When a datalink is run, it will automatically use any source based CDC which is configured.  To reset this, either run the data link with the "truncate" option or the "reset delta" option.

#### Target Based CDC

Target based CDC compares incoming data against the target data, determines the **delta** and writes the changes based on the **update strategy**.

#### Determining the Delta

On each table column, is a **Delta Type** which provides information to the datalink to determine how a delta should be determined.

The following delta types values are used to determine table changes:

* **Natural Key** - Columns marked as *Natural Key* determine whether a row already exists in the target or is a new row.  If multiple natural key records exist, the row with the highest *surrogate key* delta type will be considered the most recent.
* **Surrogate Key** - A surrogate key is automatically generated unique number column.  A surrogate key is a column is required when the natural key columns are not unique.
* **Tracking Field** - Columns marked as *Tracking Field* will be compared for changes.  When all tracking fields are the same, the row will considered unchanged.
* **Non-Tracking Field** - Columns marked as *Non-Tracking Fields* will be ignored when comparing for changes.

> Note: A *surrogate key* column is required on the target table if the *natural key* fields are not unique for the table.

#### Implementing the Update Strategy

On each datalink target, the update strategy determines how the target table should be updated, with the following operations:
* Truncate Target Table - Deletes all data from the target table and reloads new data each time.
* Update Rows - Updates rows determined by the delta to be an update
* Delete Rows - Deleted rows determined by the delta to be deleted.
* Preserve Rows - When an update or delete is detected by the delta, the original row will be preserved (see history preservation below)

The following table shows the operations performed by each of the update strategies:

|Update Strategy|Truncate Target|Inserts|Updates|Deletes|Preserves|
|---|---|---|---|---|---|
|Truncate table and reload|Yes|Yes|No|No|No|
|Append all rows to target table|No|Yes|No|No|No|
|Append new rows and update existing rows|No|Yes|Yes|No|No|
|Append new rows, update existing rows, and delete "deleted" rows.|No|Yes|Yes|Yes|No|
|Append new rows, update existing rows, and preserve changes.|No|Yes|No|No|Yes|
|Append new rows, check for updates and deletes, and preserve changes.|No|Yes|No|No|Yes|

<br/>

##### History Preservation

Update strategies that preserve rows ([also known as a type 2 slowly changing dimensions](https://en.wikipedia.org/wiki/Slowly_changing_dimension)) will create a new version of the row when an update or delete change is detected.  These preserve strategies require that the target table contains at least one numeric column with the delta type set to surrogate key which will automatically be generated as a sequence.

In addition to the natural key, tracking field, non tracking field and surrogate key delta types.  The following column delta types can be added to the target table to assist with version management and auditing:
* Is Current Field (boolean) - When preserving changes indicates if the current record is the latest.
* Version (integer) - When preserving changes indicates the version of the row (starting at 1).
* Valid From Date (datetime) - When preserving changes indicates the starting date where the record is valid
* Valid To Date (datetime) - When preserving changes indicate the ending date where the record becomes invalid.
* Create Date (datetime) - The time the record was first created (this is not modified when updates occur.
* Update Date (datetime) - The time the records was last updated.
* Create Audit Key - A reference to the datalink execution instance that was used to create the record.
* Update Audit Key - A reference to the datalink execution instance that was used to update the record.

##### History Preservation Example

Take the following customer source table with the following data:

|Customer Code|Customer Name|Customer Address|Last Updated
|---|---|---|---|
|123|John Doe|100 Mystery St|2018-07-01|
|124|Jane Doe|200 Nowhere Road|2018-07-02|

<br/>

If this is loaded into a target table with all a available delta columns, the result will be:


|Customer Code|Customer Name|Customer Address|Customer Key|Is Current|Version|Valid From|Valid To|Create Date|Update Date|Create Audit Key|Update Audit Date|
|---|---|---|---|---|---|---|---|---|---|---|---|
|*Natural Key*|*Tracking Field*|*Tracking Field*|*Surrogate Key*|*Is Current*|*Version*|*Valid From Date*|*Valid To Date*|*Create Date*|*Update Date*|*Create Audit Key*|*Update Audit Key*|
|123|John Doe|100 Mystery St|1|true|1|2018-07-01|9999-12-31|2018-07-06 11:00:00|2018-07-06 11:00:00|100|100|
|124|Jane Doe|200 Nowhere Road|2|true|1|2018-07-02|9999-12-31|2018-07-06 11:00:00|2018-07-06 11:00:00|100|100|
|---|---|---|---|---|---|---|---|---|---|---|---|

<br/>

Then the source table is modified as follows (++ denotes changed cells):


|Customer Code|Customer Name|Customer Address|Last Updated|
|---|---|---|---|
|123|John Doe|++ 100 Found St |++ 2018-07-08 
|124|Jane Doe|200 Nowhere Road|2018-07-02|

<br/>

Then the target table is reloaded with a "preserve changed" update option set.  The resulting table contain one preserved row, and one new row as follows:

|Customer Code|Customer Name|Customer Address|Customer Key|Is Current|Version|Valid From|Valid To|Create Date|Update Date|Create Audit Key|Update Audit Date
|---|---|---|---|---|---|---|---|---|---|---|---|
|*Natural Key*|*Tracking Field*|*Tracking Field*|*Surrogate Key*|*Is Current*|*Version*|*Valid From Date*|*Valid To Date*|*Create Date*|*Update Date*|*Create Audit Key*|*Update Audit Key*|
|123|John Doe|100 Mystery St|1|++ false|1|2018-07-01|++ 2018-07-08|2018-07-06 11:00:00|++ 2018-07-08 11:00:00|100|++ 101|
|124|Jane Doe|200 Nowhere Road|2|true|1|2018-07-02|9999-12-31|2018-07-06 11:00:00|2018-07-06 11:00:00|100|100|
|++ 123|++ John Doe|++ 100 Found St|++ 3|++ true|++ 2|++ 2018-07-08|++ 2099-21-31|++ 2018-07-08 11:00:00|++ 2018-07-08 11:00:00|++ 101|++ 101|

<br/>

#### Demonstration

#### See Also