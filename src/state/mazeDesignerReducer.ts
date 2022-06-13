import { DESIGNER_ACTIONS } from "../utils/actions";
import { DesignerTileType } from "../utils/enums";
import { payloadType } from "../utils/types";
import {
  changeMazeDesignerTile,
  addTileToMaze,
  addNewRowToMaze,
  removeTileFromMaze,
  clearMazeRow,
  clearMazeColumn
} from "../utils/handlers";
import MazeDesignerInitState from "../state/initialDesignerState";

interface DesignerAction {
  type: String;
  payload: payloadType;
}

export default function MazeDesignerReducer(
  state: typeof MazeDesignerInitState,
  action: DesignerAction
) {
  const { type, payload } = action;
  switch (type) {
    case DESIGNER_ACTIONS.SET_MAZE_NAME:
      return {
        ...state,
        designedMazeName: payload.designedMazeName
      };
    case DESIGNER_ACTIONS.SET_MAZE_LINKTAG:
      return {
        ...state,
        designedMazeLinkTag: payload.designedMazeLinkTag
      };
    case DESIGNER_ACTIONS.SELECT_TILE:
      return {
        ...state,
        selectedTileType: payload.selectedTileType,
        selectedTileNumber: payload.selectedTileNumber,
        selectedTileClass: payload.selectedTileClass
      };
    case DESIGNER_ACTIONS.CLEAR_SELECTED_TILE:
      return {
        ...state,
        selectedTileType: DesignerTileType.path,
        selectedTileNumber: 0,
        selectedTileClass: ""
      };
    case DESIGNER_ACTIONS.ADD_TILE_TO_MAZE:
      return {
        ...state,
        designedMaze: addTileToMaze(
          state.designedMaze,
          payload.x,
          payload.selectedTileNumber
        )
      };
    case DESIGNER_ACTIONS.CHANGE_MAZE_TILE:
      return {
        ...state,
        designedMaze: changeMazeDesignerTile(
          state.designedMaze,
          payload.selectedTileNumber,
          payload.x,
          payload.y
        )
      };
    case DESIGNER_ACTIONS.CLEAR_MAZE_TILE:
      return {
        ...state,
        designedMaze: changeMazeDesignerTile(
          state.designedMaze,
          0,
          payload.x,
          payload.y
        )
      };
    case DESIGNER_ACTIONS.REMOVE_TILE_FROM_MAZE:
      return {
        ...state,
        designedMaze: removeTileFromMaze(state.designedMaze, payload.x)
      };
    case DESIGNER_ACTIONS.ADD_ROW_OF_TILES:
      return {
        ...state,
        designedMaze: addNewRowToMaze(
          state.designedMaze,
          payload.selectedTileNumber
        )
      };
    case DESIGNER_ACTIONS.CLEAR_ROW_OF_TILES:
      return {
        ...state,
        designedMaze: clearMazeRow(state.designedMaze, payload.x)
      };
    case DESIGNER_ACTIONS.CLEAR_COL_OF_TILES:
      return {
        ...state,
        designedMaze: clearMazeColumn(state.designedMaze, payload.y)
      };
    case DESIGNER_ACTIONS.SAVE_MAZE:
      return {
        ...state
      };
    case DESIGNER_ACTIONS.REFRESH_STATE_RENDER:
      return {
        ...state,
        designedMaze: state.designedMaze
      };
    case DESIGNER_ACTIONS.CLEAR_DESIGNER:
      return {
        ...state,
        designedMazeID: 0,
        designedMazeName: "",
        designedMazeLinkTag: "",
        designedMaze: [[]]
      };
    default:
      return state;
  }
}
