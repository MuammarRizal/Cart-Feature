import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlices/actions";

const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
});

console.log("Create Store : ", store.getState());

store.subscribe(() => {
  console.log("State is changed", store.getState());
});

export default store;
