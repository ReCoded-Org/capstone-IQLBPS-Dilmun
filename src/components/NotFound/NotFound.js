import React from 'react';



function NotFound() {

  return (
    <div className="bg-background flex flex-col justify-center items-center h-screen">
      <div className="text-primary"><h1 className='text-9xl subpixel-antialiased font-sans tracking-tight font-bold'>404</h1></div>

      <div className="text-center text-2xl text-primary subpixel-antialiased font-sans-serif">Maybe this page moved? Got deleted? <br/>Is hiding out in quarantine? Never existed in the first place?</div>
      
    </div>
  );
}

export default NotFound;
