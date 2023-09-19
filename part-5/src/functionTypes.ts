type Operation = (a: number, b: number) => number;
type Combo = (a: number, b: number, c: number) => number;

const add: Operation = (a, b) => a + b;
const subtract: Operation = (a, b) => a - b;
const divide: Operation = (a, b) => a / b;
const multiply: Operation = (a, b) => a * b;

function combineOperations(x: Operation, y: Operation): Combo {
  return function (a: number, b: number, c: number): number {
    return y(x(a, b), c);
  };
}

console.log(add(4, 5));
console.log(subtract(6, 2));
console.log(divide(9, 3));
console.log(multiply(2, 8));

const multiplyThenAdd = combineOperations(multiply, add);

const result = multiplyThenAdd(3, 5, 2); // (3 * 5) + 2
console.log(result); // => 21
