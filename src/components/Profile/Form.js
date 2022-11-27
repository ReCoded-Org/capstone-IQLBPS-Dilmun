// import { first } from "lodash";
import React, { useState } from 'react';

import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

function Form({ toggleForm }) {
  const { t } = useTranslation();
  const {
    register,
    // handleSubmit,
    //  reset
  } = useForm();

  const { firstName, setfirstName } = useState('');
  const { lastName, setlastName } = useState('');
  const { country, setcountry } = useState('');
  const { city, setcity } = useState('');
  const { error, setError } = useState('');

  const {
    submitForm,
  } = (e) => {
    e.preventDefault();
    if (
      firstName.length === 0 ||
      lastName.length === 0 ||
      country.length === 0 ||
      city.length === 0
    ) {
      setError(true);
    }
  };
  // const closeModal = React.useCallback(() => setIsOpen(false) , [])

  return (
    <form className="flex flex-col justify-center items-center content-center w-5/6 bg-primary rounded-lg ">
      <div className="bg- py-6 px-10 sm:max-w-md w-full rounded-md">
        <div className="sm:text-3xl text-2xl font-semibold text-center w-full text-primary  mb-12">
          {t('profile.edit_your_profile')}
        </div>
        {/* Image upload component */}
        <div className="flex justify-center mt-6 ">
          <div className="w-full rounded-lg shadow-xl bg-background border-dashed hover:border-primary">
            <div className="m-4">
              <p className=" mb-3 text-primary">
                {t('profile.profile_picture_upload')}
              </p>
              <div className="flex items-center justify-center w-full">
                <div className="flex flex-col border-4 border-dashed hover:border-primary">
                  <div className="flex flex-col items-center justify-center pt-5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-full h-6 text-primary group-hover:text-background"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                    <p className="pt-1 text-sm tracking-wider text-primary">
                      {t('profile.attach_a_file')}
                    </p>
                  </div>
                  <input
                    type="file"
                    className="opacity-0"
                    {...register('profilePic')}
                  />
                </div>
              </div>
              {/* Background Image */}
              <div className="m-4">
                <p className="inline-block mb-3 text-primary">
                  {t('profile.background_picture_upload')}
                </p>
                <div className="flex items-center justify-center w-full">
                  <div className="flex flex-col  border-4 border-dashed hover:border-primary">
                    <div className="flex flex-col items-center justify-center pt-5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 text-primary group-hover:text-background"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                      </svg>
                      <p className="pt-1 text-sm tracking-wider text-primary">
                        {t('profile.attach_a_file')}
                      </p>
                    </div>
                    <input
                      type="file"
                      className="opacity-0"
                      {...register('backgroundPic')}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center p-2">
              <button
                type="button"
                className=" sm:w-96 w-80 font-semibold shadow-lg my-2 bg-primary text-background py-2 rounded-md hover:bg-tertiary hover:text-primary duration-500 "
              >
                {t('profile.upload')}
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center gap-2 items-center">
          <input
            type="text"
            onChange={(e) => setfirstName(e.target.value)}
            className=" w-full p-1 bg-background rounded-lg mt-3 "
            placeholder={t('profile.first_name')}
            {...register('firstName', { required: true, maxLength: 10 })}
          />
          {error ? <p>{t('error.first_name')}</p> : ''}

          <input
            type="text"
            onChange={(e) => setlastName(e.target.value)}
            className=" w-full p-1 bg-background rounded-lg "
            placeholder={t('profile.last_name')}
            {...register('lastName')}
          />
          {error ? <p>{t('error.last_name')}</p> : ''}
          <input
            type="text"
            onChange={(e) => setcountry(e.target.value)}
            className=" w-full p-1 bg-background rounded-lg"
            placeholder={t('profile.country')}
            {...register('country')}
          />
          {error ? <p>{t('error.country')}</p> : ''}
          <input
            type="text"
            onChange={(e) => setcity(e.target.value)}
            className=" w-full p-1 bg-background rounded-lg"
            placeholder={t('profile.city')}
            {...register('city')}
          />
          {error ? <p>{t('error.city')}</p> : ''}
          <button
            type="button"
            onClick={submitForm}
            className="sm:w-96 w-80 font-semibold shadow-lg py-2 bg-primary text-background rounded-md hover:bg-tertiary hover:text-primary duration-500"
          >
            {t('profile.save')}
          </button>
          <button
            type="button"
            onClick={toggleForm}
            className=" sm:w-96 w-80 font-semibold shadow-lg py-2 bg-primary text-background  rounded-md hover:bg-tertiary hover:text-primary duration-500"
          >
            {t('profile.cancel')}
          </button>
        </div>
      </div>
    </form>
  );
}
export default Form;
