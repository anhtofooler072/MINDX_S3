import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../store/producs_slice.js";
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
      <ReactLoading type={"spin"} color={"#fc531b"} className="mx-auto mt-10" />
    );
  }

  if (status === "failed") {
    return <div>Failed to fetch data</div>;
  }

  if (status === "success") {
    return (
      //! WARNING: This is a bad practice, you should use a better way to handle this
      <div>
        <h1 className="mt-20 text-center text-xl font-extrabold">
          Converse All
        </h1>
        <div className="mx-20 my-10 grid grid-cols-4 place-items-center gap-8">
          {Array.isArray(products) &&
            products.map((product) => (
              <div
                key={product._id}
                className="flex h-auto w-60 cursor-pointer flex-col items-center justify-center rounded-lg border border-gray-300 px-5 py-10 shadow-md transition duration-300 hover:shadow-lg"
                onClick={() => navigate(`/converseall/product/${product._id}`)}
              >
                <img
                  src={product.images.img_2}
                  alt={product.name}
                  className="mb-10 h-32 w-32"
                />
                <span className="mb-5 text-center font-light text-gray-800">
                  {product.name}
                </span>
                <span className="font-semibold">
                  {Number(product.cost).toLocaleString()} đ
                </span>
              </div>
            ))}
        </div>
      </div>
      /*------------------------------------------------------------------------*/
    );
  }
}
