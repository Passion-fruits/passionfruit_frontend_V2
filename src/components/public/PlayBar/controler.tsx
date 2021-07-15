import BeforeBtn from "@src/assets/beforeBtn";
import NextBtn from "@src/assets/nextBtn";
import PlayBtn from "@src/assets/playBtn";
import { useEffect, useState, useRef } from "react";
import * as S from "./styles";
import Pause from "./../../../assets/pause";
import { lpad } from "./../../../libs/functions/lpad";
import { ControlerProps } from "@src/libs/interfaces/playBar";

export default function Controler({ volume, musicUrl }: ControlerProps) {
  const [playBool, setPlayBool] = useState<boolean>(false);
  const [music, setMusic] = useState(
    typeof Audio !== "undefined" && new Audio(musicUrl)
  );
  const [progress, setProgress] = useState<number>(0);
  const [time, setTime] = useState<number>(0);
  const [change, setChange] = useState<boolean>(false);
  const [musicLoader, setMusicLoader] = useState<boolean>(false);
  const PlayBoolRef = useRef(playBool);
  const ChangeRef = useRef(change);
  PlayBoolRef.current = playBool;
  ChangeRef.current = change;
  const TIME_ONE_PROGRESS = 1;

  const MusicOnOff = (): void => {
    setPlayBool(!playBool);
  };

  const MoveMusic = (e: any): void => {
    const value: number = e.target.value;
    const timeMove: number = music.duration * (value / 100);
    music.currentTime = timeMove;
    setChange(true);
    setProgress(value);
    setTime(timeMove);
    setPlayBool(true);
  };

  const conversionTime = (time): number => {
    return isNaN(music.duration) ? "00" : lpad(Math.floor(time), 2, 0);
  };

  useEffect(() => {
    setPlayBool(false);
    setTimeout(() => {
      setMusic(typeof Audio !== "undefined" && new Audio(musicUrl));
    }, 100);
  }, [musicUrl]);

  useEffect(() => {
    if (musicUrl !== "") {
      if (isNaN(music.duration)) {
        setTimeout(() => {
          setMusicLoader(!musicLoader);
        }, TIME_ONE_PROGRESS * 1000);
      } else {
        setTime(0);
        setPlayBool(true);
        setProgress(0);
        music.currentTime = 0;
      }
    }
  }, [music, musicLoader]);

  useEffect(() => {
    if (music) music.volume = volume;
  }, [volume, musicLoader]);

  useEffect(() => {
    if (playBool) {
      music.play();
      return;
    }
    music.pause();
  }, [playBool]);

  useEffect(() => {
    if (isNaN(music.duration) || time > music.duration) return;
    setTimeout(() => {
      if (ChangeRef.current) {
        setChange(false);
        return;
      }
      if (PlayBoolRef.current) {
        setTime(time + TIME_ONE_PROGRESS);
        setProgress(Math.floor((time / music.duration) * 100 + 1));
      }
    }, TIME_ONE_PROGRESS * 1000);
  }, [playBool, time, change]);

  useEffect(() => {
    if (!isNaN(music.duration) && time > music.duration) setPlayBool(false);
  }, [time]);

  return (
    <S.ControlContainer>
      <>
        <S.IconContainer>
          <BeforeBtn />
          {playBool ? (
            <Pause onClickEvent={MusicOnOff} />
          ) : (
            <PlayBtn onClickEvent={MusicOnOff} />
          )}
          <NextBtn />
        </S.IconContainer>
      </>
      <>
        <S.PlayBarContainer>
          <S.Time>
            {conversionTime(time / 60)}:{conversionTime(time % 60)}
          </S.Time>
          <>
            <S.PlayBar>
              <S.RangePlayBar
                defaultValue="0"
                progress={progress}
                onClick={MoveMusic}
                type="range"
              />
            </S.PlayBar>
          </>
          <S.Time>
            {conversionTime(music.duration / 60)}:
            {conversionTime(music.duration % 60)}
          </S.Time>
        </S.PlayBarContainer>
      </>
    </S.ControlContainer>
  );
}
