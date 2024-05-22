import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchProducts } from "../../store/slice";
import { useDispatch, useSelector } from "react-redux";
import ReactLoading from "react-loading";

export default function ConverseAll() {
  const navigate = useNavigate();
  // const [products, setProducts] = useState([]); // [1]

  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const status = useSelector((state) => state.products.status);
  const error = useSelector((state) => state.products.error);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  while (status === "loading") {
    return (
      <ReactLoading
        type={"spin"}
        color={"2f383e"}
        height={200}
        width={200}
      />
    );
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (status === "succeeded") {
    return (
      <div>
        {products.map((product) => (
          <div
            key={product._id}
            onClick={() => {
              navigate(`/converseall/product/${product._id}`);
            }}>
            <h1>{product.name}</h1>
            <img
              src={product.images.img_3}
              alt={product.name}
            />
            <p>{product.price}</p>
          </div>
        ))}
      </div>
    );
  }
}
