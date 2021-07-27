import * as S from "./styles";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { ColorThief } from "@src/libs/functions/colorThief";
import Menu from "./menu";
import ProfileList from "./List/profileList";
import TrackList from "./List/trackList";
import profileRequest from "../../libs/api/profile";
import SmallLoading from "../public/SmallLoading";

export default function Profile({ profileObj }) {
  const { email, name, profile } = profileObj;
  const canvas = useRef();
  const cv: HTMLCanvasElement = canvas.current;
  const [gradient, setGradient] = useState<string>("");
  const [nowMenu, setNowMenu] = useState<string>("track");
  const [musicArr, setMusicArr] = useState<any[]>([]);
  const [mine, setMine] = useState<boolean>(false);
  const [loader, setLoader] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  let page = 1;
  const router = useRouter();
  const id = router.query.id;

  const getData = () => {
    setMine(true);
    profileRequest
      .getMusic(page)
      .then((res) => {
        setLoading(false);
        page += 1;
        getData();
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
    id === "myprofile"
      ? setMine(true)
      : profileObj.is_mine
      ? setMine(true)
      : () => {};
    getData();
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
          {loading && <SmallLoading />}
          {nowMenu === "track" && <TrackList musicArr={musicArr} />}
          {nowMenu === "follower" && <ProfileList />}
          {nowMenu === "following" && <ProfileList />}
        </>
      </S.Container>
    </S.Wrapper>
  );
}
