import Profile from "@src/components/Profile";
import LayoutContainer from "@src/components/public/LayoutContainer";

export default function ProfilePage(){
    return(
        <LayoutContainer children={<Profile/>}/>
    )
}