import React from 'react'

const Alert = ({color, children}) => {
  const className = `p-4 mb-4 text-sm text-blue-700  rounded-lg dark:bg-blue-200 dark:text-blue-800 ${color}`
    return (
    <div className={className} >
  <span className="font-medium">{children}</span> 
</div>
  )
}

export default Alert

