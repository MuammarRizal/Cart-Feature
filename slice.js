import { configureStore, createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "CART",
  initialState: [{ id: 21, nama: "jange" }],
  reducers: {
    addToCart: (state, action) => {
      return (state = [...state, action.payload]);
    },
  },
});

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
});

console.log("Create store : ", store.getState());

store.subscribe(() => {
  console.log("STORE changes : ", store.getState());
});
store.dispatch(cartSlice.actions.addToCart({ id: +new Date(), nama: "rizal" }));
