import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage({ setIsLoggedIn }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const validateEmail = (email) => {
    // Simple email regex pattern
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      alert("Please enter a valid email address.");
      return;
    }
    if (password.length < 8) {
      alert("Password must be at least 8 characters long.");
      return;
    }

    // Successful login
    setIsLoggedIn(true);
    navigate("/add-task");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-white">
      <div className="bg-gray-100 w-full max-w-sm p-8 rounded-2xl shadow-lg">
        <h2 className="text-3xl font-semibold text-center text-gray-700 mb-8">
          Welcome Back 👋
        </h2>
        <form onSubmit={handleLogin} className="space-y-6">
          {/* Email Input */}
          <div className="relative">
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="peer w-full border-b-2 border-gray-300 bg-transparent py-2 px-1 text-gray-800 focus:outline-none focus:border-gray-600"
              placeholder=" "
              required
            />
            <label
              htmlFor="email"
              className="absolute left-1 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-[-10px] peer-focus:text-sm peer-focus:text-gray-600 bg-gray-100 px-1"
            >
              Email Address
            </label>
          </div>

          {/* Password Input */}
          <div className="relative">
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="peer w-full border-b-2 border-gray-300 bg-transparent py-2 px-1 text-gray-800 focus:outline-none focus:border-gray-600"
              placeholder=" "
              required
            />
            <label
              htmlFor="password"
              className="absolute left-1 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-[-10px] peer-focus:text-sm peer-focus:text-gray-600 bg-gray-100 px-1"
            >
              Password
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-gray-600 text-white py-2 rounded-lg font-semibold hover:bg-gray-700 transition-all"
          >
            Login
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-6">
          Enter a valid email and 8+ digit password to continue.
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
