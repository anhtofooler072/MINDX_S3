import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../store/producs_slice.js";
import ReactLoading from "react-loading";

export default function Cart() {
  const cart = JSON.parse(localStorage.getItem("cart"));
  console.log(cart);
  if (cart === null) {
    return (
      <div>
        <h1>Your cart is empty</h1>
      </div>
    );
  }

  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const status = useSelector((state) => state.products.status);

  React.useEffect(() => {
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
    return Array.isArray(products) && products.map((product) => {
        const item = cart.find((item) => item.id === product._id);
        if (item) {
            return (
            <div key={product._id}>
                <img src={product.images.img_2} alt={product.name} />
                <p>{product.name}</p>
                <p>{product.cost}</p>
                <p>Quantity: {item.quantity}</p>
            </div>
            );
        }
        });
  }
}
