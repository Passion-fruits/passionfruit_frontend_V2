import { FileUpload } from "@src/assets";
import { useEffect, useState } from "react";
import * as S from "./styles";
import { MusicObj } from "./../../libs/interfaces/upload";
import { CoverImg, ImgWrapper } from "styles";
import upload from "../../libs/api/upload";

export default function Upload() {
  const [cover, setCover] = useState();
  const [music, setMusic] = useState();
  const [musicObj, setMusicObj] = useState<MusicObj>({
    musicSrc: "",
    coverSrc: "",
    title: "",
    description: "",
    genre: "",
    feeling: "",
  });
  function getCoverSrc(target: any) {
    setCover(target.files[0])
  }
  function getMusicSrc(target: any) {
    setMusic(target.files[0])
  }
  // audio 시간 검사
  useEffect(() => {
    if (musicObj.musicSrc !== "") {
      var audio = new Audio(musicObj.musicSrc);
      audio.oncanplaythrough = () => {
        if (audio.duration < 60 || audio.duration > 300) {
          alert("1분 이상, 5분 이하의 곡을 업로드해주세요!");
          setMusicObj({
            ...musicObj,
            musicSrc: "",
          });
        }
      };
    }
  }, [musicObj.musicSrc]);
  const submit = ()=>{
    var fd = new FormData();
    fd.append("song", cover)
    fd.append("song",  music);
    fd.append("title", "제목제목제목");
    fd.append("description", "설명");
    fd.append("genre", "1");
    fd.append("mood", "1");
    fd.append("duration", "100");
    cover && music && upload.uploadMusic(fd).then((e) => {
      console.log(e);
    });
    upload.getMyMusic().then((e)=>{
      console.log(e)
    })
  }
  return (
    <>
      <S.Wrapper>
        <input
          type="file"
          id="coverInp"
          onChange={(e) => getCoverSrc(e.target)}
          accept="image/png, image/jpeg, image/jpg"
        />
        <input
          type="file"
          id="musicInp"
          onChange={(e) => getMusicSrc(e.target)}
          accept="audio/*"
        />
        <S.Container>
          <S.Description>
            <b>쿤더</b>에서는 음악 업로드에 <b>시간제한</b>이 없습니다.
          </S.Description>
          {/* 커버사진 업로드 */}
          <S.CoverPhotoContainer>
            <ImgWrapper>
              <CoverImg src={musicObj.coverSrc} />
            </ImgWrapper>
            <S.UPLOAD_BTN
              width="100%"
              margin="20px"
              onClick={() => document.getElementById("coverInp").click()}
            >
              커버사진 변경
            </S.UPLOAD_BTN>
          </S.CoverPhotoContainer>
          {/* 곡 정보 입력창 */}
          <S.InputsContainer>
            <S.InpTitle style={{ marginTop: 0 }}>file (mp3)</S.InpTitle>
            <S.FileUpload>
              <input
                placeholder={
                  musicObj.musicSrc !== ""
                    ? "파일이 업로드 되었습니다."
                    : "업로드한 파일이 없습니다."
                }
                readOnly
              />
              <S.UPLOAD_BTN
                width="50px"
                onClick={() => document.getElementById("musicInp").click()}
              >
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
              onClick={submit}
              margin="30px"
              style={{
                padding: "11px 0",
                fontSize: "17px",
                marginBottom: "140px",
              }}
            >
              음악 공개하기
            </S.UPLOAD_BTN>
          </S.InputsContainer>
        </S.Container>
      </S.Wrapper>
    </>
  );
}
