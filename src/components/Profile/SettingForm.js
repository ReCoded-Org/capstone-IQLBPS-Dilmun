import { useForm } from 'react-hook-form';
// import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { updateUserInfo, user } from '../../features/slices/user';
// import { PROFILE } from '../../route';

function SettingForm({ toggleForm }) {
  const userData = useSelector(user);
  const dispatch = useDispatch();
  // const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: userData.firstName ? userData.firstName : '',
      lastName: userData.lastName ? userData.lastName : '',
      city: userData.address.city ? userData.address.city : '',
      country: userData.address.country ? userData.address.country : '',
    },
  });

  const onSubmit = (data) => {
    const { firstName, lastName, city, country } = data;
    dispatch(
      updateUserInfo({
        user: userData,
        firstName,
        lastName,
        city,
        country,
      })
    );
    toggleForm();
  };

  return (
    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
      <div className="relative w-auto my-6 mx-auto max-w-3xl">
        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
          <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
            <h3 className="text-3xl text-primary font-semibold">
              Edit your profile
            </h3>
          </div>
          {/* <div className="relative p-6 flex-auto"> */}
          <form
            className="relative p-6 flex-auto"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="  px-10 sm:max-w-md w-full rounded-md">
              <div className="flex justify-center mt-6 ">
                <div className="w-full rounded-lg  bg-background border-dashed hover:border-primary">
                  <div className="m-4">
                    <p className=" mb-3 text-primary">Profile picture upload</p>
                    <div className="flex items-center justify-center w-full">
                      <div className="flex flex-col border-4 border-dashed hover:border-primary">
                        <div className="flex flex-col items-center justify-center pt-5">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-full h-6 text-primary group-hover:text-background"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                          </svg>
                          <p className="pt-1 text-sm tracking-wider text-primary">
                            Attach a file
                          </p>
                        </div>
                        <input
                          type="file"
                          className="opacity-0"
                          {...register('profilePic')}
                        />
                      </div>
                    </div>
                    {/* Background Image */}
                    <div className="m-4">
                      <p className="inline-block mb-3 text-primary">
                        Background picture upload
                      </p>
                      <div className="flex items-center justify-center w-full">
                        <div className="flex flex-col  border-4 border-dashed hover:border-primary">
                          <div className="flex flex-col items-center justify-center pt-5">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-6 h-6 text-primary group-hover:text-background"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                            </svg>
                            <p className="pt-1 text-sm tracking-wider text-primary">
                              Attach a file
                            </p>
                          </div>
                          <input
                            type="file"
                            className="opacity-0"
                            {...register('backgroundPic')}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex pb-6 flex-col justify-center gap-2 items-center">
                <input
                  type="text"
                  className=" w-full p-1 bg-background rounded-lg mt-3 "
                  placeholder=" First name "
                  {...register('firstName', {
                    required: true,
                    maxLength: 10,
                  })}
                />
                {errors.firstName ? (
                  <p className="text-red-800 font-semibold text-[12px]">
                    * First name can not be empty
                  </p>
                ) : (
                  ''
                )}

                <input
                  type="text"
                  // onChange={(e) => setlastName(e.target.value)}
                  className=" w-full p-1 bg-background rounded-lg "
                  placeholder=" Last name "
                  {...register('lastName', {
                    required: true,
                  })}
                />
                {errors.lastName ? (
                  <p className="text-red-800 font-semibold text-[12px]">
                    * Last name can not be empty
                  </p>
                ) : (
                  ''
                )}
                <input
                  type="text"
                  // onChange={(e) => setcountry(e.target.value)}
                  className=" w-full p-1 bg-background rounded-lg"
                  placeholder=" Country "
                  {...register('country', {
                    required: true,
                  })}
                />
                {errors.country ? (
                  <p className="text-red-800 font-semibold text-[12px]">
                    * Country can not be empty
                  </p>
                ) : (
                  ''
                )}
                <input
                  type="text"
                  // onChange={(e) => setcity(e.target.value)}
                  className=" w-full p-1 bg-background rounded-lg"
                  placeholder=" City "
                  {...register('city', { required: true })}
                />
                {errors.city ? (
                  <p className="text-red-800 font-semibold text-[12px]">
                    * City can not be empty
                  </p>
                ) : (
                  ''
                )}
              </div>
            </div>
            {/* </div> */}

            <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
              <button
                type="button"
                onClick={toggleForm}
                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              >
                Cancel
              </button>

              <button
                type="submit"
                // onClick={submitForm}
                className="bg-primary text-background active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none hover:bg-tertiary hover:text-primary focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SettingForm;
