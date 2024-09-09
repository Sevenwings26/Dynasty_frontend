// import '../App.css'
// import {React, useState} from 'react'
// import { Box } from '@mui/material'
// import MyTextField from './forms/MyTextField'
// import MyPassField from './forms/MyPassField'
// import MyButton from './forms/MyButton'
// import {useParams } from 'react-router-dom'
// import {useForm} from 'react-hook-form'
// import AxiosInstance from '../api/AxiosInstance'
// import { useNavigate } from 'react-router-dom'
// import MyMessage from './Message'

// const PasswordReset = () =>{
//     const navigate = useNavigate()
//     const {handleSubmit, control} = useForm()
//     const {token} = useParams()
//     console.log(token)
//     const [ShowMessage, setShowMessage] = useState(false)


//     const submission = (data) => {
//         AxiosInstance.post(`api/password_reset/confirm/`,{
//             password: data.password, 
//             token: token,
//         })

//         .then((response) => {
//             setShowMessage(true)
//             setTimeout(() =>{
//                 navigate('/')
//             }, 6000 )
//         })
      
//     }
//     return(
//         <div className={"myBackground"}> 

//         {ShowMessage ? <MyMessage text={"Your password reset was successfull, you will be directed to the login page in a second"} color={'#69C9AB'}/> : null}
//         <form onSubmit={handleSubmit(submission)}>

        

//         <Box className={"whiteBox"}>

//             <Box className={"itemBox"}>
//                 <Box className={"title"}> Reset password </Box>
//             </Box>

//             <Box className={"itemBox"}>
//                 <MyPassField
//                         label={"Password"}
//                         name ={"password"}
//                         control={control}
//                         />
//             </Box>

//             <Box className={"itemBox"}>
//                 <MyPassField
//                         label={"Confirm password"}
//                         name ={"password2"}
//                         control={control}
//                         />
//             </Box>

//             <Box className={"itemBox"}>
//                 <MyButton 
//                     label={"Reset password"}
//                     type={"submit"}
//                 />
//             </Box>

//             <Box className={"itemBox"} sx={{flexDirection:'column'}}>
             
//             </Box>


//         </Box>

//     </form>
        
//     </div>
//     )

// }

// export default PasswordReset


import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import AxiosInstance from "../api/AxiosInstance";
import "../App.css";

const PasswordReset = () => {
  const navigate = useNavigate();
  const { handleSubmit, register, watch } = useForm();
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
      .then((response) => {
        setShowMessage(true);
        Swal.fire({
          icon: "success",
          title: "Password Reset Successful",
          text: "You will be redirected to the login page shortly.",
          confirmButtonText: "OK",
          confirmButtonColor: "#34D399",
        }).then(() => navigate("/"));
      })
      .catch((error) => {
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
    <div className="myBackground">
      <div className="max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="text-center text-2xl font-bold mb-6">Reset Password</h2>

        <form onSubmit={handleSubmit(submission)}>
          {/* Password Input */}
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              {...register("password", { required: "Password is required" })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter new password"
            />
          </div>

          {/* Confirm Password Input */}
          <div className="mb-6">
            <label htmlFor="password2" className="block text-gray-700 text-sm font-bold mb-2">
              Confirm Password
            </label>
            <input
              type="password"
              id="password2"
              {...register("password2", { required: "Please confirm your password" })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Confirm new password"
            />
          </div>

          {/* Submit Button */}
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Reset Password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PasswordReset;
