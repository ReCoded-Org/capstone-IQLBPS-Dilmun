import React from 'react';

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-secondary lg:h-12 lg:w-12 dark:bg-primary-900">
        {icon}
      </div>
      <h3 className="mb-2 text-xl font-bold dark:text-white">{title}</h3>
      <p className="text-gray-500 dark:text-gray-400">{description}</p>
    </div>
  );
};

export default FeatureCard;
