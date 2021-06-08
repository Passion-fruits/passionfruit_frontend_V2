import * as S from "./styles";
import Link from "next/link";
import { DetailMenuProps } from "@src/libs/interfaces/header";
import { useRouter } from "next/router";

export default function DetailMenu({ href, title }: DetailMenuProps) {
  const router = useRouter();
  return (
    <Link href={"/" + href}>
      <S.Menu className={router.pathname == "/" + href ? "active" : ""}>
        {title}
      </S.Menu>
    </Link>
  );
}