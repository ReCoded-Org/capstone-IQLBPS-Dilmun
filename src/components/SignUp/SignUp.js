import React from 'react';

function SignUp() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="bg-background h-screen flex flex-col justify-center items-center w-screen">
    <h1 className="text-5xl font-bold mb-10 text-primary ">SIGN UP</h1>
      <form onSubmit={handleSubmit} className="flex flex-col justufy-center">
        <label htmlFor="first-name">
          <span className="text-primary font-semibold">First Name</span>
          <input
            type="text"
            placeholder="First Name"
            required
            className="focus:outline-none focus:tertiary focus:ring-1 focus:ring-tertiary text-primary rounded-md placeholder:italic placeholder:text-tertiary px-3 py-1 my-3 block"
          />
        </label>
        <label htmlFor="last-name">
          <span className="text-primary font-semibold">Last Name</span>
          <input
            type="text"
            placeholder="Last Name"
            required
            className="focus:outline-none focus:tertiary focus:ring-1 focus:ring-tertiary text-primary rounded-md placeholder:italic placeholder:text-tertiary px-3 py-1 my-3 block"
          />
        </label>
        <label htmlFor="email">
          <span className="text-primary font-semibold">Email</span>
          <input
            type="email"
            placeholder="Email"
            required
            className="text-primary focus:outline-none focus:tertiary focus:ring-1 focus:ring-tertiary rounded-md placeholder:italic placeholder:text-tertiary px-3 py-1 my-3 block"
          />
        </label>
        <label htmlFor="password">
          <span className="text-primary font-semibold">Password</span>
          <input
            type="password"
            placeholder="Password"
            required
            className="focus:outline-none focus:tertiary focus:ring-1 focus:ring-tertiary text-primary rounded-md placeholder:italic placeholder:text-tertiary px-3 py-1 my-3 block"
          />
        </label>
        <label htmlFor="confirm-password">
          <span className="text-primary font-semibold">Confirm Password</span>
          <input
            type="password"
            placeholder="Confirm Password"
            required
            className="focus:outline-none focus:tertiary focus:ring-1 focus:ring-tertiary text-primary rounded-md placeholder:italic placeholder:text-tertiary px-3 py-1 my-3 block"
          />
        </label>
        <button
          type="submit"
          className="my-2 bg-primary text-background py-2 rounded-md hover:bg-tertiary hover:text-primary duration-500"
        >
          Sign Up
        </button>
        <button
          type="button"
          className="my-2 bg-primary text-background py-2 rounded-md hover:bg-tertiary hover:text-primary duration-500"
        >
          Sign Up With Google
        </button>
        <button
          type="button"
          className="my-2 bg-primary text-background py-2 rounded-md hover:bg-tertiary hover:text-primary duration-500"
        >
          Sign Up With Facebook
        </button>
      </form>
    </div>
  );
}

export default SignUp;
