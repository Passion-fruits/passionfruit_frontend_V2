import { useState } from "react";
import Comment from "./comment";
import MusicInformation from "./musicInformation";
import * as S from "./styles";

export default function MusicDetail({musicObj}) {
  const [gradientColor, setGradientColor] = useState<string>("");
  return (
    <S.AllWrapper>
      <S.BackgroundGradient color={gradientColor} />
      <S.Wrapper>
        <>
          <MusicInformation
            musicObj={musicObj}
            setGradient={setGradientColor}
          />
        </>
        <>
          <S.CommentContainer>
            <input placeholder="공개댓글 추가 ( 엔터를 누르면 등록됩니다. )" />
            <span>0 / 220</span>
          </S.CommentContainer>
        </>
        <>
          <S.CommentBoundary>
            전체댓글 <span>{musicObj.comment}개</span>
          </S.CommentBoundary>
        </>
        <>
{/*           <Comment
            name="김팔복"
            date="5일 전"
            content="곡이 ㅈ되뿌노 ㅋㅋㅋ"
            src="https://img.theweek.in/content/dam/week/magazine/theweek/leisure/images/2020/2/22/72-Naezy.jpg"
          /> */}
        </>
      </S.Wrapper>
    </S.AllWrapper>
  );
}
