import React, { useContext, useState } from "react";
import { authContext } from "../Context/Auth";
import { useNavigate, useLocation } from "react-router-dom";

function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({ email: "", password: "" });

  const navigate = useNavigate();
  const location = useLocation();
  
  const { login } = useContext(authContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === "email") {
      setErrors({
        ...errors,
        email: value.trim() === "" ? "Email is required" : "",
      });
    }
    if (name === "password") {
      setErrors({
        ...errors,
        password: value.trim() === "" ? "Password is required" : "",
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      setErrors({
        email: formData.email ? "" : "Email is required",
        password: formData.password ? "" : "Password is required",
      });
      return;
    }

    login(formData);
    const redirectPath = location.state?.from?.pathname || "/";
    navigate(redirectPath, { replace: true });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black">
  <div className="bg-gray-800/90 border border-gray-700 backdrop-blur-sm shadow-2xl rounded-xl p-8 w-full max-w-sm text-white animate-fadeInUp">
    <h2 className="text-3xl font-extrabold text-center mb-2 drop-shadow">
      🎬 Welcome 
    </h2>
    <p className="text-center text-gray-400 mb-6">Sign in to continue</p>

    <form onSubmit={handleSubmit} noValidate>
      <div className="mb-5">
        <label className="block text-sm mb-1">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400 text-white"
          placeholder="you@example.com"
        />
        {errors.email && (
          <p className="text-red-400 text-sm mt-1">{errors.email}</p>
        )}
      </div>

      <div className="mb-5">
        <label className="block text-sm mb-1">Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400 text-white"
          placeholder="••••••••"
        />
        {errors.password && (
          <p className="text-red-400 text-sm mt-1">{errors.password}</p>
        )}
      </div>

      <button
        type="submit"
        className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold py-3 rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105"
      >
        Login
      </button>
    </form>

    <div className="mt-6">
      <div className="flex items-center my-4">
        <hr className="flex-grow border-gray-600" />
        <span className="mx-2 text-gray-400 text-sm">OR</span>
        <hr className="flex-grow border-gray-600" />
      </div>

      <button
  className="w-full flex items-center justify-center gap-2 bg-purple-700 hover:bg-purple-600 text-white font-semibold py-2 rounded-md transition"
>
  <svg className="w-5 h-5" viewBox="0 0 48 48">
    <path
      fill="#FFC107"
      d="M43.6 20.5H42V20H24v8h11.3C34.2 32 29.6 35 24 35c-6.6 0-12-5.4-12-12s5.4-12 12-12c3 0 5.7 1.1 7.7 3l5.7-5.7C33.9 5.6 29.2 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20c11 0 20-8 20-20 0-1.3-.1-2.7-.4-3.5z"
    />
    <path
      fill="#FF3D00"
      d="M6.3 14.7l6.6 4.8C14.2 16 18.8 13 24 13c3 0 5.7 1.1 7.7 3l5.7-5.7C33.9 5.6 29.2 4 24 4c-7.4 0-13.9 3.2-17.7 8.3z"
    />
    <path
      fill="#4CAF50"
      d="M24 44c5.4 0 10.3-2 14-5.3l-6.5-5.3C29.7 35.9 27 37 24 37c-5.6 0-10.2-3.7-11.8-8.8l-6.5 5C9.8 40.2 16.4 44 24 44z"
    />
    <path
      fill="#1976D2"
      d="M43.6 20.5H42V20H24v8h11.3c-1.2 3.3-4.1 5.8-7.3 6.7l6.5 5C38.5 36.2 42 30.8 42 24c0-1.3-.1-2.7-.4-3.5z"
    />
  </svg>
  Continue with Google
</button>


     
    </div>

    <p className="text-center text-sm mt-4 text-gray-300">
      Don’t have an account?{" "}
      <a href="/signup" className="text-pink-400 hover:underline">
        Sign up
      </a>
    </p>
  </div>
</div>

  );
}

export default Login;



