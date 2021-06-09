import FollowerIcon from "@src/assets/followerIcon";
import { UserProfileProps } from "@src/libs/interfaces/userProfile";
import { ImgWrapper, CoverImg } from "styles";
import * as S from "./styles";

export default function UserProfile({
  width = "210",
  height = "270",
  name,
  followerCount,
  imgUrl,
}: UserProfileProps) {
  return (
    <S.Wrapper width={width} height={height}>
      <ImgWrapper>
        <CoverImg src={imgUrl} />
      </ImgWrapper>
      <S.FollowCircle className="follow">+</S.FollowCircle>
      <S.Name>{name}</S.Name>
      <S.Follower>
        <FollowerIcon />
        {followerCount} 명
      </S.Follower>
    </S.Wrapper>
  );
}
