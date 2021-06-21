import * as S from "./styles";
import { Play } from "../../../assets";

function StreamCard(props) {
    const { title } = props;

    return (
        <S.Wrapper>
            <S.ImgWrapper>
                <S.CoverImg />
                <S.CoverImgHover>
                    <Play size={56} />
                </S.CoverImgHover>
            </S.ImgWrapper>
            <S.Title></S.Title>
            <S.UserName></S.UserName>
        </S.Wrapper>
    );
}

export default StreamCard;
