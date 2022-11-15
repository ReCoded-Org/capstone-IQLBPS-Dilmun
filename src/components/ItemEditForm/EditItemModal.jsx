import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {TbEdit} from 'react-icons/tb'
import { Input, TextArea, SubmitButton, ListBox, ComboBox } from '../Forms';

const schema = yup.object().shape({
  title: yup.string().required('Cannot stay empty.'),
  description: yup.string().required('Cannot stay empty.'),
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

export default function EditItemModal() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [isOpen, setIsOpen] = useState(false);
  const defaultImg =
    'https://cdn.discordapp.com/attachments/1031834305703460906/1041710013992947812/image.png';
  const [img, setImg] = useState(defaultImg);

  const onSubmit = (e) => {
    e.preventDefault();
  };

  function closeModal() {
    setIsOpen(false);
    reset({
        keepErrors: false,
        keepDirty: false
    })
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <div className="flex items-center justify-end bg-background p-3">
        <button
          type="button"
          onClick={openModal}
          className="rounded-md bg-primary bg-opacity-20 px-4 py-2 text-sm font-medium text-primary hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          Edit Item <TbEdit className='text-primary w-4 h-6 inline'/>
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={() => closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel
                  as="form"
                  onSubmit={handleSubmit(onSubmit)}
                  className="w-full max-w-lg transform overflow-hidden rounded-2xl bg-primary p-6 text-left align-middle shadow-xl transition-all"
                >
                  <Dialog.Title
                    as="h3"
                    className="text-2xl font-bold text-background mb-3"
                  >
                    Edit Product Info
                  </Dialog.Title>
                  <figure className="relative w-fit transition-all duration-300 cursor-pointer filter border-2 rounded-md border-dashed my-3  border-tertiary">
                    <img
                      className="rounded-lg h-44"
                      src={`${img}`}
                      alt="item"
                    />
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
                  <Input
                    name="title"
                    {...register('title')}
                    errors={errors.title ? errors.title : undefined}
                  >
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
                          <ComboBox
                            options={ITEM_CATEGORY}
                            {...field}
                            {...register('category')}
                          />
                        )}
                      />
                    </div>
                  </div>
                  <div className="my-4">
                    <TextArea
                      name="description"
                      {...register('description')}
                      errors={errors?.description}
                    >
                      Edit Description
                    </TextArea>
                  </div>
                  <div className="bg-primary bg-opacity-25 px-4 py-3 text-right sm:px-6">
                    <SubmitButton buttonText="Edit Info" />
                    <button
                      type="button"
                      className="ml-2 inline-flex justify-center rounded-md border border-transparent bg-background px-4 py-2 text-sm font-medium text-primary hover:bg-tertiary focus:outline-none focus-visible:ring-2 focus-visible:ring-tertiary focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Cancel
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
