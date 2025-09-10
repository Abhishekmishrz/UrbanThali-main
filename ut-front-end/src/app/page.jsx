// import Wrapper from "@/layout/wrapper";
// import Header from "@/layout/headers/header";
// import HomeHeroSlider from "@/components/hero-banner/home-hero-slider";
// import BannerArea from "@/components/banner/banner-area";
// import BlogArea from "@/components/blog/electronic/blog-area";
// import ElectronicCategory from "@/components/categories/electronic-category";
// import CtaArea from "@/components/cta/cta-area";
// import FeatureArea from "@/components/features/feature-area";
// import InstagramArea from "@/components/instagram/instagram-area";
// import NewArrivals from "@/components/products/electronics/new-arrivals";
// import OfferProducts from "@/components/products/electronics/offer-products";
// import ProductArea from "@/components/products/electronics/product-area";
// import ProductBanner from "@/components/products/electronics/product-banner";
// import ProductGadgetArea from "@/components/products/electronics/product-gadget-area";
// import ProductSmArea from "@/components/products/electronics/product-sm-area";
// import Footer from "@/layout/footers/footer";


// export default function HomePage() {
//   return (
//     <Wrapper>
//       <Header/>
//       <HomeHeroSlider/>
//       <ElectronicCategory/>
//       <FeatureArea/>
//       <ProductArea/>
//       <BannerArea/>
//       <OfferProducts/>
//       <ProductGadgetArea/>
//       <ProductBanner/>
//        <NewArrivals/>
//       <ProductSmArea/>
//       <BlogArea/>
//       <InstagramArea/>
//       <CtaArea/>
//       <Footer/>
//     </Wrapper>
//   )
// }


import Wrapper from "@/layout/wrapper";
import HeaderThree from "@/layout/headers/header-3";
import BeautyBanner from "@/components/banner/beauty-banner";
import BestSellingThalis from "@/components/products/best-selling-thalis";
import MenuFilterArea from "@/components/products/menu-filter-area";
import SpecialOffers from "@/components/offers/special-offers";
import FeatureAreaTwo from "@/components/features/feature-area-2";
import UrbanThaliFooter from "@/layout/footers/urban-thali-footer";

export const metadata = {
  title: "Urban Thali",
};

export default function HomePageThree() {
  return (
    <Wrapper>
      <HeaderThree />
      <BeautyBanner />
      <BestSellingThalis />
      <MenuFilterArea />
      <SpecialOffers />
      <FeatureAreaTwo />
      <UrbanThaliFooter />
    </Wrapper>
  );
}
