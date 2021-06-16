import { GenreArr } from "@src/libs/interfaces/main";
import * as S from "../styles";

export default function GenreList() {
  const GenreArr: GenreArr[] = [
    {
      start: "red",
      last: "yellow",
      title: "힙합",
      description: "오늘을 힙하게",
    },
    {
      start: "#FF2C95",
      last: "#8000E1",
      title: "재즈음악",
      description: "분위기에 취하다",
    },
    {
      start: "red",
      last: "yellow",
      title: "팝",
      description: "평범한 일상의 변화",
    },
    {
      start: "red",
      last: "yellow",
      title: "클래식",
      description: "내 안의 클래식함",
    },
    {
      start: "red",
      last: "yellow",
      title: "발라드",
      description: "감성적이고 싶을때",
    },
    {
      start: "red",
      last: "yellow",
      title: "블루스",
      description: "고풍적인 느낌",
    },
    {
      start: "red",
      last: "yellow",
      title: "기타",
      description: "모든 음악을 만나보세요!",
    },
  ];
  return (
    <S.LayOut>
      {GenreArr.map((e: GenreArr, index: number) => (
        <S.Genre key={index} start={e.start} last={e.last}>
          <S.GenreName># {e.title}</S.GenreName>
          <S.GenreDescription>{e.description}</S.GenreDescription>
        </S.Genre>
      ))}
    </S.LayOut>
  );
}
