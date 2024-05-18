import React from "react";
import { NavLink } from "react-router-dom";
import { IoLogInOutline } from "react-icons/io5";
import { IoHeartOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import "./styles.css";

export default function Navbar({ className }) {
  return (
    <nav className={className}>
      <div className="flex flex-row w-100 gap-10 font-sans font-bold">
        <NavLink to="/">
          <img
            className="w-28"
            src="https://bizweb.dktcdn.net/thumb/medium/100/493/370/themes/940719/assets/shop_logo_image.png?1713464283843"
            alt="logo"
          />
        </NavLink>
        <NavLink to="/converseall">ConverseAll</NavLink>
        <NavLink to="/about">About</NavLink>
      </div>
      <div className="flex flex-row w-100 gap-10 font-sans font-bold">
        <input
          className="w-52 rounded-md px-5 py-2 border-2 border-gray-300 focus:outline-none focus:border-gray-500"
          type="text"
          placeholder= "Search"
        />
        <NavLink className="text-2xl" to="/login"><IoLogInOutline/></NavLink>
        <NavLink className="text-2xl" to="/favourites"><IoHeartOutline/></NavLink>
        <NavLink className="text-2xl" to="/cart"><IoCartOutline/></NavLink>
      </div>
    </nav>
  );
}
