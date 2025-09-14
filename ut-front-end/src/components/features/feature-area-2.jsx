'use client';
import React from 'react';

export const feature_data = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#84994F" strokeWidth="2">
        <path d="M12 2C8.5 2 6 4.5 6 8c0 2.5 1.5 4.5 3 6l3 3 3-3c1.5-1.5 3-3.5 3-6 0-3.5-2.5-6-6-6z"/>
        <path d="M8 12h8"/>
        <path d="M12 8v8"/>
      </svg>
    ),
    title: 'Healthy Ingredients',
    subtitle: 'We use only the freshest, highest quality vegetables and ingredients sourced daily'
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#B45253" strokeWidth="2">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
        <polyline points="9,22 9,12 15,12 15,22"/>
        <path d="M8 6h8"/>
      </svg>
    ),
    title: 'Hygienic Kitchen',
    subtitle: 'Our kitchen follows strict hygiene standards with regular sanitization and quality control measures'
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FCB53B" strokeWidth="2">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
        <line x1="16" y1="2" x2="16" y2="6"/>
        <line x1="8" y1="2" x2="8" y2="6"/>
        <line x1="3" y1="10" x2="21" y2="10"/>
        <path d="M8 14h.01"/>
        <path d="M12 14h.01"/>
        <path d="M16 14h.01"/>
        <path d="M8 18h.01"/>
        <path d="M12 18h.01"/>
        <path d="M16 18h.01"/>
      </svg>
    ),
    title: 'Homely Taste',
    subtitle: 'Experience the authentic taste of home-cooked meals prepared with traditional recipes and love'
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFE797" strokeWidth="2">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
        <path d="M8 12l2 2 4-4"/>
        <path d="M12 2v4"/>
        <path d="M12 18v4"/>
        <path d="M4.93 4.93l2.83 2.83"/>
        <path d="M16.24 16.24l2.83 2.83"/>
        <path d="M2 12h4"/>
        <path d="M18 12h4"/>
        <path d="M4.93 19.07l2.83-2.83"/>
        <path d="M16.24 7.76l2.83-2.83"/>
      </svg>
    ),
    title: '100% Veg',
    subtitle: 'Completely vegetarian menu with no meat, fish, or eggs - perfect for all dietary preferences'
  },
]


const FeatureAreaTwo = () => {
  return (
    <section className={`tp-feature-area tp-feature-border-2 pb-50`}>
      <div className="container">
        {/* Header Section */}
        <div className="row mb-30">
          <div className="col-xl-12">
            <div className="tp-section-title-wrapper-3 text-center">
              <h3 className="tp-section-title-3" style={{ 
                fontSize: '36px', 
                fontWeight: '700', 
                color: '#1f2937',
                marginBottom: '12px'
              }}>
                Why Choose Us?
              </h3>
              <p style={{
                fontSize: '16px',
                color: '#6b7280',
                maxWidth: '600px',
                margin: '0 auto'
              }}>
                Discover what makes Urban Thali the perfect choice for your authentic Indian meal experience.
              </p>
            </div>
          </div>
        </div>

        <div className="tp-feature-inner-2">
          <div className="row align-items-center">
            {feature_data.map((item, i) => (
              <div key={i} className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                <div className="tp-feature-item-2 d-flex align-items-start mb-40">
                  <div className="tp-feature-icon-2 mr-10">
                    <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      {item.icon}
                    </span>
                  </div>
                  <div className="tp-feature-content-2">
                    <h3 className="tp-feature-title-2">{item.title}</h3>
                    <p style={{ fontSize: '14px', lineHeight: '1.5' }}>{item.subtitle}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureAreaTwo;