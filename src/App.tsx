import React from "react";
import { Routes, Route } from "react-router-dom";

/* PAGES COMPONENTS */
import Navigation from "./pages/Navigation";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import LoadingPage from "./pages/LoadingPage";
import { GameContextProvider } from "./state/PacmanGameContext";

/* MAZE IMPORTS */

import mazesJSON from "./assets/prepMazes.json";

/* PAGES LAZY LOADING */

const LazyDesigner = React.lazy(() =>
  import("./components/Designer/DesignerContainer")
);
const LazyMaze = React.lazy(() => import("./components/Game/MazeLayerWrapper"));

/* CORE ROUTER */

export default function App() {
  return (
    <div className="App main-container">
      <Navigation jsonImport={mazesJSON.mazes} />

      <Routes>
        <Route path="/" element={<LoadingPage />} />

        {mazesJSON.mazes.map((id, i) => (
          <Route
            key={mazesJSON.mazes[i].id}
            path={"/mazes/" + mazesJSON.mazes[i].linktag}
            element={
              <React.Suspense fallback={<LoadingPage />}>
                <GameContextProvider>
                  <LazyMaze
                    mazeArray={mazesJSON.mazes[i].mazeArray}
                    mazeID={mazesJSON.mazes[i].id}
                  />
                </GameContextProvider>
              </React.Suspense>
            }
          />
        ))}
        <Route
          path="designer"
          element={
            <React.Suspense fallback={<LoadingPage />}>
              <LazyDesigner />
            </React.Suspense>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
