import { modalProps } from "@src/libs/interfaces/header";

export default function HambergerMenu({ ModalHandle }: modalProps) {
  return (
    <svg
      onClick={ModalHandle}
      style={{ cursor: "pointer" }}
      xmlns="http://www.w3.org/2000/svg"
      width="30.659"
      height="21.106"
      viewBox="0 0 30.659 21.106"
    >
      <g
        id="Icon_feather-menu"
        data-name="Icon feather-menu"
        transform="translate(-3.5 -8)"
      >
        <path
          id="패스_1"
          data-name="패스 1"
          d="M4.5,18H33.159"
          transform="translate(0 0.553)"
          fill="none"
          stroke="#5a5a5a"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
        />
        <path
          id="패스_2"
          data-name="패스 2"
          d="M4.5,9H33.159"
          fill="none"
          stroke="#5a5a5a"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
        />
        <path
          id="패스_3"
          data-name="패스 3"
          d="M4.5,27H33.159"
          transform="translate(0 1.106)"
          fill="none"
          stroke="#5a5a5a"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
        />
      </g>
    </svg>
  );
}
