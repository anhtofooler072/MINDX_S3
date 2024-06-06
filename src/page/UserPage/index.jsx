import React from "react";
import { Logout as RdLgout} from "../../store/isLoggedInSlice";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function UserPage() {
  const loginState = useSelector((state) => state.isLoggedIn.isLoggedIn);
  const username = useSelector((state) => state.isLoggedIn.username);
  const email = useSelector((state) => state.isLoggedIn.email);
  const phone_number = useSelector((state) => state.isLoggedIn.phone_number);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logOut = () => {
    dispatch(RdLgout());
    navigate("/login");
  };

  useEffect(() => {
    if (loginState === false) {
      navigate("/login");
    } else if (loginState === null) {
      navigate("/login");
    } else {
      console.log("Username: ", username);
      console.log("Email: ", email);
      console.log("Phone number: ", phone_number);
    }
  }, [loginState, navigate]);

  return (
    <div className="pt-56">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold">User Page</h1>
        <div className="flex flex-col items-center gap-2">
          <p>Username: {username}</p>
          <p>Email: {email}</p>
          <p>Phone number: {phone_number}</p>
        </div>
        <button
          onClick={logOut}
          className="mt-4 rounded bg-red-500 p-2 text-white"
        >
          log out
        </button>
      </div>
    </div>
  );
}
