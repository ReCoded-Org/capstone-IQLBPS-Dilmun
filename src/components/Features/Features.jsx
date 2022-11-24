import React from 'react';
import { FiFilter } from 'react-icons/fi';
import { GrLanguage } from 'react-icons/gr';
import { SiGotomeeting } from 'react-icons/si';
import FeatureCard from './FeatureCard';

const Features = () => {
  return (
    <section
      data-testid="features-section"
      className="bg-background border-y-2 border-y-primary"
    >
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="mb-8 lg:mb-16">
          <h2
            data-testid="features-title"
            className="mb-4 text-4xl tracking-tight font-extrabold text-primary"
          >
            Designed to meet your needs.
          </h2>
          <p
            data-testid="features-paragraph"
            className="text-primary sm:text-xl"
          >
            Here at Dilmun we sell various products to customers and accept
            donations to help those people that are in need.
          </p>
        </div>
        <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
          <FeatureCard
            data-testid="feature-card"
            icon={<FiFilter />}
            title="Filter"
            description="Filter your items to find the right information."
          />
          <FeatureCard
            data-testid="feature-card"
            icon={<GrLanguage />}
            title="Multi Language"
            description="Use the website in your preferred language"
          />
          <FeatureCard
            customClass="git col-span-2 lg:col-span-1"
            data-testid="feature-card"
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
