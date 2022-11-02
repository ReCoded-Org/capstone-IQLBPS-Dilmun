import React from 'react';

const FeatureCard = ({ icon, title, description, customClass = '' }) => {
  return (
    <div
      data-testid="feature-card"
      className={`flex flex-col justify-center items-center ${customClass}`}
    >
      <div
        data-testid="feature-card-icon"
        className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-secondary lg:h-12 lg:w-12 dark:bg-yellow-400"
      >
        {icon}
      </div>
      <h3
        data-testid="feature-card-title"
        className="mb-2 text-xl font-bold text-background dark:text-white"
      >
        {title}
      </h3>
      <p
        data-testid="feature-card-paragraph"
        className="text-background dark:text-gray-400"
      >
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;
