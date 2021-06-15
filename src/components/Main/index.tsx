import MenuCard from "./menuCard";
import * as S from "./styles";
import ArtisList from './artistList';

export default function MainComponent() {
  return (
    <>
      <S.Wrapper>
        <S.Container>
          <S.ContainerComment>나와야 음악이다, 버터멜론 </S.ContainerComment>
          <MenuCard/>
          <S.ContainerComment>추천 아티스트를 만나보세요</S.ContainerComment>
          <ArtisList/>
          <S.ContainerComment>추천 아티스트를 만나보세요</S.ContainerComment>
          <ArtisList/>
          <S.ContainerComment>추천 아티스트를 만나보세요</S.ContainerComment>
          <ArtisList/>
          <S.ContainerComment>추천 아티스트를 만나보세요</S.ContainerComment>
          <ArtisList/>
        </S.Container>
      </S.Wrapper>
    </>
  );
}
