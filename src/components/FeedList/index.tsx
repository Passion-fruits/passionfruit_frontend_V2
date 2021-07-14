import Genre from "../public/Genre";
import FeedCard from "./FeedCard";
import * as S from "./styles";
import { FeedCardProps } from "./../../libs/interfaces/feed";

export default function Feed() {
  const arr: FeedCardProps[] = [
    {
      profile_url:
        "https://file2.nocutnews.co.kr/newsroom/image/2020/12/10/20201210141744836229_8_450_300.jpg",
      cover_url:
        "https://i.pinimg.com/736x/9a/06/39/9a063997299f58d5efe4765af4c12891.jpg",
      song_url: "",
      user_name: "윤준식",
      date: "2020-07-14",
      title: "when the nice morning",
      tag: ["힙합", "아침에"],
      description: "제가 진짜 어렵게 만든 곡이니만큼 열심히 들어주세요!!",
      heart: "1",
      comment: "2",
      song_id: "",
      user_id: "",
    },
  ];
  return (
    <S.Wrapper>
      <S.Container>
        <>
          <div>
            <Genre />
          </div>
        </>
        <>
          <S.FeedCardBox>
            {arr.map((e, index) => (
              <FeedCard
                key={index}
                profile_url={e.profile_url}
                cover_url={e.cover_url}
                song_url={e.song_url}
                user_name={e.user_name}
                date={e.date}
                title={e.title}
                tag={e.tag}
                description={e.description}
                heart={e.heart}
                comment={e.comment}
                song_id={e.song_id}
                user_id={e.song_id}
              />
            ))}
          </S.FeedCardBox>
        </>
        <>
          <div>
            <Genre />
          </div>
        </>
      </S.Container>
    </S.Wrapper>
  );
}
