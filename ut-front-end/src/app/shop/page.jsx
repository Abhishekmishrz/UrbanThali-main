import Wrapper from "@/layout/wrapper";
import HeaderThree from "@/layout/headers/header-3";
import UrbanThaliFooter from "@/layout/footers/urban-thali-footer";
import ShopBreadcrumb from "@/components/breadcrumb/shop-breadcrumb";
import ShopArea from "@/components/shop/shop-area";

export const metadata = {
  title: "Urban Thali - Shop Page",
};

export default function ShopPage() {
  return (
    <Wrapper>
      <HeaderThree />
      <div style={{ paddingTop: '135px' }}>
        <ShopBreadcrumb title="Shop Grid" subtitle="Shop Grid" />
        <ShopArea/>
      </div>
      <UrbanThaliFooter />
    </Wrapper>
  );
}
