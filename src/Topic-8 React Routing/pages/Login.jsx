import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const Login = () => {
  const [formData, setFormData] = useState({
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
            Login
          </h3>
          <p className="text-center mt-2 text-gray-500">It will take 3 sec..</p>
        </div>
        <div className="flex flex-col gap-6">
          <div>
            <label htmlFor="email_input" className="font-semibold text-lg">
              Email <sub className="text-red-700 text-lg">*</sub>
            </label>
            <input
              type="email"
              name="email"
              id="email_input"
              placeholder="Enter your email  "
              className="mt-1 w-full px-3.5 py-1.75 text-lg border-none outline-none ring-2 ring-gray-400 focus:ring-2 rounded-md  focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label htmlFor="password_input" className="font-semibold text-lg">
              Password <sub className="text-red-700 text-lg">*</sub>
            </label>
            <div className="reletive">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                id="password_input"
                placeholder="Enter your password at least 8 Char.. "
                className="mt-1 w-full px-3.5 py-1.75 text-lg border-none ring-1 ring-gray-400 focus:ring-2 rounded-md  focus:ring-blue-500"
                required
              />
              <div
                className="absolute top-[55%] right-4 translate-y-[-50%] hover:cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <FaRegEye size={22} />
                ) : (
                  <FaRegEyeSlash size={22} />
                )}
              </div>
            </div>
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="w-full py-2.5 bg-blue-600 text-white font-semibold tracking-wider rounded-lg hover:cursor-pointer hover:bg-blue-700"
          >
            Login
          </button>
          <button
            type="reset"
            className="w-full mt-2 py-2.5 bg-blue-600 text-white font-semibold tracking-wider rounded-lg hover:cursor-pointer hover:bg-blue-700"
          >
            Cancel
          </button>
          <p className="text-center mt-2 text-gray-500">
            Create an account?{""}{" "}
            <Link
              to="/login"
              className="text-blue-600 font-sembold tracking-wide"
            >
              Signup
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
