import React, { useState } from "react";

function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({ email: "", password: "" });

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

    console.log("Logging in with:", formData);

  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://wallpapers.com/images/hd/movie-poster-background-1920-x-1080-9kjwqg5lf2tuh1qi.jpg')",
      }}
    >
      <div className="bg-white bg-opacity-10 backdrop-blur-md shadow-lg rounded-xl p-8 w-full max-w-md text-white">
        <h2 className="text-3xl font-bold text-center mb-6">Welcome Back</h2>

        <form onSubmit={handleSubmit} noValidate>
          <div className="mb-5">
            <label className="block text-sm mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded bg-white bg-opacity-20 focus:outline-none focus:ring-2 focus:ring-red-500 placeholder-gray-200 text-white"
              placeholder="you@example.com"
            />
            {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
          </div>

          <div className="mb-5">
            <label className="block text-sm mb-1">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded bg-white bg-opacity-20 focus:outline-none focus:ring-2 focus:ring-red-500 placeholder-gray-200 text-white"
              placeholder="••••••••"
            />
            {errors.password && <p className="text-red-400 text-sm mt-1">{errors.password}</p>}
          </div>

          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded transition duration-300"
          >
            Login
          </button>
        </form>

        <p className="text-center text-sm mt-4 text-gray-300">
          Don’t have an account?{" "}
          <a href="/signup" className="text-red-400 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}

export default Login;


