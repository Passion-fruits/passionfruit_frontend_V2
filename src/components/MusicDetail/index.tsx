import { useState } from "react";
import Comment from "./comment";
import MusicInformation from "./musicInformation";
import * as S from "./styles";

export default function MusicDetail() {
  const [gradientColor,setGradientColor] = useState<string>("");
  return (
    <S.AllWrapper>
      <S.BackgroundGradient color={gradientColor}/>
      <S.Wrapper>
        { /* 음악 정보 컴포넌트 */ }
        <MusicInformation setGradient={setGradientColor} />
        {/* 댓글 쪽 */}
        <S.CommentContainer>
          <S.ProfileImg src="https://static.highsnobiety.com/thumbor/fJpC1G6h33nBnQllq3f912l8bx8=/1600x1067/static.highsnobiety.com/wp-content/uploads/2015/07/28105919/rapper-snapchat-usernames-main.jpg" />
          <S.Input placeholder="공개댓글 추가 ( 엔터를 누르면 등록됩니다. )" />
          <S.InputLimit>0 / 220</S.InputLimit>
        </S.CommentContainer>
        <S.CommentBoundary>
          Comment <span>(15)</span>
        </S.CommentBoundary>
        <Comment
          name="김팔복"
          date="5일 전"
          content="곡이 ㅈ되뿌노 ㅋㅋㅋ"
          src="https://img.theweek.in/content/dam/week/magazine/theweek/leisure/images/2020/2/22/72-Naezy.jpg"
        />
                <Comment
          name="김팔복"
          date="5일 전"
          content="곡이 ㅈ되뿌노 ㅋㅋㅋ"
          src="https://img.theweek.in/content/dam/week/magazine/theweek/leisure/images/2020/2/22/72-Naezy.jpg"
        />
                <Comment
          name="김팔복"
          date="5일 전"
          content="곡이 ㅈ되뿌노 ㅋㅋㅋ"
          src="https://img.theweek.in/content/dam/week/magazine/theweek/leisure/images/2020/2/22/72-Naezy.jpg"
        />
                <Comment
          name="김팔복"
          date="5일 전"
          content="곡이 ㅈ되뿌노 ㅋㅋㅋ"
          src="https://img.theweek.in/content/dam/week/magazine/theweek/leisure/images/2020/2/22/72-Naezy.jpg"
        />

      </S.Wrapper>
    </S.AllWrapper>
  );
}
