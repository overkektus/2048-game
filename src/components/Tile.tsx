import styled from "styled-components";

function Tile() {
  return (
    <TileDiv rowPosition={2} columnPosition={1}>
      2
    </TileDiv>
  );
}

interface TileDivProps {
  rowPosition: number;
  columnPosition: number;
}

const TileDiv = styled.div<TileDivProps>`
  position: absolute;
  top: calc(${(props) => props.rowPosition} * (20vmin + 2vmin));
  left: calc(${(props) => props.columnPosition} * (20vmin + 2vmin));
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20vmin;
  height: 20vmin;
  border-radius: 1vmin;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 7.5vmin;
  font-weight: bold;
  background-color: #fff;
  color: #000;
  transition: 100ms;
  animation: show 200ms;

  @keyframes show {
    0% {
      opacity: 0.5;
      transform: scale(0);
    }
  }
`;

export default Tile;
