export interface modalProps{
    ModalHandle?() : void;
    ModalState? : boolean;
}

export interface DetailMenuProps{
    href : string;
    title : string;
    margin? : number | string;
    sec? : number | string;
}