'use client';
import React from 'react';
import { useGetFoodItemQuery } from '@/redux/features/productApi';
import ThaliDetailsContent from './thali-details-content';
import ErrorMsg from '../common/error-msg';
import PrdDetailsLoader from '../loader/prd-details-loader';

const ThaliDetailsArea = ({ id }) => {

  // Transform API data to match component expectations
  const transformApiData = (apiData) => {
    if (!apiData) return null;
    
    return {
      id: apiData._id,
      title: apiData.name,
      subtitle: apiData.children || apiData.parent,
      rating: apiData.rating || null,
      prepTime: apiData.preparationTime ? `${apiData.preparationTime} min` : null,
      servings: apiData.unit,
      price: apiData.price,
      image: apiData.img || apiData.imageURLs?.[0]?.img,
      description: apiData.description,
      category: apiData.category?.name,
      cuisine: apiData.cuisine,
      status: apiData.status === "available" ? "in-stock" : "out-of-stock",
      quantity: apiData.quantity,
      items: apiData.ingredients || [],
      features: apiData.tags || [],
      restaurant: apiData.restaurant?.name,
      sku: apiData.sku,
      discount: apiData.discount,
      spiceLevel: apiData.spiceLevel,
      foodType: apiData.foodType
    };
  };

  // Always fetch from API - no fallbacks
  const { data: apiThali, isLoading, isError } = useGetFoodItemQuery(id);
  
  // Transform API data
  const thali = transformApiData(apiThali);
  
  // decide what to render
  let content = null;
  if (isLoading) {
    content = <PrdDetailsLoader loading={isLoading} />;
  } else if (isError || !thali) {
    content = (
      <div style={{ 
        paddingTop: '80px', 
        paddingBottom: '40px', 
        backgroundColor: '#FFF9E6',
        minHeight: 'auto'
      }}>
        <div className="container">
          <ErrorMsg msg="Unable to load product details" />
        </div>
      </div>
    );
  } else {
    content = <ThaliDetailsContent thali={thali} />;
  }

  return <>{content}</>;
};

export default ThaliDetailsArea;
