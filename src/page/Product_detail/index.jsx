import React from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getProductById } from "../../store/producs_slice.js";
// fetch product by id import here

export default function Product_detail() {
  const { id } = useParams();
  // {
  //   /* <p>Product ID: {id}</p> */
  // }

  const dispatch = useDispatch();
  const product = useSelector((state) => state.products.products);
  const status = useSelector((state) => state.products.status);

  React.useEffect(() => {
    dispatch(getProductById(id));
  }, [dispatch, id]);

  const [quantity, setQuantity] = React.useState(1);
  function handleQuantity(type) {
    if (type === "increase") {
      setQuantity((prev) => prev + 1);
    } else {
      if (quantity > 1) {
        setQuantity((prev) => prev - 1);
      }
    }
  }

  if (product.images && "img_2" in product.images) {
    console.log(product.images.img_2);
    const imageLink = product.images.img_2;
    // console log the type of imageLink
    console.log(typeof imageLink);

    return (
      <div className="h-screen">
        <div
          className="flex flex-col justify-between items-start px-14 py-36 h-96 w-full bg-cover bg-no-repeat object-cover object-center"
          style={{
            backgroundImage: `url("https://supersports.com.vn/cdn/shop/products/M9160C-1.jpg?v=1700124581&width=2000")`,
          }}>
          <p className="font-bold text-4xl">Chuck Taylor All Star Classic</p>
          <p className="font-light text-gray-500 text-lg italic">
            Trang chủ / CONVERSE ALL Chuck Taylor / All Star Classic
          </p>
        </div>

        {
          //todo  TODO: fetch product by id then display here
        }

        <div className="flex flex-row items-center justify-between w-full px-32 py-5 mt-10 mb-96 gap-7">
          <div className="w-3/5">
            <img
              src={imageLink}
              alt="productimgs"
              className="h-96 w-full object-cover object-center rounded-lg shadow-md"
            />
          </div>

          {/* product info and order */}
          <div className="h-full flex flex-col items-start px-3 divide-y-2 divide-gray-400 divide-opacity-25 divide-solid gap-2">
            <h1 className="font-bold text-3xl leading-9 pb-3">
              Giày Thời Trang Unisex Converse Chuck Taylor All Star - Đen
            </h1>
            <p className="text-gray-500 w-full text-2xl pt-3">
              Giá: 1.500.000đ
            </p>
            <div className="w-full font-bold font-sans text-xl mt-5 py-5 flex flex-col gap-2">
              <span>Size</span>
              <div className="flex flex-row gap-28 mt-4">
                <span>Số lượng</span>
                <div className="flex flex-row items-center gap-5">
                  <button
                    className="bg-gray-300 w-8 h-8 rounded-md"
                    onClick={() => handleQuantity("decrease")}>
                    -
                  </button>
                  <span>{quantity}</span>
                  <button
                    className="bg-gray-300 w-8 h-8 rounded-md"
                    onClick={() => handleQuantity("increase")}>
                    +
                  </button>
                </div>
              </div>
            </div>
            <div className="w-full flex flex-row items-center justify-between pt-5 gap-3">
              <button className="bg-orange-600 text-white font-bold w-1/2 h-12 rounded-md">
                Thêm vào giỏ
              </button>
              <button className="bg-green-600 text-white font-bold w-1/2 h-12 rounded-md">
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
