import * as S from "./styles";
import { GenreKinds } from "./../../../libs/exportFile/genre";
import { GenreArr } from "@src/libs/interfaces/main";
import { useState } from "react";

export default function Genre() {
  const [genre, setGenre] = useState<string>(GenreKinds[0].title);
  const chooseGenre = (e): void => {
    setGenre(e.target.value);
  };
  return (
    <S.GenreBox>
      <h3>장르</h3>
      <S.LINE />
      {GenreKinds.map((e: GenreArr, index: number) => (
        <S.Select key={index}>
          <S.CHECK_BOX>
            <input
              type="radio"
              value={e.title}
              name="genre"
              onChange={chooseGenre}
              checked={e.title === genre}
            />
            <label>{e.title}</label>
          </S.CHECK_BOX>
        </S.Select>
      ))}

      <h3>정렬</h3>
      <S.LINE />
      {GenreKinds.map((e: GenreArr, index: number) => (
        <S.Select key={index}>
          <S.CHECK_BOX>
            <input
              type="radio"
              value={e.title}
              name="sort"
              onChange={chooseGenre}
              checked={e.title === genre}
            />
            <label>{e.title}</label>
          </S.CHECK_BOX>
        </S.Select>
      ))}

    </S.GenreBox>
  );
}
