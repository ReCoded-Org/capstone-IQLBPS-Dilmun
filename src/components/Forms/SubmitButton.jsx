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
        'shadow-lg justify-center py-2 px-4 border border-secondary rounded-md text-sm font-medium text-background bg-secondary hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary',
        disabled
          ? 'opacity-50 cursor-not-allowed justify-center py-2 px-4 border border-primary rounded-md text-primary text-sm font-medium bg-background'
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
