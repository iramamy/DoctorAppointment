import { useState, ComponentPropsWithRef } from "react";
import { Formik, Form, Field } from "formik";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/16/solid";

// Custom components
import FormSchema from "./ValidationForm";

const Login = ({ props }) => {
  const [state, setState] = useState("Sign Up");
  const [shownPassword, setShownPassword] = useState(false);
  const [shownConfirmPassword, setShownConfirmPassword] = useState(false);

  const submitForm = (values) => {
    console.log(values);
  };

  const initialValues =
    state === "Sign Up"
      ? {
          fullName: "",
          email: "",
          password: "",
          confirmPassword: "",
        }
      : {
          email: "",
          password: "",
        };

  const errorClass = "border-red-500";
  const noErrorClass = "border-zinc-300";

  return (
    <div className="mt-5">
      <Formik
        validationSchema={FormSchema({ isSignUp: state === "Sign Up" })}
        initialValues={initialValues}
        onSubmit={submitForm}
      >
        {({ errors, resetForm }) => (
          <Form className="min-h-[80vh] flex items-center">
            <div className="flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg">
              <p className="text-2xl font-semibold">
                {state == "Sign Up" ? "Create account" : "Login"}
              </p>
              <p className="mb-4">
                Please {state == "Sign Up" ? "sign up" : "login"} to book an
                appointment
              </p>
              {state == "Sign Up" ? (
                <div className="flex flex-col w-full">
                  <label htmlFor="">Full name</label>
                  <Field
                    type="text"
                    name="fullName"
                    placeholder="Type your name"
                    className={`border ${
                      errors.fullName ? errorClass : noErrorClass
                    } rounded w-full mt-1 outline-none p-2 focus-within:border-black`}
                  ></Field>
                  {errors.fullName && (
                    <small className="italic text-red-500">
                      {errors.fullName}
                    </small>
                  )}
                </div>
              ) : (
                ""
              )}
              <div className="flex flex-col w-full">
                <label htmlFor="">Email</label>
                <Field
                  type="email"
                  name="email"
                  placeholder="Type your email"
                  className={`border ${
                    errors.email ? errorClass : noErrorClass
                  } rounded w-full mt-1 outline-none p-2 focus-within:border-black`}
                ></Field>
                {errors.email && (
                  <small className="italic text-red-500">{errors.email}</small>
                )}
              </div>
              <div className="flex flex-col w-full">
                <label htmlFor="">Password</label>
                <div
                  className={`border mt-1 flex items-center in rounded overflow-hidden focus-within:border-gray-900
                 ${errors.password ? errorClass : noErrorClass}`}
                >
                  <Field
                    {...props}
                    type={shownPassword ? "text" : "password"}
                    name="password"
                    placeholder="••••••••••••••"
                    className={`rounded w-full outline-none p-2 focus-within:border-black`}
                  ></Field>
                  <button
                    onClick={() => setShownPassword(!shownPassword)}
                    className="p-2 "
                    type="button"
                  >
                    {shownPassword ? (
                      <EyeIcon className="w-5 h-5 text-gray-500" />
                    ) : (
                      <EyeSlashIcon className="w-5 h-5 text-gray-500" />
                    )}
                  </button>
                </div>

                {errors.password && (
                  <small className="italic text-red-500">
                    {errors.password}
                  </small>
                )}
              </div>
              {state == "Sign Up" ? (
                <div className="flex flex-col w-full">
                  <label htmlFor="">Confirm Password</label>
                  <div
                    className={`border mt-1 flex items-center in rounded overflow-hidden focus-within:border-gray-900
                 ${errors.confirmPassword ? errorClass : noErrorClass}`}
                  >
                    <Field
                      {...props}
                      type={shownConfirmPassword ? "text" : "password"}
                      name="confirmPassword"
                      placeholder="••••••••••••••"
                      className={`rounded w-full outline-none p-2 focus-within:border-black`}
                    ></Field>
                    <button
                      onClick={() =>
                        setShownConfirmPassword(!shownConfirmPassword)
                      }
                      className="p-2 "
                      type="button"
                    >
                      {shownConfirmPassword ? (
                        <EyeIcon className="w-5 h-5 text-gray-500" />
                      ) : (
                        <EyeSlashIcon className="w-5 h-5 text-gray-500" />
                      )}
                    </button>
                  </div>

                  {errors.confirmPassword && (
                    <small className="italic text-red-500">
                      {errors.confirmPassword}
                    </small>
                  )}
                </div>
              ) : (
                ""
              )}
              <button
                type="submit"
                className="bg-primary text-white w-full py-2 rounded-md text-base mb-4"
              >
                {state == "Sign Up" ? "Create account" : "Login"}
              </button>

              {state == "Sign Up" ? (
                <p>
                  Already have an account?{" "}
                  <span
                    className="text-primary hover:text-blue-800 hover:underline cursor-pointer"
                    onClick={() => {
                      setState("Login");
                      resetForm();
                    }}
                  >
                    Login here
                  </span>
                </p>
              ) : (
                <p>
                  Don't have an account yet?{" "}
                  <span
                    className="text-primary hover:text-blue-800 hover:underline cursor-pointer"
                    onClick={() => {
                      setState("Sign Up");
                      resetForm();
                    }}
                  >
                    Click here
                  </span>
                </p>
              )}
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
