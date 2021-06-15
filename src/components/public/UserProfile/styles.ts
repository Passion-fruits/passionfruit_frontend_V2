import styled from "@emotion/styled";
import { WrapperProps } from "@src/libs/interfaces/userProfile";

export const Wrapper = styled.div`
  width: ${(e: WrapperProps) => `${e.width}px`};
  height: ${(e: WrapperProps) => `${e.height}px`};
  background: rgb(30,30,30);
  border-radius: 3px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  position: relative;
  transition: 0.5s;
  font-size: 10px;
  align-items:center;
  :hover{
    background:rgb(40,40,40);
  }
  :hover > .follow {
    opacity: 1;
  }
`;

export const Name = styled.span`
  color: white;
  font-weight: bold;
  font-size: 16px;
  margin-top: 18px;
`;

export const Follower = styled.div`
  color: rgb(150,150,150);
  font-size: 12px;
  font-weight: bold;
  margin-top: 8px;
  display: flex;
  align-items: center;
`;

export const FollowCircle = styled.div`
  width: 30px;
  height: 30px;
  position: absolute;
  background: #0099ff;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  border-radius: 80%;
  transform:translate(130px,130px);
  box-shadow: 0px 0px 5px black;
  color: white;
  font-weight: bold;
  font-size: 25px;
  opacity: 0;
  transition: 0.3s;
  :hover{
    background:#2CAAFF;
  }
`;
