"use strict";
function divide(x, y) {
    if (x !== 0 && y !== 0) {
        return { success: x / y };
    }
    else {
        return { failure: "division by zero" };
    }
}
console.log(divide(9, 3));
console.log(divide(9, 0));
console.log(divide(-9, 10));
