import Wrapper from "@/layout/wrapper";
import HeaderThree from "@/layout/headers/header-3";
import UrbanThaliFooter from "@/layout/footers/urban-thali-footer";
import CommonBreadcrumb from "@/components/breadcrumb/common-breadcrumb";
import ForgotArea from "@/components/login-register/forgot-area";

export const metadata = {
  title: "Urban Thali - Forgot Page",
};

export default function ForgotPage() {
  return (
    <Wrapper>
      <HeaderThree hideNavbar={true} />
      <CommonBreadcrumb title="Forgot Password" subtitle="Reset Password" center={true} />
      <ForgotArea />
      <UrbanThaliFooter />
    </Wrapper>
  );
}
