import { BrowserRouter as Router } from "react-router-dom";
import { render } from "react-dom";

import "./styles.css";

import App from "./App";

const rootElement = document.getElementById("root");
render(
  <Router>
    <App />
  </Router>,
  rootElement
);
