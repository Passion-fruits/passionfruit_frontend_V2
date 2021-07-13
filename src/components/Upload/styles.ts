import styled from "@emotion/styled";
import { COLOR, HEADER_HEIGHT } from "styles";

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
  & button {
    background: ${COLOR.blue};
    color: white;
    font-size: 15px;
    font-weight: 600;
    padding: 7px 0;
    border-radius: 3px;
    cursor: pointer;
    transition: 0.4s;
    margin-top: 20px;
  }
`;

export const InputsContainer = styled.div`
  height: 30px;
  grid-area: inputs;
  width: 650px;
  & h1 {
    margin-top: 0;
    color: white;
    font-weight: bold;
    text-transform: capitalize;
    font-size: 17px;
    margin-bottom: 17px;
  }
  & input,
  textarea {
    background: #303030;
    color: #c2c2c2;
    border-radius: 3px;
    border: 1px solid #545454;
    padding: 13px 20px;
    font-size: 15px;
    width: 100%;
    margin-bottom: 20px;
    &::placeholder {
      color: #c2c2c2;
    }
  }
  & textarea {
    height: 190px;
    resize: none;
    outline: none;
  }
  & button {
    background: ${COLOR.blue};
    color: white;
    font-size: 17px;
    font-weight: 600;
    padding: 7px 0;
    border-radius: 3px;
    cursor: pointer;
    transition: 0.4s;
    width: 100%;
    margin-top: 40px;
    padding: 11px 0;
    margin-bottom: 140px;
  }
`;

export const FileUpload = styled.div`
  display: flex;
  justify-content: space-between;
  & button {
    background: ${COLOR.blue};
    color: white;
    font-size: 15px;
    font-weight: 600;
    padding: 7px 0;
    border-radius: 3px;
    cursor: pointer;
    transition: 0.4s;
    width: 50px;
    margin: 0;
    &:hover {
      opacity: 0.8;
    }
    height: 100%;
  }
  & input {
    width: 580px;
  }
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
