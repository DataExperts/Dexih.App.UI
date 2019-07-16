### Tables

Tables contain metadata which represents the properties of an underlying structure (such as a database table).  Each table points to a single connection, which in turn links to the underlying data.

Table in the `Information Hub` contain basic metadata such as table and column names, as well as additional information for validation, encryption and change detection.

### General Properties

Tables contain the following properties:
* **Connection** - Points to the relevant connection.
* **Name** - The name of the underlying physical structure.  If this is database this will be the table name.
* **Table Schema** (applies to database table only) - This is the name of the table schema (or often referred to a catalog).  If this is blank the default schema will be used for the database.
* **Logical Name** - The logical name is a short descriptive name for the table.  These will often be the same as the table name, and are useful when the table names are meaningless.
* **Description** - This is description field, and supports markup comments.

### Database Table Properties

These properties are available when the table points to a Sql Database connection.

* **Reject Table Name** - This is the name of the table that will be used to deliver rows that are rejected from the primary table, via invalid validation rules.
* **Table is shared in the catalog** - If this is selected the table data will be shared to other users based on the `share` settings for the hub.
* **Use Sql** - This allows a Sql command to be specified for the table data.
* **Sql Query** - (when Use Sql is selected) This is the Sql Command used to retrieve table data.

> ### Using Sql Queries
> * Sql queries are database specific, and hence less portable when moving to other database platforms.
> * Sql queries can not be further optimised by the information hub.  For example if a datalink uses a `Filter` transform, it will generally translate the filters into the Sql executed by the database, whereas if Sql is hard coded these optimizations are not possible.
> * Sql queries can hide data impact and lineage analysis.

### Flat File Table Properties

These properties are available when the table points to a flat file source.

* **Files Subdirectory ** - This is the subdirectory name below the `connection` directory.  
* **File Match Pattern ** -  The file pattern to use to match files when bulk uploading. Patterns can include wildcards */?, leave blank for all files.

> ### Example Patterns
> * *.txt - All files containing the extension `.txt`.
> * sales????.csv - Files starting with sales followed by any 4 characters, followed by .csv.

### Web Service Properties



