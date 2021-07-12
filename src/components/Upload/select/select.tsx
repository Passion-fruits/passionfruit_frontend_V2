import * as S from "../styles";

interface props {
  event(e:any): void;
  listArr: any[];
  name: string;
}

export default function Select({ event, listArr, name }: props) {
  return (
    <div>
      <h1>{name}</h1>
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
