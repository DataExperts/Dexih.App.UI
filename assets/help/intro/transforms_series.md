### Series Transform

The Series transform creates an even sequence, and allows analytical calculations to be applied to this.

The series transform is used where a completed series is required.  For example if the incoming data is daily sales, and some rows are missing where the day has no sales, this transform will fill in the gaps with 'zero' rows, and allow functions such as moving average to calculate correctly.  

This transform is important when creating trends, or running analytical calculations (such as std deviation) which require complete series to be accurate.

#### Adding a Series Transform

* Open a datalink, select Transforms &rarr; 
* Click "Add Transform" or click the <a class="btn btn-sm btn-success text-white mr-1" title="Insert a transform before this"><i class="fa fa-plus"></i></a> button to insert the Series before/after an existing transform.
* Click the <a class="btn btn-sm btn-success text-white mr-1"><i class="fa fa-calendar"></i></a> to select the Series.

> Note: To preview the result from a Series change, click the <a class="btn btn-sm btn-success text-white mr-1" ><i class="fa fa-search"></i></a> icon.

### Passing Through Columns

* If the "pass-through columns" option is selected, all input columns will automatically be mapped to output columns.
* When "pass-through" is selected, the columns "passed-through" will not be grouped, and the group columns will be appended to the base rows.
* When "pass-through" is not selected, the rows will be grouped based on the column groupings.
* If an output column of the same name is mapped through a Group, standard, or custom function this will override the pass-through column Group.

### Configure the Series Column

The a series column must be defined as follows:

* Series Grain - The series grain, for date this is is between every second, through to yearly, or numeric can be specified.
* Input Column - The column to derive the series value from.
* Fill empty series values - When selected, the series will be filled with "dummy" rows when there are gaps.
* Series Start Date - If empty, the first value from the input column will be used, otherwise a hard coded start date can be used.
* Series End Date - If empty, the last value from the input column will be used, otherwise a hard coded end date can be used.

### Adding Other Groups

The series will be calculated for each distinct group column.  These can be aded by:

* Selecting the "Group" button and specifying the input/output column.
* Dragging an input column to the output columns.
* Dragging an input column to the Group columns table.

### Adding an Series/Aggregate Function

To add a simple aggregate function, select the aggregate function and specify:
* Aggregate function:
    * Count - Count the records in the group.
    * Average - The average value of the input column value.
    * Sum - Sum the input column value.
    * Min - The lowest value for the input value.
    * Max - The highest value for the input value.
* Input Column - Input into the aggregate function.
* Output Column - The aggregated column that the result will be mapped to.

#### Adding a Standard Function

Regular aggregate standard functions are available and additionally there are specific series functions (such as moving average) and statistical functions (such as curve fitting) available.  To create a standard function: 
* Select the "Standard" button.
* Select the required function from the options.
* Map the input parameters to either a static value, or an input column
* Map the output parameter(s) to target aggregate columns.

See the description of each of the standard functions for their purpose.

#### Adding a Custom Function

A custom function uses [c#](https://docs.microsoft.com/en-us/dotnet/csharp/quick-starts/) to allow any logic to be applied using the available column values.

> A custom function must end with a `return value;` where the return datatype matches the datatype specified
> The variable names used in the c# code, must match the names specified in the input/output precisely.

Custom function include some helper variables, which can be used for aggregate calculations.  These are:
* intValue - datatype `int`, resets to 0 on each group change.
* doubleValue - datatype `double`, resets to 0 on each group change.
* stringValue - datatype `string` resets to null on each group change.
* cache - a Dictionary<string, object> which can be used to cache any other variables.

In addition the following helper functions can be used to manage the `cache` variables
* SetValue<datatype>(*name*, *value*) - Adds/Updates a value to the cache.  Eg SetValue<int>("average", average);
* GetValue<datatype>(*name*, *value*) - Gets a value from the cache.  Eg GetValue<int>("average");


The following example is a simple `count` function.
```csharp
intValue++;
return intValue++;
```

The following example is another version of the `count` function, except using the cache variables:
```csharp
var value = GetValue<int>("count");
value++;
SetValue<int>("count", value);

return value;
```

### Demonstration


### Next Steps


### See Also
