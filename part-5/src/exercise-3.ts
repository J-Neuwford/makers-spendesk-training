type Coordinate = {
  x: number;
  y: number;
  z: number;
};

const newCoordinate: Coordinate = { x: 34, y: 48, z: 48 };

function getXYCoordinates(Coordinate: Coordinate): Partial<Coordinate> {
  return { x: Coordinate.x, y: Coordinate.y };
}

console.log(getXYCoordinates(newCoordinate));
