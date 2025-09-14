import Wrapper from "@/layout/wrapper";
import HeaderThree from "@/layout/headers/header-3";
import ProductDetailsArea from "@/components/product-details/product-details-area";
import ThaliDetailsArea from "@/components/product-details/thali-details-area";
import UrbanThaliFooter from "@/layout/footers/urban-thali-footer";

export const metadata = {
  title: "UrbanThali - Product Details Page",
};

// Function to check if the product is a thali by fetching from API
async function checkIfThali(id) {
  // Always fetch from API to check category
  const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:9000';
  try {
    const response = await fetch(`${apiUrl}/api/food-item/single-food-item/${id}`);
    if (response.ok) {
      const data = await response.json();
      return data?.category?.name === 'Thali';
    }
  } catch (error) {
    console.error('Error checking product category:', error);
  }
  
  return false;
}

export default async function ProductDetailsPage({ params }) {
  const { id } = await params;
  
  // Check if this is a thali product
  const isThaliProduct = await checkIfThali(id);

  return (
    <Wrapper>
      <HeaderThree />
      <div style={{ paddingTop: '135px' }}>
        {isThaliProduct ? (
          <ThaliDetailsArea id={id} />
        ) : (
          <ProductDetailsArea id={id} />
        )}
      </div>
      <UrbanThaliFooter />
    </Wrapper>
  );
}
