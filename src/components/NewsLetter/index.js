import { addDoc, collection, getDocs, query, where } from 'firebase/firestore';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { db } from '../../firebase-config';
import CustomButton from '../CustomComponents/CustomButton';

const NewsLetter = () => {
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
      setError('Email already subscribed');
    }
  };
  return (
    <section>
      <div className="pt-14 pb-14 pr-10 pl-10 md:flex shadow-md justify-around bg-primary">
        <div className="text-background flex flex-col md:flex-row justify-center items-center">
          <img
            className="w-24 md:w-40  h-100"
            src="https://www.freepnglogos.com/uploads/blue-email-logo-png-4.png"
            alt="email"
          />
          <h1 className="text-[20px] sm:text-[40px] mb-3 sm:mb-0">
            Subscribe to our <br /> Newsletter !
          </h1>
        </div>
        <div className="mt-4">
          <p className="text-background mb-5">
            Subscribe to our newsletter and stay updated
          </p>
          <div className="items-center">
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                type="text"
                placeholder="Write your email here"
                name="email"
                {...register('email')}
                className="rounded p-1 w-full sm:w-fit md:p-2 mb-3 sm:mb-0 placeholder:text-background border border-solid "
                required
              />
              <CustomButton paddingX="px-2" paddingY="py-2">
                Subscribe
              </CustomButton>
            </form>
          </div>
          {error && <p className="text-red-500 mt-1">{error}</p>}
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
