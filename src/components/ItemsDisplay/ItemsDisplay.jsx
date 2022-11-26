import React, { useEffect } from 'react';
import { useDispatch, useSelector } from '../../app/store';
import { getItemList } from '../../features/slices/item';
import ItemsCard from '../ItemCard/ItemsCard';

const ItemsDisplay = () => {
  const { itemList } = useSelector((state) => state.item);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getItemList());
  }, []);
  return (
    <div
      className="w-full grid lg:col-span-2 xl:col-span-4 gap-y-4 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 content-center items-center justify-items-center bg-background py-6"
      data-testid="itemsdisplay-div"
    >
      {itemList.map((item) => {
        return <ItemsCard key={item.id} item={item} />;
      })}
    </div>
  );
};

export default ItemsDisplay;
