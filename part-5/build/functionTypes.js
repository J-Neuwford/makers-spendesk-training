"use strict";
var add = function (a, b) { return a + b; };
var subtract = function (a, b) { return a - b; };
var divide = function (a, b) { return a / b; };
var multiply = function (a, b) { return a * b; };
function combineOperations(x, y) {
    return function (a, b, c) {
        return y(x(a, b), c);
    };
}
console.log(add(4, 5));
console.log(subtract(6, 2));
console.log(divide(9, 3));
console.log(multiply(2, 8));
var multiplyThenAdd = combineOperations(multiply, add);
var result = multiplyThenAdd(3, 5, 2);
console.log(result);
