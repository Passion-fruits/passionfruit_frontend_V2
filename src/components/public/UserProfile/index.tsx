import FollowerIcon from "@src/assets/followerIcon";
import Heart from "@src/assets/heart";
import { UserProfileProps } from "@src/libs/interfaces/userProfile";
import { CircleImgWrapper } from "styles";
import * as S from "./styles";
import { useRouter } from 'next/router';

export default function UserProfile({
  width = "200",
  height = "270",
  name,
  followerCount,
  imgUrl,
}: UserProfileProps) {
  const router = useRouter();
  const linking=():void=>{
    router.push(`/profile/${name}`)
  }
  return (
    <S.Wrapper onClick={linking} width={width} height={height}>
      <CircleImgWrapper>
        <S.Profile src={imgUrl} />
      </CircleImgWrapper>
        <S.Name>{name}</S.Name>
        <S.Follower>
        {name}'s follower 14
        </S.Follower>
    </S.Wrapper>
  );
}
