import React, { FC, useState } from "react";
import { NavLink } from "react-router-dom";

import "./Navigation.css";

import { importMaze } from "../../utils/interfaces";
import initialState from "../../state/initialState";

type navProps = {
  jsonImport: Array<importMaze>;
};

const Navigation: FC<navProps> = ({ jsonImport }) => {
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
            {jsonImport.map((id, i) => (
              <li key={jsonImport[i].id}>
                <p className="sub-link">
                  <NavLink
                    to={"/mazes/" + jsonImport[i].linktag}
                    onClick={() => {
                      setGameState(initialState);
                    }}
                  >
                    {jsonImport[i].name}
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
