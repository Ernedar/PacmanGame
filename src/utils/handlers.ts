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

  return Object.values(randomDirection)[0];
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
  ------ WINDOW LISTENER FOR KEYBOARD ------
*/

export function keyDownEventHandler(event: KeyboardEvent): void {
  if (event.code === "Enter") {
    console.log("agreed");
  } else if (event.code === "ArrowLeft") {
    console.log("direction: left");
  } else if (event.code === "ArrowRight") {
    console.log("direction: right");
  } else if (event.code === "ArrowUp") {
    console.log("direction: up");
  } else if (event.code === "ArrowDown") {
    console.log("direction: down");
  }
}

export function escapeKeyEventHandler(event: KeyboardEvent): void {
  if (event.code === "Escape") {
    console.log(event.code + " was pushed and released");
  }
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
  console.log("current maze:" + maze);
  console.log("selected row:" + mazeRow);
  console.log("number to add:" + newNumber);

  maze[mazeRow].push(newNumber);

  console.log("new maze:" + maze);

  return maze;
}

export function addNewRowToMaze(maze: number[][], newNumber: number) {
  console.log("current maze:" + maze);
  console.log("number to add:" + newNumber);

  maze.push([newNumber]);

  console.log("new maze:" + maze);

  return maze;
}

export function removeTileFromMaze(maze: number[][], rowNumber: number) {
  maze[rowNumber].pop();

  return maze;
}
