import Close from "@src/assets/close";
import { modalProps } from "@src/libs/interfaces/header";
import DetailMenu from "./DetailMenu";
import * as S from "./styles";

export default function Menu({ ModalHandle, ModalState }: modalProps) {
  return (
    <>
      <S.Container ModalState={ModalState}>
        <div>
          <Close ModalHandle={ModalHandle} />
          <div>
            <DetailMenu href="" title="메인" />
            <DetailMenu href="feed" title="피드" />
            <DetailMenu href="all" title="전체보기" />
            <DetailMenu href="chart" title="차트" />
          </div>
          <div>
            <S.BottomMenu>마이페이지</S.BottomMenu>
            <S.BottomMenu>회원가입</S.BottomMenu>
            <S.BottomMenu>패션프루츠 소개</S.BottomMenu>
          </div>
        </div>
      </S.Container>
    </>
  );
}
