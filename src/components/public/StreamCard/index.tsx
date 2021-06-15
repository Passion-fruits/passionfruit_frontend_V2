import * as S from "./styles";
import { Play } from "../../../assets";

function StreamCard() {
    return (
        <S.Wrapper>
            <S.ImgWrapper>
                <S.CoverImg />
                <S.CoverImgHover>
                    <S.PlayButton>
                        <Play />
                    </S.PlayButton>
                </S.CoverImgHover>
            </S.ImgWrapper>
            <S.Title></S.Title>
            <S.UserName></S.UserName>
        </S.Wrapper>
    );
}

export default StreamCard;
