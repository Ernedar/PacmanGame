import React, { FC } from "react";
import classNames from "classnames";
import "./Icons.css";

/* ICONS ALLOWED TO BE IMPORTED */

import IconWall from "./IconWall";
import IconGhostHome from "./IconGhostHome";

type IconsProps = {
  iconToLoad: "wall" | "ghostHome";
  className?: string;
};

const Icon: FC<IconsProps> = ({ iconToLoad, className }) => {
  switch (iconToLoad) {
    case "wall":
      return <IconWall className={classNames("icon wall", className)} />;
    case "ghostHome":
      return (
        <IconGhostHome className={classNames("icon ghost-tile", className)} />
      );
    default:
      return <IconWall className={classNames("icon wall", className)} />;
  }
};

export default Icon;
