import React, { FC } from "react";

import "./EntityPoint.css";

type PointProps = {
  x: number;
  y: number;
  eaten?: Boolean;
};

const EntityPoint: FC<PointProps> = ({ x, y, eaten = false }) => {
  if (!eaten) {
    return (
      <div
        className="point-wrapper"
        style={{
          transform:
            "translate(calc(" +
            x +
            " * var(--tile-dim)), calc(" +
            y +
            " * var(--tile-dim))"
        }}
      >
        <div className="point" />
      </div>
    );
  } else {
    return null;
  }
};

export default EntityPoint;
