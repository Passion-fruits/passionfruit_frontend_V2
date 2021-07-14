import styled from "@emotion/styled";
import { MAIN_WIDTH } from "styles";
import { HEADER_HEIGHT } from "./../../../styles/index";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: ${HEADER_HEIGHT};
`;

export const Container = styled.div`
  width: ${MAIN_WIDTH};
  padding-top: 50px;
  display: flex;
  justify-content:space-between;
  position:relative;
  & div{
      position:relative;
  }
`;

export const FeedCardBox = styled.div`
display:flex;
flex-direction:column;
gap:30px;
`