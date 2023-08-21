import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/router";
import Logos from "./components/logos";
import { ReactMatrixAnimation } from "react-matrix-animation";

const Login = () => {
  const router = useRouter();

  const handleSignup = (event) => {
    event.preventDefault();
    router.push("/riddles");
  };

  return (
    <div className="relative">
      <ReactMatrixAnimation />
    <div className="flex flex-col md:flex-row h-full">
      <div className="md:w-[50%] bg-black p-6">
        <Logos />
      </div>
      <div className="md:w-[50%] md:bg-custom-161616">
        <div className="flex flex-col md:items-center p-6">
          <h1 className="text-green-600 font-semibold justify-center items-center md:justify-center md:items-center text-4xl mb-4 mt-6 p-2">
            LOGIN
          </h1>
          <form className="flex flex-col w-full">
            <label className="text-white text-2xl font-normal mb-2 items-baseline" htmlFor="Email">
              Email
            </label>
            <input
              className="border rounded-lg w-full py-2 px-3 text-gray-500 bg-opacity-0 bg-black mb-5 mt-1"
              id="Email"
              placeholder="Enter your Email"
              required
            />

            <label className="text-white text-2xl font-normal" htmlFor="password">
              Password
            </label>
            <input
              className="border rounded-lg w-full py-2 px-3 text-gray-500 bg-opacity-0 bg-black p-4 mb-5 mt-1 "
              id="password"
              type="password"
              placeholder="Enter Password"
              required
            />
            <div className="flex flex-col md:flex-row items-center justify-between">
              <p className="text-white text-xl font-normal" type="button">
                Don't have an account?
                <a href="/signup" className="inline-block align-baseline font-normal text-xl md:ml-60 ml-10">
                  Sign up
                </a>
              </p>
            </div>
            <div className="flex justify-center mt-4">
              <button
                type="submit"
                className="inline-block align-baseline font-semibold text-2xl bg-yellow-500 w-[350px] h-[50px] rounded py-2 px-4 text-black"
              >
                LogIn
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Login;
