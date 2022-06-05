import MazeDesignerInitState from "../state/initialDesignerState";
import { DesignerTileType } from "./enums";

export type payloadType = typeof MazeDesignerInitState & {
  x: number;
  y: number;
};

export type designerProps = {
  mazeState: typeof MazeDesignerInitState;
  dispatch(arg: {}): void;
};

export type designerButtonProps = designerProps & {
  tileKey?: string | undefined;
  tileNumber?: number | undefined;
  tileType: DesignerTileType;
};
