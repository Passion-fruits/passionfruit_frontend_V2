import * as S from "./styles";
import { AllGenre } from "./../../../libs/exportFile/genre";
import { useState } from "react";
import { AllMood } from "@src/libs/exportFile/mood";

export default function Genre() {
  const [genre, setGenre] = useState<string>(AllGenre[0]);
  const [mood, setMood] = useState<string>(AllMood[0]);
  const chooseGenre = (e): void => {
    setGenre(e.target.value);
  };
  const chooseMood = (e): void => {
    setMood(e.target.value);
  };
  return (
    <S.GenreBox>
      <>
        <h3>장르</h3>
        <S.LINE />
        {AllGenre.map((e, index: number) => (
          <S.Select key={index}>
            <S.CHECK_BOX>
              <input
                type="radio"
                value={e}
                name="genre"
                onChange={chooseGenre}
                checked={e === genre}
              />
              <label>{e}</label>
            </S.CHECK_BOX>
          </S.Select>
        ))}
      </>
      <>
        <h3>정렬</h3>
        <S.LINE />
        {AllMood.map((e, index: number) => (
          <S.Select key={index}>
            <S.CHECK_BOX>
              <input
                type="radio"
                value={e}
                name="mood"
                onChange={chooseMood}
                checked={e === mood}
              />
              <label>{e}</label>
            </S.CHECK_BOX>
          </S.Select>
        ))}
      </>
    </S.GenreBox>
  );
}
