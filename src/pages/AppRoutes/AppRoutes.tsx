import React, { FC } from "react";
import { Routes, Route } from "react-router-dom";

import "./AppRoutes.css";

/* PAGE IMPORTS */

import HomePage from "../../pages/HomePage";
import NotFound from "../../pages/NotFound";
import LoadingPage from "../../pages/LoadingPage";

/* PAGES LAZY LOADING */

const LazyDesigner = React.lazy(() =>
  import("../../components/Designer/DesignerContainer")
);
const LazyMaze = React.lazy(() =>
  import("../../components/Game/MazeContainer")
);

const AppRoutes: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route
        path={"/mazes/:mazeId"}
        element={
          <React.Suspense fallback={<LoadingPage />}>
            <LazyMaze />
          </React.Suspense>
        }
      />
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
