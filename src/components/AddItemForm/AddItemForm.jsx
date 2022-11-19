import { useState, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Input, TextArea, SubmitButton, ListBox, ComboBox } from '../Forms';
import { ITEM_CATEGORY, ITEM_TYPES } from '../../utils/Items';
// redux
import { useSelector, useDispatch } from '../../app/store';
// import { addItem } from '../../features/slices/item';
import { updateUser } from '../../features/user/userSlice';

// Validation schema
const schema = yup.object().shape({
  title: yup.string().required('Please insert your Item Name.'),
  price: yup.number().positive('Please insert a positive number.'),
  description: yup.string().required('Please add a description.'),
  country: yup.string().required('Please insert your Country Name.'),
  city: yup.string().required('Please insert your City Name.'),
});

export default function AddItemForm() {
  const dispatch = useDispatch();
  const { item, isLoading, error } = useSelector((state) => state.item);
  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    console.log('user', user);
    console.log('item', item, error, isLoading);
  }, [user, item]);

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
    control,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [address, setAddress] = useState(true);

  const onSubmit = (values) => {
    setAddress(false);
    getValues(['country', 'city']);
    console.log('values', values);
    dispatch(
      updateUser({ ...user, city: values.city, country: values.country })
    );
    // dispatch(addItem({ item: values, user }));
  };

  return (
    <div className="bg-background" data-testid="add-item-form">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="md:grid md:grid-cols-4 md:gap-6">
          <div className="md:col-span-1">
            <div className="mx-4 py-3">
              <h3 className="text-2xl font-bold text-primary">Product Info</h3>
              <p className="mt-1 text-base text-secondary font-semibold">
                Your product will be added to the store after filling the
                required information.
              </p>
            </div>
          </div>
          <div className="mt-5 md:col-span-3 md:mt-0 md:pl-0 pl-2 pt-4 pr-2 pb-4">
            <div className="shadow sm:overflow-hidden rounded-md">
              <div className="space-y-6 bg-primary px-4 py-5 sm:p-6">
                <div className="grid grid-cols-1 lg:grid-cols-3 justify-center items-center gap-x-0 md:gap-6 gap-y-6">
                  <div>
                    <p className="block text-sm font-medium text-background">
                      Item Image
                    </p>
                    <div className="mt-1 flex justify-center rounded-md border-2 border-dashed border-tertiary px-6 pt-5 pb-6">
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
                            className="relative cursor-pointer rounded-md bg-tertiary font-medium text-secondary px-2 focus-within:outline-none focus-within:ring-2 focus-within:ring-backgound focus-within:ring-offset-2 hover:text-primary"
                          >
                            <span>Upload a file</span>
                            <input
                              id="file"
                              name="file"
                              type="file"
                              accept="image/*"
                              {...register('file', {
                                value:
                                  'https://cdn.discordapp.com/attachments/1031834305703460906/1041710013992947812/image.png',
                              })}
                              className="sr-only"
                            />
                          </label>
                          <p className="pl-1">or drag and drop</p>
                        </div>
                        <p className="text-xs text-tertiary">
                          PNG, JPG, GIF up to 10MB
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-3 sm:col-span-2 h-full flex flex-col justify-center">
                    <div className="mb-4">
                      <Input
                        name="title"
                        type="text"
                        errors={errors.title ? errors.title : undefined}
                        {...register('title')}
                      >
                        Item Name
                      </Input>
                    </div>
                    <div>
                      <Input
                        name="price"
                        type="number"
                        // disabled={item.type.toLowerCase() === 'donated'}
                        errors={errors?.price}
                        {...register('price')}
                      >
                        Price
                      </Input>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-center gap-8 w-full flex-col md:flex-row">
                  <div className="w-full">
                    <span className="block text-sm font-medium text-background">
                      Item Type
                    </span>
                    <ListBox
                      name="type"
                      control={control}
                      options={ITEM_TYPES}
                      defaultValue={ITEM_TYPES[0]}
                    />
                  </div>
                  <div className="w-full">
                    <span className="block text-sm font-medium text-background">
                      Item Category
                    </span>
                    <Controller
                      name="category"
                      control={control}
                      defaultValue={ITEM_CATEGORY[0]}
                      render={({ field }) => (
                        <ComboBox options={ITEM_CATEGORY} {...field} />
                      )}
                    />
                  </div>
                </div>
                <div>
                  <TextArea
                    name="description"
                    errors={errors?.description}
                    {...register('description')}
                  >
                    Description
                  </TextArea>
                </div>
                {/* TODO: render conditionally: if the user has set his address the 1st time he added a product,
                save his address info and do not show this part of the form again. 
                however, make those info display into every product he adds */}
                {address && (
                  <div>
                    <h1 className="block text-sm font-medium text-background mb-3">
                      Address Info
                    </h1>
                    <Input
                      name="country"
                      type="text"
                      errors={errors.country ? errors.country : undefined}
                      {...register('country')}
                    >
                      Country
                    </Input>
                    <Input
                      name="city"
                      type="text"
                      errors={errors.city ? errors.city : undefined}
                      {...register('city')}
                    >
                      City
                    </Input>
                  </div>
                )}
              </div>
              <div className="bg-primary bg-opacity-25 px-4 py-3 text-right sm:px-6">
                <SubmitButton buttonText="Add New Item" loading={isLoading} />
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
