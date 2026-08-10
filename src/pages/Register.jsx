import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import AxiosInstance from "../api/AxiosInstance";
import Swal from "sweetalert2";
import arcadedynasty from '../assets/logo/arcadedynasty.png';

const schema = yup.object({
  username: yup.string().required("Username is required"),
  email: yup
    .string()
    .email("Enter a valid email address")
    .required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters")
    .matches(/[A-Z]/, "Password must contain an uppercase letter")
    .matches(/[a-z]/, "Password must contain a lowercase letter")
    .matches(/[0-9]/, "Password must contain a number")
    .matches(
      /[!@#$%^&*(),.?":;{}|<>+]/,
      "Password must contain a special character"
    ),
  password2: yup
    .string()
    .required("Password confirmation is required")
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});

const Register = () => {
  const navigate = useNavigate();
  const { handleSubmit, register, formState: { errors, isSubmitting } } = useForm({
    resolver: yupResolver(schema),
  });

  const submission = (data) => {
    return AxiosInstance.post('register/', {
      username: data.username,
      email: data.email,
      password: data.password,
    })
    .then((response) => {
      Swal.fire({
        icon: "success",
        title: "Welcome to Dynasty",
        text: "Registration successful! Please login.",
        confirmButtonColor: "#D4AF37",
      });
      navigate('/login');
    })
    .catch((error) => {
      console.error("Registration error:", error);
      if (error.response && error.response.status === 400) {
        if (error.response.data?.email) {
          Swal.fire("Oops!", "Email address is already registered.", "error");
        } else {
          Swal.fire("Oops!", "Registration failed. Please check your information.", "error");
        }
      } else {
        Swal.fire("Oops!", "An unexpected error occurred. Please try again.", "error");
      }
    });
  };

  return (
    <div className="min-h-screen w-full bg-noir-900 flex items-center justify-center p-4 selection:bg-gold-400 selection:text-black">
      <div className="w-full max-w-md bg-zinc-900/90 border border-zinc-800 rounded-3xl p-8 shadow-2xl backdrop-blur-xl my-8">
        <div className="flex flex-col items-center mb-8">
          <Link to="/" className="mb-6">
            <img src={arcadedynasty} alt="Arcade Dynasty" className="h-12 w-auto filter invert brightness-200" />
          </Link>
          <span className="text-xs uppercase tracking-[0.25em] text-gold-400 font-semibold mb-1">
            Join The Dynasty
          </span>
          <h1 className="text-2xl font-serif text-white font-bold">
            Create Account
          </h1>
        </div>

        <form onSubmit={handleSubmit(submission)} className="space-y-4">
          {/* Username Field */}
          <div>
            <label htmlFor="username" className="block text-xs uppercase tracking-wider text-zinc-300 mb-1 font-medium">
              Username
            </label>
            <input
              type="text"
              id="username"
              {...register("username")}
              className={`w-full bg-zinc-950/80 border ${errors.username ? 'border-red-500' : 'border-zinc-700/80'} text-white rounded-xl p-3 text-sm focus:outline-none focus:border-gold-400 transition`}
              placeholder="Username"
            />
            {errors.username && <p className="text-red-400 text-xs mt-1">{errors.username.message}</p>}
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-xs uppercase tracking-wider text-zinc-300 mb-1 font-medium">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              {...register("email")}
              className={`w-full bg-zinc-950/80 border ${errors.email ? 'border-red-500' : 'border-zinc-700/80'} text-white rounded-xl p-3 text-sm focus:outline-none focus:border-gold-400 transition`}
              placeholder="name@example.com"
            />
            {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>}
          </div>

          {/* Password Field */}
          <div>
            <label htmlFor="password" className="block text-xs uppercase tracking-wider text-zinc-300 mb-1 font-medium">
              Password
            </label>
            <input
              type="password"
              id="password"
              {...register("password")}
              className={`w-full bg-zinc-950/80 border ${errors.password ? 'border-red-500' : 'border-zinc-700/80'} text-white rounded-xl p-3 text-sm focus:outline-none focus:border-gold-400 transition`}
              placeholder="At least 8 chars (A-z, 0-9, symbol)"
            />
            {errors.password && <p className="text-red-400 text-xs mt-1">{errors.password.message}</p>}
          </div>

          {/* Confirm Password Field */}
          <div>
            <label htmlFor="password2" className="block text-xs uppercase tracking-wider text-zinc-300 mb-1 font-medium">
              Confirm Password
            </label>
            <input
              type="password"
              id="password2"
              {...register("password2")}
              className={`w-full bg-zinc-950/80 border ${errors.password2 ? 'border-red-500' : 'border-zinc-700/80'} text-white rounded-xl p-3 text-sm focus:outline-none focus:border-gold-400 transition`}
              placeholder="Repeat Password"
            />
            {errors.password2 && <p className="text-red-400 text-xs mt-1">{errors.password2.message}</p>}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full mt-4 py-3.5 px-4 rounded-xl bg-gold-400 text-black font-semibold text-xs uppercase tracking-[0.2em] hover:bg-white transition duration-300 shadow-glow-gold disabled:opacity-50"
          >
            {isSubmitting ? "Creating Account..." : "Register"}
          </button>

          {/* Link to Login */}
          <div className="pt-4 border-t border-zinc-800 text-center">
            <p className="text-xs text-zinc-400">
              Already registered?{" "}
              <Link to="/login" className="font-semibold text-gold-400 hover:text-white transition">
                Sign in here
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;

