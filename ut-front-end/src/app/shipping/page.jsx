import React from 'react';
import Wrapper from "@/layout/wrapper";
import HeaderThree from "@/layout/headers/header-3";
import UrbanThaliFooter from "@/layout/footers/urban-thali-footer";

export const metadata = {
  title: "Shipping Policy - Urban Thali",
};

export default function ShippingPage() {
  return (
    <Wrapper>
      <HeaderThree />
      <div style={{ paddingTop: '100px', paddingBottom: '100px', minHeight: '60vh' }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <h1 style={{ fontSize: '48px', fontWeight: '700', color: '#1f2937', marginBottom: '20px' }}>
                Shipping Policy
              </h1>
              <p style={{ fontSize: '18px', color: '#6b7280', marginBottom: '40px' }}>
                Learn about our delivery areas, timing, and shipping policies.
              </p>
              
              <div style={{ backgroundColor: 'white', padding: '40px', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
                <h3 style={{ color: '#1f2937', marginBottom: '20px' }}>1. Delivery Areas</h3>
                <p style={{ color: '#6b7280', marginBottom: '20px', lineHeight: '1.6' }}>
                  We currently deliver to select areas in Delhi. Please check your delivery address during checkout to confirm availability.
                </p>
                
                <h3 style={{ color: '#1f2937', marginBottom: '20px' }}>2. Delivery Time</h3>
                <p style={{ color: '#6b7280', marginBottom: '20px', lineHeight: '1.6' }}>
                  Standard delivery time is 30-45 minutes from order confirmation. Delivery time may vary based on location and order complexity.
                </p>
                
                <h3 style={{ color: '#1f2937', marginBottom: '20px' }}>3. Delivery Charges</h3>
                <p style={{ color: '#6b7280', marginBottom: '20px', lineHeight: '1.6' }}>
                  Free delivery on orders above ₹200. Delivery charges of ₹30 apply for orders below ₹200.
                </p>
                
                <h3 style={{ color: '#1f2937', marginBottom: '20px' }}>4. Order Tracking</h3>
                <p style={{ color: '#6b7280', marginBottom: '20px', lineHeight: '1.6' }}>
                  You&apos;ll receive real-time updates about your order status via SMS and email. Track your delivery through our app or website.
                </p>
                
                <h3 style={{ color: '#1f2937', marginBottom: '20px' }}>5. Contact Us</h3>
                <p style={{ color: '#6b7280', marginBottom: '20px', lineHeight: '1.6' }}>
                  For any delivery-related queries, please contact us at orders@urbanthali.com or 9076303231.
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

