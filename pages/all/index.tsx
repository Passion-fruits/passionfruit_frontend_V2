import AllMusic from "@src/components/AllMusic";
import LayoutContainer from "@src/components/public/LayoutContainer";

export default function AllMusicPage(){
    return(
        <LayoutContainer children={<AllMusic/>}/>
    )
}