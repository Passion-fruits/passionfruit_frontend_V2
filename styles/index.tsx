import styled from "@emotion/styled";

export const ImgWrapper = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 100%;
`;

export const CoverImg = styled.img`
  width: 100%;
  position: absolute;
  object-fit: cover;
  height: 100%;
`;

export const ProfileImg = styled(CoverImg)`
border-radius:80%;
box-shadow:0px 0px 20px rgb(10,10,10);
`

export const HEADER_HEIGHT = "100px";