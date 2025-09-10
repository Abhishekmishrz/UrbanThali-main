'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const UrbanThaliFooter = () => {
  return (
    <footer style={{ backgroundColor: '#FFF9E6', color: '#1f2937', marginTop: '30px' }}>
      <div className="container" style={{ paddingTop: '50px', paddingBottom: '30px', maxWidth: '1200px' }}>
        <div className="row">
          {/* Column 1: Company Information */}
          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 mb-4" style={{ paddingLeft: '0px', marginLeft: '0px' }}>
            <div className="footer-company-info" style={{ paddingLeft: '0px', marginLeft: '0px' }}>
              {/* Logo */}
              <div className="footer-logo" style={{ display: 'flex', alignItems: 'flex-start', margin: '0px', padding: '0px' }}>
                <div style={{
                  height: '120px',
                  display: 'flex',
                  alignItems: 'flex-start',
                  margin: '0px',
                  padding: '0px'
                }}>
                  <Image 
                    src="/assets/img/logo/urban-thali-logo.png" 
                    alt="Urban Thali Logo" 
                    width={150}
                    height={80}
                    style={{ 
                      backgroundColor: '#FFF9E6',
                      height: '80px', 
                      width: 'auto',
                      margin: '0px',
                      padding: '0px',
                      objectFit: 'contain'
                    }} 
                  />
                </div>
              </div>
              
              {/* Description */}
              <p style={{ 
                color: '#6b7280', 
                fontSize: '14px', 
                lineHeight: '1.6',
                marginBottom: '20px',
                marginLeft: '0px',
                paddingLeft: '0px'
              }}>
                Bringing authentic Indian flavors to your doorstep with our carefully crafted thalis and traditional recipes.
              </p>
              
              {/* Social Media Icons */}
              <div className="footer-social" style={{ display: 'flex', gap: '12px' }}>
                {/* Facebook */}
                <a 
                  href="https://www.facebook.com/urbanthalioffical/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    border: '1px solid #d1d5db',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#6b7280',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseOver={(e) => {
                    e.target.style.backgroundColor = '#FCB53B';
                    e.target.style.borderColor = '#FCB53B';
                  }}
                  onMouseOut={(e) => {
                    e.target.style.backgroundColor = 'transparent';
                    e.target.style.borderColor = '#d1d5db';
                  }}
                >
                  <i className="fab fa-facebook-f" style={{ fontSize: '16px' }}></i>
                </a>
                
                {/* Instagram */}
                <a 
                  href="https://www.instagram.com/urbanthalioffical/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    border: '1px solid #d1d5db',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#6b7280',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseOver={(e) => {
                    e.target.style.backgroundColor = '#E4405F';
                    e.target.style.borderColor = '#E4405F';
                  }}
                  onMouseOut={(e) => {
                    e.target.style.backgroundColor = 'transparent';
                    e.target.style.borderColor = '#d1d5db';
                  }}
                >
                  <i className="fab fa-instagram" style={{ fontSize: '16px' }}></i>
                </a>
                
                {/* YouTube */}
                <a 
                  href="https://www.youtube.com/@urbanthalioffical" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    border: '1px solid #d1d5db',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#6b7280',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseOver={(e) => {
                    e.target.style.backgroundColor = '#FF0000';
                    e.target.style.borderColor = '#FF0000';
                  }}
                  onMouseOut={(e) => {
                    e.target.style.backgroundColor = 'transparent';
                    e.target.style.borderColor = '#d1d5db';
                  }}
                >
                  <i className="fab fa-youtube" style={{ fontSize: '16px' }}></i>
                </a>
                
                {/* LinkedIn */}
                <a 
                  href="https://www.linkedin.com/company/urbanthalioffical/about/?viewAsMember=true" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    border: '1px solid #d1d5db',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#6b7280',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseOver={(e) => {
                    e.target.style.backgroundColor = '#FCB53B';
                    e.target.style.borderColor = '#FCB53B';
                  }}
                  onMouseOut={(e) => {
                    e.target.style.backgroundColor = 'transparent';
                    e.target.style.borderColor = '#d1d5db';
                  }}
                >
                  <i className="fab fa-linkedin-in" style={{ fontSize: '16px' }}></i>
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="col-xl-2 col-lg-2 col-md-6 col-sm-12 mb-4">
            <div className="footer-links">
              <h4 style={{ 
                color: '#1f2937', 
                fontWeight: 'bold', 
                fontSize: '18px', 
                marginBottom: '20px',
                fontFamily: 'sans-serif'
              }}>
                Quick Links
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li style={{ marginBottom: '8px' }}>
                  <Link href="/" style={{ 
                    color: '#6b7280', 
                    textDecoration: 'none', 
                    fontSize: '14px',
                    transition: 'color 0.3s ease'
                  }}>
                    Home
                  </Link>
                </li>
                <li style={{ marginBottom: '8px' }}>
                  <Link href="/offers" style={{ 
                    color: '#6b7280', 
                    textDecoration: 'none', 
                    fontSize: '14px',
                    transition: 'color 0.3s ease'
                  }}>
                    Offers
                  </Link>
                </li>
                <li style={{ marginBottom: '8px' }}>
                  <Link href="/menu" style={{ 
                    color: '#6b7280', 
                    textDecoration: 'none', 
                    fontSize: '14px',
                    transition: 'color 0.3s ease'
                  }}>
                    Menu
                  </Link>
                </li>
                <li style={{ marginBottom: '8px' }}>
                  <Link href="/contact" style={{ 
                    color: '#6b7280', 
                    textDecoration: 'none', 
                    fontSize: '14px',
                    transition: 'color 0.3s ease'
                  }}>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Column 3: Policies */}
          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 mb-4">
            <div className="footer-policies">
              <h4 style={{ 
                color: '#1f2937', 
                fontWeight: 'bold', 
                fontSize: '18px', 
                marginBottom: '20px',
                fontFamily: 'sans-serif'
              }}>
                Policies
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li style={{ marginBottom: '8px' }}>
                  <Link href="/terms" style={{ 
                    color: '#6b7280', 
                    textDecoration: 'none', 
                    fontSize: '14px',
                    transition: 'color 0.3s ease'
                  }}>
                    Terms & Conditions
                  </Link>
                </li>
                <li style={{ marginBottom: '8px' }}>
                  <Link href="/privacy" style={{ 
                    color: '#6b7280', 
                    textDecoration: 'none', 
                    fontSize: '14px',
                    transition: 'color 0.3s ease'
                  }}>
                    Privacy Policy
                  </Link>
                </li>
                <li style={{ marginBottom: '8px' }}>
                  <Link href="/refund" style={{ 
                    color: '#6b7280', 
                    textDecoration: 'none', 
                    fontSize: '14px',
                    transition: 'color 0.3s ease'
                  }}>
                    Refund & Cancellation Policy
                  </Link>
                </li>
                <li style={{ marginBottom: '8px' }}>
                  <Link href="/shipping" style={{ 
                    color: '#6b7280', 
                    textDecoration: 'none', 
                    fontSize: '14px',
                    transition: 'color 0.3s ease'
                  }}>
                    Shipping Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Column 4: Contact Info */}
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 mb-4">
            <div className="footer-contact">
              <h4 style={{ 
                color: '#1f2937', 
                fontWeight: 'bold', 
                fontSize: '18px', 
                marginBottom: '20px',
                fontFamily: 'sans-serif'
              }}>
                Contact Info
              </h4>
              <div className="contact-items">
                {/* Location */}
                <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '16px' }}>
                  <div style={{ 
                    color: '#FCB53B', 
                    marginRight: '12px', 
                    marginTop: '2px',
                    fontSize: '16px'
                  }}>
                    📍
                  </div>
                  <p style={{ 
                    color: '#6b7280', 
                    fontSize: '14px', 
                    margin: 0,
                    lineHeight: '1.5'
                  }}>
                    GROUND FLOOR, SHOP NO. 6, A Wing, JUHU TAJ, 6, NS Mankikar Rd, nr. HSBC BANK, JVPD Scheme, Vile Parle West, Mumbai, Maharashtra 400049
                  </p>
                </div>

                {/* Phone */}
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
                  <div style={{ 
                    color: '#FCB53B', 
                    marginRight: '12px',
                    fontSize: '16px'
                  }}>
                    📞
                  </div>
                  <p style={{ 
                    color: '#6b7280', 
                    fontSize: '14px', 
                    margin: 0
                  }}>
                    9076303231
                  </p>
                </div>

                {/* Email */}
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
                  <div style={{ 
                    color: '#FCB53B', 
                    marginRight: '12px',
                    fontSize: '16px'
                  }}>
                    ✉️
                  </div>
                  <p style={{ 
                    color: '#6b7280', 
                    fontSize: '14px', 
                    margin: 0
                  }}>
                    orders@urbanthali.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div style={{ 
        borderTop: '1px solid #e5e7eb',
        padding: '20px 0',
        backgroundColor: '#FFF9E6'
      }}>
        <div className="container" style={{ maxWidth: '1200px' }}>
          <div className="row align-items-center">
            <div className="col-md-6">
              <p style={{ 
                color: '#94a3b8', 
                fontSize: '14px', 
                margin: 0
              }}>
                © 2025 Urban Thali. All rights reserved.
              </p>
            </div>
            <div className="col-md-6 text-md-end">
              <p style={{ 
                color: '#94a3b8', 
                fontSize: '14px', 
                margin: 0
              }}>
                Made with <span style={{ color: '#ff69b4' }}>❤️</span> for food lovers everywhere
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default UrbanThaliFooter;
