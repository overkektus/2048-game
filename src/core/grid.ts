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
      const tile = new Tile(randomCell.x, randomCell.y);
      randomCell.linkTile(tile);
      this.tiles.push(tile);
    }
  }

  public getRandomEmptyCell(): Cell {
    const emptyCells = this.cells.filter((cell) => cell.isEmpty());
    const randomIndex = Math.floor(Math.random() * emptyCells.length);
    return emptyCells[randomIndex];
  }

  private groupCellsByColumn() {
    return this.cells.reduce((groupedCells: Array<Array<Cell>>, cell: Cell) => {
      groupedCells[cell.x] = groupedCells[cell.x] || [];
      groupedCells[cell.x][cell.y] = cell;
      return groupedCells;
    }, []);
  }

  private slideTilesInGroup(group: Array<Cell>): void {
    for (let i = 1; i < group.length; i++) {
      if (group[i].isEmpty()) {
        continue;
      }

      const cellWithTile = group[i];

      let targetCell;
      let j = i - 1;
      while (j >= 0 && group[j].canAccept(cellWithTile.linkedTile!)) {
        targetCell = group[j];
        j--;
      }

      if (!targetCell) {
        continue;
      }

      if (targetCell.isEmpty()) {
        targetCell.linkTile(cellWithTile.linkedTile!);
      } else {
        targetCell.linkTileForMerge(cellWithTile.linkedTile!);
      }

      cellWithTile.unlinkTile();
    }
  }

  public moveUp(): void {
    const groupedCells = this.groupCellsByColumn();
    groupedCells.forEach((group) => this.slideTilesInGroup(group));
    this.cells.forEach((cell) => {
      cell.hasTileForMerge() && cell.mergeTiles();
    });
  }
}
