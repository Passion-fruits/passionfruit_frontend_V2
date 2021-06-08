import HambergerMenu from "@src/assets/hambergerMenu";
import Logo from "@src/assets/logo";
import Search from "@src/assets/search";
import { useState } from "react";
import Menu from "../Menu";
import * as S from "./styles";

export default function Header() {
  const [ModalOn,setModalOn] = useState<boolean>(false);
  const modalHandle=():void=>{
    setModalOn(!ModalOn);
  }
  return (
    <>
      <S.Wrapper>
        <S.Container>
          <Logo />
          <S.SearchBar>
            <Search />
            <S.Input placeholder="Search on here" />
            <S.Select>
              <option value="">all</option>
              <option value="">track</option>
              <option value="">user</option>
              <option value="">playList</option>
            </S.Select>
          </S.SearchBar>
        </S.Container>
        <S.Container>
          <HambergerMenu ModalHandle={modalHandle} />
        </S.Container>
      </S.Wrapper>
      <Menu ModalHandle={modalHandle} ModalState={ModalOn} />
    </>
  );
}
