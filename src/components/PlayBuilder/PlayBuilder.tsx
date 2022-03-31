import React, { FC } from "react";
import "./PlayBuilder.css";
import { positionChecker } from "../../utils/utils";
import {
  randomDirectionHandler,
  startPositionHandler
} from "../../utils/handlers";
import EntityPoint from "../EntityPoint/";
import EntityPower from "../EntityPower";

type PlayBuilderProps = {
  mazeDefinition: number[][];
};

const PlayBuilder: FC<PlayBuilderProps> = ({ mazeDefinition }) => {
  const pacmanStarterPosition = startPositionHandler(mazeDefinition, "pacman");

  const pacmanCurrentDirections = positionChecker(
    pacmanStarterPosition[0],
    pacmanStarterPosition[1]
  );

  const pacmanNextRandomDirection = randomDirectionHandler(
    pacmanCurrentDirections
  );

  /*
  console.log(
    "Pacman starts on [" +
      pacmanStarterPosition +
      "], with possible directions: " +
      Object.values(pacmanCurrentDirections) +
      "; next move to: " +
      pacmanNextRandomDirection
  );
  */

  const testPosition = [14, 15];

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
