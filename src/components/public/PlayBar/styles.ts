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

export const ProfileContainer = styled.div`
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
  height:100%;
  display: flex;
  position: absolute;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const IconContainer = styled.div`
width:200px;
display:flex;
justify-content:space-between;
align-items:center;
`

export const PlayBarContainer = styled.div`
width:580px;
height:20px;
display:flex;
justify-content:space-between;
align-items:center;
margin-top:15px;
`

export const Time = styled.span`
color:#AFAFAF;
font-size:13px;
`

export const PlayBar = styled.div`
width:480px;
height:100%;
display:flex;
align-items:center;
cursor: pointer;
position:relative;
:hover .ControlCircle{
  opacity:1;
}
`

export const ProgressBarWrapper = styled.div`
width:100%;
height:3px;
background:#3A3A3A;
border-radius:24px;
overflow:hidden;
`

export const ProgressBar = styled.div`
width:10%;
height:100%;
background:${COLOR.pink};
border-radius:24px;
`

export const ControlCircle = styled.div`
width:3px;
height:3px;
border:3px solid ${COLOR.pink};
background:white;
position:absolute;
border-radius:80%;
box-sizing:content-box;
margin-left:10%;
opacity:0;
transition:0.3s;
`