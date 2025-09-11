'use client';
import React, { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { add_cart_product } from "@/redux/features/cartSlice";
import { useGetAllProductsQuery } from "@/redux/features/productApi";

const MenuFilterArea = () => {
  const [activeFilter, setActiveFilter] = useState('thali');
  const [isMobile, setIsMobile] = useState(false);
  const dispatch = useDispatch();
  const { cart_products } = useSelector((state) => state.cart);
  
  // Fetch all products from backend
  const { data: allProductsData, error, isLoading } = useGetAllProductsQuery();

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  // Process backend data to get thali and addon items
  const allMenuItems = useMemo(() => {
    if (!allProductsData?.data) return [];
    
    return allProductsData.data.map(product => ({
      id: product._id,
      title: product.name || product.title,
      subtitle: product.thaliType || product.category?.name || 'Food',
      rating: 4.5, // Default rating, can be calculated from reviews
      prepTime: `${product.preparationTime || 25} min`,
      servings: `${product.unit === 'plate' ? '1-2' : '2-3'} servings`,
      price: `₹${product.price}`,
      image: product.img,
      description: product.description,
      category: product.category?.name?.toLowerCase().includes('thali') || product.thaliType ? 'thali' : 
                (product.category?.name?.toLowerCase() === 'add-ons' || 
                 product.productType?.startsWith('addon-') ||
                 product.category?.parent?.toLowerCase() === 'add-ons') ? 'addons' : 'thali',
      cuisine: product.cuisine || "Indian, Traditional"
    }));
  }, [allProductsData]);

  // Fallback static data if backend is not available
  const fallbackMenuItems = [
    // Thali items
    {
      id: "thali-1",
      title: "Mini Urban Thali",
      subtitle: "Mini",
      rating: 4.5,
      prepTime: "15 min",
      servings: "1 serving",
      price: "₹139",
      image: "/assets/img/product/collection/collection-1.jpg",
      description: "1 Veg Curry (Dal/Chole/Rajma), Steamed Rice / 2 Roti, Salad + Papad",
      category: "thali",
      cuisine: "Indian, Thali, Traditional"
    },
    {
      id: 2,
      title: "Everyday Thali",
      subtitle: "Everyday",
      rating: 4.6,
      prepTime: "20 min",
      servings: "2 servings",
      price: "₹169",
      image: "/assets/img/product/collection/collection-2.jpg",
      description: "2 Veg Curries (Dal + Seasonal Veg), 2 Roti + Steamed Rice, Salad + Pickle",
      category: "thali",
      cuisine: "Indian, Thali, Traditional"
    },
    {
      id: 3,
      title: "Urban Premium Thali",
      subtitle: "Premium",
      rating: 4.7,
      prepTime: "25 min",
      servings: "2 servings",
      price: "₹199",
      image: "/assets/img/product/collection/collection-3.jpg",
      description: "2 Veg Curries (Dal + Paneer/Seasonal Veg), 2 Roti / 2 Parathas + Steamed Rice, Curd + Salad + Sweet",
      category: "thali",
      cuisine: "Indian, Thali, Traditional"
    },
    {
      id: 4,
      title: "Urban Feast Thali",
      subtitle: "Feast",
      rating: 4.8,
      prepTime: "30 min",
      servings: "2-3 servings",
      price: "₹249",
      image: "/assets/img/product/collection/collection-1.jpg",
      description: "3 Veg Curries (Dal + Paneer + Seasonal Veg), 4 Roti / 2 paratha+ Jeera Rice, Salad + Papad + Pickle + Sweet",
      category: "thali",
      cuisine: "Indian, Thali, Traditional"
    },
    {
      id: 5,
      title: "Maharaja Urban Thali",
      subtitle: "Maharaja",
      rating: 4.9,
      prepTime: "35 min",
      servings: "3-4 servings",
      price: "₹299",
      image: "/assets/img/product/collection/collection-2.jpg",
      description: "4 Veg Curries (Dal + Paneer + Chhole/Rajma + Seasonal Veg), 4 Roti / 2 Naan / 2 parathas + Pulao/Jeera Rice, Raita + Salad + Papad + 2 Sweets",
      category: "thali",
      cuisine: "Indian, Thali, Traditional"
    },
    // Add-ons items
    {
      id: 6,
      title: "Extra Roti",
      subtitle: "Bread",
      rating: 4.3,
      prepTime: "3 min",
      servings: "1 serving",
      price: "₹15",
      image: "/assets/img/product/collection/collection-3.jpg",
      description: "Freshly baked roti",
      category: "addons",
      cuisine: "Add-ons, Extras"
    },
    {
      id: 7,
      title: "Curd",
      subtitle: "Dairy",
      rating: 4.1,
      prepTime: "2 min",
      servings: "1 serving",
      price: "₹25",
      image: "/assets/img/product/collection/collection-1.jpg",
      description: "Fresh homemade curd",
      category: "addons",
      cuisine: "Add-ons, Extras"
    },
    {
      id: 8,
      title: "Jeera Rice",
      subtitle: "Rice",
      rating: 4.0,
      prepTime: "8 min",
      servings: "1 serving",
      price: "₹30",
      image: "/assets/img/product/collection/collection-1.jpg",
      description: "Aromatic cumin flavored rice",
      category: "addons",
      cuisine: "Add-ons, Extras"
    },
    {
      id: 9,
      title: "Masala Chhach",
      subtitle: "Drink",
      rating: 4.6,
      prepTime: "3 min",
      servings: "1 serving",
      price: "₹35",
      image: "/assets/img/product/collection/collection-1.jpg",
      description: "Spiced buttermilk drink",
      category: "addons",
      cuisine: "Add-ons, Extras"
    },
    {
      id: 10,
      title: "Masala Papad",
      subtitle: "Sides",
      rating: 4.4,
      prepTime: "2 min",
      servings: "1 serving",
      price: "₹25",
      image: "/assets/img/product/collection/collection-1.jpg",
      description: "Spiced crispy papad",
      category: "addons",
      cuisine: "Add-ons, Extras"
    },
    {
      id: 11,
      title: "Gulab Jamun (2pcs)",
      subtitle: "Dessert",
      rating: 4.2,
      prepTime: "5 min",
      servings: "1 serving",
      price: "₹45",
      image: "/assets/img/product/collection/collection-1.jpg",
      description: "Sweet dessert balls",
      category: "addons",
      cuisine: "Add-ons, Extras"
    },
    {
      id: 12,
      title: "Green Salad",
      subtitle: "Sides",
      rating: 4.0,
      prepTime: "3 min",
      servings: "1 serving",
      price: "₹30",
      image: "/assets/img/product/collection/collection-2.jpg",
      description: "Fresh mixed vegetables",
      category: "addons",
      cuisine: "Add-ons, Extras"
    },
    {
      id: 13,
      title: "Shikanji Bottle",
      subtitle: "Drink",
      rating: 4.1,
      prepTime: "2 min",
      servings: "1 serving",
      price: "₹15",
      image: "/assets/img/product/collection/collection-3.jpg",
      description: "Refreshing lemon drink",
      category: "addons",
      cuisine: "Add-ons, Extras"
    },
    {
      id: 14,
      title: "Paneer Curry (Extra)",
      subtitle: "Curry",
      rating: 4.2,
      prepTime: "10 min",
      servings: "1 serving",
      price: "₹50",
      image: "/assets/img/product/collection/collection-1.jpg",
      description: "Rich cottage cheese curry",
      category: "addons",
      cuisine: "Add-ons, Extras"
    },
    {
      id: 15,
      title: "Cold Drink (200ml)",
      subtitle: "Beverage",
      rating: 4.3,
      prepTime: "1 min",
      servings: "1 serving",
      price: "On MRP",
      image: "/assets/img/product/collection/collection-2.jpg",
      description: "Refreshing cold beverage",
      category: "addons",
      cuisine: "Add-ons, Extras"
    }
  ];

  // Filter items based on active filter (removed 'all' option)
  const filteredItems = allMenuItems.filter(item => {
    return item.category === activeFilter;
  });

  // Use backend data if available, otherwise fallback to static data
  const displayMenuItems = allMenuItems.length > 0 ? allMenuItems : fallbackMenuItems;
  
  // Get thali items
  const thaliItems = displayMenuItems.filter(item => item.category === 'thali');
  
  // Get add-ons items  
  const addonsItems = displayMenuItems.filter(item => item.category === 'addons');

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
  };


  // Check if there are any thali items in cart
  const hasThaliInCart = cart_products.some(item => item.category === 'thali');

  const handleAddToCart = (item) => {
    // Convert price string to number (remove ₹ and convert to number)
    const price = parseFloat(item.price.replace('₹', ''));
    
    // Create cart item with required properties
    const cartItem = {
      _id: item.id.toString(),
      title: item.title,
      price: price,
      quantity: 100, // Set a high quantity for availability
      img: item.image, // Changed from 'image' to 'img' to match cart component expectations
      category: item.category,
      description: item.description,
      orderQuantity: 1 // Default order quantity
    };
    
    dispatch(add_cart_product(cartItem));
  };

  // Helper function to render product card
  const renderProductCard = (item) => (
    <div key={item.id} className="col-lg-2 col-md-3 col-sm-6 mb-30" style={{ paddingLeft: '8px', paddingRight: '8px' }}>
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
              backgroundImage: `url(${item.image})`,
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
            <Link href={`/product-details/${item.id}`} style={{color: 'inherit', textDecoration: 'none'}}>
              {item.title}
            </Link>
          </h3>

          <p style={{
            fontSize: '14px',
            color: '#6b7280',
            marginBottom: '4px',
            fontWeight: '500'
          }}>
            {item.subtitle}
          </p>

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

          {/* Cuisine Type */}
          <div style={{marginBottom: '8px'}}>
            <span style={{
              fontSize: '12px',
              color: '#6b7280',
              backgroundColor: '#f3f4f6',
              padding: '4px 8px',
              borderRadius: '4px'
            }}>
              {item.cuisine}
            </span>
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
                {item.price}
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

  return (
    <section id="menu-section" className="tp-product-area">
      <div className="container-fluid" style={{ 
        paddingLeft: isMobile ? '15px' : '20px', 
        paddingRight: isMobile ? '15px' : '20px', 
        overflow: 'hidden', 
        backgroundColor: '#FFF9E6', 
        borderRadius: '12px', 
        padding: isMobile ? '25px 15px' : '30px 20px' 
      }}>
        {/* Header Section */}
        <div className="row" style={{marginLeft: '0', marginRight: '0'}}>
          <div className="col-xl-12" style={{paddingLeft: '0', paddingRight: '0'}}>
            <div className="tp-section-title-wrapper-3 mb-20 text-center" style={{
              paddingLeft: isMobile ? '10px' : '20px', 
              paddingRight: isMobile ? '10px' : '20px'
            }}>
              <h3 className="tp-section-title-3" style={{
                fontSize: isMobile ? '2rem' : '2.5rem', 
                fontWeight: 'bold', 
                marginBottom: '4px'
              }}>
                Discover Our Full Menu
              </h3>
              <p style={{
                fontSize: isMobile ? '14px' : '16px', 
                color: '#666', 
                maxWidth: '600px', 
                margin: '0 auto',
                paddingLeft: isMobile ? '10px' : '0',
                paddingRight: isMobile ? '10px' : '0'
              }}>
                Indulge in traditional thalis, paired with irresistible add-ons.
              </p>
            </div>
          </div>
        </div>
        
        {/* Loading State */}
        {isLoading && (
          <div className="row" style={{ 
            marginLeft: '0', 
            marginRight: '0', 
            textAlign: 'center', 
            padding: isMobile ? '30px' : '40px' 
          }}>
            <div style={{ 
              fontSize: isMobile ? '16px' : '18px', 
              color: '#666' 
            }}>
              Loading delicious menu items...
            </div>
          </div>
        )}
        
        {/* Error State */}
        {error && (
          <div className="row" style={{ 
            marginLeft: '0', 
            marginRight: '0', 
            textAlign: 'center', 
            padding: isMobile ? '30px' : '40px' 
          }}>
            <div style={{ 
              color: '#ef4444',
              fontSize: isMobile ? '14px' : '16px'
            }}>
              Unable to load menu items. Using sample menu.
            </div>
          </div>
        )}

        {/* Filter Buttons */}
        <div className="row mb-30">
          <div className="col-lg-12">
            <div className="tp-menu-filter-buttons d-flex justify-content-center gap-3 flex-wrap">
              <button
                onClick={() => handleFilterChange('thali')}
                className={`tp-menu-filter-btn ${activeFilter === 'thali' ? 'active' : ''}`}
                style={{
                  backgroundColor: activeFilter === 'thali' ? '#FCB53B' : 'white',
                  color: activeFilter === 'thali' ? 'white' : '#6b7280',
                  padding: isMobile ? '10px 20px' : '8px 24px',
                  borderRadius: '8px',
                  border: '2px solid #e5e7eb',
                  fontSize: isMobile ? '14px' : '16px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  minWidth: isMobile ? '120px' : '140px',
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
                  padding: isMobile ? '10px 20px' : '8px 24px',
                  borderRadius: '8px',
                  border: '2px solid #e5e7eb',
                  fontSize: isMobile ? '14px' : '16px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  minWidth: isMobile ? '120px' : '140px',
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
            display: 'grid',
            gridTemplateColumns: isMobile 
              ? 'repeat(auto-fit, minmax(280px, 1fr))' 
              : 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: isMobile ? '16px' : '20px', 
            justifyItems: 'stretch'
          }}>
            {thaliItems.map((item) => (
              <div key={item.id} style={{ 
                marginBottom: isMobile ? '20px' : '30px',
                width: '100%',
                maxWidth: isMobile ? 'none' : '350px',
                justifySelf: 'center'
              }}>
                <div style={{
                  backgroundColor: 'white',
                  borderRadius: '12px',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                  overflow: 'hidden',
                  height: '100%',
                  width: '100%'
                }}>
                  {/* Product Image */}
                  <div style={{
                    height: isMobile ? '160px' : '180px', 
                    overflow: 'hidden'
                  }}>
                    <div 
                      style={{
                        backgroundImage: `url(${item.image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        height: '100%',
                        width: '100%'
                      }}
                    ></div>
                  </div>

                  {/* Product Content */}
                  <div style={{
                    padding: isMobile ? '16px' : '12px'
                  }}>
                    <h3 style={{
                      fontSize: isMobile ? '16px' : '18px',
                      fontWeight: '700',
                      marginBottom: '2px',
                      color: '#1f2937',
                      lineHeight: '1.3'
                    }}>
                      <Link href={`/product-details/${item.id}`} style={{color: 'inherit', textDecoration: 'none'}}>
                        {item.title}
                      </Link>
                    </h3>

                    <p style={{
                      fontSize: isMobile ? '13px' : '14px',
                      color: '#6b7280',
                      marginBottom: isMobile ? '6px' : '4px',
                      fontWeight: '500'
                    }}>
                      {item.subtitle}
                    </p>

                    {/* Rating */}
                    <div style={{marginBottom: isMobile ? '6px' : '4px'}}>
                      <div style={{display: 'flex', alignItems: 'center', gap: '4px'}}>
                        <div style={{display: 'flex', alignItems: 'center'}}>
                          {[...Array(5)].map((_, i) => (
                            <svg
                              key={i}
                              width={isMobile ? "12" : "14"}
                              height={isMobile ? "12" : "14"}
                              viewBox="0 0 24 24"
                              fill={i < Math.floor(item.rating) ? '#ffc107' : '#e5e7eb'}
                              style={{marginRight: '2px'}}
                            >
                              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                            </svg>
                          ))}
                        </div>
                        <span style={{
                          fontSize: isMobile ? '11px' : '12px', 
                          color: '#6b7280', 
                          marginLeft: '4px'
                        }}>
                          {item.rating}
                        </span>
                      </div>
                    </div>

                    {/* Product Details - Time and Servings */}
                    <div style={{
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'space-between', 
                      marginBottom: isMobile ? '6px' : '4px'
                    }}>
                      {/* Time */}
                      <div style={{
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: isMobile ? '4px' : '6px', 
                        fontSize: isMobile ? '11px' : '12px', 
                        color: '#6b7280'
                      }}>
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" style={{
                          width: isMobile ? '14px' : '16px', 
                          height: isMobile ? '14px' : '16px'
                        }}>
                          <circle cx="12" cy="12" r="10"/>
                          <polyline points="12,6 12,12 16,14"/>
                        </svg>
                        <span>{item.prepTime}</span>
                      </div>
                      
                      {/* Servings */}
                      <div style={{
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: isMobile ? '4px' : '6px', 
                        fontSize: isMobile ? '11px' : '12px', 
                        color: '#6b7280'
                      }}>
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" style={{
                          width: isMobile ? '14px' : '16px', 
                          height: isMobile ? '14px' : '16px'
                        }}>
                          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                          <circle cx="9" cy="7" r="4"/>
                          <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                          <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                        </svg>
                        <span>{item.servings}</span>
                      </div>
                    </div>

                    {/* Cuisine Type */}
                    <div style={{marginBottom: isMobile ? '10px' : '8px'}}>
                      <span style={{
                        fontSize: isMobile ? '11px' : '12px',
                        color: '#6b7280',
                        backgroundColor: '#f3f4f6',
                        padding: isMobile ? '3px 6px' : '4px 8px',
                        borderRadius: '4px'
                      }}>
                        {item.cuisine}
                      </span>
                    </div>

                    {/* Price and Add to Cart */}
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      gap: isMobile ? '8px' : '12px'
                    }}>
                      <div>
                        <span style={{
                          fontSize: isMobile ? '18px' : '20px',
                          fontWeight: '700',
                          color: '#FCB53B'
                        }}>
                          {item.price}
                        </span>
                      </div>
                      <div>
                        <button
                          onClick={() => handleAddToCart(item)}
                          style={{
                            backgroundColor: '#FCB53B',
                            color: 'white',
                            padding: isMobile ? '8px 14px' : '6px 16px',
                            borderRadius: '6px',
                            textDecoration: 'none',
                            fontSize: isMobile ? '12px' : '13px',
                            fontWeight: '600',
                            border: 'none',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                            height: isMobile ? '36px' : '32px',
                            minWidth: isMobile ? '70px' : '80px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                          }}
                        >
                          Add
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeFilter === 'addons' && (
          <div style={{ 
            padding: isMobile ? '16px' : '24px'
          }}>
            {/* Add-ons Header */}
            <div style={{ marginBottom: isMobile ? '16px' : '20px' }}>
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
              gap: isMobile ? '12px' : '16px', 
              overflowX: 'auto', 
              paddingBottom: '8px',
              scrollbarWidth: 'thin',
              scrollbarColor: '#FCB53B #f0f0f0'
            }}>
              {addonsItems.map((item) => (
                <div key={item.id} style={{ 
                  minWidth: isMobile ? '250px' : '280px', 
                  flexShrink: 0,
                  background: 'white',
                  borderRadius: '8px',
                  border: '1px solid #e0e0e0',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  if (!isMobile) {
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isMobile) {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }
                }}>
                  {/* Product Image */}
                  <div style={{ 
                    height: isMobile ? '100px' : '120px', 
                    overflow: 'hidden' 
                  }}>
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
                  <div style={{ 
                    padding: isMobile ? '12px' : '16px' 
                  }}>
                    <div style={{ 
                      display: 'flex', 
                      justifyContent: 'space-between', 
                      alignItems: 'flex-start',
                      marginBottom: isMobile ? '6px' : '8px'
                    }}>
                      <h6 style={{ 
                        fontSize: isMobile ? '14px' : '16px', 
                        fontWeight: '600', 
                        color: '#333',
                        margin: 0,
                        lineHeight: '1.3'
                      }}>
                        {item.title}
                      </h6>
                      <span style={{
                        fontSize: isMobile ? '11px' : '12px',
                        color: '#666',
                        background: '#f5f5f5',
                        padding: isMobile ? '2px 6px' : '2px 8px',
                        borderRadius: '12px',
                        fontWeight: '500'
                      }}>
                        {item.subtitle}
                      </span>
                    </div>
                    
                    <p style={{ 
                      fontSize: isMobile ? '12px' : '13px', 
                      color: '#666', 
                      marginBottom: isMobile ? '10px' : '12px',
                      lineHeight: '1.4',
                      margin: isMobile ? '0 0 10px 0' : '0 0 12px 0'
                    }}>
                      {item.description}
                    </p>
                    
                    {/* Price and Add Button */}
                    <div style={{ 
                      display: 'flex', 
                      justifyContent: 'space-between', 
                      alignItems: 'center',
                      gap: isMobile ? '6px' : '8px'
                    }}>
                      <span style={{ 
                        fontSize: isMobile ? '14px' : '16px', 
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
                          padding: isMobile ? '6px 12px' : '6px 16px',
                          borderRadius: '6px',
                          textDecoration: 'none',
                          fontSize: isMobile ? '11px' : '13px',
                          fontWeight: '600',
                          border: 'none',
                          cursor: !hasThaliInCart ? 'not-allowed' : 'pointer',
                          transition: 'all 0.3s ease',
                          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                          height: isMobile ? '30px' : '32px',
                          minWidth: isMobile ? '70px' : '80px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          opacity: !hasThaliInCart ? 0.6 : 1
                        }}
                      >
                        {!hasThaliInCart ? (isMobile ? 'Add Thali' : 'Add Thali First') : 'Add'}
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
