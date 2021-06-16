import IntroList from "./List/IntroList";
import * as S from "./styles";
import ArtisList from './List/artistList';
import MusicList from './List/musicList';
import GenreList from './List/genreList';

export default function MainComponent() {
  return (
    <>
      <S.Wrapper>
        <S.Container>
          <S.ContainerComment>나와야 음악이다, 버터멜론 </S.ContainerComment>
          <IntroList/>
          <S.ContainerComment>오늘의 인기곡을 만나보세요!</S.ContainerComment>
          <MusicList/>
          <S.ContainerComment>#힙합, 오늘을 힙하게</S.ContainerComment>
          <MusicList/>
          <S.ContainerComment>#재즈, 분위기에 취하다</S.ContainerComment>
          <MusicList/>
          <S.ContainerComment>#팝, 흘러가는 일상의 변화</S.ContainerComment>
          <MusicList/>
          <S.ContainerComment>추천 아티스트를 만나보세요</S.ContainerComment>
          <ArtisList/>
          <S.ContainerComment>모든 장르 모아보기</S.ContainerComment>
          <GenreList/>
        </S.Container>
      </S.Wrapper>
    </>
  );
}
