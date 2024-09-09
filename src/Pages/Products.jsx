import React, { Fragment, useEffect, useRef, useState } from "react";
import CardProduct from "../components/Fragments/CardProduct";

const datasProducts = [
  {
    id: 1,
    name: "Sepatu baru",
    image: "/images/shoes.jpg",
    desc: "loremloremloremloremloremlo remloremloremloremloremlo remloremloremloremloremloremlor ",
    qty: 1,
    price: 1000000,
  },
  {
    id: 2,
    name: "Sepatu Lama",
    image: "/images/shoes-2.jpeg",
    desc: "loremloremloremloremloremlo remloremloremloremloreml ",
    qty: 1,
    price: 2000000,
  },
  {
    id: 3,
    name: "Sepatu Keren",
    image: "/images/shoes-3.jpg",
    desc: "loremloremloremloremloremlorem loremloremloremlore mloremloremloremlor emloremloremloreml oremloremlorem",
    qty: 1,
    price: 3000000,
  },
];

const Products = () => {
  const [cart, setCart] = useState([]);
  const [totalSum, setTotalSum] = useState(0);
  const getEmailInLocalStorage = localStorage.getItem("email");
  if (getEmailInLocalStorage === null) {
    alert("Silahkan login terlebih dahulu");
    return (window.location.href = "/login");
  }

  useEffect(() => {
    const dataCartInLocalStorage = localStorage.getItem("cart");
    setCart(JSON.parse(dataCartInLocalStorage) || []);
  }, []);

  useEffect(() => {
    if (cart.length > 0) {
      const sum = cart.reduce((acc, item) => {
        return acc + item.price * item.qty;
      }, 0);
      setTotalSum(sum);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  const handleToCart = ({ id }) => {
    const addToCart = datasProducts.find((item) => item.id === id);

    console.log(cart);
    setCart((prevCart) => {
      if (prevCart.find((item) => item.id === addToCart.id)) {
        return prevCart.map((cart) =>
          cart.id === addToCart.id ? { ...cart, qty: cart.qty + 1 } : cart
        );
      } else {
        return [...prevCart, addToCart];
      }
    });
  };

  const totalRef = useRef(null);
  useEffect(() => {
    if (cart.length > 0) {
      totalRef.current.style.display = "table-row";
    } else {
      totalRef.current.style.display = "none";
    }
  }, [cart]);

  return (
    <Fragment>
      <div className="container w-full flex px-4 py-3 gap-2">
        <div className="w-3/4 flex-wrap flex gap-4">
          {datasProducts.map((item) => (
            <CardProduct key={item.id}>
              <CardProduct.Header imageAlt={item.name} imageUrl={item.image} />

              <CardProduct.Body productName={item.name}>
                {item.desc}
              </CardProduct.Body>
              <CardProduct.Footer
                id={item.id}
                handleToCart={handleToCart}
                price={item.price}
              />
            </CardProduct>
          ))}
        </div>

        <div className="table w-7/12">
          {
            <div className="relative overflow-x-auto">
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
                        <td className="px-6 py-4 text-center">
                          {cartItem.name}
                        </td>
                        <td className="px-6 py-4 text-center">
                          {cartItem.price.toLocaleString("id-ID", {
                            style: "currency",
                            currency: "IDR",
                            maximumFractionDigits: 0,
                          })}
                        </td>
                        <td className="text-center">{cartItem.qty}</td>
                        <td className="px-10 py-4 text-center">
                          {total.toLocaleString("id-ID", {
                            style: "currency",
                            currency: "IDR",
                            maximumFractionDigits: 0,
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
                      {totalSum.toLocaleString("id-ID", {
                        style: "currency",
                        currency: "IDR",
                        maximumFractionDigits: 0,
                      })}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          }
        </div>
      </div>
    </Fragment>
  );
};

export default Products;
