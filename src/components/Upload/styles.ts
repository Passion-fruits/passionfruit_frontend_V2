import styled from "@emotion/styled";
import { COLOR, HEADER_HEIGHT } from "styles";

interface UPLOAD_BTN_PROPS{
    width:string;
    margin?:string;
}

export const UPLOAD_BTN = styled.button<UPLOAD_BTN_PROPS>`
  background: ${COLOR.blue};
  color: white;
  font-weight:bold;
  padding: 7px 0;
  width:${(e)=>e.width};
  border-radius:3px;
  margin-top:${(e)=>e.margin};
  cursor: pointer;
`;

export const Wrapper = styled.div`
  width: 100%;
  padding-top: ${HEADER_HEIGHT};
  display: flex;
  justify-content: center;
`;

export const Container = styled.div`
  padding-top: 60px;
  width: 950px;
  display: grid;
  color: white;
  grid-template-areas:
    "description description"
    "coverPhoto inputs";
  grid-row-gap: 40px;
  grid-column-gap:40px;
`;

export const Description = styled.div`
  width: 100%;
  height: 30px;
  border-left: 2px solid ${COLOR.green};
  padding: 10px 15px;
  color: white;
  font-size: 17px;
  font-weight: bold;
  grid-area: description;
  & b {
    color: ${COLOR.green};
  }
`;

export const CoverPhotoContainer = styled.div`
  width: 260px;
  height: 30px;
  background: grey;
  grid-area: coverPhoto;
  display: flex;
  flex-direction: column;
  & img {
    width: 260px;
    height: 260px;
  }
`;

export const InputsContainer = styled.div`
  height: 30px;
  grid-area: inputs;
  width:650px;
  & input,textarea{
      background:#303030;
      color:#C2C2C2;
      border-radius:3px;
      border:1px solid #545454;
      padding:13px 20px;
      font-size:15px;
      width:100%;
      &::placeholder{
      color:#C2C2C2;
      }
  }
  & textarea{
      height:190px;
      resize:none;
      outline:none;
  }
`;

export const FileUpload = styled.div`
display:flex;
justify-content:space-between;
& button{
    height:100%;
  }
  & input{
      width:580px;
  }
`

export const InpTitle = styled.div`
color:white;
font-weight:bold;
text-transform:capitalize;
font-size:17px;
margin-top:20px;
margin-bottom:17px;
:first-of-type{
    margin-top:0;
}
`