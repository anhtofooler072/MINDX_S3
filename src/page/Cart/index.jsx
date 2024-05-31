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
        <h1 className="mt-8 text-center text-4xl font-bold">
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
      <ReactLoading type={"spin"} color={"#fc531b"} className="mx-auto mt-10" />
    );
  }

  if (status === "failed") {
    return <div>Failed to fetch data</div>;
  } else if (status === "success") {
    return (
      <>
        <h1 className="mt-8 text-center text-4xl font-bold">Your Cart</h1>
        <div className="mx-36 flex h-auto w-auto flex-col items-end">
          <div className="mt-8 flex h-auto w-full flex-col items-center justify-center divide-y-2 rounded-lg border border-gray-300 p-5 shadow-md">
            {Array.isArray(products) &&
              products.map((product) => {
                const item = cart.find((item) => item.id === product._id);
                if (item) {
                  return (
                    <div
                      key={product._id}
                      className="flex h-auto w-full cursor-pointer flex-row justify-between justify-items-center gap-5 px-3 py-5 transition duration-300 hover:shadow-lg"
                      onClick={() =>
                        navigate(`/converseall/product/${product._id}`)
                      }
                    >
                      <img
                        src={product.images.img_2}
                        alt={product.name}
                        className="h-32 w-32 rounded-full border border-gray-300 object-cover object-center shadow-md"
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
          <p className="my-7 mr-5 text-xl font-bold text-gray-500">
            Total Price: {totaPrice.toLocaleString()} đ
          </p>
          <button
            className="w-1/4 rounded bg-orange-500 px-4 py-2 font-bold text-white transition duration-200 hover:bg-orange-700 hover:shadow-md"
            onClick={() => navigate("/checkout")}
          >
            Checkout
          </button>
        </div>
      </>
    );
  }
}
