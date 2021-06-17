import { GenreArr } from "@src/libs/interfaces/main";
import * as S from "../styles";

export default function GenreList() {
  const GenreArr: GenreArr[] = [
    {
      start: "#FF6DB5",
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
      start: "#E86DFF",
      last: "yellow",
      title: "팝",
      description: "평범한 일상의 변화",
    },
    {
      start: "#BD58FF",
      last: "yellow",
      title: "클래식",
      description: "내 안의 클래식함",
    },
    {
      start: "#6D58FF",
      last: "yellow",
      title: "발라드",
      description: "감성적이고 싶을때",
    },
    {
      start: "#4AB1FF",
      last: "yellow",
      title: "블루스",
      description: "고풍적인 느낌",
    },
    {
      start: "#0068C4",
      last: "yellow",
      title: "일렉트로닉 / 댄스",
      description: "노래에 몸을 맡기고",
    },
    {
      start: "#00C4BD",
      last: "yellow",
      title: "락",
      description: "스트레스 풀고싶을 때",
    },
    {
      start: "#00E17F",
      last: "yellow",
      title: "R&B",
      description: "힐링이 필요할 때",
    },
    {
      start: "#58D44B",
      last: "yellow",
      title: "소울",
      description: "뜻 깊은 매력",
    },
    {
      start: "#C58300",
      last: "yellow",
      title: "기타",
      description: "모든 음악을 만나보세요!",
    },
  ];
  return (
    <S.LayOut>
      {GenreArr.map((e: GenreArr, index: number) => (
        <S.Genre key={index} start={e.start} last={e.start}>
          <S.GenreName># {e.title}</S.GenreName>
          <S.GenreDescription>{e.description}</S.GenreDescription>
        </S.Genre>
      ))}
    </S.LayOut>
  );
}
