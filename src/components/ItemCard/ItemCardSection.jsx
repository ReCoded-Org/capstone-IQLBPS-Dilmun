import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from '../../app/store';
import { getItemList, itemList } from '../../features/slices/item';
import ItemsCard from './ItemsCard';

export default function ItemCardSection() {
  const itemData = useSelector(itemList);
  const [items, setItems] = useState([]);
  const dispatch = useDispatch();

useEffect(() => {
    const func = async () => {
      await dispatch(getItemList(itemData));
      setItems(itemData);
    };
  if (items.length === 0){
    func();}
  }, [items, itemData.length]);

  return (
    <div 
      className="w-full grid gap-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 content-center items-center justify-items-center bg-background py-6 my-2"
    >

        {items.map((item) => {
          return (<ItemsCard key={item.id} item={item} />);
        })}

    </div>
  );
}
