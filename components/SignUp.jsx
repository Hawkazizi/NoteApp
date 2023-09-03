"use client";
import React, { useState } from "react";
import Link from "next/link";

import Google from "./Auth/authorize";

const SignUp = () => {
  return (
    <div>
      <div className="flex justify-center items-center h-screen bg-blue-grey-900">
        <form className="flex flex-col items-center">
          <h2 className="mb-2 border-2 rounded p-1 border-blue-300">
            Create Your Account
          </h2>
          <input
            type="text"
            placeholder="Full Name"
            className="mb-3 p-2 border text-blue-500"
          />{" "}
          <input
            type="text"
            placeholder="Username"
            className="mb-3 p-2 border text-blue-500"
          />
          <input
            type="password"
            placeholder="Password"
            className="mb-3 p-2 border text-blue-500"
          />
          <button className="bg-blue-500 text-white px-4 py-2 rounded mb-4">
            Create my Account
          </button>{" "}
          <Google />
          <button className=" text-white px-4 py-2 rounded">
            <Link href="./SignIn">Login</Link>
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
