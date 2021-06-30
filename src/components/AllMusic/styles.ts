import styled from "@emotion/styled";
import { CARD_WIDTH, COLOR, HEADER_HEIGHT } from "styles";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Container = styled.div`
  width: 1200px;
  display: flex;
  justify-content: space-between;
`;

export const RIGHT_SIDE = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  padding-top: calc((${HEADER_HEIGHT}));
`;

const PADDING_TOP = "30px";

const GRID_GAP = "20px";

const TOP_HEIGHT = "40px";

const TOP_PADDING_BOTTOM = "20px";

export const SIDE_BAR = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: calc((${HEADER_HEIGHT} + ${PADDING_TOP}));
  height: 800px;
`;

export const MusicWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-row-gap: ${GRID_GAP};
  grid-column-gap: 20px;
  padding-top: calc(
    (${PADDING_TOP}) + (${TOP_HEIGHT}) + (${TOP_PADDING_BOTTOM})
  );
`;

export const TopContainer = styled.div`
  width: calc((${CARD_WIDTH}) * 4 + (${GRID_GAP}) * 3);
  height: ${TOP_HEIGHT};
  background: ${COLOR.dark};
  position: fixed;
  box-sizing: content-box;
  padding-top: ${PADDING_TOP};
  padding-bottom: ${TOP_PADDING_BOTTOM};
  z-index: 2;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  b {
    font-size: 20px;
  }
`;

export const UploadBox = styled.div`
  width: 290px;
  background: ${COLOR.main};
  padding: 0 17px;
  height: 40px;
  display: flex;
  align-items: center;
  font-size: 13px;
  border-radius: 5px;
  font-weight: 500;
  cursor: pointer;
  justify-content: space-between;
  span {
    padding: 0 2px;
    color: ${COLOR.green};
  }
  b {
    font-size: 15px;
  }
`;