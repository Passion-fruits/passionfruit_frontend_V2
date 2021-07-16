import { commentProps } from "@src/libs/interfaces/musicDetail";
import { useRouter } from "next/router";
import * as S from "./styles";

export default function Comment({
  name,
  date,
  content,
  src,
  user_id,
}: commentProps) {
  const router = useRouter();
  const linkUserProfile = () => {
    router.push(`/profile/${user_id}`);
  };
  return (
    <S.Comment>
      <S.ProfileImg src={src} onClick={linkUserProfile} />
      <S.CommentDetail>
        <S.Writter onClick={linkUserProfile}>
          {name}
          <S.CIRCLE />
          <time>{date}</time>
        </S.Writter>
        <S.CommentContent>{content}</S.CommentContent>
      </S.CommentDetail>
    </S.Comment>
  );
}
