import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { BsFacebook, BsGoogle } from 'react-icons/bs';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import {
  error,
  resetState,
  signInWithFacebook,
  signInWithGoogle,
  signUpWithCredentials,
  status,
  user,
} from '../../features/slices/user';
import { errorTypes } from '../../utils/errorTypes';


function SignUp() {
  const { t } = useTranslation();
  const schema = yup.object().shape({
    firstName: yup.string().required(t('error.first_name')),
    lastName: yup.string().required(t('error.last_name')),
    email: yup
      .string()
      .email(t('error.valid_email'))
      .required(t('error.email')),
    password: yup
      .string()
      .min(6, t('error.min_password'))
      .max(15, t('error.max_password'))
      .required(t('error.password')),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password'), null])
      .required(t('error.confirm_password_required')),
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userData = useSelector(user);
  const userError = useSelector(error);
  const userStatus = useSelector(status);

  // eslint-disable-next-line no-console
  console.log(userData, userError, userStatus);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const callback = () => {
    navigate('/');
  };

  const onSubmit = async (data) => {
    const { email, password, firstName, lastName } = data;
    dispatch(
      signUpWithCredentials({ email, password, firstName, lastName, callback })
    );
  };

  useEffect(() => {
    dispatch(resetState());
  }, []);

  return (
    <div
      className="bg-background md:bg-signin-background md:bg-contain bg-no-repeat w-full min-h-[100vh] h-full flex flex-col justify-center items-center content-center"
      data-testid="sign-up"
    >
      <h1 className="text-5xl font-bold mb-10 text-primary pt-9 uppercase">
        {t('sign_up.sign_up')}
      </h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col justify-center"
      >
        <label htmlFor="firstName" className="mt-3">
          <span className="text-primary font-semibold">
            {t('sign_up.first_name')}
          </span>
          <input
            type="text"
            placeholder={t('sign_up.first_name')}
            name="firstName"
            {...register('firstName')}
            className="sm:w-96 w-80 shadow-lg focus:outline-none focus:tertiary focus:ring-1 focus:ring-tertiary text-primary rounded-md placeholder:italic placeholder:text-tertiary px-3 py-1 mt-1 block duration-500"
          />
          <p className="text-red-800 font-semibold">
            {errors?.firstName?.message}
          </p>
        </label>
        <label htmlFor="lastName" className="mt-3">
          <span className="text-primary font-semibold">
            {t('sign_up.last_name')}
          </span>
          <input
            type="text"
            name="lastName"
            placeholder={t('sign_up.last_name')}
            {...register('lastName')}
            className="sm:w-96 w-80 shadow-lg focus:outline-none focus:tertiary focus:ring-1 focus:ring-tertiary text-primary rounded-md placeholder:italic placeholder:text-tertiary px-3 py-1 mt-1 block duration-500"
          />
          <p className="text-red-800 font-semibold">
            {errors?.lastName?.message}
          </p>
        </label>
        <label htmlFor="email" className="mt-3">
          <span className="text-primary font-semibold">
            {t('sign_up.email')}
          </span>
          <input
            type="email"
            name="email"
            placeholder={t('sign_up.email')}
            {...register('email')}
            className="sm:w-96 w-80 shadow-lg text-primary focus:outline-none focus:tertiary focus:ring-1 focus:ring-tertiary rounded-md placeholder:italic placeholder:text-tertiary px-3 py-1 mt-1 block duration-500"
          />
          <p className="text-red-800 font-semibold">{errors?.email?.message}</p>
        </label>
        <label htmlFor="password" className="mt-3">
          <span className="text-primary font-semibold">
            {t('sign_up.password')}
          </span>
          <input
            type="password"
            name="password"
            placeholder={t('sign_up.password')}
            {...register('password')}
            className="sm:w-96 w-80 shadow-lg focus:outline-none focus:tertiary focus:ring-1 focus:ring-tertiary text-primary rounded-md placeholder:italic placeholder:text-tertiary px-3 py-1 mt-1 block duration-500"
          />
          <p className="text-red-800 font-semibold">
            {errors?.password?.message}
          </p>
        </label>
        <label htmlFor="confirmPassword" className="mt-3">
          <span className="text-primary font-semibold">
            {t('sign_up.confirm_password')}
          </span>
          <input
            type="password"
            placeholder={t('sign_up.confirm_password')}
            {...register('confirmPassword')}
            className="sm:w-96 w-80 shadow-lg focus:outline-none focus:tertiary focus:ring-1 focus:ring-tertiary text-primary rounded-md placeholder:italic placeholder:text-tertiary px-3 py-1 mt-1 block duration-500"
          />
          <p className="text-red-800 font-semibold mt-1 mb-3">
            {errors?.confirmPassword?.message && t('error.confirm_password')}
          </p>
        </label>
        <button
          type="submit"
          className="sm:w-96 w-80 font-semibold shadow-lg my-2 bg-primary text-background py-2 rounded-md hover:bg-tertiary hover:text-primary duration-500"
        >
          {t('sign_up.sign_up')}
        </button>
        {userError && (
          <p className="w-80 sm:w-96 text-center text-red-800 font-semibold">
            {errorTypes[userError.code]}
          </p>
        )}
        <p className="text-lg text-primary self-center mt-2">
          {t('sign_up.already_have_account')}
          <Link
            to="/signin"
            className="underline hover:text-secondary duration-300"
          >
            {t('sign_up.sign_in')}
          </Link>
        </p>
        <p className="text-lg text-primary font-bold self-center my-4 uppercase">
          {t('sign_up.or')}
        </p>
        <p className="text-xl text-primary font-semibold self-center mb-6">
          {t('sign_up.sign_up_with')}
          <button
            type="button"
            onClick={() => dispatch(signInWithFacebook(callback))}
          >
            <BsFacebook className="inline pb-1 h-9 w-9 hover:text-secondary mx-1 duration-200" />
            {t('sign_up.or')}
          </button>
          <button type="button"
           onClick={() => dispatch(signInWithGoogle(callback))}>
            <BsGoogle className="inline pb-1 h-9 w-9 hover:text-secondary mx-1 duration-200" />
            .
          </button>
        </p>
      </form>
    </div>
  );
}

export default SignUp;
