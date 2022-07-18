import React from "react";

import Navigation from "./pages/Navigation";
import AppRoutes from "./pages/AppRoutes";

export default function App() {
  return (
    <div className="App main-container">
      <Navigation />
      <AppRoutes />
    </div>
  );
}
