import * as S from "./styles";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import Menu from "./menu";
import ProfileList from "./List/profileList";
import TrackList from "./List/trackList";
import profileRequest from "../../libs/api/profile";
import { ColorThief } from "@src/libs/functions/colorThief";

export default function Profile({ profileObj }) {
  const { email, name, profile } = profileObj;
  const canvas = useRef();
  const cv: HTMLCanvasElement = canvas.current;
  const [gradient, setGradient] = useState<string>("");
  const [nowMenu, setNowMenu] = useState<string>("track");
  const [musicArr, setMusicArr] = useState<any[]>([]);
  const [mine, setMine] = useState<boolean>(false);
  const [loader, setLoader] = useState<boolean>(false);
  const router = useRouter();
  const id = router.query.id;

  const getMyData = () => {
    setMine(true);
    profileRequest
      .getMyMusic()
      .then((res) => {
        setMusicArr(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    setLoader(true);
    ColorThief({
      cv: cv,
      setColor: setGradient,
      url: profile,
    });
  }, [loader]);

  useEffect(() => {
    if (id === "myprofile") {
      getMyData();
    } else {
      profileRequest
        .checkMine(id)
        .then((res) => {
          if (res.data.is_mine) getMyData();
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
              <S.Profile src={profile} />
              <S.UserInfor>
                <h1>{name}</h1>
                <span>{email}</span>
              </S.UserInfor>
            </S.ProfileInfor>
            <S.BtnBox>
              {mine ? (
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
