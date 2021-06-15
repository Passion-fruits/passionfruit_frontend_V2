import * as S from "./styles";

function Tag(props) {
    const { tags } = props;
    return (
        <S.Wrapper>
            {tags.map((tag) => (
                <S.Tag># {tag}</S.Tag>
            ))}
        </S.Wrapper>
    );
}

export default Tag;
