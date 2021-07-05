import * as S from "./styles";

function Tag(props) {
    const { tags } = props;
    return (
        <S.Wrapper>
            {tags.map((tag: string, index) => (
                <S.Tag key={index}># {tag}</S.Tag>
            ))}
        </S.Wrapper>
    );
}

export default Tag;
