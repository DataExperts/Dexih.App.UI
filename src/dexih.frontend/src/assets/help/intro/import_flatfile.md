### Import Flat File

Loading a flat file requires the following steps:

1. Create a source connection (or use existing one).
2. Add a table that matches the format of the flat file.
3. Build a datalink to load the flat file data into a target database.

### Creating a Flat File Source Connection

* Create a new connection by selecting: Connections &rarr; Connection &rarr; New(Source), or
* [New Source Connection Link](route:/hub/{{HUBKEY}}/summary/connections/connection-new/Source)

Specify the a flat file connection type of:
* **Local Flat File** - The flat files are stored in a local drive (relative to the remote agent) or network drive.
* **Azure Storage** Flat File - The files are stored on Azure storage.
* **Ftp Flat File** - The files are stored on a FTP site.
* **SFtp Flat File** - The files are stored on a SFTP (SSH) site.

Complete the source connection form, use the "Test" function to ensure connectivity, and select "Save"

### Create a flat file table

* Create a new flat file table by selecting Connections &rarr; (select connection) &rarr; Connection &rarr; New File
* Specify *Auto Manage files* if you want files automatically moved from an `Incoming` directory to a `Processed` directory when the datalink is run.  If this is not selected, files will be left and reloaded upon each run.
* If the file is a regular csv file (i.e. comma separated with header names on the first line), then a file format does not need to be specified.  If it is not standard file then configure a [file format](reference/fileFormat.md)
* Use a sample csv file to import the columns, or manually add the columns for the file.  The columns must be specified in the same order, however the names to not need to match the names in the csv file.
* Save the new flat file table.

After saving the table, it can be used to create a [staging datalink](intro/datalink_staging.md).

### Demonstration

<iframe width="560" height="400" src="https://www.youtube.com/embed/v0pwKIQNpFk" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

### See Also
