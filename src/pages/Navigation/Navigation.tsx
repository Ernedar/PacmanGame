import React, { FC } from "react";
import { Link } from "react-router-dom";

import "./Navigation.css";

const Navigation: FC = () => {
  return (
    <nav className="side-nav">
      <ul>
        <li>
          <p>
            <Link to="/">Home</Link>
          </p>
        </li>
        <li>
          <p>Game</p>
          <ul>
            <li>
              <p className="sub-link">
                <Link to="/PacmanMaze">Pacman Game</Link>
              </p>
            </li>
            <li>
              <p className="sub-link">
                <Link to="/FenixMaze">Fenix Game</Link>
              </p>
            </li>
            <li>
              <p className="sub-link">
                <Link to="/ZlinFourMaze">Zlin Four Game</Link>
              </p>
            </li>
          </ul>
        </li>
        <li>
          <p>
            <Link to="/designer">Maze Designer</Link>
          </p>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
