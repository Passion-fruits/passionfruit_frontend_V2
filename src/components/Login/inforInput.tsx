import * as S from "./styles";
import Wave from "./wave";
import { useState } from "react";

export default function InforInput() {
  const [userObj, setUserObj] = useState({
    name: "",
    genre: "",
    email: "",
  });
  const handling = (e): void => {
    setUserObj({
      ...userObj,
      name: e.target.value,
    });
  };
  const submit = (e) => {
    e.preventDefault();
    console.log(userObj);
  };
  return (
    <S.Wrapper>
      <Wave />
      <S.CoverWrapper style={{ background: "rgb(0, 0, 0, 0.8)" }}>
        <form onSubmit={submit}>
          <input
            type="text"
            onChange={handling}
            placeholder="사용할 아티스명을 입력하세요!"
          />
        </form>
      </S.CoverWrapper>
    </S.Wrapper>
  );
}
