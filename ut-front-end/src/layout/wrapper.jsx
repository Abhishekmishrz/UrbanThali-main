'use client'
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import dynamic from 'next/dynamic';

// internal
import BackToTopCom from "@/components/common/back-to-top";
import ProductModal from "@/components/common/product-modal/index";
import {get_cart_products,initialOrderQuantity} from "@/redux/features/cartSlice";
import { get_wishlist_products } from "@/redux/features/wishlist-slice";
import { get_compare_products } from "@/redux/features/compareSlice";
import useAuthCheck from "@/hooks/use-auth-check";
import Loader from "@/components/loader/loader";

// Dynamic import of ToastContainer with no SSR
const ToastContainer = dynamic(
  () => import('@/components/toast-wrapper'),
  { ssr: false }
);

const Wrapper = ({ children }) => {
  const { productItem } = useSelector((state) => state.productModal);
  const dispatch = useDispatch();
  const authChecked = useAuthCheck();

  useEffect(() => {
    dispatch(get_cart_products());
    dispatch(get_wishlist_products());
    dispatch(get_compare_products());
    dispatch(initialOrderQuantity());
  }, [dispatch]);

  return !authChecked ? (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{ height: "100vh" }}
      suppressHydrationWarning
    >
      <Loader spinner="fade" loading={!authChecked} />
    </div>
  ) : (
    <div id="wrapper" suppressHydrationWarning>
      {children}
      <BackToTopCom />
      <ToastContainer />
      {/* product modal start */}
      {productItem && <ProductModal />}
      {/* product modal end */}
    </div>
  );
};

export default Wrapper;
