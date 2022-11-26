import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { BiEdit } from 'react-icons/bi';
import { GiCancel } from 'react-icons/gi';
import { Input, TextArea, SubmitButton, ListBox, ComboBox } from '../Forms';
import { ITEM_CATEGORY, ITEM_TYPES } from '../../utils/Items';


const schema = yup.object().shape({
  name: yup.string().required('Cannot stay empty.'),
  desc: yup.string().required('Cannot stay empty.'),
});

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
      keepDirty: false,
      keepValues: false,
    });
    setImg(defaultImg);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <div
        className="flex items-center justify-end bg-background p-3"
        data-testid="edit-item"
      >
        <button
          type="button"
          onClick={openModal}
        >
          <BiEdit className="h-8 w-8 text-primary" />
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => setIsOpen(false)}
        >
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
                  className="w-full max-w-xl transform overflow-hidden rounded-2xl bg-primary py-1 px-6 text-left align-middle shadow-xl transition-all"
                >
                  <div className='flex justify-end text-2xl font-bold text-background my-1.5'>
                    <button type='button' onClick={closeModal}> <GiCancel /> </button>
                  </div>
                  <Dialog.Title
                    as="h3"
                    className="flex flex-col justify-start text-2xl font-bold text-background mb-3"
                  >
                    Edit Item Info
                  </Dialog.Title>
                  <Dialog.Description>
                    <span className="block text-sm font-medium text-background">
                      Edit Item Image
                    </span>
                    <figure className="flex relative w-fit transition-all duration-300 cursor-pointer filter border-2 rounded-md border-dashed my-3  border-tertiary">
                      <img
                        className="rounded-lg max-h-28 m-1"
                        src={`${img}`}
                        alt="item"
                      />

                      <input
                        type="file"
                        accept="image/*"
                        {...register('file')}
                        onChange={(e) => {
                          setImg(e.target.files[0].name);
                        }}
                        className="w-full self-center text-xs text-background file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-background file:text-secondary m-2"
                      />
                    </figure>
                    <Input
                      isActive
                      name="name"
                      {...register('name', { value: 'hi' })}
                      errors={errors.name ? errors.name : undefined}
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
                        isActive
                        name="edit-desc"
                        {...register('desc')}
                        errors={errors?.desc}
                      >
                        Edit Description
                      </TextArea>
                    </div>
                  </Dialog.Description>
                  <div className="bg-primary bg-opacity-25 px-4 py-3 text-right sm:px-6">
                    <SubmitButton buttonText="Update Info" />
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
