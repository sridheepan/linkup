import React from 'react';

const Banner = () => {
  return (
    <div className='relative h-[600px] md:h-[650px] md:p-20 p-5'>
      {/* Image for mobile screens */}
      <div className='absolute inset-0 md:hidden'>
        <img
          src='/assets/heromobile.jpg'
          alt='hero desktop'
          className='absolute inset-0 w-full h-full object-cover'
        />
      </div>

      {/* Image for desktop screens */}
      <div className='absolute inset-0 hidden md:block'>
        <img
          src='/assets/hero.jpg'
          alt='hero desktop'
          className='absolute inset-0 w-full h-full object-cover'
        />
      </div>
      <div className='relative top-[40%] md:w-[40%] text-left font-extrabold leading-[3.5rem]'>
        <p className='md:text-[3.3rem] text-[3rem] opacity-50'>Not sure..</p>
        <p className='md:text-[4rem] text-[3.5rem]'>What to choose ?</p>

        <button
          className={`text-main bg-paper px-10 py-2 md:py-4 shadow-md rounded-full md:rounded-3xl mt-10 hover:shadow-xl active:scale-90 md:text-[2.5rem] text-[2rem] transition duration-150 w-[50%] opacity-80 hover:opacity-100 font-extrabold animate-bounce`}>
          LinkUp
        </button>
      </div>
    </div>
  );
};

export default Banner;
