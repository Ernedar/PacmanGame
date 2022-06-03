import React, { FC, useEffect, useState } from "react";
import classNames from "classnames";

import "./DesignerLegend.css";

import MazeDesignerInitState from "../../../state/initialDesignerState";

import LegendButton from "../LegendButton";

import {
  MazeWall,
  GhostHome,
  PortalDirection,
  Inhabitants,
  DesignerTileType
} from "../../../utils/enums";

const numberRegexPattern = /\d+/g;

type designerLegendProps = {
  mazeDesignerState: typeof MazeDesignerInitState;
  dispatch(arg: {}): void;
};

function renderBuildingBlocks(
  enumImport: Object,
  type: DesignerTileType,
  designerState: typeof MazeDesignerInitState,
  dispatch
) {
  const array = Object.keys(enumImport);

  const buildingBlocks = array.map((key) => {
    const tileNumberFromKey = key.match(numberRegexPattern) || [];

    const tileFinalNumber = parseInt(tileNumberFromKey[0], 0);

    return (
      <LegendButton
        key={"TileButtonKey" + key}
        tileType={type}
        tileNumber={tileFinalNumber}
        tileKey={enumImport[key]}
        buttonGrantedState={designerState}
        dispatch={dispatch}
      />
    );
  });

  return buildingBlocks;
}

const DesignerLegend: FC<designerLegendProps> = ({
  mazeDesignerState,
  dispatch
}) => {
  const [selectedTab, setSelectedTab] = useState(0);

  useEffect(() => {
    console.log(mazeDesignerState);
  }, [mazeDesignerState]);

  return (
    <div className="designer-legend-wrapper">
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
            mazeDesignerState,
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
            mazeDesignerState,
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
            mazeDesignerState,
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
            buttonGrantedState={mazeDesignerState}
            dispatch={dispatch}
          />
          <LegendButton
            tileType={DesignerTileType.pacman}
            tileNumber={1}
            buttonGrantedState={mazeDesignerState}
            dispatch={dispatch}
          />
          <LegendButton
            tileType={DesignerTileType.clyde}
            tileNumber={21}
            buttonGrantedState={mazeDesignerState}
            dispatch={dispatch}
          />
          <LegendButton
            tileType={DesignerTileType.inky}
            tileNumber={22}
            buttonGrantedState={mazeDesignerState}
            dispatch={dispatch}
          />
          <LegendButton
            tileType={DesignerTileType.blinky}
            tileNumber={23}
            buttonGrantedState={mazeDesignerState}
            dispatch={dispatch}
          />
          <LegendButton
            tileType={DesignerTileType.pinky}
            tileNumber={24}
            buttonGrantedState={mazeDesignerState}
            dispatch={dispatch}
          />
          <LegendButton
            tileType={DesignerTileType.point}
            tileNumber={31}
            buttonGrantedState={mazeDesignerState}
            dispatch={dispatch}
          />
          <LegendButton
            tileType={DesignerTileType.power}
            tileNumber={32}
            buttonGrantedState={mazeDesignerState}
            dispatch={dispatch}
          />
        </div>
      </div>
    </div>
  );
};

export default DesignerLegend;
