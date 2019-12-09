### Import Web Service

Loading data from a web service involve:

1. Create a source connection (or use existing one).
2. Import the web service structure as a table.
3. Build a datalink to load the flat file data into a target database.

### Creating a Web Service Connection

* Create a new connection by selecting: Connections &rarr; Connection &rarr; New(Source), or
* [New Source Connection Link](route:/hub/{{HUBKEY}}/summary/connections/connection-new/Source)

Specify the a flat file connection type of `RESTFul Web Service`

Complete the source connection form, use the "Test" function to ensure connectivity, and select "Save"

> **Tip Defining the Url**
> * Most RESTFul services have an API End point, an authentication key, and then parameters to define the function being called.
> * In the connection, the best practice is to use the API End Point + authentication key, and then include the other parameters in the table definition.
> * The authentication key can be defined as a [Hub Variable](/reference/hubVariables.md), and then included in the URL using `{variable name}`.
> * For example the google maps code API can be defined in the connection as:
> `https://maps.googleapis.com/maps/api/geocode/json?key={GOOGLE_API_KEY}&`
> and then in the table URI as:
> `address={Address}`


### Create the web service table

* Create a new web service by selecting Connections &rarr; (select connection) &rarr; Connection &rarr; New File
* The Web Service URI which will be appended to the URL defined in the connection to make up the completed call to the web service.
* In the URI use {parameter} to define [Table Input Parameters](/intro/table_input_parameters.md) which can be used when performing lookups in datalinks.
* Select the format type and `Import` to connect to the web service and attempt to import the web service.
* Customize the columns as needed, and save the table.

After saving the table, it can be used to create a [staging datalink](intro/datalink_staging.md).

### Demonstration

<iframe width="560" height="400" src="https://www.youtube.com/embed/7grOmSY74Ho" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

### See Also
