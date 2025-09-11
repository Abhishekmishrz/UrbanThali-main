'use client';
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { add_cart_product } from "@/redux/features/cartSlice";
import { useGetAllProductsQuery } from "@/redux/features/productApi";

const BestSellingThalis = () => {
  const dispatch = useDispatch();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);
  
  // Fetch all food items from backend
  const { data: allProductsData, error, isLoading } = useGetAllProductsQuery();
  
  // handle add product
  const handleAddProduct = (product) => {
    dispatch(add_cart_product(product));
  };
  
  // Filter and get thali products from backend data
  const thaliProducts = React.useMemo(() => {
    if (!allProductsData?.data) return [];
    
    // Filter products for thali category and get featured ones
    const thalis = allProductsData.data.filter(product => 
      product.category?.name?.toLowerCase().includes('thali') || 
      product.foodType === 'thali' ||
      product.thaliType ||
      product.featured === true
    ).slice(0, 5); // Get first 5 for best selling
    
    // Map backend data to frontend format
    return thalis.map(product => ({
      ...product,
      id: product._id,
      title: product.name || product.title,
      subtitle: product.thaliType || 'Thali',
      rating: 4.5, // Default rating, can be calculated from reviews
      prepTime: `${product.preparationTime || 25} min`,
      servings: `${product.unit === 'plate' ? '1-2' : '2-3'} servings`,
      image: product.img,
      description: product.description
    }));
  }, [allProductsData]);
  
  // Fallback static data if backend is not available
  const fallbackThaliProducts = [
    {
      _id: "thali-1",
      id: "thali-1",
      title: "Mini Urban Thali",
      subtitle: "Mini",
      rating: 4.5,
      prepTime: "15 min",
      servings: "1 serving",
      price: 139,
      img: "/assets/img/product/collection/collection-1.jpg",
      image: "/assets/img/product/collection/collection-1.jpg",
      description: "1 Veg Curry (Dal/Chole/Rajma), Steamed Rice / 2 Roti, Salad + Papad",
      category: "thali",
      quantity: 100,
      status: "available"
    },
    {
      _id: "thali-2",
      id: "thali-2",
      title: "Everyday Thali",
      subtitle: "Everyday",
      rating: 4.6,
      prepTime: "20 min",
      servings: "2 servings",
      price: 169,
      img: "/assets/img/product/collection/collection-2.jpg",
      image: "/assets/img/product/collection/collection-2.jpg",
      description: "2 Veg Curries (Dal + Seasonal Veg), 2 Roti + Steamed Rice, Salad + Pickle",
      category: "thali",
      quantity: 100,
      status: "available"
    },
    {
      _id: "thali-3",
      id: "thali-3",
      title: "Urban Premium Thali",
      subtitle: "Premium",
      rating: 4.7,
      prepTime: "25 min",
      servings: "2 servings",
      price: 199,
      img: "/assets/img/product/collection/collection-3.jpg",
      image: "/assets/img/product/collection/collection-3.jpg",
      description: "2 Veg Curries (Dal + Paneer/Seasonal Veg), 2 Roti / 2 Parathas + Steamed Rice, Curd + Salad + Sweet",
      category: "thali",
      quantity: 100,
      status: "available"
    }
  ];
  
  // Use backend data if available, otherwise fallback
  const displayProducts = thaliProducts.length > 0 ? thaliProducts : fallbackThaliProducts;

  return (
    <section className="tp-product-area pt-60 pb-60" style={{
      marginLeft: '0', 
      marginRight: '0', 
      paddingLeft: '0', 
      paddingRight: '0',
      paddingTop: isMobile ? '40px' : '60px',
      paddingBottom: isMobile ? '40px' : '60px'
    }}>
      <div className="container-fluid" style={{paddingLeft: '0', paddingRight: '0'}}>
        <div className="row" style={{marginLeft: '0', marginRight: '0'}}>
          <div className="col-xl-12" style={{paddingLeft: '0', paddingRight: '0'}}>
            <div className="tp-section-title-wrapper-3 mb-30 text-center" style={{
              paddingLeft: isMobile ? '15px' : '20px', 
              paddingRight: isMobile ? '15px' : '20px',
              marginBottom: isMobile ? '20px' : '30px'
            }}>
              <h3 className="tp-section-title-3" style={{
                fontSize: isMobile ? '1.8rem' : '2.5rem', 
                fontWeight: 'bold', 
                marginBottom: '15px'
              }}>
                Best Selling Thalis
              </h3>
              <p style={{
                fontSize: isMobile ? '14px' : '16px', 
                color: '#666', 
                maxWidth: '600px', 
                margin: '0 auto',
                paddingLeft: isMobile ? '10px' : '0',
                paddingRight: isMobile ? '10px' : '0'
              }}>
                Discover our premium thali collection, from mini portions to luxury gold thalis, carefully curated for every appetite
              </p>
            </div>
          </div>
        </div>
        
        {isLoading && (
          <div className="row" style={{ marginLeft: '0', marginRight: '0', textAlign: 'center', padding: '40px' }}>
            <div>Loading delicious thalis...</div>
          </div>
        )}
        
        {error && (
          <div className="row" style={{ marginLeft: '0', marginRight: '0', textAlign: 'center', padding: '40px' }}>
            <div style={{ color: '#ef4444' }}>Unable to load thalis. Using sample menu.</div>
          </div>
        )}
        
        <div className="row" style={{ 
          marginLeft: '0', 
          marginRight: '0', 
          display: 'grid',
          gridTemplateColumns: isMobile 
            ? 'repeat(auto-fit, minmax(280px, 1fr))' 
            : 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: isMobile ? '16px' : '20px', 
          paddingLeft: isMobile ? '15px' : '20px', 
          paddingRight: isMobile ? '15px' : '20px',
          justifyItems: 'stretch'
        }}>
          {displayProducts.map((product) => (
            <div key={product.id} style={{ 
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
                      backgroundImage: `url(${product.image})`,
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
                    <Link href={`/product-details/${product.id}`} style={{color: 'inherit', textDecoration: 'none'}}>
                      {product.title}
                    </Link>
                  </h3>

                  <p style={{
                    fontSize: isMobile ? '13px' : '14px',
                    color: '#6b7280',
                    marginBottom: isMobile ? '6px' : '4px',
                    fontWeight: '500'
                  }}>
                    {product.subtitle}
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
                            fill={i < Math.floor(product.rating) ? '#ffc107' : '#e5e7eb'}
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
                        {product.rating}
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
                      <span>{product.prepTime}</span>
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
                      <span>{product.servings}</span>
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
                      Indian, Thali, Traditional
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
                        ₹{product.price}
                      </span>
                    </div>
                    <div>
                      <button
                        onClick={() => handleAddProduct(product)}
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
      </div>
    </section>
  );
};

export default BestSellingThalis;

