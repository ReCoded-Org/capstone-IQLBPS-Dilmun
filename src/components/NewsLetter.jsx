import React from 'react'

const NewsLetter = () => {
  return (
    <div className='m-14 p-4 md:flex rounded-md shadow-md justify-around bg-primary'>

      <div className='text-white md:flex'>
      <img className='w-40 h-100' src="https://www.freepnglogos.com/uploads/blue-email-logo-png-4.png" alt="email" />
        <h1 className='text-[30px] sm:text-[40px] mb-3 sm:mb-0'>Subscribe to our <br /> Newsletter !</h1>
      </div>

      <div>
              <p className='text-white mb-5'>Subscribe to our newslatter and stay updated</p>
              <div className='items-center sm:flex justify-center gap-2'>
                    <input type="text" placeholder='Write your email here' className='rounded p-2 mb-3 sm:mb-0 placeholder:text-primary border border-solid ' />
                    <button type='submit' className='p-2 rounded text-primary bg-tertiary'>Subscribe</button>
              </div>
      </div>


    </div>

  )
}

export default NewsLetter