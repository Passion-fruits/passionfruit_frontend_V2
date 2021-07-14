import styled from "@emotion/styled";

export const Container = styled.div`
  width: 700px;
  padding: 20px 30px 35px;
  display: flex;
  flex-direction: column;
  background: #242424;
  border-radius: 10px;
  position: relative;
  & img {
    cursor: pointer;
    &:hover {
      opacity: 0.8;
    }
  }
`;

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
`;

export const CoverImg = styled.img`
  width: 220px;
  height: 220px;
  object-fit: cover;
  margin-right: 28px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 390px;
  position: relative;
  & time {
    font-size: 13px;
    color: #c2c2c2;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 17px 0;
`;

export const Title = styled.h3`
  font-size: 28px;
  color: white;
  padding: 0;
  margin: 0 0 0 10px;
  font-weight: 800;
`;

export const Des = styled.p`
  font-size: 15px;
  color: #fff5f5;
  margin: 0;
  margin-top: 30px;
  line-height: 20px;
  margin-bottom: 10px;
`;

export const UserWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  & img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 10px;
  }
  & span {
    font-size: 14px;
    color: white;
    font-weight: 500;
  }
`;

export const IconWrapper = styled.div`
  position: absolute;
  left: 510px;
  display: flex;
  height: 23px;
`;

export const PointerWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-right: 30px;
`;

export const Value = styled.span`
  color: white;
  font-size: 15px;
  margin-left: 7px;
`;
