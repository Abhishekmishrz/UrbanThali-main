import Wrapper from "@/layout/wrapper";
import HeaderTwo from "@/layout/headers/header-2";
import UrbanThaliFooter from "@/layout/footers/urban-thali-footer";
import ShopBreadcrumb from "@/components/breadcrumb/shop-breadcrumb";
import ShopCategoryArea from "@/components/categories/shop-category-area";

export const metadata = {
  title: "UrbanThali - Category Page",
};

export default function CategoryPage() {
  return (
    <Wrapper>
      <HeaderTwo style_2={true} />
      <ShopBreadcrumb title="Only Categories" subtitle="Only Categories" />
      <ShopCategoryArea />
      <UrbanThaliFooter />
    </Wrapper>
  );
}
