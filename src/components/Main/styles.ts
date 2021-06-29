import styled from "@emotion/styled";
import { CARD_WIDTH, HEADER_HEIGHT, MAIN_WIDTH } from "styles";
import { GradationColor } from "../../libs/interfaces/main";

const WIDTH = MAIN_WIDTH;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: ${HEADER_HEIGHT};
  position: relative;
`;

export const SpaceContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-bottom: 30px;
  border-bottom: 0.5px solid #2e2e2e;
`;

export const LayOut = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  padding-bottom: 30px;
  border-bottom: 0.5px solid #2e2e2e;
  position: relative;
  gap: 30px 0;
  justify-items: center;
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
  width: ${CARD_WIDTH};
  height: ${CARD_WIDTH};
  padding: 25px;
  color: white;
  background: ${(e: GradationColor) =>
    `linear-gradient(120deg,${e.start},${e.last})`};
  border-radius: 15px;
  cursor: pointer;
  h3 {
    margin: 0;
    margin-top: 20px;
    font-weight: 800;
  }
  p {
    font-size: 13px;
    font-weight: 600;
    margin-top: 15px;
  }
`;

export const IntroCard = styled(MenuCard)`
  width: 490px;/* 
  background-image: url("https://img.etnews.com/photonews/1608/835856_20160812174712_552_0003.jpg"); */
  background:#0078E1;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 0;
`;

export const CardCover = styled(IntroCard)`
  position: absolute;
  background: none;
/*   background-color: rgb(0, 0, 0, 0.7); */
  padding: 25px;
  padding-left: 50px;
  h3 {
    font-weight: 600;
  }
  p {
    line-height: 20px;  
  }
`;

export const Genre = styled.div`
  width: ${CARD_WIDTH};
  height: 127px;
  padding: 26px 20px;
  background: ${(e: GradationColor) =>
    `linear-gradient(to right,${e.start},${e.last})`};
  color: white;
  border-radius: 16px;
  cursor: pointer;
`;

export const GenreName = styled.span`
  font-size: 16px;
  font-weight: bold;
`;

export const GenreDescription = styled.p`
  color: white;
  font-size: 12px;
  margin-top: 8px;
`;
