import BeforeBtn from "@src/assets/beforeBtn";
import NextBtn from "@src/assets/nextBtn";
import PlayBtn from "@src/assets/playBtn";
import { useEffect, useRef, useState } from "react";
import * as S from "./styles";
import Pause from './../../../assets/pause';

export default function Controler() {
  const [playBool,setPlayBool] = useState<boolean>(false);
  const [music] = useState(typeof Audio !== "undefined" && new Audio("https://p.scdn.co/mp3-preview/ed802aef330353ab73debe7d59fda5dbbe060867?cid=53603d8d7f0e4e2a85cb1339d65303ce"));
  const [progress,setProgress] = useState<number>(0);
  useEffect(()=>{
    if(playBool){
      music.play();
    }else{
      music.pause();
    }
  },[playBool])
  const MusicOnOff=():void=>{
    setPlayBool(!playBool);
  }
  const MoveMusic=(e : any):void=>{
    const TimeLinePx = e.clientX - e.target.getBoundingClientRect().left;
    const TimeLine = TimeLinePx/ e.target.offsetWidth * 100;
    setProgress(TimeLine);
    music.currentTime = music.duration * (TimeLine / 100);
    console.log(music.duration * (TimeLine / 100))
  }
  return (
    <S.ControlContainer>
      <S.IconContainer>
        <BeforeBtn />
        {
          playBool ? <Pause onClickEvent={MusicOnOff}/> :<PlayBtn onClickEvent={MusicOnOff} />
        }
        <NextBtn />
      </S.IconContainer>

      <S.PlayBarContainer>
        <S.Time>00:00</S.Time>
        <S.PlayBar onClick={MoveMusic}>
          <S.ProgressBarWrapper>
            <S.ProgressBar progress={progress} />
            
          <S.ControlCircle className="ControlCircle" />
          </S.ProgressBarWrapper>
        </S.PlayBar>
        <S.Time>03:11</S.Time>
      </S.PlayBarContainer>
    </S.ControlContainer>
  );
}
