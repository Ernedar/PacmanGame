import React, { FC } from "react";
import classNames from "classnames";

import Icon from "../../Icons";
import { DesignerTileType } from "../../../utils/enums";
import { DESIGNER_ACTIONS } from "../../../utils/actions";

import MazeDesignerInitState from "../../../state/initialDesignerState";

import "./LegendButton.css";

type legendButtonProps = {
  tileKey?: string | undefined;
  tileNumber?: number | undefined;
  tileType: DesignerTileType;
  selected?: boolean;
  buttonGrantedState: typeof MazeDesignerInitState;
  dispatch(arg: {}): void;
};

const LegendButton: FC<legendButtonProps> = ({
  tileKey,
  tileNumber,
  tileType,
  buttonGrantedState,
  dispatch
}) => {
  if (
    tileType === DesignerTileType.wall ||
    tileType === DesignerTileType.door ||
    tileType === DesignerTileType.ghome
  ) {
    return (
      <div
        className={classNames("legend-btn-wrapper", {
          selected: tileNumber === buttonGrantedState.selectedTileNumber
        })}
      >
        <button
          onClick={() =>
            dispatch({
              type: DESIGNER_ACTIONS.SELECT_TILE,
              payload: {
                selectedTileType: tileType,
                selectedTileNumber: tileNumber,
                selectedTileClass: tileKey
              }
            })
          }
        >
          <Icon className={tileKey} iconToLoad={tileType} />
        </button>
        <p>{tileNumber}</p>
      </div>
    );
  } else {
    return (
      <div
        className={classNames("legend-btn-wrapper", {
          selected: tileNumber === buttonGrantedState.selectedTileNumber
        })}
      >
        <button
          onClick={() =>
            dispatch({
              type: DESIGNER_ACTIONS.SELECT_TILE,
              payload: {
                selectedTileType: DesignerTileType.path,
                selectedTileNumber: 0,
                selectedTileClass: ""
              }
            })
          }
        >
          <div className="path" />
        </button>
        <p>path</p>
        <p>empty</p>
      </div>
    );
  }
};

export default LegendButton;
