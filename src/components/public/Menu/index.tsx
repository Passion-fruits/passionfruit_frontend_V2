import { modalProps } from "@src/libs/interfaces/header";
import DetailMenu from "./DetailMenu";
import * as S from "./styles";
import SubDetailMenu from "./SubDetailMenu";

export default function Menu({ ModalHandle }: modalProps) {
  return (
    <>
      <S.Container onClick={ModalHandle}>
        <S.MenuWrapper>
          <DetailMenu href="" title="메인" />
          <DetailMenu href="all" title="전체보기" />
          <DetailMenu href="feed" title="플레이리스트" />
          <DetailMenu href="chart" title="피드" />
          <SubDetailMenu margin="30" href="chart" title="마이페이지" />
          <SubDetailMenu href="chart" title="로그인" />
          <SubDetailMenu href="chart" title="버터멜론 소개" />
        </S.MenuWrapper>
      </S.Container>
    </>
  );
}
