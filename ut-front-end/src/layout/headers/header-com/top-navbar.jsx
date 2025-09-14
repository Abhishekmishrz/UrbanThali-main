'use client';
import React from 'react';
import Link from 'next/link';

const TopNavbar = () => {
  return (
    <div className="tp-header-top-beauty p-relative z-index-1 d-none d-md-block" style={{
      position: 'relative',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1001,
      width: '100%',
      height: '35px',
      minHeight: '35px',
      backgroundColor: '#f3f4f6' // Light gray background
    }}>
      <div className="container-fluid" style={{ height: '35px', display: 'flex', alignItems: 'center' }}>
        <div className="row align-items-center" style={{ width: '100%' }}>
          <div className="col-md-6">
            <div className="tp-header-contact-info d-flex align-items-center" style={{ height: '35px' }}>
              <div className="tp-header-contact-item d-flex align-items-center" style={{ marginRight: '20px' }}>
                <span className="tp-header-contact-icon" style={{ marginRight: '8px', display: 'flex', alignItems: 'center', color: '#FCB53B' }}>
                  <i className="fa fa-phone"></i>
                </span>
                <a href="tel:9076303231" className="tp-header-contact-text" style={{ color: '#000000', textDecoration: 'none', fontSize: '13px', display: 'flex', alignItems: 'center', height: '35px' }}>
                  9076303231
                </a>
              </div>
              <div className="tp-header-contact-item d-flex align-items-center">
                <span className="tp-header-contact-icon" style={{ marginRight: '8px', display: 'flex', alignItems: 'center', color: '#FCB53B' }}>
                  <i className="fa fa-envelope"></i>
                </span>
                <a href="mailto:orders@urbanthali.com" className="tp-header-contact-text" style={{ color: '#000000', textDecoration: 'none', fontSize: '13px', display: 'flex', alignItems: 'center', height: '35px' }}>
                  orders@urbanthali.com
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="tp-header-social-links d-flex align-items-center justify-content-end" style={{ height: '35px', gap: '15px' }}>
              {/* Facebook */}
              <Link 
                href="https://www.facebook.com/urbanthalioffical/" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ 
                  color: '#000000', 
                  textDecoration: 'none', 
                  fontSize: '16px',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
                onMouseOver={(e) => e.target.style.color = '#1877F2'}
                onMouseOut={(e) => e.target.style.color = '#000000'}
              >
                <i className="fab fa-facebook-f"></i>
              </Link>
              
              {/* Instagram */}
              <Link 
                href="https://www.instagram.com/urbanthalioffical/" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ 
                  color: '#000000', 
                  textDecoration: 'none', 
                  fontSize: '16px',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
                onMouseOver={(e) => e.target.style.color = '#E4405F'}
                onMouseOut={(e) => e.target.style.color = '#000000'}
              >
                <i className="fab fa-instagram"></i>
              </Link>
              
              {/* YouTube */}
              <Link 
                href="https://www.youtube.com/@urbanthalioffical" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ 
                  color: '#000000', 
                  textDecoration: 'none', 
                  fontSize: '16px',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
                onMouseOver={(e) => e.target.style.color = '#FF0000'}
                onMouseOut={(e) => e.target.style.color = '#000000'}
              >
                <i className="fab fa-youtube"></i>
              </Link>
              
              {/* LinkedIn */}
              <Link 
                href="https://www.linkedin.com/company/urbanthalioffical/about/?viewAsMember=true" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ 
                  color: '#000000', 
                  textDecoration: 'none', 
                  fontSize: '16px',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
                onMouseOver={(e) => e.target.style.color = '#0077B5'}
                onMouseOut={(e) => e.target.style.color = '#000000'}
              >
                <i className="fab fa-linkedin-in"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;

