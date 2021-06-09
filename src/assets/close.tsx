import { modalProps } from "@src/libs/interfaces/header";

export default function Close({ ModalHandle }: modalProps) {
  return (
    <svg
      onClick={ModalHandle}
      style={{ cursor: "pointer" }}
      xmlns="http://www.w3.org/2000/svg"
      width="25.409"
      height="25.402"
      viewBox="0 0 25.409 25.402"
    >
      <path
        id="Icon_ionic-ios-close"
        data-name="Icon ionic-ios-close"
        d="M27,23.99l9.075-9.075a2.126,2.126,0,1,0-3.007-3.007l-9.075,9.075-9.075-9.075a2.126,2.126,0,1,0-3.007,3.007l9.075,9.075-9.075,9.075a2.126,2.126,0,0,0,3.007,3.007L23.993,27l9.075,9.075a2.126,2.126,0,0,0,3.007-3.007Z"
        transform="translate(-11.285 -11.289)"
        fill="#d5cdcd"
      />
    </svg>
  );
}
