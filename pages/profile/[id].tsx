import Profile from "@src/components/Profile";
import LayoutContainer from "@src/components/public/LayoutContainer";
import { useRouter } from "next/router";
import profile from "../../src/libs/api/profile";

export default function ProfilePage({ profileObj }) {
  return <LayoutContainer children={<Profile profileObj={profileObj} />} />;
}

export async function getServerSideProps(context) {
  const id = context.params.id;
  const res =
    id === "myprofile" ? profile.getMyProfile() : profile.getProfile(id);
  return {
    props: {
      profileObj: (await res).data,
    },
  };
}
