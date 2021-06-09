import styled from "@emotion/styled";

const BACKGROUND_COLOR = "#161616";

const BORDER = "#2C2C2C";

const PADDING = "225px";

export const Wrapper = styled.div`
  width: 100%;
  height: 100px;
  background: ${BACKGROUND_COLOR};
  border-bottom: 1px solid ${BORDER};
  padding: 0 ${PADDING};
  display: flex;
  align-items: center;
  color: white;
  justify-content: space-between;
  position: fixed;
`;

export const SearchBar = styled.div`
  width: 320px;
  height: 35px;
  background: #2d2929;
  border-radius: 24px;
  margin-left: 25px;
  padding: 0 20px;
  display: flex;
  align-items: center;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const Input = styled.input`
  width: 80%;
  color: #919191;
  font-weight: 500;
  font-size: 12px;
  padding: 0 10px;
  ::placeholder {
    font-weight: 600;
    color: #686868;
  }
`;

export const Select = styled.select`
  background: none;
  border: none;
  color: gray;
  font-size: 13px;
  outline: none;
  text-align-last: right;
  padding: 0 5px;
  cursor: pointer;
`;
