import React, { useContext } from "react";
import { GameStateType } from "../../../utils/enums";
import classNames from "classnames";

import "./GameInfoModal.css";
import { GAME_ACTIONS } from "../../../utils/actions";
import { GameContext } from "../MazeLayerWrapper/MazeLayerWrapper";

function GameInfoModal() {
  const gameContext = useContext(GameContext);
  const gameStateContextValue = gameContext.state.game.gameState;

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
            onClick={() =>
              gameContext.dispatch({
                type: GAME_ACTIONS.START_GAME
              })
            }
          >
            Start New Game
          </button>
          <button
            className={classNames("modal-btn", {
              "force-hidden": !(gameStateContextValue === GameStateType.paused)
            })}
            onClick={() =>
              gameContext.dispatch({
                type: GAME_ACTIONS.CONTINUE_GAME
              })
            }
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
            onClick={() =>
              gameContext.dispatch({
                type: GAME_ACTIONS.RESET_GAME
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
