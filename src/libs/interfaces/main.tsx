import { UserProfileProps } from "@src/libs/interfaces/userProfile";
import { musicObj } from "./music";

export interface GradationColor{
    start? : string;
    last? : string;
}

export interface MenuArr extends GradationColor{
    title : string;
    description? : string;
}

export interface ArtistInfor extends UserProfileProps{

}

export interface MusicArr extends musicObj{
}

export interface GenreArr extends MenuArr{};