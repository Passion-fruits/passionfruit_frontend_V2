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
      src: "https://cdn.univ20.com/wp-content/uploads/2018/10/ea6345acc53bb8cbac3564f661ae9dd4.png",
    },
    {
      title: "Get dope",
      name: "logic",
      src: "https://file.mk.co.kr/meet/neds/2019/01/image_readtop_2019_4937_15464799083591382.jpg",
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
