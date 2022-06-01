import React, { FC } from "react";
import "./MazeBuilder.css";

import MazeTile from "../MazeTile";

type MazeBuilderProps = {
  mazeArray: number[][];
};

const MazeBuilder: FC<MazeBuilderProps> = ({ mazeArray }) => {
  return (
    <table cellSpacing="0">
      <tbody className="game-plan">
        {mazeArray.map((tileLine, x) => (
          <tr key={"tileLine-" + x}>
            {tileLine.map((tile, y) => (
              <td key={"tile-" + x + "-" + y} data-x={x} data-y={y}>
                <MazeTile tileKey={tile.toString()} />
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MazeBuilder;
