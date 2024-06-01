import React, { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { IoLogInOutline } from "react-icons/io5";
import { IoHeartOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
import "./styles.css";

export default function Navbar({ className }) {
  const [inputValue, setInputValue] = React.useState("");
  const [searchResult, setSearchResult] = React.useState([]);
  const products = useSelector((state) => state.products.products);
  const navigate = useNavigate();
  // console.log(products);

  function handleOnChange(e) {
    // check if products is fully fetched the search
    const searchInput = e.target.value;
    setInputValue(searchInput);
    if (products.length !== 0 && inputValue !== "") {
      const result = products.filter((product) =>
        product.name.toLowerCase().includes(searchInput.toLowerCase()),
      );
      setSearchResult(result);
      console.log(searchResult);
    } else {
      console.log(searchResult);
    }
  }

  function renderSearchResult() {
    const displayLimit = searchResult.length > 5 ? 5 : searchResult.length;
    // const displayBox = "hidden"
    if (inputValue === "" || searchResult.length === 0) {
      return <div className="hidden"> as </div>;
    }
    return (
      <div className="absolute flex w-96 translate-y-16 flex-col gap-2 divide-y-2 divide-gray-100 rounded-md border-2 border-orange-300 bg-white p-3 shadow-md transition-transform duration-1000">
        {searchResult.slice(0, displayLimit).map((product) => (
          <div
            key={product._id}
            className="flex flex-row justify-between items-center gap-2 px-2 pb-3 pt-4"
            onClick={() => {
              navigate(`/converseall/product/${product._id}`);
              setInputValue("");
            }}
          >
            <img
              className="h-20 w-20 rounded-full object-cover ring-2 ring-gray-300"
              src={product.images.img_2}
              alt="product"
            />
            <div className="flex flex-col w-3/5 items-end justify-between">
              <p className="font-light text-right">{product.name}</p>
              <p className="text-gray-400 font-medium mt-1">$ {Number(product.cost).toLocaleString()}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <nav className={className}>
      <div className="w-100 flex flex-row gap-10 font-sans font-bold">
        <NavLink to="/">
          <img
            className="w-28"
            src="https://bizweb.dktcdn.net/thumb/medium/100/493/370/themes/940719/assets/shop_logo_image.png?1713464283843"
            alt="logo"
          />
        </NavLink>
        <NavLink to="/converseall">All products</NavLink>
        <NavLink to="/about">About</NavLink>
      </div>

      <div className="w-100 flex flex-row gap-10 font-sans font-bold">
        {/* search bar */}
        <div className="w-100 flex flex-col items-center gap-10">
          <input
            className="w-52 rounded-md border-2 border-gray-300 px-5 py-2 focus:border-gray-500 focus:outline-none"
            type="text"
            placeholder="Search"
            value={inputValue}
            onChange={(e) => {
              handleOnChange(e);
            }}
          />

          {/* list of results */}
          {searchResult.length !== 0 && renderSearchResult()}
        </div>
        <NavLink className="text-2xl" to="/login">
          <IoLogInOutline />
        </NavLink>
        <NavLink className="text-2xl" to="/favourites">
          <IoHeartOutline />
        </NavLink>
        <NavLink className="text-2xl" to="/cart">
          <IoCartOutline />
        </NavLink>
      </div>
    </nav>
  );
}
