import { collection, getDocs, query, where } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { db } from '../../firebase-config';
import ItemsCard from '../ItemCard/ItemsCard';

const ItemsDisplay = ({ filter }) => {
  const docRef = collection(db, 'Items');
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    const func = async (items, filters) => {
      const category = filters[0];
      let filteredItems = items;
      const type = filters[1];
      if (category) {
        filteredItems = query(
          docRef,
          where('category', '==', `${category.options.label}`)
        );
      }
      if (type) {
         filteredItems = query(
           docRef,
           where('type', '==', `${type.optionslabel}`)
         );
      }
      const final = await getDocs(filteredItems);
      setFiltered(
        final.docs.map((f) => {
          return f.data() ;
        })
      );
    };
    func(filtered, filter);
    console.log(filtered);
    console.log(filter);
  }, [filter]);

  return (
    <div
      className="w-full grid lg:col-span-2 xl:col-span-4 gap-y-4 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 content-center justify-items-center bg-background py-6"
      data-testid="itemsdisplay-div"
    >
      {filtered.map((item) => {
        return <ItemsCard key={item.id} item={item} />;
      })}
    </div>
  );
};

export default ItemsDisplay;
