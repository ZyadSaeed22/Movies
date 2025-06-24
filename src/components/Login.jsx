import React, { useState } from "react";


function Login() {
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const validators = {
    name: (value) =>
      value.trim() === "" ? "Name is required" : "",

    username: (value) => {
      if (value.trim() === "") return "Username is required";
      if (value.includes(" ")) return "Username must not contain spaces";
      return "";
    },

    email: (value) => {
      if (value.trim() === "") return "Email is required";
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) return "Invalid email format";
      return "";
    },

    password: (value) => {
      if (value.length < 8) return "Password must be at least 8 characters";
      if (!/[a-z]/.test(value)) return "Password must contain at least one lowercase letter";
      if (!/[A-Z]/.test(value)) return "Password must contain at least one uppercase letter";
      if (!/[0-9]/.test(value)) return "Password must contain at least one digit";
      if (!/[!@#$%^&*(),.?":{}|<>]/.test(value)) return "Password must contain at least one special character";
      return "";
    },

    confirmPassword: (value) => {
      if (value.trim() === "") return "Please confirm your password";
      if (value !== formData.password) return "Passwords do not match";
      return "";
    },
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    setErrors({
      ...errors,
      [name]: validators[name] ? validators[name](value) : "",
    });

    if (name === "password") {
      setErrors((prev) => ({
        ...prev,
        confirmPassword: validators.confirmPassword(formData.confirmPassword),
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();


    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      newErrors[key] = validators[key]
        ? validators[key](formData[key])
        : "";
    });
    setErrors(newErrors);

    const hasErrors = Object.values(newErrors).some((msg) => msg);
    if (!hasErrors) {
      console.log('Form submitted:', formData);
    }
  };

  return (
    
    <form className="max-w-sm mx-auto mt-10 p-6 bg-white rounded shadow-md" onSubmit={handleSubmit} noValidate>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-semibold mb-2">Name</label>
        <input
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-semibold mb-2">Username</label>
        <input
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
        {errors.username && <p style={{ color: 'red' }}>{errors.username}</p>}
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-semibold mb-2">Email</label>
        <input
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
         type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-semibold mb-2">Password</label>
        <input
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-semibold mb-2">Confirm Password</label>
        <input
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
        />
        {errors.confirmPassword && <p style={{ color: 'red' }}>{errors.confirmPassword}</p>}
      </div>

      <button style={{ cursor: 'pointer' }} className="mb-4 p-3 rounded text-[#fff] bg-[#455172]" type="submit">Register</button>
    </form>
  );
}

export default Login;
