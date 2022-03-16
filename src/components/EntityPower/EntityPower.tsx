import React, { FC } from "react";
import * as logos from "../../utils/logo";

import "./EntityPower.css";

type PowerProps = {
  x: number;
  y: number;
  eaten?: Boolean;
};

function getRandomLogo(maxLogos: number) {
  return Math.floor(Math.random() * maxLogos);
}

const EntityPoint: FC<PowerProps> = ({ x, y, eaten = false }) => {
  let randomLogoKey: keyof typeof logos;

  randomLogoKey = Object.keys(logos)[
    getRandomLogo(Object.keys(logos).length)
  ] as keyof typeof logos;

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
          <img src={logos[randomLogoKey]} alt="CN Group Logo" />
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default EntityPoint;
