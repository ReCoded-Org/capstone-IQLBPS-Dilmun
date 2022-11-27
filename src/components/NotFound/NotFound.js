import React from 'react';
import { Trans, useTranslation } from 'react-i18next';

function NotFound() {
  const { t } = useTranslation();
  return (
    <div className="bg-background flex flex-col justify-center items-center h-screen">
      <div className="text-primary">
        <h1 className="text-9xl subpixel-antialiased font-sans tracking-tight font-bold">
          404
        </h1>
      </div>

      <div className="text-center text-2xl text-primary subpixel-antialiased font-sans-serif">
        <Trans i18nKey="not_found" components={{ br: <br /> }} t={t} />
      </div>
    </div>
  );
}

export default NotFound;
