import { MenuArr } from "../../libs/interfaces/main";
import * as S from "./styles";

export default function MenuCard() {
  const menuArr: MenuArr[] = [
    {
      start: "#2063FF",
      last: "#00E1B3",
      title: "#업로드",
      description: "음악을 세상에 공개하세요!",
    },
    {
      start: "#304BFF",
      last: "#E881D3",
      title: "#전체보기",
      description: "사람들의 곡을 들어보세요!",
    },
    {
      start: "#FF3730",
      last: "#C7FF0C",
      title: "#피드",
      description: "음악의 하이라이트만 만나보기!",
    },
  ];
  return (
    <S.SpaceContainer>
      <S.IntroCard>
        <S.CardCover>
          <h3>아티스트를 발견하다, 버터멜론</h3>
          <p>
            새로운 아티스트를 환영합니다. 음악을 존중합니다. <br />
            버터멜론에서 이뤄내세요!
          </p>
        </S.CardCover>
      </S.IntroCard>
      {menuArr.map((e: MenuArr, index: number) => (
        <S.MenuCard key={index} start={e.start} last={e.last}>
          <h3>{e.title}</h3>
          <p>{e.description}</p>
        </S.MenuCard>
      ))}
    </S.SpaceContainer>
  );
}
