import React from 'react';

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div>
      <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
        <div className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300">
          {icon}
        </div>
      </div>
      <h3 className="mb-2 text-xl font-bold dark:text-white">{title}</h3>
      <p className="text-gray-500 dark:text-gray-400">{description}</p>
    </div>
  );
};

export default FeatureCard;
