import {
  InhabitantNames,
  GameStateType,
  GhostStates,
  PacManStates,
  TileType,
  GameActionType
} from "../utils/enums";
import { populatePowerPoints, startPositionHandler } from "../utils/handlers";
import { gameStateInterface } from "../utils/interfaces";
import { GameActions } from "../utils/types";

export default function GameReducer(
  state: gameStateInterface,
  action: GameActions
): gameStateInterface {
  switch (action.type) {
    case GameActionType.InitiateGame:
      console.log("Game Initiated.");
      console.log(action.payload);
      return {
        ...state,
        game: {
          ...state.game,
          gameState: GameStateType.notstarted
        },
        entity: {
          ...state.entity,
          pacman: {
            ...state.entity.pacman,
            entityStartPosition: startPositionHandler(
              action.payload.mazeArray,
              InhabitantNames.pacman
            ),
            entityCurrentPosition: startPositionHandler(
              action.payload.mazeArray,
              InhabitantNames.pacman
            )
          },
          clyde: {
            ...state.entity.clyde,
            entityStartPosition: startPositionHandler(
              action.payload.mazeArray,
              InhabitantNames.clyde
            ),
            entityCurrentPosition: startPositionHandler(
              action.payload.mazeArray,
              InhabitantNames.clyde
            )
          },
          pinky: {
            ...state.entity.pinky,
            entityStartPosition: startPositionHandler(
              action.payload.mazeArray,
              InhabitantNames.pinky
            ),
            entityCurrentPosition: startPositionHandler(
              action.payload.mazeArray,
              InhabitantNames.pinky
            )
          },
          blinky: {
            ...state.entity.blinky,
            entityStartPosition: startPositionHandler(
              action.payload.mazeArray,
              InhabitantNames.blinky
            ),
            entityCurrentPosition: startPositionHandler(
              action.payload.mazeArray,
              InhabitantNames.blinky
            )
          },
          inky: {
            ...state.entity.inky,
            entityStartPosition: startPositionHandler(
              action.payload.mazeArray,
              InhabitantNames.inky
            ),
            entityCurrentPosition: startPositionHandler(
              action.payload.mazeArray,
              InhabitantNames.inky
            )
          }
        },
        points: populatePowerPoints(action.payload.mazeArray, TileType.point),
        powers: populatePowerPoints(action.payload.mazeArray, TileType.power)
      };
    case GameActionType.GameLoaded:
      console.log("Game is loaded.");
      return {
        ...state,
        game: {
          ...state.game,
          gameLoaded: true
        }
      };
    case GameActionType.ChangeGameStatus:
      if (action.payload.gameStatus === GameStateType.notstarted) {
        console.log("GameState: Reseted");
        /* RESET helper function needed, this is a mess, not even points and powers present. */
        return {
          ...state,
          game: {
            ...state.game,
            gameState: GameStateType.notstarted,
            gameScore: 0
          },
          entity: {
            ...state.entity,
            pacman: {
              ...state.entity.pacman,
              entityState: PacManStates.idle,
              entityCurrentPosition: state.entity.pacman.entityStartPosition,
              entityCurrentDirection: [0, 0]
            },
            clyde: {
              ...state.entity.clyde,
              entityState: GhostStates.idle,
              entityCurrentPosition: state.entity.clyde.entityStartPosition,
              entityCurrentDirection: [0, 0]
            },
            pinky: {
              ...state.entity.pinky,
              entityState: GhostStates.idle,
              entityCurrentPosition: state.entity.pinky.entityStartPosition,
              entityCurrentDirection: [0, 0]
            },
            blinky: {
              ...state.entity.blinky,
              entityState: GhostStates.idle,
              entityCurrentPosition: state.entity.blinky.entityStartPosition,
              entityCurrentDirection: [0, 0]
            },
            inky: {
              ...state.entity.inky,
              entityState: GhostStates.idle,
              entityCurrentPosition: state.entity.inky.entityStartPosition,
              entityCurrentDirection: [0, 0]
            }
          }
        };
      } else if (action.payload.gameStatus in GameStateType) {
        console.log("GameState: " + action.payload.gameStatus);
        return {
          ...state,
          game: {
            ...state.game,
            gameState: action.payload.gameStatus
          }
        };
      } else {
        return state;
      }
    case GameActionType.ChangeEntityDirection:
      if (action.payload.entity in InhabitantNames) {
        return {
          ...state,
          entity: {
            ...state.entity,
            [action.payload.entity]: {
              ...state.entity[action.payload.entity],
              entityCurrentDirection: action.payload.direction
            }
          }
        };
      } else {
        return state;
      }
    default:
      return state;
  }
}
