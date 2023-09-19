type stringOrStringArray = string | string[];

const countVowels = (x: stringOrStringArray): number => {
  if (typeof x === "string") {
    x = x.split("");
  }
  return x.filter((c) => c.match(/[aeiouAEIOU]/)).length;
};

console.log(countVowels("test string"));
