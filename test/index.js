"use strict";

// Dependencies
var Couleurs = require("../lib")
  , FlatColors = require("flat-colors")
  , tester = require("tester")
  ;

tester.describe("couleurs", test => {
    // Default behavior
    test.should("support basic color support", () => {
        let c = new Couleurs("Hello World")
                .fg(FlatColors.colors[0])
                .bg(FlatColors.colors[1])
                .bold()
                .toString();

        test.expect(c).toBe("\u001b[1m\u001b[48;5;78m\u001b[38;5;79mHello World\u001b[39m\u001b[49m");
    });

    // Foreground color in constructor
    test.should("support foreground color in constructor", () => {
        var c = Couleurs("Hello World", FlatColors.colors[0]);
        test.expect(c).toBe("\u001b[38;5;79mHello World\u001b[39m");
    });

    // Proto
    test.should("handle prototype calls", () => {
        Couleurs.proto();
        var c = "Hello World".fg(FlatColors.colors[0]);
        test.expect(c).toBe("\u001b[38;5;79mHello World\u001b[39m");
    });
});

