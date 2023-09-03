"use client";
import Profile from "@/components/Profile";
import { useState } from "react";
import Link from "next/link";
import Google from "@/components/Auth/authorize";

const Page = () => {
  const [isAuthorized, setIsAuthorized] = useState(false); // Initialize with false

  return (
    <div>
      {isAuthorized ? (
        <Profile />
      ) : (
        <div className="ml-6 space-y-4">
          <p>Double check Your Authorization :)</p>{" "}
          <Google authorize={() => setIsAuthorized(true)} />
        </div>
      )}
    </div>
  );
};

export default Page;
