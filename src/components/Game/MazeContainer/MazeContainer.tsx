import React, { FC } from "react";
import { useParams } from "react-router-dom";
import MazeBuilder from "../MazeBuilder";

import "./MazeContainer.css";
import { GameContextProvider } from "../../../state/PacmanGameContext";
import MazeLayerWrapper from "../MazeLayerWrapper";

/* MAZE IMPORTS */

import mazesJSON from "../../../assets/prepMazes.json";
import NotFound from "../../../pages/NotFound";

const MazeContainer: FC = () => {
  let { mazeId } = useParams();

  if (mazeId === undefined) {
    return <NotFound />;
  }

  if (
    mazesJSON === undefined ||
    mazesJSON.mazes === undefined ||
    mazesJSON.mazes[parseInt(mazeId, 10) - 1]?.mazeArray === undefined
  ) {
    return <NotFound />;
  }

  const mazeArray = mazesJSON.mazes[parseInt(mazeId, 10) - 1].mazeArray;

  const playgroundWidth = mazeArray[0].length;
  const playgroundHeight = mazeArray.length;

  return (
    <div className="game-wrapper">
      <div className="game-action-bar">
        <p className="game-score">Score: 0</p>
      </div>
      <div
        className="maze-layer-wrapper"
        style={{
          width: "calc(" + playgroundWidth + " * var(--tile-dim))",
          height: "calc(" + playgroundHeight + " * var(--tile-dim))"
        }}
      >
        <GameContextProvider>
          <MazeLayerWrapper
            mazeArray={mazeArray}
            mazeID={parseInt(mazeId, 10)}
          />
        </GameContextProvider>
        <MazeBuilder mazeArray={mazeArray} />
      </div>
    </div>
  );
};

export default MazeContainer;
