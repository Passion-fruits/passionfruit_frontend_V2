import * as S from "./styles";
import {
  Play,
  Heart,
  Time,
  AddPlayList,
  Share,
  Alert,
} from "../../assets/musicDetail";
import { useEffect,useRef } from "react";

interface props{
  setGradient(e) : void;
  musicObj : any;
}

export default function MusicInformation({setGradient,musicObj} : props) {
  const canvas = useRef();
  const cv: HTMLCanvasElement = canvas.current;
  useEffect(()=>{
    var img = new Image();
    img.crossOrigin = "Anonymous";
    img.src = musicObj.cover_url;
    img.onload =()=>{
      const ctx = cv?.getContext("2d");
      ctx?.drawImage(img,0,0,300,300);
      var pixel = ctx?.getImageData(0, 0, 1, 1);
      const data = pixel?.data;
      console.log(data);
      if(data) setGradient(`rgba(${data[0]},${data[1]},${data[2]})`)
    }
  },[musicObj,cv])
  return (
    <>
      <canvas style={{display:"none"}} ref={canvas}/>
      <S.MusicInforContainer>
        <S.CoverImg src={musicObj.cover_url} />
        <S.DetailContainer>
          <S.Hashtag>
            <span># 힙합</span>
            <span># 힙합</span>
          </S.Hashtag>
          <S.Title>
            <S.PlayBtn>
              <Play />
            </S.PlayBtn>
            <span>{musicObj.title}</span>
          </S.Title>
          <S.SingerWithDate>
            <span>{musicObj.artist}</span>
            <S.CIRCLE />
            <Time />
            <time>{musicObj.created_at.substring(0,10)}</time>
          </S.SingerWithDate>
          <S.IconBox>
            <AddPlayList />
            <Share />
            <Alert />
          </S.IconBox>
          <S.HeartBox>
            <Heart />
            <span>{musicObj.like}</span>
          </S.HeartBox>
        </S.DetailContainer>
      </S.MusicInforContainer>
      {/* 곡설명 */}
      <S.MusicDescriptionContainer>
        <span>곡에 대한 설명</span>
        <S.MusicDescripton>
          {musicObj.description}
        </S.MusicDescripton>
      </S.MusicDescriptionContainer>
    </>
  );
}
