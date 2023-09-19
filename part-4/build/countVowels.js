"use strict";
var countVowels = function (x) {
    if (typeof x === "string") {
        x = x.split("");
        console.log(x);
    }
    return x.filter(function (c) { return c.match(/[aeiou]/); }).length;
};
console.log(countVowels("test string"));
