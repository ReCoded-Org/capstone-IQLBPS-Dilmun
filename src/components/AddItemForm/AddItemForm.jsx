import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Input, TextArea, SubmitButton, ListBox } from '../Forms';

const schema = yup.object().shape({
  title: yup.string().required('Please insert your Item Name.'),
  price: yup.number().positive('Please insert a positive number.'),
  description: yup.string().required('Please add a description.'),
  email: yup
    .string()
    .email('Should be a valid email.')
    .required('Please insert your Email.'),
  country: yup.string().required('Please insert your Country name.'),
  city: yup.string().required('Please insert your City name.'),
  file: yup.mixed().test('required', 'Please upload a photo.', (photo) => {
      if (!photo.length) return false;
      return true
  })
  .test('fileSize', 'File size is too large.', (photo) => {
    return photo.length && photo[0].size <= 10000000;
  })
  .test('fileType', 'Please add a supported file type.', (photo) => {
    return photo.length && ["image/jpeg", "image/png", "image/jpg"].includes(photo[0].type)
  }),
});

const ITEM_TYPES = ['Crafted', 'Donated', 'New'];

export default function AddItemForm() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (e) => {
    console.log(e);
  };
  return (
    <>
      <div className="bg-background">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg font-medium leading-6 text-primary">
                Profile
              </h3>
              <p className="mt-1 text-sm text-secondary">
                This information will be displayed publicly so be careful what
                you share.
              </p>
            </div>
          </div>
          <div className="mt-5 md:col-span-2 md:mt-0">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="shadow sm:overflow-hidden sm:rounded-md">
                <div className="space-y-6 bg-primary px-4 py-5 sm:p-6">
                  <div className="grid grid-cols-1 lg:grid-cols-3 justify-center items-center gap-6">
                    <div>
                      <p className="block text-sm font-medium text-background">
                        Item Image
                      </p>
                      <div className={["mt-1 flex justify-center rounded-md border-2 border-dashed border-tertiary px-6 pt-5 pb-6",  errors?.file? 'border-red-500' : ''].join(' ')}>
                        <div className="space-y-1 text-center">
                          <svg
                            className="mx-auto h-12 w-12 text-tertiary"
                            stroke="currentColor"
                            fill="none"
                            viewBox="0 0 48 48"
                            aria-hidden="true"
                          >
                            <path
                              d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <div className="flex text-sm text-background">
                            <label
                              htmlFor="file"
                              className="relative cursor-pointer rounded-md bg-tertiary font-medium text-secondary px-1 focus-within:outline-none focus-within:ring-2 focus-within:ring-backgound focus-within:ring-offset-2 hover:text-background"
                            >
                              <span>Upload a file</span>
                              <input
                                id="file"
                                name="file"
                                type="file"
                                {...register('file')}
                                className="sr-only"
                              />
                            </label>
                            <p className="pl-1">or drag and drop</p>
                          </div>
                          <p className="text-xs text-tertiary">
                            PNG, JPG, GIF up to 10MB
                          </p>
                          <p className="inline-flex text-sm text-red-500">{errors?.file?.message}</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-span-3 sm:col-span-2 ">
                      <div>
                        <Input
                          name="title"
                          type="text"
                          errors={errors.title}
                          {...register('title')}
                          onChange={(e) => setValue('title', e.target.value)}
                          errorMessage={errors?.title?.message}
                        >
                          Item Name
                        </Input>
                      </div>
                      <div>
                        <Input
                          name="price"
                          type="number"
                          errors={errors?.price}
                          {...register('price')}
                          errorMessage={errors?.price?.message}
                          onChange={(e) => {
                            setValue('price', e.target.value, '$');
                          }}
                        >
                          Price
                        </Input>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <ListBox options={ITEM_TYPES} value={ITEM_TYPES[0]} />
                  </div>
                  <div>
                    <TextArea
                      name="description"
                      errors={errors?.description}
                      {...register('description')}
                      onChange={(e) => setValue('description', e.target.value)}
                      errorMessage={errors?.description?.message}
                    >
                      Description
                    </TextArea>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="hidden sm:block" aria-hidden="true">
        <div className="">
          <div className="border-t border-secondary" />
        </div>
      </div>

      <div className="mt-10 sm:mt-0 bg-background">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg font-medium leading-6 text-primary">
                Contact Information
              </h3>
              <p className="mt-1 text-sm text-secondary">
                Use a permanent contact information to receive emails.
              </p>
            </div>
          </div>
          <div className="mt-5 md:col-span-2 md:mt-0">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="overflow-hidden shadow sm:rounded-md">
                <div className="bg-primary px-4 py-5 sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-4">
                      <Input
                        name="email"
                        type="text"
                        errors={errors?.email}
                        {...register('email')}
                        errorMessage={errors?.email?.message}
                        onChange={(e) => {
                          setValue('email', e.target.value);
                        }}
                      >
                        Email address
                      </Input>
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <Input
                        name="country"
                        type="text"
                        errors={errors?.country}
                        {...register('country')}
                        errorMessage={errors?.country?.message}
                        onChange={(e) => {
                          setValue('country', e.target.value);
                        }}
                      >
                        County
                      </Input>
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <Input
                        name="city"
                        type="text"
                        errors={errors?.city}
                        {...register('city')}
                        errorMessage={errors?.city?.message}
                        onChange={(e) => setValue('city', e.target.value)}
                      >
                        City
                      </Input>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                  <SubmitButton buttonText="Add New Item" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="hidden sm:block" aria-hidden="true">
        <div className="py-5">
          <div className="border-t border-gray-200" />
        </div>
      </div>
    </>
  );
}
