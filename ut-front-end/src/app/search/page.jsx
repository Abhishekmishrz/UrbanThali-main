import Wrapper from "@/layout/wrapper";
import HeaderTwo from "@/layout/headers/header-2";
import CommonBreadcrumb from "@/components/breadcrumb/common-breadcrumb";
import SearchArea from "@/components/search/search-area";
import UrbanThaliFooter from "@/layout/footers/urban-thali-footer";


export const metadata = {
  title: "UrbanThali - Search Page",
};

export default function SearchPage() {
  return (
    <Wrapper>
      <HeaderTwo style_2={true} />
      <CommonBreadcrumb title="Search Products" subtitle="Search Products" />
      <SearchArea />
      <UrbanThaliFooter />
    </Wrapper>
  );
}
