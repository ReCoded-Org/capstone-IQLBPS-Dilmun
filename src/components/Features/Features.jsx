import React from 'react';
import { FiFilter } from 'react-icons/fi';
import { GrLanguage } from 'react-icons/gr';
import { SiGotomeeting } from 'react-icons/si';
import FeatureCard from './FeatureCard';

const Features = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Designed for your needs and kind
          </h2>
          <p className="text-gray-500 sm:text-xl dark:text-gray-400">
            Here at Dilmun we focus on joining people together and help those
            people that are in need.
          </p>
        </div>
        <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
          <FeatureCard
            icon={<FiFilter />}
            title="Filter"
            description="Filter your items to find the right information."
          />
          <FeatureCard
            icon={<GrLanguage />}
            title="Multi Language"
            description="Use the website in your preferred language"
          />
          <FeatureCard
            icon={<SiGotomeeting />}
            title="Meet"
            description="Meet new people and make new connections"
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
