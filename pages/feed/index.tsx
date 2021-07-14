import Feed from "@src/components/FeedList";
import LayoutContainer from "@src/components/public/LayoutContainer";

export default function FeedPage(){
    return <LayoutContainer children={<Feed/>}/>
}