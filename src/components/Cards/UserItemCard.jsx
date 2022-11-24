import {
  FaEdit,
  //  FaTrashAlt
} from 'react-icons/fa';
import DeleteItemButton from '../DeleteItemButton/DeleteItemButton';

function UserItemCard(props) {
  const { item } = props;
  // destructure the item object to use values in the JSX
  // eslint-disable-next-line no-unused-vars
  const { title, file, description, price, type, categories } = item;

  return (
    <div className="my-10 relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg p-3 max-w-xs md:max-w-3xl mx-auto border border-white bg-primary">
      <div className="w-full md:w-1/3 bg-transparent grid place-items-center">
        <img
          src="https://images.pexels.com/photos/4381392/pexels-photo-4381392.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt="tailwind logo"
          className="rounded-xl"
        />
      </div>
      <div className="w-full md:w-2/3 bg-background flex flex-col space-y-2 p-3 rounded-xl justify-between">
        <div className="flex justify-between item-center">
          <p className="text-gray-500 font-medium hidden md:block">Item Type</p>
          <div className="flex gap-2 justify-between items-center">
            {/* <FaTrashAlt className="h-6 w-6 text-red-500" /> */}
            <DeleteItemButton />
            <FaEdit className="h-6 w-6 text-primary" />
          </div>
        </div>
        <h3 className="font-black text-gray-800 md:text-3xl text-xl">
          Title of Item Goes Here
        </h3>
        <p className="md:text-lg text-gray-500 text-base min-h-20">
          Description of item Here...
        </p>

        <div className=" flex justify-between item-center">
          <p className=" text-xl font-black text-gray-800">$110</p>
          <div className="bg-gray-200 px-3 py-1 rounded-full text-xs font-medium text-gray-800 hidden md:block">
            categories
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserItemCard;
