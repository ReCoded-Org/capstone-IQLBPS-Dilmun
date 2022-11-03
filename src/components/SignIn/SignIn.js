import React from 'react';

function SignIn() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="bg-background bg-signin-background md:bg-contain bg-cover bg-no-repeat h-screen flex flex-col justify-center items-center w-screen">
      <h1 className="text-5xl font-bold mb-10 text-primary pt-9">SIGN IN</h1>
      <form onSubmit={handleSubmit} className="flex flex-col justufy-center">
        <label htmlFor="email">
          <span className="text-primary font-semibold">Email</span>
          <input
            type="email"
            placeholder="Email"
            required
            className="sm:w-96 w-80 shadow-lg text-primary focus:outline-none focus:tertiary focus:ring-1 focus:ring-tertiary rounded-md placeholder:italic placeholder:text-tertiary px-3 py-1 my-3 block duration-500 "
          />
        </label>
        <label htmlFor="password">
          <span className="text-primary font-semibold">Password</span>
          <input
            type="password"
            placeholder="Password"
            required
            className="sm:w-96 w-80 shadow-lg focus:outline-none focus:tertiary focus:ring-1 focus:ring-tertiary text-primary rounded-md placeholder:italic placeholder:text-tertiary px-3 py-1 my-3 block duration-500"
          />
        </label>
        <button
          type="submit"
          className="sm:w-96 w-80 font-semibold shadow-lg my-2 bg-primary text-background py-2 rounded-md hover:bg-tertiary hover:text-primary duration-500"
        >
          Sign In
        </button>
        <button
          type="button"
          className="sm:w-96 w-80 font-semibold shadow-lg my-2 bg-primary text-background py-2 rounded-md hover:bg-tertiary hover:text-primary duration-500"
        >
          Sign In With Google
        </button>
        <button
          type="button"
          className="sm:w-96 w-80 font-semibold shadow-lg my-2 bg-primary text-background py-2 rounded-md hover:bg-tertiary hover:text-primary duration-500"
        >
          Sign In With Facebook
        </button>
      </form>
    </div>
  );
}

export default SignIn;
