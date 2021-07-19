import Logo from "@src/assets/logo";
import Search from "@src/assets/search";
import { useRouter } from "next/router";
import Linked from "./linked";
import * as S from "./styles";

export default function Header() {
  const router = useRouter();
  const LinkTo = (path) => {
    router.push(path);
  };
  return (
    <S.Wrapper>
      <S.Container>
        <>
          <S.RIGHT_CONTAINER>
            <Logo callbackEvent={LinkTo} />
            <Linked href="/" content="메인" />
            <Linked href="/all" content="전체보기" />
            <Linked href="/feed" content="피드" />
            <Linked href="/upload" content="음악업로드" />
          </S.RIGHT_CONTAINER>
        </>
        <>
          <S.LEFT_CONTAINER>
            <S.InputBox>
              <Search />
              <input placeholder="쿤더에서 검색" />
            </S.InputBox>
            <S.SubBtn onClick={() => LinkTo("/profile/myprofile")}>
              마이 페이지
            </S.SubBtn>
          </S.LEFT_CONTAINER>
        </>
      </S.Container>
    </S.Wrapper>
  );
}
