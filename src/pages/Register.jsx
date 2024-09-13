// import React from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";
// import AxiosInstance from "../api/AxiosInstance";
// import Swal from "sweetalert2";
// import arcadedynasty from '../assets/logo/arcadedynasty.png'
// // import Header from "../components/Header";

// // Yup validation schema
// const schema = yup.object({
//   username: yup.string().required("Username is a required field"),
//   email: yup
//     .string()
//     .email("Field expects an email address")
//     .required("Email is a required field"),
//   password: yup
//     .string()
//     .required("Password is a required field")
//     .min(8, "Password must be at least 8 characters")
//     .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
//     .matches(/[a-z]/, "Password must contain at least one lowercase letter")
//     .matches(/[0-9]/, "Password must contain at least one number")
//     .matches(
//       /[!@#$%^&*(),.?":;{}|<>+]/,
//       "Password must contain at least one special character"
//     ),
//   password2: yup
//     .string()
//     .required("Password confirmation is a required field")
//     .oneOf([yup.ref("password"), null], "Passwords must match"),
// });

// const Register = () => {
//   const navigate = useNavigate();
//   const { handleSubmit, register, formState: { errors } } = useForm({
//     resolver: yupResolver(schema),
//   });

//   const submission = (data) => {
//     AxiosInstance.post(`register/`, {
//       username: data.username,
//       email: data.email,
//       password: data.password,
//     })
//       .then(() => {
//         Swal.fire("Welcome!", "Registration successful!", "success");
//         navigate(`/login`);
//       })
//       .catch(() => {
//         Swal.fire("Oops!", "Registration failed. Please try again.", "error");
//       });
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex flex-col">
//       {/* <Header /> */}
//       <div className="px-6 py-8 mx-auto md:h-screen lg:py-0 myBackground">
//         <div className="w-full bg-white rounded-lg shadow-lg md:mt-0 sm:max-w-md xl:p-0">
//           <div className="p-3 space-y-4 md:space-y-6">
//             <Link to='/' className="flex flex-col items-center">
//               <img src={arcadedynasty} width={'120px'} alt="Arcade Dynasty" />
//             </Link>
//             <h1 className="text-xl text-center font-bold text-gray-900 md:text-2xl">
//               New User Registration 
//             </h1>
//             <form onSubmit={handleSubmit(submission)} className="space-y-4 md:space-y-6">
//               {/* Username Field */}
//               <div>
//                 <label htmlFor="username" className="hidden mb-2 text-sm font-medium text-gray-900">
//                   Username
//                 </label>
//                 <input
//                   type="text"
//                   id="username"
//                   {...register("username")}
//                   className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 ${errors.username ? 'border-red-500' : ''}`}
//                   placeholder="Username"
//                 />
//                 {errors.username && <p className="text-red-500 text-xs mt-1">{errors.username.message}</p>}
//               </div>

//               {/* Email Field */}
//               <div>
//                 <label htmlFor="email" className="hidden mb-2 text-sm font-medium text-gray-900">
//                   Email
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   {...register("email")}
//                   className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 ${errors.email ? 'border-red-500' : ''}`}
//                   placeholder="Email Address"
//                 />
//                 {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
//               </div>

//               {/* Password Field */}
//               <div>
//                 <label htmlFor="password" className="hidden mb-2 text-sm font-medium text-gray-900">
//                   Password
//                 </label>
//                 <input
//                   type="password"
//                   id="password"
//                   {...register("password")}
//                   className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 ${errors.password ? 'border-red-500' : ''}`}
//                   placeholder="Password"
//                 />
//                 {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
//               </div>

//               {/* Confirm Password Field */}
//               <div>
//                 <label htmlFor="password2" className="hidden mb-2 text-sm font-medium text-gray-900">
//                   Confirm Password
//                 </label>
//                 <input
//                   type="password"
//                   id="password2"
//                   {...register("password2")}
//                   className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 ${errors.password2 ? 'border-red-500' : ''}`}
//                   placeholder="Repeat Password"
//                 />
//                 {errors.password2 && <p className="text-red-500 text-xs mt-1">{errors.password2.message}</p>}
//               </div>

