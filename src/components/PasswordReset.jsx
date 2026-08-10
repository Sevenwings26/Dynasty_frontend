import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams, Link } from "react-router-dom";
import Swal from "sweetalert2";
import AxiosInstance from "../api/AxiosInstance";
import arcadedynasty from "../assets/logo/arcadedynasty.png";

const PasswordReset = () => {
  const navigate = useNavigate();
  const { handleSubmit, register, formState: { errors, isSubmitting } } = useForm();
  const { token } = useParams();
  const [showMessage, setShowMessage] = useState(false);

  const submission = (data) => {
    if (data.password !== data.password2) {
      Swal.fire({
        icon: "error",
        title: "Passwords Do Not Match",
        text: "Please ensure both password fields match exactly.",
        confirmButtonColor: "#EF4444",
      });
      return;
    }

    return AxiosInstance.post("api/password_reset/confirm/", {
      password: data.password,
      token: token,
    })
      .then(() => {
        setShowMessage(true);
        Swal.fire({
          icon: "success",
          title: "Password Reset Complete",
          text: "Your password has been updated. Please sign in.",
          confirmButtonColor: "#D4AF37",
        }).then(() => navigate("/login"));
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "Password Reset Failed",
          text: "The reset link may be invalid or expired. Please request a new link.",
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
            Security Update
          </span>
          <h1 className="text-2xl font-serif text-white font-bold">
            Set New Password
          </h1>
        </div>

        {showMessage && (
          <div className="bg-gold-400/10 border border-gold-400/30 text-gold-300 p-3.5 rounded-xl text-xs leading-relaxed mb-6">
            Your password has been reset successfully. Redirecting to login...
          </div>
        )}

        <form onSubmit={handleSubmit(submission)} className="space-y-5">
          <div>
            <label htmlFor="password" className="block text-xs uppercase tracking-wider text-zinc-300 mb-1 font-medium">
              New Password
            </label>
            <input
              type="password"
              id="password"
              {...register("password", { required: "New password is required" })}
              className={`w-full bg-zinc-950/80 border ${errors.password ? 'border-red-500' : 'border-zinc-700/80'} text-white rounded-xl p-3 text-sm focus:outline-none focus:border-gold-400 transition`}
              placeholder="Enter new password"
            />
            {errors.password && (
              <p className="text-red-400 text-xs mt-1">{errors.password.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="password2" className="block text-xs uppercase tracking-wider text-zinc-300 mb-1 font-medium">
              Confirm New Password
            </label>
            <input
              type="password"
              id="password2"
              {...register("password2", { required: "Please confirm your new password" })}
              className={`w-full bg-zinc-950/80 border ${errors.password2 ? 'border-red-500' : 'border-zinc-700/80'} text-white rounded-xl p-3 text-sm focus:outline-none focus:border-gold-400 transition`}
              placeholder="Repeat new password"
            />
            {errors.password2 && (
              <p className="text-red-400 text-xs mt-1">{errors.password2.message}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full mt-4 py-3.5 px-4 rounded-xl bg-gold-400 text-black font-semibold text-xs uppercase tracking-[0.2em] hover:bg-white transition duration-300 shadow-glow-gold disabled:opacity-50"
          >
            {isSubmitting ? "Updating Password..." : "Confirm New Password"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default PasswordReset;

