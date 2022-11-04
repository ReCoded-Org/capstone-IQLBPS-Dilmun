import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
  firstName: yup.string().required('Please insert your First Name'),
  lastName: yup.string().required('Please insert your Last Name'),
  email: yup
    .string()
    .email('Should be a valid email')
    .required('Please insert your Email'),
  password: yup
    .string()
    .min(6, 'Should be at least 6 characters')
    .max(15, "Shouldn't be more than 15 characters")
    .required('Please insert your Password'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null])
    .required('Please Confirm Password'),
});

function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-5xl font-bold mb-10 text-primary pt-9">SIGN UP</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col justify-center"
      >
        <label htmlFor="firstName" className='mt-3'>
          <span className="text-primary font-semibold">First Name</span>
          <input
            type="text"
            placeholder="First Name"
            name="firstName"
            {...register('firstName')}
            className="sm:w-96 w-80 shadow-lg focus:outline-none focus:tertiary focus:ring-1 focus:ring-tertiary text-primary rounded-md placeholder:italic placeholder:text-tertiary px-3 py-1 mt-1 block duration-500"
          />
          <p className="text-red-800 font-semibold">
            {errors?.firstName?.message}
          </p>
        </label>
        <label htmlFor="lastName" className='mt-3'>
          <span className="text-primary font-semibold">Last Name</span>
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            {...register('lastName')}
            className="sm:w-96 w-80 shadow-lg focus:outline-none focus:tertiary focus:ring-1 focus:ring-tertiary text-primary rounded-md placeholder:italic placeholder:text-tertiary px-3 py-1 mt-1 block duration-500"
          />
          <p className="text-red-800 font-semibold">
            {' '}
            {errors?.lastName?.message}{' '}
          </p>
        </label>
        <label htmlFor="email" className='mt-3'>
          <span className="text-primary font-semibold">Email</span>
          <input
            type="email"
            name="email"
            placeholder="Email"
            {...register('email')}
            className="sm:w-96 w-80 shadow-lg text-primary focus:outline-none focus:tertiary focus:ring-1 focus:ring-tertiary rounded-md placeholder:italic placeholder:text-tertiary px-3 py-1 mt-1 block duration-500"
          />
          <p className="text-red-800 font-semibold">
            {' '}
            {errors?.email?.message}{' '}
          </p>
        </label>
        <label htmlFor="password" className='mt-3'>
          <span className="text-primary font-semibold">Password</span>
          <input
            type="password"
            name="password"
            placeholder="Password"
            {...register('password')}
            className="sm:w-96 w-80 shadow-lg focus:outline-none focus:tertiary focus:ring-1 focus:ring-tertiary text-primary rounded-md placeholder:italic placeholder:text-tertiary px-3 py-1 mt-1 block duration-500"
          />
          <p className="text-red-800 font-semibold">
            {' '}
            {errors?.password?.message}{' '}
          </p>
        </label>
        <label htmlFor="confirmPassword" className='mt-3'>
          <span className="text-primary font-semibold">Confirm Password</span>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            {...register('confirmPassword')}
            className="sm:w-96 w-80 shadow-lg focus:outline-none focus:tertiary focus:ring-1 focus:ring-tertiary text-primary rounded-md placeholder:italic placeholder:text-tertiary px-3 py-1 mt-1 block duration-500"
          />
          <p className="text-red-800 font-semibold mt-1 mb-3">
            {' '}
            {errors?.confirmPassword?.message && 'Passwords should match'}{' '}
          </p>
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
