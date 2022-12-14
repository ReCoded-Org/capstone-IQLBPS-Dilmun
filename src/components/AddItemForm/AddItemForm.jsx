import { useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useTranslation } from 'react-i18next';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { Input, TextArea, SubmitButton, ListBox, ComboBox } from '../Forms';
import { ITEM_CATEGORY, ITEM_TYPES } from '../../utils/Items';
// redux
import { useSelector, useDispatch } from '../../app/store';
import { user, updateUserAddress } from '../../features/slices/user';
import { uploadImageItem, addItem } from '../../features/slices/item';

export default function AddItemForm() {
  const [imgSrc, setImgSrc] = useState(null);
  const [type, setType] = useState(ITEM_TYPES[0]);
  const [itemImage, setItemImage] = useState(
    'https://cdn.discordapp.com/attachments/1031834305703460906/1041710013992947812/image.png'
  );
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { isItemLoading, error } = useSelector((state) => state.item);
  const userData = useSelector(user);

  const { t } = useTranslation();
  const schema = yup.object().shape({
    title: yup.string().required(t('error.title')),
    price: yup.number().required(t('error.price')),
    description: yup.string().required(t('error.description')),
    country: yup.string().required(t('error.country')),
    city: yup.string().required(t('error.city')),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    reset,
    setValue,
  } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    if (userData.address) {
      setValue('country', userData.address.country);
      setValue('city', userData.address.city);
    }
  }, [userData.address, setValue]);

  const onSubmit = async (values) => {
    if (!userData.address) {
      dispatch(
        updateUserAddress({
          user: userData,
          address: { city: values.city, country: values.country },
        })
      );
    }
    if (typeof itemImage !== 'string') {
      const imgURL = await dispatch(uploadImageItem(itemImage));
      if (imgURL.payload) {
        await dispatch(
          addItem({
            item: values,
            owner: {
              ...userData,
              address: { city: values.city, country: values.country },
            },
            type,
            file: imgURL.payload,
          })
        );
      }
    } else {
      await dispatch(
        addItem({
          item: values,
          owner: {
            ...userData,
            address: { city: values.city, country: values.country },
          },
          type,
          file: itemImage,
        })
      );
    }

    if (!isItemLoading) {
      reset();
      setType(ITEM_TYPES[0]);
      navigate(-1);
    }
  };

  return (
    <div className="bg-background" data-testid="add-item-form">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="md:grid md:grid-cols-4 md:gap-6">
          <div className="md:col-span-1">
            <div className="mx-4 py-3">
              <h3 className="text-2xl font-bold text-primary">
                {t('add_item_form.product_info')}
              </h3>
              <p className="mt-1 text-base text-secondary font-semibold">
                {t('add_item_form.note')}
              </p>
            </div>
          </div>
          <div className="mt-5 md:col-span-3 md:mt-0 md:pl-0 pl-2 pt-4 pr-2 pb-4">
            <div className="shadow sm:overflow-hidden rounded-md">
              <div className="space-y-6 bg-primary px-4 py-5 sm:p-6">
                <div className="grid grid-cols-1 lg:grid-cols-3 justify-center items-center gap-x-0 md:gap-6 gap-y-6">
                  <div>
                    <p className="block text-sm font-medium text-background">
                      {t('add_item_form.item_image')}
                    </p>
                    <div className="mt-1 flex justify-center rounded-md border-2 border-dashed border-tertiary px-6 pt-5 pb-6">
                      <div className="space-y-1 text-center">
                        {imgSrc === null ? (
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
                        ) : (
                          <img
                            className="rounded-lg max-h-28 m-1 mx-auto"
                            src={imgSrc}
                            alt="item"
                          />
                        )}
                        <div className="flex text-sm text-background">
                          <label
                            htmlFor="file"
                            className="relative cursor-pointer rounded-md bg-tertiary font-medium text-secondary px-2 focus-within:outline-none focus-within:ring-2 focus-within:ring-backgound focus-within:ring-offset-2 hover:text-primary"
                          >
                            <span>{t('add_item_form.upload_a_file')}</span>
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
                                setItemImage(e.target.files[0]);
                                setImgSrc(
                                  URL.createObjectURL(e.target.files[0])
                                );
                              }}
                            />
                          </label>
                          <p className="pl-1">
                            {t('add_item_form.or_drag_and_drop')}
                          </p>
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
                        {t('add_item_form.item_name')}
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
                        {t('add_item_form.item_price')}
                      </Input>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-center gap-8 w-full flex-col md:flex-row">
                  <div className="w-full">
                    <span className="block text-sm font-medium text-background">
                      {t('add_item_form.item_type')}
                    </span>
                    <ListBox
                      name="type"
                      control={control}
                      options={ITEM_TYPES}
                      defaultValue={ITEM_TYPES[0]}
                      updateType={(e) => {
                        setType(e);
                        if (e.toLowerCase() === 'donated') setValue('price', 0);
                      }}
                    />
                  </div>
                  <div className="w-full">
                    <span className="block text-sm font-medium text-background">
                      {t('add_item_form.item_category')}
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
                    {t('add_item_form.item_description')}
                  </TextArea>
                </div>
                {!userData.address && (
                  <div>
                    <h1 className="block text-sm font-medium text-background mb-3">
                      {t('add_item_form.adress_info')}
                    </h1>
                    <Input
                      name="country"
                      type="text"
                      errors={errors.country ? errors.country : undefined}
                      {...register('country')}
                    >
                      {t('add_item_form.country')}
                    </Input>
                    <Input
                      name="city"
                      type="text"
                      errors={errors.city ? errors.city : undefined}
                      {...register('city')}
                    >
                      {t('add_item_form.city')}
                    </Input>
                  </div>
                )}
              </div>
              <div className="bg-primary bg-opacity-25 px-4 py-3 text-right sm:px-6">
                <SubmitButton
                  buttonText={t('add_item_form.add_new_item')}
                  loading={isItemLoading}
                />
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
