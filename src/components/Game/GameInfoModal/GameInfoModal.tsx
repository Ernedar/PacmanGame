import React from "react";
import { GameStateType } from "../../../utils/enums";
import classNames from "classnames";
import { changeGameStatus } from "../../../utils/actions";
import {
  useGameState,
  useGameDispatch
} from "../../../state/PacmanGameContext";

import "./GameInfoModal.css";

function GameInfoModal() {
  const state = useGameState();
  const gameStateContextValue = state.game.gameState;
  const dispatch = useGameDispatch();

  const opened =
    gameStateContextValue === GameStateType.notstarted ||
    gameStateContextValue === GameStateType.paused ||
    gameStateContextValue === GameStateType.lost ||
    gameStateContextValue === GameStateType.finished;

  return (
    <div
      className={classNames("modal-wrapper", {
        opened: opened
      })}
    >
      <div className="modal-card">
        <div className="modal-card-header">
          <h4>PacMan Game</h4>
        </div>
        <div className="modal-card-body">
          <p
            className={classNames({
              "force-hidden": !(
                gameStateContextValue === GameStateType.notstarted
              )
            })}
          >
            Welcome to PacMan Game. Can you win? Can you eat all points before
            you will be eaten?
          </p>
          <p
            className={classNames({
              "force-hidden": !(gameStateContextValue === GameStateType.paused)
            })}
          >
            Game Paused. Would you like to resume or start over?
          </p>
          <p
            className={classNames({
              "force-hidden": !(
                gameStateContextValue === GameStateType.finished
              )
            })}
          >
            Con gratulations. You won. You final score is:
          </p>
          <p
            className={classNames({
              "force-hidden": !(gameStateContextValue === GameStateType.lost)
            })}
          >
            You got eaten. You final score is:
          </p>
        </div>
        <div className="modal-card-footer">
          <button
            className={classNames("modal-btn", {
              "force-hidden": !(
                gameStateContextValue === GameStateType.notstarted
              )
            })}
            onClick={() => {
              dispatch(changeGameStatus(GameStateType.running));
            }}
          >
            Start New Game
          </button>
          <button
            className={classNames("modal-btn", {
              "force-hidden": !(gameStateContextValue === GameStateType.paused)
            })}
            onClick={() => dispatch(changeGameStatus(GameStateType.running))}
          >
            Resume Game
          </button>
          <button
            className={classNames("modal-btn", {
              "force-hidden": !(
                gameStateContextValue === GameStateType.paused ||
                gameStateContextValue === GameStateType.lost ||
                gameStateContextValue === GameStateType.finished
              )
            })}
            onClick={() => dispatch(changeGameStatus(GameStateType.notstarted))}
          >
            Reset Game
          </button>
        </div>
      </div>
    </div>
  );
}

export default GameInfoModal;
