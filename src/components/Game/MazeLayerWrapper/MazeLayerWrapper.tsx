import React, { FC, useEffect, useRef, useCallback } from "react";
import MazeBuilder from "../MazeBuilder";
import PlayBuilder from "../PlayBuilder";
import GameInfoModal from "../GameInfoModal";
import LoadingPage from "../../../pages/LoadingPage";

import "./MazeLayerWrapper.css";
import {
  changeEntityDirection,
  changeGameStatus,
  gameLoaded,
  initiateGame,
  updateEntityCounters
} from "../../../utils/actions";
import { GameStateType, InhabitantNames } from "../../../utils/enums";
import {
  useGameState,
  useGameDispatch
} from "../../../state/PacmanGameContext";

type MazeLayerProps = {
  mazeArray: number[][];
  mazeID: number;
};

const MazeLayerWrapper: FC<MazeLayerProps> = ({ mazeArray, mazeID }) => {
  const state = useGameState();
  const dispatch = useGameDispatch();
  const playgroundWidth = mazeArray[0].length;
  const playgroundHeight = mazeArray.length;

  /*
    ------ REFERENCE REQUESTS FOR TIME LOOP ------
  */

  const requestRef = useRef<number>();
  const previousTimeRef = useRef<number>();
  /*
  function loopReset() {
    dispatch(resetLoop());
    requestRef.current = undefined;
    previousTimeRef.current = undefined;
  }
*/
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
        dispatch(changeEntityDirection(InhabitantNames.pacman, [0, -1]));
        break;
      case 38 /* ArrowUp */:
      case 87 /* W */:
        console.log("direction: up, key: " + key);
        dispatch(changeEntityDirection(InhabitantNames.pacman, [-1, 0]));
        break;
      case 39 /* ArrowRight */:
      case 68 /* D */:
        console.log("direction: right, key: " + key);
        dispatch(changeEntityDirection(InhabitantNames.pacman, [0, 1]));
        break;
      case 40 /* ArrowDown */:
      case 83 /* S */:
        console.log("direction: down, key: " + key);
        dispatch(changeEntityDirection(InhabitantNames.pacman, [1, 0]));
        break;
      case 13 /* Enter */:
        break;
      default:
        break;
    }
  }

  function escapeKeyEventHandler(event: KeyboardEvent) {
    const { key, keyCode } = event;
    if (keyCode === 27) {
      dispatch(changeGameStatus(GameStateType.paused));
    }
  }

  useEffect(() => {
    window.addEventListener("keydown", keyDownEventHandler);

    return () => {
      window.removeEventListener("keydown", keyDownEventHandler);
    };
  });

  useEffect(() => {
    window.addEventListener("keyup", escapeKeyEventHandler);

    return () => {
      window.removeEventListener("keyup", escapeKeyEventHandler);
    };
  });

  /* GAME TICK BASICS AND SETTINGS */

  function entityCounterDispatcher(
    entityIdentity: InhabitantNames,
    deltaTime: number
  ) {
    let newEntityDC =
      state.entity[entityIdentity].entityDeltaCounter + deltaTime;
    if (newEntityDC >= state.entity[entityIdentity].entitySpeed) {
      newEntityDC = newEntityDC - state.entity[entityIdentity].entitySpeed;

      dispatch(updateEntityCounters(entityIdentity, 1, newEntityDC));
    } else {
      dispatch(updateEntityCounters(entityIdentity, 0, newEntityDC));
    }
  }

  /*
  ------ THEM GAME LOOP ------
  */

  const gameLoop = useCallback(
    (time: number) => {
      if (previousTimeRef.current !== undefined && state !== undefined) {
        const deltaTime = time - previousTimeRef.current;

        entityCounterDispatcher(InhabitantNames.pacman, deltaTime);
        entityCounterDispatcher(InhabitantNames.clyde, deltaTime);
        entityCounterDispatcher(InhabitantNames.inky, deltaTime);
        entityCounterDispatcher(InhabitantNames.pinky, deltaTime);
        entityCounterDispatcher(InhabitantNames.blinky, deltaTime);
      }
      previousTimeRef.current = time;
      requestRef.current = requestAnimationFrame(gameLoop);
    },
    [state]
  );

  /*
    ------ STATE CHANGE EFFECTS ------
  */

  useEffect(() => {
    dispatch(initiateGame(mazeArray));
    dispatch(gameLoaded());
  }, [mazeArray, mazeID, dispatch]);

  useEffect(() => {
    if (state.game.gameState === GameStateType.running) {
      requestRef.current = requestAnimationFrame(gameLoop);
    } else {
      requestRef.current = undefined;
      previousTimeRef.current = undefined;
    }
    return () => {
      if (requestRef.current === undefined) {
        return;
      }
      cancelAnimationFrame(requestRef.current);
    };
  }, [state.game.gameState, gameLoop]);

  /*
  ------ ENTITY EVENT TRIGGER EFFECTS ------
  */
  /* PACMAN */
  useEffect(() => {
    if (state.entity.pacman.entityActionCounter !== 0) {
      console.log(
        "new pacman Action Triggered. counter: " +
          state.entity.pacman.entityActionCounter
      );
    }
  }, [state.entity.pacman.entityActionCounter]);

  /* CLYDE */
  useEffect(() => {
    if (state.entity.clyde.entityActionCounter !== 0) {
      console.log(
        "new clyde Action Triggered. counter: " +
          state.entity.clyde.entityActionCounter
      );
    }
  }, [state.entity.clyde.entityActionCounter]);

  /* INKY */
  useEffect(() => {
    if (state.entity.inky.entityActionCounter !== 0) {
      console.log(
        "new inky Action Triggered. counter: " +
          state.entity.inky.entityActionCounter
      );
    }
  }, [state.entity.inky.entityActionCounter]);

  /* PINKY */
  useEffect(() => {
    if (state.entity.pinky.entityActionCounter !== 0) {
      console.log(
        "new pinky Action Triggered. counter: " +
          state.entity.pinky.entityActionCounter
      );
    }
  }, [state.entity.pinky.entityActionCounter]);

  /* BLINKY */
  useEffect(() => {
    if (state.entity.blinky.entityActionCounter !== 0) {
      console.log(
        "new blinky Action Triggered. counter: " +
          state.entity.blinky.entityActionCounter
      );
    }
  }, [state.entity.blinky.entityActionCounter]);

  /* 
  ------ GAME PLAN RENDER ------ 
  */

  return (
    <div className="game-wrapper">
      <div className="game-action-bar">
        <p className="game-score">Score: {state.game.gameScore}</p>
      </div>
      {!state.game.gameLoaded && <LoadingPage />}
      {state.game.gameLoaded && (
        <div
          className="maze-layer-wrapper"
          style={{
            width: "calc(" + playgroundWidth + " * var(--tile-dim))",
            height: "calc(" + playgroundHeight + " * var(--tile-dim))"
          }}
        >
          <MazeBuilder mazeArray={mazeArray} />
          <PlayBuilder />
        </div>
      )}
      {state.game.gameLoaded && <GameInfoModal />}
    </div>
  );
};

export default MazeLayerWrapper;
