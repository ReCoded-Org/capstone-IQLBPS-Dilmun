import React from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from "yup"
// import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";


const schema = yup.object().shape({
  firstName: yup.string().required("Please insert your First Name"),
  lastName: yup.string().required("Please insert your Last Name"),
  email: yup.string().email().required("Please insert your Email"),
  password: yup.string().min(4).max(15).required("Please insert your Password"),
  confirmPassword: yup.string().oneOf([yup.ref("password"), null]),
});

function SignUp() {

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <div className="bg-background bg-signin-background sm:bg-contain bg-cover bg-no-repeat h-screen flex flex-col justify-center items-center w-screen">
    <h1 className="text-5xl font-bold mb-10 text-primary pt-9 ">SIGN UP</h1>
      <form onSubmit={handleSubmit} className="flex flex-col justufy-center">
        <label htmlFor="first-name">
          <span className="text-primary font-semibold">First Name</span>
          <input
            type="text"
            placeholder="First Name"
            ref={register}
            required
            className="sm:w-96 w-80 shadow-lg focus:outline-none focus:tertiary focus:ring-1 focus:ring-tertiary text-primary rounded-md placeholder:italic placeholder:text-tertiary px-3 py-1 my-3 block duration-500"
          />
          <p> {errors.firstName?.message} </p>
        </label>
        <label htmlFor="last-name">
          <span className="text-primary font-semibold">Last Name</span>
          <input
            type="text"
            placeholder="Last Name"
            ref={register}
            required
            className="sm:w-96 w-80 shadow-lg focus:outline-none focus:tertiary focus:ring-1 focus:ring-tertiary text-primary rounded-md placeholder:italic placeholder:text-tertiary px-3 py-1 my-3 block duration-500"
          />
          <p> {errors.lastName?.message} </p>
        </label>
        <label htmlFor="email">
          <span className="text-primary font-semibold">Email</span>
          <input
            type="email"
            placeholder="Email"
            ref={register}
            required
            className="sm:w-96 w-80 shadow-lg text-primary focus:outline-none focus:tertiary focus:ring-1 focus:ring-tertiary rounded-md placeholder:italic placeholder:text-tertiary px-3 py-1 my-3 block duration-500"
          />
          <p> {errors.email?.message} </p>
        </label>
        <label htmlFor="password">
          <span className="text-primary font-semibold">Password</span>
          <input
            type="password"
            placeholder="Password"
            ref={register}
            required
            className="sm:w-96 w-80 shadow-lg focus:outline-none focus:tertiary focus:ring-1 focus:ring-tertiary text-primary rounded-md placeholder:italic placeholder:text-tertiary px-3 py-1 my-3 block duration-500"
          />
          <p> {errors.password?.message} </p>
        </label>
        <label htmlFor="confirm-password">
          <span className="text-primary font-semibold">Confirm Password</span>
          <input
            type="password"
            placeholder="Confirm Password"
            ref={register}
            required
            className="sm:w-96 w-80 shadow-lg focus:outline-none focus:tertiary focus:ring-1 focus:ring-tertiary text-primary rounded-md placeholder:italic placeholder:text-tertiary px-3 py-1 my-3 block duration-500"
          />
          <p> {errors.confirmPassword && "Passwords Should Match!"} </p>
        </label>
        <button
          type="submit"
          className="sm:w-96 w-80 font-semibold shadow-lg my-2 bg-primary text-background py-2 rounded-md hover:bg-tertiary hover:text-primary duration-500"
        >
          Sign Up
        </button>
        <button
          type="button"
          className="sm:w-96 w-80 font-semibold shadow-lg my-2 bg-primary text-background py-2 rounded-md hover:bg-tertiary hover:text-primary duration-500"
        >
          Sign Up With Google
        </button>
        <button
          type="button"
          className="sm:w-96 w-80 font-semibold shadow-lg my-2 bg-primary text-background py-2 rounded-md hover:bg-tertiary hover:text-primary duration-500"
        >
          Sign Up With Facebook
        </button>
      </form>
    </div>
  );
}

export default SignUp;
