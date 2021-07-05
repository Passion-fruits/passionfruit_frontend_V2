import styled from "@emotion/styled";
import { COLOR, HEADER_HEIGHT, MAIN_WIDTH, PLAYBAR_HEIGHT } from "styles";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: ${HEADER_HEIGHT};
  box-sizing: content-box;
  padding-bottom: ${PLAYBAR_HEIGHT};
`;

interface GBoxProps {
  color: string;
}
export const GradientBox = styled.div<GBoxProps>`
  width: 100%;
  height: 280px;
  background: ${(e) => `linear-gradient(${e.color},${COLOR.dark})`};
  opacity: 0.5;
  position: absolute;
  z-index: -1;
`;

export const Container = styled.div`
  width: ${MAIN_WIDTH};
`;

export const TOP_BAR = styled.div`
  display: flex;
  margin-top: 50px;
  position: relative;
`;

export const ProfileInfor = styled.div`
  display: flex;
  align-items: center;
`;

export const Profile = styled.img`
  width: 240px;
  height: 240px;
  border-radius: 80%;
  object-fit: cover;
`;

export const UserInfor = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 40px;
  & h1 {
    color: white;
    font-weight: 800;
    font-size: 55px;
    margin: 0;
    text-transform: capitalize;
  }
  & span {
    color: #c2c2c2;
    font-size: 18px;
    margin-top: 10px;
  }
`;

export const BtnBox = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  & button {
    padding: 7px 20px;
    font-size: 13px;
    text-transform: capitalize;
    font-weight: bold;
    border-radius: 5px;
    background: ${COLOR.blue};
    color: white;
    cursor: pointer;
    &:last-of-type {
      background: white;
      color: black;
      margin-left: 15px;
    }
  }
`;

export const MenuBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid #464646;
  margin-top: 30px;
  margin-bottom:60px;
`;

export const Menu = styled.span`
  color: #c2c2c2;
  padding-bottom: 20px;
  font-size: 18px;
  text-transform: capitalize;
  margin: 0 25px;
  cursor: pointer;
`;

export const GRID_BOX = styled.div`
width:100%;
display:grid;
grid-template-columns:repeat(5,1fr);
justify-items:center;
grid-row-gap:30px;
`