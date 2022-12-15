import { addDoc, collection, getDocs, query, where } from 'firebase/firestore';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Trans, useTranslation } from 'react-i18next';
import { db } from '../../firebase-config';
import CustomButton from '../CustomComponents/CustomButton';

const NewsLetter = () => {
  const { t } = useTranslation();
  const [error, setError] = useState('');
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async ({ email }) => {
    const subscriberRef = collection(db, 'Subscribers');
    const q = query(subscriberRef, where('email', '==', email));
    const querySnapshot = await getDocs(q);
    if (querySnapshot.empty) {
      await addDoc(subscriberRef, {
        email,
      });
      setError(null);
      reset();
    } else {
      setError(t('error.exist_email'));
    }
  };
  return (
    <div
      data-testid="newsletter"
      className=" grid grid-col-2 pt-14 pb-14 pr-10 pl-10 hadow-md bg-background"
    >
    <div className="text-primary flex flex-col lg:flex-row items-center lg:justify-around justify-center">
        <div className="flex flex-col lg:flex-row lg:justify-start justify-center items-center">
          <img
            className="w-24 md:w-40 h-100"
            src="https://www.freepnglogos.com/uploads/blue-email-logo-png-4.png"
            alt="email"
          />
          <h1 className="text-[40px] mb-3 sm:mb-0 lg:text-start text-center">
            <Trans
              i18nKey="news_letter.subscribe_to_our_newsletter"
              components={{ br: <br /> }}
            />
          </h1>
        </div>
        <div className="mt-4 flex flex-col items-center justify-center">
          <p className="text-primary mb-5 lg:text-end text-center">
            {t('news_letter.description')}
          </p>
          <div className="items-center">
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                type="text"
                placeholder={t('news_letter.email')}
                name="email"
                {...register('email')}
                className="rounded p-1 w-full lg:w-fit md:p-2 mb-3 lg:mb-0 placeholder:text-tertiary border border-solid mr-2"
                required
              />
              <CustomButton paddingX="px-2" paddingY="py-2">
                {t('news_letter.subscribe')}
              </CustomButton>
            </form>
          </div>
          {error && <p className="text-red-500 mt-1">{error}</p>}
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
