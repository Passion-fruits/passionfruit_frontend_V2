import * as S from "./styles";
import { setValue } from "@src/libs/context";
import { useEffect, useRef } from "react";
import { useRouter } from "next/router";
import {
  Heart,
  Time,
  AddPlayList,
  Share,
  Alert,
} from "../../assets/musicDetail";
import { Play } from "@src/assets";
import { ColorThief } from "./../../libs/functions/colorThief";
import Tag from "../public/Tag";

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
    ColorThief({
      cv: cv,
      setColor: setGradient,
      url: cover_url,
    });
  }, [cover_url, cv]);

  return (
    <>
      <S.MusicInforContainer>
        <canvas style={{ display: "none" }} ref={canvas} />
        <S.CoverImg src={cover_url} />
        <S.DetailContainer>
          <>
            <S.Title>
              <Play size="40" type="white" clickCallback={changeMusic} />
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
          <Tag tags={["힙합", "힙합"]} />
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
