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
    check: false,
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
    border: `1px solid ${COLOR.blue}`,
    color: COLOR.blue,
  };
  return (
    <S.Wrapper>
      <Wave />
      <Wave />
      <S.CoverWrapper style={{ background: "rgb(0, 0, 0, 0.8)" }}>
        <S.Container>
          {toggle === "before" ? (
            <>
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
              <S.SubBtn onClick={() => setToggle("after")}>NEXT</S.SubBtn>
            </>
          ) : (
            <>
              <h1>어떤 장르를 선호하시나요?</h1>
              <h3>노래 추천시 반영됩니다</h3>
              <S.GenreList>
                {GenreKinds.map((e, index) => (
                  <S.Genre
                    key={index}
                    style={index === userObj.genre ? checkStyle : {}}
                    onClick={() => {
                      setUserObj({
                        ...userObj,
                        genre: index,
                      });
                    }}
                  >
                    {e.title}
                  </S.Genre>
                ))}
              </S.GenreList>
              <S.SubBtn>FINISH</S.SubBtn>
            </>
          )}
        </S.Container>
      </S.CoverWrapper>
    </S.Wrapper>
  );
}
