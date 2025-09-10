import React from 'react';
import Wrapper from "@/layout/wrapper";
import HeaderThree from "@/layout/headers/header-3";
import UrbanThaliFooter from "@/layout/footers/urban-thali-footer";

export const metadata = {
  title: "Privacy Policy - Urban Thali",
};

export default function PrivacyPage() {
  return (
    <Wrapper>
      <HeaderThree />
      <div style={{ paddingTop: '100px', paddingBottom: '100px', minHeight: '60vh' }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <h1 style={{ fontSize: '48px', fontWeight: '700', color: '#1f2937', marginBottom: '20px' }}>
                Privacy Policy
              </h1>
              <p style={{ fontSize: '18px', color: '#6b7280', marginBottom: '40px' }}>
                Your privacy is important to us. This policy explains how we collect, use, and protect your information.
              </p>
              
              <div style={{ backgroundColor: 'white', padding: '40px', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
                <h3 style={{ color: '#1f2937', marginBottom: '20px' }}>1. Information We Collect</h3>
                <p style={{ color: '#6b7280', marginBottom: '20px', lineHeight: '1.6' }}>
                  We collect information you provide directly to us, such as when you create an account, place an order, or contact us for support.
                </p>
                
                <h3 style={{ color: '#1f2937', marginBottom: '20px' }}>2. How We Use Your Information</h3>
                <p style={{ color: '#6b7280', marginBottom: '20px', lineHeight: '1.6' }}>
                  We use the information we collect to provide, maintain, and improve our services, process transactions, and communicate with you.
                </p>
                
                <h3 style={{ color: '#1f2937', marginBottom: '20px' }}>3. Information Sharing</h3>
                <p style={{ color: '#6b7280', marginBottom: '20px', lineHeight: '1.6' }}>
                  We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy.
                </p>
                
                <h3 style={{ color: '#1f2937', marginBottom: '20px' }}>4. Data Security</h3>
                <p style={{ color: '#6b7280', marginBottom: '20px', lineHeight: '1.6' }}>
                  We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
                </p>
                
                <h3 style={{ color: '#1f2937', marginBottom: '20px' }}>5. Contact Us</h3>
                <p style={{ color: '#6b7280', marginBottom: '20px', lineHeight: '1.6' }}>
                  If you have any questions about this Privacy Policy, please contact us at orders@urbanthali.com or 9076303231.
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

