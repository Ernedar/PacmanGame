import { TileType } from "./enums";

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

export function positionChecker(maze: number[][], x: number, y: number) {
  let left;

  if (y === 0) {
    left = TileType["wall"];
  } else {
    left = translateTile(maze[x][y - 1]);
  }

  let up;

  if (x === 0) {
    up = TileType["wall"];
  } else {
    up = translateTile(maze[x - 1][y]);
  }

  let right;

  if (y === maze[0].length - 1) {
    right = TileType["wall"];
  } else {
    right = translateTile(maze[x][y + 1]);
  }

  let down;

  if (x === maze.length - 1) {
    down = TileType["wall"];
  } else {
    down = translateTile(maze[x + 1][y]);
  }

  return { left, right, up, down };
}

export function pacmanMovement() {
  // change of current pacman position
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
