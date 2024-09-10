import React, { Fragment, useContext, useEffect, useState } from "react";
import CardProduct from "../components/Fragments/CardProduct";
import { getProducts } from "../services/products.service";
import Loading from "../components/Fragments/Loading";
import { useLogin } from "../hooks/useLogin";
import TableCart from "../components/Layouts/TableCart";
import { DarkModeContext } from "../context/DarkMode";

const Products = () => {
  const [products, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const { isDarkMode } = useContext(DarkModeContext);
  useLogin();

  useEffect(() => {
    (async () => {
      const dataProducts = await getProducts();
      setAllProducts(dataProducts);
      setLoading(true);
    })();

    setLoading(false);
  }, []);

  return (
    <Fragment>
      <div
        className={`container w-full flex px-4 py-3 gap-2 relative ${
          isDarkMode ? "bg-white" : "bg-slate-900"
        }`}
      >
        <div className="w-3/4 flex-wrap flex gap-4">
          {!loading ? (
            <Loading />
          ) : (
            products.map((item) => (
              <CardProduct key={item.id}>
                <CardProduct.Header
                  imageAlt={item.title}
                  imageUrl={item.image}
                  idProduct={item.id}
                />

                <CardProduct.Body
                  productName={item.title.substring(0, 15)}
                  rate={item.rating.rate}
                  count={item.rating.count}
                >
                  {item.description.substring(0, 100)} ...
                </CardProduct.Body>
                <CardProduct.Footer
                  id={item.id}
                  price={item.price}
                  category={item.category}
                  title={item.title}
                />
              </CardProduct>
            ))
          )}
        </div>

        {/* buat ini menjadi position sticky */}
        <div className=" w-7/12 ">
          {
            <div className="relative overflow-x-auto">
              <TableCart />
            </div>
          }
        </div>

        {/* jangan dibuka */}
        {/* {cartDisplay && (
          <div className="table fixed z-10 mx-auto w-full my-auto backdrop-blur-sm h-full">
            {
              <div className="relative overflow-x-auto">
                <table className="text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 mx-auto ">
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
                            {cartItem.title}
                          </td>
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
                        {totalSum.toLocaleString("us-US", {
                          style: "currency",
                          currency: "USD",
                        })}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            }
          </div>
        )} */}
      </div>
    </Fragment>
  );
};

export default Products;
