import { UserProfileProps } from "@src/libs/interfaces/userProfile";

export interface GradationColor{
    start? : string;
    last? : string;
}

export interface MenuArr extends GradationColor{
    title : string;
    description : string;
}

export interface ArtistInfor extends UserProfileProps{

}