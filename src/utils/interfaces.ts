import { Dispatch } from "react";

import {
  PacManStates,
  GhostStates,
  GameStateType,
  DesignerTileType
} from "./enums";
import { gamePayloadType, designerPayloadType } from "./types";

/* DESIGNER INTERFACES */

export interface DesignerAction {
  type: string;
  payload?: designerPayloadType;
}

export interface designerStateInterface {
  selectedTileType?: DesignerTileType;
  selectedTileNumber?: number;
  selectedTileClass?: string;
  designedMazeID?: number;
  designedMazeName?: string;
  designedMazeLinkTag?: string;
  designedMaze?: number[][];
}

/* GAME INTERFACES */

export interface importMaze {
  id: number;
  name: string;
  linktag: string;
  mazeArray: number[][];
}

export interface gameInterface {
  gameState?: GameStateType;
  gameScore?: number;
  gameLoaded?: boolean;
}

export interface movingEntity {
  entityStartPosition?: number[];
  entityCurrentPosition?: number[];
  entityCurrentDirection?: number[];
  entitySpeed?: number;
}

export interface ghostInterface extends movingEntity {
  ghostState?: GhostStates;
}

export interface GhostsInterface {
  clyde?: ghostInterface;
  inky?: ghostInterface;
  pinky?: ghostInterface;
  blinky?: ghostInterface;
}

export interface pacmanInterface extends movingEntity {
  pacmanState?: PacManStates;
}

export interface gameStateInterface {
  game?: gameInterface;
  pacman?: pacmanInterface;
  ghosts?: GhostsInterface;
  points?: [];
  powers?: [];
}

export interface gameAction {
  type: String;
  payload?: gamePayloadType;
}

export interface IGameContext {
  state: gameStateInterface;
  dispatch: Dispatch<gameAction>;
}

/*
interface PlayTile {
  x: number;
  y: number;
  whatAmI: "wall" | "point" | "power";
}

type PlayMap = Record<string, PlayTile>;

*/
