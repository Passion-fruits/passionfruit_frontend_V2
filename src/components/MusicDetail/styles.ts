import styled from "@emotion/styled";
import { COLOR, HEADER_HEIGHT, MAIN_WIDTH } from "styles";

export const AllWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  height: 100%;
  padding-top: ${HEADER_HEIGHT};
  position: relative;
`;

export const Wrapper = styled.div`
  width: ${MAIN_WIDTH};
`;

interface gradient {
  color : string;
}

export const BackgroundGradient = styled.div`
  background: ${(e : gradient)=>`linear-gradient(${e.color},${COLOR.dark})`};
  opacity: 0.4;
  z-index: -1;
  width: 100%;
  height: 400px;
  position: absolute;
`;

export const MusicInforContainer = styled.div`
  display: flex;
  padding-top: 60px;
  width:100%;
`;

export const CoverImg = styled.img`
  width: 200px;
  height: 200px;
  object-fit:cover;
`;

export const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 10px;
  position: relative;
  padding-left:30px;
  width: calc(100% - 200px);
`;

export const Hashtag = styled.div`
  display: flex;
  & span {
    color: ${COLOR.green};
    margin-right: 11px;
    font-size: 14px;
    font-weight: 500;
  }
`;

export const PlayBtn = styled.button`
  width: 35px;
  height: 35px;
  border-radius: 80%;
  border: 2px solid white;
  padding-left: 12px;
  padding-top: 2px;
  margin-right: 10px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

export const Title = styled.div`
  margin-top: 15px;
  display: flex;
  align-items: center;
  & span {
    color: white;
    font-size: 30px;
    font-weight: 800;
  }
`;

export const SingerWithDate = styled.div`
  font-size: 14px;
  color: #c2c2c2;
  margin-top: 14px;
  display: flex;
  align-items: center;
  & time {
    margin-left: 7px;
  }
`;

export const CIRCLE = styled.div`
  width: 3px;
  height: 3px;
  border-radius: 80%;
  background-color: #c2c2c2;
  margin: 0 10px;
`;

export const IconBox = styled.div`
  display: grid;
  margin-top: 20px;
  grid-template-columns: repeat(3, 30px);
`;

export const HeartBox = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
  & span {
    padding: 0 0px 0 5px;
    color: white;
    font-size: 14px;
  }
`;

export const MusicDescriptionContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  border-left:2px solid ${COLOR.green};
  padding: 10px 0px 10px 20px;
  span {
    font-size: 15px;
    font-weight: 500;
    color: #c2c2c2;
  }
`;

export const MusicDescripton = styled.p`
  color: #ffffff;
  font-size: 15px;
  line-height: 24px;
  margin-top: 15px;
  margin-bottom:0;
`;

export const CommentContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  height: 60px;
  background-color: #262626;
  margin-top: 20px;
  border-radius: 10px;
  padding: 0 20px;
  position: relative;
`;

export const ProfileImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 80%;
  cursor: pointer;
  object-fit: cover;
`;

export const Input = styled.input`
  width: 800px;
  color: #777777;
  font-size: 14px;
  padding: 12px 5px;
  transition: 0.2s;
  margin-left: 10px;
  ::placeholder {
    color: #777777;
  }
  :focus {
    color: rgb(230, 230, 230);
  }
`;

export const InputLimit = styled.div`
  color: #777777;
  right: 0;
  font-size: 13px;
  position: absolute;
  margin-right: 20px;
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
  margin: 30px 0;
`;

export const CommentDetail = styled.div`
  padding: 5px 5px;
  margin-left: 12px;
  border-radius: 10px;
  max-width: 700px;
`;

export const Writter = styled.div`
  color: #c2c2c2;
  font-size: 14px;
  padding: 0;
  margin: 0;
  font-weight: 500;
  display: flex;
  align-items: center;
`;

export const CommentContent = styled.div`
  color: white;
  font-weight: 500;
  font-size: 16px;
  margin-top: 12px;
  line-height: 17px;
  margin: 0;
  padding-top: 10px;
`;

export const CommentBoundary = styled.div`
  width: 100%;
  color: white;
  font-size: 15px;
  font-weight: bold;
  margin-top: 30px;
  border-bottom: 1px solid #2d2929;
  padding-bottom: 15px;
  & span {
    font-weight: 500;
  }
`;
