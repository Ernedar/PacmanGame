import React, { FC, useState } from "react";
import { NavLink } from "react-router-dom";

import "./Navigation.css";

/* MAZE IMPORTS */

import mazesJSON from "../../assets/prepMazes.json";

/* STATE IMPORT */

import initialState from "../../state/initialState";

const Navigation: FC = () => {
  const [gameState, setGameState] = useState(initialState);

  return (
    <nav className="side-nav">
      <ul>
        <li>
          <p>
            <NavLink to="/">Home</NavLink>
          </p>
        </li>
        <li>
          <p>Game</p>
          <ul>
            {mazesJSON.mazes.map((id, i) => (
              <li key={mazesJSON.mazes[i].mazeId}>
                <p className="sub-link">
                  <NavLink
                    to={"/mazes/" + mazesJSON.mazes[i].mazeId}
                    onClick={() => {
                      setGameState(initialState);
                    }}
                  >
                    {mazesJSON.mazes[i].name}
                  </NavLink>
                </p>
              </li>
            ))}
          </ul>
        </li>
        <li>
          <p>
            <NavLink to="/designer">Maze Designer</NavLink>
          </p>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
