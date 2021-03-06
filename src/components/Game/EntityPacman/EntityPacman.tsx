import React, { FC } from "react";

type PacmanProps = {
  speed: number;
  currentPosition: number[];
  direction: number[];
};

const EntityPacman: FC<PacmanProps> = ({ currentPosition, direction }) => {
  let pacmanRotation;

  switch (direction.toString()) {
    case "-1,0":
      pacmanRotation = "rotate(-90deg)";
      break;
    case "1,0":
      pacmanRotation = "rotate(90deg)";
      break;
    case "0,-1":
      pacmanRotation = "rotateY(180deg)";
      break;
    case "0,1":
    case "0,0":
      pacmanRotation = "";
      break;
    default:
      pacmanRotation = "";
  }

  return (
    <div
      className="pacman"
      style={{
        transform:
          "translate(calc(" +
          currentPosition[1] +
          " * var(--tile-dim)), calc(" +
          currentPosition[0] +
          " * var(--tile-dim)))" +
          pacmanRotation
      }}
    >
      <div className="top-half"></div>
      <div className="bottom-half"></div>
      <div className="eye"></div>
    </div>
  );
};

export default EntityPacman;
