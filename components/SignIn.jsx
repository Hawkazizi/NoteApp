import React from "react";
import Link from "next/link";
const SignIn = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <form className="flex flex-col items-center">
        <h2 className="mb-2 border-2 rounded p-1 border-blue-300">Sign In</h2>
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
          Sign-In
        </button>
        <button className=" text-white px-4 py-2 rounded">
          <Link href="./SignUp">No Account?</Link>
        </button>
      </form>
    </div>
  );
};

export default SignIn;
