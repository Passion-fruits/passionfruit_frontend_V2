import * as S from "../styles";
import { MusicArr } from "@src/libs/interfaces/main";
import StreamCardMap from "@src/components/public/Map/streamCardMap";

export default function MusicList() {
  const arr: MusicArr[] = [
    {
      title: "Get dope",
      name: "logic",
      coverImg: "https://cdn.wadiz.kr/ft/images/green001/2019/0717/20190717211331466_29.jpg/wadiz/format/jpg/quality/80/optimize",
      musicUrl : "https://p.scdn.co/mp3-preview/2d914ef1e42235bd50ba4f1c08f84d84ebb0bebc?cid=53603d8d7f0e4e2a85cb1339d65303ce"
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
      musicUrl : "https://p.scdn.co/mp3-preview/4b507dbdb309c99ef52b7cc4b6bec832a8aec19d?cid=53603d8d7f0e4e2a85cb1339d65303ce"
    },
    {
      title: "Get dope",
      name: "logic",
      coverImg: "https://cdn.univ20.com/wp-content/uploads/2018/10/ea6345acc53bb8cbac3564f661ae9dd4.png",
      musicUrl :"https://p.scdn.co/mp3-preview/9cb3c8b7ccb399c2c5346ac424cc59be9fef3c98?cid=53603d8d7f0e4e2a85cb1339d65303ce"
    },
    {
      title: "Get dope",
      name: "logic",
      coverImg: "https://file.mk.co.kr/meet/neds/2019/01/image_readtop_2019_4937_15464799083591382.jpg",
      musicUrl : "https://p.scdn.co/mp3-preview/03c8dc4ff8254b9ef20949f6562d5e37941bdb06?cid=53603d8d7f0e4e2a85cb1339d65303ce"
    },
  ];
  return (
    <S.LayOut>
      <StreamCardMap arr={arr}/>
    </S.LayOut>
  );
}
