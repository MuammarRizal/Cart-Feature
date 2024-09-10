import { createAction, configureStore, createReducer } from "@reduxjs/toolkit";

// cart reducer
const cartCreatorAction = createAction("ADD_TO_CART");

const cartCreatorReducer = createReducer([], (builder) => {
  builder.addCase(cartCreatorAction, (state, action) => {
    return (state = [...state, action.payload]);
  });
});

// login reducer
const loginCreatorAction = createAction("LOGIN");

const loginCreatorReducer = createReducer({ status: false }, (builder) => {
  builder.addCase("LOGIN", (state, action) => {
    console.log(state.status);
    return (state = { status: action.payload.status });
  });
});
const store = configureStore({
  reducer: {
    cart: cartCreatorReducer,
    login: loginCreatorReducer,
  },
});

store.subscribe(() => {
  console.log("Store Changes : ", store.getState());
});

store.dispatch(loginCreatorAction({ status: false }));

store.dispatch(cartCreatorAction({ nama: "Muammar Rizal" }));
