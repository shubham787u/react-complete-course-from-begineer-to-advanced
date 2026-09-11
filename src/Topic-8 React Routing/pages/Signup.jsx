import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <form
        action=""
        className="w-full max-w-105 bg-white shodow shadow-gray-500 space-x-8 p-8 px-10 rounded-1x"
      >
        <div>
          <h3 className="text-3xl front-semibold tracking-wider text-blue-500 text-center">
            Signup
          </h3>
          <p className="text-center mt-2 text-gray-500">
            It will take 3 sec...
          </p>
        </div>
        <div>
          <label htmlFor="fullname_input" className="font-semibold text-lg">
            Fullname <sub className="text-red-700 text-lg">*</sub>
          </label>
          <input
            type="text"
            name="fullname"
            id="fullname_input"
            placeholder="Enter your fullname"
            className="mt-1 w-full px-3.5 py-1.75 text-lg border-none right-1 ring-gray-400 focus:ring-1 rounded-md focus:ring-blue-500 "
            required
          />
        </div>
        <br />
        <div>
          <label htmlFor="email_input" className="font-semibold text-lg">
            Email <sub className="text-red-700 text-lg">*</sub>
          </label>
          <input
            type="email"
            name="email"
            id="email_input"
            placeholder="Enter your email  "
            className="mt-1 w-full px-3.5 py-1.75 text-lg border-none ring-1 ring-gray-400 focus:ring-1 rounded-md  focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label htmlFor="password_input" className="font-semibold text-lg">
            Password <sub className="text-red-700 text-lg">*</sub>
          </label>
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            id="password_input"
            placeholder="Enter your password  "
            className="mt-1 w-full px-3.5 py-1.75 text-lg border-none ring-1 ring-gray-400 focus:ring-1 rounded-md  focus:ring-blue-500"
            required
          />
          <div>{showPassword ? <></> : <></>}</div>
        </div>
        <br />
        <div>
          <button
            type="submit"
            className="w-full py-2.5 bg-blue-600 text-white font-semibold tracking-wider rounded-lg hover:cursor-pointer hover:bg-blue-700"
          >
            Signup
          </button>
          <button
            type="reset"
            className="w-full py-2.5 bg-blue-600 text-white font-semibold tracking-wider rounded-lg hover:cursor-pointer hover:bg-blue-700"
          >
            Cancel
          </button>
          <br />
          <p className="text-center mt-2 text-gray-500">
            Already have an account? <Link to="/login">Login</Link>
          </p>
          <br />
        </div>
      </form>
    </div>
  );
};

export default Signup;
