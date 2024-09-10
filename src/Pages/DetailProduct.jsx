import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { getDetailProducts } from "../services/products.service";
import { useParams } from "react-router-dom";
import Loading from "../components/Fragments/Loading";
const DetailProduct = () => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    getDetailProducts(id, (data) => {
      setProduct(data.data);
      setLoading(true);
    });
  }, [id]);

  return (
    <div className="max-h-screen flex items-center justify-center bg-gray-100 p-5">
      {loading ? (
        <div className="bg-white shadow-lg rounded-lg p-8 max-w-2xl w-full flex flex-col md:flex-row">
          <div className="md:w-1/2">
            <img
              src={product.image}
              alt={product.title}
              className="rounded-lg object-cover"
            />
          </div>
          <div className="md:w-1/2 md:ml-6 mt-6 md:mt-0">
            <h2 className="text-2xl font-semibold mb-4">{product.title}</h2>
            <p className="text-gray-600 mb-4">Category: {product.category}</p>
            <p className="text-gray-800 font-bold text-xl mb-4">
              ${product.price}
            </p>
            <div className="flex items-center mb-4">
              <div className="flex text-yellow-500">
                {Array.from({ length: 5 }, (_, index) => (
                  <FaStar
                    key={index}
                    className={
                      index < Math.floor(product.rating.rate)
                        ? "text-yellow-500"
                        : "text-gray-300"
                    }
                  />
                ))}
              </div>
              <span className="ml-2 text-gray-600">
                ({product.rating.rate})
              </span>
              <span className="ml-2 text-gray-600">
                | {product.rating.count} reviews
              </span>
            </div>
            <p className="text-gray-700 mb-6">{product.description}</p>
            <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors">
              Add to Cart
            </button>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default DetailProduct;
