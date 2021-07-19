import { ArtistInfor } from "@src/libs/interfaces/main";
import * as S from "../styles";
import UserProfile from "../../public/UserProfile";

export default function ProfileList() {
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
        "https://www.nme.com/wp-content/uploads/2020/01/lilnasx-2000x1270-1.jpg",
    },
    {
      name: "김팔복",
      followerCount: "12",
      imgUrl:
        "https://static.bangkokpost.com/media/content/20210402/c1_3937571.jpg",
    },
    {
      name: "Hvi_loginc",
      followerCount: "42,009",
      imgUrl:
        "https://www.milleworld.com/wp-content/uploads/2020/05/muslimrappers1.jpg",
    },
    {
      name: "Easy Mac",
      followerCount: "41",
      imgUrl:
        "https://i.scdn.co/image/fa893cd35b8d92ef8ee25cd7a74a8c53384190bb",
    },
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
        "https://www.nme.com/wp-content/uploads/2020/01/lilnasx-2000x1270-1.jpg",
    },
    {
      name: "김팔복",
      followerCount: "12",
      imgUrl:
        "https://static.bangkokpost.com/media/content/20210402/c1_3937571.jpg",
    },
    {
      name: "Hvi_loginc",
      followerCount: "42,009",
      imgUrl:
        "https://www.milleworld.com/wp-content/uploads/2020/05/muslimrappers1.jpg",
    },
    {
      name: "Easy Mac",
      followerCount: "41",
      imgUrl:
        "https://i.scdn.co/image/fa893cd35b8d92ef8ee25cd7a74a8c53384190bb",
    },
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
        "https://www.nme.com/wp-content/uploads/2020/01/lilnasx-2000x1270-1.jpg",
    },
    {
      name: "김팔복",
      followerCount: "12",
      imgUrl:
        "https://static.bangkokpost.com/media/content/20210402/c1_3937571.jpg",
    }
  ];
  return (
    <S.GRID_BOX>
      {artistArr.map((e: ArtistInfor, index: number) => (
        <UserProfile
          key={index}
          name={e.name}
          followerCount={e.followerCount}
          imgUrl={e.imgUrl}
        />
      ))}
    </S.GRID_BOX>
  );
}
