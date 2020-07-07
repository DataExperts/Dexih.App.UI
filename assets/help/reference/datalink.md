### Datalinks

Datalinks allow data to be extracted from a source table, then mapped, transformed, and delivered to any table in a managed or target connection.

#### Datalink Structure

Datalinks are structured with one source table, a series of transforms, and a target table.  In addition data can be profiled and validated through this process.

<img src="{{SERVER}}/assets/img//dexih/datalink_structure.png" width="800"/>


#### Defining a Source

A datalink source can be specified as one of the following:
* Table - Any table that has been imported into the hub.
* Datalink - Any datalink in the hub.
* Static Row Set - This will generate a simple sequence of numbers with a start, end, and increment by value.
* Function Input - This generates rows based on the values passed from transforms in the filters.

> When using a datalink as a source, note that the target table of ths source datalink will be ignored, and the data will be connected straight into this datalink.  This allows transform logic to be reused by multiple datalinks.

#### Transforms

The *Integration Hub* providers a number of built in transforms, each with a specific purpose that move your data from one form to another.  The transforms can be sequenced as needed to move data into the required target data form.

The transforms provided are as follows:

|Transform|Details|
|---|---|
| Mapping | Applies mapping rules from source to target. |
| Filter | Filters incoming rows based on a set of conditions. |
| Sort | Sorts incoming rows by one of more columns. |
| Group | Groups rows by column values, and apply aggregate calculations to other values. |
| Aggregate | Apply aggregate calculations to other values, whilst leaving the original rows intact. |
| Series | Create an evenly filled series (date or numeric), and apply analytical calculations. |
| Join | Joins the incoming rows to another table. |
| Lookup | Looks up (on a row by row basic) data on another table containing input columns (such as web services). |
| Rows | Groups columns and generates rows.  For example pivot columns into rows, or generate rows of data from JSON/XML/Text data. |
| Concatenate | Appends the incoming rows to the specified table. |


#### Profiling Data

Data profiling allows each incoming column to be profiled based on a set of built in functions, and delivered into a profile table.

> Note: The profiling will not impact the data delivered to the target table, however it will slow the datalink execution time.

The following built in profiling functions are available:
* Best Datatype - Find the best datatype for a column.
* Nulls - Find the percentage of null columns.
* Blanks - Find the percentage of blank columns.
* Zeros - Find the percentage of zero value columns.
* Maximum Length -Find the maximum string length.
* Maximum Value - Find the maximum numerical value.
* Distinct Values - Find number of distinct values.

The profile results are stored in the table name specified in the "Audit Connection" database.

The profile results can be reviewed in the "Execution Results".

#### Validation Rules

Validation rules allow data to be tested, and redirected into a reject table or discarded when these tests fail.

* If validation rules are enabled, any rules specified in the target table will automatically be enabled.
* The table that records are rejected to is specified in the metadata for the target table.

Validation rules require functions that return true/false, and additional output columns in the functions can be used to map "clean" values.  When defining a validation function, there is an option to specify "Action when false".  This allows a record the fails the test, to either:
* Pass Record - This will pass the record
* Clean Record - This will apply the clean rule to the record.
* Reject/Clean Record - This will send original record to the reject table, and a record with the cleaned rule applied.
* Reject Record - This will send the record to the specified reject table.
* Discard Record - This will discard the record.
* Abend Datalink - This will immediately stop the datalink execution.

#### Defining a Target

The datalinks target table is where the transformed records are delivered to.

If a datalink does not have a target table specified, it can not be executed.  Instead it can be used for data download and previews, or as a source for another datalink.

#### Update Strategy

The update strategy for the target table indicates how the datalink should load over exiting data.  The options are:

* Truncate table and reload
* Append all rows to target table
* Append new rows and update existing rows
* Append new rows, update existing rows, and delete "deleted" rows.
* Append new rows, update existing rows, and preserve changes.
* Append new rows, check for updates and deletes, and preserve changes.

Update strategies that perform an update or delete must have the following column types specified in the target table:
* A least one column with the delta type set to natural key.  These columns should identify matching source/target rows.
* One or more columns with the delta type set to tracking field.  These columns will be used to identify if the matching row has changed.  The delta type non tracking field can be used for columns to be ignored when checking for changes.

Update strategies that preserve changes ([also known as a type 2 slowly changing dimensions](https://en.wikipedia.org/wiki/Slowly_changing_dimension)) will create a new version of the row when an update or delete change is detected.  These preserve strategies require that the target table contains at least one numeric column with the delta type set to surrogate key which will automatically be generated as a sequence.

In addition to the natural key, tracking field, non tracking field and surrogate key delta types.  The following column delta types can be added to the target table to assist with version management and auditing:
* Is Current Field (boolean) - When preserving changes indicates if the current record is the latest.
* Version (integer) - When preserving changes indicates the version of the row (starting at 1).
* Valid From Date (datetime) - When preserving changes indicates the starting date where the record is valid
* Valid To Date (datetime) - When preserving changes indicate the ending date where the record becomes invalid.
* Create Date (datetime) - The time the record was first created (this is not modified when updates occur.
* Update Date (datetime) - The time the records was last updated.
* Create Audit Key - A reference to the datalink execution instance that was used to create the record.
* Update Audit Key - A reference to the datalink execution instance that was used to update the record.
