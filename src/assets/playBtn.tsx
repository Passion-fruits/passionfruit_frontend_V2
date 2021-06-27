import { SvgProps } from "@src/libs/interfaces/playBar";

export default function PlayBtn({ onClickEvent }: SvgProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18.309"
      height="20.725"
      viewBox="0 0 18.309 20.725"
      onClick={onClickEvent}
      className="svg"
    >
      <path
        id="다각형_5"
        data-name="다각형 5"
        d="M9.492,1.538a1,1,0,0,1,1.741,0L19.88,16.817a1,1,0,0,1-.87,1.493H1.715a1,1,0,0,1-.87-1.493Z"
        transform="translate(18.309) rotate(90)"
        fill="#fff"
      />
    </svg>
  );
}
