import Wrapper from "@/layout/wrapper";
import HeaderThree from "@/layout/headers/header-3";
import UrbanThaliFooter from "@/layout/footers/urban-thali-footer";
import OrderArea from "@/components/order/order-area";

export const metadata = {
  title: "UrbanThali - Order Page",
};

export default function OrderPage({ params }) {
  return (
    <Wrapper>
      <HeaderThree />
      <OrderArea orderId={params.id} />
      <UrbanThaliFooter />
    </Wrapper>
  );
}
