import styled from "styled-components";

import Cell from "./Cell";
import Tile from "./Tile";

import { Grid } from "../core/grid";
import { useEffect, useState } from "react";

function GameBoard() {
  const grid = new Grid();

  const [cells, setCells] = useState(grid.cells);

  useEffect(() => {
    const handleKeydown = (event: KeyboardEvent) => {
      switch (event.key) {
        case "ArrowUp":
          grid.moveUp();
          break;
        case "ArrowDown":
          console.log("down");
          break;
        case "ArrowLeft":
          console.log("left");
          break;
        case "ArrowRight":
          console.log("right");
          break;
        default:
          break;
      }
      setCells([...grid.cells]);
    };
    window.addEventListener("keydown", handleKeydown);
    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  }, []);

  return (
    <Board>
      {cells.map((cell) => (
        <Cell key={`${cell.x}-${cell.y}`} />
      ))}
      {cells.map(({ linkedTile }) => {
        if (linkedTile)
          return (
            <Tile
              key={`${linkedTile.x}-${linkedTile.y}`}
              rowPosition={linkedTile.y}
              columnPosition={linkedTile.x}
              value={linkedTile.value}
            />
          );
      })}
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
