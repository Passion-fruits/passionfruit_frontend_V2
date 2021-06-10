import styled from "@emotion/styled";

const WIDTH = "1260px";

export const Wrapper = styled.div`
  width: 100%;
  height: 110px;
  background: black;
  position: fixed;
  bottom: 0;
  z-index: 100;
  box-shadow: 0px 3px 20px #311d1d;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  width: ${WIDTH};
  height: 80px;
  display: flex;
  justify-content: space-between;
  position: relative;
`;

export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  height: 100%;
  :last-of-type {
    width: 70px;
    justify-content: space-between;
  }
`;

export const CoverImg = styled.img`
  width: 80px;
  height: 80px;
`;

export const InforContainer = styled.div`
  padding: 30px 20px;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.p`
  color: white;
  font-weight: bold;
  font-size: 17px;
  margin: 0;
`;

export const MusicianName = styled.span`
  color: #afafaf;
  font-size: 13px;
  font-weight: bold;
  margin-top: 7px;
`;

export const ControlContainer = styled.div`
  width: 100%;
  height:100%;
  display: flex;
  position: absolute;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const IconContainer = styled.div`
width:200px;
display:flex;
justify-content:space-between;
align-items:center;
`