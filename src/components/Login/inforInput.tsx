import * as S from "./styles";
import Wave from "./wave";
import { useState } from "react";
import { COLOR } from "styles";
import { GenreKinds } from "./../../libs/exportFile/genre";

export default function InforInput() {
  const [userObj, setUserObj] = useState({
    name: "",
    genre: 0,
    email: "",
  });
  const [toggle, setToggle] = useState<"before" | "after">("before");
  const handling = (e): void => {
    setUserObj({
      ...userObj,
      name: e.target.value,
    });
  };
  const submit = (e) => {
    e.preventDefault();
    setToggle("after");
  };
  const checkStyle = {
    border: `2px solid ${COLOR.green}`,
    color: COLOR.green,
    boxShadow: `0px 0px 10px ${COLOR.green}`,
  };
  return (
    <S.Wrapper>
      <Wave /><Wave />
      <S.CoverWrapper style={{ background: "rgb(0, 0, 0, 0.8)" }}>
        <S.Container>
          <h1>가입을 환영합니다!</h1>
          <h3>새로운 아티스트</h3>
          <form onSubmit={submit}>
            <input
              type="text"
              onChange={handling}
              placeholder="사용할 아티스명을 입력하세요!"
            />
          </form>
          <S.CheckBox>
            <label>개인정보 수집 이용 동의</label>
            <input type="checkbox" />
          </S.CheckBox>
          <S.SubBtn>다음</S.SubBtn>
        </S.Container>
      </S.CoverWrapper>
    </S.Wrapper>
  );
}
