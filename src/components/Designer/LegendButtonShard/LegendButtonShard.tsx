import React, { FC } from "react";
import classNames from "classnames";
import { DesignerTileType } from "../../../utils/enums";
import { DESIGNER_ACTIONS } from "../../../utils/actions";
import { designerButtonProps } from "../../../utils/types";

import "./LegendButtonShard.css";

type legendButtonShardProps = designerButtonProps & {
  buttonClasses?: string;
  children?: React.ReactNode;
};

const LegendButtonShard: FC<legendButtonShardProps> = ({
  tileKey,
  tileNumber,
  tileType,
  mazeState,
  buttonClasses,
  dispatch,
  children
}) => {
  if (tileType !== DesignerTileType.path) {
    return (
      <div
        className={classNames("legend-btn-wrapper", {
          selected: tileNumber === mazeState.selectedTileNumber
        })}
      >
        <button
          className={buttonClasses}
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
          {children}
        </button>
        <p>{tileNumber}</p>
      </div>
    );
  } else {
    return (
      <div
        className={classNames("legend-btn-wrapper", {
          selected: tileNumber === mazeState.selectedTileNumber
        })}
      >
        <button
          className="styled-entity-legend-button"
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

export default LegendButtonShard;
