import { useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { setDoc, doc } from 'firebase/firestore';
import { Input, TextArea, SubmitButton, ListBox, ComboBox } from '../Forms';
import { ITEM_CATEGORY, ITEM_TYPES } from '../../utils/Items';
// redux
import { useSelector, useDispatch } from '../../app/store';
import { addItem } from '../../features/slices/item';
import { user } from '../../features/slices/user';
import { auth, db } from '../../firebase-config';
// import { image } from '../../assets';

// Validation schema
const schema = yup.object().shape({
  title: yup.string().required('Please insert your Item Name.'),
  price: yup.number().positive('Please insert a positive number.'),
  description: yup.string().required('Please add a description.'),
  country: yup.string(),
  city: yup.string(),
});

export default function AddItemForm() {
  const [itemImage, setItemImage] = useState(
    'https://cdn.discordapp.com/attachments/1031834305703460906/1041710013992947812/image.png'
  );

  const dispatch = useDispatch();
  const { item, userItems, isLoading, error } = useSelector(
    (state) => state.item
  );
  const userThing = useSelector(user);
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    if (item) {
      // eslint-disable-next-line no-console
      console.log(userItems);
    }
  }, [item]);

  const onSubmit = async (values) => {
    const userData = doc(db, 'Users', auth.currentUser.uid);
    if (!userThing.address) {
      await setDoc(
        userData,
        { address: { city: values.city, country: values.country } },
        { merge: true }
      );
    }
    dispatch(addItem({ item: values, owner: userThing, file: itemImage }));
  };

  const [type, setType] = useState(ITEM_TYPES[0]);

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
                                value: itemImage,
                              })}
                              className="sr-only"
                              onChange={(e) => {
                                setItemImage(e.target.files[0].name);
                              }}
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
                        disabled={type.toLowerCase() === 'donated'}
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
                      updateType={(e) => setType(e)}
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
                {!userThing.address && (
                  <div>
                    <h1 className="block text-sm font-medium text-background mb-3">
                      Address Info
                    </h1>
                    <Input
                      name="country"
                      type="text"
                      errors={errors.country ? errors.country : undefined}
                      {...register('country', { required: true })}
                    >
                      Country
                    </Input>
                    <Input
                      name="city"
                      type="text"
                      errors={errors.city ? errors.city : undefined}
                      {...register('city', { required: true })}
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
            {error && (
              <div className="mt-4">
                <div className="rounded-md bg-red-50 p-4">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <svg
                        className="h-5 w-5 text-red-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M10 12a  2 2 0 100-4  2 2 0 000 4z" />
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm0 2a10 10 0 100-20 10 10 0 000 20z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <h3 className="text-sm font-medium text-red-800">
                        {error.message}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </form>
    </div>
  );
}
