import { FunnelIcon, Squares2X2Icon } from '@heroicons/react/20/solid';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Filter from '../../components/Filter/Filter';
import ItemsDisplay from '../../components/ItemsDisplay/ItemsDisplay';
import Sort from '../../components/Sort/Sort';
import AddItemButton from '../../components/AddItemButton/AddItemButton';

const FilterPage = () => {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  return (
    <motion.main
      className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
      initial={{ width: 0 }}
      animate={{ width: '100%' }}
      exit={{ x: window.innerWidth, transition: { duration: 0.3 } }}
    >
      <div className="flex items-baseline justify-between border-b border-gray-200 pt-24 pb-6">
        <div className="flex items-center">
          <Sort />
          <button
            type="button"
            className="-m-2 ml-5 p-2 text-secondary hover:text-primary sm:ml-7"
          >
            <span className="sr-only">View grid</span>
            <Squares2X2Icon className="h-5 w-5" aria-hidden="true" />
          </button>
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
      <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
        <Filter
          mobileFiltersOpen={mobileFiltersOpen}
          setMobileFiltersOpen={setMobileFiltersOpen}
        />
        <ItemsDisplay />
        <AddItemButton />
      </div>
    </motion.main>
  );
};

export default FilterPage;
