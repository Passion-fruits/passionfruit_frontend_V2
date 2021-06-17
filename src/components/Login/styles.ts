import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { COLOR } from "styles";

export const Wrapper = styled.div`
width:100%;
height:100vh;
position:relative;
display:flex;
justify-content:center;
align-items:center;
`

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
`

interface waveProps{
    time : string;
}

export const WaveBar = styled.div`
width:25px;
background:${COLOR.green};
border-radius:24px;
margin-left:50px;
box-shadow:0px 0px 40px ${COLOR.green};
animation:${WaveAnim} ${(e : waveProps)=>`${e.time}s`} infinite;
animation-timing-function:linear;
`

export const CoverWrapper = styled.div`
width:100%;
height:100%;
position:absolute;
background:rgb(0,0,0,0.5);
backdrop-filter: blur(12px);
`