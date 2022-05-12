import React, { FC, useReducer } from "react";
import MazeBuilder from "../MazeBuilder";
import PlayBuilder from "../PlayBuilder";
import GameInfoModal from "../GameInfoModal";
import { GameStateType } from "../../utils/enums";
import { GAME_ACTIONS } from "../../utils/actions";
import initalGameState from "../../utils/initialState";

import "./MazeLayerWrapper.css";

type MazeLayerProps = {
  mazeArrayInput: number[][];
};

function GameReducer(state, action) {
  switch (action.type) {
    case GAME_ACTIONS.START_GAME:
      return [state, (state.gameState = GameStateType.running)];
    case GAME_ACTIONS.RESET_GAME:
      return [
        state,
        ((state.gameState = GameStateType.notstarted), (state.gameScore = 0))
      ];
    case GAME_ACTIONS.CONTINUE_GAME:
      return [state, (state.gameState = GameStateType.running)];
    case GAME_ACTIONS.LOSE_GAME:
      return [...state, (state.gameState = GameStateType.lost)];
    case GAME_ACTIONS.FINISH_GAME:
      return [...state, (state.gameState = GameStateType.finished)];
    default:
      return state;
  }
}

const MazeLayerWrapper: FC<MazeLayerProps> = ({ mazeArrayInput }) => {
  const [state, dispatch] = useReducer(GameReducer, initalGameState);

  const playgroundWidth = mazeArrayInput[0].length;
  const playgroundHeight = mazeArrayInput.length;

  return (
    <div className="main-wrapper">
      <div
        className="maze-layer-wrapper"
        style={{
          width: "calc(" + playgroundWidth + " * var(--tile-dim))",
          height: "calc(" + playgroundHeight + " * var(--tile-dim))"
        }}
      >
        <MazeBuilder mazeArray={mazeArrayInput} />
        <PlayBuilder mazeDefinition={mazeArrayInput} />
      </div>
      <GameInfoModal gameStateType={state.gameState} dispatch={dispatch} />
    </div>
  );
};

export default MazeLayerWrapper;
