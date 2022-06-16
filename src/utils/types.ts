import { Dispatch } from "react";
import { DesignerTileType } from "./enums";
import {
  DesignerAction,
  designerStateInterface,
  gameStateInterface
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

export type gamePayloadType = gameStateInterface & {
  mazeArrayInput: number[][];
};