//               {/* Submit Button */}
//               <button
//                 type="submit"
//                 className="w-full bg-black text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
//               >
//                 Register
//               </button>

//               {/* Link to Login */}
//               <p className="text-sm font-light text-gray-500">
//                 Already registered?{" "}
//                 <Link to="/login" className="font-medium text-primary-600 hover:underline text-black">
//                   Login here
//                 </Link>
//               </p>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Register;


import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import AxiosInstance from "../api/AxiosInstance";
import Swal from "sweetalert2";
import arcadedynasty from '../assets/logo/arcadedynasty.png';

// Yup validation schema
const schema = yup.object({
  username: yup.string().required("Username is a required field"),
  email: yup
    .string()
    .email("Field expects an email address")
    .required("Email is a required field"),
  password: yup
    .string()
    .required("Password is a required field")
    .min(8, "Password must be at least 8 characters")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/[0-9]/, "Password must contain at least one number")
    .matches(
      /[!@#$%^&*(),.?":;{}|<>+]/,
      "Password must contain at least one special character"
    ),
  password2: yup
    .string()
    .required("Password confirmation is a required field")
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});

const Register = () => {
  const navigate = useNavigate();
  const { handleSubmit, register, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const submission = (data) => {
    AxiosInstance.post(`register/`, {
      username: data.username,
      email: data.email,
      password: data.password,
    })
      .then(() => {
        Swal.fire("Welcome!", "Registration successful!", "success");
        navigate(`/login`);
      })
      .catch((error) => {
        if (error.response && error.response.status === 400) {
          // Check if the error response contains a specific message for the email
          if (error.response.data.email) {
            Swal.fire("Oops!", "Email address is already in use.", "error");
          } else {
            Swal.fire("Oops!", "Registration failed. Please try again.", "error");
          }
        } else {
          Swal.fire("Oops!", "An unexpected error occurred. Please try again.", "error");
        }
      });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <div className="px-6 py-8 mx-auto md:h-screen lg:py-0 myBackground">
        <div className="w-full bg-white rounded-lg shadow-lg md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-3 space-y-4 md:space-y-6">
            <Link to='/' className="flex flex-col items-center">
              <img src={arcadedynasty} width={'120px'} alt="Arcade Dynasty" />
            </Link>
            <h1 className="text-xl text-center font-bold text-gray-900 md:text-2xl">
              New User Registration 
            </h1>
            <form onSubmit={handleSubmit(submission)} className="space-y-4 md:space-y-6">
              {/* Username Field */}
              <div>
                <label htmlFor="username" className="hidden mb-2 text-sm font-medium text-gray-900">
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  {...register("username")}
                  className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 ${errors.username ? 'border-red-500' : ''}`}
                  placeholder="Username"
                />
                {errors.username && <p className="text-red-500 text-xs mt-1">{errors.username.message}</p>}
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="hidden mb-2 text-sm font-medium text-gray-900">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  {...register("email")}
                  className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 ${errors.email ? 'border-red-500' : ''}`}
                  placeholder="Email Address"
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
                  {...register("password")}
                  className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 ${errors.password ? 'border-red-500' : ''}`}
                  placeholder="Password"
                />
                {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
              </div>

              {/* Confirm Password Field */}
              <div>
                <label htmlFor="password2" className="hidden mb-2 text-sm font-medium text-gray-900">
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="password2"
                  {...register("password2")}
                  className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 ${errors.password2 ? 'border-red-500' : ''}`}
                  placeholder="Repeat Password"
                />
                {errors.password2 && <p className="text-red-500 text-xs mt-1">{errors.password2.message}</p>}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-gray-900 hover:bg-gray-700 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Register
              </button>

              {/* Link to Login */}
              <p className="text-sm font-light text-gray-500">
                Already registered?{" "}
                <Link to="/login" className="font-medium text-primary-600 hover:underline text-black">
                  Login here
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
