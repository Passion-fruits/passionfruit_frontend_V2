import BeforeBtn from "@src/assets/beforeBtn";
import Comment from "@src/assets/comment";
import Heart from "@src/assets/heart";
import NextBtn from "@src/assets/nextBtn";
import PlayBtn from "@src/assets/playBtn";
import * as S from "./styles";

export default function PlayBar() {
  return (
    <S.Wrapper>
      <S.Container>
        <S.ControlContainer>
          <S.IconContainer>
            <BeforeBtn />
            <PlayBtn />
            <NextBtn />
          </S.IconContainer>
        </S.ControlContainer>

        <S.ProfileContainer>
          <S.CoverImg src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/pride-album-cover-art-design-template-d2bf21df8ead7742d0af24f0143097df_screen.jpg?ts=1596467888" />
          <S.InforContainer>
            <S.Title>오늘을 보자.</S.Title>
            <S.MusicianName>juice world</S.MusicianName>
          </S.InforContainer>
        </S.ProfileContainer>
        <S.ProfileContainer>
          <Comment />
          <Heart />
        </S.ProfileContainer>
      </S.Container>
    </S.Wrapper>
  );
}
