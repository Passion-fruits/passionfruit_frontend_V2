import * as S from "./styles";
import { setValue } from "@src/libs/context";
import { useEffect, useRef } from "react";
import { useRouter } from "next/router";
import {
  Play,
  Heart,
  Time,
  AddPlayList,
  Share,
  Alert,
} from "../../assets/musicDetail";

interface props {
  setGradient(e): void;
  musicObj: any;
}

export default function MusicInformation({ setGradient, musicObj }: props) {
  const {
    title,
    artist,
    cover_url,
    song_url,
    created_at,
    like,
    description,
    user_id,
  } = musicObj;
  const dispatch = setValue();
  const canvas = useRef();
  const router = useRouter();
  const cv: HTMLCanvasElement = canvas.current;

  const changeMusic = () => {
    dispatch({
      type: "MUSIC_CHANGE",
      musicInformation: {
        title: title,
        name: artist,
        coverImg: cover_url,
        musicUrl: song_url,
      },
    });
  };

  const linkToUserProfile = () => {
    router.push(`/profile/${user_id}`);
  };

  useEffect(() => {
    var img = new Image();
    img.crossOrigin = "Anonymous";
    img.src = cover_url;
    img.onload = () => {
      const ctx = cv?.getContext("2d");
      ctx?.drawImage(img, 0, 0, 300, 300);
      var pixel = ctx?.getImageData(0, 0, 1, 1);
      const data = pixel?.data;
      if (data) setGradient(`rgba(${data[0]},${data[1]},${data[2]})`);
    };
  }, [musicObj, cv]);

  return (
    <>
      <S.MusicInforContainer>
        <canvas style={{ display: "none" }} ref={canvas} />
        <S.CoverImg src={cover_url} />
        <S.DetailContainer>
          <>
            <S.Hashtag>
              <span># 힙합</span>
              <span># 힙합</span>
            </S.Hashtag>
          </>
          <>
            <S.Title>
              <S.PlayBtn onClick={changeMusic}>
                <Play />
              </S.PlayBtn>
              <span>{title}</span>
            </S.Title>
          </>
          <>
            <S.SingerWithDate>
              <span onClick={linkToUserProfile}>{artist}</span>
              <S.CIRCLE />
              <Time />
              <time>{created_at.substring(0, 10)}</time>
            </S.SingerWithDate>
          </>
          <>
            <S.IconBox>
              <AddPlayList />
              <Share />
              <Alert />
            </S.IconBox>
          </>
          <>
            <S.HeartBox>
              <Heart />
              <span>{like}</span>
            </S.HeartBox>
          </>
        </S.DetailContainer>
      </S.MusicInforContainer>
      <S.MusicDescriptionContainer>
        <span>곡에 대한 설명</span>
        <S.MusicDescripton>{description}</S.MusicDescripton>
      </S.MusicDescriptionContainer>
    </>
  );
}
