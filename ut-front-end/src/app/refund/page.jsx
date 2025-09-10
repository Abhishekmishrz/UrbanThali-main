import React from 'react';
import Wrapper from "@/layout/wrapper";
import HeaderThree from "@/layout/headers/header-3";
import UrbanThaliFooter from "@/layout/footers/urban-thali-footer";

export const metadata = {
  title: "Refund & Cancellation Policy - Urban Thali",
};

export default function RefundPage() {
  return (
    <Wrapper>
      <HeaderThree />
      <div style={{ paddingTop: '100px', paddingBottom: '100px', minHeight: '60vh' }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <h1 style={{ fontSize: '48px', fontWeight: '700', color: '#1f2937', marginBottom: '20px' }}>
                Refund & Cancellation Policy
              </h1>
              <p style={{ fontSize: '18px', color: '#6b7280', marginBottom: '40px' }}>
                Learn about our refund and cancellation policies for your orders.
              </p>
              
              <div style={{ backgroundColor: 'white', padding: '40px', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
                <h3 style={{ color: '#1f2937', marginBottom: '20px' }}>1. Order Cancellation</h3>
                <p style={{ color: '#6b7280', marginBottom: '20px', lineHeight: '1.6' }}>
                  You may cancel your order within 5 minutes of placing it. After this time, cancellation may not be possible as we begin preparing your food.
                </p>
                
                <h3 style={{ color: '#1f2937', marginBottom: '20px' }}>2. Refund Policy</h3>
                <p style={{ color: '#6b7280', marginBottom: '20px', lineHeight: '1.6' }}>
                  Refunds will be processed within 5-7 business days to the original payment method. Refunds are only available for cancelled orders or in case of quality issues.
                </p>
                
                <h3 style={{ color: '#1f2937', marginBottom: '20px' }}>3. Quality Issues</h3>
                <p style={{ color: '#6b7280', marginBottom: '20px', lineHeight: '1.6' }}>
                  If you&apos;re not satisfied with the quality of your food, please contact us within 30 minutes of delivery. We&apos;ll investigate and provide appropriate resolution.
                </p>
                
                <h3 style={{ color: '#1f2937', marginBottom: '20px' }}>4. Delivery Issues</h3>
                <p style={{ color: '#6b7280', marginBottom: '20px', lineHeight: '1.6' }}>
                  In case of delivery delays or issues, we&apos;ll work with you to resolve the matter. Refunds or re-delivery may be offered based on the situation.
                </p>
                
                <h3 style={{ color: '#1f2937', marginBottom: '20px' }}>5. Contact Us</h3>
                <p style={{ color: '#6b7280', marginBottom: '20px', lineHeight: '1.6' }}>
                  For any refund or cancellation requests, please contact us at orders@urbanthali.com or 9076303231.
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

