import React, { FC, useState } from "react";
import classNames from "classnames";

import "./DesignerLegend.css";

import LegendButton from "../LegendButton";

import {
  MazeWall,
  GhostHome,
  PortalDirection,
  DesignerTileType
} from "../../../utils/enums";
import { DESIGNER_ACTIONS } from "../../../utils/actions";
import { designerStateInterface } from "../../../utils/interfaces";
import { designerProps } from "../../../utils/types";

const numberRegexPattern = /\d+/g;

function renderBuildingBlocks(
  enumImport: Object,
  type: DesignerTileType,
  designerState: designerStateInterface,
  dispatch: ({ type }: { type: string }) => void
) {
  const array = Object.keys(enumImport);

  const buildingBlocks = array.map((key) => {
    const tileNumberFromKey = key.match(numberRegexPattern) || [];

    const tileFinalNumber = parseInt(tileNumberFromKey[0], 0);

    if (designerState) {
      return (
        <LegendButton
          key={"TileButtonKey" + key}
          tileType={type}
          tileNumber={tileFinalNumber}
          tileKey={enumImport[key]}
          mazeState={designerState}
          dispatch={dispatch}
        />
      );
    }
  });

  return buildingBlocks;
}

const DesignerLegend: FC<designerProps> = ({ mazeState, dispatch }) => {
  const [selectedTab, setSelectedTab] = useState(0);

  if (mazeState) {
    return (
      <div
        className="designer-legend-wrapper"
        onAuxClick={() =>
          dispatch({ type: DESIGNER_ACTIONS.CLEAR_SELECTED_TILE })
        }
      >
        <div className="designer-legend-header">
          <button
            className={classNames("tab-button", { active: selectedTab === 0 })}
            onClick={() => setSelectedTab(0)}
          >
            Walls
          </button>
          <button
            className={classNames("tab-button", { active: selectedTab === 1 })}
            onClick={() => setSelectedTab(1)}
          >
            Portals
          </button>
          <button
            className={classNames("tab-button", { active: selectedTab === 2 })}
            onClick={() => setSelectedTab(2)}
          >
            Ghost Home
          </button>
          <button
            className={classNames("tab-button", { active: selectedTab === 3 })}
            onClick={() => setSelectedTab(3)}
          >
            Entities
          </button>
        </div>
        <div className="designer-legend-body">
          <div
            className={classNames("designer-legend-tab", {
              active: selectedTab === 0
            })}
          >
            {renderBuildingBlocks(
              MazeWall,
              DesignerTileType.wall,
              mazeState,
              dispatch
            )}
          </div>
          <div
            className={classNames("designer-legend-tab", {
              active: selectedTab === 1
            })}
          >
            {renderBuildingBlocks(
              PortalDirection,
              DesignerTileType.door,
              mazeState,
              dispatch
            )}
          </div>
          <div
            className={classNames("designer-legend-tab", {
              active: selectedTab === 2
            })}
          >
            {renderBuildingBlocks(
              GhostHome,
              DesignerTileType.ghome,
              mazeState,
              dispatch
            )}
          </div>
          <div
            className={classNames("designer-legend-tab", {
              active: selectedTab === 3
            })}
          >
            <LegendButton
              tileType={DesignerTileType.path}
              tileNumber={0}
              mazeState={mazeState}
              dispatch={dispatch}
            />
            <LegendButton
              tileType={DesignerTileType.pacman}
              tileNumber={1}
              mazeState={mazeState}
              dispatch={dispatch}
            />
            <LegendButton
              tileType={DesignerTileType.clyde}
              tileNumber={21}
              mazeState={mazeState}
              dispatch={dispatch}
            />
            <LegendButton
              tileType={DesignerTileType.inky}
              tileNumber={22}
              mazeState={mazeState}
              dispatch={dispatch}
            />
            <LegendButton
              tileType={DesignerTileType.pinky}
              tileNumber={23}
              mazeState={mazeState}
              dispatch={dispatch}
            />
            <LegendButton
              tileType={DesignerTileType.blinky}
              tileNumber={24}
              mazeState={mazeState}
              dispatch={dispatch}
            />
            <LegendButton
              tileType={DesignerTileType.point}
              tileNumber={31}
              mazeState={mazeState}
              dispatch={dispatch}
            />
            <LegendButton
              tileType={DesignerTileType.power}
              tileNumber={32}
              mazeState={mazeState}
              dispatch={dispatch}
            />
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default DesignerLegend;
