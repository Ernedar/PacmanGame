import React, { FC } from "react";

import "./DesignerView.css";

import { DESIGNER_ACTIONS } from "../../../utils/actions";
import { designerProps } from "../../../utils/types";
import { designerCellActions } from "../../../utils/enums";

import DesignerViewButton from "../DesignerViewButton";
import AddClearButton from "../AddClearButton";
import classNames from "classnames";

const DesignerView: FC<designerProps> = ({ mazeState, dispatch }) => {
  return (
    <div className="designer-view-wrapper">
      <div className="designer-view-action-bar">
        <button
          className="btn btn-success btn-md"
          onClick={() => {
            navigator.clipboard.writeText(mazeState.designedMaze.toString());
          }}
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
            {mazeState.designedMaze[0].map((cell, i) => (
              <th key={"mazeCol" + i}>
                <div className="legend-cell horizontal">
                  <p>{i}</p>
                </div>
              </th>
            ))}
            <th>
              <div className="legend-cell horizontal">
                <p>{mazeState.designedMaze[0].length}</p>
              </div>
            </th>
          </tr>
        </thead>
        <tbody className="design-maze">
          {mazeState.designedMaze.map((mazeLine, x) => (
            <tr key={"mazeLine" + x}>
              <td>
                <div className="legend-cell vertical">
                  <p>{x}</p>
                </div>
              </td>
              {mazeLine.map((mazeCellID, y) => (
                <td key={"mazeCell-" + x + "-" + y}>
                  <DesignerViewButton
                    x={x}
                    y={y}
                    mazeCell={mazeCellID}
                    mazeState={mazeState}
                    dispatch={dispatch}
                  />
                </td>
              ))}
              <td className="action-cell">
                <AddClearButton
                  cellAction={designerCellActions.addTile}
                  rowNumber={x}
                  mazeState={mazeState}
                  dispatch={dispatch}
                />
              </td>
            </tr>
          ))}
          <tr
            className={classNames("legend-row-link", {
              visible: mazeState.designedMaze[0].length > 0
            })}
          >
            <td>
              <div className="legend-cell vertical">
                <p>{mazeState.designedMaze.length}</p>
              </div>
            </td>
            <td className="action-cell">
              <AddClearButton
                cellAction={designerCellActions.addRow}
                mazeState={mazeState}
                dispatch={dispatch}
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DesignerView;
