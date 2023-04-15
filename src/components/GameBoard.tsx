import styled from "styled-components";

import Cell from "./Cell";
import Tile from "./Tile";

import { Grid } from "../core/grid";

function GameBoard() {
  const grid = new Grid();
  return (
    <Board>
      {grid.cells.map((cell) => (
        <Cell key={`${cell.x}-${cell.y}`} />
      ))}
      {grid.tiles.map((tile) => (
        <Tile rowPosition={tile.x} columnPosition={tile.y} value={tile.value} />
      ))}
    </Board>
  );
}

const Board = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(4, 20vmin);
  grid-template-rows: repeat(4, 20vmin);
  gap: 2vmin;
  border-radius: 1vmin;
`;

export default GameBoard;
