Couleurs
========
Add some color and styles to your Node.JS strings. :smile:

# Documentation

## `String.rgb(r, g, b)`
Creates a colored string providing the color.

### Params:
* **String|Array|Number** *r* If number, it will be the red value from RGB.
  If array, it should be an array of three numbers representing RGB values.
  If String, it will be interpreted as HEX color.
* **Number** *g* Green value
* **Number** *b* Blue value

### Return:
* **String** Colored string

## `String.<style>()`
`<style>` can be: `bold`, `italic`, `underline`, `inverse`, `strikethrough`.

### Return:
* **String** Styled string

## Example

```js
var Couleurs = require ("../index");

console.log("Red".rgb([255, 0, 0]));
console.log("Yellow".rgb(255, 255, 0));
console.log("Blue".rgb("#2980b9"));

console.log("Bold".bold())
console.log("Italic".italic())
console.log("Underline".underline())
console.log("Inverse".inverse())
console.log("Strikethrough".strikethrough())

console.log("All combined"
    .rgb("#d35400")
    .bold()
    .italic()
    .underline()
    .inverse()
    .strikethrough()
)
```

![](http://i.imgur.com/M83wW95.png)

## Changelog

### v1.0.0
 - Handle other styles (**bold**, *italic*, ~~strikethrough~~ etc)

### v0.2.0
 - Handle hex color codes

### v0.1.x
 - Initial releases.

## License
See LICENSE file.
