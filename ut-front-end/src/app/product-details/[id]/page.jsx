import Wrapper from "@/layout/wrapper";
import HeaderThree from "@/layout/headers/header-3";
import ProductDetailsArea from "@/components/product-details/product-details-area";
import ThaliDetailsArea from "@/components/product-details/thali-details-area";
import UrbanThaliFooter from "@/layout/footers/urban-thali-footer";

export const metadata = {
  title: "UrbanThali - Product Details Page",
};

export default function ProductDetailsPage({ params }) {
  // Check if this is a thali product (IDs 1-5)
  const isThaliProduct = params.id >= 1 && params.id <= 5;

  return (
    <Wrapper>
      <HeaderThree />
      {isThaliProduct ? (
        <ThaliDetailsArea id={params.id} />
      ) : (
        <ProductDetailsArea id={params.id} />
      )}
      <UrbanThaliFooter />
    </Wrapper>
  );
}
