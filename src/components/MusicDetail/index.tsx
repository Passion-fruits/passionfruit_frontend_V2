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

        <S.Comment>
          <S.ProfileImg src="https://i.guim.co.uk/img/media/07928d2cd676c69d0573b4ed3b756b7db3ad49ac/428_204_1722_1034/master/1722.jpg?width=445&quality=45&auto=format&fit=max&dpr=2&s=54a6af1026bcca5046c5a84d862721b4" />
          <S.CommentDetail>
            <S.Writter>
              장필준 <time>2020-01-01</time>
            </S.Writter>
            <S.CommentContent>
              What the fuck is this song?? 곡이 ㅈ되뿌노
            </S.CommentContent>
          </S.CommentDetail>
        </S.Comment>
        
      </S.Wrapper>
    </S.AllWrapper>
  );
}
