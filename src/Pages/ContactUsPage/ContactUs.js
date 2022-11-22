import { useForm } from 'react-hook-form';

const ContactUs = () => {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const onSubmit = () => {};

  return (
    <div className="bg-white text-gray-100 px-8 py-12">
      <div className="max-w-screen-xl mt-24 px-8 grid gap-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto text-gray-900">
        <div className="flex flex-col justify-between">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight text-primary">
              Lets talk about everything!
            </h2>
            <div className="text-gray-600 mt-8">Give us your feedback</div>
          </div>
          <div className="mt-8 text-center">
            <img
              className="h-44 sm:h-56 md:h-72"
              src="https://alshifaeye.org/assets/images/contact-us.png"
              alt="contact us"
            />
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <span className="uppercase text-sm text-gray-600 font-bold">
              Full Name
            </span>
            <input
              className="w-full bg-background text-gray-900 mt- p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="text"
              placeholder=""
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
            <span className="uppercase text-sm text-gray-600 font-bold">
              Email
            </span>
            <input
              className="w-full bg-background text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
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
            <span className="uppercase text-sm text-gray-600 font-bold">
              Message
            </span>
            <textarea
              className="w-full h-40 bg-background text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
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
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
