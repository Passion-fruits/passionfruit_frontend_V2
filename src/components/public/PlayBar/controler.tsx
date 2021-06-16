import BeforeBtn from "@src/assets/beforeBtn";
import NextBtn from "@src/assets/nextBtn";
import PlayBtn from "@src/assets/playBtn";
import { useEffect, useState,useRef } from "react";
import * as S from "./styles";
import Pause from './../../../assets/pause';
import { lpad } from './../../../libs/functions/lpad';
import { ControlerProps } from "@src/libs/interfaces/playBar";

export default function Controler({volume} : ControlerProps) {
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
    if(music) music.volume = volume;
  },[volume])

  useEffect(() => {
    if (playBool) {
      music.play();
      return;
    }
    music.pause();
  }, [playBool]);

  const MusicOnOff=():void=>{
    setPlayBool(!playBool);
  }

  const MoveMusic = (e: any): void => {
    const value: number = e.target.value;
    const timeMove : number = music.duration * (value / 100);
    music.currentTime = timeMove;
    setChange(true);
    setProgress(value);
    setTime(timeMove);
    setPlayBool(true);
  };
  useEffect(()=>{
    if(isNaN(music.duration) || time > music.duration) return;
      setTimeout(()=>{
        if(ChangeRef.current){
          setChange(false);
          return;
        }
        if(PlayBoolRef.current){
          setTime(time + 0.1);
          setProgress(Math.floor(time / music.duration * 100+1));
        } 
      },100)
  },[playBool,time,change])
  useEffect(()=>{
    if(!isNaN(music.duration) && time > music.duration) setPlayBool(false);
  },[time])

  return (
    <S.ControlContainer>
      <S.IconContainer>
        <BeforeBtn />
        { playBool ? <Pause onClickEvent={MusicOnOff}/> :<PlayBtn onClickEvent={MusicOnOff} /> }
        <NextBtn />
      </S.IconContainer>

      <S.PlayBarContainer>
        <S.Time>00:{lpad(Math.floor(time),2,0)}</S.Time>
        <S.PlayBar>
            <S.RangePlayBar defaultValue="0" progress={progress} onClick={MoveMusic} type="range" />
        </S.PlayBar>
        <S.Time>
          {isNaN(music.duration) ? "00" : lpad(Math.floor((music.duration%3600)/60),2,0)}:
          {isNaN(music.duration) ? "00" : lpad(Math.floor(music.duration),2,0)}</S.Time>
      </S.PlayBarContainer>
    </S.ControlContainer>
  );
}