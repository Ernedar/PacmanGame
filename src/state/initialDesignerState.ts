import { DesignerTileType } from "../utils/enums";

const MazeDesignerInitState = {
  selectedTileType: DesignerTileType.path,
  selectedTileNumber: 0,
  selectedTileClass: "",
  designedMaze: [[]]
};

export default MazeDesignerInitState;
