import React from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import ReactLoading from "react-loading";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// fetch product by id import here

export default function Product_detail() {
  const { id } = useParams();
  // {
  //   /* <p>Product ID: {id}</p> */
  // }
  const products = useSelector((state) => state.products.products);
  const status = useSelector((state) => state.products.status);
  const [quantity, setQuantity] = React.useState(1);
  const [cart, setCart] = React.useState(
    JSON.parse(localStorage.getItem("cart")) || [],
  );

  // fetch product by id here
  const product = products.find((product) => product._id === id) || {};

  React.useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  console.log(cart);
  // [ {id: 1, quantity: 2}, {id: 2, quantity: 3} ]

  /**========================================================================
   *                           Function definition
   *========================================================================**/
  function handleQuantity(type) {
    if (type === "increase") {
      setQuantity((prev) => prev + 1);
    } else {
      if (quantity > 1) {
        setQuantity((prev) => prev - 1);
      }
    }
  }

  function handleAddToCart() {
    // chech if product is already in cart
    const item = cart.find((item) => item.id === id);
    console.log(item);
    if (item) {
      const newCart = cart.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity + quantity };
        }
        return item;
      });
      console.log("update quantity of item in cart");
      setCart(newCart);
      setQuantity(1);
      toast.success(`Đã thêm ${quantity} sản phẩm vào giỏ hàng`, {
        position: "bottom-left",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        limit: 3,
        theme: "light",
      });
    } else {
      console.log("add new item to cart");
      setCart([...cart, { id: id, quantity: quantity }]);
      setQuantity(1);
      toast.success(`Đã thêm ${quantity} sản phẩm vào giỏ hàng`, {
        position: "bottom-left",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        limit: 3,
        theme: "light",
      });
    }
  }

  while (status === "loading") {
    return (
      <ReactLoading type={"spin"} color={"#fc531b"} className="mx-auto mt-10" />
    );
  }

  if (product.images && "img_2" in product.images) {
    console.log(product.images.img_2);
    const imageLink = product.images.img_2;
    console.log(typeof imageLink);

    return (
      <div className="h-screen">
        <div
          className="flex h-96 w-full flex-col items-start justify-between bg-cover bg-no-repeat object-cover object-center px-14 py-36"
          style={{
            backgroundImage: `url("https://bizweb.dktcdn.net/100/493/370/themes/940719/assets/main_product_breadcrumb_bg.jpg?1713464283843")`,
          }}
        >
          <p className="text-4xl font-bold">Chuck Taylor All Star Classic</p>
          <p className="text-lg font-light italic text-gray-500">
            Trang chủ / CONVERSE ALL Chuck Taylor / All Star Classic
          </p>
        </div>

        {
          //todo  TODO: fetch product by id then display here
        }

        <div className="mb-96 mt-10 flex w-full flex-row items-center justify-between gap-7 px-32 py-5">
          <div className="w-3/5">
            <img
              src={imageLink}
              alt="productimgs"
              className="h-96 w-full rounded-lg object-cover object-center shadow-md"
            />
          </div>

          {/* product info and order */}
          <div className="flex h-full flex-col items-start gap-2 divide-y-2 divide-solid divide-gray-400 divide-opacity-25 px-3">
            <h1 className="pb-3 text-3xl font-bold leading-9">
              Giày Thời Trang Unisex Converse Chuck Taylor All Star - Đen
            </h1>
            <p className="w-full pt-3 text-2xl text-gray-500">
              Giá: {Number(product.cost).toLocaleString()} đ
            </p>
            <div className="mt-5 flex w-full flex-col gap-2 py-5 font-sans text-xl font-bold">
              <span>Size</span>
              <div className="justify-item-center mt-4 flex flex-row gap-28">
                <span>Số lượng</span>
                <div className="flex flex-row items-center gap-5 rounded-md p-2 ring-1 ring-gray-700 ring-opacity-15">
                  <button
                    className="h-8 w-8 rounded-md bg-gray-300"
                    onClick={() => handleQuantity("decrease")}
                  >
                    -
                  </button>
                  <span>{quantity}</span>
                  <button
                    className="h-8 w-8 rounded-md bg-gray-300"
                    onClick={() => handleQuantity("increase")}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
            <div className="flex w-full flex-row justify-between gap-3 pt-5">
              <button
                className="h-12 w-1/2 rounded-md bg-orange-600 font-bold text-white"
                onClick={handleAddToCart}
              >
                Thêm vào giỏ
              </button>
              <ToastContainer />
              <button className="h-12 w-1/2 rounded-md bg-green-600 font-bold text-white">
                Mua ngay
              </button>
            </div>
          </div>
        </div>

        {/* ------------------------------------------------------------------------------------------- */}
      </div>
    );
  }
}
