"use strict";

const colors = require("../lib")
    , FlatColors = require("flat-colors")
    ;

// Basic usage using a random flat color
let colored = new colors("Hello World").fg(FlatColors());
console.log(colored.toString());

// Other ways to color the strings
console.log(colors.fg("Red", [255, 0, 0]));

console.log(colors("Red foreground", [255, 0, 0]));
console.log(colors.fg("Yellow", 255, 255, 0));
console.log(colors.fg("Blue", "#2980b9"));
console.log(colors.bg("Blue Background", "#2980b9"));
console.log(colors("Blue & Underline").fg("#2980b9").bold().underline().toString());

console.log(colors.bold("Bold"));
console.log(colors.italic("Italic"));

// Modify prototype
colors.proto();

console.log("Underline".underline());
console.log("Inverse".inverse());
console.log("Strikethrough".strike());

console.log("All combined"
    .fg("#d35400")
    .bold()
    .italic()
    .underline()
    .inverse()
    .strike()
);
