import { useEffect, useState } from "react";
import Comment from "./comment";
import MusicInformation from "./musicInformation";
import * as S from "./styles";
import musicRequest from "../../libs/api/musicDetail";

export default function MusicDetail({ musicObj }) {
  const [gradientColor, setGradientColor] = useState<string>("");
  const [comment, setComment] = useState<string>("");
  const [commentArr, setCommentArr] = useState<any[]>([]);

  const handleCommment = (event) => {
    if (comment.length > 200) {
      alert("댓글은 200자 제한입니다.");
      return;
    }
    setComment(event.target.value);
  };

  const postComment = (event) => {
    event.preventDefault();
    if (comment === "") {
      alert("댓글을 작성해주세요.");
      return;
    }
    setComment("");
    musicRequest
      .writeMusicComment(musicObj.song_id, comment)
      .then(() => {})
      .catch((err) => {
        const status: number = err.response.status;
        if (status === 400) {
          alert("이미 댓글을 작성하셨습니다.");
          return;
        }
        alert("오류가 발생하였습니다.");
      });
  };

  useEffect(() => {
    musicRequest
      .getMusicComment(musicObj.song_id)
      .then((res) => {
        setCommentArr((_arr) => res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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
            <form onSubmit={postComment}>
              <input
                placeholder="공개댓글 추가 ( 엔터를 누르면 등록됩니다. )"
                onChange={handleCommment}
                value={comment}
              />
            </form>
            <span>{comment.length} / 200</span>
          </S.CommentContainer>
        </>
        <>
          <S.CommentBoundary>
            전체댓글 <span>{musicObj.comment}개</span>
          </S.CommentBoundary>
        </>
        <>
          {commentArr.map((data, index) => (
            <Comment
              key={index}
              name={data.name}
              date="5일 전"
              content={data.comment_content}
              src={data.profile}
            />
          ))}
        </>
      </S.Wrapper>
    </S.AllWrapper>
  );
}
