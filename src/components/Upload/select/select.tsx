import * as S from "../styles";

interface props {
  event(e:any): void;
  listArr: any[];
  name: string;
}

export default function Select({ event, listArr, name }: props) {
  return (
    <div>
      <S.InpTitle>{name}</S.InpTitle>
      <S.Select name={name} onChange={event}>
        {listArr.map((e, index) => (
          <option value={index} key={index}>
            {e}
          </option>
        ))}
      </S.Select>
    </div>
  );
}
