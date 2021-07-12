import styled from "@emotion/styled";
import { COLOR, HEADER_HEIGHT } from "styles";

interface UPLOAD_BTN_PROPS {
  width?: string;
}

export const UPLOAD_BTN = styled.button<UPLOAD_BTN_PROPS>`
  background: ${COLOR.blue};
  color: white;
  font-size: 15px;
  font-weight: 600;
  padding: 7px 0;
  border-radius: 3px;
  cursor: pointer;
  transition: 0.4s;
  width: ${(e) => e.width};
  &:hover {
    opacity: 0.8;
  }
`;

export const ChangeCover = styled(UPLOAD_BTN)`
  width: 100%;
  margin-top: 20px;
`;

export const Submit = styled(UPLOAD_BTN)`
  width: 100%;
  margin-top: 40px;
  padding: 11px 0;
  font-size: 17px;
  margin-bottom: 140px;
`;

export const Wrapper = styled.div`
  width: 100%;
  padding-top: ${HEADER_HEIGHT};
  display: flex;
  justify-content: center;
  & input[type="file"] {
    display: none;
  }
`;

export const Container = styled.div`
  padding-top: 40px;
  width: 950px;
  display: grid;
  color: white;
  grid-template-areas:
    "description description"
    "coverPhoto inputs";
  grid-row-gap: 40px;
  grid-column-gap: 40px;
`;

export const Description = styled.div`
  width: 100%;
  height: 30px;
  border-left: 2px solid ${COLOR.green};
  padding: 11px 15px;
  color: white;
  font-size: 17px;
  font-weight: bold;
  grid-area: description;
  display: flex;
  align-items: center;
  & b {
    color: ${COLOR.green};
  }
`;

export const CoverPhotoContainer = styled.div`
  width: 260px;
  height: 30px;
  grid-area: coverPhoto;
  display: flex;
  flex-direction: column;
  & img {
    width: 260px;
    height: 260px;
    border: 1px solid rgb(30, 30, 30);
    object-fit: cover;
  }
`;

export const InputsContainer = styled.div`
  height: 30px;
  grid-area: inputs;
  width: 650px;
  & input,
  textarea {
    background: #303030;
    color: #c2c2c2;
    border-radius: 3px;
    border: 1px solid #545454;
    padding: 13px 20px;
    font-size: 15px;
    width: 100%;
    &::placeholder {
      color: #c2c2c2;
    }
  }
  & textarea {
    height: 190px;
    resize: none;
    outline: none;
  }
`;

export const FileUpload = styled.div`
  display: flex;
  justify-content: space-between;
  & button {
    height: 100%;
  }
  & input {
    width: 580px;
  }
`;

export const InpTitle = styled.div`
  color: white;
  font-weight: bold;
  text-transform: capitalize;
  font-size: 17px;
  margin-top: 20px;
  margin-bottom: 17px;
`;

export const SelectContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 5%;
`;

export const Select = styled.select`
  background: #303030;
  color: #c2c2c2;
  border-radius: 3px;
  border: 1px solid ${COLOR.green};
  padding: 13px 20px;
  font-size: 15px;
  width: 100%;
  outline: none;
  color: ${COLOR.green};
`;