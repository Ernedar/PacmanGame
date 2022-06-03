import React, { FC } from "react";

import "./DesignerView.css";

import { DESIGNER_ACTIONS } from "../../../utils/actions";
import { DesignerTileType } from "../../../utils/enums";
import MazeDesignerInitState from "../../../state/initialDesignerState";

type designerViewProps = {
  designerState: typeof MazeDesignerInitState;
  dispatch(arg: {}): void;
};

const DesignerView: FC<designerViewProps> = ({ designerState, dispatch }) => {
  return (
    <div className="designer-view-wrapper">
      <div className="designer-view-action-bar">
        <button
          className="btn btn-success btn-md"
          onClick={() => dispatch({ type: DESIGNER_ACTIONS.SAVE_MAZE })}
        >
          Save Maze
        </button>
        <button
          className="btn btn-danger btn-md"
          onClick={() => dispatch({ type: DESIGNER_ACTIONS.CLEAR_DESIGNER })}
        >
          Clear Maze
        </button>
      </div>
      <table cellSpacing="0">
        <thead>
          <tr>
            <th>
              <div className="legend-cell empty"></div>
            </th>
            {designerState.designedMaze[0].map((cell, i) => (
              <th key={"mazeCol" + i}>
                <div className="legend-cell horizontal">
                  <p>{i}</p>
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="design-maze">
          {designerState.designedMaze.map((mazeLine, x) => (
            <tr key={"mazeLine" + x}>
              <td>
                <div className="legend-cell vertical">
                  <p>{x}</p>
                </div>
              </td>
              {mazeLine.map((mazeCellID, y) => (
                <td key={"mazeCell-" + x + "-" + y}>{mazeCellID}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DesignerView;
