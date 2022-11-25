import React from 'react';
import { useTranslation } from 'react-i18next';
import MemberCard from './MemberCard';
import team from './team.json';

const AboutUs = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="sm:text-6xl text-4xl font-extrabold mb-10 text-primary x-auto px-4 mt-28">
        Meet Our Team
      </h1>
      <div className=" grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center items-center">
        {team.map((member) => {
          return <MemberCard key={member.id} member={member} />;
        })}
      </div>
    </div>
  );
};

export default AboutUs;
