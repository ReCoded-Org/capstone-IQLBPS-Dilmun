import { Link } from 'react-router-dom';

function AddItemButton() {
  return (
    <Link to="/delete-item">
      <div className="btn__container">
        <button
          type="button"
          className="bg-secondary hover:bg-tertiary text-white font-bold py-2 px-4 rounded-lg shadow-md hover:shadow-none transition duration-200"
        >
          Delete Item
        </button>
      </div>
    </Link>
  );
}
export default DeleteItemButton;
