import { GameStateType, GhostStates, PacManStates } from "../utils/enums";

/* ----- GAME SETTINGS ----- */

const initialGameState = {
  /* STATES
   * Game is default in mode "not-started" in that case, overlay is visible with welcome message and "Start Game" button.
   * On pushing the button game will change state to "Running" which will allow timers to cycle therefore ghosts to move and so on.
   * Game can be put on "pause" by default by hitting 'Escape' key which will provide another modal window with reset or continue.
   * On reset score is zeroed, entities back on their places and game put to state "not-started".
   * State "finished" is set on game when all points are eaten or pacman is dead.
   *
   * SCORE
   * +1 point is for EntityPoint eaten, +10 points is for EntityPower eaten and +200 for eaten scared Ghosts.
   */

  game: {
    gameState: GameStateType.notstarted,
    gameScore: 0,
    gameLoaded: false
  },
  pacman: {
    pacmanState: PacManStates.idle,
    entityStartPosition: [],
    entityCurrentPositon: [],
    entityCurrentDirection: [0, 0],
    entitySpeed: 250
  },
  ghosts: {
    clyde: {
      ghostState: GhostStates.idle,
      entityStartPosition: [],
      entityCurrentPositon: [],
      entityCurrentDirection: [0, 0],
      entitySpeed: 250
    },
    pinky: {
      ghostState: GhostStates.idle,
      entityStartPosition: [],
      entityCurrentPositon: [],
      entityCurrentDirection: [0, 0],
      entitySpeed: 450
    },
    blinky: {
      ghostState: GhostStates.idle,
      entityStartPosition: [],
      entityCurrentPositon: [],
      entityCurrentDirection: [0, 0],
      entitySpeed: 300
    },
    inky: {
      ghostState: GhostStates.idle,
      entityStartPosition: [],
      entityCurrentPositon: [],
      entityCurrentDirection: [0, 0],
      entitySpeed: 150
    }
  },
  points: [],
  powers: []
};

export default initialGameState;
