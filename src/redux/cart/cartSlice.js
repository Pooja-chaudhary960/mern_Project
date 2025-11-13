import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;

      const existingProduct = state.products.find(
        (item) => item._id === product._id
      );

      if (existingProduct) {
        state.products = state.products.map((item) => {
          if (item._id === product._id) {
            return {
              ...item,
              quantity: item.quantity + 1,
            };
          }
          return item;
        });
      } else {
        state.products.push({ ...product, quantity: 1 });
      }

      // Recalculate totalPrice correctly
      state.totalPrice = state.products.reduce((total, item) => {
        return total + item.price * item.quantity;
      }, 0);
    },

    increaseQuantity: (state, action) => {
      const product = action.payload;

      state.products = state.products.map((item) => {
        if (item._id === product._id) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        }
        return item;
      });

      // Recalculate totalPrice correctly
      state.totalPrice = state.products.reduce((total, item) => {
        return total + item.price * item.quantity;
      }, 0);
    },

    decreaseQuantity: (state, action) => {
      const product = action.payload;

      if (product.quantity <= 1) return;

      state.products = state.products.map((item) => {
        if (item._id === product._id) {
          return {
            ...item,
            quantity: item.quantity - 1,
          };
        }
        return item;
      });

      // Recalculate totalPrice correctly
      state.totalPrice = state.products.reduce((total, item) => {
        return total + item.price * item.quantity;
      }, 0);
    },

    removeFromCart: (state, action) => {
      const product = action.payload;

      state.products = state.products.filter((item) => item._id !== product._id);

      // Recalculate totalPrice correctly
      state.totalPrice = state.products.reduce((total, item) => {
        return total + item.price * item.quantity;
      }, 0);
    },

    clearCart: () => initialState,
  },
});

export const {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
