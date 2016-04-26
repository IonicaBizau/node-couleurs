
[![couleurs](http://i.imgur.com/W3rh7oh.png)](#)

# couleurs [![PayPal](https://img.shields.io/badge/%24-paypal-f39c12.svg)][paypal-donations] [![Travis](https://img.shields.io/travis/IonicaBizau/node-couleurs.svg)](https://travis-ci.org/IonicaBizau/node-couleurs/) [![Version](https://img.shields.io/npm/v/couleurs.svg)](https://www.npmjs.com/package/couleurs) [![Downloads](https://img.shields.io/npm/dt/couleurs.svg)](https://www.npmjs.com/package/couleurs) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/johnnyb?utm_source=github&utm_medium=button&utm_term=johnnyb&utm_campaign=github)

> Add some color and styles to your Node.JS strings.

[![couleurs](http://i.imgur.com/M1D9mxT.png)](#)

## :cloud: Installation

```sh
$ npm i --save couleurs
```


## :clipboard: Example



```js
// Dependencies
var Couleurs = require("couleurs")
  , FlatColors = require("flat-colors")
  ;

// Basic usage using a random flat color
var colored = new Couleurs("Hello World").fg(FlatColors());
console.log(colored.toString());

// Other ways to color the strings
console.log(Couleurs.fg("Red", [255, 0, 0]));

console.log(Couleurs("Red foreground", [255, 0, 0]));
console.log(Couleurs.fg("Yellow", 255, 255, 0));
console.log(Couleurs.fg("Blue", "#2980b9"));
console.log(Couleurs.bg("Blue Background", "#2980b9"));
console.log(Couleurs("Blue & Underline").fg("#2980b9").bold().underline().toString());

console.log(Couleurs.bold("Bold"));
console.log(Couleurs.italic("Italic"));

// Modify prototype
Couleurs.proto();

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
```

## :memo: Documentation


### `Couleurs(setStringProto, fg)`

#### Params
- **Boolean** `setStringProto`: If `true`, the prototype of String class will be modified.
- **String|Array** `fg`: An optional foreground color.

#### Return
- **String|Object** The colored string if the `fg` argument was provided or an object containing the following methods:

 - `proto`
 - `toString`
 - `fg`
 - `bg`
 - `bold`
 - `italic`
 - `underline`
 - `inverse`
 - `strike`

### `toString()`
Converts the internal object into string.

#### Return
- **String** Stringifies the couleurs internal data using ANSI styles.

### `proto()`
Modifies the `String` prototype to contain the `Couleurs` methods.



## :yum: How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## :dizzy: Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:


 - [`asciify-image`](https://github.com/ajay-gandhi/asciify-image) (by Ajay Gandhi)—Convert images to ASCII art without native dependencies
 - [`asciify-pixel`](https://github.com/IonicaBizau/asciify-pixel#readme)—Asciifies a pixel object.
 - [`bible`](https://github.com/BibleJS/BibleApp)—Read the Holy Bible via the command line.
 - [`birthday`](https://github.com/IonicaBizau/birthday)—Know when a friend's birthday is coming.
 - [`bloggify`](https://github.com/Bloggify/bloggify-tools)—A set of tools for Bloggify administration.
 - [`bug-killer`](https://github.com/IonicaBizau/node-bug-killer)—Simple way to log messages in stdout or other stream.
 - [`cli-gh-cal`](https://github.com/IonicaBizau/cli-gh-cal)—GitHub like calendar graphs in command line.
 - [`cli-github`](https://github.com/IonicaBizau/cli-github)—A fancy GitHub client for command line.
 - [`cli-pie`](https://github.com/IonicaBizau/node-cli-pie)—Generate pie charts in terminal and text mode.
 - [`cli-sunset`](https://github.com/IonicaBizau/cli-sunset)—A fancy command line tool for knowing the sunset time.
 - [`closeheat`](https://github.com/closeheat/cli) (by Domas Bitvinskas)—Static Website Hosting with CMS without touching your code.
 - [`color-it`](https://github.com/IonicaBizau/node-color-it#readme)—Flat colors for your Node.js strings.
 - [`csk-cli`](https://github.com/joshumax/csk-cli) (by Josh Max)—A command-line client to ClearDarkSky.com, written in Node.js
 - [`fb-falafel`](https://fb-falafel.ml) (by Ajay and Kevin)—Facebook for the 1337
 - [`git-issues`](https://github.com/softwarescales/git-issues) (by Gabriel Petrovay)—Git issues extension to list issues of a Git project
 - [`git-issues1`](https://github.com/softwarescales/git-issues) (by Gabriel Petrovay)—Git issues extension to list issues of a Git project
 - [`git-stats-colors`](https://github.com/IonicaBizau/node-git-stats-colors)—Adds colors to the git-stats inputs.
 - [`github-emojify`](https://github.com/IonicaBizau/github-emojifiy#readme)—Emojify your GitHub repository descriptions.
 - [`github-stats`](https://github.com/IonicaBizau/github-stats)—Visualize stats about GitHub users and projects in your terminal.
 - [`idea`](https://github.com/IonicaBizau/idea)—A lightweight CLI tool and module for keeping ideas in a safe place quick and easy.
 - [`overlap`](https://github.com/IonicaBizau/node-overlap)—Overlap two strings that contain new lines. Useful for ASCII drawings.
 - [`tithe`](https://github.com/IonicaBizau/tithe)—Organize and track the tithe payments.

## :scroll: License

[MIT][license] © [Ionică Bizău][website]

[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2014#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
