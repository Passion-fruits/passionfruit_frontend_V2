import * as S from "./styles";
import { FileUpload } from "@src/assets";
import { useEffect, useState } from "react";
import { MusicObj } from "./../../libs/interfaces/upload";
import { CoverImg, ImgWrapper } from "styles";
import { useRouter } from 'next/router';
import { TimeCheck } from "./util/timeCheck";
import upload from "../../libs/api/upload";
import FileInput from "./input/fileInput";
import Select from "./select/select";
import LoadingPage from "../public/Loading";

export default function Upload() {
  const router = useRouter();
  const [loading,setLoading] = useState<boolean>(false);
  const [preview, setPreview] = useState<string>(
    "https://jetekpro.vn/images/noimage.jpg"
  );
  const [musicObj, setMusicObj] = useState<MusicObj>({
    musicSrc: "",
    coverSrc: "",
    title: "",
    description: "",
    genre: "1",
    feeling: "1",
    duration: "",
  });
  const submit = () => {
    const {musicSrc,coverSrc,title,description,duration} = musicObj;
    if(musicSrc && coverSrc && title && description && duration){
      setLoading(true);
      upload.uploadMusic(musicObj).then(() => {
        router.push('/profile/myprofile');
      }).catch(()=>{
        alert('음악을 업로드하는데 실패하였습니다.');
        setLoading(false);
      })
    }
    else alert('모든 정보를 입력해주세요!')
  };
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
  const fileUpload = (id) => document.getElementById(id).click();
  useEffect(() => {
    TimeCheck(musicObj, setMusicObj);
  }, [musicObj.musicSrc]);
  useEffect(() => {
    const reader = new FileReader();
    reader.onload = (e) => setPreview(e.target.result.toString());
    musicObj.coverSrc && reader.readAsDataURL(musicObj.coverSrc);
  }, [musicObj.coverSrc]);
  return (
    <>
     {loading && <LoadingPage/>}
      <S.Wrapper>
        <FileInput event={getSrc} />
        <S.Container>
          <S.Description>
            <b>쿤더</b>에서는 음악 업로드에 <b>시간제한</b>이 없습니다.
          </S.Description>
          <S.CoverPhotoContainer>
            <ImgWrapper>
              <CoverImg src={preview} />
            </ImgWrapper>
            <S.ChangeCover onClick={() => fileUpload("coverInp")}>
              Change Cover
            </S.ChangeCover>
          </S.CoverPhotoContainer>
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
              <S.UPLOAD_BTN width="50px" onClick={() => fileUpload("musicInp")}>
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
            <S.SelectContainer>
              <Select
                name="genre"
                event={handleMusicObj}
                listArr={["힙합", "브루스"]}
              />
              <Select
                name="feeling"
                event={handleMusicObj}
                listArr={["아침에", "뜨거운"]}
              />
            </S.SelectContainer>
            <S.Submit onClick={submit}>음악 공개하기</S.Submit>
          </S.InputsContainer>
        </S.Container>
      </S.Wrapper>
    </>
  );
}
