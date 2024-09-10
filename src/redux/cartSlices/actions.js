import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "CART",
  initialState: {
    data: JSON.parse(localStorage.getItem("cart")) || [],
  },
  reducers: {
    addToCart: (state, action) => {
      const dataCart = state.data.find((cart) => cart.id === action.payload.id);
      if (dataCart) {
        dataCart.qty++;
      } else {
        state.data.push(action.payload);
      }
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
