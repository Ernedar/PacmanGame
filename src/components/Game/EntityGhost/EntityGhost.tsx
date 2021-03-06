import React, { FC } from "react";
import classNames from "classnames";
import { GhostStates, InhabitantNames } from "../../../utils/enums";

type GhostProps = {
  ghostName: InhabitantNames;
  ghostState: GhostStates;
  currentPosition: number[];
};

const EntityGhost: FC<GhostProps> = ({
  ghostName = test,
  ghostState,
  currentPosition
}) => {
  let ghostStateName;

  if (ghostState === GhostStates.scared) {
    ghostStateName = GhostStates.scared;
  } else if (ghostState === GhostStates.dead) {
    ghostStateName = GhostStates.dead;
  } else {
    ghostStateName = ghostName;
  }

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
      <div className={classNames("ghost", ghostStateName)}>
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
