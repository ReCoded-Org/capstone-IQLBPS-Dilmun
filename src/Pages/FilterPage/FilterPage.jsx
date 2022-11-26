import { FunnelIcon } from '@heroicons/react/20/solid';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Filter from '../../components/Filter/Filter';
import ItemsDisplay from '../../components/ItemsDisplay/ItemsDisplay';
import Sort from '../../components/Sort/Sort';
import ItemDetailsPage from '../ItemDetailsPage/ItemDetailsPage';
import AddItemButton from '../../components/AddItemButton/AddItemButton';
import SearchBar from '../../components/SearchBar/SearchBar';
import { user } from '../../features/slices/user';
import { useSelector } from '../../app/store';

const FilterPage = () => {
  const { firstName, lastName } = useSelector(user);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
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
          <span className="font-bold">{` ${firstName} ${lastName}`}</span> hope
          to find the items that you need.
        </h1>
        <SearchBar />
      </div>
      <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3 xl:grid-cols-5">
        <Filter
          mobileFiltersOpen={mobileFiltersOpen}
          setMobileFiltersOpen={setMobileFiltersOpen}
        />
        <ItemsDisplay />
      </div>
      <ItemDetailsPage />
    </motion.main>
  );
};

export default FilterPage;
