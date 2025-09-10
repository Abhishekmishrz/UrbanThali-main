import Wrapper from "@/layout/wrapper";
import HeaderTwo from "@/layout/headers/header-2";
import ProductDetailsArea from "@/components/product-details/product-details-area";
import UrbanThaliFooter from "@/layout/footers/urban-thali-footer";

export const metadata = {
  title: "Urban Thali - Product Details Page",
};

export default function ProductDetailsPage() {
  return (
    <Wrapper>
      <HeaderTwo style_2={true} />
      <ProductDetailsArea id="6431364df5a812bd37e765ac" />
      <UrbanThaliFooter />
    </Wrapper>
  );
}
