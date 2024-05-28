import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../store/producs_slice.js";
import ReactLoading from "react-loading";

export default function Cart() {
  const cart = JSON.parse(localStorage.getItem("cart"));
  const [totaPrice, setTotalPrice] = React.useState(0);
  console.log(cart);
  if (cart === null) {
    return (
      <div>
        <h1 className="font-bold text-4xl text-center mt-8">
          Your Cart Is Empty
        </h1>
      </div>
    );
  }
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const status = useSelector((state) => state.products.status);

  React.useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  React.useEffect(() => {
    let totalPrice = 0;
    if (Array.isArray(products) && products.length !== 0) {
      products.forEach((product) => {
        const item = cart.find((item) => item.id === product._id);
        if (item) {
          totalPrice += product.cost * item.quantity;
        }
      });
      setTotalPrice(totalPrice);
      console.log(totalPrice);
    }
  }, [products, cart]);

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
  } else if (status === "success") {
    return (
      <>
        <h1 className="font-bold text-4xl text-center mt-8">Your Cart</h1>
        <div className="flex flex-col items-end h-auto w-auto mx-36">
          <div className="flex flex-col items-center justify-center w-full h-auto p-5 mt-8 divide-y-2 border border-gray-300 rounded-lg shadow-md ">
            {Array.isArray(products) &&
              products.map((product) => {
                const item = cart.find((item) => item.id === product._id);
                if (item) {
                  return (
                    <div
                      key={product._id}
                      className="flex flex-row justify-items-center w-full h-auto gap-5 justify-between px-3 py-5 cursor-pointer hover:shadow-lg transition duration-300"
                      onClick={() =>
                        navigate(`/converseall/product/${product._id}`)
                      }>
                      <img
                        src={product.images.img_2}
                        alt={product.name}
                        className="w-32 h-32 object-cover object-center rounded-full shadow-md border border-gray-300"
                      />
                      <div className="flex flex-row gap-7">
                        <p className="translate-y-1/2 font-bold">
                          {product.name}
                        </p>
                        <p className="translate-y-1/2">
                          giá: {Number(product.cost).toLocaleString()} đ
                        </p>
                        <p className="translate-y-1/2">
                          Quantity: {item.quantity}
                        </p>
                      </div>
                    </div>
                  );
                }
              })}
          </div>
          <p className="font-bold text-xl text-gray-500 my-7 mr-5">
            Total Price: {totaPrice.toLocaleString()} đ
          </p>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-1/4"
            onClick={() => navigate("/checkout")}>
            Checkout
          </button>
        </div>
      </>
    );
  }
}
