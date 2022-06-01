import React, { FC, useState } from "react";
import classNames from "classnames";

import "./DesignerLegend.css";

import LegendButton from "../LegendButton";

import {
  MazeWall,
  GhostHome,
  PortalDirection,
  Inhabitants,
  TileType
} from "../../../utils/enums";

const numberRegexPattern = /\d+/g;

function getKeysFromEnums(enumImport: Object) {
  const enumKeyArray = Object.keys(enumImport);

  const cleanedEnumKeyArray = enumKeyArray.map((key) => {
    const matchedString = key.match(numberRegexPattern) || [];

    if (matchedString.length) {
      return parseInt(matchedString[0], 0);
    }
  });

  return cleanedEnumKeyArray;
}

function renderBuildingBlocks(enumImport: Object, type: TileType) {
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
      />
    );
  });

  return buildingBlocks;
}

const DesignerLegend: FC = () => {
  const piecesGhostsClass = Object.values(GhostHome)[0];
  const piecesGhosts = getKeysFromEnums(GhostHome)[0];

  const [selectedTab, setSelectedTab] = useState(0);

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
          {renderBuildingBlocks(MazeWall, TileType.wall)}
        </div>
        <div
          className={classNames("designer-legend-tab", {
            active: selectedTab === 1
          })}
        >
          {renderBuildingBlocks(PortalDirection, TileType.door)}
        </div>
        <div
          className={classNames("designer-legend-tab", {
            active: selectedTab === 2
          })}
        >
          {renderBuildingBlocks(GhostHome, TileType.ghost)}
        </div>
        <div
          className={classNames("designer-legend-tab", {
            active: selectedTab === 3
          })}
        ></div>
      </div>
    </div>
  );
};

export default DesignerLegend;
