import { Tile } from "./tile";

export class Cell {
  public x: number;
  public y: number;
  private linkedTile: Tile | null = null;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  linkTile(tile: Tile) {
    tile.setXY(this.x, this.y);
    this.linkedTile = tile;
  }

  isEmpty() {
    return !this.linkedTile;
  }
}
