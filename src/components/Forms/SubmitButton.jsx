import React from 'react';
import { LoadingDots } from '../animations';

const classNames = (...classes) => {
  return classes.filter(Boolean).join(' ');
};

function SubmitButton({
  buttonText,
  disabled,
  loading,
  customClasses,
  ...props
}) {
  return (
    <button
      type="submit"
      disabled={disabled}
      className={classNames(
        'shadow-lg justify-center py-2 px-4 border border-secondary rounded-md text-sm font-medium text-white bg-secondary hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary',
        disabled
          ? 'opacity-50 cursor-not-allowed justify-center py-2 px-4 border border-green-200 rounded-md  text-sm font-medium text-white bg-green-200 hover:bg-green-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-200'
          : '',
        customClasses
      )}
      {...props}
    >
      {loading ? <LoadingDots /> : `${buttonText}`}
    </button>
  );
}

export default SubmitButton;
