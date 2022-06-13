import React from "react";
import { Routes, Route } from "react-router-dom";

/* PAGES COMPONENTS */
import Navigation from "./pages/Navigation";
import HomePage from "./pages/HomePage";
import MazeLayerWrapper from "./components/Game/MazeLayerWrapper";
import MazeDesigner from "./components/Designer/DesignerContainer";

/* MAZE IMPORTS */

import mazesJSON from "./assets/prepMazes.json";

/* CORE ROUTER */

export default function App() {
  return (
    <div className="App main-container">
      <Navigation jsonImport={mazesJSON.mazes} />

      <Routes>
        <Route exact path="/" element={<HomePage />} />

        {mazesJSON.mazes.map((id, i) => (
          <Route
            key={mazesJSON.mazes[i].id}
            exact
            path={"/" + mazesJSON.mazes[i].linktag}
            element={
              <MazeLayerWrapper mazeArrayInput={mazesJSON.mazes[i].mazeArray} />
            }
          />
        ))}
        <Route exact path="/designer" element={<MazeDesigner />} />
      </Routes>
    </div>
  );
}
