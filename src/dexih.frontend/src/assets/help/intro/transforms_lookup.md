### Lookup Transform

The lookup transform allows you perform a row by row query on a table, web service or other function.  

#### Adding a Lookup Transform

* Open a datalink, select Transforms &rarr; 
* Click "Add Transform" or click the <a class="btn btn-sm btn-success text-white mr-1" title="Insert a transform before this"><i class="fa fa-plus"></i></a> button to insert the Lookup before/after an existing transform.
* Click the <a class="btn btn-sm btn-success  text-white mr-1"><i class="fa fa-binoculars"></i></a> to select the Lookup.

> Note: To preview the result from a Lookup change, click the <a class="btn btn-sm btn-success text-white mr-1" ><i class="fa fa-search"></i></a> icon.

> Difference from join: The join transform is a highly performing transform that quickly merges two datasets.  The lookup transform, performs a row by row lookup against a table or function and is useful for web services and functions that need to be passed input parameters to generate a result.

### Implementing a Lookup

To implement a lookup a table specify the data source (datalink/table) and the table to use for the lookup.  

#### Adding a Lookup Conditions

A simple lookup condition can be added by selecting "Join".  This allows input column-column joins to be added.

Add a simple join by:
* Selecting the "Join" button.
* Dragging an input column to the respective join column.

#### Adding a Lookup Filter

A lookup filter allows a pre-filter to be added to the lookup table.  This can be useful for performing simple pre-conditions (such as "is_valid = true") to the lookup table.

Add a lookup filter by selecting the "Filter" button.

#### Adding a Custom Filter

A custom filter uses [c#](https://docs.microsoft.com/en-us/dotnet/csharp/quick-starts/) to allow any filter logic to be applied using the available column values.

> A custom filter function must end with a `return value;` where the value is a boolean, and true will allow the record through and false will filter the record.

Add a custom filter by selecting the "Custom Filter" button.

#### Strategy when lookup produces duplicate matches

When a join condition produces duplicate values the join strategy will determine the action.  The options are:

* Abend Datalink - Immediately stop the datalink.
* First Match - Take the first matching join, and ignore others.
* Last Match - Take the last matching join, and ignore others.
* All Matches - Take all matches.  Note this will allow duplicate rows.

### Demonstration

<iframe width="560" height="400" src="https://www.youtube.com/embed/dlPGTCLBJZ0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

### Next Steps


### See Also
