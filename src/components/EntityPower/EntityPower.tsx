import React, { FC } from "react";

import "./EntityPower.css";

import CNLogo from "../../assets/cngrouplogo.jpg";

type PowerProps = {
  x: number;
  y: number;
  eaten?: Boolean;
};

const EntityPoint: FC<PowerProps> = ({ x, y, eaten = false }) => {
  console.log(eaten);

  if (!eaten) {
    return (
      <div
        className="power-wrapper"
        style={{
          transform:
            "translate(calc(" +
            x +
            " * var(--tile-dim)), calc(" +
            y +
            " * var(--tile-dim))"
        }}
      >
        <div className="power">
          <img src={CNLogo} alt="CN Group Logo" />
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default EntityPoint;
