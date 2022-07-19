import { Inhabitants, TileType } from "./enums";

/* ------ INITIATION FUNCTIONS ------ */

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

/* ------ MOVEMENT FUNCTIONS ------ */

export function randomPositionHandler(
  currentPosition: number[],
  maze: number[][]
) {
  const positionsArray: number[][] = [
    [currentPosition[0], currentPosition[1] + 1],
    [currentPosition[0], currentPosition[1] - 1],
    [currentPosition[0] + 1, currentPosition[1]],
    [currentPosition[0] - 1, currentPosition[1]]
  ];

  const adjustedDirections: Array<{}> = [];

  positionsArray.map((position, d) => {
    if (
      !(
        maze[position[0]][position[1]] >= 200 &&
        maze[position[0]][position[1]] < 300
      )
    ) {
      adjustedDirections.push(position);
    }
    return adjustedDirections;
  });

  const randomDirection =
    adjustedDirections[(adjustedDirections.length * Math.random()) << 0];
  return randomDirection;
}

export function newPositionHandler(
  currentPosition: number[],
  currentDirection: number[],
  maze: number[][]
) {
  let newCurrentPosition = [
    currentPosition[0] + currentDirection[0],
    currentPosition[1] + currentDirection[1]
  ];
  if (
    maze[newCurrentPosition[0]][newCurrentPosition[1]] >= 100 &&
    maze[newCurrentPosition[0]][newCurrentPosition[1]] < 300
  ) {
    newCurrentPosition = currentPosition;
  }

  return newCurrentPosition;
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
