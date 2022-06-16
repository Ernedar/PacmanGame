import React, { FC, useState } from "react";
import { Link } from "react-router-dom";

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
            <Link to="/">Home</Link>
          </p>
        </li>
        <li>
          <p>Game</p>
          <ul>
            {jsonImport.map((id, i) => (
              <li key={jsonImport[i].id}>
                <p className="sub-link">
                  <Link
                    to={"/" + jsonImport[i].linktag}
                    onClick={() => {
                      setGameState(initialState);
                    }}
                  >
                    {jsonImport[i].name}
                  </Link>
                </p>
              </li>
            ))}
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
