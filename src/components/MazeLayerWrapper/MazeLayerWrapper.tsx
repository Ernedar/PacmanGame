import React, { FC, useEffect, useReducer } from "react";
import MazeBuilder from "../MazeBuilder";
import PlayBuilder from "../PlayBuilder";
import GameInfoModal from "../GameInfoModal";
import {
  Directions,
  InhabitantNames,
  GameStateType,
  GhostStates,
  PacManStates
} from "../../utils/enums";
import { GAME_ACTIONS } from "../../utils/actions";
import {
  randomDirectionHandler,
  startPositionHandler,
  keyDownEventHandler,
  escapeKeyEventHandler
} from "../../utils/handlers";
import initialGameState from "../../state/initialState";

import "./MazeLayerWrapper.css";

type MazeLayerProps = {
  mazeArrayInput: number[][];
};

function selectGameState(state) {
  return state.game.gameState;
}

function updateAllGhosts(ghosts, values = {}) {
  const updatedObject = Object.keys(ghosts).reduce((acc, ghostName) => {
    return {
      ...acc,
      [ghostName]: { ...ghosts[ghostName], ...values }
    };
  }, {});
}

function GameReducer(state, action) {
  switch (action.type) {
    case GAME_ACTIONS.INIT_GAME:
      console.log("First Initialization");
      return {
        ...state,
        pacman: {
          ...state.pacman,
          pacmanStartPosition: startPositionHandler(
            action.payload.mazeArrayInput,
            InhabitantNames.pacman
          )
        }
      };
    case GAME_ACTIONS.START_GAME:
      console.log("Running");
      updateAllGhosts(state.ghosts, { ghostState: GhostStates.hunting });
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
          pacmanCurrentPosition: state.pacman.pacmanStartPosition,
          pacmanCurrentDirection: Directions.none
        },
        ghosts: {
          ...state.ghosts,
          clyde: {
            ...state.ghosts.clyde,
            ghostState: GhostStates.idle,
            ghostCurrentPosition: state.ghosts.clyde.ghostStartPosition,
            ghostCurrentDirection: Directions.none
          },
          pinky: {
            ...state.ghosts.pinky,
            ghostState: GhostStates.idle,
            ghostCurrentPosition: state.ghosts.pinky.ghostStartPosition,
            ghostCurrentDirection: Directions.none
          },
          blinky: {
            ...state.ghosts.blinky,
            ghostState: GhostStates.idle,
            ghostCurrentPosition: state.ghosts.blinky.ghostStartPosition,
            ghostCurrentDirection: Directions.none
          },
          inky: {
            ...state.ghosts.cinky,
            ghostState: GhostStates.idle,
            ghostCurrentPosition: state.ghosts.inky.ghostStartPosition,
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
        },
        pacman: {
          ...state.pacman,
          pacmanState: PacManStates.idle
        },
        ghosts: updateAllGhosts(state.ghosts, { ghostState: GhostStates.idle })
      };
    case GAME_ACTIONS.GAME_TICK:
      console.log(state.pacman);
      return {
        ...state
      };
    default:
      return state;
  }
}

const MazeLayerWrapper: FC<MazeLayerProps> = ({ mazeArrayInput }) => {
  const [state, dispatch] = useReducer(GameReducer, initialGameState);
  const gameState = selectGameState(state);

  const playgroundWidth = mazeArrayInput[0].length;
  const playgroundHeight = mazeArrayInput.length;

  /* GAME TICK BASICS AND SETTINGS */

  /* prepare selector for different parts of state and helper functions */

  useEffect(() => {
    let gameTick = null;

    if (gameState === GameStateType.running) {
      dispatch({ type: GAME_ACTIONS.GAME_TICK });
      /*  gameTick = setInterval(() => {
        dispatch({ type: GAME_ACTIONS.GAME_TICK });
      }, 100); > Look at request animation frame */
    } else {
      if (gameTick) {
        clearInterval(gameTick);
      }
    }
  }, [gameState]);

  useEffect(() => {
    dispatch({ type: GAME_ACTIONS.INIT_GAME, payload: { mazeArrayInput } });
  }, [mazeArrayInput]);

  return (
    <div className="main-wrapper">
      <div
        className="maze-layer-wrapper"
        style={{
          width: "calc(" + playgroundWidth + " * var(--tile-dim))",
          height: "calc(" + playgroundHeight + " * var(--tile-dim))"
        }}
      >
        <MazeBuilder mazeArray={mazeArrayInput} />
        <PlayBuilder mazeDefinition={mazeArrayInput} />
      </div>
      <GameInfoModal gameStateType={state.game.gameState} dispatch={dispatch} />
    </div>
  );
};

export default MazeLayerWrapper;
