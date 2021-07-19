import { css } from "@emotion/react";
import styled from "@emotion/styled";

const PlayButton = styled.button<{ size: number; color?: string }>`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  cursor: pointer;
  background: rgb(50, 50, 50, 0.5);
  ${(props) =>
    props.color === "white"
      ? css`
          border: 2px solid white;
        `
      : css`
          border: 3px solid #8fffb1;
        `}
`;

function Play(props) {
  return (
    <PlayButton
      onClick={props.clickCallback}
      size={props.size}
      color={props.type || ""}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.size / 2}
        height={props.size / 2}
        viewBox="0 0 24.377 28.07"
        style={{ transform: `translateX(${props.size / 15}px)` }}
      >
        <path
          id="Polygon_6"
          data-name="Polygon 6"
          d="M13.169,1.505a1,1,0,0,1,1.733,0L27.207,22.878a1,1,0,0,1-.867,1.5H1.73a1,1,0,0,1-.867-1.5Z"
          transform="translate(24.377) rotate(90)"
          fill={props.type === "white" ? "white" : "#8fffb1"}
        />
      </svg>
    </PlayButton>
  );
}

export default Play;
