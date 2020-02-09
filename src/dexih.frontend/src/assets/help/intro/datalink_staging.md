### Datalink Staging

Staging data (or moving data to a *staging* area) is the process of pulling data from a source database and moving it to an intermediate area.  Staging areas have many purposes, however they are generally used to consolidate data from multiple locations into a central area prior to processing, linking and transforming the data.  The information hub has a built in function to allow for the rapid building of a staging area by automatically creating staging [datalinks](reference/data).

#### Creating Staging Datalink

First ensure that you have configured a managed connection, and a source connection with the required table imported.

Before creating the datalink, review the column metadata for the source table, and adjust them as follows:

* **Delta Type** - Use the Natural Key, Tracking Field, Non-Tracking Field, Ignored Field to determine how the datalink should deal with [changing data](/intro/change_data_capture.md).
* **Security Flag** - Use to [secure sensitive data](/intro/securing_data.md).
* **Is always incrementing flag** - Use where the source table has a field (such as `last updated`) that can be used to get the latest changes for each rerun.

See [table](reference/table.md) for more information.

To create the staging datalink(s):

* Tables &rarr; Select one or more source tables &rarr; Table &rarr; New Datalinks (from selected tables)
* Complete the form, specifying the type `Staging`, and selecting the required audit fields.

See [datalink](reference/datalink.md) for more information on configuring the datalink.

### Demonstration

<iframe width="560" height="400" src="https://www.youtube.com/embed/9hp-2vYAkXY" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

### Next Steps

### See Also