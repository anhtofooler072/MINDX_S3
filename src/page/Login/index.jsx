import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CredentialForm from "../../components/Registeration/CredentialFrom";

export default function Login() {
  const loginState = useSelector((state) => state.isLoggedIn.isLoggedIn);

  const navigate = useNavigate();
  if (loginState == false) {
    return (
      <div className="flex w-full flex-col items-center justify-center gap-4">
        <CredentialForm />
      </div>
    );
  } else {
    navigate("/login/user");
  }

}
