import React, { FC } from "react";
import MazeBuilder from "../MazeBuilder";
import PlayBuilder from "../PlayBuilder";

import "./MazeLayerWrapper.css";

type MazeLayerProps = {
  mazeArrayInput: number[][];
};

const MazeLayerWrapper: FC<MazeLayerProps> = ({ mazeArrayInput }) => {
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
      <PlayBuilder mazeDefinition={mazeArrayInput} />
    </div>
  );
};

export default MazeLayerWrapper;
