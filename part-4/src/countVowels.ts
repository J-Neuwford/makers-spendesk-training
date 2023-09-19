type stringOrStringArray = string | string[];

const countVowels = (x: stringOrStringArray): number => {
  if (typeof x === "string") {
    x = x.split("");
    console.log(x);
  }
  return x.filter((c) => c.match(/[aeiou]/)).length;
};

console.log(countVowels("test string"));
