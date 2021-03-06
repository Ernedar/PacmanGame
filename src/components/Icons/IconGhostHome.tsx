import React, { FC } from "react";
import IconClassName from "./Icons.interface";

const IconGhostHome: FC<IconClassName> = ({ className }) => {
  return (
    <svg
      className={className}
      width="600"
      height="600"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 600 600"
    >
      <g>
        <line
          className="tile-line-top-left"
          y2="75"
          x2="150"
          y1="75"
          x1="0"
          fill="none"
        />
        <line
          className="tile-line-bottom-left"
          y2="525"
          x2="150"
          y1="525"
          x1="0"
          fill="none"
        />
        <line
          className="tile-line-bottom-right"
          y2="525"
          x2="600"
          y1="525"
          x1="450"
          fill="none"
        />
        <line
          className="tile-line-top-right"
          y2="75"
          x2="600"
          y1="75"
          x1="450"
          fill="none"
        />
        <line
          className="tile-line-top"
          y2="75"
          x2="450"
          y1="75"
          x1="150"
          fill="none"
        />
        <line
          className="tile-line-bottom"
          y2="525"
          x2="450"
          y1="525"
          x1="150"
          fill="none"
        />
        <line
          className="tile-line-left-top"
          y2="150"
          x2="75"
          y1="0"
          x1="75"
          fill="none"
        />
        <line
          className="tile-line-left"
          y2="450"
          x2="75"
          y1="150"
          x1="75"
          fill="none"
        />
        <line
          className="tile-line-left-bottom"
          y2="600"
          x2="75"
          y1="450"
          x1="75"
          fill="none"
        />
        <line
          className="tile-line-right-bottom"
          y2="600"
          x2="525"
          y1="450"
          x1="525"
          fill="none"
        />
        <line
          className="tile-line-right"
          y2="450"
          x2="525"
          y1="150"
          x1="525"
          fill="none"
        />
        <line
          className="tile-line-right-top"
          y2="150"
          x2="525"
          y1="0"
          x1="525"
          fill="none"
        />
        <path
          className="tile-curve-outer-bottom-right"
          d="m525,600c0,-41.43646 33.56354,-75 75,-75"
          opacity="undefined"
          fill="none"
        />
        <path
          className="tile-curve-outer-bottom-left"
          transform="rotate(90 37.5 563)"
          d="m0,600c0,-41.43646 33.56354,-75 75,-75"
          opacity="undefined"
          fill="none"
        />
        <path
          className="tile-curve-outer-top-left"
          transform="rotate(180 37.5 37.5)"
          d="m0,75c0,-41.43646 33.56354,-75 75,-75"
          opacity="undefined"
          fill="none"
        />
        <path
          className="tile-curve-outer-top-right"
          transform="rotate(-90 563 37.5)"
          d="m525,75c0,-41.43646 33.56354,-75 75,-75"
          opacity="undefined"
          fill="none"
        />
        <path
          className="tile-curve-inner-top-right"
          transform="rotate(90 487.5 112)"
          d="m450,150c0,-41.43646 33.56354,-75 75,-75"
          opacity="undefined"
          fill="none"
        />
        <path
          className="tile-curve-inner-top-left"
          d="m75,150c0,-41.43646 33.56354,-75 75,-75"
          opacity="undefined"
          fill="none"
        />
        <path
          className="tile-curve-inner-bottom-right"
          transform="rotate(180 487.5 487.5)"
          d="m450,525c0,-41.43646 33.56354,-75 75,-75"
          opacity="undefined"
          fill="none"
        />
        <path
          className="tile-curve-inner-bottom-left"
          transform="rotate(-90 112 487.5)"
          d="m75,525c0,-41.43646 33.56354,-75 75,-75"
          opacity="undefined"
          fill="none"
        />
      </g>
    </svg>
  );
};

export default IconGhostHome;
