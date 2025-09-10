import React from 'react';
import Wrapper from "@/layout/wrapper";
import HeaderThree from "@/layout/headers/header-3";
import UrbanThaliFooter from "@/layout/footers/urban-thali-footer";

export const metadata = {
  title: "Offers - Urban Thali",
};

export default function OffersPage() {
  return (
    <Wrapper>
      <HeaderThree />
      <div style={{ paddingTop: '150px', paddingBottom: '100px', minHeight: '60vh' }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h1 style={{ fontSize: '48px', fontWeight: '700', color: '#1f2937', marginBottom: '20px' }}>
                Special Offers
              </h1>
              <p style={{ fontSize: '18px', color: '#6b7280', marginBottom: '40px' }}>
                Discover our amazing deals and discounts on authentic Indian thalis
              </p>
              <div style={{ 
                backgroundColor: '#f8fafc', 
                padding: '40px', 
                borderRadius: '12px',
                border: '2px dashed #e5e7eb'
              }}>
                <h3 style={{ color: '#FCB53B', marginBottom: '20px' }}>Coming Soon!</h3>
                <p style={{ color: '#6b7280' }}>
                  We&apos;re working on bringing you the best offers and deals. Check back soon for exciting discounts!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <UrbanThaliFooter />
    </Wrapper>
  );
}
