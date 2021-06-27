import * as S from "./styles";
import Comment from "@src/assets/comment";
import Heart from "@src/assets/heart";
import PlayBtn from "@src/assets/playBtn";
import Tag from "../public/Tag/index";

export default function MusicInformation() {
  return (
    <S.MusicInforContainer>
      <S.CoverImg src="https://i.pinimg.com/originals/b4/75/00/b4750046d94fed05d00dd849aa5f0ab7.jpg" />
      <S.DetailContainer>
        <S.Date>2020-02-02</S.Date>
        <S.Title>
          <S.PlayBtn>
            <PlayBtn />
          </S.PlayBtn>
          <div>
            <span>HOLY SHIT</span>
            <S.Singer>김팔복</S.Singer>
          </div>
        </S.Title>
        <Tag tags={["힙합", "기분좋은", "아침에"]} />
        <S.IconContainer>
          <div>
            <Comment />
            <span>112</span>
          </div>
          <div>
            <Heart />
            <span>112</span>
          </div>
        </S.IconContainer>
      </S.DetailContainer>
    </S.MusicInforContainer>
  );
}
