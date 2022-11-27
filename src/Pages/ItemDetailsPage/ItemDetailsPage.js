import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import CustomButton from '../../components/CustomComponents/CustomButton';
import { getItemById } from '../../features/slices/item';
import { useDispatch, useSelector } from '../../app/store';
import LoadingScreen from '../../components/animations/LoadingScreen';

const ItemDetailsPage = () => {
  const dispatch = useDispatch();
  const { item, isItemLoading } = useSelector((state) => state.item);
  const { t } = useTranslation();
  const { id } = useParams();

  useEffect(() => {
    const getItem = async () => {
      await dispatch(getItemById(id));
    };
    getItem();
  }, [dispatch, id]);

  return !isItemLoading ? (
    item && (
      <div
        data-testid="item-details-page"
        className="md:flex text-background p-6 bg-background gap-4 h-screen w-full"
      >
        <div className="w-full lg:w-1/2">
          <img
            className="max-h-full min-h-[600px] mb-6 md:mb-0 w-full object-contain"
            src={item.file}
            alt={item.title}
          />
        </div>
        <div className="w-full lg:w-1/2 md:ml-auto  max-h-full md:mr-auto flex flex-col gap-7 rounded pt-5 px-5 bg-gradient-to-tl from-tertiary to-primary justify-between py-10">
          <div className="flex flex-col gap-7">
            <div>
              <h2 className="font-bold text-4xl pb-4">{item.title}</h2>
              <div className="">
                {typeof item.category === 'object' ? (
                  item.category.map((c) => (
                    <span
                      key={c}
                      className="text-lg text-center font-medium text-background bg-tertiary bg-opacity-50 rounded-full px-2 py-1 mr-2 shadow-md"
                    >
                      {c}
                    </span>
                  ))
                ) : (
                  <span className="text-lg font-medium text-background bg-tertiary bg-opacity-50 rounded-full px-2 py-1 mr-2 shadow-md">
                    {item.category}
                  </span>
                )}
              </div>
            </div>
            <span className="flex gap-1">
              <p className="font-bold">{t('items_details.item_type')}</p>
              {item.type}
            </span>
            <span className="flex gap-1">
              <p className="font-bold">{t('items_details.price')}</p>
              {item.price}
            </span>
            <span className="flex gap-1">
              <p className="font-bold">{t('items_details.address')}</p>
              {`${item.owner?.address.city}, ${item.owner?.address.country}`}
            </span>
            <div>
              <span className="font-bold text-xl">
                {t('items_details.description')}
              </span>
              <p className="text-lg">
                {item.description}
              </p>
            </div>
          </div>
          <div className="w-full self-end">
            <a
              href={`mailto:${item.owner?.email}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full"
            >
              <CustomButton paddingX="px-4" paddingY="py-4" width="lg:w-full">
                {t('items_details.email_owner')}
              </CustomButton>
            </a>
          </div>
        </div>
      </div>
    )
  ) : (
    <LoadingScreen />
  );
};

export default ItemDetailsPage;
