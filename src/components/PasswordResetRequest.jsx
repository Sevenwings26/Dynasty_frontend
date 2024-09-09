import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import AxiosInstance from "../api/AxiosInstance";
import "../App.css";

const PasswordResetRequest = () => {
  const navigate = useNavigate();
  const { handleSubmit, register } = useForm();
  const [showMessage, setShowMessage] = useState(false);

  const submission = (data) => {
    AxiosInstance.post("api/password_reset/", {
      email: data.email,
    })
      .then((response) => {
        setShowMessage(true);
        Swal.fire({
          icon: "info",
          title: "Check your email",
          text: "If the email exists, you will receive instructions to reset your password.",
          confirmButtonText: "OK",
          confirmButtonColor: "#34D399",
        }).then(() => navigate("/")); // Redirect to home or another page if needed
      })
      .catch((error) => {
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
    <div className="myBackground">
      <div className="max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="text-center text-2xl font-bold mb-6">Request Password Reset</h2>

        <form onSubmit={handleSubmit(submission)}>
          {/* Email Input */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              {...register("email", { required: "Email is required" })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your email"
            />
          </div>

          {/* Submit Button */}
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Request Password Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PasswordResetRequest;
