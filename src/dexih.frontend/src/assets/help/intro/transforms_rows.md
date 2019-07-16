### Row Transform

The Row transform allows rows to be generated based on a function.

The row transform has many purposes such as:

* Pivoting column names into values.  For example when dates or categories are listed as individual columns, the row transform can be used to pivot them into a single column with the column name as the values.
* Generating sequences - For example a row transform could be used to generate 24 rows for each date.
* Splitting xml/json/text data into separate rows.

#### Adding a Row Transform

* Open a datalink, select Transforms &rarr; 
* Click "Add Transform" or click the <a class="btn btn-sm btn-success text-white mr-1" title="Insert a transform before this"><i class="fa fa-plus"></i></a> button to insert the Row before/after an existing transform.
* Click the <a class="btn btn-sm btn-success text-white mr-1"><i class="fa fa-bars"></i></a> to select the Row.

> Note: To preview the result from a Row change, click the <a class="btn btn-sm btn-success text-white mr-1" ><i class="fa fa-search"></i></a> icon.

### Passing Through Columns

* If the "pass-through columns" option is selected, all input columns will automatically be mapped to output columns.
* If an output column of the same name is mapped through a Row, standard, or custom function this will override the pass-through column Row.

### Adding Groups

The groups, which are used as the pivot point for row generation can be selected by:

* Selecting the "Row" button and specifying the input/output column.
* Dragging an input column to the output columns.
* Dragging an input column to the Row columns table.

#### Adding a Row Standard Function

Standard functions provide a range of aggregate functions that can be used.

To create a standard function: 
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

<iframe width="560" height="400" src="https://www.youtube.com/embed/5yftEcdRTsg&amp;mute=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

### Next Steps


### See Also
