import React, { FC } from "react";
import classNames from "classnames";

import Icon from "../../Icons";
import { TileType } from "../../../utils/enums";

import "./LegendButton.css";

type legendButtonProps = {
  tileKey?: string | undefined;
  tileNumber?: number | undefined;
  tileType: TileType;
  selected?: boolean;
};

const LegendButton: FC<legendButtonProps> = ({
  tileKey,
  tileNumber,
  tileType,
  selected = false
}) => {
  if (
    tileType === TileType.path ||
    tileKey === undefined ||
    tileNumber === undefined
  ) {
    return (
      <div className={classNames("legend-btn-wrapper", { selected: selected })}>
        <div className="path" />
        path / empty
      </div>
    );
  } else if (
    tileType === TileType.wall ||
    tileType === TileType.door ||
    tileType === TileType.ghost
  ) {
    return (
      <div className={classNames("legend-btn-wrapper", { selected: selected })}>
        <button>
          <Icon className={tileKey} iconToLoad={tileType} />
        </button>
        <p>{tileNumber}</p>
      </div>
    );
  }
};

export default LegendButton;
