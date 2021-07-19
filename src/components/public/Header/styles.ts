import styled from "@emotion/styled";
import { COLOR, HEADER_HEIGHT, MAIN_WIDTH } from "styles";

const BACKGROUND_COLOR = "#161616";

export const Wrapper = styled.div`
  width: 100%;
  height: ${HEADER_HEIGHT};
  background: ${BACKGROUND_COLOR};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  position: fixed;
  z-index: 100;
  box-shadow: 0px 0px 10px ${COLOR.dark};
`;

export const Container = styled.div`
  justify-content: space-between;
  width: ${MAIN_WIDTH};
  display: flex;
  align-items: center;
`;

export const RIGHT_CONTAINER = styled.div`
  display: flex;
  gap: 42px;
  align-items: center;
  & span {
    color: white;
    font-size: 17px;
    cursor: pointer;
    &:last-of-type {
      color: #ff7e7e;
    }
  }
`;

export const LEFT_CONTAINER = styled.div`
  display: flex;
  align-items: center;
`;

export const InputBox = styled.div`
  width: 300px;
  height: 40px;
  background: #2b2b2b;
  padding: 0 17px;
  display: flex;
  align-items: center;
  border-radius: 5px;
  margin-right: 20px;
  & input {
    padding-left: 10px;
    color: #c2c2c2;
    font-size: 15px;
    &::placeholder {
      color: #c2c2c2;
    }
  }
`;

export const SubBtn = styled.button`
  padding: 0 20px;
  height: 30px;
  background: #2b2b2b;
  color: #6e6e6e;
  font-size: 14px;
  border-radius: 3px;
  cursor: pointer;
  color: #c2c2c2;
`;
