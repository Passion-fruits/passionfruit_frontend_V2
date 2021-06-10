import * as S from "./styles";
import Comment from "@src/assets/comment";
import Heart from "@src/assets/heart";

export default function MusicInfor() {
  return (
    <>
      <S.MusicInforContainer>
        <S.CoverImg src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/pride-album-cover-art-design-template-d2bf21df8ead7742d0af24f0143097df_screen.jpg?ts=1596467888" />
        <S.InforContainer>
          <S.Title>오늘을 보자.</S.Title>
          <S.MusicianName>juice world</S.MusicianName>
        </S.InforContainer>
      </S.MusicInforContainer>
      <S.MusicInforContainer>
        <Comment />
        <Heart />
      </S.MusicInforContainer>
    </>
  );
}
