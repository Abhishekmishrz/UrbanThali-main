'use client';
import React, { useState, useMemo } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { add_cart_product } from "@/redux/features/cartSlice";
import { useGetThaliItemsQuery, useGetAddOnItemsQuery } from "@/redux/features/foodItemApi";

const MenuFilterArea = () => {
  const [activeFilter, setActiveFilter] = useState('thali');
  const dispatch = useDispatch();
  const { cart_products } = useSelector((state) => state.cart);

  // Fetch data from API
  const { data: thaliItems = [], isLoading: thaliLoading } = useGetThaliItemsQuery();
  const { data: addOnItems = [], isLoading: addOnLoading } = useGetAddOnItemsQuery();

  // Combine API data and transform it
  const allMenuItems = useMemo(() => {
    // Transform API data - only use what comes from the API
    const apiThalis = thaliItems.map(item => ({
      id: item._id,
      _id: item._id,
      title: item.name,
      rating: 4.5,
      prepTime: `${item.preparationTime || 20} min`,
      servings: `${item.unit || '1'} serving`,
      price: `₹${item.price}`,
      image: item.img,
      description: item.description || '',
      category: 'thali',
      cuisine: 'Indian, Thali, Traditional',
      available: item.available
    }));

    const apiAddOns = addOnItems.map(item => ({
      id: item._id,
      _id: item._id,
      title: item.name,
      rating: 4.2,
      prepTime: `${item.preparationTime || 5} min`,
      servings: `${item.unit || '1'} serving`,
      price: `₹${item.price}`,
      image: item.img,
      description: item.description || '',
      category: 'addons',
      cuisine: 'Add-ons, Extras',
      available: item.available
    }));

    // Only return API data - no fallback
    return [...apiThalis, ...apiAddOns];
  }, [thaliItems, addOnItems]);

  // Filter items based on active filter
  const filteredItems = allMenuItems.filter(item => {
    return item.category === activeFilter;
  });

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
  };

  // Check if there are any thali items in cart
  const hasThaliInCart = cart_products.some(item => item.category === 'thali' || item.category?.name === 'Thali');

  const handleAddToCart = (item) => {
    // Create cart item with required properties
    const cartItem = {
      _id: item._id || item.id.toString(),
      id: item._id || item.id,
      title: item.title,
      price: typeof item.price === 'number' ? item.price : parseFloat(item.price.replace('₹', '')),
      quantity: item.quantity,  // Set high available stock to allow multiple additions
      img: item.image,
      image: item.image,
      category: item.category,
      description: item.description
    };
    
    dispatch(add_cart_product(cartItem));
  };

  // Helper function to render product card
  const renderProductCard = (item) => {
    // Ensure we have all required fields with fallbacks
    const imageUrl = item.image || item.img || '/assets/img/product/collection/collection-1.jpg';
    const title = item.title || item.name || 'Unnamed Item';
    const itemId = item.id || item._id || 'unknown';
    
    return (
      <div key={itemId} className="col-lg-2 col-md-3 col-sm-6 mb-30" style={{ paddingLeft: '8px', paddingRight: '8px' }}>
        <div className="tp-product-item-3 p-relative transition-3" style={{
          backgroundColor: 'white',
          borderRadius: '12px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
          overflow: 'hidden',
          height: '100%',
          width: '100%'
        }}>
          {/* Product Image */}
          <div className="tp-product-thumb-3 p-relative fix" style={{height: '180px', overflow: 'hidden'}}>
            <div 
              className="include-bg"
              style={{
                backgroundImage: `url(${imageUrl})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '100%',
                width: '100%'
              }}
            ></div>
          </div>

          {/* Product Content */}
          <div className="tp-product-content-3" style={{padding: '12px'}}>
            <h3 className="tp-product-title-3" style={{
              fontSize: '18px',
              fontWeight: '700',
              marginBottom: '2px',
              color: '#1f2937'
            }}>
              <Link href={`/product-details/${itemId}`} style={{color: 'inherit', textDecoration: 'none'}}>
                {title}
              </Link>
            </h3>

          {item.subtitle && (
            <p style={{
              fontSize: '14px',
              color: '#6b7280',
              marginBottom: '4px',
              fontWeight: '500'
            }}>
              {item.subtitle}
            </p>
          )}

          {/* Rating */}
          <div className="tp-product-rating" style={{marginBottom: '4px'}}>
            <div style={{display: 'flex', alignItems: 'center', gap: '4px'}}>
              <div style={{display: 'flex', alignItems: 'center'}}>
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill={i < Math.floor(item.rating) ? '#ffc107' : '#e5e7eb'}
                    style={{marginRight: '2px'}}
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ))}
              </div>
              <span style={{fontSize: '12px', color: '#6b7280', marginLeft: '4px'}}>
                {item.rating}
              </span>
            </div>
          </div>

          {/* Product Details - Time and Servings */}
          <div className="tp-product-info-3" style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '4px'}}>
            {/* Time */}
            <div style={{display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: '#6b7280'}}>
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" style={{width: '16px', height: '16px'}}>
                <circle cx="12" cy="12" r="10"/>
                <polyline points="12,6 12,12 16,14"/>
              </svg>
              <span>{item.prepTime}</span>
            </div>
            
            {/* Servings */}
            <div style={{display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: '#6b7280'}}>
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" style={{width: '16px', height: '16px'}}>
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                <circle cx="9" cy="7" r="4"/>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
              </svg>
              <span>{item.servings}</span>
            </div>
          </div>

          <div style={{marginBottom: '8px'}}>
            <p style={{
              fontSize: '12px',
              color: '#6b7280',
              lineHeight: '1.4',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical'
            }}>
              {item.description}
            </p>
          </div>

          {/* Price and Add to Cart */}
          <div className="tp-product-bottom-3" style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <div className="tp-product-price-3">
              <span style={{
                fontSize: '20px',
                fontWeight: '700',
                color: '#FCB53B'
              }}>
                {typeof item.price === 'number' ? `₹${item.price}` : item.price}
              </span>
            </div>
            <div className="tp-product-cart-3">
              <button
                className="tp-btn"
                onClick={() => handleAddToCart(item)}
                style={{
                  backgroundColor: (item.category === 'addons' && !hasThaliInCart) ? '#6b7280' : '#FCB53B',
                  color: 'white',
                  padding: '6px 16px',
                  borderRadius: '6px',
                  textDecoration: 'none',
                  fontSize: '13px',
                  fontWeight: '600',
                  border: 'none',
                  cursor: (item.category === 'addons' && !hasThaliInCart) ? 'not-allowed' : 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                  height: '32px',
                  minWidth: '80px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
                disabled={item.category === 'addons' && !hasThaliInCart}
              >
                {(item.category === 'addons' && !hasThaliInCart) ? 'Add Thali First' : 'Add'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
  };

  // Show loading state
  const isLoading = thaliLoading || addOnLoading;
  
  if (isLoading) {
    return (
      <section id="menu-section" className="tp-product-area">
        <div className="container">
          <div className="text-center" style={{ padding: '60px 0' }}>
            <p>Loading menu items...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="menu-section" className="tp-product-area">
      <div className="container-fluid" style={{ 
        paddingLeft: '20px', 
        paddingRight: '20px', 
        overflow: 'hidden', 
        backgroundColor: '#FFF9E6', 
        borderRadius: '12px', 
        padding: '30px 20px'
      }}>
        {/* Header Section */}
        <div className="row" style={{marginLeft: '0', marginRight: '0'}}>
          <div className="col-xl-12" style={{paddingLeft: '0', paddingRight: '0'}}>
            <div className="tp-section-title-wrapper-3 mb-20 text-center" style={{
              paddingLeft: '20px', 
              paddingRight: '20px'
            }}>
              <h3 className="tp-section-title-3" style={{
                fontSize: '2.5rem', 
                fontWeight: 'bold', 
                marginBottom: '4px'
              }}>
                Discover Our Full Menu
              </h3>
              <p style={{
                fontSize: '16px', 
                color: '#666', 
                maxWidth: '600px', 
                margin: '0 auto'
              }}>
                Indulge in traditional thalis, paired with irresistible add-ons.
              </p>
            </div>
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="row mb-30" style={{
          '@media (max-width: 768px)': {
            marginBottom: '20px'
          }
        }}>
          <div className="col-lg-12">
            <div className="tp-menu-filter-buttons d-flex justify-content-center gap-3 flex-wrap" style={{
              '@media (max-width: 768px)': {
                gap: '10px'
              }
            }}>
              <button
                onClick={() => handleFilterChange('thali')}
                className={`tp-menu-filter-btn ${activeFilter === 'thali' ? 'active' : ''}`}
                style={{
                  backgroundColor: activeFilter === 'thali' ? '#FCB53B' : 'white',
                  color: activeFilter === 'thali' ? 'white' : '#6b7280',
                  padding: '8px 24px',
                  borderRadius: '8px',
                  border: '2px solid #e5e7eb',
                  fontSize: '16px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  minWidth: '140px',
                  textAlign: 'center'
                }}
              >
                Thali
              </button>
              <button
                onClick={() => handleFilterChange('addons')}
                className={`tp-menu-filter-btn ${activeFilter === 'addons' ? 'active' : ''}`}
                style={{
                  backgroundColor: activeFilter === 'addons' ? '#FCB53B' : 'white',
                  color: activeFilter === 'addons' ? 'white' : '#6b7280',
                  padding: '8px 24px',
                  borderRadius: '8px',
                  border: '2px solid #e5e7eb',
                  fontSize: '16px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  minWidth: '140px',
                  textAlign: 'center'
                }}
              >
                Add-ons
              </button>
            </div>
          </div>
        </div>

        {/* Menu Items Grid */}
        {activeFilter === 'thali' && (
          <div className="row" style={{ 
            marginLeft: '0', 
            marginRight: '0', 
            display: 'flex', 
            gap: '12px',
            flexWrap: 'wrap'
          }}>
            {filteredItems.map((item) => renderProductCard(item))}
          </div>
        )}

        {activeFilter === 'addons' && (
          <div style={{ 
            padding: '24px'
          }}>
            {/* Add-ons Header */}
            <div style={{ marginBottom: '20px' }}>
              {/* <h3 style={{ 
                fontSize: '24px', 
                fontWeight: '600', 
                color: '#333', 
                marginBottom: '8px',
                textAlign: 'center'
              }}>
                Complete your meal with our delicious sides, beverages, and desserts
              </h3> */}
            </div>

            {/* Horizontal Scrollable Add-ons */}
            <div style={{ 
              display: 'flex', 
              gap: '16px', 
              overflowX: 'auto', 
              paddingBottom: '8px',
              scrollbarWidth: 'thin',
              scrollbarColor: '#FCB53B #f0f0f0'
            }}>
              {filteredItems.map((item) => (
                <div key={item.id} style={{ 
                  minWidth: '280px', 
                  flexShrink: 0,
                  background: 'white',
                  borderRadius: '8px',
                  border: '1px solid #e0e0e0',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}>
                  {/* Product Image */}
                  <div style={{ height: '120px', overflow: 'hidden' }}>
                    <div
                      style={{
                        backgroundImage: `url(${item.image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        height: '100%',
                        width: '100%'
                      }}
                    />
                  </div>
                  
                  {/* Product Info */}
                  <div style={{ padding: '16px' }}>
                    <div style={{ 
                      display: 'flex', 
                      justifyContent: 'space-between', 
                      alignItems: 'flex-start',
                      marginBottom: '8px'
                    }}>
                      <h6 style={{ 
                        fontSize: '16px', 
                        fontWeight: '600', 
                        color: '#333',
                        margin: 0,
                        lineHeight: '1.3'
                      }}>
                        {item.title}
                      </h6>
                      <span style={{
                        fontSize: '12px',
                        color: '#666',
                        background: '#f5f5f5',
                        padding: '2px 8px',
                        borderRadius: '12px',
                        fontWeight: '500'
                      }}>
                        {item.subtitle}
                      </span>
                    </div>
                    
                    <p style={{ 
                      fontSize: '13px', 
                      color: '#666', 
                      marginBottom: '12px',
                      lineHeight: '1.4',
                      margin: '0 0 12px 0'
                    }}>
                      {item.description}
                    </p>
                    
                    {/* Price and Add Button */}
                    <div style={{ 
                      display: 'flex', 
                      justifyContent: 'space-between', 
                      alignItems: 'center' 
                    }}>
                      <span style={{ 
                        fontSize: '16px', 
                        fontWeight: '700', 
                        color: '#FCB53B' 
                      }}>
                        {item.price}
                      </span>
                      <button
                        onClick={() => handleAddToCart(item)}
                        disabled={!hasThaliInCart}
                        style={{
                          backgroundColor: !hasThaliInCart ? '#6b7280' : '#FCB53B',
                          color: 'white',
                          padding: '6px 16px',
                          borderRadius: '6px',
                          textDecoration: 'none',
                          fontSize: '13px',
                          fontWeight: '600',
                          border: 'none',
                          cursor: !hasThaliInCart ? 'not-allowed' : 'pointer',
                          transition: 'all 0.3s ease',
                          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                          height: '32px',
                          minWidth: '80px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          opacity: !hasThaliInCart ? 0.6 : 1
                        }}
                      >
                        {!hasThaliInCart ? 'Add Thali First' : 'Add'}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default MenuFilterArea;
