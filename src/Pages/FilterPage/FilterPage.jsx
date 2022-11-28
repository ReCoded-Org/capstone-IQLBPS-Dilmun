import { FunnelIcon } from '@heroicons/react/20/solid';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Filter from '../../components/Filter/Filter';
import ItemsDisplay from '../../components/ItemsDisplay/ItemsDisplay';
import Sort from '../../components/Sort/Sort';
import AddItemButton from '../../components/AddItemButton/AddItemButton';
import SearchBar from '../../components/SearchBar/SearchBar';
import { user } from '../../features/slices/user';
import { dispatch, useSelector } from '../../app/store';
import { getItemList, itemList } from '../../features/slices/item';

const FilterPage = () => {
  const { firstName, lastName } = useSelector(user);
  const allItems = useSelector(itemList);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [items, setItems] = useState([]);

  const handleFilter = (category, type, price) => {
    const filteredItems = allItems
      .filter((item) => {
        if (!category.length) {
          return true;
        }
        if (typeof item.category === 'string') {
          return category.includes(item.category.toLowerCase());
        }
        return item.category.some((cat) =>
          category.includes(cat.toLowerCase())
        );
      })
      .filter((item) => {
        if (!type.length) {
          return true;
        }
        return type.includes(item.type.toLowerCase());
      })
      .filter((item) => {
        if (!price.min && !price.max) {
          return true;
        }
        if (price.min && !price.max) {
          return item.price >= price.min;
        }
        return item.price >= price.min && item.price <= price.max;
      });
      

    // eslint-disable-next-line no-console
    console.log(filteredItems);
    return filteredItems;
  };
  const onChange = (e) => {
    const name = e.target.value;
    const onSearchItems = allItems
    .filter((item) => {
      if (name.length === 0) {
        return false
      } 
      return name.toLowerCase().includes(item.title.toLowerCase())
     
    })
    setItems(onSearchItems)
    return onSearchItems
  };
  useEffect(() => {
    dispatch(getItemList());
  }, []);


  return (
    <motion.main
      className="mx-auto px-4 sm:px-6 lg:px-8 bg-background"
      initial={{ width: 0 }}
      animate={{ width: '100%' }}
      exit={{ x: window.innerWidth, transition: { duration: 0.3 } }}
    >
      <div className=" grid grid-cols-1 border-b border-gray-200 py-6">
        <div className="flex items-center justify-between mb-20">
          <AddItemButton />
          <div>
            <Sort />
            <button
              type="button"
              className="-m-2 ml-4 p-2 text-secondary hover:text-primary sm:ml-6 lg:hidden"
              onClick={() => setMobileFiltersOpen(true)}
            >
              <span className="sr-only">Filters</span>
              <FunnelIcon className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
        <h1 className="text-2xl xl:text-3xl text-center tracking-tight text-primary">
          Welcome
          {firstName ? (
            <span className="font-bold">{` ${firstName} ${lastName}`}, </span>
          ) : (
            ''
          )}{' '}
          hope you find the items you need.
        </h1>
        <SearchBar onInputChange={onChange} />
      </div>
      <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3 xl:grid-cols-5">
        <Filter
          setItems={setItems}
          handleFilter={handleFilter}
          mobileFiltersOpen={mobileFiltersOpen}
          setMobileFiltersOpen={setMobileFiltersOpen}
        />
        <ItemsDisplay items={items} />
      </div>
    </motion.main>
  );
};

export default FilterPage;
