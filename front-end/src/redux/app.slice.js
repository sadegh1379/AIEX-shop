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
      const newItem = action.payload;
      const exsistItem = state.cart.cartItems.find(
        (item) => item._id === newItem._id
      );
      const cartItems = exsistItem
        ? state.cart.cartItems.map((item) => {
            if (item._id === newItem._id) {
              return newItem;
            }
            return item;
          })
        : [...state.cart.cartItems, newItem];
      state.cart.cartItems = cartItems;
    },
  },
});

export const { addToCart } = appSlice.actions;
export default appSlice.reducer;
