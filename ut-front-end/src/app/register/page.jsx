import Wrapper from "@/layout/wrapper";
import HeaderThree from "@/layout/headers/header-3";
import UrbanThaliFooter from "@/layout/footers/urban-thali-footer";
import CommonBreadcrumb from "@/components/breadcrumb/common-breadcrumb";
import RegisterArea from "@/components/login-register/register-area";

export const metadata = {
  title: "Urban Thali - Register Page",
};

export default function RegisterPage() {
  return (
    <Wrapper>
      <HeaderThree hideNavbar={true} />
      <CommonBreadcrumb title="Register" subtitle="Register" center={true} />
      <RegisterArea />
      <UrbanThaliFooter />
    </Wrapper>
  );
}
