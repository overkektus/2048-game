import { CELLS_COUNT, GRID_SIZE } from "./constants";
import { Cell } from "./cell";
import { Tile } from "./tile";

export class Grid {
  public cells: Array<Cell> = [];
  public tiles: Array<Tile> = [];

  constructor() {
    for (let i = 0; i < CELLS_COUNT; i++) {
      this.cells.push(new Cell(i % GRID_SIZE, Math.floor(i / GRID_SIZE)));
    }

    for (let i = 0; i < 2; i++) {
      const randomCell = this.getRandomEmptyCell();
      this.tiles.push(new Tile(randomCell.x, randomCell.y));
    }
  }

  public getRandomEmptyCell(): Cell {
    const emptyCells = this.cells.filter((cell) => cell.isEmpty());
    const randomIndex = Math.floor(Math.random() * emptyCells.length);
    return emptyCells[randomIndex];
  }
}
