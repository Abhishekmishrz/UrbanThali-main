'use client';
import { useState } from "react";
import { useSelector } from "react-redux";

const CheckoutCoupon = ({ handleCouponCode, couponRef,couponApplyMsg }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { coupon_info } = useSelector((state) => state.coupon);
  return (
    <div className="tp-checkout-verify-item">
      {/* <p className="tp-checkout-verify-reveal">
        Have a coupon?{" "}
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="tp-checkout-coupon-form-reveal-btn"
        >
          Click here to enter your code
        </button>
      </p> */}

      {isOpen && (
        <div id="tpCheckoutCouponForm" className="tp-return-customer">
          <form onSubmit={handleCouponCode}>
            <div className="tp-return-customer-input">
              <label>Coupon Code :</label>
              <input ref={couponRef} type="text" placeholder="Coupon" />
            </div>
            <button
              type="submit"
              className="tp-return-customer-btn tp-checkout-btn"
              style={{
                backgroundColor: '#FCB53B',
                color: 'white',
                border: 'none',
                padding: '8px 16px',
                borderRadius: '6px',
                fontSize: '14px',
                fontWeight: '600',
                textAlign: 'center',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = '#B45253';
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = '#FCB53B';
              }}
            >
              Apply
            </button>
          </form>
          {couponApplyMsg && <p className="p-2" style={{color:'green'}}>{couponApplyMsg}</p>}
        </div>
      )}
    </div>
  );
};

export default CheckoutCoupon;
