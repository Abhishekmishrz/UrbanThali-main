import Wrapper from "@/layout/wrapper";
import HeaderThree from "@/layout/headers/header-3";
import ProductDetailsArea from "@/components/product-details/product-details-area";
import ThaliDetailsArea from "@/components/product-details/thali-details-area";
import UrbanThaliFooter from "@/layout/footers/urban-thali-footer";

export const metadata = {
  title: "UrbanThali - Product Details Page",
};

export default async function ProductDetailsPage({ params }) {
  // All products are thali products in Urban Thali system
  const { id } = await params;
  
  return (
    <Wrapper>
      <HeaderThree />
      <ThaliDetailsArea id={id} />
      <UrbanThaliFooter />
    </Wrapper>
  );
}
