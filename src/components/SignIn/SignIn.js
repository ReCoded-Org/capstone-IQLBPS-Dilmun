import React from 'react';
import { Link } from 'react-router-dom';
import { BsFacebook, BsGoogle } from 'react-icons/bs';

function SignIn() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="flex flex-col justify-center items-center" data-testid="sign-in">
      <h1 className="text-5xl font-bold mb-10 text-primary pt-9">SIGN IN</h1>
      <form onSubmit={handleSubmit} className="flex flex-col justify-center">
        <label htmlFor="email" className="mt-3" >
          <span className="text-primary font-semibold">Email</span>
          <input
            type="email"
            placeholder="Email"
            required
            className="sm:w-96 w-80 shadow-lg text-primary focus:outline-none focus:tertiary focus:ring-1 focus:ring-tertiary rounded-md placeholder:italic placeholder:text-tertiary px-3 py-1 mt-1 block duration-500 "
          />
        </label>
        <label htmlFor="password" className="mt-3">
          <span className="text-primary font-semibold">Password</span>
          <input
            type="password"
            placeholder="Password"
            required
            className="sm:w-96 w-80 shadow-lg focus:outline-none focus:tertiary focus:ring-1 focus:ring-tertiary text-primary rounded-md placeholder:italic placeholder:text-tertiary px-3 py-1 mt-1 block duration-500"
          />
        </label>
        <button
          type="submit"
          className="sm:w-96 w-80 font-semibold shadow-lg my-2 bg-primary text-background py-2 rounded-md hover:bg-tertiary hover:text-primary duration-500"
        >
          Sign In
        </button>
        <p className="text-lg text-primary self-center mt-2">
          Do Not Have an Account?{' '}
          <Link
            to="/signup"
            className="underline hover:text-tertiary duration-300"
          >
            Sign Up
          </Link>
        </p>
        <p className="text-2xl text-primary font-semibold self-center my-4">
          OR
        </p>
        <p className="text-3xl text-primary font-semibold self-center mb-6">
          Sign in With
          <button type="button">
            <BsFacebook
              type="icon"
              className="inline pb-1 h-9 w-9 hover:text-tertiary mx-1 duration-200"
            />
            or
          </button>
          <button type="button">
            <BsGoogle className="inline pb-1 h-9 w-9 hover:text-tertiary mx-1 duration-200" />
            .
          </button>
        </p>
      </form>
    </div>
  );
}

export default SignIn;
