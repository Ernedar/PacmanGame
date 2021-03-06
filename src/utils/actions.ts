import { GameActionType, GameStateType, InhabitantNames } from "./enums";
import {
  ChangeEntityDirection,
  ChangeGameStatus,
  GameLoaded,
  UpdateEntityActionCounter,
  InitiateGame,
  UpdateEntityCurrentPosition
} from "./interfaces";

export const DESIGNER_ACTIONS = {
  SELECT_TILE: "select-tile",
  CLEAR_SELECTED_TILE: "clear-selected-tile",
  ADD_TILE_TO_MAZE: "add-tile-to-maze",
  ADD_ROW_OF_TILES: "add-row-of-tiles",
  CHANGE_MAZE_TILE: "change-maze-tile",
  CLEAR_MAZE_TILE: "clear-maze-tile",
  REMOVE_TILE_FROM_MAZE: "remove-tile-from-maze",
  SET_MAZE_NAME: "set-maze-name",
  SET_MAZE_LINKTAG: "set-maze-linktag",
  CLEAR_ROW_OF_TILES: "clear-row-from-maze",
  CLEAR_COL_OF_TILES: "clear-col-from-maze",
  SAVE_MAZE: "save-designed-maze",
  CLEAR_DESIGNER: "clear-designer",
  REFRESH_STATE_RENDER: "refresh-state-render"
};

export const initiateGame = (maze: number[][]): InitiateGame => ({
  type: GameActionType.InitiateGame,
  payload: {
    mazeArray: maze
  }
});

export const gameLoaded = (): GameLoaded => ({
  type: GameActionType.GameLoaded
});

export const changeGameStatus = (
  gameStatus: GameStateType
): ChangeGameStatus => ({
  type: GameActionType.ChangeGameStatus,
  payload: {
    gameStatus: gameStatus
  }
});

export const changeEntityDirection = (
  entityIdentifier: InhabitantNames,
  entityDirection: number[]
): ChangeEntityDirection => ({
  type: GameActionType.ChangeEntityDirection,
  payload: {
    entity: entityIdentifier,
    direction: entityDirection
  }
});

export const updateEntityCounters = (
  entityIdentity: InhabitantNames,
  entityAC: number,
  entityDC: number
): UpdateEntityActionCounter => ({
  type: GameActionType.UpdateEntityActionCounter,
  payload: {
    entity: entityIdentity,
    entityActionCounter: entityAC,
    entityDeltaCounter: entityDC
  }
});

export const updateEntityCurrentPosition = (
  newPosition: number[],
  entityIdentity: InhabitantNames
): UpdateEntityCurrentPosition => ({
  type: GameActionType.UpdateEntityCurrentPosition,
  payload: {
    newPosition: newPosition,
    entity: entityIdentity
  }
});
