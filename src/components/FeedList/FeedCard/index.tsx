import * as S from "./styles";
import Tag from "../../public/Tag";
import { Play } from "../../../assets";
import Comment from "../../../assets/comment";
import Heart from "../../../assets/heart";
import { FeedCardProps } from "./../../../libs/interfaces/feed";

function FeedCard(param: FeedCardProps) {
  const {
    profile_url,
    cover_url,
    song_url,
    user_name,
    date,
    title,
    tag,
    description,
    heart,
    comment,
    song_id,
    user_id,
  } = param;
  return (
    <S.Container>
      <>
        <S.UserWrapper>
          <img src={profile_url} />
          <span>{user_name}</span>
        </S.UserWrapper>
      </>
      <>
        <S.Wrapper>
          <S.CoverImg src={cover_url} />
          <S.Content>
            <time>{date}</time>
            <S.TitleWrapper>
              <Play size={37} type="white" />
              <S.Title>{title}</S.Title>
            </S.TitleWrapper>
            <Tag tags={tag} />
            <S.Des>{description}</S.Des>
          </S.Content>
        </S.Wrapper>
      </>
      <>
        <S.IconWrapper>
          <S.PointerWrapper>
            <Comment />
            <S.Value>{comment}</S.Value>
          </S.PointerWrapper>
          <S.PointerWrapper>
            <Heart />
            <S.Value>{heart}</S.Value>
          </S.PointerWrapper>
        </S.IconWrapper>
      </>
    </S.Container>
  );
}

export default FeedCard;
