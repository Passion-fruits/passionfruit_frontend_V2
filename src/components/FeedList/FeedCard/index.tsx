import * as S from "./styles";
import Tag from "../../public/Tag";
import { Play } from "../../../assets";

function FeedCard() {
    return (
        <S.Container>
            <S.Wrapper>
                <S.CoverImg />
                <S.Content>
                    <S.Date>2020.01.01</S.Date>
                    <S.TitleWrapper>
                        <Play size={37} type="white" />
                        <S.Title>나를 버리고 가는 당신</S.Title>
                    </S.TitleWrapper>
                    <Tag tags={["재즈음악", "펑크음악"]} />
                    <S.Des>
                        이번엔 진짜 개빡세게 작업했다. 안녕하십니까 여러분 들,
                        제이름은 정필준 입니다.
                    </S.Des>
                </S.Content>
            </S.Wrapper>
        </S.Container>
    );
}

export default FeedCard;
