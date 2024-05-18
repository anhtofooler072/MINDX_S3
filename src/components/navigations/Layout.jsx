import React from "react";
import Navbar from "./navbar";
import { Outlet, useLocation } from "react-router-dom";

export default function Layout() {
    const location = useLocation();
    const navbarClass = "navbar"
    console.log(navbarClass)
    return (
        <>
            <div>
                <Navbar className={navbarClass} />
                <Outlet />
            </div>
        </>
    );
}
