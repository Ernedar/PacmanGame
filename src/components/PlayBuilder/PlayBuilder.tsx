import React, { FC, useState, useEffect } from "react";
import "./PlayBuilder.css";
import { positionChecker } from "../../utils/utils";
import {
  randomDirectionHandler,
  startPositionHandler,
  keyDownEventHandler,
  escapeKeyEventHandler
} from "../../utils/handlers";
import { Pacman, Ghost } from "../../utils/interfaces";
import EntityPoint from "../EntityPoint/";
import EntityPower from "../EntityPower";
import EntityPacman from "../EntityPacman";
import EntityGhost from "../EntityGhost";

type PlayBuilderProps = {
  mazeDefinition: number[][];
};

const PlayBuilder: FC<PlayBuilderProps> = ({ mazeDefinition }) => {
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

  const pacmanStarterPosition = startPositionHandler(mazeDefinition, "pacman");
  const pacmanCurrentPosition = pacmanStarterPosition;

  const pacmanCurrentDirections = positionChecker(
    pacmanStarterPosition[0],
    pacmanStarterPosition[1]
  );

  const pacmanNextRandomDirection = randomDirectionHandler(
    pacmanCurrentDirections
  );

  /*
  console.log(
    "Pacman starts on [" +
      pacmanStarterPosition +
      "], with possible directions: " +
      Object.values(pacmanCurrentDirections) +
      "; next move to: " +
      pacmanNextRandomDirection
  );
  */

  const ghostClydeStarterPosition = startPositionHandler(
    mazeDefinition,
    "clyde"
  );
  const ghostClydeCurrentPosition = ghostClydeStarterPosition;

  const ghostPinkyStarterPosition = startPositionHandler(
    mazeDefinition,
    "pinky"
  );
  const ghostPinkyCurrentPosition = ghostPinkyStarterPosition;

  const ghostInkyStarterPosition = startPositionHandler(mazeDefinition, "inky");
  const ghostInkyCurrentPosition = ghostInkyStarterPosition;

  const ghostBlinkyStarterPosition = startPositionHandler(
    mazeDefinition,
    "blinky"
  );
  const ghostBlinkyCurrentPosition = ghostBlinkyStarterPosition;

  return (
    <div className="game-actions-entities">
      {mazeDefinition.map((tileColumn, y) =>
        tileColumn.map((tile, x) => {
          if (tile === 31) {
            return <EntityPoint key={"tile-" + x + "-" + y} x={x} y={y} />;
          } else if (tile === 32) {
            return <EntityPower key={"tile-" + x + "-" + y} x={x} y={y} />;
          }
          return null;
        })
      )}
      <EntityPacman speed={250} currentPosition={pacmanCurrentPosition} />
      <EntityGhost
        ghostName="clyde"
        ghostState="inactive"
        speed={250}
        currentPosition={ghostClydeCurrentPosition}
      />
      <EntityGhost
        ghostName="inky"
        ghostState="inactive"
        speed={150}
        currentPosition={ghostInkyCurrentPosition}
      />
      <EntityGhost
        ghostName="pinky"
        ghostState="inactive"
        speed={450}
        currentPosition={ghostPinkyCurrentPosition}
      />
      <EntityGhost
        ghostName="blinky"
        ghostState="inactive"
        speed={300}
        currentPosition={ghostBlinkyCurrentPosition}
      />
    </div>
  );
};

export default PlayBuilder;
