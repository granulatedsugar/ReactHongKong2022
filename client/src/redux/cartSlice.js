import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
    cartQuantity: 0, // how many items in cart from start
    cartTotal: 0, //total cart price
  },
  reducers: {
    addItem: (state, action) => {
      state.cartQuantity += 1;
      state.cartItems.push(action.payload);
      state.total += action.payload.price;
    },
  },
});

export const { addItem } = cartSlice.actions;
export default cartSlice.reducer;
