type shape = "circle" | "square" | "eTriangle";

const calculatedArea = (shape: shape, dimension: number): number => {
  switch (shape) {
    case "circle":
      return Math.PI * dimension ** 2;
      break;
    case "square":
      return dimension ** 2;
      break;
    case "eTriangle":
      return dimension ** 2 * (Math.sqrt(3) / 4);
      break;
  }
};

console.log(calculatedArea("circle", 1));
console.log(calculatedArea("square", 2));
console.log(calculatedArea("eTriangle", 3));
