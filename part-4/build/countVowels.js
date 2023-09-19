"use strict";
var countVowels = function (x) {
    if (typeof x === "string") {
        x = x.split("");
    }
    return x.filter(function (c) { return c.match(/[aeiouAEIOU]/); }).length;
};
console.log(countVowels("test string"));
