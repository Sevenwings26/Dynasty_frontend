import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import AxiosInstance from "../api/AxiosInstance";
import arcadedynasty from '../assets/logo/arcadedynasty.png';

const Login = () => {
  const navigate = useNavigate();
  const { handleSubmit, register, formState: { errors, isSubmitting } } = useForm();

  const submission = (data) => {
    return AxiosInstance.post("login/", {
      email: data.email,
      password: data.password,
    })
      .then((response) => {
        localStorage.setItem("Token", response.data.token);
        if (response.data.username) {
          localStorage.setItem("Username", response.data.username);
        }
        Swal.fire({
          icon: "success",
          title: "Welcome Back",
          text: "Login successful!",
          confirmButtonColor: "#D4AF37",
        }).then(() => navigate(`/`));
      })
      .catch((error) => {
        console.error("Login error:", error);
        Swal.fire({
          icon: "error",
          title: "Login Failed",
          text: "Invalid email or password. Please try again.",
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
            Fashion Portal
          </span>
          <h1 className="text-2xl font-serif text-white font-bold">
            Sign In to Dynasty
          </h1>
        </div>

        <form onSubmit={handleSubmit(submission)} className="space-y-5">
          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-xs uppercase tracking-wider text-zinc-300 mb-1 font-medium">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              {...register("email", { required: "Email address is required" })}
              className={`w-full bg-zinc-950/80 border ${errors.email ? 'border-red-500' : 'border-zinc-700/80'} text-white rounded-xl p-3 text-sm focus:outline-none focus:border-gold-400 transition`}
              placeholder="name@example.com"
            />
            {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>}
          </div>

          {/* Password Field */}
          <div>
            <div className="flex items-center justify-between mb-1">
              <label htmlFor="password" className="block text-xs uppercase tracking-wider text-zinc-300 font-medium">
                Password
              </label>
              <Link to="/request/password_reset" className="text-xs text-gold-400 hover:text-white transition">
                Forgot password?
              </Link>
            </div>
            <input
              type="password"
              id="password"
              {...register("password", { required: "Password is required" })}
              className={`w-full bg-zinc-950/80 border ${errors.password ? 'border-red-500' : 'border-zinc-700/80'} text-white rounded-xl p-3 text-sm focus:outline-none focus:border-gold-400 transition`}
              placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;"
            />
            {errors.password && <p className="text-red-400 text-xs mt-1">{errors.password.message}</p>}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full mt-4 py-3.5 px-4 rounded-xl bg-gold-400 text-black font-semibold text-xs uppercase tracking-[0.2em] hover:bg-white transition duration-300 shadow-glow-gold disabled:opacity-50"
          >
            {isSubmitting ? "Authenticating..." : "Login"}
          </button>

          {/* Register Link */}
          <div className="pt-4 border-t border-zinc-800 text-center">
            <p className="text-xs text-zinc-400">
              Don't have an account yet?{" "}
              <Link to="/register" className="font-semibold text-gold-400 hover:text-white transition">
                Register here
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

