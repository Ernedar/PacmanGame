import React, { FC } from "react";
import { Routes, Route } from "react-router-dom";

import "./AppRoutes.css";

/* MAZE IMPORTS */

import mazesJSON from "../../assets/prepMazes.json";

/* PAGE IMPORTS */

import HomePage from "../../pages/HomePage";
import NotFound from "../../pages/NotFound";
import LoadingPage from "../../pages/LoadingPage";
import { GameContextProvider } from "../../state/PacmanGameContext";

/* PAGES LAZY LOADING */

const LazyDesigner = React.lazy(() =>
  import("../../components/Designer/DesignerContainer")
);
const LazyMaze = React.lazy(() =>
  import("../../components/Game/MazeLayerWrapper")
);

const AppRoutes: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

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
  );
};

export default AppRoutes;
