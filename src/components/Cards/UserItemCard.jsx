import { BiEdit } from 'react-icons/bi';
import Tooltip from '../Tooltip/Tooltip';
import DeleteItemButton from '../DeleteItemButton/DeleteItemButton';

function UserItemCard(props) {
  const { item } = props;
  // destructure the item object to use values in the JSX
  const { title, file, description, price, type, categories } = item;

  return (
    <div className="my-10 relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg p-3 max-w-xs md:max-w-3xl mx-auto border border-background bg-primary">
      <div className="w-full md:w-1/3 bg-transparent grid place-items-center">
        <img src={file} alt={title} className="rounded-xl" />
      </div>
      <div className="w-full md:w-2/3 bg-background flex flex-col space-y-2 p-3 rounded-xl justify-between">
        <div className="flex justify-between item-center">
          <p className="text-secondary font-medium text-lg">{type}</p>
          <div className="flex gap-2 justify-between items-center">
            <DeleteItemButton  className=''/>
            <Tooltip text="Edit Item">
              <BiEdit className="h-8 w-8 text-primary" />
            </Tooltip>
          </div>
        </div>
        <h3 className="font-black text-primary md:text-3xl text-xl">
          {title}
        </h3>
        <p className="md:text-lg text-secondary text-base min-h-20">
          {description}
        </p>

        <div className="flex justify-between item-center">
          <p className="text-xl font-black text-secondary">${price}</p>
          <div className="flex justify-center items-center">
            {categories.map((category) => (
              <span
                key={category}
                className="text-xs font-medium text-background bg-secondary bg-opacity-50 rounded-full px-2 py-1 mr-2 shadow-md"
              >
                {category}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserItemCard;
