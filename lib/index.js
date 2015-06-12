// Dependencies
var x256 = require("x256")
  , Typpy = require("typpy")
  , Deffy = require("deffy")
  ;

// Constants
const MAP = {
    bold: [ "\u001b[1m", "\u001b[22m" ]
  , italic: [ "\u001b[3m", "\u001b[23m" ]
  , underline: [ "\u001b[4m", "\u001b[24m" ]
  , inverse: [ "\u001b[7m", "\u001b[27m" ]
  , strike: [ "\u001b[9m", "\u001b[29m" ]
  , fg: ["\u001b[38;5;", "\u001b[39m"]
  , bg: ["\u001b[48;5;", "\u001b[49m"]
};

/**
 * Couleurs
 *
 * @name Couleurs
 * @function
 * @param {Boolean|undefined} setStringProto If `true`, the prototype of String class will be modified.
 * @param {String|Array} fg An optional foreground color.
 * @return {Object} An object containing the following methods:
 *
 *  - `rgb`
 *  - `bold`
 *  - `italic`
 *  - `underline`
 *  - `inverse`
 *  - `strike`
 *
 */
function Couleurs(text, fg) {
    var self = this;
    if (Typpy(self) !== "couleurs") {
        return new Couleurs(text, fg);
    }
    self.text = text;
    if (/array|string/.test(Typpy(fg))) {
        self.fg(null, fg);
    }
}


/**!
 * hexToRgb
 * Converts a hex color code to rgb
 *
 * @name hexToRgb
 * @function
 * @param {String} hex The hex color value.
 * @return {Array|null} An array containing `r`, `g`, `b` values. If the input is invalid, `null` will be returned.
 */
Couleurs.hexToRgb = function (hex) {
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
};


function prepareHandler(text, r, g, b) {

    var res = {
        color: null
      , text: Deffy(
            text
          , Deffy(this.text, "")
        )
    };

    if (r[0] === "#") {
        res.color = x256(Couleurs.hexToRgb(r));
    } else {
        res.color = x256(r, g, b);
    }

    return res;
}

function genMeth(start, end, m) {
    return function (str, r, g, b) {
        var res = prepareHandler.apply(this, arguments);
        return [start, res.color, m !== false ? "m" : "", res.text, end].join("");
    }
}

// /**
//  * fg
//  * Sets the foreground color.
//  *
//  * @name fg
//  * @function
//  * @param {String} str The input string.
//  * @param {String|Array|Number} r If number, it will be the red value from RGB.
//  * If array, it should be an array of three numbers representing RGB values.
//  * If String, it will be interpreted as HEX color.
//  * @param {Number} g Green value
//  * @param {Number} b Blue value
//  * @return {String} Colored string
//  */
// Couleurs.prototype.fg = genMeth("\u001b[38;5;", "\u001b[39m");
//
// /**
//  * bg
//  * Sets the background color.
//  *
//  * @name bg
//  * @function
//  * @param {String} str The input string.
//  * @param {String|Array|Number} r If number, it will be the red value from RGB.
//  * If array, it should be an array of three numbers representing RGB values.
//  * If String, it will be interpreted as HEX color.
//  * @param {Number} g Green value
//  * @param {Number} b Blue value
//  * @return {String} Colored string
//  */
// Couleurs.prototype.bg = genMeth("\u001b[48;5;", "\u001b[49m");

Object.keys(MAP).forEach(function (s) {
    Couleurs[s] = Couleurs.prototype[s] = genMeth(MAP[s][0], MAP[s][1], /^fg|bg$/.test(s) ? true : false);
});

Couleurs.prototype.proto = function () {
    Object.keys(Couleurs.prototype).forEach(function (c) {
        String.prototype[c] = function (r, g, b) {
            return Couleurs.prototype[c].call(this, String(this), r, g, b);
        };
    });
};

module.exports = Couleurs;
