'use client';
import React from 'react';
import { getThaliById } from '@/data/thali-products';
import ThaliDetailsContent from './thali-details-content';
import ErrorMsg from '../common/error-msg';

const ThaliDetailsArea = ({ id }) => {
  const thali = getThaliById(id);
  
  if (!thali) {
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

  return <ThaliDetailsContent thali={thali} />;
};

export default ThaliDetailsArea;
