import React, { FC } from "react";
import classNames from "classnames";
import { GhostStates, GhostBehavior } from "../../utils/types";

import "./EntityGhost.css";

type GhostProps = {
  ghostName: GhostBehavior;
  ghostState: GhostStates;
  speed: number;
  currentPosition: number[];
};

const EntityGhost: FC<GhostProps> = ({
  ghostName = test,
  ghostState,
  speed,
  currentPosition
}) => {
  const ghostAnimationDuration = speed * 10 + "ms";
  return (
    <div
      className="ghost-wrapper"
      style={{
        transform:
          "translate(calc(" +
          currentPosition[1] +
          " * var(--tile-dim)), calc(" +
          currentPosition[0] +
          " * var(--tile-dim))"
      }}
    >
      <div
        className={classNames("ghost", ghostName)}
        style={{ animationDuration: ghostAnimationDuration }}
      >
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
    </div>
  );
};

export default EntityGhost;
