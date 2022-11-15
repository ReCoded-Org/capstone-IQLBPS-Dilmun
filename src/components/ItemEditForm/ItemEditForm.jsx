import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Input, TextArea, SubmitButton, ListBox, ComboBox } from '../Forms';

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

export default function ItemEditForm() {
  const defaultImg =
    'https://cdn.discordapp.com/attachments/1031834305703460906/1041710013992947812/image.png';
  const [img, setImg] = useState(defaultImg);
  const { register, handleSubmit, control } = useForm();

  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="bg-primary p-6">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h3 className="text-2xl font-bold text-background mb-3">
          Edit Product Info
        </h3>
        <figure className="relative w-fit transition-all duration-300 cursor-pointer filter border-2 rounded-md border-dashed my-3  border-tertiary">
          <img className="rounded-lg h-44" src={`${img}`} alt="item" />
          <figcaption className="absolute bottom-4 px-4">
            <input
              type="file"
              accept="image/*"
              onChange={(e) => {
                setImg(e.target.files[0].name);
              }}
              className="w-full text-xs text-background
            file:mr-4 file:py-2 file:px-4
            file:rounded file:border-0
            file:text-sm file:font-semibold
            file:bg-background file:text-secondary"
            />
          </figcaption>
        </figure>
        <Input name="edit-name" {...register('title')}>
          Edit Item Name
        </Input>
        <input
          disabled
          placeholder="Sorry, cannot edit item price."
          type="number"
          className="items-center text-background border-2 rounded-md mb-2 border-background w-full text-opacity-50 p-2"
        />
        <div className="flex justify-between items-center gap-8 w-full flex-col md:flex-row">
          <div className="w-full">
            <span className="block text-sm font-medium text-background">
              Edit Item Type
            </span>
            <ListBox
              name="type"
              control={control}
              options={ITEM_TYPES}
              defaultValue={ITEM_TYPES[0]}
              {...register('type')}
            />
          </div>
          <div className="w-full">
            <span className="block text-sm font-medium text-background">
              Edit Item Category
            </span>
            <Controller
              name="category"
              control={control}
              defaultValue={ITEM_CATEGORY[0]}
              render={({ field }) => (
                <ComboBox options={ITEM_CATEGORY} {...field}  {...register('category')}/>
              )}
            />
          </div>
        </div>
        <div className="my-4">
          <TextArea name="description" {...register('description')}>
            Edit Description
          </TextArea>
        </div>
        <div className="bg-primary bg-opacity-25 px-4 py-3 text-right sm:px-6">
          <SubmitButton buttonText="Edit Item Info" />
        </div>
      </form>
    </div>
  );
}
