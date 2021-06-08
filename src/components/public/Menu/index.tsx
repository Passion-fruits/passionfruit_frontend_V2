import Close from "@src/assets/close";
import { modalProps } from "@src/libs/interfaces/header";
import * as S from "./styles";

export default function Menu({ ModalHandle, ModalState }: modalProps) {
  return (
    <>
      <S.Wrapepr ModalState={ModalState} />
      <S.Container ModalState={ModalState}>
        <Close ModalHandle={ModalHandle} />
        <div>
          <S.Menu className="active">메인</S.Menu>
          <S.Menu>피드</S.Menu>
          <S.Menu>전체보기</S.Menu>
          <S.Menu>플레이리스트</S.Menu>
        </div>
        <div>
          <S.BottomMenu>마이페이지</S.BottomMenu>
          <S.BottomMenu>회원가입</S.BottomMenu>
          <S.BottomMenu>패션프루츠 소개</S.BottomMenu>
        </div>
      </S.Container>
    </>
  );
}
