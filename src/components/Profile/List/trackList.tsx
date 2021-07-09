import { MusicArr } from "@src/libs/interfaces/main";
import StreamCard from "../../public/StreamCard";
import * as S from "../styles";

export default function TrackList({musicArr}) {
  return (
    <S.GRID_BOX>
      {musicArr.map((e, index: number) => (
        <StreamCard
          key={index}
          title={e.title}
          name={e.name}
          coverImg={e.cover_url}
          musicUrl={e.musicUrl}
          id={e.id}
          like={e.like}
          genre={e.genre}
          comment={e.comment}
        />
      ))}
    </S.GRID_BOX>
  );
}
