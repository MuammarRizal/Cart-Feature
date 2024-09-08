import React, { Fragment, useState } from "react";
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
  const getEmailInLocalStorage = localStorage.getItem("email");
  if (getEmailInLocalStorage === null) {
    alert("Silahkan login terlebih dahulu");
    return (window.location.href = "/login");
  }

  const [cart, setCart] = useState([
    {
      id: 10,
      nameProduct: "Sepatu keren",
      qty: 1,
      price: 2000000,
    },
  ]);

  const handleToCart = ({ id }) => {
    const addToCart = datasProducts.find((item) => item.id === id);
    console.log(addToCart);
    setCart((prevCart) => {
      return [...prevCart, addToCart];
    });
  };

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
              <CardProduct.Footer id={item.id} handleToCart={handleToCart} />
            </CardProduct>
          ))}
        </div>

        <div className="table w-7/12">
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
                {/* {cart.map((cartItem, index) => (
                  <tr
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                    key={index}
                  >
                    <td className="px-6 py-4 text-center">
                      {cartItem.nameProduct}
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
                      {cartItem.price.toLocaleString("id-ID", {
                        style: "currency",
                        currency: "IDR",
                        maximumFractionDigits: 0,
                      })}
                    </td>
                  </tr>
                ))} */}
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <td className="px-10 py-4 text-center" colSpan={4}>
                    TOTAL : RP : 1000000
                    {}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Products;
