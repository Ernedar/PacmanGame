import React, { FC, createContext, useEffect, useReducer } from "react";
import MazeBuilder from "../MazeBuilder";
import PlayBuilder from "../PlayBuilder";
import GameInfoModal from "../GameInfoModal";
import {
  InhabitantNames,
  GameStateType,
  GhostStates,
  PacManStates,
  TileType
} from "../../../utils/enums";
import { GAME_ACTIONS } from "../../../utils/actions";
import {
  populatePowerPoints,
  startPositionHandler
} from "../../../utils/handlers";
import {
  gameStateInterface,
  gameAction,
  IGameContext
} from "../../../utils/interfaces";
import initialGameState from "../../../state/initialState";

import "./MazeLayerWrapper.css";

export const GameContext = createContext({} as IGameContext);

type MazeLayerProps = {
  mazeArrayInput: number[][];
  mazeID: number;
};

function GameReducer(state: gameStateInterface, action: gameAction) {
  const { type, payload } = action;
  switch (type) {
    case GAME_ACTIONS.INIT_GAME:
      return {
        ...state,
        game: {
          ...state.game,
          gameState: GameStateType.notstarted
        },
        pacman: {
          ...state.pacman,
          entityStartPosition: startPositionHandler(
            payload.mazeArrayInput,
            InhabitantNames.pacman
          ),
          entityCurrentPosition: startPositionHandler(
            payload.mazeArrayInput,
            InhabitantNames.pacman
          )
        },
        ghosts: {
          ...state.ghosts,
          clyde: {
            ...state.ghosts.clyde,
            entityStartPosition: startPositionHandler(
              payload.mazeArrayInput,
              InhabitantNames.clyde
            ),
            entityCurrentPosition: startPositionHandler(
              payload.mazeArrayInput,
              InhabitantNames.clyde
            )
          },
          pinky: {
            ...state.ghosts.pinky,
            entityStartPosition: startPositionHandler(
              payload.mazeArrayInput,
              InhabitantNames.pinky
            ),
            entityCurrentPosition: startPositionHandler(
              payload.mazeArrayInput,
              InhabitantNames.pinky
            )
          },
          blinky: {
            ...state.ghosts.blinky,
            entityStartPosition: startPositionHandler(
              payload.mazeArrayInput,
              InhabitantNames.blinky
            ),
            entityCurrentPosition: startPositionHandler(
              payload.mazeArrayInput,
              InhabitantNames.blinky
            )
          },
          inky: {
            ...state.ghosts.inky,
            entityStartPosition: startPositionHandler(
              payload.mazeArrayInput,
              InhabitantNames.inky
            ),
            entityCurrentPosition: startPositionHandler(
              payload.mazeArrayInput,
              InhabitantNames.inky
            )
          }
        },
        points: populatePowerPoints(payload.mazeArrayInput, TileType.point),
        powers: populatePowerPoints(payload.mazeArrayInput, TileType.power)
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
          pacmanCurrentDirection: [0, 0]
        },
        ghosts: {
          ...state.ghosts,
          clyde: {
            ...state.ghosts.clyde,
            ghostState: GhostStates.idle,
            ghostCurrentPosition: state.ghosts.clyde.entityStartPosition,
            ghostCurrentDirection: [0, 0]
          },
          pinky: {
            ...state.ghosts.pinky,
            ghostState: GhostStates.idle,
            ghostCurrentPosition: state.ghosts.pinky.entityStartPosition,
            ghostCurrentDirection: [0, 0]
          },
          blinky: {
            ...state.ghosts.blinky,
            ghostState: GhostStates.idle,
            ghostCurrentPosition: state.ghosts.blinky.entityStartPosition,
            ghostCurrentDirection: [0, 0]
          },
          inky: {
            ...state.ghosts.inky,
            ghostState: GhostStates.idle,
            ghostCurrentPosition: state.ghosts.inky.entityStartPosition,
            ghostCurrentDirection: [0, 0]
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
    case GAME_ACTIONS.GAME_LOADED:
      return {
        ...state,
        game: {
          ...state.game,
          gameLoaded: true
        }
      };
    case GAME_ACTIONS.CHANGE_PACMAN_DIRECTION:
      return {
        ...state,
        pacman: {
          ...state.pacman,
          entityCurrentDirection: payload.pacman.entityCurrentDirection
        }
      };
    default:
      return state;
  }
}

const MazeLayerWrapper: FC<MazeLayerProps> = ({ mazeArrayInput, mazeID }) => {
  const [state, dispatch] = useReducer(GameReducer, initialGameState);
  const value = { state, dispatch };

  const playgroundWidth = mazeArrayInput[0].length;
  const playgroundHeight = mazeArrayInput.length;

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
        dispatch({
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
        dispatch({
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
        dispatch({
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
        dispatch({
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
      dispatch({ type: GAME_ACTIONS.PAUSE_GAME });
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

  /* GAME TICK BASICS AND SETTINGS */

  /* prepare selector for different parts of state and helper functions */

  useEffect(() => {
    dispatch({
      type: GAME_ACTIONS.INIT_GAME,
      payload: {
        mazeArrayInput: mazeArrayInput
      }
    });
    dispatch({ type: GAME_ACTIONS.GAME_LOADED });
  }, [mazeArrayInput, mazeID]);

  useEffect(() => {
    console.log("GameState changed to: " + state.game.gameState);
  }, [state.game.gameState]);

  return (
    <GameContext.Provider value={value}>
      <div className="game-wrapper">
        <div className="game-action-bar">
          <p className="game-score">Score: {state.game.gameScore}</p>
        </div>
        {!state.game.gameLoaded && <div>loading</div>}
        {state.game.gameLoaded && (
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
        )}
        {state.game.gameLoaded && <GameInfoModal />}
      </div>
    </GameContext.Provider>
  );
};

export default MazeLayerWrapper;
