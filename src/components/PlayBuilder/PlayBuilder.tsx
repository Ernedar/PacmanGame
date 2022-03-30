import React, { FC } from "react";
import "./PlayBuilder.css";
import { positionChecker } from "../../utils/utils";
import { randomDirectionHandler } from "../../utils/handlers";
import EntityPoint from "../EntityPoint/";
import EntityPower from "../EntityPower";

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
  console.log("Ghosts start on " + ghostsStartPositions);

  console.log(
    "Pacman Starting on coordinates: X: " +
      pacmanStartPosition[0] +
      " Y: " +
      pacmanStartPosition[1]
  );
*/
  const testPosition = [14, 15];

  const movement = positionChecker(testPosition[0], testPosition[1]);
  /*
  console.log(
    "movement options: " +
      movement.top +
      ", " +
      movement.right +
      ", " +
      movement.bottom +
      ", " +
      movement.left
  );
*/
  const randomDirection = randomDirectionHandler(movement);

  console.log("randomDirection result: " + randomDirection);

  return (
    <div className="game-actions-entities">
      {mazeDefinition.map((tileColumn, y) =>
        tileColumn.map((tile, x) => {
          if (tile === 31) {
            return <EntityPoint key={"tile-" + x + "-" + y} x={x} y={y} />;
          } else if (tile === 32) {
            return <EntityPower key={"tile-" + x + "-" + y} x={x} y={y} />;
          }
          return null;
        })
      )}
      <div
        className="testSquare"
        style={{
          transform:
            "translate(calc(" +
            testPosition[1] +
            " * var(--tile-dim)), calc(" +
            testPosition[0] +
            " * var(--tile-dim))"
        }}
      />
    </div>
  );
};

export default PlayBuilder;
