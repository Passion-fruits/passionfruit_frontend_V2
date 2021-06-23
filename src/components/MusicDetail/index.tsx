import Comment from "./comment";
import MusicInformation from "./musicInformation";
import * as S from "./styles";

export default function MusicDetail() {
  return (
    <S.AllWrapper>
      <S.Wrapper>
        <MusicInformation />
        <S.Line />

        <S.MusicDescriptionContainer>
          <span>곡 설명</span>
          <S.MusicDescripton>
            안녕하세요. 제가 이 곡을 쓰게 된 이유는... 그냥 한번 써봤고요 ㅎㅎ
          </S.MusicDescripton>
        </S.MusicDescriptionContainer>
        <S.Line />

        <S.CommentContainer>
          <S.ProfileImg src="https://static.highsnobiety.com/thumbor/fJpC1G6h33nBnQllq3f912l8bx8=/1600x1067/static.highsnobiety.com/wp-content/uploads/2015/07/28105919/rapper-snapchat-usernames-main.jpg" />
          <S.Input placeholder="공개댓글 추가하기" />
        </S.CommentContainer>
        <S.BtnContainer>
          <S.ControlBtn>취소</S.ControlBtn>
          <S.ControlBtn>등록</S.ControlBtn>
        </S.BtnContainer>

        <Comment
          name="김팔복"
          date="2020-01-12"
          content="곡이 ㅈ되뿌노 ㅋㅋㅋ ㅋ이ㅏㄹ너이런이런이러ㅣ먼압러나ㅣ얼마ㅣㅇ란어ㅏ미러ㅏㅣㄴㅇ러ㅣㅏㅁㄴ어리;ㅏ먼ㅇ리ㅏㅓㅁ나ㅣㅇ러마ㅣ러ㅣㅏ;먼ㅇ리ㅏㅁㄴㅇ라ㅣㅓㅣ"
          src="https://img.theweek.in/content/dam/week/magazine/theweek/leisure/images/2020/2/22/72-Naezy.jpg"
        />
        <Comment
          name="김팔복"
          date="2020-01-12"
          content="곡이 ㅈ되뿌노 ㅋㅋㅋasdkjf;alsdjk"
          src="https://img.theweek.in/content/dam/week/magazine/theweek/leisure/images/2020/2/22/72-Naezy.jpg"
        />
        <Comment
          name="김팔복"
          date="2020-01-12"
          content="곡이 ㅈ되뿌노 ㅋㅋㅋ"
          src="https://img.theweek.in/content/dam/week/magazine/theweek/leisure/images/2020/2/22/72-Naezy.jpg"
        />
        <Comment
          name="김팔복"
          date="2020-01-12"
          content="곡이 ㅈ되뿌노 ㅋㅋㅋ"
          src="https://img.theweek.in/content/dam/week/magazine/theweek/leisure/images/2020/2/22/72-Naezy.jpg"
        />

      </S.Wrapper>
    </S.AllWrapper>
  );
}
