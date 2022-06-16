import { Inhabitants } from "./enums";

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

  switch (randomDirection) {
    case "left":
      return [0, -1];
    case "right":
      return [0, 1];
    case "up":
      return [-1, 0];
    case "down":
      return [1, 0];
  }
}

export function startPositionHandler(maze: number[][], inhabitant: string) {
  let inhabitantValue: number;

  const inhabitantSetter = inhabitant as keyof typeof Inhabitants;

  inhabitantValue = Inhabitants[inhabitantSetter];

  let entityStartPosition: number[] = [];

  maze.map((tileColumn, y) =>
    tileColumn.map((tile, x) => {
      if (tile === inhabitantValue) {
        return (entityStartPosition = [y, x]);
      } else {
        return [];
      }
    })
  );

  return entityStartPosition;
}

/*
  ------- DESIGNER FUNCTIONS ------
*/

export function changeMazeDesignerTile(
  maze: number[][],
  newNumber: number,
  incomingX: number,
  incomingY: number
) {
  maze[incomingX][incomingY] = newNumber;

  return maze;
}

export function addTileToMaze(
  maze: number[][],
  mazeRow: number,
  newNumber: number
) {
  maze[mazeRow].push(newNumber);

  return maze;
}

export function addNewRowToMaze(maze: number[][], newNumber: number) {
  maze.push([newNumber]);

  return maze;
}

export function removeTileFromMaze(maze: number[][], rowNumber: number) {
  maze[rowNumber].pop();

  return maze;
}

export function clearMazeRow(maze: number[][], rowNumber: number) {
  maze[rowNumber].fill(0, 0, maze[rowNumber].length);

  return maze;
}

export function clearMazeColumn(maze: number[][], colNumber: number) {
  maze.map((cell, i) => (maze[i][colNumber] = 0));

  return maze;
}
