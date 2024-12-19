import React from 'react';

const Menu = () => {
  return (
    <div className='bg-menu min-w-[225px] max-w-[225px] h-screen pl-[2rem] hidden md:block transition-all duration-300'>
      <div className='flex flex-col h-full'>
        {/* Logo */}
        <div className='flex pt-6 w-full'>
          <div className='flex items-center gap-1'>
            <img src='/assets/linkUp.png' alt='linkUp Logo' className='w-[10rem] h-auto' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
