import Wrapper from "@/layout/wrapper";
import HeaderThree from "@/layout/headers/header-3";
import UrbanThaliFooter from "@/layout/footers/urban-thali-footer";
import CommonBreadcrumb from "@/components/breadcrumb/common-breadcrumb";
import CheckoutArea from "@/components/checkout/checkout-area";

export const metadata = {
  title: "Urban Thali - Checkout Page",
};

export default function CheckoutPage() {
  return (
    <Wrapper>
      <HeaderThree />
      <div style={{ paddingTop: '135px' }}>
        <CommonBreadcrumb title="Checkout" subtitle="Checkout" bg_clr={true} />
        <CheckoutArea/>
      </div>
      <UrbanThaliFooter />
    </Wrapper>
  );
}
