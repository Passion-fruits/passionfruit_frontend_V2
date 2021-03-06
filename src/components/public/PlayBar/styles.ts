import styled from "@emotion/styled";
import { ProgressBarProps } from "@src/libs/interfaces/playBar";
import { COLOR, MAIN_WIDTH, PLAYBAR_HEIGHT } from "styles";

export const Wrapper = styled.div`
  width: 100%;
  height: ${PLAYBAR_HEIGHT};
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
`;

export const CoverImg = styled.img`
  width: 80px;
  height: 80px;
  object-fit:cover;
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
  width: 480px;
  height: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 25px;
`;

export const Time = styled.span`
  color: #afafaf;
  font-size: 13px;
`;

export const PlayBar = styled.div`
  width: 80%;
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

export const RangePlayBar = styled.input<ProgressBarProps>`
  -webkit-appearance: none;
  width: 100%;
  height: 3px;
  background: ${(e) =>
    `linear-gradient(to right, ${COLOR.green} 0%, ${COLOR.green} 
    ${e.progress}%, #3A3A3A ${e.progress}%, #3A3A3A 100%)`};
  cursor: pointer;
  transition: background 450ms ease-in;
  border-radius: 2px;
  overflow: hidden;
  border: none;
  :hover {
    height: 5px;
  }
  ::-webkit-slider-thumb {
    opacity: 0;
  }
  ::-moz-range-thumb {
    -webkit-appearance: none;
    width: 10px;
    height: 10px;
    background: #fff;
    border: 1px solid ${COLOR.pink};
    border-radius: 50%;
    cursor: pointer;
  }
`;

export const VolumeContainer = styled.div`
  margin-right: 20px;
  display: flex;
  align-items: center;
`;

export const VolumeBar = styled.input`
  -webkit-appearance: none;
  height: 2px;
  background: #3a3a3a;
  border: 1px solid #000000;
  width: 80px;
  margin-left: 20px;
  border-radius:24px;
  outline: none;
  cursor: pointer;
  border:none;
  background: ${(e: ProgressBarProps) =>
    `linear-gradient(to right, #919191 0%, #919191 
    ${e.progress}%, #3A3A3A ${e.progress}%, #3A3A3A 100%)`};
  ::-webkit-slider-thumb {
    opacity: 0;
  }
  :hover{
    height:4px;
  }
`;

export const notMusic = styled.div`
width:80px;
height:80px;
background:#606060;
display:flex;
justify-content:center;
align-items:center;
color:whitesmoke;
font-size:12px;
`