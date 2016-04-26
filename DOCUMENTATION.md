## Documentation

You can see below the API reference of this module.

### `Couleurs(setStringProto, fg)`

#### Params
- **Boolean** `setStringProto`: If `true`, the prototype of String class will be modified.
- **String|Array** `fg`: An optional foreground color.

#### Return
- **String|Object** The colored string if the `fg` argument was provided or an object containing the following methods:

 - `proto`
 - `toString`
 - `fg`
 - `bg`
 - `bold`
 - `italic`
 - `underline`
 - `inverse`
 - `strike`

### `toString()`
Converts the internal object into string.

#### Return
- **String** Stringifies the couleurs internal data using ANSI styles.

### `proto()`
Modifies the `String` prototype to contain the `Couleurs` methods.

