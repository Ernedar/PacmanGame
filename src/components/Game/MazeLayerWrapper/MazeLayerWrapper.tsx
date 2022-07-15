import React, { FC, useEffect } from "react";
import MazeBuilder from "../MazeBuilder";
import PlayBuilder from "../PlayBuilder";
import GameInfoModal from "../GameInfoModal";
import LoadingPage from "../../../pages/LoadingPage";

import "./MazeLayerWrapper.css";
import {
  changeEntityDirection,
  changeGameStatus,
  gameLoaded,
  initiateGame
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
        console.log(key + "pushed. Agreed");
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

  /* prepare selector for different parts of state and helper functions */

  useEffect(() => {
    dispatch(initiateGame(mazeArray));
    dispatch(gameLoaded());
  }, [mazeArray, mazeID, dispatch]);

  useEffect(() => {
    console.log("GameState changed to: " + state.game.gameState);
  }, [state.game.gameState]);

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
