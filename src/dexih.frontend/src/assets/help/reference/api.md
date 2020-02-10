### API's

The *Integration Hub* allows tables and datalinks to be published as Api's which can be easily access by third parties.

### General Properties

A API has the following properties:
* Name - A name to represent the API.
* Auto Start - When set, the API will automatically reload if the remote agent it restarted.  If not set the API will need to be manually reactivated.
* Log Directory - When set, the API will log the details of any call to a file in the named directory.  If not set, detailed logging will not done.
* Cache Queries - When set, the API will cache any queries, and return the cached query where possible.  
* Reset Cache Interval - When set, the API will reset the cache at the specified interval.
* Data Source Type - The data for the API can be from either a "Table" or "Datalink"
* Data Configuration - Other data options can be specified such as default filters.

> Note: If underlying data is regularly changing ensure caching is either off or a regular "reset cache interval" is set, otherwise the cache data will become our of sync with the live underlying data.  For data sources that are not regularly changing, caching can improve performance significantly.


### Calling the Api

First ensure the Api is activated in the Api's section ([here](route:/hub/{{HUBKEY}}/summary/apis))

The Api "Status" column will show the available Url's for accessing the API.  Depending on the configuration of remote agent, there are two types of ways to connect with the Api:
* Direct - This is generally the best method, and provides a direct connection to from the client to the remote agent.
* Proxy - This uses an intermediate server to process the Api request.  This is useful where the client is unable to directly access remote agent, for example when the remote agent is on a local network.

The Api has the following format:

```
https://{url}/{ApiKey}?i={json}&i={json}&q={json}&t={timeout}&r={max rows}
```

* ApiKey - The Api Key is reset if the Api is deactivated/reactivated. 
* i - Input Column values.  Input columns are columns specified as input on a datalink, and are fed into the datalink as an input parameter.
* p - Input parameters are fed into the datalink.
* q - Query/Filter Columns.  The filter columns are applied to the final output of the datalink or table data.
* t - Timeout in seconds.
* r - Maximum rows to return.

#### Getting Api Information

To receive the query columns and input columns for an api, add the "/info" to the url.

```
https://{url}/{ApiKey}/info
```

#### Input Columns

The input column values can be specified as a simple json document.  The format is:
```
i={ "column1": value1, "column2": value1 }
```

#### Input Parameters

Input parameters can be specified as a json document.  The format is as follows:
```
p={ "name1": value1, "name2": value1 }
```


#### Query/Filter Columns

The query can be filtered using a simple json document.

For simple column1=value2 queries, the format is as follows:
```
q={ "column1": value1, "column2": value1 }
```

For other type of operators the following format can be used (this example includes only items where column1 > 5:
```
q={ "column1": {"gt": 5}
```

The following operators can be used:
* eq - Equal
* gt - Greater than
* ge - Greater than or Equal
* lt - Less than
* le - Less than or equal
* ne - Not equal to
* nl - Equal to null
* nn - Not equal to null
* in - In the list of items.

The following example shows values where column1 is 1 or 2 or 3:
```
q={"column1": {"in": [1, 2, 3]}}
```

The following example shows values where column1 is not null:
```
q={"column1": {"nn": ""}}
```

The following example shows values where column1 is between 5 and 10:
```
q={"column1": {"ge": 5}, "column1": {"le": 10}}
```

