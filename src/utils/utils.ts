import { TileType } from "../enums";
import { PacmanMaze } from "../assets/OriginalPacmanMaze";

export function translateTile(t: number) {
  if (t === 31) {
    return TileType["point"];
  } else if (t === 32) {
    return TileType["power"];
  } else if (t >= 60 && t <= 69) {
    return TileType["door"];
  } else if (t >= 100 && t < 200) {
    return TileType["ghost"];
  } else if (t >= 200 && t < 300) {
    return TileType["wall"];
  } else {
    return TileType["path"];
  }
}

// it should get object coordinates, take same coordinates from generated maze and return class of tile on those coordinates in maze.

export function positionChecker(x: number, y: number) {
  let left;

  if (y === 0) {
    left = TileType["wall"];
  } else {
    left = translateTile(PacmanMaze[x][y - 1]);
  }

  let top;

  if (y === 0) {
    top = TileType["wall"];
  } else {
    top = translateTile(PacmanMaze[x - 1][y]);
  }

  const right = translateTile(PacmanMaze[x][y + 1]);
  const bottom = translateTile(PacmanMaze[x + 1][y]);

  return { left, right, top, bottom };
}

export function pacmanMovement(
  e: Event,
  currentPacmanX: number,
  currentPacmanY: number
) {
  // this should handle key inputs and moving pacman from current coordinates to new coordinates

  let newPacmanX: number;
  let newPacmanY: number;

  return [(newPacmanX = 0), (newPacmanY = 0)];
}

export function eatingPoint() {
  // this should handle changing point state when eaten, update score
}

export function eatingPowerUp() {
  // this should handle changing power up state when eaten, powering up pacman, making ghosts scared and updating score
}

export function updateScore() {
  // this should update score when point eaten, power up eaten, ghost eaten, reseting score when game over or game restart.
}
