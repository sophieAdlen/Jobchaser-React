import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash, faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import {signInWithEmailAndPassword} from "firebase/auth";
import {auth} from "../firebase-config";

function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm();

  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log("Form submitted:",data); // handle form submission here

  const {email, password} = data;

    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log("User signed in:", user);
    navigate("/")
  })
  .catch((error) => {
    console.error("Error logging in", error);
  });
  };

  return(
    <section className="min-w-screen min-h-screen  flex items-center justify-center px-5 py-5">
    <div
      className="rounded-3xl shadow-2xl w-full overflow-hidden"
      style={{ maxWidth: "1000px" }}
    >
      <div className="md:flex w-full">
        <div className="hidden md:block w-1/2 py-10 px-10">
          <img
            className="w-full"
            src="/images/logIn.png"
            alt="login image"
          />
        </div>
        <div className="w-full md:w-1/2 py-10 px-5 md:px-10">
          <div className="text-center mb-10">
            <h1 className="font-bold text-3xl">LOG IN</h1>
          </div>

          <form className="mt-8" onSubmit={handleSubmit(onSubmit)}>
            <div className="mx-auto max-w-lg">
              <div className="py-2">
                <FontAwesomeIcon icon={faEnvelope} />
                <label htmlFor="username" className="px-1 text-sm font-semibold  ">
                  Email
                </label>
                <input
                  id="username"
                  placeholder=""
                  type="text"
                  className="text-md block px-3 py-2 rounded-lg w-full 
               placeholder-gray-600 shadow-md focus:outline-none"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                      message: "Invalid email address"
                    }
                  })}
                />
                {errors.email && <span>{errors.email.message}</span>}
              </div>
              <div className="py-2">
                <FontAwesomeIcon icon={faLock} />
                <label htmlFor="password" className="px-1 text-sm font-semibold  ">
                  Password
                </label>
                <div className="relative">
                  <input
                    id="password"
                    placeholder=""
                    type={showPassword ? "text" : "password"}
                    className="text-md block px-3 py-2 rounded-lg w-full 
               placeholder-gray-600 shadow-md
             
                focus:outline-none"
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 8,
                        message: "Password must be at least 8 characters"
                      }
                    })}
                  />
                  {errors.password && <span>{errors.password.message}</span>}
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <FontAwesomeIcon icon={faEye} />
                      ) : (
                        <FontAwesomeIcon icon={faEyeSlash} />
                      )}
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex justify-between">
                <label className="block font-bold my-4">
                  <input
                    type="checkbox"
                    className="leading-loose"
                  />
                  <span className="py-2 text-sm leading-snug ml-2">
                    Remember Me
                  </span>
                </label>
              </div>
              <button
                type="submit"
                className="mt-3 text-lg font-semibold bg-extraBlue w-full rounded-lg px-6 py-3 block"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
  )
}


export default LoginForm;