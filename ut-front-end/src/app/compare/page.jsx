import Wrapper from "@/layout/wrapper";
import HeaderTwo from "@/layout/headers/header-2";
import UrbanThaliFooter from "@/layout/footers/urban-thali-footer";
import CommonBreadcrumb from "@/components/breadcrumb/common-breadcrumb";
import CompareArea from "@/components/compare/compare-area";

export const metadata = {
  title: "Urban Thali - Compare Page",
};

export default function ComparePage() {
  return (
    <Wrapper>
      <HeaderTwo style_2={true} />
      <CommonBreadcrumb title="Compare" subtitle="Compare" />
      <CompareArea/>
      <UrbanThaliFooter />
    </Wrapper>
  );
}
