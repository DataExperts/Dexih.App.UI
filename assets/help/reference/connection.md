### Connections

The *Integration Hub* supports SQL databases, NoSQL databases, data files and web services.

There are three primary connection types:
* **Source** - Source connections are read-only and can only be used as a source in datalinks.
* **Managed** - Managed connections point to databases that are **managed** by the *Integration Hub*.  They are used by the *Integration Hub*, to create tables, and store auditing and profile information.  At least one managed connection is required per hub.
* **Target** - Target connections point to databases that data can be published and written to by the *Integration Hub*.

### SQL Databases

The following **SQL** databases are available and can be used as source, managed and target connections:
* [DB2](https://www.ibm.com/au-en/analytics/db2) - Enterprise class database platform from IBM.
* [Microsoft Sql Server](https://www.microsoft.com/en-us/sql-server/sql-server-2017) - Popular Microsoft SQL database platform.
* [MySql](https://dev.mysql.com/downloads/mysql/) - Open source database from Oracle with cloud options available
* [Oracle](https://www.oracle.com/database/index.html) - Enterprise class database platform from Oracle.
* [PostgreSql](https://www.postgresql.org) - Open source database
* [SQLite](https://www.sqlite.org/whentouse.html) - File based database (no download required) for development/test use and small scale data management.

### NoSQL Databases
The following **NoSql** databases are available:
* [Microsoft Azure Table Storage](https://azure.microsoft.com/en-us/services/storage/tables/) - Cloud hosted data storage platform useful for long term storage of high volume data.
* [MongoDB](https://www.mongodb.com/) - MongoDB is a general purpose, document-based, distributed database built for modern application developers and for the cloud era.

### File based data

* **Excel** (read-only) - Data within Excel files can be used as a source.  Excel is not an ideal source of data and will often have issues when being used by multiple process or when sheets are formatted.
* **Delimited Files** - Files with a delimiter (such as Comma Separated Files).   There are a number of configuration options for a flat file (such as headers, delimiter, comments etc) which can be specified in the *File Format*.
* [JSON](https://www.json.org/) - JSON formatted files can be read and then parsed using [JsonPath expressions](http://goessner.net/articles/JsonPath/) 
* [XML](https://www.w3schools.com/xml/default.asp) - XML formatted files can be read and then parsed using [XPath expressions](https://www.w3schools.com/xml/xpath_syntax.asp)

Flat files can be managed on the following storage areas which must be assessable to the remote agent:
* **Local Path** - e.g. /data/customers
* **FTP** - A FTP Server - e.g. ftp://ftp.files.com
* **SFTP** - A SFTP (SSH File Transfer Protocol) Server.
* [Azure Flat File](https://azure.microsoft.com/en-us/services/storage/files/) - Azure Files Storage is a useful cloud hosted file management platform for long term, secure file storage and retrieval.
* [RESTFul Web Service](https://en.m.wikipedia.org/wiki/Representational_state_transfer) - RESTFul web services are the entry point to accessing virtually [any data content](https://www.programmableweb.com/category/all/apis?data_format=21190) across the internet.  

### Integration Hub Instance

When tables and datalinks are *shared* in a hub, other hubs connect to these using a connection type **Integration Hub**.  This allows data to be virtualized and easily queried and shared across different networks.

### Connection Properties

**Using Hub Variables** - For connection properties variables can be used within the settings using the syntax `{variable}`.  Using variables allows connections to be moved between environments without needing to be reconfigured.

* **Name** - A name to represent the connection.
* **Database Type** - Specify the type of database or data source to be used.
* **User Name** - The user name to authenticate the data access
* **Password** - The password to authenticate the data access.  Note, this is encrypted using the hub encryption key and remote agent key.  If either of these keys are changed the password will need to be reentered.

For database connections:
* **Connection string** - For some databases a connection string can be specified.  This option is only recommended if very specific connection settings are required.  See the database documentation for the appropriate connection string format.  
* **Use Windows Authentication** - This will use the credentials of the user running the *remote agent* to authenticate the database access.  This is recommended where possible, as it does not require a password.
* **Database Name** - The name of the database.

For flat-file connections:
* **Local root file path** - The base path the connection should point to (e.g. /data).  If none is specified this will be the location of the remote agent.
* **Service Location** - The path for the ftp/sftp/restful url.  
* **SubDirectory** (optional) - The directory below the root file path.  For example if the root file path is `/data` and the subdirectory is `customers` the connection will point to the path /data/customers.

For Excel connections:
* **Path to Excel File** - The base where the Excel file is located.
* **Excel File** - The excel file name.  Note an Excel file is treated as a database, with the tab's of the file being treated as tables.