import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLogginIn, setIsLogginIn] = useState(true);

  const { login, signup, currentUser } = useAuth();
  // console.log(currentUser);
  async function submitHandler() {
    if (!email || !password) {
      setError("Wpisz email oraz hasło");
      return;
    }
    if (isLogginIn) {
      try {
        await login(email, password);
      } catch (err) {
        setError("Nieprawidłowe dane logowania");
      }
      return;
    }

    await signup(email, password);
  }
  return (
    <div className="flex-1 bg-blue-300 text-xs sm:text-sm flex flex-col justify-center items-center gap-2 sm:gap-4">
      <h1 className="font-extrabold text-2xl select-none sm:text-4xl uppercase">
        {!isLogginIn ? "Logowanie" : "Rejestracja"}
      </h1>
      {error && (
        <div className="w-full max-w-[40ch] border-rose-300 border border-solid text-center text-rose-400 py-2">
          {error}
        </div>
      )}
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="text"
        placeholder="Adres Email"
        className="outline-none text-slate-900 p-2 w-full max-w-[40ch] duration-300 border-b-2 border-solid border-white focus:border-cyan-300"
      />
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="Hasło"
        className="outline-none text-slate-900 p-2 w-full max-w-[40ch] duration-300 border-b-2 border-solid border-white focus:border-cyan-300"
      />
      <button
        onClick={submitHandler}
        className="w-full max-w-[40ch] border border-white border-solid uppercase py-2 duration-300 relative after:absolute after:top-0 after:right-full after:bg-white after:z-10 after:w-full after:h-full overflow-hidden hover:after:translate-x-full after:duration-300 hover:text-slate-900"
      >
        <h2 className="relative z-20">
          {!isLogginIn ? "Logowanie" : "Rejestracja"}
        </h2>
      </button>
      <h2
        className="duration-300 hover-scale-110 cursonr-pionter"
        onClick={() => setIsLogginIn(!isLogginIn)}
      >
        {!isLogginIn ? "Logowanie" : "Rejestracja"}
      </h2>
    </div>
  );
}
