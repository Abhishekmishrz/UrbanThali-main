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
      
      // Helper function to check category
      const getCategoryName = (item) => {
        return typeof item.category === 'string' 
          ? item.category 
          : item.category?.name;
      };
      
      const isThaliItem = (item) => {
        const categoryName = getCategoryName(item);
        return categoryName === 'Thali' || 
               categoryName === 'thali' ||
               item.parent === 'Thali' ||
               item.productType === 'thali';
      };
      
      const isAddOnItem = (item) => {
        const categoryName = getCategoryName(item);
        return categoryName === 'Add-ons' || 
               categoryName === 'addons' ||
               item.parent === 'Add-ons' ||
               item.productType === 'addon';
      };
      
      // Check if the item being added is an add-on
      const isAddOn = isAddOnItem(normalizedPayload);
      
      // If it's an add-on, check if there's a thali in the cart
      if (isAddOn) {
        const hasThaliInCart = state.cart_products.some(item => isThaliItem(item));
        
        if (!hasThaliInCart) {
          notifyError("Please add a thali to your cart before adding add-ons");
          return;
        }
      }
      
      const isExist = state.cart_products.some((i) => i._id === normalizedPayload._id);
      if (!isExist) {
        const newItem = {
          ...normalizedPayload,
          orderQuantity: normalizedPayload.orderQuantity || state.orderQuantity,
        };
        state.cart_products.push(newItem);
        notifySuccess(`${newItem.orderQuantity} ${normalizedPayload.title} added to cart`);
      } else {
        state.cart_products.map((item) => {
          if (item._id === normalizedPayload._id) {
            const quantityToAdd = normalizedPayload.orderQuantity || state.orderQuantity;
            if (item.quantity >= item.orderQuantity + quantityToAdd) {
              item.orderQuantity = item.orderQuantity + quantityToAdd;
              notifySuccess(`${quantityToAdd} ${item.title} added to cart`);
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
      
      // Helper functions (same as in add_cart_product)
      const getCategoryName = (item) => {
        return typeof item.category === 'string' 
          ? item.category 
          : item.category?.name;
      };
      
      const isThaliItem = (item) => {
        const categoryName = getCategoryName(item);
        return categoryName === 'Thali' || 
               categoryName === 'thali' ||
               item.parent === 'Thali' ||
               item.productType === 'thali';
      };
      
      const isAddOnItem = (item) => {
        const categoryName = getCategoryName(item);
        return categoryName === 'Add-ons' || 
               categoryName === 'addons' ||
               item.parent === 'Add-ons' ||
               item.productType === 'addon';
      };
      
      // Check if the item being removed is a thali
      const isThali = isThaliItem(payload);
      
      // If removing a thali, check if there are add-ons in cart
      if (isThali) {
        const addOnsInCart = state.cart_products.filter(item => isAddOnItem(item));
        
        // Check if this is the last thali
        const remainingThalis = state.cart_products.filter(item => 
          item._id !== itemId && isThaliItem(item)
        );
        
        // If this is the last thali and there are add-ons, remove add-ons too
        if (remainingThalis.length === 0 && addOnsInCart.length > 0) {
          state.cart_products = state.cart_products.filter(
            (item) => item._id !== itemId && !isAddOnItem(item)
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