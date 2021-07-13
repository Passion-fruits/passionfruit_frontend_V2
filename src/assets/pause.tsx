import { SvgProps } from "@src/libs/interfaces/playBar";

export default function Pause({ onClickEvent }: SvgProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18.032"
      height="20.725"
      viewBox="0 0 18.032 22"
      onClick={onClickEvent}
      className="svg"
    >
      <path
        id="Icon_ionic-md-pause"
        data-name="Icon ionic-md-pause"
        d="M6.75,26.138h6.012V4.5H6.75ZM18.769,4.5V26.138h6.012V4.5Z"
        transform="translate(-6.75 -4.5)"
        fill="#fff"
      />
    </svg>
  );
}
