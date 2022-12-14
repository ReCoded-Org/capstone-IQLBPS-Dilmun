import React from 'react';

const TextArea = React.forwardRef(
  ({ name, errors, children, onChange, isActive = false,  ...props }, ref) => {
    const [active, setActive] = React.useState(isActive);

    function handleActivation() {
      setActive(true);
    }

    return (
      <>
        <div
          className={[
            'relative border-2 rounded mb-2 text-backround border-tertiary',
            errors ? 'border-red-500' : '',
          ].join(' ')}
        >
          <textarea
            className={[
              'outline-none w-full rounded bg-transparent text-sm transition-all duration-200 ease-in-out p-2 text-background',
              active ? 'pt-6' : '',
              errors ? 'error' : '',
            ].join(' ')}
            id={name}
            name={name}
            rows="5"
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

export default TextArea;
