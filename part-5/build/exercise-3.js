"use strict";
var newCoordinate = { x: 34, y: 48, z: 48 };
function getXYCoordinates(Coordinate) {
    return { x: Coordinate.x, y: Coordinate.y };
}
console.log(getXYCoordinates(newCoordinate));
