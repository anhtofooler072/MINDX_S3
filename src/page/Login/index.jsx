import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { checkLoggedIn as clgin } from "../../store/isLoggedInSlice";

export default function Login() {
  const loginState = useSelector((state) => state.isLoggedIn.isLoggedIn);
  console.log(loginState);
  const dispatch = useDispatch();
  const stateChanges = () => {
    dispatch(clgin(!loginState));
  };

  return (
    <div className="mt-10 flex flex-col items-center justify-center gap-4">
      <p>Login</p>
      <button
        className="rounded-md bg-slate-600 px-5 py-2 text-xl font-bold text-white transition duration-300 ease-in-out hover:bg-slate-800 hover:shadow-md"
        onClick={stateChanges}
      >
        change
      </button>
      <div>{loginState ? <p>Logged in</p> : <p>Logged out</p>}</div>
    </div>
  );
}
