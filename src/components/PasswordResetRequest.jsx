import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import Swal from "sweetalert2";
import AxiosInstance from "../api/AxiosInstance";
import "../App.css";
import arcadedynasty from "../assets/logo/arcadedynasty.png";


const PasswordResetRequest = () => {
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const [showMessage, setShowMessage] = useState(false);

  const submission = (data) => {
    AxiosInstance.post("api/password_reset/", { email: data.email })
      .then(() => {
        setShowMessage(true);
        Swal.fire({
          icon: "info",
          title: "Check your email",
          text: "If the email exists, you will receive instructions to reset your password.",
          confirmButtonText: "OK",
          confirmButtonColor: "#34D399",
        }).then(() => navigate("/"));
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "Request Failed",
          text: "There was an error processing your request. Please try again.",
          confirmButtonText: "Try Again",
          confirmButtonColor: "#EF4444",
        });
      });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-full bg-white rounded-lg shadow-lg md:max-w-md">
        <div className="p-3 space-y-4 md:space-y-6">
          <Link to="/" className="flex flex-col items-center">
            <img src={arcadedynasty} width={"120px"} alt="Arcade Dynasty" />
          </Link>
          <h1 className="text-xl font-bold text-gray-900 text-center mb-6">
            Request Password Reset
          </h1>
          {showMessage && (
            <div className="bg-green-100 border border-green-400 text-green-700 p-3 rounded mb-4">
              If your email exists, you will receive an email with instructions
              for resetting the password.
            </div>
          )}
          <form onSubmit={handleSubmit(submission)} className="space-y-4">
            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                type="email"
                id="email"
                {...register("email", { required: "Email is required" })}
                className={`w-full bg-gray-50 border border-gray-300 rounded-lg p-2.5 text-gray-900 focus:ring-green-500 focus:border-green-500 ${
                  errors.email ? "border-red-500" : ""
                }`}
                placeholder="Enter your email"
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div className="flex items-center justify-center">
              <button
                type="submit"
                // className="w-full bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-green-500"
                className="w-full bg-gray-900 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-red-900"
              >
                Request Password Reset
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PasswordResetRequest;
