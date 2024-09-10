import { createStore } from "redux";

// reducer
const createReducerCart = (state = { login: false, cart: [] }, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return { ...state, cart: [...state.cart, action.payload] };
    default:
      return state;
  }
};

// store
const store = createStore(createReducerCart);

// subscribe
store.subscribe(() => {
  console.log("Store : ", store.getState());
});

// dispatch
const dispatch1 = store.dispatch({
  type: "ADD_TO_CART",
  payload: {
    id: 12,
    qty: 2,
  },
});
store.dispatch(dispatch1);
