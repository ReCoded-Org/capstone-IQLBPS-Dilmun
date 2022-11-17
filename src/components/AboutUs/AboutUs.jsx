import React from 'react';
import { useTranslation } from 'react-i18next';
import MemberCard from './MemberCard';
import team from './team.json';

const AboutUs = () => {
  const { t } = useTranslation();
  return (
    <div className=" container mx-auto px-4 mt-28">
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <h1 className="text-4xl font-bold mt-0 mb-6">
          {t('about_us:meet_our_team')}
        </h1>
      </div>
      <div className=" grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center">
        {team.map((member) => {
          return <MemberCard key={member.id} member={member} />;
        })}
      </div>
    </div>
  );
};

export default AboutUs;
