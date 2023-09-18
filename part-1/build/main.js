"use strict";
/*
const numberOfLetters = (str: string): number => {
  const matches = str.match(/[a-zA-Z]/g);
  if (!matches) return 0;
  return matches.length;
};

console.log(numberOfLetters("Learning Typescript!!"));
*/
// var declarations
var count;
var input;
var isComplete;
// in function declaration (parameter: type): returnType
function isEven(n) {
    return n % 2 === 0;
}
var isOdd = function (n) {
    return !isEven(n);
};
// arrays
var films = [];
//objects
var person = { name: "John", age: 30 };
