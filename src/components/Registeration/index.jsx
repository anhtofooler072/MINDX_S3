import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FaEye } from "react-icons/fa6";
import { TbEyeClosed } from "react-icons/tb";

export default function CredentialForm() {
  const [passwordVisible, setPasswordVisible] = React.useState(false);
  const [signUpState, setSignUpState] = React.useState(false);

  // Validation schema for sign in and sign up
  const signInSchema = Yup.object().shape({
    email: Yup.string().email("* Invalid email").required("* Required"),
    password: Yup.string().required("* Required"),
  });
  const signUpSchema = Yup.object().shape({
    email: Yup.string().email("* Invalid email").required("* Required"),
    password: Yup.string().required("* Required"),
    confirmPassword: Yup.string().oneOf(
      [Yup.ref("password"), null],
      "* Passwords must match",
    ),
    phoneNum: Yup.number()
      .required("* Required")
      .min(10, "* Invalid phone number"),
  });

  // Fuction to switch between boolean states
  const switchState = (stateCategories) => {
    const type = typeof stateCategories;
    if (type !== "string") {
      throw new Error("Invalid argument type");
    }
    switch (stateCategories) {
      case "signUpState":
        setSignUpState((prev) => !prev);
        break;
      case "passwordVisibility":
        setPasswordVisible((prev) => !prev);
        console.log(passwordVisible);
        break;
    }
  };

  /*------------------------------------------------------------------------------------------------*/

  if (signUpState === false) {
    /**------------------------------------------------------------------------------------------------
     *                                         sign in form
     *------------------------------------------------------------------------------------------------**/
    return (
      <div className="pt-56">
        <h1 className="mb-5 text-3xl font-bold">Sign In</h1>
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={signInSchema}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          <Form className="flex w-96 flex-col gap-4">
            <label htmlFor="email" className="font-medium">
              Email
            </label>
            <Field
              name="email"
              type="email"
              placeholder="Email"
              className="-mt-3 rounded border border-gray-300 p-2 focus:outline-none"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="-mt-3 text-sm text-red-500"
            />
            <label htmlFor="password" className="font-medium">
              Password
            </label>
            <div className="-mt-3 flex items-center justify-between rounded border border-gray-300 p-2">
              <Field
                name="password"
                type={passwordVisible ? "text" : "password"}
                placeholder="Password"
                className="w-full focus:outline-none"
              />
              {passwordVisible ? (
                <FaEye
                  onClick={() => switchState("passwordVisibility")}
                  className="cursor-pointer"
                />
              ) : (
                <TbEyeClosed
                  onClick={() => switchState("passwordVisibility")}
                  className="cursor-pointer"
                />
              )}
            </div>
            <ErrorMessage
              name="password"
              component="div"
              className="-mt-3 text-sm text-red-500"
            />
            <button
              type="submit"
              className="rounded bg-green-700 p-2 font-bold text-white hover:bg-green-800"
            >
              Sign In
            </button>
            <button
              type="button"
              onClick={() => setSignUpState(true)}
              className="rounded bg-orange-500 p-2 text-white hover:bg-orange-700"
            >
              Sign Up
            </button>
          </Form>
        </Formik>
      </div>
    );
  } else {
    /**------------------------------------------------------------------------------------------------
     *                                         sign up form
     *------------------------------------------------------------------------------------------------**/
    return (
      <div className="pt-56">
        <h1 className="mb-5 text-3xl font-bold">Sign Up</h1>
        <Formik
          initialValues={{
            email: "",
            password: "",
            confirmPassword: "",
            phoneNum: "",
          }}
          validationSchema={signUpSchema}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          <Form className="flex w-96 flex-col gap-4">
            <label htmlFor="email" className="font-medium">
              Email
            </label>
            <Field
              name="email"
              type="email"
              placeholder="Email"
              className="-mt-3 rounded border border-gray-300 p-2 focus:outline-none"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="-mt-3 text-sm text-red-500"
            />
            <label htmlFor="password" className="font-medium">
              Password
            </label>
            <div className="-mt-3 flex items-center justify-between rounded border border-gray-300 p-2">
              <Field
                name="password"
                type={passwordVisible ? "text" : "password"}
                placeholder="Password"
                className="w-full focus:outline-none"
              />
              {passwordVisible ? (
                <FaEye
                  onClick={() => switchState("passwordVisibility")}
                  className="cursor-pointer"
                />
              ) : (
                <TbEyeClosed
                  onClick={() => switchState("passwordVisibility")}
                  className="cursor-pointer"
                />
              )}
            </div>
            <ErrorMessage
              name="password"
              component="div"
              className="-mt-3 text-sm text-red-500"
            />
            <label htmlFor="confirmPassword" className="font-medium">
              Confirm Password
            </label>
            <Field
              name="confirmPassword"
              type="password"
              placeholder="Confirm Password"
              className="-mt-3 rounded border border-gray-300 p-2 focus:outline-none"
            />
            <ErrorMessage
              name="confirmPassword"
              component="div"
              className="-mt-3 text-sm text-red-500"
            />
            <label htmlFor="phoneNum" className="font-medium">
              Phone Number
            </label>
            <Field
              name="phoneNum"
              type="number"
              placeholder="Phone Number"
              className="-mt-3 rounded border border-gray-300 p-2 focus:outline-none"
            />
            <ErrorMessage
              name="phoneNum"
              component="div"
              className="-mt-3 text-sm text-red-500"
            />
            <button
              type="submit"
              className="rounded bg-green-700 p-2 font-bold text-white"
            >
              Sign Up
            </button>
            <button
              type="button"
              onClick={() => setSignUpState(false)}
              className="rounded bg-orange-500 p-2 text-white hover:bg-orange-700"
            >
              Sign In
            </button>
          </Form>
        </Formik>
      </div>
    );
  }
}
