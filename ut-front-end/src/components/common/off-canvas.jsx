import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';
import useCartInfo from '@/hooks/use-cart-info';
// internal
import { CloseTwo } from '@/svg';
import logo from '@assets/img/logo/logo.svg';
import urban_thali_logo from '@assets/img/logo/urban-thali-logo.png';
import contact_img from '@assets/img/icon/contact.png';
import language_img from '@assets/img/icon/language-flag.png';
import MobileCategory from '@/layout/headers/header-com/mobile-category';
import MobileMenus from './mobile-menus';
import { userLoggedOut } from '@/redux/features/auth/authSlice';

const OffCanvas = ({ isOffCanvasOpen, setIsCanvasOpen,categoryType = "electronics" }) => {
  const [isCategoryActive, setIsCategoryActive] = useState(false);
  const [isCurrencyActive, setIsCurrencyActive] = useState(false);
  const [isLanguageActive, setIsLanguageActive] = useState(false);
  const { user } = useSelector((state) => state.auth);
  const { wishlist } = useSelector((state) => state.wishlist);
  const { quantity } = useCartInfo();
  const dispatch = useDispatch();
  const router = useRouter();
  
  const handleLogout = () => {
    dispatch(userLoggedOut());
    setIsCanvasOpen(false);
    router.push('/');
  };

  // handle language active
  const handleLanguageActive = () => {
    setIsLanguageActive(!isLanguageActive)
    setIsCurrencyActive(false)
  }
  // handle Currency active
  const handleCurrencyActive = () => {
    setIsCurrencyActive(!isCurrencyActive)
    setIsLanguageActive(false)
  }
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
                    src={urban_thali_logo} 
                    alt="Urban Thali Logo" 
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
            <div className="offcanvas__category pb-40">
              <button onClick={() => setIsCategoryActive(!isCategoryActive)} className="tp-offcanvas-category-toggle">
                <i className="fa-solid fa-bars"></i>
                All Categories
              </button>
              <div className="tp-category-mobile-menu">
                <nav className={`tp-category-menu-content ${isCategoryActive ? "active" : ""}`}>
                  <MobileCategory categoryType={categoryType} isCategoryActive={isCategoryActive} />
                </nav>
              </div>
            </div>
            <div className="tp-main-menu-mobile fix d-lg-none mb-40">
              <MobileMenus />
            </div>
            
            {/* Quick Links for Mobile */}
            <div className="offcanvas__quick-links mb-30 d-sm-none">
              <div className="d-flex justify-content-around" style={{ borderTop: '1px solid #e5e7eb', borderBottom: '1px solid #e5e7eb', padding: '15px 0' }}>
                <Link href="/cart" onClick={() => setIsCanvasOpen(false)} className="text-center" style={{ position: 'relative', textDecoration: 'none', color: 'inherit' }}>
                  <i className="fa-regular fa-cart-shopping" style={{ fontSize: '20px', display: 'block', marginBottom: '5px' }}></i>
                  <span style={{ fontSize: '12px' }}>Cart</span>
                  {quantity > 0 && (
                    <span style={{
                      position: 'absolute',
                      top: '-5px',
                      right: '-8px',
                      background: '#FCB53B',
                      color: 'white',
                      borderRadius: '50%',
                      width: '18px',
                      height: '18px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '10px',
                      fontWeight: 'bold'
                    }}>{quantity}</span>
                  )}
                </Link>
                <Link href="/wishlist" onClick={() => setIsCanvasOpen(false)} className="text-center" style={{ position: 'relative', textDecoration: 'none', color: 'inherit' }}>
                  <i className="fa-regular fa-heart" style={{ fontSize: '20px', display: 'block', marginBottom: '5px' }}></i>
                  <span style={{ fontSize: '12px' }}>Wishlist</span>
                  {wishlist.length > 0 && (
                    <span style={{
                      position: 'absolute',
                      top: '-5px',
                      right: '-8px',
                      background: '#FCB53B',
                      color: 'white',
                      borderRadius: '50%',
                      width: '18px',
                      height: '18px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '10px',
                      fontWeight: 'bold'
                    }}>{wishlist.length}</span>
                  )}
                </Link>
                <Link href="/compare" onClick={() => setIsCanvasOpen(false)} className="text-center" style={{ textDecoration: 'none', color: 'inherit' }}>
                  <i className="fa-regular fa-code-compare" style={{ fontSize: '20px', display: 'block', marginBottom: '5px' }}></i>
                  <span style={{ fontSize: '12px' }}>Compare</span>
                </Link>
              </div>
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
                    <Link href="/wishlist" onClick={() => setIsCanvasOpen(false)} className="d-block py-2">
                      <i className="fa-regular fa-heart me-2"></i> Wishlist
                    </Link>
                    <button onClick={handleLogout} className="d-block py-2 w-100 text-start" style={{background: 'none', border: 'none', color: '#ef4444'}}>
                      <i className="fa-regular fa-sign-out me-2"></i> Logout
                    </button>
                  </div>
                </div>
              ) : (
                <div className="offcanvas__auth-links">
                  <Link href="/login" onClick={() => setIsCanvasOpen(false)} className="tp-btn w-100 mb-10">
                    Login
                  </Link>
                  <Link href="/register" onClick={() => setIsCanvasOpen(false)} className="tp-btn tp-btn-border w-100">
                    Register
                  </Link>
                </div>
              )}
            </div>

            <div className="offcanvas__contact align-items-center d-none">
              <div className="offcanvas__contact-icon mr-20">
                <span>
                  <Image src={contact_img} alt="contact_img" />
                </span>
              </div>
              <div className="offcanvas__contact-content">
                <h3 className="offcanvas__contact-title">
                  <a href="tel:098-852-987">004524865</a>
                </h3>
              </div>
            </div>
            <div className="offcanvas__btn">
              <Link href="/contact" className="tp-btn-2 tp-btn-border-2">Contact Us</Link>
            </div>
          </div>
          <div className="offcanvas__bottom">
            <div className="offcanvas__footer d-flex align-items-center justify-content-between">
              <div className="offcanvas__currency-wrapper currency">
                <span onClick={handleCurrencyActive} className="offcanvas__currency-selected-currency tp-currency-toggle" id="tp-offcanvas-currency-toggle">Currency : INR</span>
                <ul className={`offcanvas__currency-list tp-currency-list ${isCurrencyActive ? 'tp-currency-list-open' : ''}`}>
                  <li>USD</li>
                  <li>ERU</li>
                  <li>BDT </li>
                  <li>INR</li>
                </ul>
              </div>
              <div className="offcanvas__select language">
                <div className="offcanvas__lang d-flex align-items-center justify-content-md-end">
                  <div className="offcanvas__lang-img mr-15">
                    <Image src={language_img} alt="language-flag" />
                  </div>
                  <div className="offcanvas__lang-wrapper">
                    <span onClick={handleLanguageActive} className="offcanvas__lang-selected-lang tp-lang-toggle" id="tp-offcanvas-lang-toggle">English</span>
                    <ul className={`offcanvas__lang-list tp-lang-list ${isLanguageActive ? 'tp-lang-list-open' : ''}`}>
                      <li>Spanish</li>
                      <li>Portugese</li>
                      <li>American</li>
                      <li>Canada</li>
                    </ul>
                  </div>
                </div>
              </div>
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