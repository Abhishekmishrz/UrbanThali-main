'use client';
import React from 'react';

const MenuModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 9999,
      padding: '20px'
    }}>
      {/* Modal Content */}
      <div style={{
        position: 'relative',
        maxWidth: '90vw',
        maxHeight: '90vh',
        backgroundColor: 'white',
        borderRadius: '12px',
        overflow: 'hidden',
        boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)'
      }}>
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '15px',
            right: '15px',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            color: 'white',
            border: 'none',
            borderRadius: '50%',
            width: '40px',
            height: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            fontSize: '20px',
            fontWeight: 'bold',
            zIndex: 10,
            transition: 'all 0.3s ease'
          }}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
            e.target.style.transform = 'scale(1.1)';
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
            e.target.style.transform = 'scale(1)';
          }}
        >
          ×
        </button>

        {/* Menu Content */}
        <div style={{
          width: '100%',
          maxHeight: '90vh',
          overflow: 'auto',
          backgroundColor: '#1a4d3a',
          padding: '40px',
          color: 'white'
        }}>
          {/* Menu Header */}
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h1 style={{
              fontSize: '3rem',
              fontWeight: '700',
              color: '#FFD700',
              marginBottom: '10px',
              textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
            }}>
              URBAN THALI
            </h1>
            <p style={{
              fontSize: '1.2rem',
              color: '#E5E7EB',
              margin: 0
            }}>
              Healthy & Homely Meals
            </p>
          </div>

          {/* THALIS Section */}
          <div style={{ marginBottom: '40px' }}>
            <h2 style={{
              fontSize: '2.5rem',
              fontWeight: '700',
              color: '#FFD700',
              textAlign: 'center',
              marginBottom: '30px',
              textShadow: '1px 1px 2px rgba(0,0,0,0.5)'
            }}>
              THALIS
            </h2>
            
            <div style={{ display: 'grid', gap: '20px' }}>
              {/* Mini Urban Thali */}
              <div style={{
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                padding: '20px',
                borderRadius: '12px',
                border: '2px solid #FFD700'
              }}>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: '600',
                  color: '#FFD700',
                  marginBottom: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px'
                }}>
                  <span style={{ fontSize: '1.2rem' }}>→</span>
                  Mini Urban Thali – ₹139
                </h3>
                <ul style={{ margin: 0, paddingLeft: '20px', color: '#E5E7EB' }}>
                  <li>1 Veg Curry (Dal/Chole/Rajma)</li>
                  <li>Steamed Rice / 2 Roti</li>
                  <li>Salad + Papad</li>
                </ul>
              </div>

              {/* Everyday Thali */}
              <div style={{
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                padding: '20px',
                borderRadius: '12px',
                border: '2px solid #FFD700'
              }}>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: '600',
                  color: '#FFD700',
                  marginBottom: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px'
                }}>
                  <span style={{ fontSize: '1.2rem' }}>→</span>
                  Everyday Thali – ₹169
                </h3>
                <ul style={{ margin: 0, paddingLeft: '20px', color: '#E5E7EB' }}>
                  <li>2 Veg Curries (Dal + Seasonal Veg)</li>
                  <li>2 Roti + Steamed Rice</li>
                  <li>Salad + Pickle</li>
                </ul>
              </div>

              {/* Urban Premium Thali */}
              <div style={{
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                padding: '20px',
                borderRadius: '12px',
                border: '2px solid #FFD700'
              }}>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: '600',
                  color: '#FFD700',
                  marginBottom: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px'
                }}>
                  <span style={{ fontSize: '1.2rem' }}>→</span>
                  Urban Premium Thali – ₹199
                </h3>
                <ul style={{ margin: 0, paddingLeft: '20px', color: '#E5E7EB' }}>
                  <li>2 Veg Curries (Dal + Paneer/Seasonal Veg)</li>
                  <li>2 Roti / 2 Parathas + Steamed Rice</li>
                  <li>Curd + Salad + Sweet</li>
                </ul>
              </div>

              {/* Urban Feast Thali */}
              <div style={{
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                padding: '20px',
                borderRadius: '12px',
                border: '2px solid #FFD700'
              }}>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: '600',
                  color: '#FFD700',
                  marginBottom: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px'
                }}>
                  <span style={{ fontSize: '1.2rem' }}>→</span>
                  Urban Feast Thali – ₹249
                </h3>
                <ul style={{ margin: 0, paddingLeft: '20px', color: '#E5E7EB' }}>
                  <li>3 Veg Curries (Dal + Paneer + Seasonal Veg)</li>
                  <li>4 Roti / 2 parathas + Jeera Rice</li>
                  <li>Salad + Papad + Pickle + Sweet</li>
                </ul>
              </div>

              {/* Maharaja Urban Thali */}
              <div style={{
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                padding: '20px',
                borderRadius: '12px',
                border: '2px solid #FFD700'
              }}>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: '600',
                  color: '#FFD700',
                  marginBottom: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px'
                }}>
                  <span style={{ fontSize: '1.2rem' }}>→</span>
                  Maharaja Urban Thali – ₹299
                </h3>
                <ul style={{ margin: 0, paddingLeft: '20px', color: '#E5E7EB' }}>
                  <li>4 Veg Curries (Dal + Paneer + Chhole/Rajma + Seasonal Veg)</li>
                  <li>4 Roti / 2 Naan / 2 parathas + Pulao/Jeera Rice</li>
                  <li>Raita + Salad + Papad + 2 Sweets</li>
                </ul>
              </div>
            </div>
          </div>

          {/* ADD ONS Section */}
          <div style={{ marginBottom: '40px' }}>
            <h2 style={{
              fontSize: '2.5rem',
              fontWeight: '700',
              color: '#FFD700',
              textAlign: 'center',
              marginBottom: '30px',
              textShadow: '1px 1px 2px rgba(0,0,0,0.5)'
            }}>
              ADD ONS
            </h2>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '15px'
            }}>
              {[
                'Extra Roti – ₹15',
                'Jeera Rice – ₹30',
                'Masala Papad – ₹25',
                'Curd (100ml) – ₹25',
                'Masala Chhach – ₹35',
                'Shikanji Bottle – ₹15',
                'Gulab Jamun (2pcs) – ₹45',
                'Green Salad – ₹30',
                'Paneer Curry (Extra) – ₹50',
                'Cold Drink (200ml) – on MRP'
              ].map((item, index) => (
                <div key={index} style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  padding: '15px',
                  borderRadius: '8px',
                  border: '1px solid #FFD700',
                  textAlign: 'center',
                  color: '#E5E7EB',
                  fontSize: '1rem',
                  fontWeight: '500'
                }}>
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div style={{
            textAlign: 'center',
            padding: '20px',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '12px',
            border: '2px solid #FFD700'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '20px',
              flexWrap: 'wrap'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '1.5rem' }}>📞</span>
                <span style={{ fontSize: '1.2rem', fontWeight: '600' }}>9076303231</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '1.5rem' }}>💬</span>
                <span style={{ fontSize: '1.2rem', fontWeight: '600' }}>9076303231</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Backdrop click to close */}
      <div
        onClick={onClose}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: -1
        }}
      />
    </div>
  );
};

export default MenuModal;
