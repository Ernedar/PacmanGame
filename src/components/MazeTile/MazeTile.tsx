import React, { FC } from "react";
import classNames from "classnames";
import { MazeWall, GhostHome } from "../../enums";
import "./MazeTile.css";

interface Props {
  tileKey?: string;
}

const MazeTile: FC<Props> = ({ tileKey = "" }) => {
  let tileKeyNumber = !!tileKey && tileKey !== "" ? parseInt(tileKey, 0) : NaN;

  if (
    tileKey === "0" ||
    tileKey === "" ||
    (tileKeyNumber > 0 && tileKeyNumber < 100) ||
    tileKeyNumber >= 300
  ) {
    return <div className="path" />;
  } else if (tileKeyNumber >= 100 && tileKeyNumber < 200) {
    let ghostHomeEnumKey: keyof typeof GhostHome;

    ghostHomeEnumKey = "g" + tileKey;

    const ghostHomeClass = GhostHome[ghostHomeEnumKey];

    return (
      <svg
        className={classNames("ghost-tile", ghostHomeClass)}
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
  } else if (tileKeyNumber >= 200 && tileKeyNumber < 300) {
    let wallEnumKey: keyof typeof MazeWall;

    wallEnumKey = "w" + tileKey;

    const wallClass = MazeWall[wallEnumKey];

    return (
      <svg
        className={classNames("wall", wallClass)}
        width="600"
        height="600"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 600 600"
      >
        <g id="MazeTile">
          <line
            className="maze_line_center_left_top"
            y2="300"
            x2="150"
            y1="150"
            x1="150"
            fill="none"
          />
          <line
            className="maze_line_center_left_bottom"
            y2="450"
            x2="150"
            y1="300"
            x1="150"
            fill="none"
          />
          <line
            className="maze_line_center_right_top"
            y2="300"
            x2="450"
            y1="150"
            x1="450"
            fill="none"
          />
          <line
            className="maze_line_center_right_bottom"
            y2="450"
            x2="450"
            y1="300"
            x1="450"
            fill="none"
          />
          <line
            className="maze_line_center_bottom_left"
            y2="450"
            x2="300"
            y1="450"
            x1="150"
            fill="none"
          />
          <line
            className="maze_line_center_bottom_right"
            y2="450"
            x2="450"
            y1="450"
            x1="300"
            fill="none"
          />
          <line
            className="maze_line_center_top_left"
            y2="150"
            x2="300"
            y1="150"
            x1="150"
            fill="none"
          />
          <line
            className="maze_line_center_top_right"
            y2="150"
            x2="450"
            y1="150"
            x1="300"
            fill="none"
          />
          <line
            className="maze_outer_line_top_left"
            y2="150"
            x2="150"
            y1="0"
            x1="150"
            fill="none"
          />
          <line
            className="maze_outer_line_top_right"
            y2="150"
            x2="450"
            y1="0"
            x1="450"
            fill="none"
          />
          <line
            className="maze_outer_line_bottom_right"
            y2="600"
            x2="450"
            y1="450"
            x1="450"
            fill="none"
          />
          <line
            className="maze_outer_line_bottom_left"
            y2="600"
            x2="150"
            y1="450"
            x1="150"
            fill="none"
          />
          <line
            className="maze_outer_line_left_top"
            y2="150"
            x2="150"
            y1="150"
            x1="0"
            fill="none"
          />
          <line
            className="maze_outer_line_right_top"
            y2="150"
            x2="600"
            y1="150"
            x1="450"
            fill="none"
          />
          <line
            className="maze_outer_line_right_bottom"
            y2="450"
            x2="600"
            y1="450"
            x1="450"
            fill="none"
          />
          <line
            className="maze_outer_line_left_bottom"
            y2="450"
            x2="150"
            y1="450"
            x1="0"
            fill="none"
          />
          <path
            className="maze_center_ring_left_top"
            d="m150,300c0,-82.87293 67.12707,-150 150,-150"
            opacity="undefined"
            fill="none"
          />
          <path
            className="maze_center_ring_right_top"
            d="m300,150c82.87293,0 150,67.12707 150,150"
            opacity="undefined"
            fill="none"
          />
          <path
            transform="rotate(-90 225 375)"
            className="maze_center_ring_left_bottom"
            d="m150,450c0,-82.87293 67.12707,-150 150,-150"
            opacity="undefined"
            fill="none"
          />
          <path
            transform="rotate(90 375 375)"
            className="maze_center_ring_right_bottom"
            d="m300,300c82.87293,0 150,67.12707 150,150"
            opacity="undefined"
            fill="none"
          />
          <path
            transform="rotate(90 75 75)"
            className="maze_outer_ring_top_left"
            d="m0,0c82.87293,0 150,67.12707 150,150"
            opacity="undefined"
            fill="none"
          />
          <path
            transform="rotate(-90 525 75)"
            className="maze_outer_ring_top_right"
            d="m450,150c0,-82.87293 67.12707,-150 150,-150"
            opacity="undefined"
            fill="none"
          />
          <path
            className="maze_outer_ring_bottom_right"
            d="m450,600c0,-82.87293 67.12707,-150 150,-150"
            opacity="undefined"
            fill="none"
          />
          <path
            className="maze_outer_ring_bottom_left"
            d="m0,450c82.87293,0 150,67.12707 150,150"
            opacity="undefined"
            fill="none"
          />
          <path
            className="maze_caps_top"
            d="m150,150c0,-41.43646 67.12707,-75 150,-75c82.87293,0 150,33.56354 150,75"
            opacity="undefined"
            fill="none"
          />
          <path
            transform="rotate(-180 300 487.5)"
            className="maze_caps_bottom"
            d="m150,525c0,-41.43646 67.12707,-75 150,-75c82.87293,0 150,33.56354 150,75"
            opacity="undefined"
            fill="none"
          />
          <path
            className="maze_caps_left"
            d="m150,450c-41.43646,0 -75,-67.12707 -75,-150c0,-82.87293 33.56354,-150 75,-150"
            opacity="undefined"
            fill="none"
          />
          <path
            transform="rotate(-180 487.5 300)"
            className="maze_caps_right"
            d="m525,450c-41.43646,0 -75,-67.12707 -75,-150c0,-82.87293 33.56354,-150 75,-150"
            opacity="undefined"
            fill="none"
          />
        </g>
      </svg>
    );
  }
};

export default MazeTile;
