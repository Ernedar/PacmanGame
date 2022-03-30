import { TileType } from "./enums";
import { translateTile, positionChecker } from "./utils";

export function randomDirectionHandler(directions: {}) {
  const directionsArray = Object.entries(directions);

  const adjustedDirections: Array<{}> = [];

  directionsArray.map((direction, d) => {
    if (direction[1] !== "wall") {
      adjustedDirections.push(direction);
    }
    return adjustedDirections;
  });

  const randomDirection =
    adjustedDirections[(adjustedDirections.length * Math.random()) << 0];

  return Object.values(randomDirection)[0];
}
