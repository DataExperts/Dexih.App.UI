### Mapping Transform

The mapping transform allows columns to be mapped from source to target with functions and analytical calculations applied to them.

#### Adding a Mapping Transform

* Open a datalink, select Transforms &rarr; 
* Click "Add Transform" or click the <a class="btn btn-sm btn-success mr-1" title="Insert a transform before this"><i class="fa fa-plus"></i></a> button to insert the mapping before/after an existing transform.
* Click the <a class="btn btn-sm btn-success mr-1"><i class="fa fa-random"></i></a> to select the mapping.

> Note: To preview the result from a mapping change, click the <a class="btn btn-sm btn-success mr-1" ><i class="fa fa-search"></i></a> icon.

### Passing Through Columns

* If the "pass-through columns" option is selected, all input columns will automatically be mapped to output columns.
* If an output column of the same name is mapped through a mapping, standard, or custom function this will override the pass-through column mapping.

### Adding Mappings

Simple 1-1 mappings can be added by:

* Selecting the "Mapping" button and specifying the input/output column.
* Dragging an input column to the output columns.
* Dragging an input column to the mapping columns table.


#### Adding a Standard Function

Standard functions provide a range of built in capabilities to transform input column to output columns.

To create a standard function: 
* Select the "Standard" button.
* Select the required function from the options.
* Map the input parameters to either a static value, or an input column
* Map the output parameter to target columns.

#### Adding a Custom Function

A custom filter uses [c#](https://docs.microsoft.com/en-us/dotnet/csharp/quick-starts/) to allow any logic to be applied using the available column values.

> A custom filter function must end with a `return value;` where the return datatype matches the datatype specified
> The variable names used in the c# code, must match the names specified in the input/output precisely.

The following example concatenates the firstname and lastname values, or returns "Unnamed" when empty.:

```csharp
if(string.IsNullOrEmpty(firstname) && string.IsNullOrEmpty(lastname))
{
    return "Unnamed";
}
return firstname + " " + lastname;
```

### Demonstration

<iframe width="560" height="400" src="https://www.youtube.com/embed/Om-_8GAY3w8" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

### Next Steps


### See Also
