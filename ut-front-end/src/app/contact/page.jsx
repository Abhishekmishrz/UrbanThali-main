'use client';
import React, { useState } from 'react';
import Wrapper from "@/layout/wrapper";
import HeaderThree from "@/layout/headers/header-3";
import UrbanThaliFooter from "@/layout/footers/urban-thali-footer";


export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <Wrapper>
      <HeaderThree />
      <div style={{ paddingTop: '150px', paddingBottom: '100px', minHeight: '60vh' }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 text-center">
              <h1 style={{ fontSize: '48px', fontWeight: '700', color: '#1f2937', marginBottom: '30px', marginTop: '20px' }}>
                Contact Us
              </h1>
              <p style={{ fontSize: '18px', color: '#6b7280', marginBottom: '60px', marginTop: '10px', lineHeight: '1.6' }}>
                Get in touch with us for any questions or feedback
              </p>
              
              <div className="row" style={{ marginTop: '20px', marginBottom: '40px' }}>
                {/* Contact Info Cards */}
                <div className="col-lg-4 mb-4">
                  <div style={{ 
                    backgroundColor: 'white', 
                    padding: '20px', 
                    borderRadius: '12px',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                    textAlign: 'center',
                    height: '100%'
                  }}>
                    <div style={{ 
                      width: '50px', 
                      height: '50px', 
                      backgroundColor: '#FCB53B', 
                      borderRadius: '50%', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center', 
                      margin: '0 auto 15px auto'
                    }}>
                      <span style={{ fontSize: '20px' }}>📞</span>
                    </div>
                    <h4 style={{ color: '#1f2937', marginBottom: '8px', fontSize: '18px' }}>Phone</h4>
                    <p style={{ color: '#6b7280', margin: 0, fontSize: '14px' }}>9076303231</p>
                  </div>
                </div>
                
                <div className="col-lg-4 mb-4">
                  <div style={{ 
                    backgroundColor: 'white', 
                    padding: '20px', 
                    borderRadius: '12px',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                    textAlign: 'center',
                    height: '100%'
                  }}>
                    <div style={{ 
                      width: '50px', 
                      height: '50px', 
                      backgroundColor: '#FCB53B', 
                      borderRadius: '50%', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center', 
                      margin: '0 auto 15px auto'
                    }}>
                      <span style={{ fontSize: '20px' }}>✉️</span>
                    </div>
                    <h4 style={{ color: '#1f2937', marginBottom: '8px', fontSize: '18px' }}>Email</h4>
                    <p style={{ color: '#6b7280', margin: 0, fontSize: '14px' }}>orders@urbanthali.com</p>
                  </div>
                </div>
                
                <div className="col-lg-4 mb-4">
                  <div style={{ 
                    backgroundColor: 'white', 
                    padding: '20px', 
                    borderRadius: '12px',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                    textAlign: 'center',
                    height: '100%'
                  }}>
                    <div style={{ 
                      width: '50px', 
                      height: '50px', 
                      backgroundColor: '#FCB53B', 
                      borderRadius: '50%', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center', 
                      margin: '0 auto 15px auto'
                    }}>
                      <span style={{ fontSize: '20px' }}>📍</span>
                    </div>
                    <h4 style={{ color: '#1f2937', marginBottom: '8px', fontSize: '18px' }}>Address</h4>
                    <p style={{ color: '#6b7280', margin: 0, fontSize: '14px' }}>GROUND FLOOR, SHOP NO. 6, A Wing, JUHU TAJ, 6, NS Mankikar Rd, nr. HSBC BANK, JVPD Scheme, Vile Parle West, Mumbai, Maharashtra 400049</p>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="row" style={{ marginTop: '60px', marginBottom: '20px' }}>
                <div className="col-lg-8 mx-auto">
                  <div style={{ 
                    backgroundColor: 'white', 
                    padding: '40px', 
                    borderRadius: '12px',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
                  }}>
                    <h3 style={{ color: '#1f2937', marginBottom: '40px', marginTop: '10px', textAlign: 'center' }}>
                      Send us a Message
                    </h3>
                    <form onSubmit={handleSubmit}>
                      <div className="row">
                        <div className="col-md-6 mb-3">
                          <label style={{ 
                            display: 'block', 
                            marginBottom: '8px', 
                            color: '#374151', 
                            fontWeight: '600' 
                          }}>
                            Full Name *
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            style={{
                              width: '100%',
                              padding: '12px 16px',
                              border: '2px solid #e5e7eb',
                              borderRadius: '8px',
                              fontSize: '16px',
                              transition: 'border-color 0.3s ease',
                              outline: 'none'
                            }}
                            onFocus={(e) => e.target.style.borderColor = '#FCB53B'}
                            onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                          />
                        </div>
                        <div className="col-md-6 mb-3">
                          <label style={{ 
                            display: 'block', 
                            marginBottom: '8px', 
                            color: '#374151', 
                            fontWeight: '600' 
                          }}>
                            Email Address *
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            style={{
                              width: '100%',
                              padding: '12px 16px',
                              border: '2px solid #e5e7eb',
                              borderRadius: '8px',
                              fontSize: '16px',
                              transition: 'border-color 0.3s ease',
                              outline: 'none'
                            }}
                            onFocus={(e) => e.target.style.borderColor = '#FCB53B'}
                            onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                          />
                        </div>
                      </div>
                      
                      <div className="row">
                        <div className="col-md-6 mb-3">
                          <label style={{ 
                            display: 'block', 
                            marginBottom: '8px', 
                            color: '#374151', 
                            fontWeight: '600' 
                          }}>
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            style={{
                              width: '100%',
                              padding: '12px 16px',
                              border: '2px solid #e5e7eb',
                              borderRadius: '8px',
                              fontSize: '16px',
                              transition: 'border-color 0.3s ease',
                              outline: 'none'
                            }}
                            onFocus={(e) => e.target.style.borderColor = '#FCB53B'}
                            onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                          />
                        </div>
                        <div className="col-md-6 mb-3">
                          <label style={{ 
                            display: 'block', 
                            marginBottom: '8px', 
                            color: '#374151', 
                            fontWeight: '600' 
                          }}>
                            Subject *
                          </label>
                          <input
                            type="text"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                            style={{
                              width: '100%',
                              padding: '12px 16px',
                              border: '2px solid #e5e7eb',
                              borderRadius: '8px',
                              fontSize: '16px',
                              transition: 'border-color 0.3s ease',
                              outline: 'none'
                            }}
                            onFocus={(e) => e.target.style.borderColor = '#FCB53B'}
                            onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                          />
                        </div>
                      </div>
                      
                      <div className="mb-4">
                        <label style={{ 
                          display: 'block', 
                          marginBottom: '8px', 
                          color: '#374151', 
                          fontWeight: '600' 
                        }}>
                          Message *
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows="5"
                          style={{
                            width: '100%',
                            padding: '12px 16px',
                            border: '2px solid #e5e7eb',
                            borderRadius: '8px',
                            fontSize: '16px',
                            transition: 'border-color 0.3s ease',
                            outline: 'none',
                            resize: 'vertical'
                          }}
                          onFocus={(e) => e.target.style.borderColor = '#FCB53B'}
                          onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                        />
                      </div>
                      
                      <div style={{ textAlign: 'center' }}>
                        <button
                          type="submit"
                          style={{
                            backgroundColor: '#FCB53B',
                            color: 'white',
                            padding: '12px 40px',
                            borderRadius: '8px',
                            border: 'none',
                            fontSize: '16px',
                            fontWeight: '600',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                            boxShadow: '0 4px 12px rgba(255, 107, 53, 0.3)'
                          }}
                          onMouseOver={(e) => e.target.style.backgroundColor = '#B45253'}
                          onMouseOut={(e) => e.target.style.backgroundColor = '#FCB53B'}
                        >
                          Send Message
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <UrbanThaliFooter />
    </Wrapper>
  );
}