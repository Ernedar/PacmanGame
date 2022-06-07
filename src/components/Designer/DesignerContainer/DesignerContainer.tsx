import React, { FC, useEffect, useReducer } from "react";

import "./DesignerContainer.css";

import { DESIGNER_ACTIONS } from "../../../utils/actions";

import MazeDesignerInitState from "../../../state/initialDesignerState";

import MazeDesignerReducer from "../../../state/mazeDesignerReducer";

import DesignerLegend from "../DesignerLegend";
import DesignerView from "../DesignerView";

const MazeDesigner: FC = () => {
  const [state, dispatch] = useReducer(
    MazeDesignerReducer,
    MazeDesignerInitState
  );

  const lastArrayLineLength =
    state.designedMaze[state.designedMaze.length - 1].length;

  useEffect(() => {
    if (state.designedMaze.length > 1 && lastArrayLineLength === 0) {
      state.designedMaze.pop();
    }
    dispatch({ type: DESIGNER_ACTIONS.REFRESH_STATE_RENDER });
  }, [state.designedMaze, state.designedMaze.length, lastArrayLineLength]);

  return (
    <div className="designer-wrapper">
      <DesignerLegend mazeState={state} dispatch={dispatch} />
      <DesignerView mazeState={state} dispatch={dispatch} />
    </div>
  );
};

export default MazeDesigner;
