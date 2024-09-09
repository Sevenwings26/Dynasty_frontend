import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import AxiosInstance from "../api/AxiosInstance";
import arcadedynasty from '../assets/logo/arcadedynasty.png'
import "../App.css";

const Login = () => {
  const navigate = useNavigate();
  const { handleSubmit, register, formState: { errors } } = useForm();
  const [showMessage, setShowMessage] = useState(false);

  const submission = (data) => {
    AxiosInstance.post("login/", {
      email: data.email,
      password: data.password,
    })
      .then((response) => {
        localStorage.setItem("Token", response.data.token); // Ensure token is set
        Swal.fire({
          icon: "success",
          title: "Login Successful",
          text: "Welcome back!",
          confirmButtonText: "OK",
          confirmButtonColor: "#34D399",
        }).then(() => navigate(`/`));
      })
      .catch(() => {
        setShowMessage(true);
        Swal.fire({
          icon: "error",
          title: "Login Failed",
          text: "Please check your email and password!",
          confirmButtonText: "Try Again",
          confirmButtonColor: "#EF4444",
        });
      });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <div className="px-6 py-8 mx-auto md:h-screen lg:py-0 myBackground">
        <div className="w-full bg-white rounded-lg shadow-lg md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-3 space-y-4 md:space-y-6">
            <Link to='/' className="flex flex-col items-center mb-6">
              <img src={arcadedynasty} width={'120px'} alt="Arcade Dynasty" />
            </Link>
            <h2 className="text-xl text-center font-bold text-gray-900 md:text-2xl">
              Login
            </h2>
            <form onSubmit={handleSubmit(submission)} className="space-y-4 md:space-y-6">
              {/* Email Field */}
              <div>
                <label htmlFor="email" className="hidden mb-2 text-sm font-medium text-gray-900">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  {...register("email", { required: "Email is required" })}
                  className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 ${errors.email ? 'border-red-500' : ''}`}
                  placeholder="Enter your email"
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
              </div>

              {/* Password Field */}
              <div>
                <label htmlFor="password" className="hidden mb-2 text-sm font-medium text-gray-900">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  {...register("password", { required: "Password is required" })}
                  className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 ${errors.password ? 'border-red-500' : ''}`}
                  placeholder="Enter your password"
                />
                {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-black text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Login
              </button>

              {/* Links for Register and Forgot Password */}
              <div className="mt-4">
                <p className="text-sm font-light text-gray-500">
                  No account yet?{" "}
                  <Link to="/register" className="font-medium text-primary-600 hover:underline text-black">
                    Register here
                  </Link>
                </p>
                <p className="text-sm font-light text-gray-500 mt-2">
                  Forgot your password?{" "}
                  <Link to="/request/password_reset" className="font-medium text-primary-600 hover:underline text-black">
                    Click here
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
