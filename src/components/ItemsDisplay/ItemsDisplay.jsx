import React, { useEffect } from 'react';
import { useDispatch, useSelector } from '../../app/store';
import { getItemList, itemList } from '../../features/slices/item';
import ItemsCard from '../ItemCard/ItemsCard';

const ItemsDisplay = () => {
  const itemData = useSelector(itemList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getItemList());
  }, []);
  return (
    <div
      className="w-full grid lg:col-span-3 gap-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 content-center items-center justify-items-center bg-background py-6 my-2"
      data-testid="itemsdisplay-div"
    >
          {itemData.map((item) => {
        return <ItemsCard key={item.id} item={item} />;
      })}
    </div>
  );
};

export default ItemsDisplay;
