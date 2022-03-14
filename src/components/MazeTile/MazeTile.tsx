import React, { FC } from "react";
import { MazeWall, GhostHome, PortalDirection } from "../../enums";
import Icon from "../Icons";

import "./MazeTile.css";

type MazeTileProps = {
  tileKey?: string;
};

const MazeTile: FC<MazeTileProps> = ({ tileKey }) => {
  let tileKeyNumber = !!tileKey && tileKey !== "" ? parseInt(tileKey, 0) : NaN;
  /* POINTS PLACEHOLDER */
  if (tileKey === "32") {
    return (
      <div className="path with-power">
        <div className="power" />
      </div>
    ); /* POINTS PLACEHOLDER END */
  } else if (tileKeyNumber >= 60 && tileKeyNumber <= 69) {
    let portalEnumKey: keyof typeof PortalDirection;

    portalEnumKey = ("p" + tileKey) as keyof typeof PortalDirection;

    const portalClass = PortalDirection[portalEnumKey];

    return <Icon className={portalClass} iconToLoad="portal" />;
  } else if (tileKeyNumber >= 100 && tileKeyNumber < 200) {
    let ghostHomeEnumKey: keyof typeof GhostHome;

    ghostHomeEnumKey = ("g" + tileKey) as keyof typeof GhostHome;

    const ghostHomeClass = GhostHome[ghostHomeEnumKey];

    return <Icon className={ghostHomeClass} iconToLoad="ghostHome" />;
  } else if (tileKeyNumber >= 200 && tileKeyNumber < 300) {
    let wallEnumKey: keyof typeof MazeWall;

    wallEnumKey = ("w" + tileKey) as keyof typeof MazeWall;

    const wallClass = MazeWall[wallEnumKey];

    return <Icon className={wallClass} iconToLoad="wall" />;
  } else {
    return <div className="path" />;
  }
};

export default MazeTile;
