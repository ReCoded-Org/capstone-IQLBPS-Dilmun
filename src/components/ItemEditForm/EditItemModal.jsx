import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useTranslation } from 'react-i18next';
import { BiEdit } from 'react-icons/bi';
import { GiCancel } from 'react-icons/gi';
import { Input, TextArea, SubmitButton, ListBox, ComboBox } from '../Forms';
import { ITEM_CATEGORY, ITEM_TYPES } from '../../utils/Items';
import { editItem, uploadImageItem } from '../../features/slices/item';
import { useDispatch, useSelector } from '../../app/store';
import { user } from '../../features/slices/user';
import Tooltip from '../Tooltip/Tooltip';

export default function EditItemModal({ item }) {
  const dispatch = useDispatch();
  const userData = useSelector(user);
  const { isItemLoading } = useSelector((state) => state.item);
  const [imgRef, setImgRef] = useState(item.file);
  const [imgSrc, setImgSrc] = useState(item.file);
  const { t } = useTranslation();

  const schema = yup.object().shape({
    title: yup.string().required(t('error.title')),
    description: yup.string().required(t('error.description')),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
    reset,
    control,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      title: item.title,
      file: item.file,
      type: item.type,
      category: item.category,
      description: item.description,
      price: item.price,
      createdAt: item.createdAt,
    },
  });

  const [isOpen, setIsOpen] = useState(false);

  const onSubmit = async (e) => {
    if (typeof imgRef !== 'string') {
      const imgURL = await dispatch(uploadImageItem(imgRef));
      if (imgURL.payload) {
        setImgRef(imgURL.payload);
        const res = await dispatch(
          editItem({
            item: {
              ...e,
              file: imgURL.payload,
              price: e.type === 'Donated' ? 'Free' : e.price,
              id: item.id,
            },
            owner: userData,
          })
        );
        if (res.payload && res.type === 'item/editItem/fulfilled') {
          setIsOpen(false);
        }
      }
    } else {
      const res = await dispatch(
        editItem({
          item: {
            ...e,
            file: item.file,
            price: e.type === 'Donated' ? 'Free' : e.price,
            id: item.id,
          },
          owner: userData,
        })
      );
      if (res.payload && res.type === 'item/editItem/fulfilled') {
        setIsOpen(false);
      }
    }
  };

  function closeModal() {
    setIsOpen(false);
    reset({
      keepErrors: false,
      keepDirty: false,
      keepValues: false,
    });
  }

  function openModal(e) {
    e.preventDefault();
    setIsOpen(true);
  }

  return (
    <>
      <div
        className="flex items-center justify-end bg-background p-3"
        data-testid="edit-item"
      >
        <button type="button" onClick={(e) => openModal(e)}>
          <Tooltip text="Edit Item">
            <BiEdit className="h-8 w-8 text-primary" />
          </Tooltip>
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
                  <div className="flex justify-end text-2xl font-bold text-background my-1.5">
                    <button type="button" onClick={closeModal}>
                      {' '}
                      <GiCancel />{' '}
                    </button>
                  </div>
                  <Dialog.Title
                    as="h3"
                    className="flex flex-col justify-start text-2xl font-bold text-background mb-3"
                  >
                    {t('edit_item_form.edit_item_info')}
                  </Dialog.Title>
                  <Dialog.Description>
                    <span className="block text-sm font-medium text-background">
                      {t('edit_item_form.edit_item_image')}
                    </span>
                  </Dialog.Description>

                  <div className="flex relative  transition-all duration-300 cursor-pointer filter border-2 rounded-md border-dashed my-3  border-tertiary">
                    <img
                      className="rounded-lg max-h-28 m-1"
                      src={imgSrc}
                      alt="item"
                    />

                    <input
                      type="file"
                      accept="image/*"
                      {...register('file')}
                      onChange={(e) => {
                        setImgRef(e.target.files[0]);
                        setImgSrc(URL.createObjectURL(e.target.files[0]));
                      }}
                      className="w-full self-center text-xs text-background file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-background file:text-secondary m-2"
                    />
                  </div>
                  <Input
                    isActive
                    name="title"
                    {...register('title')}
                    errors={errors.title ? errors.title : undefined}
                  >
                    {t('edit_item_form.edit_item_name')}
                  </Input>
                  <input
                    disabled
                    placeholder={t('edit_item_form.can_not_edit_item_price')}
                    type="number"
                    className="items-center text-background border-2 rounded-md mb-2 border-background w-full text-opacity-50 p-2"
                  />
                  <div className="flex justify-between items-center gap-8 w-full flex-col md:flex-row">
                    <div className="w-full">
                      <span className="block text-sm font-medium text-background">
                        {t('edit_item_form.edit_item_type')}
                      </span>
                      <ListBox
                        name="type"
                        control={control}
                        options={ITEM_TYPES}
                        defaultValue={item.type}
                        updateType={() => {}}
                      />
                    </div>
                    <div className="w-full">
                      <span className="block text-sm font-medium text-background">
                        {t('edit_item_form.edit_item_category')}
                      </span>
                      <Controller
                        name="category"
                        control={control}
                        render={({ field }) => (
                          <ComboBox
                            value={item.category}
                            options={ITEM_CATEGORY}
                            edit
                            {...field}
                          />
                        )}
                      />
                    </div>
                  </div>
                  <div className="my-4">
                    <TextArea
                      isActive
                      name="description"
                      {...register('description')}
                      errors={errors?.description}
                    >
                      {t('edit_item_form.edit_item_description')}
                    </TextArea>
                  </div>
                  <div className="bg-primary bg-opacity-25 px-4 py-3 text-right sm:px-6">
                    <SubmitButton
                      buttonText={t('edit_item_form.update_info')}
                      loading={isItemLoading}
                      disabled={!isDirty}
                    />
                    <button
                      type="button"
                      className="ml-2 inline-flex justify-center rounded-md border border-transparent bg-background px-4 py-2 text-sm font-medium text-primary hover:bg-tertiary focus:outline-none focus-visible:ring-2 focus-visible:ring-tertiary focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      {t('edit_item_form.cancel')}
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
