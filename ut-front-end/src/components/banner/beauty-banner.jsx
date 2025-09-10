'use client';
import React, { useState } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade, Pagination } from "swiper/modules";
// internal
import slider_bg_1 from "@assets/img/slider/3/slider-1.jpg";
import slider_bg_2 from "@assets/img/slider/3/slider-2.jpg";
import slider_bg_3 from "@assets/img/slider/3/slider-3.jpg";
import { ArrowNext, ArrowPrev } from "@/svg";
import MenuModal from "@/components/common/menu-modal";

// slider setting
const slider_setting = {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  effect: "fade",
  navigation: {
    nextEl: ".tp-slider-3-button-next",
    prevEl: ".tp-slider-3-button-prev",
  },
  pagination: {
    el: ".tp-slider-3-dot",
    clickable: true,
  },
};

// slider data
const slider_data = [
  {
    id: 1,
    bg: slider_bg_1, // Will be replaced with ornate-brass-tray-thali.jpg
  },
  {
    id: 2,
    bg: slider_bg_2, // Will be replaced with banana-leaf-thali.jpg
  },
  {
    id: 3,
    bg: slider_bg_3, // Will be replaced with wooden-platter-thali.jpg
  },
];

const BeautyBanner = () => {
  const [isMenuModalOpen, setIsMenuModalOpen] = useState(false);

  return (
    <>
      <section className="tp-slider-area p-relative z-index-1" style={{ marginTop: '120px', paddingTop: '0' }}>
        <Swiper
          {...slider_setting}
          modules={[Navigation, EffectFade, Pagination]}
          className="tp-slider-active-3 swiper-container"
        >
          {slider_data.map((item) => (
            <SwiperSlide
              key={item.id}
              className="tp-slider-item-3 p-relative black-bg d-flex align-items-center"
              style={{height: '80vh', minHeight: '80vh', marginTop: '0', paddingTop: '0'}}
            >
              <div
                className="tp-slider-thumb-3 include-bg"
                style={{ backgroundImage: `url(${item.bg.src})` }}
              ></div>
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-xl-8 col-lg-10 col-md-12 text-center">
                    <div className="tp-slider-content-3">
                      <h3 className="tp-slider-title-3" style={{
                        fontSize: '3.5rem',
                        fontWeight: 'bold',
                        marginBottom: '20px',
                        lineHeight: '1.2'
                      }}>
                        <span style={{color: 'white'}}>Authentic</span>{' '}
                        <span style={{color: '#FCB53B'}}>Indian Thali</span>{' '}
                        <span style={{color: 'white'}}>Delivered Fresh</span>
                      </h3>
                      <p style={{
                        fontSize: '18px',
                        color: '#e5e7eb',
                        marginBottom: '30px',
                        maxWidth: '600px',
                        margin: '0 auto 30px auto'
                      }}>
                        Experience the rich flavors of traditional Indian cuisine with our carefully curated thalis, made with the finest ingredients and delivered hot to your doorstep.
                      </p>
                      <div className="tp-slider-btn-3 d-flex justify-content-center gap-3">
                        <button
                          type="button"
                          onClick={() => {
                            const menuSection = document.getElementById('menu-section');
                            if (menuSection) {
                              menuSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                            } else {
                              // Fallback: scroll to top of page if menu section not found
                              window.scrollTo({ top: 0, behavior: 'smooth' });
                            }
                          }}
                          className="tp-btn"
                          style={{
                            backgroundColor: '#FCB53B',
                            color: 'white',
                            padding: '12px 40px',
                            borderRadius: '8px',
                            textDecoration: 'none',
                            fontSize: '16px',
                            fontWeight: '600',
                            border: 'none',
                            display: 'inline-block',
                            minWidth: '140px',
                            textAlign: 'center',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                            boxShadow: '0 4px 8px rgba(252, 181, 59, 0.3)',
                            outline: 'none',
                            position: 'relative',
                            zIndex: 10,
                            opacity: 1,
                            visibility: 'visible'
                          }}
                          onMouseOver={(e) => {
                            e.target.style.backgroundColor = '#B45253';
                            e.target.style.transform = 'translateY(-2px)';
                          }}
                          onMouseOut={(e) => {
                            e.target.style.backgroundColor = '#FCB53B';
                            e.target.style.transform = 'translateY(0)';
                          }}
                        >
                          Order Now
                        </button>
                        <button
                          onClick={() => setIsMenuModalOpen(true)}
                          className="tp-btn"
                          style={{
                            backgroundColor: 'white',
                            color: 'black',
                            padding: '12px 40px',
                            borderRadius: '8px',
                            textDecoration: 'none',
                            fontSize: '16px',
                            fontWeight: '600',
                            border: '2px solid #e5e7eb',
                            display: 'inline-block',
                            minWidth: '140px',
                            textAlign: 'center',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                            outline: 'none',
                            position: 'relative',
                            zIndex: 10,
                            opacity: 1,
                            visibility: 'visible'
                          }}
                          onMouseOver={(e) => {
                            e.target.style.backgroundColor = '#f9fafb';
                            e.target.style.borderColor = '#FCB53B';
                            e.target.style.transform = 'translateY(-2px)';
                          }}
                          onMouseOut={(e) => {
                            e.target.style.backgroundColor = 'white';
                            e.target.style.borderColor = '#e5e7eb';
                            e.target.style.transform = 'translateY(0)';
                          }}
                        >
                          View Menu
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div className="tp-swiper-dot tp-slider-3-dot d-sm-none"></div>
          <div className="tp-slider-arrow-3 d-none d-sm-block">
            <button type="button" className="tp-slider-3-button-prev">
              <ArrowPrev />
            </button>
            <button type="button" className="tp-slider-3-button-next">
              <ArrowNext />
            </button>
          </div>
        </Swiper>
      </section>
      
      {/* Menu Modal */}
      <MenuModal 
        isOpen={isMenuModalOpen} 
        onClose={() => setIsMenuModalOpen(false)} 
      />
    </>
  );
};

export default BeautyBanner;
