// Dependencies
var x256 = require("x256")

/**
 * rgb
 * Creates a colored string providing the color.
 *
 * @name rgb
 * @function
 * @param {String|Array|Number} r If number, it will be the red value from RGB.
 * If array, it should be an array of three numbers representing RGB values.
 * If String, it will be interpreted as HEX color.
 * @param {Number} g Green value
 * @param {Number} b Blue value
 * @return {String} Colored string
 */
String.prototype.rgb = function rgb(r, g, b) {

    if (r[0] === "#") {
        return rgb.apply(this, hexToRgb(r));
    }

    return "\x1b[38;5;" + x256(r, g, b) + "m" + this + "\033[0m";
};


var map = {
    bold: ["\x1B[1m", "\x1B[22m"],
    italic: ["\x1B[3m", "\x1B[23m"],
    underline: ["\x1B[4m", "\x1B[24m"],
    inverse: ["\x1B[7m", "\x1B[27m"],
    strikethrough: ["\x1B[9m", "\x1B[29m"],
};

for (var key in map) {
    (function (style, styleId) {
        String.prototype[styleId] = function () {
            return style[0] + this + style[1];
        };
    })(map[key], key)
}

/**
 * hexToRgb
 * Converts a hex color code to rgb
 *
 * @param hex
 */
function hexToRgb (hex) {
    var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function(m, r, g, b) {
        return r + r + g + g + b + b;
    });

    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? [
        parseInt(result[1], 16),
        parseInt(result[2], 16),
        parseInt(result[3], 16)
    ] : null;
}
