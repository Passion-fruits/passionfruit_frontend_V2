import styled from "@emotion/styled";
import { HEADER_HEIGHT } from "styles";
import { GradationColor } from "../../libs/interfaces/main";

const WIDTH = "1260px";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: ${HEADER_HEIGHT};
`;

export const SpaceContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-bottom: 30px;
  border-bottom: 0.5px solid #2e2e2e;
`;

export const Container = styled.div`
  width: ${WIDTH};
  display: flex;
  flex-direction: column;
`;

export const ContainerComment = styled.div`
  padding: 30px 0;
  font-size: 18px;
  font-weight: 600;
  color: white;
`;

export const MenuCard = styled.div`
  width: 220px;
  height: 220px;
  padding: 25px;
  color: white;
  background: ${(e: GradationColor) =>
    `linear-gradient(120deg,${e.start},${e.last})`};
  border-radius: 20px;
  cursor: pointer;
  h3 {
    margin: 0;
    margin-top: 20px;
    font-weight: 800;
  }
  p {
    font-size: 12px;
    font-weight: 600;
    margin-top: 15px;
  }
`;

export const IntroCard = styled(MenuCard)`
  width: 490px;
  background-image: url("https://img.etnews.com/photonews/1608/835856_20160812174712_552_0003.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  padding: 0;
`;

export const CardCover = styled(IntroCard)`
  position: absolute;
  background: none;
  background-color: rgb(0, 0, 0, 0.7);
  padding: 25px;
  padding-left: 50px;
  h3 {
    font-weight: 600;
  }
  p {
    line-height: 20px;
    font-weight: 500;
    color: #bebebe;
  }
`;
