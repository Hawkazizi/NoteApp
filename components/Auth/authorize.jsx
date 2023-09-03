import React, { useState } from "react";
import { auth, googelProvider } from "../../config/firebase";
import { signInWithPopup } from "firebase/auth";
import { useRouter } from "next/navigation";

const Google = ({ authorize }) => {
  const router = useRouter();
  const [isAuthorized, setIsAuthorized] = useState(false);
  const googleSignInHandler = async (e) => {
    e.preventDefault();
    try {
      await signInWithPopup(auth, googelProvider);
    } catch (err) {
      console.error(err);
    }
    setIsAuthorized(true);
    authorize();
  };

  if (isAuthorized) {
    router.push("/profile");
  }

  return (
    <div>
      <button
        className="bg-amber-800 text-white px-4 py-2 rounded mb-4"
        onClick={googleSignInHandler}
      >
        Sign in with google
      </button>
    </div>
  );
};

export default Google;
