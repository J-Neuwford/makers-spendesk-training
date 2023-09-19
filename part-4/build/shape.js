"use strict";
var calculatedArea = function (shape, dimension) {
    switch (shape) {
        case "circle":
            return Math.PI * Math.pow(dimension, 2);
            break;
        case "square":
            return Math.pow(dimension, 2);
            break;
        case "eTriangle":
            return Math.pow(dimension, 2) * (Math.sqrt(3) / 4);
            break;
    }
};
console.log(calculatedArea("circle", 1));
console.log(calculatedArea("square", 2));
console.log(calculatedArea("eTriangle", 3));
