import { useTranslation } from 'react-i18next';
import Tooltip from '../Tooltip/Tooltip';


function DeleteItemButton({handleClick}) {
  const { t } = jest ? { t: (s) => s } : useTranslation();
  return (
    <Tooltip text={t('delete_item')}>
      <button
      onClick={handleClick}
        type="button"
        className="relative inline-flex items-center justify-center p-1 px-1 py-2 overflow-hidden transition duration-300 ease-out rounded-full group"
      >
        <span className="absolute inset-0 flex items-center justify-center w-full h-full duration-300 -translate-x-full  group-hover:translate-x-0 ease">
          <img
            src="https://cdn.discordapp.com/attachments/1043477388589277264/1045835010378321970/recycle-bin-removebg-preview.png"
            alt=""
            className="w-6 h-6 "
          />
        </span>
        <span className="absolute flex items-center justify-center w-full h-full transition-all duration-300 transform group-hover:translate-x-full ease">
          <img
            src="https://cdn.discordapp.com/attachments/1043477388589277264/1045146842305933402/trash.png"
            alt=""
            className="w-6 h-6 "
          />
        </span>
        <span className="relative invisible">
          <img
            src="https://cdn.discordapp.com/attachments/1043477388589277264/1045146842305933402/trash.png"
            alt=""
            className="w-6 h-6 "
          />
        </span>
      </button>
    </Tooltip>
  );
}

export default DeleteItemButton;