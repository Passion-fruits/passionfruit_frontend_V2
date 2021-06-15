import { SvgProps } from "@src/libs/interfaces/playBar";

export default function PlayBtn({onClickEvent} : SvgProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="22"
      viewBox="0 0 22.581 22"
      onClick={onClickEvent}
      className="svg"
    >
      <path
        id="Icon_awesome-play"
        data-name="Icon awesome-play"
        d="M21.392,10.823,3.649.333A2.406,2.406,0,0,0,0,2.415V23.389a2.417,2.417,0,0,0,3.649,2.082L21.392,14.986a2.417,2.417,0,0,0,0-4.163Z"
        transform="translate(0 -0.002)"
        fill="#fff"
      />
    </svg>
  );
}
