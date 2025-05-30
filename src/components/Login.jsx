import React, {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { login as authLogin } from '../store/authSlice'
import {Button, Input, Logo} from "./index"
import {useDispatch} from "react-redux"
import authService from "../appwrite/auth"
import {useForm} from "react-hook-form"

function Login() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {register, handleSubmit} = useForm()
    const [error, setError] = useState("")

    const login = async(data) => {
        setError("")
        try {
            const session = await authService.login(data)
            if (session) {
                const userData = await authService.getCurrentUser()
                if(userData) dispatch(authLogin(userData));
                navigate("/")
            }
        } catch (error) {
            setError(error.message)
        }
    }

  return (
    <div
    className='flex items-center justify-center w-full'
    >
        <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
        <div className="mb-2 flex justify-center">
                    <span className="inline-block w-full max-w-[100px]">
                        <Logo width="100%" />
                    </span>
        </div>
        <h2 className="text-center text-2xl font-bold leading-tight">Sign in to your account</h2>
        <p className="mt-2 text-center text-base text-black/60">
                    Don&apos;t have any account?&nbsp;
                    <Link
                        to="/signup"
                        className="font-medium text-primary transition-all duration-200 hover:underline"
                    >
                        Sign Up
                    </Link>
        </p>
        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
        <form onSubmit={handleSubmit(login)} className='mt-8'>
            <div className='space-y-5'>
                <Input
                label="Email: "
                placeholder="Enter your email"
                type="email"
                {...register("email", {
                    required: true,
                    validate: {
                        matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                        "Email address must be a valid address",
                    }
                })}
                />
                <Input
                label="Password: "
                type="password"
                placeholder="Enter your password"
                {...register("password", {
                    required: true,
                })}
                />
                <Button
                type="submit"
                className="w-full"
                >Sign in</Button>
            </div>
        </form>
        </div>
    </div>
  )
}

export default Login


// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { login as authLogin } from "../store/authSlice";
// import { Button, Input, Logo } from "./index";
// import { useDispatch } from "react-redux";
// import authService from "../appwrite/auth";
// import { useForm } from "react-hook-form";

// function Login() {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();
//   const [error, setError] = useState("");

//   const login = async (data) => {
//     setError("");
//     try {
//       const session = await authService.login(data);
//       if (session) {
//         const userData = await authService.getCurrentUser();
//         if (userData) dispatch(authLogin(userData));
//         navigate("/");
//       }
//     } catch (error) {
//       setError(error.message);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
//       <div className="w-full max-w-md bg-white rounded-xl p-8 shadow-lg border border-gray-200">
//         <div className="mb-6 flex justify-center">
//           <Logo width="80px" />
//         </div>

//         <h2 className="text-center text-3xl font-extrabold text-gray-900 mb-2">
//           Sign in to your account
//         </h2>

//         <p className="text-center text-sm text-gray-600 mb-6">
//           Don&apos;t have an account?&nbsp;
//           <Link
//             to="/signup"
//             className="font-medium text-blue-600 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-400 rounded"
//           >
//             Sign Up
//           </Link>
//         </p>

//         {error && (
//           <p className="text-center text-red-600 mb-4 font-medium">{error}</p>
//         )}

//         <form onSubmit={handleSubmit(login)} className="space-y-5">
//           <Input
//             label="Email"
//             placeholder="Enter your email"
//             type="email"
//             {...register("email", {
//               required: "Email is required",
//               pattern: {
//                 value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
//                 message: "Please enter a valid email address",
//               },
//             })}
//             error={errors.email?.message}
//           />

//           <Input
//             label="Password"
//             placeholder="Enter your password"
//             type="password"
//             {...register("password", {
//               required: "Password is required",
//             })}
//             error={errors.password?.message}
//           />

//           <Button
//             type="submit"
//             className="w-full"
//             bgColor="bg-blue-600"
//             hoverBgColor="hover:bg-blue-700"
//           >
//             Sign In
//           </Button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Login;
