import Profile from "@src/components/Profile";
import LayoutContainer from "@src/components/public/LayoutContainer";
import profile from "../../src/libs/api/profile";

export default function ProfilePage({ profileObj }) {
  return <LayoutContainer children={<Profile profileObj={profileObj} />} />;
}

export async function getServerSideProps() {
  const res = profile.getMyProfile();
  return {
    props: {
      profileObj: (await res).data,
    },
  };
}
