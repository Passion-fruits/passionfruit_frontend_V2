import styled from "@emotion/styled";
import { ProgressBarProps } from "@src/libs/interfaces/playBar";
import { COLOR, MAIN_WIDTH } from "styles";

export const Wrapper = styled.div`
  width: 100%;
  height: 110px;
  background: black;
  position: fixed;
  bottom: 0;
  z-index: 100;
  box-shadow: 0px 3px 20px #311d1d;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  width: ${MAIN_WIDTH};
  height: 80px;
  display: flex;
  justify-content: space-between;
  position: relative;
`;

export const MusicInforContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  height: 100%;
  :last-of-type {
    width: 70px;
    justify-content: space-between;
  }
`;

export const CoverImg = styled.img`
  width: 80px;
  height: 80px;
`;

export const InforContainer = styled.div`
  padding: 30px 20px;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.p`
  color: white;
  font-weight: bold;
  font-size: 17px;
  margin: 0;
`;

export const MusicianName = styled.span`
  color: #afafaf;
  font-size: 13px;
  font-weight: bold;
  margin-top: 7px;
`;

export const ControlContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  position: absolute;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const IconContainer = styled.div`
  width: 200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const PlayBarContainer = styled.div`
  width: 580px;
  height: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;
`;

export const Time = styled.span`
  color: #afafaf;
  font-size: 13px;
`;

export const PlayBar = styled.div`
  width: 480px;
  height: 100%;
  display: flex;
  align-items: center;
  position: relative;
  :hover .ControlCircle {
    background: white;
  }
`;

export const ControlCircle = styled.div`
  width: 3px;
  height: 3px;
  border: 3px solid ${COLOR.pink};
  border-radius: 80%;
  box-sizing: content-box;
  pointer-events: none;
  background: gray;
  transition: 0.4s;
`;

export const RangePlayBar = styled.input`
  -webkit-appearance: none;
  width: 100%;
  height: 5px;
  background: ${(e: ProgressBarProps) =>
    `linear-gradient(to right, dodgerblue 0%, dodgerblue 
    ${e.progress}%, #3A3A3A ${e.progress}%, #3A3A3A 100%)`};
  cursor: pointer;
  transition: background 450ms ease-in;
  border-radius: 2px;
  overflow: hidden;
  border:none;
  ::-webkit-slider-thumb {
    opacity:0;
  }
  ::-moz-range-thumb {
    -webkit-appearance: none;
    width: 10px;
    height: 10px;
    background: #fff;
    border: 1px solid dodgerblue;
    border-radius: 50%;
    cursor: pointer;
  }
`;
