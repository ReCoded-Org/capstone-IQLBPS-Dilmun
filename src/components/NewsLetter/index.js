import React from 'react'

const NewsLetter = () => {
  return (
    <section>
      <div className='m-14 pt-14 pb-14 pr-10 pl-10 md:flex rounded-md shadow-md justify-around bg-primary'>
        <div className='text-background flex flex-col md:flex-row justify-center items-center'>
          <img className='w-24 md:w-40  h-100' src="https://www.freepnglogos.com/uploads/blue-email-logo-png-4.png" alt="email" />
          <h1 className='text-[20px] sm:text-[40px] mb-3 sm:mb-0'>Subscribe to our <br /> Newsletter !</h1>
        </div>
        <div className='mt-4'>
          <p className='text-background mb-5'>Subscribe to our newsletter and stay updated</p>
          <div className='items-center sm:flex justify-center gap-2'>
            <input type="text" placeholder='Write your email here' className='rounded p-1 w-full sm:w-fit md:p-2 mb-3 sm:mb-0 placeholder:text-background border border-solid ' />
            <button type='submit' className='md:p-2 p-1 w-full sm:w-fit rounded text-primary bg-tertiary'>Subscribe</button>
          </div>
        </div>
      </div>

    </section>


  )
}

export default NewsLetter