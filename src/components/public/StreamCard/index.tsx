import * as S from "./styles";
import { Play } from "../../../assets";
import { StreamCardProps } from "@src/libs/interfaces/streamCard";
import { setValue } from "@src/libs/context";
import StreamCardHeart from "@src/assets/streamCardHeart";
import StreamCardComment from "@src/assets/streamCardComment";
import { useRouter } from "next/router";

function StreamCard(props: StreamCardProps) {
  const { title, name, coverImg, musicUrl } = props;
  const dispatch = setValue();
  const router = useRouter();
  const changeMusic = () => {
    dispatch({
      type: "MUSIC_CHANGE",
      musicInformation: {
        title: title,
        name: name,
        coverImg: coverImg,
        musicUrl: musicUrl,
      },
    });
  };

  const enterMusicDetail = (e) => {
    if (e.target.id !== "wrapper") return;
    router.push("/musicDetail/3");
  };

  return (
    <S.Wrapper>
      <S.ImgWrapper>
        <S.CoverImg src={coverImg} />
        <S.CoverImgHover id="wrapper" onClick={enterMusicDetail}>
          <S.PlayButton onClick={changeMusic}>
            <Play />
          </S.PlayButton>
        </S.CoverImgHover>
      </S.ImgWrapper>
      <S.Title>{title}</S.Title>
      <S.UserName>{name}</S.UserName>
      <S.BottomContainer>
        <p># 힙합</p>
        <div>
          <span>
            <StreamCardComment /> <b>12</b>
          </span>
          <span>
            <StreamCardHeart /> <b>6</b>
          </span>
        </div>
      </S.BottomContainer>
    </S.Wrapper>
  );
}

export default StreamCard;
