import React, { useEffect } from 'react';
import { useDispatch, useSelector } from '../../app/store';
import { getItemList } from '../../features/slices/item';
import ItemsCard from '../ItemCard/ItemsCard';

const ItemsDisplay = ({filter}) => {
  
  const { itemList } = useSelector((state) => state.item);
  const dispatch = useDispatch();

  // function to filter the items based on multiple categories and types
  const filterItems = (items, filters) => {
    const category = filters[0];
    const type = filters[1];
    let filteredItems = items;
    if (category) {
      filteredItems = filteredItems.filter(
        (item) => item.category === category.options.map((cat) => cat.label)
      );
    }
    if (type) {
      filteredItems = filteredItems.filter((item) => item.type === type.options.map((typ) => typ.label));
    }
    console.log(filteredItems);
    return filteredItems;
  };
  const newItems = filterItems(itemList, filter);

  useEffect(() => {
    dispatch(getItemList());
  }, []);
  return (
    <div
      className="w-full grid lg:col-span-2 xl:col-span-4 gap-y-4 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 content-center justify-items-center bg-background py-6"
      data-testid="itemsdisplay-div"
    >
      {newItems.map((item) => {
        return <ItemsCard key={item.id} item={item} />;
      })}
    </div>
  );
};

export default ItemsDisplay;
