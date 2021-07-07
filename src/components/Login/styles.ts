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
  margin:0 25px;
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
  padding-bottom:100px;
  & input{
    border-bottom:2px solid ${COLOR.green};
    width:500px;
    color:${COLOR.green};
    font-size:19px;
    font-weight:bold;
    padding:15px 0;
    &::placeholder{
      color:${COLOR.green};
    }
  }
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
  font-size: 15px;
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
/* 
export const Slid */