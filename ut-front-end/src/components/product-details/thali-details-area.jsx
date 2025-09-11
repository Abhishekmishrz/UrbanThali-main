'use client';
import React from 'react';
import { useGetProductQuery, useGetRelatedProductsQuery } from '@/redux/features/productApi';
import ThaliDetailsContent from './thali-details-content';
import ErrorMsg from '../common/error-msg';

const ThaliDetailsArea = ({ id }) => {
  const { data: productData, error, isLoading } = useGetProductQuery(id);
  const { data: relatedData } = useGetRelatedProductsQuery(id);
  
  if (isLoading) {
    return (
      <div style={{ 
        paddingTop: '80px', 
        paddingBottom: '40px', 
        backgroundColor: '#FFF9E6',
        minHeight: '400px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div className="text-center">
          <div style={{fontSize: '18px', color: '#666'}}>Loading delicious thali...</div>
        </div>
      </div>
    );
  }
  
  if (error || !productData) {
    return (
      <div style={{ 
        paddingTop: '80px', 
        paddingBottom: '40px', 
        backgroundColor: '#FFF9E6',
        minHeight: 'auto'
      }}>
        <div className="container">
          <ErrorMsg msg="Thali not found" />
        </div>
      </div>
    );
  }

  // Transform backend data to match component expectations
  const thali = {
    ...productData,
    id: productData._id,
    title: productData.name,
    subtitle: productData.restaurant?.name || 'Restaurant',
    rating: 4.5, // Default rating, can be calculated from reviews
    prepTime: `${productData.preparationTime || 25} min`,
    servings: `${productData.unit === 'plate' ? '1-2' : '2-3'} servings`,
    image: productData.img,
    images: productData.imageURLs || [{ img: productData.img }],
    relatedProducts: relatedData?.data || []
  };

  return <ThaliDetailsContent thali={thali} />;
};

export default ThaliDetailsArea;
