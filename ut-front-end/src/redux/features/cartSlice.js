import { createSlice } from "@reduxjs/toolkit";
import { getLocalStorage, setLocalStorage } from "@/utils/localstorage";
import { notifyError, notifySuccess } from "@/utils/toast";
import { addNotification } from "./notificationSlice";

const initialState = {
  cart_products: [],
  orderQuantity: 1,
  cartMiniOpen: false,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add_cart_product: (state, { payload }) => {
      // Normalize the payload to use _id consistently
      const normalizedPayload = {
        ...payload,
        _id: payload._id || payload.id,
        img: payload.img || payload.image
      };
      
      // Check if the item being added is an add-on
      const isAddOn = normalizedPayload.category?.name === 'Add-ons' || 
                      normalizedPayload.category === 'addons' ||  // Check for string category
                      normalizedPayload.parent === 'Add-ons' ||
                      normalizedPayload.productType === 'addon';
      
      // If it's an add-on, check if there's a thali in the cart
      if (isAddOn) {
        const hasThaliInCart = state.cart_products.some(item => 
          item.category?.name === 'Thali' || 
          item.category === 'thali' ||  // Check for string category
          item.parent === 'Thali' ||
          item.productType === 'thali'
        );
        
        if (!hasThaliInCart) {
          notifyError("Please add a thali to your cart before adding add-ons");
          return;
        }
      }
      
      const isExist = state.cart_products.some((i) => i._id === normalizedPayload._id);
      if (!isExist) {
        const newItem = {
          ...normalizedPayload,
          orderQuantity: state.orderQuantity,
        };
        state.cart_products.push(newItem);
        notifySuccess(`${state.orderQuantity} ${normalizedPayload.title} added to cart`);
      } else {
        state.cart_products.map((item) => {
          if (item._id === normalizedPayload._id) {
            if (item.quantity >= item.orderQuantity + state.orderQuantity) {
              item.orderQuantity =
                state.orderQuantity !== 1
                  ? state.orderQuantity + item.orderQuantity
                  : item.orderQuantity + 1;
              notifySuccess(`${state.orderQuantity} ${item.title} added to cart`);
            } else {
              notifyError("No more quantity available for this product!");
              state.orderQuantity = 1;
            }
          }
          return { ...item };
        });
      }
      setLocalStorage("cart_products", state.cart_products);
    },
    increment: (state, { payload }) => {
      state.orderQuantity = state.orderQuantity + 1;
    },
    decrement: (state, { payload }) => {
      state.orderQuantity =
        state.orderQuantity > 1
          ? state.orderQuantity - 1
          : (state.orderQuantity = 1);
    },
    quantityDecrement: (state, { payload }) => {
      const normalizedPayload = {
        ...payload,
        _id: payload._id || payload.id
      };
      
      state.cart_products.map((item) => {
        if (item._id === normalizedPayload._id) {
          if (item.orderQuantity > 1) {
            item.orderQuantity = item.orderQuantity - 1;
          }
        }
        return { ...item };
      });
      setLocalStorage("cart_products", state.cart_products);
    },
    remove_product: (state, { payload }) => {
      const itemId = payload.id || payload._id;
      
      // Check if the item being removed is a thali
      const isThali = payload.category?.name === 'Thali' || 
                     payload.category === 'thali' ||  // Check for string category
                     payload.parent === 'Thali' ||
                     payload.productType === 'thali';
      
      // If removing a thali, check if there are add-ons in cart
      if (isThali) {
        const addOnsInCart = state.cart_products.filter(item => 
          item.category?.name === 'Add-ons' || 
          item.category === 'addons' ||  // Check for string category
          item.parent === 'Add-ons' ||
          item.productType === 'addon'
        );
        
        // Check if this is the last thali
        const remainingThalis = state.cart_products.filter(item => 
          item._id !== itemId && (
            item.category?.name === 'Thali' || 
            item.category === 'thali' ||  // Check for string category
            item.parent === 'Thali' ||
            item.productType === 'thali'
          )
        );
        
        // If this is the last thali and there are add-ons, remove add-ons too
        if (remainingThalis.length === 0 && addOnsInCart.length > 0) {
          state.cart_products = state.cart_products.filter(
            (item) => item._id !== itemId && 
                     item.category?.name !== 'Add-ons' && 
                     item.category !== 'addons' &&  // Check for string category
                     item.parent !== 'Add-ons' &&
                     item.productType !== 'addon'
          );
          notifyError(`${payload.title} and all add-ons removed from cart (add-ons require a thali)`);
        } else {
          state.cart_products = state.cart_products.filter(
            (item) => item._id !== itemId
          );
          notifyError(`${payload.title} Remove from cart`);
        }
      } else {
        state.cart_products = state.cart_products.filter(
          (item) => item._id !== itemId
        );
        notifyError(`${payload.title} Remove from cart`);
      }
      
      setLocalStorage("cart_products", state.cart_products);
    },
    get_cart_products: (state, action) => {
      state.cart_products = getLocalStorage("cart_products");
    },
    initialOrderQuantity: (state, { payload }) => {
      state.orderQuantity = 1;
    },
    clearCart: (state) => {
      const isClearCart = window.confirm('Are you sure you want to remove all items ?');
      if (isClearCart) {
        state.cart_products = []
      }
      setLocalStorage("cart_products", state.cart_products);
    },
    openCartMini: (state, { payload }) => {
      state.cartMiniOpen = true
    },
    closeCartMini: (state, { payload }) => {
      state.cartMiniOpen = false
    },
  },
});

export const {
  add_cart_product,
  increment,
  decrement,
  get_cart_products,
  remove_product,
  quantityDecrement,
  initialOrderQuantity,
  clearCart,
  closeCartMini,
  openCartMini,
} = cartSlice.actions;
export default cartSlice.reducer;