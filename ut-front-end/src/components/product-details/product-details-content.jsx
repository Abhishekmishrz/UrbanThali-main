'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { add_cart_product } from '@/redux/features/cartSlice';
import useNotification from '@/hooks/use-notification';

const ProductDetailsContent = ({ productItem }) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const { showSuccess } = useNotification();

  if (!productItem) {
    return (
      <div style={{ 
        paddingTop: '80px', 
        paddingBottom: '40px', 
        backgroundColor: '#FFF9E6',
        minHeight: 'auto'
      }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h2>Product not found</h2>
              <p>Sorry, the product you&apos;re looking for doesn&apos;t exist.</p>
              <Link href="/shop" className="tp-btn">Back to Shop</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    const productToAdd = {
      ...productItem,
      orderQuantity: quantity
    };
    dispatch(add_cart_product(productToAdd));
    // Toast notification is handled by the cart slice
  };

  const handleQuantityChange = (change) => {
    const newQuantity = quantity + change;
    const maxQuantity = productItem.quantity || 50; // Use available quantity or default to 50
    if (newQuantity >= 1 && newQuantity <= maxQuantity) {
      setQuantity(newQuantity);
    }
  };

  return (
    <div style={{ 
      paddingTop: '80px', 
      paddingBottom: '40px', 
      backgroundColor: '#FFF9E6',
      minHeight: 'auto'
    }}>
      <div className="container" style={{ maxWidth: '900px' }}>
        <div className="row">
          <div className="col-12 mb-4">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb" style={{ backgroundColor: 'transparent', padding: 0 }}>
                <li className="breadcrumb-item">
                  <Link href="/" style={{ color: '#FCB53B', textDecoration: 'none' }}>Home</Link>
                </li>
                <li className="breadcrumb-item">
                  <Link href="/shop" style={{ color: '#FCB53B', textDecoration: 'none' }}>Shop</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page" style={{ color: '#6b7280' }}>
                  {productItem.title}
                </li>
              </ol>
            </nav>
          </div>

          <div className="col-12">
            <div style={{
              backgroundColor: 'white',
              borderRadius: '16px',
              boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
              overflow: 'hidden'
            }}>
              <div className="row g-0" style={{ alignItems: 'stretch' }}>
                <div className="col-md-4" style={{ display: 'flex' }}>
                  <div style={{
                    height: '100%',
                    minHeight: '400px',
                    backgroundImage: `url(${productItem.img || productItem.image || '/assets/img/product/collection/collection-1.jpg'})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    position: 'relative',
                    width: '100%'
                  }}>
                  </div>
                </div>

                <div className="col-md-8" style={{ display: 'flex' }}>
                  <div style={{ padding: '30px', width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <div style={{ flex: 1 }}>
                      <div style={{ marginBottom: '15px' }}>
                        <h1 style={{
                          fontSize: '2rem',
                          fontWeight: '700',
                          color: '#1f2937',
                          marginBottom: '5px'
                        }}>
                          {productItem.title}
                        </h1>
                        {productItem.category && (
                          <p style={{
                            fontSize: '1.1rem',
                            color: '#FCB53B',
                            fontWeight: '600',
                            margin: 0
                          }}>
                            {productItem.category.name || productItem.category}
                          </p>
                        )}
                      </div>

                      <div style={{ marginBottom: '15px' }}>
                        <span style={{
                          fontSize: '1.8rem',
                          fontWeight: '700',
                          color: '#FCB53B'
                        }}>
                          ₹{productItem.price?.toFixed(2) || '0.00'}
                        </span>
                        {productItem.discount > 0 && (
                          <span style={{
                            fontSize: '1.2rem',
                            color: '#6b7280',
                            textDecoration: 'line-through',
                            marginLeft: '10px'
                          }}>
                            ₹{((productItem.price * 100) / (100 - productItem.discount)).toFixed(2)}
                          </span>
                        )}
                      </div>

                      <div style={{ marginBottom: '20px' }}>
                        <p style={{
                          fontSize: '1rem',
                          color: '#6b7280',
                          lineHeight: '1.5',
                          margin: 0
                        }}>
                          {productItem.description || 'No description available.'}
                        </p>
                      </div>
                    </div>

                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      flexWrap: 'wrap',
                      marginTop: 'auto',
                      paddingTop: '15px',
                      borderTop: '1px solid #e5e7eb'
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <span style={{ color: '#6b7280', fontWeight: '500', fontSize: '0.85rem' }}>Qty:</span>
                        <div style={{
                          display: 'flex',
                          alignItems: 'center',
                          border: '1px solid #e5e7eb',
                          borderRadius: '4px',
                          overflow: 'hidden'
                        }}>
                          <button
                            onClick={() => handleQuantityChange(-1)}
                            style={{
                              backgroundColor: '#f9fafb',
                              border: 'none',
                              padding: '4px 8px',
                              cursor: 'pointer',
                              color: '#6b7280',
                              fontSize: '12px',
                              fontWeight: '600'
                            }}
                          >
                            -
                          </button>
                          <span style={{
                            padding: '4px 8px',
                            backgroundColor: 'white',
                            color: '#1f2937',
                            fontSize: '12px',
                            fontWeight: '600',
                            minWidth: '30px',
                            textAlign: 'center'
                          }}>
                            {quantity}
                          </span>
                          <button
                            onClick={() => handleQuantityChange(1)}
                            style={{
                              backgroundColor: '#f9fafb',
                              border: 'none',
                              padding: '4px 8px',
                              cursor: 'pointer',
                              color: '#6b7280',
                              fontSize: '12px',
                              fontWeight: '600'
                            }}
                          >
                            +
                          </button>
                        </div>
                      </div>

                      <button
                        onClick={handleAddToCart}
                        style={{
                          backgroundColor: '#FCB53B',
                          color: 'white',
                          padding: '6px 16px',
                          borderRadius: '4px',
                          border: 'none',
                          fontSize: '12px',
                          fontWeight: '600',
                          cursor: 'pointer',
                          transition: 'all 0.3s ease',
                          boxShadow: '0 1px 4px rgba(252, 181, 59, 0.3)',
                          minWidth: '100px'
                        }}
                        onMouseOver={(e) => {
                          e.target.style.backgroundColor = '#B45253';
                        }}
                        onMouseOut={(e) => {
                          e.target.style.backgroundColor = '#FCB53B';
                        }}
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsContent;
