type Result<T, U> = {
  success?: T;
  failure?: U;
};

function divide(x: number, y: number): Result<number, string> {
  if (x !== 0 && y !== 0) {
    return { success: x / y };
  } else {
    return { failure: "division by zero" };
  }
}

console.log(divide(9, 3));

console.log(divide(9, 0));
console.log(divide(-9, 10));

// RESULT TYPE

/*
result type has a success and a failure value.

In the function, the return type is set to a result value
The parameters specify that in the event of a success, a number will be returned.
In the event of a failure, a string will be returned.
*/
