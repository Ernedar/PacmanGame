import { Dispatch } from "react";
import { DesignerTileType } from "./enums";
import {
  DesignerAction,
  designerStateInterface,
  InitiateGame,
  GameLoaded,
  ChangeGameStatus,
  ChangeEntityDirection,
  UpdateLoop,
  UpdateEntityActionCounter,
  ResetLoop
} from "./interfaces";

export type designerPayloadType = designerStateInterface & {
  x?: number;
  y?: number;
};

export type designerProps = {
  mazeState: designerStateInterface;
  dispatch: Dispatch<DesignerAction>;
};

export type designerButtonProps = designerProps & {
  tileKey?: string;
  tileNumber?: number;
  tileType?: DesignerTileType;
};

export type GameActions =
  | InitiateGame
  | GameLoaded
  | ChangeGameStatus
  | ChangeEntityDirection
  | UpdateEntityActionCounter;
