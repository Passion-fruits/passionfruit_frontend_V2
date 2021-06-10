export interface WrapperProps{
    width?:string;
    height?:string;
}

export interface UserProfileProps extends WrapperProps{
    name : string;
    followerCount : string | number;
    imgUrl : string;
}