import React, { FC } from "react";
import IconClassName from "./Icons.interface";

const IconPortal: FC<IconClassName> = ({ className }) => {
  return (
    <svg
      className={className}
      width="600"
      height="600"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 600 600"
    >
      <g id="MazePortal">
        <path
          className="left-right"
          d="m36.00004,157.74963l121.09092,0l100.90908,141.5l-100.90908,141.49999l-121.09092,0l0,-282.99999z"
        />
        <path
          className="left-left"
          transform="rotate(-180 147 299.25)"
          d="m36.00004,157.74963l121.09092,0l100.90908,141.5l-100.90908,141.49999l-121.09092,0l0,-282.99999z"
        />
        <path
          className="right-left"
          transform="rotate(-180 450.998 299.25)"
          d="m339.99676,157.74963l121.09092,0l100.90908,141.5l-100.90908,141.49999l-121.09092,0l0,-282.99999z"
        />
        <path
          className="right-right"
          d="m339.99676,157.74963l121.09092,0l100.90908,141.5l-100.90908,141.49999l-121.09092,0l0,-282.99999z"
        />
        <path
          className="top-down"
          transform="rotate(90 298.998 148.251)"
          d="m187.9984,6.75126l121.09092,0l100.90908,141.5l-100.90908,141.49999l-121.09092,0l0,-282.99999z"
        />
        <path
          className="bottom-up"
          transform="rotate(-90 298.998 451.25)"
          d="m187.9984,309.74799l121.09092,0l100.90908,141.5l-100.90908,141.49999l-121.09092,0l0,-282.99999z"
        />
        <path
          className="bottom-down"
          transform="rotate(90 298.998 450.249)"
          d="m187.9984,308.748l121.09092,0l100.90908,141.5l-100.90908,141.49999l-121.09092,0l0,-282.99999z"
        />
        <path
          className="top-up"
          transform="rotate(-90 298.998 148.251)"
          d="m187.9984,6.75126l121.09092,0l100.90908,141.5l-100.90908,141.49999l-121.09092,0l0,-282.99999z"
        />
      </g>
    </svg>
  );
};

export default IconPortal;
