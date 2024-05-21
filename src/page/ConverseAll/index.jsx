import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
export default function ConverseAll() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]); // [1]

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get("https://api-project-testing-mndx3.onrender.com/products"); // [2]
      setProducts(response.data);
    };
    fetchProducts();
  }, []);

  console.log(products); // [3]

  return (
    <>
      <h1 className="italic text-green-600">Converse All</h1>
      <p>This is the Converse All page</p>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => navigate("/converseall/product/664b16e6348b3f0b607836f4")}
      >
        Go to Product Detail
      </button>
    </>
  );
}
