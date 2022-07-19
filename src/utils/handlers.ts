import { Inhabitants, TileType } from "./enums";

export function populatePowerPoints(
  maze: number[][],
  type: TileType.power | TileType.point
) {
  let mazePoints: { x: number; y: number }[] = [];
  if (type === TileType.power) {
    maze.map((tileRow, y) => {
      tileRow.map((tile, x) => {
        if (tile === 32) {
          const tileObject = { x, y };
          return mazePoints.push(tileObject);
        } else {
          return mazePoints;
        }
      });
    });
  } else {
    maze.map((tileRow, y) => {
      tileRow.map((tile, x) => {
        if (tile === 31) {
          const tileObject = { x, y };
          return mazePoints.push(tileObject);
        } else {
          return mazePoints;
        }
      });
    });
  }

  return mazePoints;
}

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
  ------- MATH HELPERS ------
*/

export function gcdOfTwo(x: number, y: number) {
  x = Math.abs(x);
  y = Math.abs(y);
  while (y) {
    let divider = y;
    y = x % y;
    x = divider;
  }
  return x;
}

export function lcmOfTwo(x: number, y: number) {
  return (x * y) / gcdOfTwo(x, y);
}

export function loopIntervalLength(array: number[]) {
  let currentLCM = array[0];
  let resultLCM = 0;

  array.map((arrayNumber, i) => {
    resultLCM = lcmOfTwo(currentLCM, array[i]);
    currentLCM = resultLCM;
    return resultLCM;
  });

  return resultLCM;
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
