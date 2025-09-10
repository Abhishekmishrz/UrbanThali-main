import Wrapper from "@/layout/wrapper";
import HeaderThree from "@/layout/headers/header-3";
import UrbanThaliFooter from "@/layout/footers/urban-thali-footer";
import CommonBreadcrumb from "@/components/breadcrumb/common-breadcrumb";
import LoginArea from "@/components/login-register/login-area";

export const metadata = {
  title: "Urban Thali - Login Page",
};

export default function LoginPage() {
  return (
    <Wrapper>
      <HeaderThree hideNavbar={true} />
      <CommonBreadcrumb title="Login" subtitle="Login" center={true} />
      <LoginArea/>
      <UrbanThaliFooter />
    </Wrapper>
  );
}
