export function positionChecker() {
  // it should get object coordinates, take same coordinates from generated maze and return class of tile on those coordinates in maze.
}

export function pacmanMovement(
  e: Event,
  currentPacmanX: number,
  currentPacmanY: number
) {
  // this should handle key inputs and moving pacman from current coordinates to new coordinates

  let newPacmanX: number;
  let newPacmanY: number;

  return [(newPacmanX = 0), (newPacmanY = 0)];
}

export function eatingPoint() {
  // this should handle changing point state when eaten, update score
}

export function eatingPowerUp() {
  // this should handle changing power up state when eaten, powering up pacman, making ghosts scared and updating score
}

export function updateScore() {
  // this should update score when point eaten, power up eaten, ghost eaten, reseting score when game over or game restart.
}
