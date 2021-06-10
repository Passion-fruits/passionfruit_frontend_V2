import * as S from "./styles";
import UserProfile from "../public/UserProfile";
import { ArtistInfor } from "../../libs/interfaces/main";

export default function ArtisList() {
  const artistArr: ArtistInfor[] = [
    {
      name: "Mac miller",
      followerCount: "12",
      imgUrl:
        "https://i.guim.co.uk/img/media/fcdbcf43a17975743672d4cc770b55a65a469cf3/0_61_3096_1857/master/3096.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=573a5ec6e19e6356ebc553e777d5c6ca",
    },
    {
      name: "Eminem",
      followerCount: "1,120",
      imgUrl:
        "https://mblogthumb-phinf.pstatic.net/MjAxODA4MTdfMjEy/MDAxNTM0NDg5OTAxMjUz.Dun-ieIhspxPwMv7pGacLr0D7nSwkar-YHXwGGbEeUMg.H_WaFBvPsxWqGI7NYOoMtwVjALYX4WyS_fusbuInx78g.JPEG.math7wine/1534489899443.jpg?type=w800",
    },
    {
      name: "김팔복",
      followerCount: "12",
      imgUrl:
        "https://pds.joins.com/news/component/htmlphoto_mmdata/201911/17/eb238b85-66a7-4fd6-99d9-dee9f40394ff.jpg",
    },
    {
      name: "Hvi_loginc",
      followerCount: "42,009",
      imgUrl:
        "https://mblogthumb-phinf.pstatic.net/20111211_195/pusankjs_1323605264820OlDvb_JPEG/ZUgxp6gC8FZcxWrraVbLDBTvdF.jpg?type=w420",
    },
    {
      name: "Easy Mac",
      followerCount: "41",
      imgUrl:
        "https://i.guim.co.uk/img/media/fcdbcf43a17975743672d4cc770b55a65a469cf3/0_61_3096_1857/master/3096.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=573a5ec6e19e6356ebc553e777d5c6ca",
    },
  ];
  return (
    <S.SpaceContainer>
      {artistArr.map((e: ArtistInfor, index: number) => (
        <UserProfile
          key={index}
          name={e.name}
          followerCount={e.followerCount}
          imgUrl={e.imgUrl}
        />
      ))}
    </S.SpaceContainer>
  );
}
