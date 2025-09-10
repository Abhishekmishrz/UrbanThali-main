import Wrapper from "@/layout/wrapper";
import HeaderThree from "@/layout/headers/header-3";
import UrbanThaliFooter from "@/layout/footers/urban-thali-footer";
import ProfileArea from "@/components/my-account/profile-area";

export const metadata = {
  title: "Urban Thali - Profile Page",
};

export default function ProfilePage() {
  return (
    <Wrapper>
      <HeaderThree />
      <ProfileArea />
      <UrbanThaliFooter />
    </Wrapper>
  );
}
