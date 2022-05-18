import {
  Directions,
  GameStateType,
  GhostStates,
  PacManStates
} from "../utils/enums";

const initialGameState = {
  game: {
    gameState: GameStateType.notstarted,
    gameScore: 0
  },
  pacman: {
    pacmanState: PacManStates.idle,
    pacmanStartPosition: [],
    pacmanCurrentPositon: [],
    pacmanCurrentDirection: Directions.none,
    pacmanSpeed: 250
  },
  ghosts: {
    clyde: {
      ghostState: GhostStates.idle,
      ghostStartPosition: [],
      ghostCurrentPositon: [],
      ghostCurrentDirection: Directions.none,
      ghostSpeed: 250
    },
    pinky: {
      ghostState: GhostStates.idle,
      ghostStartPosition: [],
      ghostCurrentPositon: [],
      ghostCurrentDirection: Directions.none,
      ghostSpeed: 450
    },
    blinky: {
      ghostState: GhostStates.idle,
      ghostStartPosition: [],
      ghostCurrentPositon: [],
      ghostCurrentDirection: Directions.none,
      ghostSpeed: 300
    },
    inky: {
      ghostState: GhostStates.idle,
      ghostStartPosition: [],
      ghostCurrentPositon: [],
      ghostCurrentDirection: Directions.none,
      ghostSpeed: 150
    }
  },
  points: [],
  powers: []
};

export default initialGameState;
