import { Trans, useTranslation } from 'react-i18next';
import { people01, people02, people03 } from './assets/FeedbackCardImages';
import FeedbackCard from './FeedbackCard';

const Testimonials = () => {
  const { t } = useTranslation();
  const feedback = [
    {
      id: 'feedback-1',
      content: t('proof.feedback_one_description'),
      name: t('proof.feedback_one_name'),
      title: t('proof.feedback_one_title'),
      img: people01,
    },
    {
      id: 'feedback-2',
      content: t('proof.feedback_two_description'),
      name: t('proof.feedback_two_name'),
      title: t('proof.feedback_two_title'),
      img: people02,
    },
    {
      id: 'feedback-3',
      content: t('proof.feedback_three_description'),
      name: t('proof.feedback_three_name'),
      title: t('proof.feedback_three_title'),
      img: people03,
    },
  ];
  return (
    <section
      id="clients"
      data-testid="testimonials-section"
      className="sm:py-5 py-4 flex justify-center items-center flex-col"
    >
      <div className="w-full flex lg:justify-between justify-center items-center lg:flex-row flex-col sm:mb-4 mb-2">
        <h2
          className="font-bold text-center lg:text-left pl-0 lg:pl-8 xs:text-[48px] text-[40px] text-primary xs:leading-[76.8px] leading-[66.8px] w-full"
          data-testid="testimonials-title"
        >
          <Trans i18nKey="proof.what_they_say" components={{ br: <br /> }} />
        </h2>

          <p
            className="font-poppins text-primary font-normal text-[20px] leading-[30.8px] text-center p-6 lg:text-left md:max-w-[450px]"
            data-testid="testimonials-paragraph"
          >
            {t('proof.everything_you_need')}
          </p>

      </div>

      <div className="container flex flex-wrap sm:justify-center justify-center w-full feedback-container p-6">
        {feedback.map((card) => (
          <FeedbackCard
            key={card.id}
            data-testid="testimonials-card"
            {...card}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
