import React from 'react';
import Wrapper from "@/layout/wrapper";
import HeaderThree from "@/layout/headers/header-3";
import MenuFilterArea from "@/components/products/menu-filter-area";
import UrbanThaliFooter from "@/layout/footers/urban-thali-footer";

export const metadata = {
  title: "Menu - Urban Thali",
};

export default function MenuPage() {
  return (
    <Wrapper>
      <HeaderThree />
      <div style={{ paddingTop: '100px' }}>
        <MenuFilterArea />
      </div>
      <UrbanThaliFooter />
    </Wrapper>
  );
}

