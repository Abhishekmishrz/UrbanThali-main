import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';
// internal
import { CloseTwo } from '@/svg';
// Logo path
import MobileMenus from './mobile-menus';
import { userLoggedOut } from '@/redux/features/auth/authSlice';
import { notifySuccess } from '@/utils/toast';

const OffCanvas = ({ isOffCanvasOpen, setIsCanvasOpen }) => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const router = useRouter();
  
  const handleLogout = () => {
    dispatch(userLoggedOut());
    notifySuccess('Logged out successfully');
    setIsCanvasOpen(false);
    router.push('/');
  };
  return (
    <>
      <div className={`offcanvas__area offcanvas__radius ${isOffCanvasOpen ? "offcanvas-opened" : ""}`}>
        <div className="offcanvas__wrapper">
          <div className="offcanvas__close">
            <button onClick={() => setIsCanvasOpen(false)} className="offcanvas__close-btn offcanvas-close-btn">
              <CloseTwo />
            </button>
          </div>
          <div className="offcanvas__content">
            <div className="offcanvas__top mb-40 d-flex justify-content-between align-items-center">
              <div className="offcanvas__logo logo">
                <Link href="/">
                  <Image 
                    src="/assets/img/logo/urban-thali-logo.png" 
                    alt="Urban Thali Logo" 
                    width={150}
                    height={60}
                    style={{ 
                      height: 'auto', 
                      width: '100%', 
                      maxWidth: '150px',
                      maxHeight: '50px',
                      objectFit: 'contain'
                    }}
                  />
                </Link>
              </div>
            </div>
            <div className="tp-main-menu-mobile fix d-lg-none mb-40">
              <MobileMenus />
            </div>
            
            
            {/* User Account Section */}
            <div className="offcanvas__account mb-30">
              {user ? (
                <div className="offcanvas__user">
                  <div className="offcanvas__user-info mb-20 pb-20" style={{borderBottom: '1px solid #e5e5e5'}}>
                    <div className="d-flex align-items-center mb-10">
                      <div style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        background: '#FCB53B',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        fontWeight: 'bold',
                        marginRight: '10px'
                      }}>
                        {user.name?.[0]?.toUpperCase() || 'U'}
                      </div>
                      <div>
                        <h5 className="mb-0">{user.name}</h5>
                        <p className="mb-0" style={{fontSize: '12px', color: '#666'}}>{user.email}</p>
                      </div>
                    </div>
                  </div>
                  <div className="offcanvas__user-links">
                    <Link href="/profile" onClick={() => setIsCanvasOpen(false)} className="d-block py-2">
                      <i className="fa-regular fa-user me-2"></i> My Profile
                    </Link>
                    <Link href="/profile#orders" onClick={() => setIsCanvasOpen(false)} className="d-block py-2">
                      <i className="fa-regular fa-bag-shopping me-2"></i> My Orders
                    </Link>
                    <button onClick={handleLogout} className="d-block py-2 w-100 text-start" style={{background: 'none', border: 'none', color: '#ef4444'}}>
                      <i className="fa-regular fa-sign-out me-2"></i> Logout
                    </button>
                  </div>
                </div>
              ) : (
                <div className="offcanvas__auth-links">
                  <Link href="/login" onClick={() => setIsCanvasOpen(false)} className="tp-btn w-100 mb-10" style={{
                    backgroundColor: '#FCB53B',
                    color: 'white',
                    border: 'none',
                    padding: '12px 20px',
                    borderRadius: '6px',
                    textAlign: 'center',
                    textDecoration: 'none',
                    fontSize: '16px',
                    fontWeight: '600',
                    display: 'block',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseOver={(e) => {
                    e.target.style.backgroundColor = '#B45253';
                  }}
                  onMouseOut={(e) => {
                    e.target.style.backgroundColor = '#FCB53B';
                  }}>
                    Login
                  </Link>
                  <Link href="/register" onClick={() => setIsCanvasOpen(false)} className="tp-btn tp-btn-border w-100" style={{
                    backgroundColor: 'white',
                    color: '#FCB53B',
                    border: '2px solid #FCB53B',
                    padding: '12px 20px',
                    borderRadius: '6px',
                    textAlign: 'center',
                    textDecoration: 'none',
                    fontSize: '16px',
                    fontWeight: '600',
                    display: 'block',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseOver={(e) => {
                    e.target.style.backgroundColor = '#FCB53B';
                    e.target.style.color = 'white';
                  }}
                  onMouseOut={(e) => {
                    e.target.style.backgroundColor = 'white';
                    e.target.style.color = '#FCB53B';
                  }}>
                    Register
                  </Link>
                </div>
              )}
            </div>

            <div className="offcanvas__btn">
              <Link href="/contact" className="tp-btn-2 tp-btn-border-2" style={{
                backgroundColor: 'white',
                color: '#FCB53B',
                border: '2px solid #FCB53B',
                padding: '12px 20px',
                borderRadius: '6px',
                textAlign: 'center',
                textDecoration: 'none',
                fontSize: '16px',
                fontWeight: '600',
                display: 'block',
                transition: 'all 0.3s ease'
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = '#FCB53B';
                e.target.style.color = 'white';
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = 'white';
                e.target.style.color = '#FCB53B';
              }}>Contact Us</Link>
            </div>
          </div>
        </div>
      </div>
      {/* body overlay start */}
      <div onClick={() => setIsCanvasOpen(false)} className={`body-overlay ${isOffCanvasOpen ? 'opened' : ''}`}></div>
      {/* body overlay end */}
    </>
  );
};

export default OffCanvas;