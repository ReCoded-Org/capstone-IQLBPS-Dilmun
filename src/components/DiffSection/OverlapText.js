import React from 'react';
import { useTranslation } from 'react-i18next';

function OverlapText() {
  const { t } = useTranslation();

  function WatchFullVideoHandler() {
    const videoLink = 'https://youtu.be/K8ABga4Xcb0';
    return window.open(videoLink);
  }
  return (
    <div className=" flex flex-col items-center justify-center text-black bg-opacity-20 pl-10 pr-10 ">
      <h2 className="text-center text-white text-[16px] sm:text-[32px] ">
        {t('overlap_text.check_out')}
      </h2>
      <button
        type="button"
        onClick={WatchFullVideoHandler}
        className="bg-tertiary p-2 m-2 hover:shadow-lg text-white font-semibold rounded-lg  sm:w-auto "
      >
        {t('overlap_text.watch_full_video')}
      </button>
    </div>
  );
}

export default OverlapText;
