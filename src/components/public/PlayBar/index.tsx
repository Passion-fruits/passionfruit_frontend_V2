import * as S from "./styles";
import Controler from './controler';
import MusicInfor from "./MusicInfor";

export default function PlayBar() {
  return (
    <S.Wrapper>
      <S.Container>
        <Controler/>
        <MusicInfor/>
      </S.Container>
    </S.Wrapper>
  );
}
