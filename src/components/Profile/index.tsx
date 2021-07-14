import * as S from "./styles";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import Menu from "./menu";
import ProfileList from "./List/profileList";
import TrackList from "./List/trackList";
import profile from "../../libs/api/profile";

export default function Profile() {
  const url = "https://i1.sndcdn.com/artworks-000169142537-e22x2o-large.jpg";
  const canvas = useRef();
  const cv: HTMLCanvasElement = canvas.current;
  const [gradient, setGradient] = useState<string>("");
  const [nowMenu, setNowMenu] = useState<string>("track");
  const [musicArr, setMusicArr] = useState<any[]>([]);
  const router = useRouter();
  const id = router.query.id;

  useEffect(() => {
    var img = new Image();
    img.crossOrigin = "Anonymous";
    img.src = url;
    img.onload = () => {
      const ctx = cv?.getContext("2d");
      ctx?.drawImage(img, 0, 0, 300, 300);
      var pixel = ctx?.getImageData(50, 50, 1, 1);
      const data = pixel?.data;
      if (data) setGradient(`rgba(${data[0]},${data[1]},${data[2]})`);
    };
  }, [cv]);

  useEffect(() => {
    if (id === "myprofile") {
      profile
        .getMyMusic()
        .then((res) => {
          setMusicArr(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [router]);

  return (
    <S.Wrapper>
      <canvas style={{ display: "none" }} ref={canvas} />
      <S.GradientBox color={gradient} />
      <S.Container>
        <>
          <S.TOP_BAR>
            <S.ProfileInfor>
              <S.Profile src={url} />
              <S.UserInfor>
                <h1>hash swan</h1>
                <span>jidole041214@naver.com</span>
              </S.UserInfor>
            </S.ProfileInfor>
            <S.BtnBox>
              {id === "myprofile" ? (
                <>
                  <button onClick={() => router.push("/upload")}>upload</button>
                  <button>edit profile</button>
                </>
              ) : (
                <button>follow</button>
              )}
            </S.BtnBox>
          </S.TOP_BAR>
        </>
        <>
          <S.MenuBox>
            <Menu
              content="track"
              value={musicArr.length}
              nowMenu={nowMenu}
              handle={setNowMenu}
            />
            <Menu
              content="follower"
              value="10"
              nowMenu={nowMenu}
              handle={setNowMenu}
            />
            <Menu
              content="following"
              value="10"
              nowMenu={nowMenu}
              handle={setNowMenu}
            />
            <Menu
              content="playlist"
              value="10"
              nowMenu={nowMenu}
              handle={setNowMenu}
            />
          </S.MenuBox>
        </>
        <>
          {nowMenu === "track" && <TrackList musicArr={musicArr} />}
          {nowMenu === "follower" && <ProfileList />}
          {nowMenu === "following" && <ProfileList />}
        </>
      </S.Container>
    </S.Wrapper>
  );
}
