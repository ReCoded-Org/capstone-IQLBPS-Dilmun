import React from 'react';
import { useTranslation } from 'react-i18next';
import CustomButton from '../../components/CustomComponents/CustomButton';

const ItemDetailsPage = () => {
  const {t} = useTranslation();
  return (
    <div
      data-testid="item-details-page"
      className="md:flex h-full text-background p-6 bg-background gap-4 mt-11"
    >
      <div>
        <img
          className="max-h-full min-h-[600px] mb-6 md:mb-0"
          src="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YmFnfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
          alt="headphones"
        />
      </div>
      <div className=" md:max-w-lg md:ml-auto min-h-[700px] max-h-full md:mr-auto flex flex-col gap-7 rounded pt-5 px-5 bg-primary ">
        <div>
          <h2 className="font-bold text-3xl ">Backpack</h2>
          <span>Other</span>
        </div>
        <span className="flex gap-1">
          <p className="font-semibold">{t('items_details.price')}</p> $60
        </span>
        <span className="flex gap-1">
          <p className="font-semibold">{t('items_details.item_type')}</p> New
        </span>
        <span className="flex gap-1">
          <p className="font-semibold">{t('items_details.country')}</p> Spain
        </span>
        <span className="flex gap-1">
          <p className="font-semibold">{t('items_details.address')}</p> C/Conde
          de Xiquena 7, 3º, 1A Izda, 280280, Madrid
        </span>
        <div>
          <span className="font-bold text-xl">
            {t('items_details.description')}
          </span>
          <p className="text-lg">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem
            facilis cupiditate reiciendis dignissimos hic aliquam esse
            aspernatur quam similique libero!
          </p>
        </div>
        <CustomButton paddingX="px-4" paddingY="py-4">
          {t('items_details.email_owner')}
        </CustomButton>
      </div>
    </div>
  );
};

export default ItemDetailsPage;
