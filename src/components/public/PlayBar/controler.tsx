import BeforeBtn from "@src/assets/beforeBtn";
import NextBtn from "@src/assets/nextBtn";
import PlayBtn from "@src/assets/playBtn";
import { useEffect, useState,useRef } from "react";
import * as S from "./styles";
import Pause from './../../../assets/pause';
import { lpad } from './../../../libs/functions/lpad';

export default function Controler() {
  const [playBool,setPlayBool] = useState<boolean>(false);
  const [music] = useState(typeof Audio !== "undefined" && new Audio("https://p.scdn.co/mp3-preview/ed802aef330353ab73debe7d59fda5dbbe060867?cid=53603d8d7f0e4e2a85cb1339d65303ce"));
  const [progress,setProgress] = useState<number>(0);
  const [time,setTime] = useState<number>(0);
  const [change,setChange] = useState<boolean>(false);
  const PlayBoolRef = useRef(playBool);
  const ChangeRef = useRef(change);
  PlayBoolRef.current = playBool;
  ChangeRef.current = change;
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
    const TimeLine = TimeLinePx / e.target.offsetWidth * 100;
    const Time = Math.round(music.duration * (TimeLine / 100));
    setProgress(TimeLine);
    setChange(true);
    setTime(Time);
    music.currentTime = Time;
  }
  useEffect(()=>{
    if(!isNaN(music.duration)) if(time > music.duration) {
      return;
    }
      setTimeout(()=>{
        if(ChangeRef.current){
          setChange(false);
          return;
        }
        if(PlayBoolRef.current){
          setTime(time + 1);
          setProgress(time / music.duration * 100+1);
        } 
      },1000)
  },[playBool,time])
  useEffect(()=>{
    if(!isNaN(music.duration)) if(time > music.duration) {
      setTime(0);
      setPlayBool(false);
      setProgress(0);
    }
  },[time])
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
        <S.Time>00:{lpad(time,2,0)}</S.Time>
        <S.PlayBar onClick={MoveMusic}>
          <S.ProgressBarWrapper>
            <S.ProgressBar progress={progress} />
            
          <S.ControlCircle className="ControlCircle" />
          </S.ProgressBarWrapper>
        </S.PlayBar>
        <S.Time>
          {isNaN(music.duration) ? "00" : lpad(Math.floor((music.duration%3600)/60),2,0)}:
          {isNaN(music.duration) ? "00" : lpad(Math.ceil(music.duration),2,0)}</S.Time>
      </S.PlayBarContainer>
    </S.ControlContainer>
  );
}
