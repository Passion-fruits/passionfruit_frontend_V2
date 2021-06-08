import HambergerMenu from "@src/assets/hambergerMenu";
import Logo from "@src/assets/logo";
import Search from "@src/assets/search";
import * as S from "./styles";

export default function Header() {
  return (
    <S.Wrapper>
      <S.Container>
        <Logo />
        <S.SearchBar>
            <Search/>
            <S.Input placeholder="정보를 찾아드릴게요"/>
            <S.Select>
                <option value="">All</option>
                <option value="">Track</option>
                <option value="">User</option>
                <option value="">PlayList</option>
            </S.Select>
        </S.SearchBar>
      </S.Container>
      <S.Container>
          <HambergerMenu/>
      </S.Container>
    </S.Wrapper>
  );
}
