### Source Connection

A **Source Connection** points to data in a database, flatfile or webservice.  Source connections are used by datalinks to transform data into a managed or target connection, or can be shared for previews and downloads.

#### Creating a new source connection

* Create a new connection by selecting: Connections &rarr; Connection &rarr; New(Source), or
* [New Source Connection Link](route:/hub/{{HUBKEY}}/summary/connections/connection-new/1)

#### Connection Options

To configure the a source connection.

1.  Ensure a remote agent is connected.
2.  Complete the connection form, and test and save the connection.  
3.  Import required table metadata.

[Connection Reference](reference/connection.md)

### Importing Table Metadata

If the connection points to a database (i.e. Sql Server, Postgres etc.), importing table metadata can be completed by:
* Select: Connections &arr; (check source connection) &arr; Connection &arr; Import Tables
* Select the tables to import, and select Import

[Importing flatfile metadata](intro/import_flatfile.md)
[Importing webservice metadata](intro/import_webservice.md)

### Demonstration

<iframe width="560" height="400" src="https://www.youtube.com/embed/OdSaQZ877Dg" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

### Next Steps

To get started using a new hub, you must complete:
1. [Share your data](intro/sharing_data.md)
2. [Create a staging datalink](intro/datalink_staging.md)

### See Also
