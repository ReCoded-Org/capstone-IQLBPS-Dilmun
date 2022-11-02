import React from 'react'

const CustomButton = ({ children, paddingX, paddingY }) => {
    const className = `bg-tertiary ${paddingX} ${paddingY} w-full sm:w-auto  text-white font-semibold rounded-lg hover:shadow-lg transition duration-3000 cursor-pointer`
    return (
        <button type='submit' className={className}>{children}</button>
    )
}

export default CustomButton