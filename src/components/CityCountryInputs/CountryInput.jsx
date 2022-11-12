import React, {useState} from 'react'

export default function CountryInput({errors, children}){
    const [active, setActive] = useState(false)
    function handleActivation(){
        setActive(true)
    }

    return(
        <div data-testid='country-input'>
        <div
          className={[
            'relative border-2 rounded-md mb-2 text-background border-tertiary',
            errors ? 'border-red-500' : '',
          ].join(' ')}
        >
          <input
            className={[
              'outline-none w-full rounded bg-transparent text-sm transition-all duration-200 ease-in-out p-2',
              active ? 'pt-6' : '',
              errors ? 'error' : '',
            ].join(' ')}
            name='country'
            id='country'
            type='text'
            onFocus={handleActivation}
          />

          <label
            className={[
              'absolute top-0 left-0 flex items-center text-tertiary text-opacity-50 p-2 transition-all duration-200 ease-in-out',
              active ? 'text-xs' : 'text-sm',
              errors ? 'error' : '',
            ].join(' ')}
            htmlFor='country'
          >
            {children}
          </label>
        </div>
        {errors && (
          <span className="inline-flex text-sm error">{errors.message}</span>
        )}
      </div>
    )
}