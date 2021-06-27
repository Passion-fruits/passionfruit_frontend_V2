import MusicDetail from "@src/components/MusicDetail";
import LayoutContainer from "@src/components/public/LayoutContainer";

export default function MusicDetailPage(){
    return(
        <LayoutContainer children={<MusicDetail/>}/>
    )
}