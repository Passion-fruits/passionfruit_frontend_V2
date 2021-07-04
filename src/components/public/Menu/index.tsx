import { modalProps } from "@src/libs/interfaces/header";
import DetailMenu from "./DetailMenu";
import * as S from "./styles";
import SubDetailMenu from "./SubDetailMenu";

export default function Menu({ ModalHandle }: modalProps) {
  return (
    <>
      <S.Container onClick={ModalHandle}>
        <S.MenuWrapper>
          <DetailMenu sec="0.3" href="" title="메인" />
          <DetailMenu sec="0.6" href="all" title="전체보기" />
          <DetailMenu sec="0.9" href="chart" title="피드" />
          <DetailMenu sec="1.2" href="upload" title="음악 업로드" />
          <SubDetailMenu margin="30" href="chart" title="마이페이지" />
          <SubDetailMenu href="login" title="로그인" />
          <SubDetailMenu href="chart" title="버터멜론 소개" />
        </S.MenuWrapper>
      </S.Container>
    </>
  );
}
