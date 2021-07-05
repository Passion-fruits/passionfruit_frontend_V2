import * as S from "./styles";
import { useEffect, useRef, useState } from "react";
import Menu from "./menu";
import ProfileList from "./profileList";
import TrackList from './trackList';

export default function Profile() {
  const url = "https://i1.sndcdn.com/artworks-000169142537-e22x2o-large.jpg";
  const canvas = useRef();
  const cv: HTMLCanvasElement = canvas.current;
  const [gradient, setGradient] = useState<string>("");
  const [nowMenu,setNowMenu] = useState<string>("track");
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
  });
  return (
    <>
      <canvas style={{ display: "none" }} ref={canvas} />
      <S.Wrapper>
        <S.GradientBox color={gradient} />
        <S.Container>
          <S.TOP_BAR>
            <S.ProfileInfor>
              <S.Profile src={url} />
              <S.UserInfor>
                <h1>hash swan</h1>
                <span>jidole041214@naver.com</span>
              </S.UserInfor>
            </S.ProfileInfor>
            <S.BtnBox>
              <button>upload</button>
              <button>edit profile</button>
            </S.BtnBox>
          </S.TOP_BAR>
          <S.MenuBox>
              <Menu content="track" value="10" nowMenu={nowMenu} handle={setNowMenu}/>
              <Menu content="follower" value="10" nowMenu={nowMenu} handle={setNowMenu}/>
              <Menu content="following" value="10" nowMenu={nowMenu} handle={setNowMenu}/>
              <Menu content="playlist" value="10" nowMenu={nowMenu} handle={setNowMenu}/>
          </S.MenuBox>
          {nowMenu === "track" && <TrackList/>}
          {nowMenu === "follower" && <ProfileList/>}
          {nowMenu === "following" && <ProfileList/>}
        </S.Container>
      </S.Wrapper>
    </>
  );
}
