'use client';
import React from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { add_cart_product } from "@/redux/features/cartSlice";

const BestSellingThalis = () => {
  const dispatch = useDispatch();
  const { cart_products } = useSelector((state) => state.cart);
  
  // handle add product
  const handleAddProduct = (product) => {
    dispatch(add_cart_product(product));
  };
  
  const thaliProducts = [
    {
      _id: "thali-1",
      id: 1,
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
      status: "in-stock"
    },
    {
      _id: "thali-2",
      id: 2,
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
      status: "in-stock"
    },
    {
      _id: "thali-3",
      id: 3,
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
      status: "in-stock"
    },
    {
      _id: "thali-4",
      id: 4,
      title: "Urban Feast Thali",
      subtitle: "Feast",
      rating: 4.8,
      prepTime: "30 min",
      servings: "2-3 servings",
      price: 249,
      img: "/assets/img/product/collection/collection-1.jpg",
      image: "/assets/img/product/collection/collection-1.jpg",
      description: "3 Veg Curries (Dal + Paneer + Seasonal Veg), 4 Roti / 2 paratha+ Jeera Rice, Salad + Papad + Pickle + Sweet",
      category: "thali",
      quantity: 100,
      status: "in-stock"
    },
    {
      _id: "thali-5",
      id: 5,
      title: "Maharaja Urban Thali",
      subtitle: "Maharaja",
      rating: 4.9,
      prepTime: "35 min",
      servings: "3-4 servings",
      price: 299,
      img: "/assets/img/product/collection/collection-2.jpg",
      image: "/assets/img/product/collection/collection-2.jpg",
      description: "4 Veg Curries (Dal + Paneer + Chhole/Rajma + Seasonal Veg), 4 Roti / 2 Naan / 2 parathas + Pulao/Jeera Rice, Raita + Salad + Papad + 2 Sweets",
      category: "thali",
      quantity: 100,
      status: "in-stock"
    }
  ];

  return (
    <section className="tp-product-area pt-60 pb-60" style={{marginLeft: '0', marginRight: '0', paddingLeft: '0', paddingRight: '0'}}>
      <div className="container-fluid" style={{paddingLeft: '0', paddingRight: '0'}}>
        <div className="row" style={{marginLeft: '0', marginRight: '0'}}>
          <div className="col-xl-12" style={{paddingLeft: '0', paddingRight: '0'}}>
            <div className="tp-section-title-wrapper-3 mb-30 text-center" style={{paddingLeft: '20px', paddingRight: '20px'}}>
              <h3 className="tp-section-title-3" style={{fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '15px'}}>
                Best Selling Thalis
              </h3>
              <p style={{fontSize: '16px', color: '#666', maxWidth: '600px', margin: '0 auto'}}>
                Discover our premium thali collection, from mini portions to luxury gold thalis, carefully curated for every appetite
              </p>
            </div>
          </div>
        </div>
        
        <div className="row" style={{ marginLeft: '0', marginRight: '0', display: 'flex', gap: '12px', paddingLeft: '20px', paddingRight: '20px' }}>
          {thaliProducts.map((product) => (
            <div key={product.id} style={{ width: 'calc(20% - 9.6px)', marginBottom: '30px' }}>
              <div style={{
                backgroundColor: 'white',
                borderRadius: '12px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                overflow: 'hidden',
                height: '100%',
                width: '100%'
              }}>
                {/* Product Image */}
                <div style={{height: '180px', overflow: 'hidden'}}>
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
                <div style={{padding: '12px'}}>
                  <h3 style={{
                    fontSize: '18px',
                    fontWeight: '700',
                    marginBottom: '2px',
                    color: '#1f2937'
                  }}>
                    <Link href={`/product-details/${product.id}`} style={{color: 'inherit', textDecoration: 'none'}}>
                      {product.title}
                    </Link>
                  </h3>

                  <p style={{
                    fontSize: '14px',
                    color: '#6b7280',
                    marginBottom: '4px',
                    fontWeight: '500'
                  }}>
                    {product.subtitle}
                  </p>

                  {/* Rating */}
                  <div style={{marginBottom: '4px'}}>
                    <div style={{display: 'flex', alignItems: 'center', gap: '4px'}}>
                      <div style={{display: 'flex', alignItems: 'center'}}>
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill={i < Math.floor(product.rating) ? '#ffc107' : '#e5e7eb'}
                            style={{marginRight: '2px'}}
                          >
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                          </svg>
                        ))}
                      </div>
                      <span style={{fontSize: '12px', color: '#6b7280', marginLeft: '4px'}}>
                        {product.rating}
                      </span>
                    </div>
                  </div>

                  {/* Product Details - Time and Servings */}
                  <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '4px'}}>
                    {/* Time */}
                    <div style={{display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: '#6b7280'}}>
                      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" style={{width: '16px', height: '16px'}}>
                        <circle cx="12" cy="12" r="10"/>
                        <polyline points="12,6 12,12 16,14"/>
                      </svg>
                      <span>{product.prepTime}</span>
                    </div>
                    
                    {/* Servings */}
                    <div style={{display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: '#6b7280'}}>
                      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" style={{width: '16px', height: '16px'}}>
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                        <circle cx="9" cy="7" r="4"/>
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                      </svg>
                      <span>{product.servings}</span>
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
                      Indian, Thali, Traditional
                    </span>
                  </div>

                  {/* Price and Add to Cart */}
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}>
                    <div>
                      <span style={{
                        fontSize: '20px',
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
                          padding: '6px 16px',
                          borderRadius: '6px',
                          textDecoration: 'none',
                          fontSize: '13px',
                          fontWeight: '600',
                          border: 'none',
                          cursor: 'pointer',
                          transition: 'all 0.3s ease',
                          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                          height: '32px',
                          minWidth: '80px',
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

