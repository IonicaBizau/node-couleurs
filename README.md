Couleurs
========

Convert any string to the nearest Terminal color using x256 library.

## Example

```js
var Couleurs = require ("couleurs");
console.log("Hi!".rgb(255, 255, 0)); // outputs "Hi!"
console.log("Hi!".rgb("#ffc")); // outputs "Hi!"
```

## Test

```sh
$ npm test
```

## How to use

After including the library, you can do:

```js
console.log("Any string".rgb(...)
```

The arguments of the `.rgb` method represent the rgb color values.

## Changelog

### v0.2.0
 - Handle hex color codes

### v0.1.x
 - Initial releases.

## License
See LICENSE file.
