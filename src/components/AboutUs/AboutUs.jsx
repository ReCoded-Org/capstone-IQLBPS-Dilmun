import React from 'react';
import MemberCard from './MemberCard';
import team from './team.json';

const AboutUs = () => {
  return (
    <div className=" container mx-auto px-4 mt-28" >
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        // margin: '25px 0'
      }}>
        <h1 className='text-4xl font-bold mt-0 mb-6'>
          Meet the team
        </h1>
      </div>
      <div className="grid gap-4 grid-cols-4">
        {team.map((member) => {
          return <MemberCard member={member} />;
        })}
      </div>
    </div>
  );
};

export default AboutUs;



