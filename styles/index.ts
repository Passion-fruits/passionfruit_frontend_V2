import styled from "@emotion/styled";

export const HEADER_HEIGHT = "80px";

export const MAIN_WIDTH = "1260px";

export const CARD_WIDTH = "220px";

export const PLAYBAR_HEIGHT = "110px";

export const COLOR = {
  pink: "#D800AC",
  green: "#8FFFB1",
  main: "#212121",
  blue: "#0099FF",
  dark: "#161616"
};

export const ImgWrapper = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 100%;
`;

export const CircleImgWrapper = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 100%;
  overflow:hidden;
  border-radius:80%;
`

export const CoverImg = styled.img`
  width: 100%;
  position: absolute;
  object-fit: cover;
  height: 100%;
`;

// 프로필이미지 동그라미
export const ProfileImg = styled(CoverImg)`
  border-radius: 80%;
  box-shadow: 0px 0px 20px rgb(10, 10, 10);
`;

// padding top 고정 컨테이너
export const PDDING_CONTAINER = styled.div`
  padding-top: ${HEADER_HEIGHT};
`;
