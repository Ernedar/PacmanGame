import { DesignerTileType } from "../utils/enums";

const MazeDesignerInitState = {
  selectedTileType: DesignerTileType.path,
  selectedTileNumber: 0,
  selectedTileClass: "",
  designedMaze: [[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]]
};

export default MazeDesignerInitState;