import React, { FC, useState, useEffect } from "react";
import "./PlayBuilder.css";
import { positionChecker } from "../../utils/utils";
import {
  GhostStates,
  PacManStates,
  Directions,
  GhostBehavior,
  GameState
} from "../../utils/types";
import { Ghost, Pacman } from "../../utils/interfaces";
import {
  randomDirectionHandler,
  startPositionHandler,
  keyDownEventHandler,
  escapeKeyEventHandler
} from "../../utils/handlers";
import EntityPoint from "../EntityPoint/";
import EntityPower from "../EntityPower";
import EntityPacman from "../EntityPacman";
import EntityGhost from "../EntityGhost";

type PlayBuilderProps = {
  mazeDefinition: number[][];
};

const PlayBuilder: FC<PlayBuilderProps> = ({ mazeDefinition }) => {
  /* ----- GAME SETTINGS ----- */

  /* STATES
   * Game is default in mode "not-started" in that case, overlay is visible with welcome message and "Start Game" button.
   * On pushing the button game will change state to "Running" which will allow timers to cycle therefore ghosts to move and so on.
   * Game can be put on "pause" by default by hitting 'Escape' key which will provide another modal window with reset or continue.
   * On reset score is zeroed, entities back on their places and game put to state "not-started".
   * State "finished" is set on game when all points are eaten or pacman is dead.
   *
   * SCORE
   * +1 point is for EntityPoint eaten, +10 points is for EntityPower eaten and +200 for eaten scared Ghosts.
   */

  const [gameState, handleGameState] = useState<GameState>("not-started");
  const [gameScore, handleGameScore] = useState<number>(0);

  /* ----- PACMAN ----- */

  const [pacmanCurrentPosition, handlePacmanPosition] = useState<number[]>(
    startPositionHandler(mazeDefinition, "pacman")
  );

  const pacmanAvailableDirections = positionChecker(
    pacmanCurrentPosition[0],
    pacmanCurrentPosition[1]
  );

  const [pacmanCurrentDirection, handlePacmanDirection] = useState<Directions>(
    "none"
  );

  const [pacmanState, handlePacmanStates] = useState<PacManStates>("inactive");

  const pacmanSpeed = 250;

  /* ----- GHOSTS ----- */

  /* PINKY */

  const [ghostPinkyCurrentPosition, handleGhostPinkyPosition] = useState<
    number[]
  >(startPositionHandler(mazeDefinition, "pinky"));

  const [ghostPinkyState, handleGhostPinkyState] = useState<GhostStates>(
    "inactive"
  );

  const ghostPinkySpeed = 450;

  /* INKY */

  const [ghostInkyCurrentPosition, handleGhostInkyPosition] = useState<
    number[]
  >(startPositionHandler(mazeDefinition, "inky"));

  const [ghostInkyState, handleGhostInkyState] = useState<GhostStates>(
    "inactive"
  );

  const ghostInkySpeed = 150;

  /* BLINKY */

  const [ghostBlinkyCurrentPosition, handleGhostBlinkyPosition] = useState<
    number[]
  >(startPositionHandler(mazeDefinition, "blinky"));

  const [ghostBlinkyState, handleGhostBlinkyState] = useState<GhostStates>(
    "inactive"
  );

  const ghostBlinkySpeed = 300;

  /* CLYDE */

  const [ghostClydeCurrentPosition, handleGhostClydePosition] = useState<
    number[]
  >(startPositionHandler(mazeDefinition, "clyde"));

  const [ghostClydeState, handleGhostClydeState] = useState<GhostStates>(
    "inactive"
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
        ghostName="clyde"
        ghostState={ghostClydeState}
        speed={ghostClydeSpeed}
        currentPosition={ghostClydeCurrentPosition}
      />
      <EntityGhost
        ghostName="inky"
        ghostState={ghostInkyState}
        speed={ghostInkySpeed}
        currentPosition={ghostInkyCurrentPosition}
      />
      <EntityGhost
        ghostName="pinky"
        ghostState={ghostPinkyState}
        speed={ghostPinkySpeed}
        currentPosition={ghostPinkyCurrentPosition}
      />
      <EntityGhost
        ghostName="blinky"
        ghostState={ghostBlinkyState}
        speed={ghostBlinkySpeed}
        currentPosition={ghostBlinkyCurrentPosition}
      />
    </div>
  );
};

export default PlayBuilder;
