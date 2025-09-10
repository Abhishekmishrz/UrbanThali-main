'use client';
import React from "react";

const SpecialOffers = () => {
  const offers = [
    {
      id: 1,
      title: "First Order Special",
      description: "Get 20% off on your first order above ₹300",
      code: "FIRST20",
      icon: "🎁",
      bgColor: "#FFF4E6",
      iconBg: "#FCB53B"
    },
    {
      id: 2,
      title: "Weekend Delight",
      description: "Free delivery on all orders during weekends",
      code: "WEEKEND",
      icon: "🚚",
      bgColor: "#E6F7E6",
      iconBg: "#84994F"
    },
    {
      id: 3,
      title: "Premium Combo",
      description: "Order 2 Premium Thalis and get 15% discount",
      code: "COMBO15",
      icon: "%",
      bgColor: "#E6F3FF",
      iconBg: "#B45253"
    }
  ];

  return (
    <section className="tp-offers-area pt-60 pb-50">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="tp-section-title-wrapper-3 mb-30 text-center">
              <h3 className="tp-section-title-3" style={{ 
                fontSize: '36px', 
                fontWeight: '700', 
                color: '#1f2937',
                marginBottom: '12px'
              }}>
                Special Offers
              </h3>
              <p style={{
                fontSize: '16px',
                color: '#6b7280',
                maxWidth: '500px',
                margin: '0 auto'
              }}>
                Don&apos;t miss out on these amazing deals and save on your favorite thalis
              </p>
            </div>
          </div>
        </div>
        
        <div className="row">
          {offers.map((offer) => (
            <div key={offer.id} className="col-lg-4 col-md-6 mb-30">
              <div 
                className="tp-offer-card"
                style={{
                  backgroundColor: offer.bgColor,
                  borderRadius: '16px',
                  padding: '32px 24px',
                  height: '100%',
                  position: 'relative',
                  overflow: 'hidden',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                  transition: 'all 0.3s ease'
                }}
              >
                {/* Icon */}
                <div 
                  className="tp-offer-icon"
                  style={{
                    width: '60px',
                    height: '60px',
                    backgroundColor: offer.iconBg,
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '24px',
                    marginBottom: '20px',
                    color: 'white',
                    fontWeight: 'bold'
                  }}
                >
                  {offer.icon}
                </div>

                {/* Content */}
                <div className="tp-offer-content">
                  <h4 
                    className="tp-offer-title"
                    style={{
                      fontSize: '20px',
                      fontWeight: '700',
                      color: '#1f2937',
                      marginBottom: '12px'
                    }}
                  >
                    {offer.title}
                  </h4>
                  
                  <p 
                    className="tp-offer-description"
                    style={{
                      fontSize: '14px',
                      color: '#6b7280',
                      marginBottom: '20px',
                      lineHeight: '1.5'
                    }}
                  >
                    {offer.description}
                  </p>

                  {/* Promo Code */}
                  <div 
                    className="tp-offer-code"
                    style={{
                      backgroundColor: 'white',
                      border: '2px solid #e5e7eb',
                      borderRadius: '8px',
                      padding: '12px 16px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between'
                    }}
                  >
                    <span style={{
                      fontSize: '14px',
                      color: '#6b7280',
                      fontWeight: '500'
                    }}>
                      Code:
                    </span>
                    <span style={{
                      fontSize: '16px',
                      color: '#1f2937',
                      fontWeight: '700',
                      fontFamily: 'monospace',
                      letterSpacing: '1px'
                    }}>
                      {offer.code}
                    </span>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div 
                  style={{
                    position: 'absolute',
                    top: '-20px',
                    right: '-20px',
                    width: '80px',
                    height: '80px',
                    backgroundColor: 'rgba(255,255,255,0.3)',
                    borderRadius: '50%',
                    zIndex: 0
                  }}
                ></div>
                <div 
                  style={{
                    position: 'absolute',
                    bottom: '-30px',
                    left: '-30px',
                    width: '100px',
                    height: '100px',
                    backgroundColor: 'rgba(255,255,255,0.2)',
                    borderRadius: '50%',
                    zIndex: 0
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;
