import BackToTop from "@/lib/back-to-top";
import React, { useEffect } from "react";

function BackToTopCom({ cls }) {
  useEffect(() => {
    BackToTop(".back-to-top-wrapper");
  },[]);
  return (
    <div className={`back-to-top-wrapper ${cls || ""}`}>
      <button 
        id="back_to_top" 
        type="button" 
        className="back-to-top-btn"
        style={{
          backgroundColor: '#1f2937', // Dark gray/black theme color
          color: '#FCB53B', // Urban Thali orange for the icon
          border: 'none',
          borderRadius: '50%',
          width: '44px',
          height: '44px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          boxShadow: '0 4px 12px rgba(31, 41, 55, 0.3)',
          transition: 'all 0.3s ease',
          zIndex: 99
        }}
        onMouseOver={(e) => {
          e.target.style.backgroundColor = '#FCB53B';
          e.target.style.color = '#1f2937';
          e.target.style.transform = 'translateY(-2px)';
        }}
        onMouseOut={(e) => {
          e.target.style.backgroundColor = '#1f2937';
          e.target.style.color = '#FCB53B';
          e.target.style.transform = 'translateY(0)';
        }}
      >
        <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11 6L6 1L1 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </div>
  );
}

export default BackToTopCom;