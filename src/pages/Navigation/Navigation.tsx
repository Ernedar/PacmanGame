import React, { FC } from "react";
import { Link } from "react-router-dom";

import "./Navigation.css";

import { importMaze } from "../../utils/interfaces";

type navProps = {
  jsonImport: Array<importMaze>;
};

const Navigation: FC<navProps> = ({ jsonImport }) => {
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
                  <Link to={"/" + jsonImport[i].linktag}>
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
