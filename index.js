// dependencies
var x256 = require("x256")

// add rgb method to the string prototype
String.prototype.rgb = function rgb (r, g, b) {

    if (r[0] === "#") {
        return rgb.apply(this, hexToRgb(r));
    }

    return "\x1b[38;5;" + x256 (r, g, b) + "m" + this + "\033[0m";
};

/**
 * hexToRgb
 * Converts a hex color code to rgb
 *
 * @param hex
 * @return
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
