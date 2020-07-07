### Transform Filter

A transform filter allows rows to be filtered based on one or more conditions.

#### Adding a transform filter

* Open a datalink, select Transforms.
* Click "Add Transform" or click the <a class="btn btn-sm btn-success text-white mr-1" title="Insert a transform before this"><i class="fa fa-plus"></i></a> button to insert the filter before/after an existing transform.
* Click the <a class="btn btn-sm btn-success text-white mr-1"><i class="fa fa-filter"></i></a> to select the filter.

> Note: To preview the result from a filter change, click the <a class="btn btn-sm btn-success text-white mr-1" ><i class="fa fa-search"></i></a> icon.

### Adding Filters

Multiple filters can be added using a simple filter condition, a filter function, or a custom function.

When multiple filters are added, all will need to be `true` for a row to pass (i.e. "and" logic).  

#### Adding a Simple Filter

A simple filter can be added by selecting "Filter".  This allows columns to be compared with static values or other columns.  Based on the following conditions:

* `=` - equals
* `>` - greater than
* `>=` - greater than or equal
* `<` - less than
* `<=` - less than or equal
* `!=` - not equal
* `Is Null` - column is equal to a database null.
* `Is Not Null` - column is not equal to a database null.

#### Adding a Filter Function

Filter functions provide a greater range of options compared with a simple function.  A filter function can be added by selecting "Standard", then selecting the category and function.

#### Adding a Custom Function

A custom filter uses [c#](https://docs.microsoft.com/en-us/dotnet/csharp/quick-starts/) to allow any filter logic to be applied using the available column values.

> A custom filter function must end with a `return value;` where the value is a boolean, and true will allow the record through and false will filter the record.

The following example allows rows where the quantity is greater than 10 or the weight is greater than 20:

```csharp
bool test1 = quantity > 10;
bool test2 = weight > 20;
return test1 || test2;
```

### Demonstration

<iframe width="560" height="400" src="https://www.youtube.com/embed/3_ksGSiF4B8" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

### Next Steps


### See Also
