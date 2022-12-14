import React from 'react';

const Input = React.forwardRef(
  (
    {
      type,
      name,
      isActive = false,
      disabled = false,
      errors,
      errorMessage,
      children,
      onChange,
      ...props
    },
    ref
  ) => {
    const [active, setActive] = React.useState(isActive);

    function handleActivation(e) {
      if (e.target.value.length === 0)
      {
          setActive(true);
      }
    }

    return (
      <>
        <div
          className={[
            'relative border-2 rounded-md mb-2 text-background border-tertiary',
            errors ? 'border-red-500' : '',
            disabled ? 'disabled' : '',
          ].join(' ')}
        >
          <input
            className={[
              'outline-none w-full rounded bg-transparent text-sm transition-all duration-200 ease-in-out p-2',
              active ? 'pt-6' : '',
              errors ? 'error' : '',
              disabled ? 'disabled' : '',
            ].join(' ')}
            name={name}
            id={name}
            type={type}
            disabled={disabled}
            onClick={handleActivation}
            onFocus={handleActivation}
            onChange={onChange}
            {...props}
            ref={ref}
          />

          <label
            className={[
              'absolute top-0 left-0 flex items-center text-tertiary text-opacity-50 p-2 transition-all duration-200 ease-in-out',
              active ? 'text-xs' : 'text-sm',
              errors ? 'error' : '',
              disabled ? 'disabled' : '',
            ].join(' ')}
            htmlFor={name}
          >
            {children}
          </label>
        </div>
        {errors && (
          <span className="inline-flex text-sm error">{errors.message}</span>
        )}
      </>
    );
  }
);

export default Input;
