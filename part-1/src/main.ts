/*
const numberOfLetters = (str: string): number => {
  const matches = str.match(/[a-zA-Z]/g);
  if (!matches) return 0;
  return matches.length;
};

console.log(numberOfLetters("Learning Typescript!!"));
*/

// var declarations
let count: number;
let input: string;
let isComplete: boolean;

// in function declaration (parameter: type): returnType
function isEven(n: number): boolean {
  return n % 2 === 0;
}

const isOdd = (n: number): boolean => {
  return !isEven(n);
};

// arrays
const films: string[] = [];

//objects
const person: { name: string; age: number } = { name: "John", age: 30 };
