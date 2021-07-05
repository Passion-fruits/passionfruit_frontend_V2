import styled from "@emotion/styled";
import { WrapperProps } from "@src/libs/interfaces/userProfile";
import { ProfileImg } from "styles";

export const Wrapper = styled.div`
  width: ${(e: WrapperProps) => `${e.width}px`};
  height: ${(e: WrapperProps) => `${e.height}px`};
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  position: relative;
  transition: 0.5s;
  font-size: 10px;
  align-items: center;
`;

export const Name = styled.span`
  color: white;
  font-size: 18px;
  margin-top: 18px;
`;

export const Follower = styled.div`
  color: rgb(150, 150, 150);
  font-size: 12px;
  font-weight: bold;
  margin-top: 8px;
  display: flex;
  align-items: center;
`;

export const Profile = styled(ProfileImg)`
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    transform: scale(1.1);
  }
`;
