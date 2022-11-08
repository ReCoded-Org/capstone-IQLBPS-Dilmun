import React from 'react';

function TextArea({ name, errors, errorMessage, children, onChange }) {
  const [active, setActive] = React.useState(false);

  function handleActivation(e) {
    setActive(!!e.target.value);
    onChange(e)
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
            errors ? 'placeholder-red-500 text-red-500' : '',
          ].join(' ')}
          id={name}
          name={name}
          rows="5"
          onChange={handleActivation}
        />
        <label
          className={[
            'absolute top-0 left-0 flex items-center text-tertiary text-opacity-50 p-2 transition-all duration-200 ease-in-out',
            active ? 'text-xs' : 'text-sm',
            errors ? 'text-red-500' : '',
          ].join(' ')}
          htmlFor={name}
        >
          {children}
        </label>
      </div>
      {errors && (
        <span className="inline-flex text-sm text-red-500">{errorMessage}</span>
      )}
    </>
  );
}

export default TextArea;
