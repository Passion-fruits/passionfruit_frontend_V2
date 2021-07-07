import * as S from "./styles";
import { MenuProps } from "./../../libs/interfaces/profile";

const NavLink = {
    color:"white",
    borderBottom : "2px solid white"
}

export default function Menu({ content, value, nowMenu, handle }: MenuProps) {
  return (
    <S.Menu onClick={() => handle(content)} style={content === nowMenu ? NavLink : {}}>
      {content} ( {value} )
    </S.Menu>
  );
}
