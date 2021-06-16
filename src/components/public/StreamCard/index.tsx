import * as S from "./styles";
import { Play } from "../../../assets";
import { StreamCardProps } from "@src/libs/interfaces/streamCard";

function StreamCard(props : StreamCardProps) {
    const { title, name, src } = props;

    return (
        <S.Wrapper>
            <S.ImgWrapper>
                <S.CoverImg src={src} />
                <S.CoverImgHover>
                    <S.PlayButton>
                        <Play />
                    </S.PlayButton>
                </S.CoverImgHover>
            </S.ImgWrapper>
            <S.Title>{title}</S.Title>
            <S.UserName>{name}</S.UserName>
        </S.Wrapper>
    );
}

export default StreamCard;
