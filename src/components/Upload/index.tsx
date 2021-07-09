import { FileUpload } from "@src/assets";
import { useEffect, useState } from "react";
import * as S from "./styles";
import { MusicObj } from "./../../libs/interfaces/upload";
import { CoverImg, ImgWrapper } from "styles";
import upload from "../../libs/api/upload";

export default function Upload() {
  const [preview,setPreview] = useState<string>("https://jetekpro.vn/images/noimage.jpg");
  const [musicObj, setMusicObj] = useState<MusicObj>({
    musicSrc: "",
    coverSrc: "",
    title: "",
    description: "",
    genre: "1",
    feeling: "1",
    duration: ""
  });
  const getSrc = (target: HTMLInputElement) => {
    setMusicObj({
      ...musicObj,
      [target.name]: target.files[0],
    });
  };
  const handleMusicObj = (e) => {
    const { name, value } = e.target;
    setMusicObj({
      ...musicObj,
      [name]: value,
    });
  };
  // audio 시간 검사
  useEffect(() => {
    if (musicObj.musicSrc !== "") {
      const reader = new FileReader();
      reader.readAsDataURL(musicObj.musicSrc);
      reader.onload = (e) => {
        const result: any = e.target.result;
        const audio = new Audio(result);
        audio.oncanplaythrough = () => {
          setMusicObj({
            ...musicObj,
            duration : audio.duration.toString()
          })
          if (audio.duration < 60 || audio.duration > 300) {
            alert("1분 이상, 5분 이하의 곡을 업로드해주세요!");
            setMusicObj({
              ...musicObj,
              musicSrc: "",
              duration : ""
            });
          }
        };
      };
    }
  }, [musicObj.musicSrc]);
  useEffect(()=>{
    const reader = new FileReader();
    reader.onload =(e)=> setPreview(e.target.result.toString());
    musicObj.coverSrc && reader.readAsDataURL(musicObj.coverSrc);
  },[musicObj.coverSrc])
  const submit = () => {
    upload.uploadMusic(musicObj).then((e) => {
      console.log(e);
    });
  };
  return (
    <>
      <S.Wrapper>
        <input
          type="file"
          id="coverInp"
          onChange={(e) => getSrc(e.target)}
          accept="image/png, image/jpeg, image/jpg"
          name="coverSrc"
        />
        <input
          type="file"
          id="musicInp"
          onChange={(e) => getSrc(e.target)}
          accept="audio/*"
          name="musicSrc"
        />
        <S.Container>
          <S.Description>
            <b>쿤더</b>에서는 음악 업로드에 <b>시간제한</b>이 없습니다.
          </S.Description>
          {/* 커버사진 업로드 */}
          <S.CoverPhotoContainer>
            <ImgWrapper>
              <CoverImg src={preview} />
            </ImgWrapper>
            <S.UPLOAD_BTN
              width="100%"
              margin="20px"
              onClick={() => document.getElementById("coverInp").click()}
            >
              Change Cover
            </S.UPLOAD_BTN>
          </S.CoverPhotoContainer>
          {/* 곡 정보 입력창 */}
          <S.InputsContainer>
            <S.InpTitle style={{ marginTop: 0 }}>file (mp3)</S.InpTitle>
            <S.FileUpload>
              <input
                placeholder={
                  musicObj.musicSrc !== ""
                    ? `${musicObj.musicSrc.name}`
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
            <input
              placeholder="곡 제목을 입력해주세요. (4글자 이상)"
              name="title"
              onChange={handleMusicObj}
            />
            <S.InpTitle>Description</S.InpTitle>
            <textarea
              placeholder="곡에 대한 설명을 적어주세요."
              name="description"
              onChange={handleMusicObj}
            />
            {/* 장르 셀렉트 */}
            <S.SelectContainer>
              <div>
                <S.InpTitle>Genre</S.InpTitle>
                <S.Select name="genre" onChange={handleMusicObj}>
                  <option value="1">힙합</option>
                  <option value="2">브루스</option>
                  <option value="3">기타등등...</option>
                </S.Select>
              </div>
              <div>
                <S.InpTitle>Feeling</S.InpTitle>
                <S.Select name="feeling" onChange={handleMusicObj}>
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
