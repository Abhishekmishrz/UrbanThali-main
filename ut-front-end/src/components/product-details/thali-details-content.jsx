// 'use client';
// import React, { useState } from 'react';
// import Link from 'next/link';
// import { useDispatch, useSelector } from 'react-redux';
// import { add_cart_product } from '@/redux/features/cartSlice';

// const ThaliDetailsContent = ({ thali }) => {
//   const dispatch = useDispatch();
//   const { cart_products } = useSelector((state) => state.cart);
//   const [quantity, setQuantity] = useState(1);

//   // Allow unlimited additions to cart
//   const isInCart = false;

//   const handleAddToCart = () => {
//     const productToAdd = {
//       ...thali,
//       orderQuantity: quantity
//     };
//     dispatch(add_cart_product(productToAdd));
//   };

//   const handleQuantityChange = (change) => {
//     const newQuantity = quantity + change;
//     if (newQuantity >= 1 && newQuantity <= 50) {
//       setQuantity(newQuantity);
//     }
//   };

//   return (
//     <div style={{ 
//       paddingTop: '80px', 
//       paddingBottom: '40px', 
//       backgroundColor: '#FFF9E6',
//       minHeight: 'auto'
//     }}>
//       <div className="container" style={{ maxWidth: '900px' }}>
//         <div className="row">
//           {/* Breadcrumb */}
//           <div className="col-12 mb-4">
//             <nav aria-label="breadcrumb">
//               <ol className="breadcrumb" style={{ backgroundColor: 'transparent', padding: 0 }}>
//                 <li className="breadcrumb-item">
//                   <Link href="/" style={{ color: '#FCB53B', textDecoration: 'none' }}>Home</Link>
//                 </li>
//                 <li className="breadcrumb-item">
//                   <Link href="/menu" style={{ color: '#FCB53B', textDecoration: 'none' }}>Menu</Link>
//                 </li>
//                 <li className="breadcrumb-item active" aria-current="page" style={{ color: '#6b7280' }}>
//                   {thali.title}
//                 </li>
//               </ol>
//             </nav>
//           </div>

//           {/* Product Details */}
//           <div className="col-12">
//             <div style={{
//               backgroundColor: 'white',
//               borderRadius: '16px',
//               boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
//               overflow: 'hidden'
//             }}>
//               <div className="row g-0" style={{ alignItems: 'stretch' }}>
//                 {/* Product Image */}
//                 <div className="col-md-4" style={{ display: 'flex' }}>
//                   <div style={{
//                     height: '100%',
//                     minHeight: '400px',
//                     backgroundImage: `url(${thali.image})`,
//                     backgroundSize: 'cover',
//                     backgroundPosition: 'center',
//                     position: 'relative',
//                     width: '100%'
//                   }}>
//                   </div>
//                 </div>

//                 {/* Product Info */}
//                 <div className="col-md-8" style={{ display: 'flex' }}>
//                   <div style={{ padding: '30px', width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
//                     {/* Main Content Area */}
//                     <div style={{ flex: 1 }}>
//                       {/* Title and Subtitle */}
//                       <div style={{ marginBottom: '15px' }}>
//                         <h1 style={{
//                           fontSize: '2rem',
//                           fontWeight: '700',
//                           color: '#1f2937',
//                           marginBottom: '5px'
//                         }}>
//                           {thali.title}
//                         </h1>
//                         <p style={{
//                           fontSize: '1.1rem',
//                           color: '#FCB53B',
//                           fontWeight: '600',
//                           margin: 0
//                         }}>
//                           {thali.subtitle}
//                         </p>
//                       </div>

//                       {/* Price */}
//                       <div style={{ marginBottom: '15px' }}>
//                         <span style={{
//                           fontSize: '1.8rem',
//                           fontWeight: '700',
//                           color: '#FCB53B'
//                         }}>
//                           ₹{thali.price}
//                         </span>
//                       </div>

//                       {/* Description */}
//                       <div style={{ marginBottom: '20px' }}>
//                         <p style={{
//                           fontSize: '1rem',
//                           color: '#6b7280',
//                           lineHeight: '1.5',
//                           margin: 0
//                         }}>
//                           {thali.description}
//                         </p>
//                       </div>

