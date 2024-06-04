import React from "react";
import SignUpForm from "../SignUp";
import { useDispatch } from "react-redux";
import { register } from "../../../store/isLoggedInSlice";
import SignInForm from "../SignIn";

export default function CredentialForm() {
  const [signUpState, setSignUpState] = React.useState(false);
  const dispatch = useDispatch();

  /*------------------------------------------------------------------------------------------------*/

  if (signUpState === false) {
    return (
      <div>
        <SignInForm />
        <button
          type="button"
          onClick={() => setSignUpState((prev) => !prev)}
          className="mt-3 w-full rounded bg-orange-500 p-2 text-white hover:bg-orange-700"
        >
          Sign Up
        </button>
      </div>
    );
  } else {
    return (
      <div>
        <SignUpForm />
        <button
          type="button"
          onClick={() => setSignUpState((prev) => !prev)}
          className="mt-3 w-full rounded bg-orange-500 p-2 text-white hover:bg-orange-700"
        >
          Sign In
        </button>
      </div>
    );
  }
}
