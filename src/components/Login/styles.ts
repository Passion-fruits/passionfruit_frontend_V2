import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { COLOR } from "styles";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const WaveAnim = keyframes`
0%{
    height:30px;
}
50%{
    height:300px;
}
100%{
    height:30px;
}
`;

interface waveProps {
  time: string;
}

export const WaveBar = styled.div`
  width: 25px;
  background: ${COLOR.green};
  border-radius: 24px;
  margin: 0 25px;
  box-shadow: 0px 0px 40px ${COLOR.green};
  animation: ${WaveAnim} ${(e: waveProps) => `${e.time}s`} infinite;
  animation-timing-function: linear;
`;

export const CoverWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background: rgb(0, 0, 0, 0.6);
  backdrop-filter: blur(12px);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-bottom: 100px;
`;

export const IntroMent = styled.span`
  font-size: 23px;
  font-weight: bold;
  color: white;
`;

export const SubMent = styled.span`
  color: #c2c2c2;
  font-size: 15px;
  margin-top: 20px;
`;

interface Props {
  color: string;
  fontColor?: string;
}

export const SNSContainer = styled.div`
  background: ${(e: Props) => e.color};
  width: 300px;
  padding: 12px 0;
  color: ${({ fontColor = "white" }: Props) => fontColor};
  font-weight: 800;
  text-align: center;
  font-size: 17px;
  border-radius: 3px;
  margin-top: 15px;
  cursor: pointer;
  :first-of-type {
    margin-top: 50px;
  }
`;

export const ColorSpan = styled.span`
  color: ${(e: Props) => e.color};
`;

export const Container = styled.div`
  width: 460px;
  background: white;
  box-shadow: 0px 0px 10px white;
  padding: 90px 40px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  & h1{
    font-size:24px;
    font-weight:800;
    color:black;
    margin:0;
  }
  & h3{
    font-size:17px;
    font-weight:bold;
    color:#C1C1C1;
    margin-top:11px;
    margin-bottom:30px;
  }
  & input {
    background: #f3f3f3;
    border-radius: 3px;
    padding: 0 20px;
    border: 1px solid #b8b8b8;
    width: 100%;
    height: 60px;
    color: black;
    font-size: 17px;
    font-weight: bold;
    &::placeholder {
      color: #b8b8b8;
    }
  }
`;

export const CheckBox = styled.div`
width:100%;
display:flex;
justify-content:flex-end;
align-items:center;
margin-top:22px;
& label{
  color:#C1C1C1;
  font-size:13px;
  border-bottom:1px solid #C1C1C1;
  margin-right:10px;
}
& input[type="checkbox"]{
  cursor: pointer;
  border-radius:3px;
  width:20px;
  height:20px;
}
`

export const SubBtn = styled.button`
width:100%;
height:60px;
background:black;
color:white;
font-size:22px;
font-weight:800;
border-radius:3px;
margin-top:30px;
cursor: pointer;
`

export const GenreList = styled.div`
display:grid;
grid-template-columns:repeat(3,1fr);
justify-items:center;
height:200px;
overflow-y:scroll;
grid-row-gap:20px;
margin-bottom:10px;
::-webkit-scrollbar{
  width:3px;
  background:whitesmoke;
  border-radius:24px;
  overflow:hidden;
}
::-webkit-scrollbar-thumb{
  background:black;
  border-radius:24px;
}
`

export const Genre = styled.div`
width:100px;
height:100px;
border-radius:80%;
border:1px solid #C2C2C2;
cursor: pointer;
position:relative;
display:flex;
justify-content:center;
align-items:center;
padding:0 10px;
color:#C2C2C2;
font-size:16px;
`