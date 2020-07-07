### Functions

Custom functions are snippets of c# code which can be used to filter and map data fields.

Here is a simple example of a custom function that concatenates the first_name/last_name fields and returns the result.

```csharp
return first_name + " " + last_name;
```

### Syntax

There are two syntaxes which can be used for a custom function.

For simple one-line calculations, an `=` followed by the formula can be used.
```csharp
=amount * quantity
```

For more advanced functions, multiple c# lines seperated with `;` and finishing with a `return` can be used.
```csharp
var total = amount * quantity;
return total;
```

#### Caching within a function

Data can be cached within a custom function, and then recalled in a future row.  This can be used for tasks such as running total, or values of previous rows.

In order to cache a value use the `SetValue(<name>, <value>)` function.  For example:

```csharp
SetValue("previous_row", value);
```
Then to receive the value back use the `GetValue(<name>)` function.  For example:

```csharp
return GetValue("previous_row");
```

#### Specifying Parameters

* Multiple input values can be specified in the custom function dialog.  These inputs are mapped from a input column, and the name/dataType are defaulted to the input column value or can be changed.  The name for the parameter is the `variable` name which should be used in the function code.
* A single return value can be specified, and this is mapped to the value used in the `return` command within the function code;
* Multiple output parameters can be specified.  These are mapped to by include `variable = 'the value'` in the function code.


#### Filter Custom Functions

A custom function on a filter must always return a `boolean` value, with `true` meaning the record will be included and `false` meaning the record will be excluded.  Custom functions on filter can not specify output variables.

For example, the following custom function includes only records where the postcode length is less then or equal to 10.

```csharp
return postcode.Length <= 10;
```

#### Mapping Custom Functions

A mapping custom function can have any number of inputs, a single return value, and any number of additional outputs.




