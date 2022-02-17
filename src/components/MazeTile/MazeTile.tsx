import React, { FC } from "react";
import { MazeWall, GhostHome } from "../../enums";
import Icon from "../Icons";

import "./MazeTile.css";

type MazeTileProps = {
  tileKey?: string;
};

const MazeTile: FC<MazeTileProps> = ({ tileKey }) => {
  let tileKeyNumber = !!tileKey && tileKey !== "" ? parseInt(tileKey, 0) : NaN;

  if (
    tileKey === "0" ||
    tileKey === "" ||
    (tileKeyNumber > 0 && tileKeyNumber < 100) ||
    tileKeyNumber >= 300
  ) {
    return <div className="path" />;
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
  }
};

export default MazeTile;
