import styled from "@emotion/styled";
import { COLOR, HEADER_HEIGHT } from "styles";

export const AllWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  height: 100%;
  padding-top: ${HEADER_HEIGHT};
`;

export const Wrapper = styled.div`
  width: 900px;
  padding-top: 70px;
`;

export const MusicInforContainer = styled.div`
  display: flex;
`;

export const CoverImg = styled.img`
  width: 250px;
  height: 250px;
`;

export const DetailContainer = styled.div`
  padding-left: 30px;
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  position: relative;
  width: 100%;
`;

export const Date = styled.time`
  font-size: 14px;
  color: #c2c2c2;
`;

export const PlayBtn = styled.button`
  width: 45px;
  height: 45px;
  border-radius: 80%;
  border: 2px solid white;
  padding-left: 12px;
  padding-top: 2px;
  margin-right: 15px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

export const Title = styled.div`
  margin-top: 20px;
  display: flex;
  padding-bottom: 40px;
  span {
    color: white;
    font-size: 33px;
    font-weight: 800;
  }
  div {
    display: flex;
    flex-direction: column;
  }
`;

export const Singer = styled.a`
  font-size: 16px;
  color: #c2c2c2;
  margin-top: 7px;
  letter-spacing: 1px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

export const IconContainer = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  display: flex;
  div {
    display: flex;
    align-items: center;
    span {
      padding: 0 20px 0 10px;
      color: white;
      font-size: 17px;
    }
  }
`;

export const Line = styled.div`
  width: 100%;
  height: 1px;
  background: #4d4d4d;
  margin: 35px 0;
`;

export const MusicDescriptionContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  span {
    font-size: 17px;
    font-weight: 500;
    color: #c2c2c2;
    padding-bottom: 10px;
  }
`;

export const MusicDescripton = styled.p`
  color: #ffffff;
  font-size: 15px;
  line-height: 24px;
`;

export const CommentContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  height: 30px;
  justify-content: space-between;
`;

export const ProfileImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 80%;
  cursor: pointer;
  object-fit: cover;
`;

const INPUT_COLOR = "#777777";

export const Input = styled.input`
  width: 92%;
  color: ${INPUT_COLOR};
  font-size: 14px;
  border-bottom: 1px solid ${INPUT_COLOR};
  padding: 12px 5px;
  transition: 0.3s;
  ::placeholder {
    color: ${INPUT_COLOR};
  }
`;

export const BtnContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-top: 18px;
`;

export const ControlBtn = styled.button`
  padding: 6px 15px;
  color: white;
  font-size: 13px;
  cursor: pointer;
  background: #464242;
  border-radius: 2px;
  :nth-of-type(2) {
    background: ${COLOR.blue};
    margin-left: 10px;
  }
`;

export const Comment = styled.div`
  width: 100%;
  display: flex;
  margin: 20px 0;
`;

export const CommentDetail = styled.div`
padding:12px 15px;
background:#242424;
margin-left:12px;
border-radius:10px;
max-width:600px;
`;

export const Writter = styled.p`
  color:#a9a9a9;
  font-size: 13px;
  padding: 0;
  margin: 0;
  font-weight:500;
  display:flex;
  align-items:center;
  time {
    padding: 0 5px;
    color: #8A8A8A;
    font-size: 12px;
  }
`;

export const CommentContent = styled.div`
font-weight:bold;
  color: #C9C9C9;
  font-size: 14px;
  margin-top: 12px;
  letter-spacing:1px;
  line-height:17px;
  margin:0;
  padding-top:10px;
`;
