import * as S from "./styles";
import Heart from "@src/assets/heart";
import Volume from "@src/assets/volume";
import { useState } from "react";
import Controler from "./controler";
import { getValue } from "@src/libs/context";

export default function MusicInfor() {
  const musicInformation = getValue().musicInformation;
  const { coverImg, title, name, musicUrl } = musicInformation;
  const [volume, setVolume] = useState<number>(0.5);
  const volumeControl = (e): void => {
    setVolume(e.target.value / 100);
  };
  return (
    <>
      <Controler volume={volume} musicUrl={musicUrl} />

      <S.MusicInforContainer>
        {coverImg === '' ? <S.notMusic>IMG</S.notMusic> : <S.CoverImg src={coverImg} />}
        <S.InforContainer>
          <S.Title>{title}</S.Title>
          <S.MusicianName>{name}</S.MusicianName>
        </S.InforContainer>
      </S.MusicInforContainer>
      <S.MusicInforContainer>

        <S.VolumeContainer>
          <Volume />
          <S.VolumeBar
            progress={volume * 100}
            onClick={volumeControl}
            type="range"
          />
        </S.VolumeContainer>
        
        <Heart />
      </S.MusicInforContainer>
    </>
  );
}
