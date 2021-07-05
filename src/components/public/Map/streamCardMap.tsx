import StreamCard from "@src/components/public/StreamCard";
import { MusicArr } from "@src/libs/interfaces/main";

interface props{
    arr : MusicArr[];
}

export default function StreamCardMap({ arr } : props) {
  return (
    <>
      {arr.map((e: MusicArr, index: number) => (
        <StreamCard
          key={index}
          title={e.title}
          name={e.name}
          coverImg={e.coverImg}
          musicUrl={e.musicUrl}
        />
      ))}
    </>
  );
}
