import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

export const Container = styled.div`
  background: rgb(0, 0, 0, 0.7);
  position: fixed;
  z-index: 300;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(10px);
`;

export const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const MenuAnim = keyframes`
0%{
  opacity:0;
  padding-left:10px;
}
100%{
  opacity:1;
  padding-left:0;
}
`

interface a{
  sec : number | string;
}

export const Menu = styled.span`
  color: white;
  font-size: 20px;
  font-weight: bold;
  padding: 15px 0;
  cursor: pointer;
  transition: 0.2s;
  animation:${MenuAnim} ${(e : a)=>`${e.sec}s`};
  :hover {
    opacity: 0.8;
  }
`;

export const BottomMenu = styled.span`
  color: #afafaf;
  font-weight: 600;
  padding: 10px 0;
  cursor: pointer;
  font-size: 13px;
  cursor: pointer;
  animation:${MenuAnim} 1.5s;
`;
