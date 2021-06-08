import styled from "@emotion/styled";
import { modalProps } from "@src/libs/interfaces/header";

export const Wrapepr = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgb(0, 0, 0, 0.7);
  display: ${(e: modalProps) => (e.ModalState ? `flex` : `none`)};
`;

export const Container = styled.div`
  background: white;
  position: absolute;
  right: 0;
  width: 800px;
  height: 100%;
  box-shadow: 0px 2px 20px #c9c9c9;
  padding: 70px 60px;
  transition: 1s;
  transform: ${(e: modalProps) =>
    e.ModalState ? `translateX(0px)` : `translateX(830px)`};
  .active {
    background: #f3f3f3;
    :hover {
      opacity: 1;
    }
  }
`;

export const Menu = styled.div`
  width: 100%;
  padding: 20px 40px;
  border-radius: 15px;
  font-weight: 1000;
  font-size: 30px;
  margin-top: 10px;
  cursor: pointer;
  transition: 0.3s;
  :first-of-type {
    margin-top: 60px;
  }
  :hover {
    opacity: 0.4;
  }
`;

export const BottomMenu = styled.div`
  color: #afafaf;
  font-weight: 600;
  margin-top: 30px;
  cursor: pointer;
  padding: 0 40px;
  font-size: 16px;
  :first-of-type {
    margin-top: 150px;
  }
`;
