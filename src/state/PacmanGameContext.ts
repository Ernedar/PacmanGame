import React, { createContext, useReducer } from "react";

import {
  Directions,
  InhabitantNames,
  GameStateType,
  GhostStates,
  PacManStates
} from "../utils/enums";
import { GAME_ACTIONS } from "../utils/actions";
import { startPositionHandler } from "../utils/handlers";
import {
  gameStateInterface,
  gameAction,
  IGameContext
} from "../utils/interfaces";
import initialGameState from "./initialState";

const GameContext = createContext({} as IGameContext);

function GameReducer(state: gameStateInterface, action: gameAction) {
  const { type, payload } = action;
  switch (type) {
    case GAME_ACTIONS.INIT_GAME:
      console.log("Game Initialization");
      return {
        ...state,
        pacman: {
          ...state.pacman,
          pacmanStartPosition: startPositionHandler(
            payload.mazeArrayInput,
            InhabitantNames.pacman
          )
        },
        ghosts: {
          ...state.ghosts,
          clyde: {
            ...state.ghosts.clyde,
            ghostStartPosition: startPositionHandler(
              payload.mazeArrayInput,
              InhabitantNames.clyde
            )
          },
          pinky: {
            ...state.ghosts.pinky,
            ghostStartPosition: startPositionHandler(
              payload.mazeArrayInput,
              InhabitantNames.pinky
            )
          },
          blinky: {
            ...state.ghosts.blinky,
            ghostStartPosition: startPositionHandler(
              payload.mazeArrayInput,
              InhabitantNames.blinky
            )
          },
          inky: {
            ...state.ghosts.inky,
            ghostStartPosition: startPositionHandler(
              payload.mazeArrayInput,
              InhabitantNames.inky
            )
          }
        }
      };
    case GAME_ACTIONS.START_GAME:
      console.log("Running");
      return {
        ...state,
        game: {
          ...state.game,
          gameState: GameStateType.running
        }
      };
    case GAME_ACTIONS.RESET_GAME:
      console.log("Reseted");
      /* RESET helper function needed, this is a mess, not even points and powers present. */
      return {
        ...state,
        game: {
          ...state.game,
          gameState: GameStateType.notstarted,
          gameScore: 0
        },
        pacman: {
          ...state.pacman,
          pacmanState: PacManStates.idle,
          pacmanCurrentPosition: state.pacman.entityStartPosition,
          pacmanCurrentDirection: Directions.none
        },
        ghosts: {
          ...state.ghosts,
          clyde: {
            ...state.ghosts.clyde,
            ghostState: GhostStates.idle,
            ghostCurrentPosition: state.ghosts.clyde.entityStartPosition,
            ghostCurrentDirection: Directions.none
          },
          pinky: {
            ...state.ghosts.pinky,
            ghostState: GhostStates.idle,
            ghostCurrentPosition: state.ghosts.pinky.entityStartPosition,
            ghostCurrentDirection: Directions.none
          },
          blinky: {
            ...state.ghosts.blinky,
            ghostState: GhostStates.idle,
            ghostCurrentPosition: state.ghosts.blinky.entityStartPosition,
            ghostCurrentDirection: Directions.none
          },
          inky: {
            ...state.ghosts.inky,
            ghostState: GhostStates.idle,
            ghostCurrentPosition: state.ghosts.inky.entityStartPosition,
            ghostCurrentDirection: Directions.none
          }
        }
      };
    case GAME_ACTIONS.PAUSE_GAME:
      return {
        ...state,
        game: {
          ...state.game,
          gameState: GameStateType.paused
        }
      };
    case GAME_ACTIONS.CONTINUE_GAME:
      console.log("Running again");
      return {
        ...state,
        game: {
          ...state.game,
          gameState: GameStateType.running
        }
      };
    case GAME_ACTIONS.LOSE_GAME:
      console.log("Lost");
      return {
        ...state,
        game: {
          ...state.game,
          gameState: GameStateType.lost
        }
      };
    case GAME_ACTIONS.FINISH_GAME:
      console.log("Won");
      return {
        ...state,
        game: {
          ...state.game,
          gameState: GameStateType.finished
        }
      };
    default:
      throw new Error(`Unhandled action type: ${type}`);
  }
}

function GameProvider({ children }) {
  const [state, dispatch] = useReducer(GameReducer, initialGameState);
  const value = { state, dispatch };

  return (
    <GameContext.Provider value={value}> {children} </GameContext.Provider>
  );
}

export { GameProvider };
