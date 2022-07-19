import React, { FC } from "react";
import "./PlayBuilder.css";
import { InhabitantNames } from "../../../utils/enums";
import EntityPoint from "../EntityPoint";
import EntityPower from "../EntityPower";
import EntityPacman from "../EntityPacman";
import EntityGhost from "../EntityGhost";
import { useGameState } from "../../../state/PacmanGameContext";

const PlayBuilder: FC = () => {
  const state = useGameState();

  return (
    <div className="game-actions-entities">
      {state.powers.map((power, i) => {
        return (
          <EntityPower
            key={"power-" + power.x + "-" + power.y}
            x={power.x}
            y={power.y}
          />
        );
      })}
      {state.points.map((point, i) => {
        return (
          <EntityPoint
            key={"power-" + point.x + "-" + point.y}
            x={point.x}
            y={point.y}
          />
        );
      })}
      <EntityPacman
        speed={state.entity.pacman.entitySpeed}
        currentPosition={state.entity.pacman.entityCurrentPosition}
        direction={state.entity.pacman.entityCurrentDirection}
      />
      <EntityGhost
        ghostName={InhabitantNames.clyde}
        ghostState={state.entity.clyde.entityState}
        currentPosition={state.entity.clyde.entityCurrentPosition}
      />
      <EntityGhost
        ghostName={InhabitantNames.inky}
        ghostState={state.entity.inky.entityState}
        currentPosition={state.entity.inky.entityCurrentPosition}
      />
      <EntityGhost
        ghostName={InhabitantNames.pinky}
        ghostState={state.entity.pinky.entityState}
        currentPosition={state.entity.pinky.entityCurrentPosition}
      />
      <EntityGhost
        ghostName={InhabitantNames.blinky}
        ghostState={state.entity.blinky.entityState}
        currentPosition={state.entity.blinky.entityCurrentPosition}
      />
    </div>
  );
};

export default PlayBuilder;
