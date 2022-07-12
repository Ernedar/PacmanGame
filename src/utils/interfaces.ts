import {
  PacManStates,
  GhostStates,
  GameStateType,
  DesignerTileType,
  GameActionType,
  InhabitantNames
} from "./enums";
import { designerPayloadType } from "./types";

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
  gameState: GameStateType;
  gameScore: number;
  gameLoaded: boolean;
}

export interface movingEntity {
  entityStartPosition: number[];
  entityCurrentPosition: number[];
  entityCurrentDirection: number[];
  entitySpeed: number;
}

export interface ghostInterface extends movingEntity {
  entityState: GhostStates;
}

export interface pacmanInterface extends movingEntity {
  entityState: PacManStates;
}

export interface EntitiesInterface {
  pacman: pacmanInterface;
  clyde: ghostInterface;
  inky: ghostInterface;
  pinky: ghostInterface;
  blinky: ghostInterface;
}

export interface gameStateInterface {
  game: gameInterface;
  entity: EntitiesInterface;
  points: { x: number; y: number }[];
  powers: { x: number; y: number }[];
}

/* GAME ACTION INTERFACES */

export interface InitiateGame {
  type: GameActionType.InitiateGame;
  payload: {
    mazeArray: number[][];
  };
}

export interface GameLoaded {
  type: GameActionType.GameLoaded;
}

export interface ChangeGameStatus {
  type: GameActionType.ChangeGameStatus;
  payload: {
    gameStatus: GameStateType;
  };
}

export interface ChangeEntityDirection {
  type: GameActionType.ChangeEntityDirection;
  payload: {
    entity: InhabitantNames;
    direction: number[];
  };
}
