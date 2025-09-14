import Wrapper from "@/layout/wrapper";
import HeaderThree from "@/layout/headers/header-3";
import ProductDetailsArea from "@/components/product-details/product-details-area";
import UrbanThaliFooter from "@/layout/footers/urban-thali-footer";

export const metadata = {
  title: "Urban Thali - Product Details Page",
};

export default function ProductDetailsPage() {
  return (
    <Wrapper>
      <HeaderThree />
      <div style={{ paddingTop: '135px' }}>
        <ProductDetailsArea id="6431364df5a812bd37e765ac" />
      </div>
      <UrbanThaliFooter />
    </Wrapper>
  );
}
