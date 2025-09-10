import Wrapper from "@/layout/wrapper";
import HeaderTwo from "@/layout/headers/header-2";
import UrbanThaliFooter from "@/layout/footers/urban-thali-footer";
import CommonBreadcrumb from "@/components/breadcrumb/common-breadcrumb";
import CheckoutArea from "@/components/checkout/checkout-area";

export const metadata = {
  title: "Urban Thali - Checkout Page",
};

export default function CheckoutPage() {
  return (
    <Wrapper>
      <HeaderTwo style_2={true} />
      <CommonBreadcrumb title="Checkout" subtitle="Checkout" bg_clr={true} />
      <CheckoutArea/>
      <UrbanThaliFooter />
    </Wrapper>
  );
}
