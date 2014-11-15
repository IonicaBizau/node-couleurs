// Dependencies
var x256 = require("x256")

// Constants
const map = {
    bold: ["\x1B[1m", "\x1B[22m"]
  , italic: ["\x1B[3m", "\x1B[23m"]
  , underline: ["\x1B[4m", "\x1B[24m"]
  , inverse: ["\x1B[7m", "\x1B[27m"]
  , strikethrough: ["\x1B[9m", "\x1B[29m"]
};

module.exports = function (setStringProto) {

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
    function rgb(r, g, b) {
        if (r[0] === "#") {
            return rgb.apply(this, hexToRgb(r));
        }

        return "\x1b[38;5;" + x256(r, g, b) + "m" + this + "\033[0m";
    }

    var couleurs = { rgb: rgb };
    for (var key in map) {
        (function (style, styleId) {
            couleurs[styleId] = function (str) {
                if (!str && typeof this === "string") {
                    str = this;
                }
                return style[0] + str + style[1];
            };
        })(map[key], key)
    }

    if (setStringProto) {
        for (var meth in couleurs) {
            (function (meth, func) {
                String.prototype[meth] = func;
            })(meth, couleurs[meth]);
        }
    }

    return couleurs;
};

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