//                       {/* Items Included */}
//                       <div style={{ marginBottom: '20px' }}>
//                         <h3 style={{
//                           fontSize: '1.1rem',
//                           fontWeight: '600',
//                           color: '#1f2937',
//                           marginBottom: '10px'
//                         }}>
//                           What's Included:
//                         </h3>
//                         <ul style={{ paddingLeft: '0', listStyle: 'none', margin: 0 }}>
//                           {thali.items.map((item, index) => (
//                             <li key={index} style={{
//                               display: 'flex',
//                               alignItems: 'center',
//                               marginBottom: '5px',
//                               fontSize: '0.9rem',
//                               color: '#4b5563'
//                             }}>
//                               <span style={{
//                                 color: '#FCB53B',
//                                 marginRight: '8px',
//                                 fontSize: '1rem'
//                               }}>
//                                 •
//                               </span>
//                               {item}
//                             </li>
//                           ))}
//                         </ul>
//                       </div>


//                       {/* Product Details */}
//                       <div style={{ marginBottom: '20px' }}>
//                         <div className="row">
//                           <div className="col-6">
//                             <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
//                               <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" style={{ width: '16px', height: '16px', color: '#FCB53B', marginRight: '6px' }}>
//                                 <circle cx="12" cy="12" r="10"/>
//                                 <polyline points="12,6 12,12 16,14"/>
//                               </svg>
//                               <span style={{ color: '#6b7280', fontSize: '0.85rem' }}>
//                                 {thali.prepTime}
//                               </span>
//                             </div>
//                           </div>
//                           <div className="col-6">
//                             <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
//                               <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" style={{ width: '16px', height: '16px', color: '#FCB53B', marginRight: '6px' }}>
//                                 <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
//                                 <circle cx="9" cy="7" r="4"/>
//                                 <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
//                                 <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
//                               </svg>
//                               <span style={{ color: '#6b7280', fontSize: '0.85rem' }}>
//                                 {thali.servings}
//                               </span>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>

//                     {/* Bottom Section - Quantity and Add to Cart */}
//                     <div style={{
//                       display: 'flex',
//                       alignItems: 'center',
//                       gap: '10px',
//                       flexWrap: 'wrap',
//                       marginTop: 'auto',
//                       paddingTop: '15px',
//                       borderTop: '1px solid #e5e7eb'
//                     }}>
//                       {/* Quantity Selector */}
//                       <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
//                         <span style={{ color: '#6b7280', fontWeight: '500', fontSize: '0.85rem' }}>Qty:</span>
//                         <div style={{
//                           display: 'flex',
//                           alignItems: 'center',
//                           border: '1px solid #e5e7eb',
//                           borderRadius: '4px',
//                           overflow: 'hidden'
//                         }}>
//                           <button
//                             onClick={() => handleQuantityChange(-1)}
//                             style={{
//                               backgroundColor: '#f9fafb',
//                               border: 'none',
//                               padding: '4px 8px',
//                               cursor: 'pointer',
//                               color: '#6b7280',
//                               fontSize: '12px',
//                               fontWeight: '600'
//                             }}
//                           >
//                             -
//                           </button>
//                           <span style={{
//                             padding: '4px 8px',
//                             backgroundColor: 'white',
//                             color: '#1f2937',
//                             fontSize: '12px',
//                             fontWeight: '600',
//                             minWidth: '30px',
//                             textAlign: 'center'
//                           }}>
//                             {quantity}
//                           </span>
//                           <button
//                             onClick={() => handleQuantityChange(1)}
//                             style={{
//                               backgroundColor: '#f9fafb',
//                               border: 'none',
//                               padding: '4px 8px',
//                               cursor: 'pointer',
//                               color: '#6b7280',
//                               fontSize: '12px',
//                               fontWeight: '600'
//                             }}
//                           >
//                             +
//                           </button>
//                         </div>
//                       </div>

//                       {/* Add to Cart Button */}
//                       <button
//                         onClick={handleAddToCart}
//                         style={{
//                           backgroundColor: '#FCB53B',
//                           color: 'white',
//                           padding: '6px 16px',
//                           borderRadius: '4px',
//                           border: 'none',
//                           fontSize: '12px',
//                           fontWeight: '600',
//                           cursor: 'pointer',
//                           transition: 'all 0.3s ease',
//                           boxShadow: '0 1px 4px rgba(252, 181, 59, 0.3)',
//                           minWidth: '100px'
//                         }}
//                         onMouseOver={(e) => {
//                           e.target.style.backgroundColor = '#B45253';
//                         }}
//                         onMouseOut={(e) => {
//                           e.target.style.backgroundColor = '#FCB53B';
//                         }}
//                       >
//                         Add to Cart
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ThaliDetailsContent;
