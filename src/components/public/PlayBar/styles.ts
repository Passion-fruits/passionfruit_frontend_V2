import styled from "@emotion/styled";
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
  cursor: pointer;
  position: relative;
  :hover .ControlCircle {
    background: white;
  }
`;

export const ProgressBarWrapper = styled.div`
  width: 100%;
  height: 3px;
  background: #3a3a3a;
  border-radius: 24px;
  display:flex;
  align-items:center;
`;

interface props{
  progress : number
}

export const ProgressBar = styled.div`
  width: ${(e:props)=>e.progress}%;
  height: 100%;
  background: ${COLOR.pink};
  border-radius: 24px;
  pointer-events:none;
  transition:1s;
  transition-timing-function:linear;
`;

export const ControlCircle = styled.div`
  width: 3px;
  height: 3px;
  border: 3px solid ${COLOR.pink};
  border-radius: 80%;
  box-sizing: content-box;
  pointer-events:none;
  background:gray;
  transition:0.4s;
`;
