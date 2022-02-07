import "./styles.css";
import MazeLayerWrapper from "./components/MazeLayerWrapper";

import {
  PacmanMaze,
  PacmanPoints,
  PacmanPowerPoints,
  PacmanStartPosition,
  GhostStartPositions
} from "./assets/OriginalPacmanMaze";

export default function App() {
  return (
    <div className="App">
      <MazeLayerWrapper
        mazeArrayInput={PacmanMaze}
        pointsArrayInput={PacmanPoints}
        powerUpArrayInput={PacmanPowerPoints}
        pacmanStartInput={PacmanStartPosition}
        ghostsStartInput={GhostStartPositions}
      />
    </div>
  );
}
