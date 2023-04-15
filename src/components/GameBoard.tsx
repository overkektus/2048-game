import styled from "styled-components";

import Cell from "./Cell";

function GameBoard() {
  return (
    <Board>
      <Cell />
      <Cell />
      <Cell />
      <Cell />
      <Cell />
      <Cell />
      <Cell />
      <Cell />
      <Cell />
      <Cell />
      <Cell />
      <Cell />
      <Cell />
      <Cell />
      <Cell />
      <Cell />
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
