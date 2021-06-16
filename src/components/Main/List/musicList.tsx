import * as S from "../styles";
import StreamCard from "@src/components/public/StreamCard";
import { MusicArr } from "@src/libs/interfaces/main";

export default function MusicList() {
  const arr: MusicArr[] = [
    {
      title: "Get dope",
      name: "logic",
      src: "https://cdn.wadiz.kr/ft/images/green001/2019/0717/20190717211331466_29.jpg/wadiz/format/jpg/quality/80/optimize",
    },
    {
      title: "Summer",
      name: "김현철",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNvUi8It5p-5XIS7HZ6tV0eAlr6uyefhnmuw&usqp=CAU",
    },
    {
      title: "Still rappin",
      name: "young thug",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJY-Qm8abYHY68XwYfYw3ZyXZBofSHdYYzxw&usqp=CAU",
    },
    {
      title: "Get dope",
      name: "logic",
      src: "https://i1.sndcdn.com/artworks-000338417394-2uvjyi-large.jpg",
    },
    {
      title: "Get dope",
      name: "logic",
      src: "https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F220BAB39567FE26720",
    },
  ];
  return (
    <S.LayOut>
      {arr.map((e: MusicArr,index:number) => (
        <StreamCard key={index} title={e.title} name={e.name} src={e.src} />
      ))}
    </S.LayOut>
  );
}
