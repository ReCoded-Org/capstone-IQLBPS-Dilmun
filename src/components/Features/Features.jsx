import React from 'react';
import { useTranslation } from 'react-i18next';
import { FiFilter } from 'react-icons/fi';
import { GrLanguage } from 'react-icons/gr';
import { SiGotomeeting } from 'react-icons/si';
import FeatureCard from './FeatureCard';

const Features = () => {
  const {t} = useTranslation();
  return (
    <section data-testid="features-section" className="bg-background">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="mb-8 lg:mb-16 lg:text-start text-center">
          <h2
            data-testid="features-title"
            className="mb-4 text-4xl tracking-tight font-extrabold text-primary "
          >
            {t('features.designed_to_meet_your_needs')}
          </h2>
          <p
            data-testid="features-paragraph"
            className="text-primary sm:text-xl"
          >
            {t('features.description')}
          </p>
        </div>
        <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
          <FeatureCard
            data-testid="feature-card"
            icon={<FiFilter />}
            title={t('features.feature_one_title')}
            description={t('features.feature_one_description')}
          />
          <FeatureCard
            data-testid="feature-card"
            icon={<GrLanguage />}
            title={t('features.feature_two_title')}
            description={t('features.feature_two_description')}
          />
          <FeatureCard
            customClass="git col-span-2 lg:col-span-1"
            data-testid="feature-card"
            icon={<SiGotomeeting />}
            title={t('features.feature_three_title')}
            description={t('features.feature_three_description')}
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
