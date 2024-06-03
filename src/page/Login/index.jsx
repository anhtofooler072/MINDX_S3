import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { checkLoggedIn as clgin } from "../../store/isLoggedInSlice";
import CredentialForm from "../../components/Registeration";

export default function Login() {
  const loginState = useSelector((state) => state.isLoggedIn.isLoggedIn);
  console.log(loginState);
  const dispatch = useDispatch();
  const stateChanges = () => {
    dispatch(clgin(!loginState));
  };

  return (
    <div className="flex w-full flex-col items-center justify-center gap-4">
      <CredentialForm />
    </div>
  );
}
