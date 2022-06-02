export const GAME_ACTIONS = {
  INIT_GAME: "initialize-game",
  START_GAME: "start-game",
  RESET_GAME: "reset-game",
  PAUSE_GAME: "pause-game",
  CONTINUE_GAME: "continue-game",
  FINISH_GAME: "finish-game",
  LOSE_GAME: "lose-game",
  GAME_TICK: "game-time-interval"
};

export const DESIGNER_ACTIONS = {
  SELECT_TILE: "select-tile",
  CLEAR_SELECTED_TILE: "clear-selected-tile",
  ADD_TILE_TO_MAZE: "add-tile-to-maze",
  REMOVE_TILE_FROM_MAZE: "remove-tile-from-maze",
  REMOVE_ROW_OF_TILES: "remove-row-from-maze",
  REMOVE_COL_OF_TILES: "remove-col-from-maze",
  SAVE_MAZE: "save-designed-maze",
  CLEAR_DESIGNER: "clear-designer"
};
