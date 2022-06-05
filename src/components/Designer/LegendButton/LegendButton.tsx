import React, { FC } from "react";
import classNames from "classnames";
import LegendButtonShard from "../LegendButtonShard";

import { CNGroup } from "../../../utils/logo";

import Icon from "../../Icons";
import { DesignerTileType } from "../../../utils/enums";
import { designerButtonProps } from "../../../utils/types";

const LegendButton: FC<designerButtonProps> = ({
  tileKey,
  tileNumber,
  tileType,
  mazeState,
  dispatch
}) => {
  if (
    tileType === DesignerTileType.wall ||
    tileType === DesignerTileType.door ||
    tileType === DesignerTileType.ghome
  ) {
    return (
      <LegendButtonShard
        tileType={tileType}
        tileNumber={tileNumber}
        tileKey={tileKey}
        mazeState={mazeState}
        dispatch={dispatch}
      >
        <Icon className={tileKey} iconToLoad={tileType} />
      </LegendButtonShard>
    );
  } else if (tileType === DesignerTileType.point) {
    return (
      <LegendButtonShard
        tileType={tileType}
        tileNumber={tileNumber}
        tileKey={tileKey}
        mazeState={mazeState}
        buttonClasses="point-wrapper styled-entity-legend-button"
        dispatch={dispatch}
      >
        <div className="point" />
      </LegendButtonShard>
    );
  } else if (tileType === DesignerTileType.power) {
    return (
      <LegendButtonShard
        tileType={tileType}
        tileNumber={tileNumber}
        tileKey={tileKey}
        mazeState={mazeState}
        buttonClasses="power-wrapper styled-entity-legend-button"
        dispatch={dispatch}
      >
        <div className="power">
          <img src={CNGroup} alt="CN Group Logo" />
        </div>
      </LegendButtonShard>
    );
  } else if (tileType === DesignerTileType.pacman) {
    return (
      <LegendButtonShard
        tileType={tileType}
        tileNumber={tileNumber}
        tileKey={tileKey}
        mazeState={mazeState}
        buttonClasses="styled-entity-legend-button"
        dispatch={dispatch}
      >
        <div className="pacman">
          <div className="top-half"></div>
          <div className="bottom-half"></div>
          <div className="eye"></div>
        </div>
      </LegendButtonShard>
    );
  } else if (
    tileType === DesignerTileType.clyde ||
    tileType === DesignerTileType.inky ||
    tileType === DesignerTileType.pinky ||
    tileType === DesignerTileType.blinky
  ) {
    return (
      <LegendButtonShard
        tileType={tileType}
        tileNumber={tileNumber}
        tileKey={tileKey}
        mazeState={mazeState}
        buttonClasses="ghost-wrapper styled-entity-legend-button"
        dispatch={dispatch}
      >
        <div className={classNames("ghost", tileType)}>
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
      </LegendButtonShard>
    );
  } else {
    return (
      <LegendButtonShard
        tileType={tileType}
        tileNumber={tileNumber}
        tileKey={tileKey}
        mazeState={mazeState}
        dispatch={dispatch}
      />
    );
  }
};

export default LegendButton;
