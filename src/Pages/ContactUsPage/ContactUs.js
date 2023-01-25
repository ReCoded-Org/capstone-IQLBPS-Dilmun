import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { sendFeedback, status } from '../../features/feedback/feedbackSlice';
import LoadingScreen from '../../components/animations/LoadingScreen';

const ContactUs = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const statusData = useSelector(status);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const { name, email, feedback } = data;
    dispatch(sendFeedback({ name, email, feedback }));
    reset();
  };

  const messageForUser = {
    idle: '',
    loading: t('contact_us.loading_message'),
    succeeded: t('contact_us.succeeded_message'),
    failed: t('contact_us.failed_message'),
  };

  if (statusData === 'loading') return <LoadingScreen />;

  return (
    <div className="bg-background text-primary px-8 py-12">
      {statusData && (
        <h2 className="text-2xl lg:text-3xl text-center leading-tight text-tertiary ">
          {messageForUser[statusData]}
        </h2>
      )}
      <div className="max-w-screen-xl px-8 grid gap-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto text-primary">
        <div className="flex flex-col justify-between">
          <div className="text-center">
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight text-primary ">
              {t('contact_us.lets_talk')}
            </h2>
            <div className="text-secondary mt-8 ">
              {t('contact_us.give_us')}
            </div>
          </div>
          <div className="mt-8 text-center self-center">
            <img
              className="h-44 sm:h-56 md:h-72"
              src="https://alshifaeye.org/assets/images/contact-us.png"
              alt="contact us"
            />
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <span className="uppercase text-sm text-secondary font-bold">
              {t('contact_us.full_name')}
            </span>
            <input
              className="w-full bg-background text-primary mt- p-3 rounded-lg focus:outline-none focus:shadow-outline border border-secondary"
              type="text"
              {...register('name', {
                required: '* Enter your name please',
              })}
            />
            {errors.name && (
              <p className="text-red-800 font-semibold text-[12px] ">
                {errors.name?.message}
              </p>
            )}
          </div>
          <div className="mt-5">
            <span className="uppercase text-sm text-secondary font-bold">
              {t('contact_us.email')}
            </span>
            <input
              className="w-full bg-background text-primary mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline border border-secondary"
              type="email"
              {...register('email', {
                required: '* Email address is required',
              })}
            />
            {errors.email && (
              <p className="text-red-800 font-semibold text-[12px]">
                {errors.email?.message}
              </p>
            )}
          </div>
          <div className="mt-5">
            <span className="uppercase text-sm text-secondary font-bold">
              {t('contact_us.message')}
            </span>
            <textarea
              className="w-full h-40 bg-background text-primary mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline border border-secondary"
              {...register('feedback', {
                required: '* This Input is required',
              })}
            />
            {errors.feedback && (
              <p className="text-red-800 font-semibold text-[12px]">
                {errors.feedback?.message}
              </p>
            )}
          </div>
          <div className="mt-5">
            <button
              type="submit"
              className="uppercase text-sm font-bold tracking-wide bg-tertiary text-primary p-3 rounded-lg w-full focus:outline-none focus:shadow-outline hover:text-tertiary hover:bg-secondary"
            >
              {t('contact_us.send')}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
