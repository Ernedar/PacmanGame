import React, { FC } from "react";
import MazeBuilder from "../MazeBuilder";
import PlayBuilder from "../PlayBuilder";

import "./MazeLayerWrapper.css";

type MazeLayerProps = {
  mazeArrayInput: number[][];
  pointsArrayInput: number[][];
  powerUpArrayInput: number[][];
  pacmanStartInput: number[];
  ghostsStartInput: number[][];
};

const MazeLayerWrapper: FC<MazeLayerProps> = ({
  mazeArrayInput,
  pointsArrayInput,
  powerUpArrayInput,
  pacmanStartInput,
  ghostsStartInput
}) => {
  const playgroundWidth = mazeArrayInput[0].length;
  const playgroundHeight = mazeArrayInput.length;

  return (
    <div
      className="maze-layer-wrapper"
      style={{
        width: "calc(" + playgroundWidth + " * var(--tile-dim))",
        height: "calc(" + playgroundHeight + " * var(--tile-dim))"
      }}
    >
      <MazeBuilder mazeArray={mazeArrayInput} />
      <PlayBuilder
        pointsArray={pointsArrayInput}
        powerUpsArray={powerUpArrayInput}
        pacmanStartPosition={pacmanStartInput}
        ghostsStartPositions={ghostsStartInput}
      />
    </div>
  );
};

export default MazeLayerWrapper;
