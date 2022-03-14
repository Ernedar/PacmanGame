import React, { FC } from "react";
import "./PlayBuilder.css";
import { positionChecker } from "../../utils/utils";
import EntityPoint from "../EntityPoint/";

/*
interface PlayTile {
  x: number;
  y: number;
  whatAmI: "wall" | "point" | "power";
}

type PlayMap = Record<string, PlayTile>;

*/

type PlayBuilderProps = {
  mazeDefinition: number[][];
  pacmanStartPosition: number[];
  ghostsStartPositions: number[][];
};

const PlayBuilder: FC<PlayBuilderProps> = ({
  mazeDefinition,
  pacmanStartPosition,
  ghostsStartPositions
}) => {
  /*
  const testPosition = [14, 15];

  console.log(
    "Pacman Starting on coordinates: X: " +
      pacmanStartPosition[0] +
      " Y: " +
      pacmanStartPosition[1]
  );
  console.log("Ghosts start on " + ghostsStartPositions);

  const movement = positionChecker(testPosition[0], testPosition[1]);

  console.log(movement);
*/
  return (
    <div className="game-actions-entities">
      {mazeDefinition.map((tileLine, x) =>
        tileLine.map((tile, y) => {
          if (tile === 31) {
            return <EntityPoint key={"tile-" + x + "-" + y} x={x} y={y} />;
          }
          return null;
        })
      )}
    </div>
  );
};

export default PlayBuilder;
