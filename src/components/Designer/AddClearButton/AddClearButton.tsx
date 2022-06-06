import React, { FC } from "react";
import classNames from "classnames";

import "./AddClearButton.css";

import { designerProps } from "../../../utils/types";
import { designerCellActions } from "../../../utils/enums";
import { DESIGNER_ACTIONS } from "../../../utils/actions";

type addClearButtonProps = designerProps & {
  cellAction: designerCellActions;
  rowNumber?: number;
  colNumber?: number;
};

const AddClearButton: FC<addClearButtonProps> = ({
  cellAction,
  mazeState,
  dispatch,
  rowNumber,
  colNumber
}) => {
  console.log(mazeState.designedMaze.length);
  console.log(mazeState.designedMaze[0].length);

  if (cellAction === designerCellActions.addTile) {
    return (
      <button
        className={classNames("add-clear-btn add-btn")}
        onClick={() =>
          dispatch({
            type: DESIGNER_ACTIONS.ADD_TILE_TO_MAZE,
            payload: {
              x: rowNumber,
              selectedTileNumber: mazeState.selectedTileNumber
            }
          })
        }
      />
    );
  } else if (
    cellAction === designerCellActions.addRow &&
    mazeState.designedMaze[0].length > 0
  ) {
    return (
      <button
        className={classNames("add-clear-btn add-btn")}
        onClick={() =>
          dispatch({
            type: DESIGNER_ACTIONS.ADD_ROW_OF_TILES,
            payload: {
              selectedTileNumber: mazeState.selectedTileNumber
            }
          })
        }
      />
    );
  } else {
    return null;
  }
};

export default AddClearButton;
