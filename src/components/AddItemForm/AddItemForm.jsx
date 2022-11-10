import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useState } from 'react';
import { Input, TextArea, SubmitButton, ListBox, ComboBox } from '../Forms';

const schema = yup.object().shape({
  title: yup.string().required('Please insert your Item Name.'),
  price: yup.number().positive('Please insert a positive number.'),
  description: yup.string().required('Please add a description.'),
});

const ITEM_TYPES = ['Crafted', 'Donated', 'New', 'Used'];

const ITEM_CATEGORY = [
  'Men',
  'Women',
  'Kids',
  'Toys',
  'Books',
  'Sports',
  'Clothes',
  'Furniture',
  'Electronics',
  'Homemade',
  'Other',
];

const INTIAL_VALUES = {
  title: '',
  price: 0,
  description: '',
  email: '',
  country: '',
  city: '',
  file: [],
  type: ITEM_TYPES[0],
  category: ITEM_CATEGORY[0],
};

export default function AddItemForm() {
  const [item, setItem] = useState(INTIAL_VALUES);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (e) => {
    console.log(e);
  };

  return (
    <div className="bg-background" data-testid="add-item-form">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="md:grid md:grid-cols-4 md:gap-6">
          <div className="md:col-span-1">
            <div className="mx-4 py-3">
              <h3 className="text-xl font-bold text-primary">Product Info</h3>
              <p className="mt-1 text-sm text-secondary font-semibold">
                Your product will be added to the store after filling the
                required information.
              </p>
            </div>
          </div>
          <div className="mt-5 md:col-span-3 md:mt-0 md:pl-0 pl-2 pt-2 pr-2 pb-4">
            <div className="shadow sm:overflow-hidden sm:rounded-md">
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
                              accept='image/*'
                              {...register('file')}
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
                        disabled={item.type.toLowerCase() === 'donated'}
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
                      options={ITEM_TYPES}
                      value={item.type}
                      onChange={(e) => setItem({ ...item, type: e })}
                    />
                  </div>
                  <div className="w-full">
                    <span className="block text-sm font-medium text-background">
                      Item Category
                    </span>
                    <ComboBox
                      options={ITEM_CATEGORY}
                      value={item.category}
                      onChange={(e) => setItem({ ...item, category: e })}
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
              </div>
              <div className="bg-primary bg-opacity-25 px-4 py-3 text-right sm:px-6">
                <SubmitButton buttonText="Add New Item" />
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}