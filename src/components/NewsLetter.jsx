import React from 'react'

const NewsLetter = () => {
  return (
    <div className='m-14 p-4 md:flex rounded-md shadow-md justify-around bg-primary'>
      <div className='text-white '>
        <h1 className='text-[30px] sm:text-[40px] mb-3 sm:mb-0'>Subscribe to our <br /> NEWSLETTER</h1>
      </div>
      <div className='items-center sm:flex justify-center gap-2'>
        <input type="text" placeholder='Write your email here' className='rounded p-2 mb-3 sm:mb-0 placeholder:text-primary border border-solid ' />
        <button type='submit' className='p-2 rounded text-primary bg-white'>Submit</button>
      </div>
    </div>

  )
}

export default NewsLetter