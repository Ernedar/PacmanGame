import React, { FC } from "react";

type PacmanProps = {
  speed: number;
  currentPosition: number[];
};

const EntityPacman: FC<PacmanProps> = ({ speed, currentPosition }) => {
  const pacmanAnimationDuration = speed * 3 + "ms";

  return (
    <div
      className="pacman"
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
        className="top-half"
        style={{ animationDuration: pacmanAnimationDuration }}
      ></div>
      <div
        className="bottom-half"
        style={{ animationDuration: pacmanAnimationDuration }}
      ></div>
      <div className="eye"></div>
    </div>
  );
};

export default EntityPacman;
