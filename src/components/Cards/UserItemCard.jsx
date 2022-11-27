// import { doc, deleteDoc } from "firebase/firestore";
import { useSelector } from "react-redux";
import Tooltip from '../Tooltip/Tooltip';
import DeleteItemButton from '../DeleteItemButton/DeleteItemButton';
import EditItemModal from '../ItemEditForm/EditItemModal';
// import { db } from '../../firebase-config';
import { useDispatch } from "../../app/store";
import { deleteItem } from "../../features/slices/item";



function UserItemCard(props) {
  const userData = useSelector((state) => state.user.user)
  const dispatch = useDispatch()
  const { item } = props;
  // destructure the item object to use values in the JSX
  const { title, file, description, price, type, categories, id } = item;

  const handleDelete = (itemId, userId) => {
    dispatch(deleteItem({ itemId, userId }))

  }

  return (
    <div className="my-10 relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg p-3 max-w-xs md:max-w-3xl border border-background bg-primary">
      <div className="w-full md:w-1/2 bg-transparent grid place-items-center">
        <img
          src={file}
          alt={title}
          className="rounded-xl w-full h-auto  "
        />
      </div>
      <div className="w-full md:w-2/3 bg-background flex flex-col space-y-2 p-3 rounded-xl justify-between">
        <div className="flex justify-between item-center">
          <p className="text-secondary font-medium text-lg">{type}</p>
          <div className="flex gap-2 justify-between items-center">
            <DeleteItemButton handleClick={() => handleDelete(id, userData.uid)} />

            <Tooltip text="Edit Item">
              <EditItemModal />
            </Tooltip>
          </div>
        </div>
        <h3 className="font-black text-primary md:text-2xl text-xl">{title}</h3>
        {description.length > 20 ? (
          <h5 className="text-base py-1 font-base text-primary">
            {description.slice(0, 1).toUpperCase()}
            {description.slice(1, 30)}...
          </h5>
        ) : (
          <h5 className="text-base py-1 font-base text-primary">
            {description.slice(0, 1).toUpperCase()}
            {description.slice(1)}
          </h5>
        )}

        <div className="flex justify-between item-center">
          <p className="text-xl font-black text-secondary">{price}</p>
          <div className="flex justify-center items-center">
            {typeof categories === 'object' ?
              categories.map((category) => (
                <span
                  key={category}
                  className="text-xs font-medium text-background bg-secondary bg-opacity-50 rounded-full px-2 py-1 mr-2 shadow-md"
                >
                  {category}
                </span>
              )) :
              <span
                className="text-xs font-medium text-background bg-secondary bg-opacity-50 rounded-full px-2 py-1 mr-2 shadow-md"
              >
                {categories}
              </span>
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserItemCard;
