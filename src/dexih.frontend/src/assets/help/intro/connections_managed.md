### Managed Connection

A **Managed Connection** points to a database that is used by the hub to:

1.  Create and load staging tables.
2.  Store auditing data, such as datalink execution history.
3.  Store profile information.


#### Creating a new managed connection

* Create a new hub by selecting: Connections &rarr; Connection &rarr; New(Managed), or
* [New Managed Connection Link](route:/hub/{{HUBKEY}}/summary/connections/connection-new/2)

> ##### Managed Database Permissions
> * Managed database connections must use credentials that have permission to create and truncate database tables.
> * Users with access to hub containing the managed connection will have the ability to create and overwrite data in the underlying database.

#### Connection Options

To configure the managed connection.  Complete the connection form, and test and save the connection.

[Connection Reference](reference/connections.md)

### Demonstration

<iframe width="560" height="400" src="https://www.youtube.com/embed/1LS4ZGDWYwE" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

### Next Steps

After creating a managed connection and adding tables:

1. [Share your data](intro/sharing_data.md)
2. [Create a source connection](connections-source.md)

### See Also
