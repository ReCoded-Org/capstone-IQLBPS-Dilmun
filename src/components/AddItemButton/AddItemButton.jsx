import { Link } from 'react-router-dom';

function AddItemButton() {
  return (
    <Link to="/add-item">
      <div className="btn__container">
        <button
          type="button"
          className="bg-secondary hover:bg-tertiary text-white font-bold py-2 px-4 rounded-lg shadow-md hover:shadow-none transition duration-200"
        >
          Add Item
        </button>
      </div>
    </Link>
  );
}
export default AddItemButton;
