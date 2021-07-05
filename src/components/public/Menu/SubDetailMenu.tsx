import * as S from "./styles";
import Link from "next/link";
import { DetailMenuProps } from "@src/libs/interfaces/header";

export default function SubDetailMenu({ href, title,margin }: DetailMenuProps) {
  return (
    <Link href={"/" + href}>
      <S.BottomMenu style={{marginTop:`${margin}px`}}>
        {title}
      </S.BottomMenu>
    </Link>
  );
}