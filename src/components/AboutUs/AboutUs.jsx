import React from 'react';
import { useTranslation } from 'react-i18next';
import MemberCard from './MemberCard';
import team from './team.json';
import AboutUsHeader from './AboutUsHeader';

const AboutUs = () => {
  const { t } = useTranslation();
  return (
    <>
      <AboutUsHeader />
      <div className="flex flex-col justify-center items-center">
        <h1 className="sm:text-6xl text-4xl font-extrabold mb-10 text-primary x-auto px-4 mt-28">
          {t('about_us.meet_our_team')}
        </h1>
        <div className=" grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 content-center justify-items-center">
          {team.map((member) => {
            return <MemberCard key={member.id} member={member} />;
          })}
        </div>
      </div>
    </>
  );
};

export default AboutUs;
