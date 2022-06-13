import { DesignerTileType } from "../utils/enums";

const MazeDesignerInitState = {
  selectedTileType: DesignerTileType.path,
  selectedTileNumber: 0,
  selectedTileClass: "",
  designedMazeID: 0,
  designedMazeName: "",
  designedMazeLinkTag: "",
  designedMaze: [[]]
};

export default MazeDesignerInitState;
