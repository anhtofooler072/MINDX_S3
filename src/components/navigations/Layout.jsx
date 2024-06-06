import React from "react";
import Navbar from "./Navbar";
import { Outlet, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getUserInfo } from "../../store/isLoggedInSlice";

export default function Layout() {
    const location = useLocation();
    const navbarClass = "navbar"
    console.log(navbarClass)

    const accessToken = localStorage.getItem("accessToken");
    const dispatch = useDispatch();
    const token = localStorage.getItem("accessToken");
    React.useEffect(() => {
        if (token) {
            dispatch(getUserInfo(token));
        }
    }, [accessToken, dispatch]);


    return (
        <>
            <div>
                <Navbar className={navbarClass} />
                <Outlet />
            </div>
        </>
    );
}
