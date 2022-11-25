import { useEffect } from 'react';
import { useSelector, useDispatch } from '../../app/store';
import { getItemList, itemList } from '../../features/slices/item';
import ItemsCard from './ItemsCard';

export default function ItemCardSection() {
  const itemData = useSelector(itemList);
  const dispatch = useDispatch();

useEffect(() => {
     dispatch(getItemList());
  }, []);

  return (
    <div 
      className="w-full grid gap-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 content-center items-center justify-items-center bg-background py-6 my-2"
    >
        {itemData.map((item) => {
          return (<ItemsCard key={item.id} item={item} />);
        })}

    </div>
  );
}
