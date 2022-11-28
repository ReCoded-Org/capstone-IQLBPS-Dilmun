import React from 'react'
import { twMerge } from 'tailwind-merge'

const CustomButton = ({ children, paddingX, paddingY, width }) => {
    const className = `bg-tertiary ${paddingX} ${paddingY} w-full lg:w-auto text-white font-semibold rounded-lg hover:shadow-lg hover:bg-secondary transition duration-500 cursor-pointer`
    return (
        <button type='submit' className={twMerge(className, width)}>{children}</button>
    )
}

export default CustomButton