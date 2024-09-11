import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useTotalPrice, useTotalPriceDispatch } from "../../context/TotalPrice";

const TableCart = () => {
  const cart = useSelector((state) => state.cart.data);
  const totalRef = useRef(null);
  const dispatch = useTotalPriceDispatch();
  const { total } = useTotalPrice();

  useEffect(() => {
    if (cart.length > 0) {
      totalRef.current.style.display = "table-row";
    } else {
      totalRef.current.style.display = "none";
    }
  }, [cart]);

  useEffect(() => {
    if (cart.length > 0) {
      const sum = cart.reduce((acc, item) => {
        return acc + item.price * item.qty;
      }, 0);
      dispatch({
        type: "UPDATE",
        payload: {
          total: sum,
        },
      });
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);
  return (
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" className="px-6 py-3 text-center">
            Product name
          </th>
          <th scope="col" className="px-6 py-3 text-center">
            Price
          </th>
          <th scope="col" className="px-6 py-3 text-center">
            Quantity
          </th>
          <th scope="col" className="px-6 py-3 text-center">
            Total
          </th>
        </tr>
      </thead>
      <tbody>
        {cart.map((cartItem, index) => {
          const total = cartItem.price * cartItem.qty;
          return (
            <tr
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              key={index}
            >
              <td className="px-6 py-4 text-center">{cartItem.title}</td>
              <td className="px-6 py-4 text-center">
                {cartItem.price.toLocaleString("us-US", {
                  style: "currency",
                  currency: "USD",
                })}
              </td>
              <td className="text-center">{cartItem.qty}</td>
              <td className="px-10 py-4 text-center">
                {total.toLocaleString("us-US", {
                  style: "currency",
                  currency: "USD",
                })}
              </td>
            </tr>
          );
        })}
        <tr
          className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
          ref={totalRef}
        >
          <td className="px-10 py-4 text-center" colSpan={4}>
            TOTAL :{" "}
            {total.toLocaleString("us-US", {
              style: "currency",
              currency: "USD",
            })}
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default TableCart;
