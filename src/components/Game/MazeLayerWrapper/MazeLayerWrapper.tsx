import React, { FC, createContext, useEffect, useReducer } from "react";
import MazeBuilder from "../MazeBuilder";
import PlayBuilder from "../PlayBuilder";
import GameInfoModal from "../GameInfoModal";
import {
  Directions,
  InhabitantNames,
  GameStateType,
  GhostStates,
  PacManStates
} from "../../../utils/enums";
import { GAME_ACTIONS } from "../../../utils/actions";
import { startPositionHandler } from "../../../utils/handlers";
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
      console.log("Game Initialization");
      console.log(payload);
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
    case GAME_ACTIONS.GAME_LOADED:
      return {
        ...state,
        game: {
          ...state.game,
          gameLoaded: true
        }
      };
    case GAME_ACTIONS.GAME_TICK:
      return {
        ...state
      };
    default:
      return state;
  }
}

const MazeLayerWrapper: FC<MazeLayerProps> = ({ mazeArrayInput, mazeID }) => {
  const [state, dispatch] = useReducer(GameReducer, initialGameState);
  const value = { state, dispatch };

  console.log("----- GamePageWrapper -----");
  console.log("current mazeID: " + mazeID);

  const playgroundWidth = mazeArrayInput[0].length;
  const playgroundHeight = mazeArrayInput.length;

  console.log(
    "Current Game Maze Dimensions: " + playgroundWidth + ", " + playgroundHeight
  );

  /* GAME TICK BASICS AND SETTINGS */

  /* prepare selector for different parts of state and helper functions */

  useEffect(() => {
    console.log("effect on start");
    dispatch({
      type: GAME_ACTIONS.INIT_GAME,
      payload: {
        mazeArrayInput: mazeArrayInput
      }
    });
    dispatch({ type: GAME_ACTIONS.GAME_LOADED });
  }, [mazeArrayInput, mazeID]);
  console.log(state);
  console.log(state.pacman);

  console.log(
    "After Init Effect Pacman Starter Pos: " + state.pacman.entityStartPosition
  );
  console.log(
    "After Init Effect Clyde Starter Pos: " +
      state.ghosts.clyde.entityStartPosition
  );
  console.log(
    "After Init Effect Pinky Starter Pos: " +
      state.ghosts.inky.entityStartPosition
  );
  console.log(
    "After Init Effect Blinky Starter Pos: " +
      state.ghosts.blinky.entityStartPosition
  );
  console.log(
    "After Init Effect Inky Starter Pos: " +
      state.ghosts.pinky.entityStartPosition
  );
  return (
    <GameContext.Provider value={value}>
      <div className="game-wrapper">
        <div className="game-action-bar">
          <p className="game-score">Score: {state.game.gameScore}</p>
        </div>
        <div
          className="maze-layer-wrapper"
          style={{
            width: "calc(" + playgroundWidth + " * var(--tile-dim))",
            height: "calc(" + playgroundHeight + " * var(--tile-dim))"
          }}
        >
          <MazeBuilder mazeArray={mazeArrayInput} />
          {state.game.gameLoaded && (
            <PlayBuilder mazeDefinition={mazeArrayInput} />
          )}
        </div>
        <GameInfoModal />
      </div>
    </GameContext.Provider>
  );
};

export default MazeLayerWrapper;
