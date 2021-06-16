import * as S from "./styles";
import Heart from "@src/assets/heart";
import Volume from "@src/assets/volume";
import { useState } from "react";
import Controler from "./controler";

export default function MusicInfor() {
  const [volume, setVolume] = useState<number>(0.5);
  const volumeControl = (e): void => {
    console.log(e.target.value);
    setVolume(e.target.value / 100);
  };
  return (
    <>
      <Controler volume={volume} />

      <S.MusicInforContainer>
        <S.CoverImg src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/pride-album-cover-art-design-template-d2bf21df8ead7742d0af24f0143097df_screen.jpg?ts=1596467888" />
        <S.InforContainer>
          <S.Title>오늘을 보자.</S.Title>
          <S.MusicianName>juice world</S.MusicianName>
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
