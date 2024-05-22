import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../store/slice";
import ReactLoading from "react-loading";

export default function ConverseAll() {
  const navigate = useNavigate();
  // const [products, setProducts] = useState([]); // [1]

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
        color={"2f383e"}
        height={50}
        width={50}
      />
    );
  }

  if (status === "failed") {
    return <div>Failed to fetch data</div>;
  }

  if (status === "success") {
    return (
      <div>
        <h1>Converse All</h1>
        <div className="converse-all">
          {products.map((product) => (
            <div
              key={product._id}
              className="product"
              onClick={() => navigate(`/converseall/product/${product._id}`)}>
              <img
                src={product.images.img_2}
                alt={product.name}
              />
              <p>{product.name}</p>
              <p>{product.price}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
