import React, { FC, useContext } from "react";
import "./PlayBuilder.css";
import { InhabitantNames } from "../../../utils/enums";
import EntityPoint from "../EntityPoint";
import EntityPower from "../EntityPower";
import EntityPacman from "../EntityPacman";
import EntityGhost from "../EntityGhost";

import { GameContext } from "../MazeLayerWrapper/MazeLayerWrapper";

type PlayBuilderProps = {
  mazeDefinition: number[][];
};

const PlayBuilder: FC<PlayBuilderProps> = ({ mazeDefinition }) => {
  const gameContext = useContext(GameContext);

  return (
    <div className="game-actions-entities">
      <EntityPacman
        speed={gameContext.state.pacman.entitySpeed}
        currentPosition={gameContext.state.pacman.entityCurrentPosition}
        direction={gameContext.state.pacman.entityCurrentDirection}
      />
      <EntityGhost
        ghostName={InhabitantNames.clyde}
        ghostState={gameContext.state.ghosts.clyde.ghostState}
        speed={gameContext.state.ghosts.clyde.entitySpeed}
        currentPosition={gameContext.state.ghosts.clyde.entityCurrentPosition}
      />
      <EntityGhost
        ghostName={InhabitantNames.inky}
        ghostState={gameContext.state.ghosts.inky.ghostState}
        speed={gameContext.state.ghosts.inky.entitySpeed}
        currentPosition={gameContext.state.ghosts.inky.entityCurrentPosition}
      />
      <EntityGhost
        ghostName={InhabitantNames.pinky}
        ghostState={gameContext.state.ghosts.pinky.ghostState}
        speed={gameContext.state.ghosts.pinky.entitySpeed}
        currentPosition={gameContext.state.ghosts.pinky.entityCurrentPosition}
      />
      <EntityGhost
        ghostName={InhabitantNames.blinky}
        ghostState={gameContext.state.ghosts.blinky.ghostState}
        speed={gameContext.state.ghosts.blinky.entitySpeed}
        currentPosition={gameContext.state.ghosts.blinky.entityCurrentPosition}
      />
    </div>
  );
};

export default PlayBuilder;

/*
      {mazeDefinition.map((tileColumn, y) =>
        tileColumn.map((tile, x) => {
          if (tile === 31) {
            return <EntityPoint key={"point-" + x + "-" + y} x={x} y={y} />;
          } else if (tile === 32) {
            return <EntityPower key={"power-" + x + "-" + y} x={x} y={y} />;
          }
          return null;
        }
      )}
*/
