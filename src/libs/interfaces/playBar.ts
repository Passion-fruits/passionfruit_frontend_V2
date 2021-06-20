import { musicObj } from "./music";

export interface SvgProps{
    onClickEvent?() : void;
}

export interface ProgressBarProps{
    progress : number | string;
}

export interface ControlerProps extends musicObj{
    volume : number;
}