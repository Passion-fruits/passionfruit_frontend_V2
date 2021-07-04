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
            src="https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg"
            alt=""
          />
          <S.UPLOAD_BTN width="100%" margin="20px">
            커버사진 변경
          </S.UPLOAD_BTN>
        </S.CoverPhotoContainer>
        {/* 곡 정보 입력창 */}
        <S.InputsContainer>
          <S.InpTitle style={{ marginTop: 0 }}>file (mp3)</S.InpTitle>
          <S.FileUpload>
            <input placeholder="업로드한 파일이 없습니다." />
            <S.UPLOAD_BTN width="50px">
              <FileUpload />
            </S.UPLOAD_BTN>
          </S.FileUpload>
          <S.InpTitle>title</S.InpTitle>
          <input placeholder="곡 제목을 입력해주세요." />
          <S.InpTitle>Description</S.InpTitle>
          <textarea placeholder="곡에 대한 설명을 적어주세요." />
          {/* 장르 셀렉트 */}
          <S.SelectContainer>
            <div>
              <S.InpTitle>Genre</S.InpTitle>
              <S.Select>
                <option value="">힙합</option>
                <option value="">브루스</option>
                <option value="">기타등등...</option>
              </S.Select>
            </div>
            <div>
              <S.InpTitle>Feeling</S.InpTitle>
              <S.Select>
                <option value="">힙합</option>
                <option value="">브루스</option>
                <option value="">기타등등...</option>
              </S.Select>
            </div>
          </S.SelectContainer>
          <S.UPLOAD_BTN
            width="100%"
            margin="30px"
            style={{ padding: "11px 0", fontSize: "17px" }}
          >
            음악 공개하기
          </S.UPLOAD_BTN>
        </S.InputsContainer>
      </S.Container>
    </S.Wrapper>
  );
}
