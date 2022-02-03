import React, { FC } from "react";

interface Props {
  className?: string;
}

const IconWall: FC<Props> = ({ className }) => {
  return (
    <svg
      className={className}
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
};

export default IconWall;
