import React, { FC } from "react";
import "./PlayBuilder.css";

interface Props {
  pointsArray: number[][];
  powerUpsArray: number[][];
  pacmanStartPosition: number[];
  ghostsStartPositions: number[][];
}

const PlayBuilder: FC<Props> = ({
  pointsArray,
  powerUpsArray,
  pacmanStartPosition,
  ghostsStartPositions
}) => {
  console.log(
    "Pacman Starting on coordinates: X: " +
      pacmanStartPosition[0] +
      " Y: " +
      pacmanStartPosition[1]
  );
  console.log("Ghosts start on " + ghostsStartPositions);
  //console.log("Points to collect: " + pointsArray);
  //console.log("Power Ups to collect: " + powerUpsArray);
  return (
    <div className="game-actions-entities" style={{ display: "none" }}></div>
  );
};

export default PlayBuilder;
