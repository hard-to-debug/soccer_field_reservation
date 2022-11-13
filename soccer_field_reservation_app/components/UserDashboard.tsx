import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";

export default function UserDashboard() {
  const { userInfo } = useAuth();
  return (
    <div className="w-full max-w-[65ch] text-xs sm:text-sm mx-auto flex flex-col gap-3 sm:gap-5">
      {userInfo && <></>}
      <button className="text-cyan-300 border border-solid border-cyan-300 py-2 text-center uppercase text-lg">
        Button
      </button>
    </div>
  );
}
