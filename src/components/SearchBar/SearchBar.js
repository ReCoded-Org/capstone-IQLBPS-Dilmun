import { useTranslation } from 'react-i18next';
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';

const SearchBar = ({ onInputChange }) => {
  const { t } = useTranslation();
  
  return (
    <div className="sm:flex text-center my-3 justify-center mt-28 items-center p-6  bg-primary rounded-xl shadow-lg">
      <div className="sm:flex justify-between bg-gray-100 p-4 w-full my-3 sm:my-0 rounded-lg">
        <div className="flex  justify-center items-center">
          <MagnifyingGlassIcon className="min-w-[24px] min-h-[24px] max-w-6 max-h-6 opacity-30" />
          <input
            className="bg-gray-100 outline-none px-2 sm:text-start text-center"
            type="text"
            onChange={onInputChange}
            placeholder={t('search_bar.search_here')}
          />
        </div>
      </div>
    </div>
  );
};
export default SearchBar;
