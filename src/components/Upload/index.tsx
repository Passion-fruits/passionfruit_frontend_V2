import { FileUpload } from "@src/assets";
import * as S from "./styles";

export default function Upload() {
  return (
    <S.Wrapper>
      <S.Container>
        <S.Description>
          음악 전체는 <b>전체보기</b>에 올라가고, <b>하이라이트</b>는 피드에
          업로드됩니다.
        </S.Description>
        {/* 커버사진 업로드 */}
        <S.CoverPhotoContainer>
          <img
            src="https://blog.kakaocdn.net/dn/0mySg/btqCUccOGVk/nQ68nZiNKoIEGNJkooELF1/img.jpg"
            alt=""
          />
          <S.UPLOAD_BTN width="100%" margin="28px">
            Upload Cover
          </S.UPLOAD_BTN>
        </S.CoverPhotoContainer>
        {/* 곡 정보 입력창 */}
        <S.InputsContainer>
            
          <S.InpTitle>file (mp3)</S.InpTitle>
          <S.FileUpload>
            <input placeholder="업로드한 파일이 없습니다." />
            <S.UPLOAD_BTN width="50px">
              <FileUpload />
            </S.UPLOAD_BTN>
          </S.FileUpload>
          
          <S.InpTitle>title</S.InpTitle>
          <input placeholder="곡 제목을 입력해주세요." />

          <S.InpTitle>title</S.InpTitle>
          <textarea placeholder="곡 제목을 입력해주세요." />
        </S.InputsContainer>
      </S.Container>
    </S.Wrapper>
  );
}
