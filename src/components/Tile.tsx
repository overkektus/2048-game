import styled, { css } from "styled-components";

interface TileProps {
  rowPosition: number;
  columnPosition: number;
  value: number;
}

function Tile({ rowPosition, columnPosition, value }: TileProps) {
  return (
    <TileDiv
      rowPosition={rowPosition}
      columnPosition={columnPosition}
      value={value}
    >
      {value}
    </TileDiv>
  );
}

interface TileDivProps {
  rowPosition: number;
  columnPosition: number;
  value: number;
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
  ${(props) => {
    const bgLightness = 100 - Math.log2(props.value) * 9;
    const textLightness = bgLightness < 50 ? 90 : 10;
    return css`
      background-color: hsl(25, 60%, ${bgLightness}%);
      color: hsl(20, 25%, ${textLightness}%);
    `;
  }}
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
