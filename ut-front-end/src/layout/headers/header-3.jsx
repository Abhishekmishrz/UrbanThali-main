'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// internal
import urban_thali_logo from '@assets/img/logo/urban-thali-logo.png';
import { CartTwo, Menu, Search } from '@/svg';
import Menus from './header-com/menus';
import useSticky from '@/hooks/use-sticky';
import SearchBar from './header-com/search-bar';
import OffCanvas from '@/components/common/off-canvas';
import CartMiniSidebar from '@/components/common/cart-mini-sidebar';
import useCartInfo from '@/hooks/use-cart-info';
import { openCartMini } from '@/redux/features/cartSlice';
import TopNavbar from './header-com/top-navbar';
import UserDropdown from '@/components/common/user-dropdown';

const HeaderThree = ({ fixed = true, hideNavbar = false }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isOffCanvasOpen, setIsCanvasOpen] = useState(false);
  const { quantity } = useCartInfo();
  const { sticky } = useSticky();
  const dispatch = useDispatch();
  if (hideNavbar) {
    return null;
  }

  // Mobile responsive styles
  const headerStyles = {
    position: fixed ? 'fixed' : 'relative',
    top: fixed ? '45px' : '0',
    left: 0,
    right: 0,
    zIndex: fixed ? 999 : 'auto',
    width: '100%',
    minHeight: '60px',
    backgroundColor: 'white',
    boxShadow: sticky ? '0 2px 10px rgba(0,0,0,0.1)' : 'none'
  };

  const headerContentStyles = {
    padding: '10px 15px',
    '@media (min-width: 768px)': {
      padding: '15px 30px'
    }
  };

  return (
    <>
      <header>
        {/* Top Navbar */}
        <TopNavbar />
        
        <div id="header-sticky" className={`tp-header-area tp-header-style-transparent-white tp-header-transparent tp-header-sticky has-dark-logo tp-header-height ${sticky ? 'header-sticky' : ''}`} style={headerStyles}>
          <div className="tp-header-bottom-3" style={{ padding: '10px 15px', minHeight: '50px', display: 'flex', alignItems: 'center' }}>
            <div className="container-fluid">
              <div className="row align-items-center">
                <div className="col-6 col-sm-4 col-lg-2">
                  <div className="logo">
                    <Link href="/">
                      <Image 
                        src={urban_thali_logo} 
                        alt="Urban Thali Logo" 
                        style={{ 
                          height: 'auto', 
                          width: '100%', 
                          maxWidth: '180px',
                          maxHeight: '60px',
                          objectFit: 'contain'
                        }} 
                      />
                    </Link>
                  </div>
                </div>
                <div className="col-xl-8 col-lg-8 d-none d-lg-block">
                  <div className="main-menu menu-style-3 p-relative d-flex align-items-center justify-content-center">
                    <nav className="tp-main-menu-content">
                      <Menus />
                    </nav>
                  </div>
                </div>
                <div className="col-6 col-sm-8 col-lg-2">
                  <div className="tp-header-action d-flex align-items-center justify-content-end">
                    {/* Cart - visible on mobile, tablet and desktop */}
                    <div className="tp-header-action-item">
                      <button onClick={() => dispatch(openCartMini())} type="button" className="tp-header-action-btn cartmini-open-btn">
                        <CartTwo />
                        <span className="tp-header-action-badge">{quantity}</span>
                      </button>
                    </div>
                    {/* User dropdown - visible on tablet and desktop */}
                    <div className="tp-header-action-item d-none d-sm-block">
                      <UserDropdown />
                    </div>
                    {/* Mobile menu button - visible on mobile and tablet */}
                    <div className="tp-header-action-item d-lg-none">
                      <button onClick={() => setIsCanvasOpen(true)} type="button" className="tp-header-action-btn tp-offcanvas-open-btn">
                        <Menu />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* search bar start */}
      <SearchBar isSearchOpen={isSearchOpen} setIsSearchOpen={setIsSearchOpen} />
      {/* search bar end */}

      {/* cart mini sidebar start */}
      <CartMiniSidebar />
      {/* cart mini sidebar end */}

      {/* off canvas start */}
      <OffCanvas isOffCanvasOpen={isOffCanvasOpen} setIsCanvasOpen={setIsCanvasOpen} categoryType="beauty" />
      {/* off canvas end */}
    </>
  );
};

export default HeaderThree;