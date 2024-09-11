import React, { createContext, useContext, useReducer } from "react";

const TotalPriceContextProvider = createContext(null);
const TotalPriceContextActionProvider = createContext(null);

const totalPriceReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE":
      return { total: action.payload.total };
    default:
      throw Error("unknow type action : " + action.type);
  }
};

const TotalPrice = ({ children }) => {
  const [totalPrice, dispatch] = useReducer(totalPriceReducer, { total: 0 });

  return (
    <TotalPriceContextProvider.Provider value={totalPrice}>
      <TotalPriceContextActionProvider.Provider value={dispatch}>
        {children}
      </TotalPriceContextActionProvider.Provider>
    </TotalPriceContextProvider.Provider>
  );
};

export const useTotalPrice = () => {
  return useContext(TotalPriceContextProvider);
};

export const useTotalPriceDispatch = () => {
  return useContext(TotalPriceContextActionProvider);
};
export default TotalPrice;
