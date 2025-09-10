import Wrapper from "@/layout/wrapper";
import HeaderTwo from "@/layout/headers/header-2";
import ProductDetailsArea from "@/components/product-details/product-details-area";
import UrbanThaliFooter from "@/layout/footers/urban-thali-footer";

export const metadata = {
  title: "UrbanThali - Product Details Swatches Page",
};

export default function ProductSwatchesDetailsPage() {
  return (
    <Wrapper>
      <HeaderTwo style_2={true} />
      <ProductDetailsArea id="641e887d05f9ee1717e1348a"/>
      <UrbanThaliFooter />
    </Wrapper>
  );
}
