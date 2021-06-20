import * as S from "../styles";
import StreamCard from "@src/components/public/StreamCard";
import { MusicArr } from "@src/libs/interfaces/main";

export default function MusicList() {
  const arr: MusicArr[] = [
    {
      title: "Get dope",
      name: "logic",
      coverImg: "https://cdn.wadiz.kr/ft/images/green001/2019/0717/20190717211331466_29.jpg/wadiz/format/jpg/quality/80/optimize",
      musicUrl : "https://p.scdn.co/mp3-preview/b38123d0dc2ce0d29e784e86cb51369d2a684be5?cid=53603d8d7f0e4e2a85cb1339d65303ce"
    },
    {
      title: "Summer",
      name: "김현철",
      coverImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNvUi8It5p-5XIS7HZ6tV0eAlr6uyefhnmuw&usqp=CAU",
      musicUrl : "https://p.scdn.co/mp3-preview/b38123d0dc2ce0d29e784e86cb51369d2a684be5?cid=53603d8d7f0e4e2a85cb1339d65303ce"
    },
    {
      title: "Still rappin",
      name: "young thug",
      coverImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJY-Qm8abYHY68XwYfYw3ZyXZBofSHdYYzxw&usqp=CAU",
      musicUrl : "https://p.scdn.co/mp3-preview/b38123d0dc2ce0d29e784e86cb51369d2a684be5?cid=53603d8d7f0e4e2a85cb1339d65303ce"
    },
    {
      title: "Get dope",
      name: "logic",
      coverImg: "https://cdn.univ20.com/wp-content/uploads/2018/10/ea6345acc53bb8cbac3564f661ae9dd4.png",
      musicUrl : "https://p.scdn.co/mp3-preview/b38123d0dc2ce0d29e784e86cb51369d2a684be5?cid=53603d8d7f0e4e2a85cb1339d65303ce"
    },
    {
      title: "Get dope",
      name: "logic",
      coverImg: "https://file.mk.co.kr/meet/neds/2019/01/image_readtop_2019_4937_15464799083591382.jpg",
      musicUrl : "https://p.scdn.co/mp3-preview/b38123d0dc2ce0d29e784e86cb51369d2a684be5?cid=53603d8d7f0e4e2a85cb1339d65303ce"
    },
  ];
  return (
    <S.LayOut>
      {arr.map((e: MusicArr,index:number) => (
        <StreamCard key={index} title={e.title} name={e.name} coverImg={e.coverImg} musicUrl={e.musicUrl}/>
      ))}
    </S.LayOut>
  );
}
