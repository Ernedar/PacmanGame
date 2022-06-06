import React, { FC } from "react";
import classNames from "classnames";

import {
  DesignerTileType,
  MazeWall,
  GhostHome,
  PortalDirection,
  Inhabitants
} from "../../../utils/enums";
import { DESIGNER_ACTIONS } from "../../../utils/actions";
import { designerProps } from "../../../utils/types";

import { CNGroup } from "../../../utils/logo";
import Icon from "../../Icons";

import "./DesignerViewButton.css";

type designerViewButtonProps = designerProps & {
  mazeCell: number;
  x: number;
  y: number;
};

const DesignerViewButton: FC<designerViewButtonProps> = ({
  mazeCell,
  x,
  y,
  mazeState,
  dispatch
}) => {
  if (mazeCell >= 60 && mazeCell <= 69) {
    const enumTileKey = ("p" + mazeCell) as keyof typeof PortalDirection;

    return (
      <button
        className="designed-maze-button"
        onClick={() =>
          dispatch({
            type: DESIGNER_ACTIONS.CHANGE_MAZE_TILE,
            payload: {
              selectedTileNumber: mazeState.selectedTileNumber,
              x: x,
              y: y
            }
          })
        }
        onAuxClick={() =>
          dispatch({
            type: DESIGNER_ACTIONS.CLEAR_MAZE_TILE,
            payload: {
              x: x,
              y: y
            }
          })
        }
      >
        <Icon
          className={PortalDirection[enumTileKey]}
          iconToLoad={DesignerTileType.door}
        />
      </button>
    );
  } else if (mazeCell >= 100 && mazeCell < 200) {
    const enumTileKey = ("g" + mazeCell) as keyof typeof GhostHome;

    return (
      <button
        className="designed-maze-button"
        onClick={() =>
          dispatch({
            type: DESIGNER_ACTIONS.CHANGE_MAZE_TILE,
            payload: {
              selectedTileNumber: mazeState.selectedTileNumber,
              x: x,
              y: y
            }
          })
        }
        onAuxClick={() =>
          dispatch({
            type: DESIGNER_ACTIONS.CLEAR_MAZE_TILE,
            payload: {
              x: x,
              y: y
            }
          })
        }
      >
        <Icon
          className={GhostHome[enumTileKey]}
          iconToLoad={DesignerTileType.ghome}
        />
      </button>
    );
  } else if (mazeCell >= 200 && mazeCell < 300) {
    const enumTileKey = ("w" + mazeCell) as keyof typeof MazeWall;

    return (
      <button
        className="designed-maze-button"
        onClick={() =>
          dispatch({
            type: DESIGNER_ACTIONS.CHANGE_MAZE_TILE,
            payload: {
              selectedTileNumber: mazeState.selectedTileNumber,
              x: x,
              y: y
            }
          })
        }
        onAuxClick={() =>
          dispatch({
            type: DESIGNER_ACTIONS.CLEAR_MAZE_TILE,
            payload: {
              x: x,
              y: y
            }
          })
        }
      >
        <Icon
          className={MazeWall[enumTileKey]}
          iconToLoad={DesignerTileType.wall}
        />
      </button>
    );
  } else if (mazeCell === 31) {
    return (
      <button
        className="designed-maze-button"
        onClick={() =>
          dispatch({
            type: DESIGNER_ACTIONS.CHANGE_MAZE_TILE,
            payload: {
              selectedTileNumber: mazeState.selectedTileNumber,
              x: x,
              y: y
            }
          })
        }
        onAuxClick={() =>
          dispatch({
            type: DESIGNER_ACTIONS.CLEAR_MAZE_TILE,
            payload: {
              x: x,
              y: y
            }
          })
        }
      >
        <div className="point-wrapper">
          <div className="point" />
        </div>
      </button>
    );
  } else if (mazeCell === 32) {
    return (
      <button
        className="designed-maze-button"
        onClick={() =>
          dispatch({
            type: DESIGNER_ACTIONS.CHANGE_MAZE_TILE,
            payload: {
              selectedTileNumber: mazeState.selectedTileNumber,
              x: x,
              y: y
            }
          })
        }
        onAuxClick={() =>
          dispatch({
            type: DESIGNER_ACTIONS.CLEAR_MAZE_TILE,
            payload: {
              x: x,
              y: y
            }
          })
        }
      >
        <div className="power">
          <img src={CNGroup} alt="CN Group Logo" />
        </div>
      </button>
    );
  } else if (mazeCell === 1) {
    return (
      <button
        className="designed-maze-button"
        onClick={() =>
          dispatch({
            type: DESIGNER_ACTIONS.CHANGE_MAZE_TILE,
            payload: {
              selectedTileNumber: mazeState.selectedTileNumber,
              x: x,
              y: y
            }
          })
        }
        onAuxClick={() =>
          dispatch({
            type: DESIGNER_ACTIONS.CLEAR_MAZE_TILE,
            payload: {
              x: x,
              y: y
            }
          })
        }
      >
        <div className="pacman">
          <div className="top-half"></div>
          <div className="bottom-half"></div>
          <div className="eye"></div>
        </div>
      </button>
    );
  } else if (mazeCell >= 21 && mazeCell <= 24) {
    return (
      <button
        className="designed-maze-button"
        onClick={() =>
          dispatch({
            type: DESIGNER_ACTIONS.CHANGE_MAZE_TILE,
            payload: {
              selectedTileNumber: mazeState.selectedTileNumber,
              x: x,
              y: y
            }
          })
        }
        onAuxClick={() =>
          dispatch({
            type: DESIGNER_ACTIONS.CLEAR_MAZE_TILE,
            payload: {
              x: x,
              y: y
            }
          })
        }
      >
        <div className={classNames("ghost", Inhabitants[mazeCell])}>
          <div className="ghost-body">
            <div className="ghost-eye">
              <div className="ghost-eye-socket"></div>
            </div>
            <div className="ghost-eye">
              <div className="ghost-eye-socket"></div>
            </div>
            <div className="ghost-skirt">
              <div className="skirt-wave"></div>
              <div className="skirt-wave"></div>
              <div className="skirt-wave"></div>
            </div>
          </div>
        </div>
      </button>
    );
  } else {
    return (
      <button
        className="designed-maze-button"
        onClick={() =>
          dispatch({
            type: DESIGNER_ACTIONS.CHANGE_MAZE_TILE,
            payload: {
              selectedTileNumber: mazeState.selectedTileNumber,
              x: x,
              y: y
            }
          })
        }
        onAuxClick={() =>
          dispatch({
            type: DESIGNER_ACTIONS.CLEAR_MAZE_TILE,
            payload: {
              x: x,
              y: y
            }
          })
        }
      >
        <div className="path" />
      </button>
    );
  }
};

export default DesignerViewButton;
