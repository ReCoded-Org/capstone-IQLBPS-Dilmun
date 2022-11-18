import React from 'react';



function NotFound() {

  return (
    <div className="bg-secondary flex flex-col justify-center items-center h-screen">
      <div className="text-background"><h1 className='text-5xl'>404</h1></div>

      <div className="text-center text-2xl text-background">Maybe this page moved? Got deleted? Is hiding out in quarantine? Never existed in the first place?</div>
    </div>
  );
}

export default NotFound;
