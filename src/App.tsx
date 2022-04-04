import "./styles.css";
import MazeLayerWrapper from "./components/MazeLayerWrapper";

import { PacmanMaze } from "./assets/OriginalPacmanMaze";

export default function App() {
  return (
    <div className="App">
      <MazeLayerWrapper mazeArrayInput={PacmanMaze} />
    </div>
  );
}
