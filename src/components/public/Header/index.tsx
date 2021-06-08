import HambergerMenu from "@src/assets/hambergerMenu";
import Logo from "@src/assets/logo";
import Search from "@src/assets/search";
import { useState } from "react";
import Menu from "../Menu";
import * as S from "./styles";

export default function Header() {
  const [ModalOn,setModalOn] = useState<boolean>(false);
  const modalHandle=():void=>{
    if(ModalOn){
      setTimeout(()=>{
        setModalOn(!ModalOn);
      },1000)
      return;
    }
    setModalOn(!ModalOn);
  }
  return (
    <>
      <S.Wrapper>
        <S.Container>
          <Logo />
          <S.SearchBar>
            <Search />
            <S.Input placeholder="정보를 찾아드릴게요" />
            <S.Select>
              <option value="">All</option>
              <option value="">Track</option>
              <option value="">User</option>
              <option value="">PlayList</option>
            </S.Select>
          </S.SearchBar>
        </S.Container>
        <S.Container>
          <HambergerMenu ModalHandle={modalHandle} />
        </S.Container>
      </S.Wrapper>
      {ModalOn && <Menu ModalHandle={modalHandle} />}
    </>
  );
}
