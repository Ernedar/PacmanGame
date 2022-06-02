import React, { FC, useEffect, useReducer } from "react";

import "./DesignerContainer.css";

import { DESIGNER_ACTIONS } from "../../../utils/actions";
import { DesignerTileType } from "../../../utils/enums";
import MazeDesignerInitState from "../../../state/initialDesignerState";

import DesignerLegend from "../DesignerLegend";
import DesignerView from "../DesignerView";

interface DesignerAction {
  type;
  payload: typeof MazeDesignerInitState;
}

function MazeDesignerReducer(
  state: typeof MazeDesignerInitState,
  action: DesignerAction
) {
  const { type, payload } = action;
  switch (type) {
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
        ...state
      };
    case DESIGNER_ACTIONS.REMOVE_TILE_FROM_MAZE:
      return {
        ...state
      };
    case DESIGNER_ACTIONS.REMOVE_ROW_OF_TILES:
      return {
        ...state
      };
    case DESIGNER_ACTIONS.REMOVE_COL_OF_TILES:
      return {
        ...state
      };
    case DESIGNER_ACTIONS.SAVE_MAZE:
      return {
        ...state
      };
    case DESIGNER_ACTIONS.CLEAR_DESIGNER:
      return {
        ...state,
        designedMaze: [[]]
      };
    default:
      return state;
  }
}

const MazeDesigner: FC = () => {
  const [state, dispatch] = useReducer(
    MazeDesignerReducer,
    MazeDesignerInitState
  );

  useEffect(() => {
    console.log(MazeDesignerInitState.designedMaze);
  }, [MazeDesignerInitState.designedMaze]);

  return (
    <div className="designer-wrapper">
      <DesignerLegend mazeDesignerState={state} dispatch={dispatch} />
      <DesignerView />
    </div>
  );
};

export default MazeDesigner;
