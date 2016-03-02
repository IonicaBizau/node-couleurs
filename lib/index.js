"use strict";

// Dependencies
var Typpy = require("typpy")
  , colorConvert = require("color-convert")
  , ansy = require("ansy")
  , iterateObject = require("iterate-object")
  ;

// Constants
const MAP = {
    bold: [ "\u001b[1m", "\u001b[22m" ]
  , italic: [ "\u001b[3m", "\u001b[23m" ]
  , underline: [ "\u001b[4m", "\u001b[24m" ]
  , inverse: [ "\u001b[7m", "\u001b[27m" ]
  , strike: [ "\u001b[9m", "\u001b[29m" ]
  , fg: ["fg", "fg"]
  , bg: ["bg", "bg"]
};

/**
 * Couleurs
 *
 * @name Couleurs
 * @function
 * @param {Boolean|undefined} setStringProto If `true`, the prototype of String
 * class will be modified.
 * @param {String|Array} fg An optional foreground color.
 * @return {String|Object} The colored string if the `fg` argument was provided
 * or an object containing the following methods:
 *
 *  - `proto`
 *  - `toString`
 *  - `fg`
 *  - `bg`
 *  - `bold`
 *  - `italic`
 *  - `underline`
 *  - `inverse`
 *  - `strike`
 *
 */
function Couleurs(text, fg) {
    var self = this;

    if (!Typpy(self, Couleurs) || Typpy(self, undefined)) {
        if (/array|string/.test(Typpy(fg))) {
            return Couleurs.fg(text, fg);
        }
        return new Couleurs(text, fg);
    }

    self.text = text;
    self.styles = [];
}

function prepareHandler(text, r, g, b) {

    if (Typpy(this.text) === "string") {
        r = text;
        text = this.text;
    }

    var res = {
        color: ""
      , text: text
    };

    if (Typpy(r, Array)) {
        res.color = colorConvert.rgb.hex(r);
    } else if (Typpy(r, Number)) {
        res.color = colorConvert.rgb.hex(r, g, b);
    } else {
        res.color = r;
    }

    return res;
}

function toStr(start, color, text, end) {
    if (start === "fg") {
        start = ansy.fg.hex(color);
        end = ansy.close.fg;
        color = "";
    } else if (start === "bg") {
        start = ansy.bg.hex(color);
        end = ansy.close.bg;
        color = "";
    }
    return [start, color, text, end].join("");
}

function genMeth(start, end, name) {
    return function (str, r, g, b) {
        var res = prepareHandler.apply(this, arguments);
        if (Typpy(this.text) === "string") {
            this.styles.push([
                start
              , end
              , res
            ]);
            return this;
        }
        return toStr(start, res.color, res.text, end);
    }
}

/**
 * toString
 * Converts the internal object into string.
 *
 * @name toString
 * @function
 * @return {String} Stringifies the couleurs internal data using ANSI styles.
 */
Couleurs.prototype.toString = function () {

    var self = this
      , str = self.text
      ;

    self.styles.forEach(function (c) {
        str = toStr(c[0], c[2].color, str, c[3], c[1]);
    });

    return str;
};

iterateObject(MAP, (c, s) => {
    Couleurs[s] = Couleurs.prototype[s] = genMeth(c[0], c[1], s);
});

/**
 * proto
 * Modifies the `String` prototype to contain the `Couleurs` methods.
 *
 * @name proto
 * @function
 */
Couleurs.proto = function () {
    iterateObject(MAP, (s, c) => {
        String.prototype[c] = function (r, g, b) {
            return Couleurs[c](String(this), r, g, b);
        };
    });
};

module.exports = Couleurs;
