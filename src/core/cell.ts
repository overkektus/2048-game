import { Tile } from "./tile";

export class Cell {
  public x: number;
  public y: number;
  public linkedTile: Tile | null = null;
  public linkedTileForMerge: Tile | null = null;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  public linkTile(tile: Tile): void {
    tile.setXY(this.x, this.y);
    this.linkedTile = tile;
  }

  public linkTileForMerge(tile: Tile): void {
    tile.setXY(this.x, this.y);
    this.linkedTileForMerge = tile;
  }

  public unlinkTile(): void {
    this.linkedTile = null;
  }

  unlinkTileForMerge(): void {
    this.linkedTileForMerge = null;
  }

  public isEmpty(): boolean {
    return !this.linkedTile;
  }

  public hasTileForMerge() {
    return !!this.linkedTileForMerge;
  }

  public canAccept(newTile: Tile): boolean {
    return (
      this.isEmpty() ||
      (!this.hasTileForMerge() && this.linkedTile?.value === newTile.value)
    );
  }

  public mergeTiles() {
    if (this.linkedTile && this.linkedTileForMerge) {
      this.linkedTile.setValue(
        this.linkedTile.value + this.linkedTileForMerge?.value
      );
    }
    this.unlinkTileForMerge();
  }
}
