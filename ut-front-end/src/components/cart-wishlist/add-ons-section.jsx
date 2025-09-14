'use client';
import React from 'react';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import { add_cart_product } from '@/redux/features/cartSlice';
import { useGetAddOnItemsQuery } from '@/redux/features/foodItemApi';

const AddOnsSection = () => {
  const dispatch = useDispatch();
  const { cart_products } = useSelector((state) => state.cart);

  // Fetch add-on items from API
  const { data: addonsItems = [], isLoading, error } = useGetAddOnItemsQuery();

  // Only use API data - no fallback
  const displayItems = addonsItems;

  const handleAddToCart = (item) => {
    // API data format - since we're only using API data now
    const cartItem = {
      _id: item._id,
      id: item._id,
      title: item.name,
      price: item.price,
      quantity: item.quantity || 100,  // Use API quantity or default to 100
      img: item.img,
      image: item.img,
      category: item.category?.name || 'addons',
      description: item.description
    };
    
    dispatch(add_cart_product(cartItem));
  };

  // Show loading state
  if (isLoading) {
    return (
      <div className="tp-cart-addons-section" style={{ marginTop: '30px', textAlign: 'center' }}>
        <p>Loading add-ons...</p>
      </div>
    );
  }

  // Show error state
  if (error) {
    return (
      <div className="tp-cart-addons-section" style={{ marginTop: '30px', textAlign: 'center' }}>
        <p>Error loading add-ons. Using default options.</p>
      </div>
    );
  }

  return (
    <>
      <style jsx>{`
        .addons-slider-container::-webkit-scrollbar {
          display: none;
        }
      `}</style>
      <div className="tp-cart-addons-section" style={{ marginTop: '30px' }}>
      <div className="tp-cart-addons-header" style={{ marginBottom: '20px' }}>
        <h3 style={{
          fontSize: '20px',
          fontWeight: '600',
          color: '#333',
          marginBottom: '8px'
        }}>
          Complete Your Meal
        </h3>
        <p style={{
          fontSize: '14px',
          color: '#666',
          margin: 0
        }}>
          Add delicious sides, beverages, and desserts to enhance your thali experience
        </p>
      </div>

      <div className="tp-cart-addons-slider" style={{
        position: 'relative',
        marginBottom: '20px',
        padding: '0 20px'
      }}>
        <div className="addons-slider-container" style={{
          display: 'flex',
          gap: '15px',
          overflowX: 'auto',
          paddingBottom: '10px',
          scrollBehavior: 'smooth',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none'
        }}>
        {displayItems.map((item) => (
          <div key={item._id || item.id} style={{
            border: '1px solid #e5e5e5',
            borderRadius: '8px',
            padding: '12px',
            backgroundColor: '#fff',
            transition: 'all 0.3s ease',
            cursor: 'pointer',
            position: 'relative',
            overflow: 'hidden',
            minWidth: '200px',
            flexShrink: 0
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.borderColor = '#FCB53B';
            e.currentTarget.style.boxShadow = '0 4px 15px rgba(252, 181, 59, 0.3)';
            e.currentTarget.style.transform = 'translateY(-2px)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.borderColor = '#e5e5e5';
            e.currentTarget.style.boxShadow = 'none';
            e.currentTarget.style.transform = 'translateY(0)';
          }}
          >
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '6px',
                overflow: 'hidden',
                marginRight: '10px',
                flexShrink: 0
              }}>
                <Image
                  src={item.img || item.image}
                  alt={item.name || item.title}
                  width={40}
                  height={40}
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <h4 style={{
                  fontSize: '14px',
                  fontWeight: '600',
                  color: '#333',
                  margin: '0 0 2px 0',
                  lineHeight: '1.2'
                }}>
                  {item.name || item.title}
                </h4>
                <p style={{
                  fontSize: '12px',
                  color: '#FCB53B',
                  fontWeight: '600',
                  margin: 0
                }}>
                  {item._id ? `₹${item.price}` : item.price}
                </p>
              </div>
            </div>
            
            <p style={{
              fontSize: '11px',
              color: '#666',
              margin: '0 0 8px 0',
              lineHeight: '1.3'
            }}>
              {item.description}
            </p>

            <button
              onClick={() => handleAddToCart(item)}
              style={{
                width: '100%',
                backgroundColor: 'white',
                color: '#FCB53B',
                border: '2px solid #FCB53B',
                padding: '6px 12px',
                borderRadius: '4px',
                fontSize: '12px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = '#FCB53B';
                e.target.style.color = 'white';
                e.target.style.transform = 'scale(1.02)';
                e.target.style.boxShadow = '0 2px 8px rgba(252, 181, 59, 0.3)';
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = 'white';
                e.target.style.color = '#FCB53B';
                e.target.style.transform = 'scale(1)';
                e.target.style.boxShadow = 'none';
              }}
            >
              Add to Cart
            </button>
          </div>
        ))}
        </div>
        
        {/* Navigation Arrows */}
        <button 
          className="slider-nav slider-nav-left"
          style={{
            position: 'absolute',
            left: '-15px',
            top: '50%',
            transform: 'translateY(-50%)',
            backgroundColor: '#FCB53B',
            color: 'white',
            border: 'none',
            borderRadius: '50%',
            width: '40px',
            height: '40px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '18px',
            fontWeight: 'bold',
            boxShadow: '0 2px 8px rgba(252, 181, 59, 0.3)',
            transition: 'all 0.3s ease',
            zIndex: 10
          }}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = '#B45253';
            e.target.style.transform = 'translateY(-50%) scale(1.1)';
            e.target.style.boxShadow = '0 4px 15px rgba(252, 181, 59, 0.4)';
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = '#FCB53B';
            e.target.style.transform = 'translateY(-50%) scale(1)';
            e.target.style.boxShadow = '0 2px 8px rgba(252, 181, 59, 0.3)';
          }}
          onClick={() => {
            const container = document.querySelector('.addons-slider-container');
            if (container) {
              container.scrollBy({ left: -220, behavior: 'smooth' });
            }
          }}
        >
          ‹
        </button>
        
        <button 
          className="slider-nav slider-nav-right"
          style={{
            position: 'absolute',
            right: '-15px',
            top: '50%',
            transform: 'translateY(-50%)',
            backgroundColor: '#FCB53B',
            color: 'white',
            border: 'none',
            borderRadius: '50%',
            width: '40px',
            height: '40px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '18px',
            fontWeight: 'bold',
            boxShadow: '0 2px 8px rgba(252, 181, 59, 0.3)',
            transition: 'all 0.3s ease',
            zIndex: 10
          }}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = '#B45253';
            e.target.style.transform = 'translateY(-50%) scale(1.1)';
            e.target.style.boxShadow = '0 4px 15px rgba(252, 181, 59, 0.4)';
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = '#FCB53B';
            e.target.style.transform = 'translateY(-50%) scale(1)';
            e.target.style.boxShadow = '0 2px 8px rgba(252, 181, 59, 0.3)';
          }}
          onClick={() => {
            const container = document.querySelector('.addons-slider-container');
            if (container) {
              container.scrollBy({ left: 220, behavior: 'smooth' });
            }
          }}
        >
          ›
        </button>
      </div>
    </div>
    </>
  );
};

export default AddOnsSection;
