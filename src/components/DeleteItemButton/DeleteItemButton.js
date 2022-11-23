import { BsTrash } from 'react-icons/bs';

function DeleteItemButton() {
    return (
            < button
              type = "button"
              className = "relative inline-flex items-center justify-center p-2 px-3 py-2 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-md group" >
            <span 
              className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-red-600 group-hover:translate-x-0 ease">
            <BsTrash className="w-4 h-4" />
            </span>
            <span 
              className="absolute flex items-center justify-center w-full h-full text-primary transition-all duration-300 transform group-hover:translate-x-full ease">
                Delete
            </span>
            <span 
              className="relative invisible">
                Delete
            </span>
            </button>
    )
}

export default DeleteItemButton