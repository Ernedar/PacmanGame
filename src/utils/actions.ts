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
  ADD_ROW_OF_TILES: "add-row-of-tiles",
  CHANGE_MAZE_TILE: "change-maze-tile",
  CLEAR_MAZE_TILE: "clear-maze-tile",
  REMOVE_TILE_FROM_MAZE: "remove-tile-from-maze",
  SET_MAZE_NAME: "set-maze-name",
  SET_MAZE_LINKTAG: "set-maze-linktag",
  CLEAR_ROW_OF_TILES: "clear-row-from-maze",
  CLEAR_COL_OF_TILES: "clear-col-from-maze",
  SAVE_MAZE: "save-designed-maze",
  CLEAR_DESIGNER: "clear-designer",
  REFRESH_STATE_RENDER: "refresh-state-render"
};
