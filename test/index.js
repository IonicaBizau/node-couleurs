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
