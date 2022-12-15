import { useEffect } from 'react';
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
  signInWithCredentials,
  signInWithFacebook,
  signInWithGoogle,
  status,
  user,
} from '../../features/slices/user';
import { errorTypes } from '../../utils/errorTypes';



function SignIn() {
  const { t } = useTranslation();
  const schema = yup.object().shape({
    email: yup.string().required(t('error.email')),
    password: yup.string().required(t('error.password')),
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

  const onSubmit = (data) => {
    const { email, password } = data;
    dispatch(signInWithCredentials({ email, password, callback }));

  };

  useEffect(() => {
    dispatch(resetState());
  }, []);

  return (
    <div
      className="bg-background md:bg-signin-background md:bg-contain bg-no-repeat w-full min-h-[100vh] flex flex-col justify-center items-center content-center"
      data-testid="sign-in"
    >
      <h1 className="text-5xl font-bold mb-10 text-primary pt-9 uppercase">
        {t('sign_in.sign_in')}
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col justify-center"
      >
        <label htmlFor="email" className="mt-3">
          <span className="text-primary font-semibold">
            {t('sign_in.email')}
          </span>
          <input
            type="email"
            placeholder={t('sign_in.email')}
            name="email"
            {...register('email')}
            className="sm:w-96 w-80 shadow-lg text-primary focus:outline-none focus:tertiary focus:ring-1 focus:ring-tertiary rounded-md placeholder:italic placeholder:text-tertiary px-3 py-1 mt-1 block duration-500 "
          />
          <p className="text-red-800 font-semibold">{errors?.email?.message}</p>
        </label>
        <label htmlFor="password" className="mt-3">
          <span className="text-primary font-semibold">
            {t('sign_in.password')}
          </span>
          <input
            type="password"
            placeholder={t('sign_in.password')}
            name="password"
            {...register('password')}
            className="sm:w-96 w-80 shadow-lg focus:outline-none focus:tertiary focus:ring-1 focus:ring-tertiary text-primary rounded-md placeholder:italic placeholder:text-tertiary px-3 py-1 mt-1 block duration-500"
          />
          <p className="text-red-800 font-semibold">
            {errors?.password?.message}
          </p>
        </label>
        <button
          type="submit"
          className="sm:w-96 w-80 font-semibold shadow-lg my-2 bg-primary text-background py-2 rounded-md hover:bg-tertiary hover:text-primary duration-500"
        >
          {t('sign_in.sign_in')}
        </button>

        {userError && (
          <p className="w-80 sm:w-96 text-center text-red-800 font-semibold">
            {errorTypes[userError.code]}
          </p>
        )}

        <p className="text-lg text-primary self-center mt-2">
          {t('sign_in.dont_have_account')}
          <Link
            to="/signup"
            className="underline hover:text-secondary duration-300"
          >
            {t('sign_in.sign_up')}
          </Link>
        </p>
        <p className="text-lg text-primary font-bold self-center my-4 uppercase">
          {t('sign_in.or')}
        </p>
        <p className="text-xl text-primary font-semibold self-center mb-6">
          {t('sign_in.sign_in_with')}
          <button
            type="button"
            onClick={() => dispatch(signInWithFacebook(callback))}
          >
            <BsFacebook
              type="icon"
              className="inline pb-1 h-9 w-9 hover:text-secondary mx-1 duration-200"
            />
            {t('sign_in.or')}
          </button>
          <button type="button"
          onClick={() => dispatch(signInWithGoogle(callback))}>
            <BsGoogle className="inline pb-1 h-9 w-9 hover:text-secondary mx-1 duration-200" />
            .
          </button>
        </p>

        {userError && (
          <p className="text-red-800 font-semibold">{errorTypes[userError]}</p>
        )}
      </form>
    </div>
  );
}

export default SignIn;
