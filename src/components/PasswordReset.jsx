import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import AxiosInstance from "../api/AxiosInstance";
import "../App.css";
import arcadedynasty from "../assets/logo/arcadedynasty.png";

const PasswordReset = () => {
  const navigate = useNavigate();
  const { handleSubmit, register, watch, formState: { errors } } = useForm();
  const { token } = useParams();
  const [showMessage, setShowMessage] = useState(false);

  const submission = (data) => {
    if (data.password !== data.password2) {
      Swal.fire({
        icon: "error",
        title: "Passwords do not match",
        text: "Please ensure both password fields match.",
        confirmButtonText: "Try Again",
        confirmButtonColor: "#EF4444",
      });
      return;
    }

    AxiosInstance.post("api/password_reset/confirm/", {
      password: data.password,
      token: token,
    })
      .then(() => {
        setShowMessage(true);
        Swal.fire({
          icon: "success",
          title: "Password Reset Successful",
          text: "You will be redirected to the login page shortly.",
          confirmButtonText: "OK",
          confirmButtonColor: "#34D399",
        }).then(() => navigate("/login"));
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "Password Reset Failed",
          text: "There was an error resetting your password. Please try again.",
          confirmButtonText: "Try Again",
          confirmButtonColor: "#EF4444",
        });
      });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-full bg-white rounded-lg shadow-lg md:max-w-md">
        <div className="p-3 space-y-4 md:space-y-6">
          <div className="flex flex-col items-center mb-6">
            <img src={arcadedynasty} width={"120px"} alt="Arcade Dynasty" />
          </div>
          <h1 className="text-xl font-bold text-gray-900 text-center mb-6">
            Reset Password
          </h1>
          {showMessage && (
            <div className="bg-green-100 border border-green-400 text-green-700 p-3 rounded mb-4">
              Your password has been reset successfully. You will be redirected to the login page.
            </div>
          )}
          <form onSubmit={handleSubmit(submission)} className="space-y-4">
            {/* Password Input */}
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                type="password"
                id="password"
                {...register("password", { required: "Password is required" })}
                className={`w-full bg-gray-50 border border-gray-300 rounded-lg p-2.5 text-gray-900 focus:ring-green-500 focus:border-green-500 ${
                  errors.password ? "border-red-500" : ""
                }`}
                placeholder="Enter new password"
              />
              {errors.password && (
                <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>
              )}
            </div>

            {/* Confirm Password Input */}
            <div>
              <label htmlFor="password2" className="sr-only">
                Confirm Password
              </label>
              <input
                type="password"
                id="password2"
                {...register("password2", { required: "Please confirm your password" })}
                className={`w-full bg-gray-50 border border-gray-300 rounded-lg p-2.5 text-gray-900 focus:ring-green-500 focus:border-green-500 ${
                  errors.password2 ? "border-red-500" : ""
                }`}
                placeholder="Confirm new password"
              />
              {errors.password2 && (
                <p className="text-red-500 text-xs mt-1">{errors.password2.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <div className="flex items-center justify-center">
              <button
                type="submit"
                className="w-full bg-gray-900 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-red-900"
              >
                Reset Password
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PasswordReset;
