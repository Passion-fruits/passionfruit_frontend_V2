import { GenreArr } from "@src/libs/interfaces/main";
import * as S from "../styles";
import { GenreKinds } from './../../../libs/exportFile/genre';

export default function GenreList() {
  return (
    <S.LayOut>
      {GenreKinds.map((e: GenreArr, index: number) => (
        <S.Genre key={index} start={e.start} last={e.start}>
          <S.GenreName># {e.title}</S.GenreName>
          <S.GenreDescription>{e.description}</S.GenreDescription>
        </S.Genre>
      ))}
    </S.LayOut>
  );
}
