'use client';
import React from "react";

const CommonBreadcrumb = ({
  title,
  subtitle,
  center = false,
  bg_clr = false,
}) => {
  return (
    <section
      className={`breadcrumb__area ${
        center ? "text-center" : ""
      } include-bg pb-50`}
      style={{ 
        backgroundColor: bg_clr && `#EFF1F5`,
        paddingTop: '20px' // Reduced padding to remove white space
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-xxl-12">
            <div className="breadcrumb__content p-relative z-index-1">
              <h3 className="breadcrumb__title">{title}</h3>
              <div className="breadcrumb__list">
                <span>
                  <a href="#">Home</a>
                </span>
                <span>{subtitle}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommonBreadcrumb;
