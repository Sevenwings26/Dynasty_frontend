import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import Swal from "sweetalert2";
import AxiosInstance from "../api/AxiosInstance";
import arcadedynasty from "../assets/logo/arcadedynasty.png";

const PasswordResetRequest = () => {
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();
  const [showMessage, setShowMessage] = useState(false);

  const submission = (data) => {
    return AxiosInstance.post("api/password_reset/", { email: data.email })
      .then(() => {
        setShowMessage(true);
        Swal.fire({
          icon: "info",
          title: "Check Your Email",
          text: "If your email exists, you will receive instructions to reset your password.",
          confirmButtonColor: "#D4AF37",
        }).then(() => navigate("/login"));
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "Request Failed",
          text: "There was an error processing your request. Please try again.",
          confirmButtonColor: "#EF4444",
        });
      });
  };

  return (
    <div className="min-h-screen w-full bg-noir-900 flex items-center justify-center p-4 selection:bg-gold-400 selection:text-black">
      <div className="w-full max-w-md bg-zinc-900/90 border border-zinc-800 rounded-3xl p-8 shadow-2xl backdrop-blur-xl">
        <div className="flex flex-col items-center mb-8">
          <Link to="/" className="mb-6">
            <img src={arcadedynasty} alt="Arcade Dynasty" className="h-12 w-auto filter invert brightness-200" />
          </Link>
          <span className="text-xs uppercase tracking-[0.25em] text-gold-400 font-semibold mb-1">
            Account Recovery
          </span>
          <h1 className="text-2xl font-serif text-white font-bold">
            Reset Password
          </h1>
        </div>

        {showMessage && (
          <div className="bg-gold-400/10 border border-gold-400/30 text-gold-300 p-3.5 rounded-xl text-xs leading-relaxed mb-6">
            If your email exists in our system, reset instructions have been dispatched to your inbox.
          </div>
        )}

        <form onSubmit={handleSubmit(submission)} className="space-y-5">
          <div>
            <label htmlFor="email" className="block text-xs uppercase tracking-wider text-zinc-300 mb-1 font-medium">
              Registered Email
            </label>
            <input
              type="email"
              id="email"
              {...register("email", { required: "Email address is required" })}
              className={`w-full bg-zinc-950/80 border ${errors.email ? 'border-red-500' : 'border-zinc-700/80'} text-white rounded-xl p-3 text-sm focus:outline-none focus:border-gold-400 transition`}
              placeholder="name@example.com"
            />
            {errors.email && (
              <p className="text-red-400 text-xs mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full mt-4 py-3.5 px-4 rounded-xl bg-gold-400 text-black font-semibold text-xs uppercase tracking-[0.2em] hover:bg-white transition duration-300 shadow-glow-gold disabled:opacity-50"
          >
            {isSubmitting ? "Sending Request..." : "Request Reset Link"}
          </button>

          <div className="pt-4 border-t border-zinc-800 text-center">
            <Link to="/login" className="text-xs text-zinc-400 hover:text-white transition">
              &larr; Back to Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PasswordResetRequest;

