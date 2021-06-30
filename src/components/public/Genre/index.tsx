import * as S from "./styles";
import { GenreKinds } from "./../../../libs/exportFile/genre";
import { GenreArr } from "@src/libs/interfaces/main";

export default function Genre() {
  return (
    <S.GenreBox>
      <h3>장르</h3>
      <S.LINE />
      {GenreKinds.map((e: GenreArr, index: number) => (
        <S.Select key={index}>
          <S.CHECK_BOX>
            {index === 0 ? (
              <input checked type="radio" value={e.title} name="genre" />
            ) : (
              <input type="radio" value={e.title} name="genre" />
            )}
            <label>{e.title}</label>
          </S.CHECK_BOX>
        </S.Select>
      ))}

      <h3>정렬</h3>
      <S.LINE />
      {GenreKinds.map((e: GenreArr, index: number) => (
        <S.Select key={index}>
          <S.CHECK_BOX>
            {index === 0 ? (
              <input checked type="radio" value={e.title} name="sort" />
            ) : (
              <input type="radio" value={e.title} name="sort" />
            )}
            <label>{e.title}</label>
          </S.CHECK_BOX>
        </S.Select>
      ))}
    </S.GenreBox>
  );
}
