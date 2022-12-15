import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

function AddItemButton() {
  const { t } = jest ? { t: (s) => s } : useTranslation();
  return (
    <Link to="/add-item">
      <div className="btn__container">
        <button
          type="button"
          className="bg-secondary hover:bg-tertiary text-white font-bold xl:py-3 xl:px-6  py-2 px-4 rounded-lg shadow-md hover:shadow-none transition duration-200"
        >
          {t('add_item_button.add_item')}
        </button>
      </div>
    </Link>
  );
}
export default AddItemButton;
