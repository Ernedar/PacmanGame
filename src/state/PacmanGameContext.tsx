import React, {
  FC,
  createContext,
  Dispatch,
  useContext,
  useReducer
} from "react";
import { GameActions } from "../utils/types";
import { gameStateInterface } from "../utils/interfaces";
import initialState from "../state/initialState";
import GameReducer from "../state/PacmanGameReducer";

const GameStateContext = createContext<gameStateInterface>(initialState);
const GameDispatchContext = createContext<Dispatch<GameActions>>(
  () => undefined
);

export const useGameState = () => {
  const stateContext = useContext(GameStateContext);
  if (stateContext === undefined) {
    throw new Error(
      "useGameState must be use withing a GameStateContext. For more information look in to PacmanGameContext.tsx file."
    );
  }
  return stateContext;
};

export const useGameDispatch = () => {
  const dispatchContext = useContext(GameDispatchContext);
  if (dispatchContext === undefined) {
    throw new Error(
      "useGameDispatch must be use withing a GameDispatchContext. For more information look in to PacmanGameContext.tsx file."
    );
  }
  return dispatchContext;
};

type gameContextProps = {
  children: React.ReactNode;
};

export const GameContextProvider: FC<gameContextProps> = ({ children }) => {
  const [state, dispatch] = useReducer(GameReducer, initialState);
  return (
    <GameStateContext.Provider value={state}>
      <GameDispatchContext.Provider value={dispatch}>
        {children}
      </GameDispatchContext.Provider>
    </GameStateContext.Provider>
  );
};
