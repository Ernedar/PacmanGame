import React, { FC, useState, useEffect } from "react";
import "./PlayBuilder.css";
import { positionChecker } from "../../../utils/utils";
import { Ghost, Pacman } from "../../../utils/interfaces";
import {
  randomDirectionHandler,
  startPositionHandler,
  keyDownEventHandler,
  escapeKeyEventHandler
} from "../../../utils/handlers";
import {
  GameStateType,
  Directions,
  InhabitantNames,
  PacManStates,
  GhostStates,
  GhostBehavior
} from "../../../utils/enums";
import EntityPoint from "../EntityPoint";
import EntityPower from "../EntityPower";
import EntityPacman from "../EntityPacman";
import EntityGhost from "../EntityGhost";

type PlayBuilderProps = {
  mazeDefinition: number[][];
};

const PlayBuilder: FC<PlayBuilderProps> = ({ mazeDefinition }) => {
  const [gameState, handleGameState] = useState<GameStateType>(
    GameStateType.notstarted
  );
  const [gameScore, handleGameScore] = useState<number>(0);

  /* ----- PACMAN ----- */

  const [pacmanCurrentPosition, handlePacmanPosition] = useState<number[]>(
    startPositionHandler(mazeDefinition, InhabitantNames.pacman)
  );

  const pacmanAvailableDirections = positionChecker(
    pacmanCurrentPosition[0],
    pacmanCurrentPosition[1]
  );

  const [pacmanCurrentDirection, handlePacmanDirection] = useState<Directions>(
    Directions.none
  );

  const [pacmanState, handlePacmanStates] = useState<PacManStates>(
    PacManStates.idle
  );

  const pacmanSpeed = 250;

  /* ----- GHOSTS ----- */

  /* PINKY */

  const [ghostPinkyCurrentPosition, handleGhostPinkyPosition] = useState<
    number[]
  >(startPositionHandler(mazeDefinition, InhabitantNames.pinky));

  const [ghostPinkyState, handleGhostPinkyState] = useState<GhostStates>(
    GhostStates.idle
  );

  const ghostPinkySpeed = 450;

  /* INKY */

  const [ghostInkyCurrentPosition, handleGhostInkyPosition] = useState<
    number[]
  >(startPositionHandler(mazeDefinition, InhabitantNames.inky));

  const [ghostInkyState, handleGhostInkyState] = useState<GhostStates>(
    GhostStates.idle
  );

  const ghostInkySpeed = 150;

  /* BLINKY */

  const [ghostBlinkyCurrentPosition, handleGhostBlinkyPosition] = useState<
    number[]
  >(startPositionHandler(mazeDefinition, InhabitantNames.blinky));

  const [ghostBlinkyState, handleGhostBlinkyState] = useState<GhostStates>(
    GhostStates.idle
  );

  const ghostBlinkySpeed = 300;

  /* CLYDE */

  const [ghostClydeCurrentPosition, handleGhostClydePosition] = useState<
    number[]
  >(startPositionHandler(mazeDefinition, InhabitantNames.clyde));

  const [ghostClydeState, handleGhostClydeState] = useState<GhostStates>(
    GhostStates.idle
  );

  const ghostClydeSpeed = 250;

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
        speed={pacmanSpeed}
        currentPosition={pacmanCurrentPosition}
      />
      <EntityGhost
        ghostName={GhostBehavior.clyde}
        ghostState={ghostClydeState}
        speed={ghostClydeSpeed}
        currentPosition={ghostClydeCurrentPosition}
      />
      <EntityGhost
        ghostName={GhostBehavior.inky}
        ghostState={ghostInkyState}
        speed={ghostInkySpeed}
        currentPosition={ghostInkyCurrentPosition}
      />
      <EntityGhost
        ghostName={GhostBehavior.pinky}
        ghostState={ghostPinkyState}
        speed={ghostPinkySpeed}
        currentPosition={ghostPinkyCurrentPosition}
      />
      <EntityGhost
        ghostName={GhostBehavior.blinky}
        ghostState={ghostBlinkyState}
        speed={ghostBlinkySpeed}
        currentPosition={ghostBlinkyCurrentPosition}
      />
    </div>
  );
};

export default PlayBuilder;
