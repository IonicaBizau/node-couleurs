var x256 = require("x256")

String.prototype.rgb = function (r, g, b) {
    return "\x1b[38;5;" + x256 (r, g, b) + "m" + this + "\033[0m\n";
};
