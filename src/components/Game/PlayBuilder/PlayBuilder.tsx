import React, { FC, useEffect, useContext } from "react";
import "./PlayBuilder.css";
import { Directions, InhabitantNames } from "../../../utils/enums";
import { GAME_ACTIONS } from "../../../utils/actions";
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

  /*
    ------ WINDOW LISTENER FOR KEYBOARD ------
  */

  /* ----- KEYBOARD HANDLING ----- */

  function keyDownEventHandler(event: KeyboardEvent) {
    const { key, keyCode } = event;
    switch (keyCode) {
      case 37 /* ArrowLeft */:
      case 65 /* A */:
        console.log("direction: left, key: " + key);
        gameContext.dispatch({
          type: GAME_ACTIONS.CHANGE_PACMAN_DIRECTION,
          payload: {
            pacman: {
              entityCurrentDirection: [0, -1]
            }
          }
        });
        break;
      case 38 /* ArrowUp */:
      case 87 /* W */:
        console.log("direction: up, key: " + key);
        gameContext.dispatch({
          type: GAME_ACTIONS.CHANGE_PACMAN_DIRECTION,
          payload: {
            pacman: {
              entityCurrentDirection: [-1, 0]
            }
          }
        });
        break;
      case 39 /* ArrowRight */:
      case 68 /* D */:
        console.log("direction: right, key: " + key);
        gameContext.dispatch({
          type: GAME_ACTIONS.CHANGE_PACMAN_DIRECTION,
          payload: {
            pacman: {
              entityCurrentDirection: [0, 1]
            }
          }
        });
        break;
      case 40 /* ArrowDown */:
      case 83 /* S */:
        console.log("direction: down, key: " + key);
        gameContext.dispatch({
          type: GAME_ACTIONS.CHANGE_PACMAN_DIRECTION,
          payload: {
            pacman: {
              entityCurrentDirection: [1, 0]
            }
          }
        });
        break;
      case 13 /* Enter */:
        console.log(key + "pushed. Agreed");
        break;
      default:
        break;
    }
  }

  function escapeKeyEventHandler(event: KeyboardEvent) {
    const { key, keyCode } = event;
    if (keyCode === 27) {
      gameContext.dispatch({ type: GAME_ACTIONS.PAUSE_GAME });
    }
  }

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
            return <EntityPoint key={"point-" + x + "-" + y} x={x} y={y} />;
          } else if (tile === 32) {
            return <EntityPower key={"power-" + x + "-" + y} x={x} y={y} />;
          }
          return null;
        })
      )}
      <EntityPacman
        speed={gameContext.state.pacman.entitySpeed}
        currentPosition={gameContext.state.pacman.entityCurrentPosition}
        direction={gameContext.state.pacman.entityCurrentDirection}
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
