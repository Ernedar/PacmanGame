export enum MazeWall {
  "w201" = "corner-top-left",
  "w202" = "corner-top-right",
  "w203" = "corner-bottom-left",
  "w204" = "corner-bottom-right",
  "w205" = "single-cap-top",
  "w206" = "single-cap-bottom",
  "w207" = "single-cap-left",
  "w208" = "single-cap-right",
  "w211" = "vertical-straight",
  "w212" = "horizontal-straight",
  "w213" = "single-cap-straight-horizontal-top",
  "w214" = "single-cap-straight-horizontal-bottom",
  "w215" = "single-cap-straight-vertical-left",
  "w216" = "single-cap-straight-vertical-right",
  "w217" = "double-cap-straight-vertical",
  "w218" = "double-cap-straight-horizontal",
  "w221" = "crossroad",
  "w222" = "three-top",
  "w223" = "three-bottom",
  "w224" = "three-left",
  "w225" = "three-right",
  "w226" = "single-cap-three-top",
  "w227" = "single-cap-three-bottom",
  "w228" = "single-cap-three-left",
  "w229" = "single-cap-three-right",
  "w231" = "flower",
  "w232" = "three-cap-top",
  "w233" = "three-cap-bottom",
  "w234" = "three-cap-left",
  "w235" = "three-cap-right",
  "w236" = "double-cap-straight-right",
  "w237" = "double-cap-straight-left",
  "w238" = "double-cap-straight-bottom",
  "w239" = "double-cap-straight-top",
  "w241" = "single-cap-three-side-top-right",
  "w242" = "single-cap-three-side-top-left",
  "w243" = "single-cap-three-side-bottom-right",
  "w244" = "single-cap-three-side-bottom-left",
  "w245" = "single-cap-three-side-top-right-side",
  "w246" = "single-cap-three-side-top-left-side",
  "w247" = "single-cap-three-side-bottom-right-side",
  "w248" = "single-cap-three-side-bottom-left-side",
  "w251" = "double-cap-bottom-right",
  "w252" = "double-cap-bottom-left",
  "w253" = "double-cap-top-right",
  "w254" = "double-cap-top-left"
}

export enum GhostHome {
  "g111" = "horizontal-straight",
  "g112" = "vertical-straight",
  "g113" = "three-bottom",
  "g114" = "three-top",
  "g115" = "three-right",
  "g116" = "three-left",
  "g121" = "single-top",
  "g122" = "single-bottom",
  "g123" = "single-left",
  "g124" = "single-right",
  "g125" = "corner-open-top-left",
  "g126" = "corner-open-top-right",
  "g127" = "corner-open-bottom-left",
  "g128" = "corner-open-bottom-right",
  "g131" = "top-and-corner-bottom-right",
  "g132" = "top-and-corner-bottom-left",
  "g133" = "left-and-corner-bottom-right",
  "g134" = "right-and-corner-bottom-left",
  "g135" = "bottom-and-corner-top-right",
  "g136" = "bottom-and-corner-top-left",
  "g137" = "left-and-corner-top-right",
  "g138" = "right-and-corner-top-left",
  "g141" = "corner-capped-top-left",
  "g142" = "corner-capped-top-right",
  "g143" = "corner-capped-bottom-left",
  "g144" = "corner-capped-bottom-right",
  "g145" = "single-cap-left",
  "g146" = "single-cap-right",
  "g147" = "single-cap-bottom",
  "g148" = "single-cap-top",
  "g151" = "crossroad",
  "g152" = "three-corner-no-bottom-right",
  "g153" = "three-corner-no-bottom-left",
  "g154" = "three-corner-no-top-left",
  "g155" = "three-corner-no-top-right",
  "g161" = "double-corner-left",
  "g162" = "double-corner-top",
  "g163" = "double-corner-right",
  "g164" = "double-corner-bottom",
  "g165" = "double-corner-diag-top-left",
  "g166" = "double-corner-diag-top-right",
  "g171" = "single-corner-bottom-right",
  "g172" = "single-corner-bottom-left",
  "g173" = "single-corner-top-left",
  "g174" = "single-corner-top-right"
}

export enum PortalDirection {
  "p60" = "two-way-vertical",
  "p61" = "two-way-horizontal",
  "p62" = "single-top-in",
  "p63" = "single-top-out",
  "p64" = "single-bottom-in",
  "p65" = "single-bottom-out",
  "p66" = "single-left-in",
  "p67" = "single-left-out",
  "p68" = "single-right-in",
  "p69" = "single-right-out"
}

export enum TileType {
  wall = "wall",
  path = "path",
  door = "portal",
  point = "point",
  power = "powerup",
  ghost = "ghostHome"
}

export enum Inhabitants {
  pacman = 1,
  clyde = 21,
  inky = 22,
  pinky = 23,
  blinky = 24
}

export enum InhabitantNames {
  pacman = "pacman",
  clyde = "clyde",
  pinky = "pinky",
  blinky = "blinky",
  inky = "inky"
}

export enum PacManStates {
  idle = "idle",
  eating = "eating",
  dead = "dead"
}

export enum GhostStates {
  idle = "idle",
  hunting = "hunting",
  scared = "scared",
  dead = "dead"
}

export enum GhostBehavior {
  test = "test",
  clyde = "clyde",
  pinky = "pinky",
  blinky = "blinky",
  inky = "inky"
}

export enum GameStateType {
  notstarted = "not-started",
  running = "running",
  paused = "paused",
  finished = "finished",
  lost = "lost"
}

export enum DesignerTileType {
  wall = "wall",
  path = "path",
  door = "portal",
  point = "point",
  power = "powerup",
  ghome = "ghostHome",
  pacman = "pacman",
  clyde = "clyde",
  pinky = "pinky",
  blinky = "blinky",
  inky = "inky"
}

export enum designerCellActions {
  addTile = "add-tile",
  addRow = "add-row-of-tiles",
  clearRow = "clear-row-of-tiles",
  clearCol = "clear-col-of-tiles",
  removeTile = "remove-tile"
}

export enum GameActionType {
  InitiateGame,
  GameLoaded,
  ChangeGameStatus,
  ChangeEntityDirection
}
