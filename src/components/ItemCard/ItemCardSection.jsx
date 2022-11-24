import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from '../../app/store';
import { getItemList, itemList } from '../../features/slices/item';
import ItemCard from './ItemCard';

export default function ItemCardSection() {
  const itemData = useSelector(itemList);
  const [items, setItems] = useState([]);
  const dispatch = useDispatch();

  const func = async () => {
    await dispatch(getItemList(itemData));
    setItems(itemData.docs.map((d) => {return ({...d.doc(), id: d.id} )}));
  };
  useEffect(() => {
    func();
  }, [items]);

  return (
    <div
      data-testid="item-card"
      className="w-full grid gap-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 content-center items-center justify-items-center bg-background py-6 my-2"
    >
      <div>
        {items.map((item) => {
          return <ItemCard item={item} />;
        })}
      </div>
    </div>
  );
}
