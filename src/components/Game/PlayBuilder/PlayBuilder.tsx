import React, { FC, useState, useEffect, useContext } from "react";
import "./PlayBuilder.css";
import {
  keyDownEventHandler,
  escapeKeyEventHandler
} from "../../../utils/handlers";
import { InhabitantNames } from "../../../utils/enums";
import EntityPoint from "../EntityPoint";
import EntityPower from "../EntityPower";
import EntityPacman from "../EntityPacman";
import EntityGhost from "../EntityGhost";

import { GameContext } from "../MazeLayerWrapper/MazeLayerWrapper";

type PlayBuilderProps = {
  mazeDefinition: number[][];
};

const PlayBuilder: FC<PlayBuilderProps> = ({ mazeDefinition }) => {
  const gameContext = useContext(GameContext);

  /* ----- POINTS and POWERS ----- */

  const [points, handlePoints] = useState<
    { x: number; y: number; eaten: boolean }[]
  >([]);
  const [powers, handlePowers] = useState<
    { x: number; y: number; eaten: boolean }[]
  >([]);

  /* ----- KEYBOARD HANDLING ----- */

  useEffect(() => {
    window.addEventListener("keydown", keyDownEventHandler);

    return () => {
      window.removeEventListener("keydown", keyDownEventHandler);
    };
  }, []);

  useEffect(() => {
    window.addEventListener("keyup", escapeKeyEventHandler);

    return () => {
      window.removeEventListener("keyup", escapeKeyEventHandler);
    };
  }, []);

  return (
    <div className="game-actions-entities">
      {mazeDefinition.map((tileColumn, y) =>
        tileColumn.map((tile, x) => {
          if (tile === 31) {
            points.push({ x: x, y: y, eaten: false });
            return <EntityPoint key={"point-" + x + "-" + y} x={x} y={y} />;
          } else if (tile === 32) {
            powers.push({ x: x, y: y, eaten: false });
            return <EntityPower key={"power-" + x + "-" + y} x={x} y={y} />;
          }
          return null;
        })
      )}
      <EntityPacman
        speed={gameContext.state.pacman.entitySpeed}
        currentPosition={gameContext.state.pacman.entityCurrentPosition}
      />
      <EntityGhost
        ghostName={InhabitantNames.clyde}
        ghostState={gameContext.state.ghosts.clyde.ghostState}
        speed={gameContext.state.ghosts.clyde.entitySpeed}
        currentPosition={gameContext.state.ghosts.clyde.entityCurrentPosition}
      />
      <EntityGhost
        ghostName={InhabitantNames.inky}
        ghostState={gameContext.state.ghosts.inky.ghostState}
        speed={gameContext.state.ghosts.inky.entitySpeed}
        currentPosition={gameContext.state.ghosts.inky.entityCurrentPosition}
      />
      <EntityGhost
        ghostName={InhabitantNames.pinky}
        ghostState={gameContext.state.ghosts.pinky.ghostState}
        speed={gameContext.state.ghosts.pinky.entitySpeed}
        currentPosition={gameContext.state.ghosts.pinky.entityCurrentPosition}
      />
      <EntityGhost
        ghostName={InhabitantNames.blinky}
        ghostState={gameContext.state.ghosts.blinky.ghostState}
        speed={gameContext.state.ghosts.blinky.entitySpeed}
        currentPosition={gameContext.state.ghosts.blinky.entityCurrentPosition}
      />
    </div>
  );
};

export default PlayBuilder;
