import React from "react";
import { Routes, Route } from "react-router-dom";

/* PAGES COMPONENTS */
import Navigation from "./pages/Navigation";
import HomePage from "./pages/HomePage";
import MazeLayerWrapper from "./components/Game/MazeLayerWrapper";
import MazeDesigner from "./components/Designer/DesignerContainer";

/* MAZE IMPORTS */

import { PacmanMaze } from "./assets/OriginalPacmanMaze";
import { FenixMaze } from "./assets/FenixPacmanMaze";
import { ZlinFourMaze } from "./assets/ZlinFourMaze";

/* CORE ROUTER */

export default function App() {
  return (
    <div className="App main-container">
      <Navigation />

      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route
          exact
          path="/PacmanMaze"
          element={<MazeLayerWrapper mazeArrayInput={PacmanMaze} />}
        />
        <Route
          exact
          path="/FenixMaze"
          element={<MazeLayerWrapper mazeArrayInput={FenixMaze} />}
        />
        <Route
          exact
          path="/ZlinFourMaze"
          element={<MazeLayerWrapper mazeArrayInput={ZlinFourMaze} />}
        />
        <Route exact path="/designer" element={<MazeDesigner />} />
      </Routes>
    </div>
  );
}
