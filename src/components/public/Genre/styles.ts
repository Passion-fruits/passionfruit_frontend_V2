import styled from "@emotion/styled";
import { COLOR} from "styles";

export const GenreBox = styled.div`
  width: 180px;
  padding: 10px 25px;
  background: #1c1c1c;
  height: 60%;
  border-radius: 10px;
  color: white;
  position: fixed;
  overflow-y: scroll;
  box-sizing: content-box;
  ::-webkit-scrollbar{
      width:3px;
      background-color:#262626;
      border-radius:24px;
  }
  ::-webkit-scrollbar-thumb{
      background-color:#4A4B4B;
  }
  h3 {
    font-size: 17px;
    margin: 0;
    margin-top: 20px;
    padding-bottom: 10px;
  }
`;

export const Select = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const CHECK_BOX = styled.div`
  display: flex;
  padding: 8px 3px;
  color: #8d8d8d;
  align-items: center;
  input[type="radio"],
  input[type="radio"]:checked {
    cursor: pointer;
    appearance: none;
    margin-right: 10px;
    width: 18px;
    height: 18px;
    border-radius: 80%;
    border: 1px solid #5a5a5a;
  }
  input[type="radio"]:checked {
    border-radius: 80%;
    border: 3px solid ${COLOR.green};
  }
  input[type="radio"]:checked + label {
    color: white;
  }
`;

export const LINE = styled.div`
  width: 100%;
  height: 1px;
  background: #2e2e2e;
  margin: 5px 0;
`;
