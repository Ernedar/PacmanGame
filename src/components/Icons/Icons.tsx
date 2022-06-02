import React, { FC } from "react";
import classNames from "classnames";

/* ICONS ALLOWED TO BE IMPORTED */

import IconWall from "./IconWall";
import IconGhostHome from "./IconGhostHome";
import IconPortal from "./IconPortal";

type IconsProps = {
  iconToLoad: "wall" | "ghostHome" | "portal";
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
    case "portal":
      return <IconPortal className={classNames("icon portal", className)} />;
    default:
      return <IconWall className={classNames("icon wall", className)} />;
  }
};

export default Icon;
