import "./styles.css";
import MazeBuilder from "./components/MazeBuilder";

import PacmanMaze from "./assets/OriginalPacmanMaze";

export default function App() {
  return (
    <div className="App">
      <MazeBuilder mazeArray={PacmanMaze} />
    </div>
  );
}
