import { commentProps } from "@src/libs/interfaces/musicDetail";
import * as S from "./styles";

export default function Comment({ name, date, content, src }: commentProps) {
  return (
    <S.Comment>
      <S.ProfileImg src={src} />
      <S.CommentDetail>
      <S.Writter>
          {name} <time>{date}</time>
        </S.Writter>
        <S.CommentContent>{content}</S.CommentContent>
      </S.CommentDetail>
    </S.Comment>
  );
}
