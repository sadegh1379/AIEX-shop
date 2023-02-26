import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  cart: {
    cartItems: [],
  },
};

export const appSlice = createSlice({
  name: "app",
  initialState: INITIAL_STATE,
  reducers: {
    addToCart: (state, action) => {
      state.cart.cartItems = [...state.cart.cartItems, action.payload];
    },
  },
});

export const { addToCart } = appSlice.actions;
export default appSlice.reducer;
