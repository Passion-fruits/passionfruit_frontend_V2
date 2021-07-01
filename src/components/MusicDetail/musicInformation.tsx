import * as S from "./styles";
import {
  Play,
  Heart,
  Time,
  AddPlayList,
  Share,
  Alert,
} from "../../assets/musicDetail";

export default function MusicInformation() {
  return (
    <>
      <S.MusicInforContainer>
        <S.CoverImg src="https://i.pinimg.com/originals/b4/75/00/b4750046d94fed05d00dd849aa5f0ab7.jpg" />
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
