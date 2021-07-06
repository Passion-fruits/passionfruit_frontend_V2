import Genre from "../public/Genre";
import StreamCardMap from "../public/Map/streamCardMap";
import * as S from "./styles";
import { useRouter } from 'next/router';

export default function AllMusic() {
  const router = useRouter();
  const arr = [
    {
      title: "Get dope",
      name: "logic",
      coverImg:
        "https://cdn.wadiz.kr/ft/images/green001/2019/0717/20190717211331466_29.jpg/wadiz/format/jpg/quality/80/optimize",
      musicUrl:
        "https://p.scdn.co/mp3-preview/2d914ef1e42235bd50ba4f1c08f84d84ebb0bebc?cid=53603d8d7f0e4e2a85cb1339d65303ce",
    },
    {
      title: "Summer",
      name: "김현철",
      coverImg:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNvUi8It5p-5XIS7HZ6tV0eAlr6uyefhnmuw&usqp=CAU",
      musicUrl:
        "https://p.scdn.co/mp3-preview/b38123d0dc2ce0d29e784e86cb51369d2a684be5?cid=53603d8d7f0e4e2a85cb1339d65303ce",
    },
    {
      title: "Still rappin",
      name: "young thug",
      coverImg:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJY-Qm8abYHY68XwYfYw3ZyXZBofSHdYYzxw&usqp=CAU",
      musicUrl:
        "https://p.scdn.co/mp3-preview/4b507dbdb309c99ef52b7cc4b6bec832a8aec19d?cid=53603d8d7f0e4e2a85cb1339d65303ce",
    },
    {
      title: "Get dope",
      name: "logic",
      coverImg:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD7UhlO2UBf7jOcMR-Oo83v4xl-norE9dPVw&usqp=CAU",
      musicUrl:
        "https://p.scdn.co/mp3-preview/9cb3c8b7ccb399c2c5346ac424cc59be9fef3c98?cid=53603d8d7f0e4e2a85cb1339d65303ce",
    },
    {
      title: "Get dope",
      name: "logic",
      coverImg:
        "https://graphicriver.img.customer.envatousercontent.com/files/226528062/Album+Cover+Art+-+Hip+Hop+Mixtapes+-+Westcoast.jpg?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=590&s=f15959231b9f99253877adc2c6021007",
      musicUrl:
        "https://p.scdn.co/mp3-preview/03c8dc4ff8254b9ef20949f6562d5e37941bdb06?cid=53603d8d7f0e4e2a85cb1339d65303ce",
    },
    {
      title: "Get dope",
      name: "logic",
      coverImg:
        "https://coverartland.com/wp-content/uploads/2020/06/readytodie.jpg",
      musicUrl:
        "https://p.scdn.co/mp3-preview/2d914ef1e42235bd50ba4f1c08f84d84ebb0bebc?cid=53603d8d7f0e4e2a85cb1339d65303ce",
    },
    {
      title: "Summer",
      name: "김현철",
      coverImg:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSjaOXyAkThbCbR4K33ztps-0V0D50iqo8Iw&usqp=CAU",
      musicUrl:
        "https://p.scdn.co/mp3-preview/b38123d0dc2ce0d29e784e86cb51369d2a684be5?cid=53603d8d7f0e4e2a85cb1339d65303ce",
    },
    {
      title: "Still rappin",
      name: "young thug",
      coverImg:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJY-Qm8abYHY68XwYfYw3ZyXZBofSHdYYzxw&usqp=CAU",
      musicUrl:
        "https://p.scdn.co/mp3-preview/4b507dbdb309c99ef52b7cc4b6bec832a8aec19d?cid=53603d8d7f0e4e2a85cb1339d65303ce",
    },
    {
      title: "Get dope",
      name: "logic",
      coverImg:
        "https://cdn.univ20.com/wp-content/uploads/2018/10/ea6345acc53bb8cbac3564f661ae9dd4.png",
      musicUrl:
        "https://p.scdn.co/mp3-preview/9cb3c8b7ccb399c2c5346ac424cc59be9fef3c98?cid=53603d8d7f0e4e2a85cb1339d65303ce",
    },
    {
      title: "Get dope",
      name: "logic",
      coverImg:
        "https://graphicriver.img.customer.envatousercontent.com/files/226528062/Album+Cover+Art+-+Hip+Hop+Mixtapes+-+Westcoast.jpg?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=590&s=f15959231b9f99253877adc2c6021007",
      musicUrl:
        "https://p.scdn.co/mp3-preview/03c8dc4ff8254b9ef20949f6562d5e37941bdb06?cid=53603d8d7f0e4e2a85cb1339d65303ce",
    },
  ];
  return (
    <S.Wrapper>
      <S.Container>
        <S.SIDE_BAR>
          <Genre/>
        </S.SIDE_BAR>
        <S.RIGHT_SIDE>
          <S.TopContainer>
            <b>힙합 전체 트랙</b>
            <S.UploadBox onClick={()=>router.push('/upload')}>
              <p>
                음악을 <span>업로드</span> 해보세요
              </p>
              <b>{">"}</b>
            </S.UploadBox>
          </S.TopContainer>
          <S.MusicWrapper>
            <StreamCardMap arr={arr} />
            <StreamCardMap arr={arr} />
            <StreamCardMap arr={arr} />
          </S.MusicWrapper>
        </S.RIGHT_SIDE>
      </S.Container>
    </S.Wrapper>
  );
}
