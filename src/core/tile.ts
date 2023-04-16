export class Tile {
  public x: number;
  public y: number;
  public value: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
    this.value = Math.random() > 0.5 ? 2 : 4;
  }

  public setValue(newValue: number): void {
    this.value = newValue;
  }

  public setXY(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}
