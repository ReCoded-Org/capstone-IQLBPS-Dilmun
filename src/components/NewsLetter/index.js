import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import CustomButton from '../CustomComponents/CustomButton';

const NewsLetter = () => {
  const { t } = useTranslation();

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
            <Trans
              i18nKey="news_letter.subscribe_to_our_newsletter"
              components={{ br: <br /> }}
            />
           
          </h1>
        </div>
        <div className="mt-4">
          <p className="text-background mb-5">{t('news_letter.description')}</p>
          <div className="items-center sm:flex justify-center gap-2">
            <input
              type="text"
              placeholder="Write your email here"
              className="rounded p-1 w-full sm:w-fit md:p-2 mb-3 sm:mb-0 placeholder:text-background border border-solid "
            />
            <CustomButton paddingX="px-2" paddingY="py-2">
              {t('news_letter.subscribe')}
            </CustomButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
