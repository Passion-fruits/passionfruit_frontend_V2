import styled from "@emotion/styled";
import { CARD_WIDTH } from "styles";

export const Wrapper = styled.div`
  width: ${CARD_WIDTH};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const CoverImgHover = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.2);
  visibility: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ImgWrapper = styled.div`
  width: 100%;
  height: ${CARD_WIDTH};
  position: relative;
  cursor: pointer;
  border:1px solid rgb(30,30,30);
  &:hover div {
    visibility: visible;
  }
`;

export const PlayButton = styled.button`
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 2px solid white;
  background: rgb(0, 0, 0, 0.4);
  cursor: pointer;
  &:hover {
    width: 60px;
    height: 60px;
  }
`;

export const CoverImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Title = styled.h3`
  color: white;
  font-size: 19px;
  font-weight: bold;
  margin-bottom: 7px;
`;

export const UserName = styled.span`
  color: #9F9F9F;
  font-size: 15px;
  font-weight: bold;
`;

export const Bottom = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
