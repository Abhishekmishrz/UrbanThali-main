import React from 'react';
import Wrapper from "@/layout/wrapper";
import HeaderThree from "@/layout/headers/header-3";
import UrbanThaliFooter from "@/layout/footers/urban-thali-footer";

export const metadata = {
  title: "Terms & Conditions - Urban Thali",
};

export default function TermsPage() {
  return (
    <Wrapper>
      <HeaderThree />
      <div style={{ paddingTop: '100px', paddingBottom: '100px', minHeight: '60vh' }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <h1 style={{ fontSize: '48px', fontWeight: '700', color: '#1f2937', marginBottom: '20px' }}>
                Terms & Conditions
              </h1>
              <p style={{ fontSize: '18px', color: '#6b7280', marginBottom: '40px' }}>
                Please read these terms and conditions carefully before using our service.
              </p>
              
              <div style={{ backgroundColor: 'white', padding: '40px', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
                <h3 style={{ color: '#1f2937', marginBottom: '20px' }}>1. Acceptance of Terms</h3>
                <p style={{ color: '#6b7280', marginBottom: '20px', lineHeight: '1.6' }}>
                  By accessing and using Urban Thali&apos;s services, you accept and agree to be bound by the terms and provision of this agreement.
                </p>
                
                <h3 style={{ color: '#1f2937', marginBottom: '20px' }}>2. Use License</h3>
                <p style={{ color: '#6b7280', marginBottom: '20px', lineHeight: '1.6' }}>
                  Permission is granted to temporarily download one copy of the materials on Urban Thali&apos;s website for personal, non-commercial transitory viewing only.
                </p>
                
                <h3 style={{ color: '#1f2937', marginBottom: '20px' }}>3. Disclaimer</h3>
                <p style={{ color: '#6b7280', marginBottom: '20px', lineHeight: '1.6' }}>
                  The materials on Urban Thali&apos;s website are provided on an &apos;as is&apos; basis. Urban Thali makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties.
                </p>
                
                <h3 style={{ color: '#1f2937', marginBottom: '20px' }}>4. Limitations</h3>
                <p style={{ color: '#6b7280', marginBottom: '20px', lineHeight: '1.6' }}>
                  In no event shall Urban Thali or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Urban Thali&apos;s website.
                </p>
                
                <h3 style={{ color: '#1f2937', marginBottom: '20px' }}>5. Contact Information</h3>
                <p style={{ color: '#6b7280', marginBottom: '20px', lineHeight: '1.6' }}>
                  If you have any questions about these Terms & Conditions, please contact us at orders@urbanthali.com or 9076303231.
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

