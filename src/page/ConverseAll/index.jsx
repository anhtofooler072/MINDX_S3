import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../store/slice";
import ReactLoading from "react-loading";

export default function ConverseAll() {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const status = useSelector((state) => state.products.status);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  while (status === "loading") {
    return (
      <ReactLoading
        type={"spin"}
        color={"#fc531b"}
        className="mx-auto mt-10"
      />
    );
  }

  if (status === "failed") {
    return <div>Failed to fetch data</div>;
  }

  if (status === "success") {
    return (
      <div>
        <h1 className="text-xl font-extrabold text-center mt-20">
          Converse All
        </h1>
        <div className="grid grid-cols-4 gap-8 mx-20 my-10 place-items-center">
          {products.map((product) => (
            <div
              key={product._id}
              className="flex flex-col items-center justify-center w-60 h-auto py-10 px-5 border border-gray-300 rounded-lg shadow-md cursor-pointer hover:shadow-lg transition duration-300"
              onClick={() => navigate(`/converseall/product/${product._id}`)}>
              <img
                src={product.images.img_2}
                alt={product.name}
                className="w-32 h-32 mb-10"
              />
              <span className="text-gray-800 font-light mb-5 text-center">
                {product.name}
              </span>
              <span className="font-semibold">
                {Number(product.cost).toLocaleString()} đ
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
