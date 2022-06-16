import React, { FC } from "react";

import "./DesignerView.css";

import { DESIGNER_ACTIONS } from "../../../utils/actions";
import { designerProps } from "../../../utils/types";
import { designerCellActions } from "../../../utils/enums";

import DesignerViewButton from "../DesignerViewButton";
import AddClearButton from "../AddClearButton";
import classNames from "classnames";

const DesignerView: FC<designerProps> = ({ mazeState, dispatch }) => {
  if (mazeState.designedMaze) {
    return (
      <div className="designer-view-wrapper">
        <div className="designer-view-action-bar">
          <div className="action-bar-left">
            <label
              className="input-label input-md right-adj"
              htmlFor="mazeName"
            >
              Maze Name:
            </label>
            <input
              className="form-input input-md left-adj"
              type="text"
              name="mazeName"
              id="mazeName"
              onChange={(e) => {
                dispatch({
                  type: DESIGNER_ACTIONS.SET_MAZE_NAME,
                  payload: { designedMazeName: e.target.value }
                });
              }}
            />
            <label className="input-label input-md right-adj" htmlFor="mazeTag">
              Maze linkTag:
            </label>
            <input
              className="form-input input-md left-adj"
              type="text"
              name="mazeTag"
              id="mazeTag"
              onChange={(e) => {
                dispatch({
                  type: DESIGNER_ACTIONS.SET_MAZE_LINKTAG,
                  payload: { designedMazeLinkTag: e.target.value }
                });
              }}
            />
          </div>
          <div className="action-bar-right">
            <button
              className="btn btn-success btn-md"
              onClick={() => {
                mazeState.designedMaze &&
                  navigator.clipboard.writeText(
                    mazeState.designedMaze[0].length.toString() +
                      "," +
                      mazeState.designedMaze.toString()
                  );
              }}
            >
              Save Maze
            </button>
            <button
              className="btn btn-danger btn-md"
              onClick={() =>
                dispatch({ type: DESIGNER_ACTIONS.CLEAR_DESIGNER })
              }
            >
              Clear Maze
            </button>
          </div>
        </div>
        <table cellSpacing="0">
          <thead>
            <tr>
              <th>
                <div className="legend-cell empty"></div>
              </th>
              <th>
                <div className="legend-cell empty"></div>
              </th>
              {mazeState.designedMaze[0].map((cell, i) => (
                <th key={"mazeColPre" + i}>
                  <div className="action-cell">
                    <AddClearButton
                      cellAction={designerCellActions.clearCol}
                      colNumber={i}
                      mazeState={mazeState}
                      dispatch={dispatch}
                    />
                  </div>
                </th>
              ))}
            </tr>
            <tr>
              <th>
                <div className="legend-cell empty"></div>
              </th>
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
                <td
                  className={classNames("legend-cell-outside", {
                    visible:
                      mazeState.designedMaze &&
                      mazeState.designedMaze[x].length > 0
                  })}
                >
                  <div className="action-cell">
                    <AddClearButton
                      cellAction={designerCellActions.clearRow}
                      rowNumber={x}
                      mazeState={mazeState}
                      dispatch={dispatch}
                    />
                  </div>
                </td>
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
                <td>
                  <div className="action-cell">
                    <AddClearButton
                      cellAction={designerCellActions.addTile}
                      rowNumber={x}
                      mazeState={mazeState}
                      dispatch={dispatch}
                    />
                  </div>
                </td>
                <td
                  className={classNames("legend-cell-inside", {
                    visible:
                      mazeState.designedMaze &&
                      mazeState.designedMaze[x].length > 0
                  })}
                >
                  <div className="action-cell">
                    <AddClearButton
                      cellAction={designerCellActions.removeTile}
                      rowNumber={x}
                      mazeState={mazeState}
                      dispatch={dispatch}
                    />
                  </div>
                </td>
              </tr>
            ))}
            <tr
              className={classNames("legend-row-link", {
                visible: mazeState.designedMaze[0].length > 0
              })}
            >
              <td>
                <div className="legend-cell empty"></div>
              </td>
              <td>
                <div className="legend-cell vertical">
                  <p>{mazeState.designedMaze.length}</p>
                </div>
              </td>
              <td>
                <div className="action-cell">
                  <AddClearButton
                    cellAction={designerCellActions.addRow}
                    mazeState={mazeState}
                    dispatch={dispatch}
                  />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  } else {
    return null;
  }
};

export default DesignerView;
