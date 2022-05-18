import { PacManStates, GhostStates, Directions, GhostBehavior } from "./enums";

export interface Pacman {
  startPosition: [];
  currentPosition: [];
  currentDirection: Directions;
  currentState: PacManStates;
  currentSpeed: number;
}

export interface Ghost {
  startPosition: [];
  currentPosition: [];
  currentstate: GhostStates;
  currentBehavior: GhostBehavior;
  currentSpeed: number;
}

/*
interface PlayTile {
  x: number;
  y: number;
  whatAmI: "wall" | "point" | "power";
}

type PlayMap = Record<string, PlayTile>;

*/
