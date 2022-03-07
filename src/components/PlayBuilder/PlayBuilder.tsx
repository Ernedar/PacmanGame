import React, { FC } from "react";
import "./PlayBuilder.css";
/*
interface PlayTile {
  x: number;
  y: number;
  whatAmI: "wall" | "point" | "power";
}

type PlayMap = Record<string, PlayTile>;

*/

type PlayBuilderProps = {
  pacmanStartPosition: number[];
  ghostsStartPositions: number[][];
};

const PlayBuilder: FC<PlayBuilderProps> = ({
  pacmanStartPosition,
  ghostsStartPositions
}) => {
  console.log(
    "Pacman Starting on coordinates: X: " +
      pacmanStartPosition[0] +
      " Y: " +
      pacmanStartPosition[1]
  );
  console.log("Ghosts start on " + ghostsStartPositions);
  return (
    <div className="game-actions-entities">
      <div
        className="testSquare"
        style={{
          transform:
            "translate(calc(" +
            pacmanStartPosition[1] +
            " * var(--tile-dim)), calc(" +
            pacmanStartPosition[0] +
            " * var(--tile-dim))"
        }}
      ></div>
    </div>
  );
};

export default PlayBuilder;
