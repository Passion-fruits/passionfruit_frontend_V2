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
}

export default function MusicInformation({setGradient} : props) {
  const url = "https://i1.sndcdn.com/avatars-000265518371-amlg8s-t250x250.jpg"
  const canvas = useRef();
  const cv: HTMLCanvasElement = canvas.current;
  useEffect(()=>{
    var img = new Image();
    img.crossOrigin = "Anonymous";
    img.src = url;
    img.onload =()=>{
      const ctx = cv?.getContext("2d");
      ctx?.drawImage(img,0,0,300,300);
      var pixel = ctx?.getImageData(50, 50, 1, 1);
      const data = pixel?.data;
      if(data) setGradient(`rgba(${data[0]},${data[1]},${data[2]})`)
    }
  })
  return (
    <>

      <canvas style={{display:"none"}} ref={canvas}/>
      <S.MusicInforContainer>
        <S.CoverImg src={url} />
        <S.DetailContainer>
          <S.Hashtag>
            <span># 힙합</span>
            <span># 힙합</span>
          </S.Hashtag>
          <S.Title>
            <S.PlayBtn>
              <Play />
            </S.PlayBtn>
            <span>Still Dre</span>
          </S.Title>
          <S.SingerWithDate>
            <span>코난 오브리언 </span>
            <S.CIRCLE />
            <Time />
            <time>2020-02-12</time>
          </S.SingerWithDate>
          <S.IconBox>
            <AddPlayList />
            <Share />
            <Alert />
          </S.IconBox>
          <S.HeartBox>
            <Heart />
            <span>112</span>
          </S.HeartBox>
        </S.DetailContainer>
      </S.MusicInforContainer>
      {/* 곡설명 */}
      <S.MusicDescriptionContainer>
        <span>곡에 대한 설명</span>
        <S.MusicDescripton>
          안녕하세요. 제가 이 곡을 쓰게 된 이유는... 그냥 한번 써봤고요 ㅎㅎ
        </S.MusicDescripton>
      </S.MusicDescriptionContainer>
    </>
  );
}
