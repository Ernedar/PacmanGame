import React from "react";
import { GameStateType } from "../../utils/enums";
import classNames from "classnames";

import "./GameInfoModal.css";
import { GAME_ACTIONS } from "../../utils/actions";

function GameInfoModal({ gameStateType, dispatch }) {
  const opened =
    gameStateType === GameStateType.notstarted ||
    gameStateType === GameStateType.paused ||
    gameStateType === GameStateType.finished ||
    gameStateType === GameStateType.lost;

  return (
    <div
      className={classNames("modal-wrapper", {
        opened: opened,
        closed: !opened
      })}
    >
      <div className="modal-card">
        <div className="modal-card-header">
          <h4>PacMan Game</h4>
        </div>
        <div className="modal-card-body">
          <p
            className={classNames({
              "force-hidden": !(gameStateType === GameStateType.notstarted)
            })}
          >
            Welcome to PacMan Game. Can you win? Can you eat all points before
            you will be eaten?
          </p>
          <p
            className={classNames({
              "force-hidden": !(gameStateType === GameStateType.paused)
            })}
          >
            Game Paused. Would you like to resume or start over?
          </p>
          <p
            className={classNames({
              "force-hidden": !(gameStateType === GameStateType.finished)
            })}
          >
            Con gratulations. You won. You final score is:
          </p>
          <p
            className={classNames({
              "force-hidden": !(gameStateType === GameStateType.lost)
            })}
          >
            You got eaten. You final score is:
          </p>
        </div>
        <div className="modal-card-footer">
          <button
            className={classNames("modal-btn", {
              "force-hidden": gameStateType === GameStateType.paused
            })}
            onClick={() =>
              dispatch({
                type: GAME_ACTIONS.START_GAME,
                payload: { gameState: GameStateType.running }
              })
            }
          >
            Start New Game
          </button>
          <button
            className={classNames("modal-btn", {
              "force-hidden": !(gameStateType === GameStateType.paused)
            })}
            onClick={() =>
              dispatch({
                type: GAME_ACTIONS.CONTINUE_GAME,
                payload: { gameState: GameStateType.running }
              })
            }
          >
            Resume Game
          </button>
          <button
            className={classNames("modal-btn", {
              "force-hidden": !(gameStateType === GameStateType.paused)
            })}
            onClick={() =>
              dispatch({
                type: GAME_ACTIONS.RESET_GAME,
                payload: { gameState: GameStateType.notstarted, gameScore: 0 }
              })
            }
          >
            Reset Game
          </button>
        </div>
      </div>
    </div>
  );
}

export default GameInfoModal;
