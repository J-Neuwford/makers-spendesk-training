"use strict";
function createColor(r, g, b) {
  if (r >= 0 && r <= 255 && g >= 0 && g <= 255 && b >= 0 && b <= 255) {
    return [r, g, b];
  } else {
    throw "invalid number";
  }
}
var x = createColor(100, 200, 255);
console.log(x);
function isBright(color) {
  return (
    color.reduce(function (a, b) {
      return a + b;
    }) /
      3 >
    127.5
  );
}
console.log(isBright(x));
function invertColor(color) {
  color[0] = 255 - color[0];
  color[1] = 255 - color[1];
  color[2] = 255 - color[2];
  return color;
}
console.log(invertColor(x));
