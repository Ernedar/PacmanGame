import "./styles.css";
import MazeLayerWrapper from "./components/MazeLayerWrapper";

import {
  PacmanMaze,
  PacmanStartPosition,
  GhostStartPositions
} from "./assets/OriginalPacmanMaze";

export default function App() {
  return (
    <div className="App">
      <MazeLayerWrapper
        mazeArrayInput={PacmanMaze}
        pacmanStartInput={PacmanStartPosition}
        ghostsStartInput={GhostStartPositions}
      />
    </div>
  );
}
