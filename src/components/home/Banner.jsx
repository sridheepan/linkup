import React from 'react';

const Banner = () => {
  return (
    <section className='relative h-[600px] md:h-[650px] md:p-20 p-5'>
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
      <div className='relative top-[30%] md:top-[40%] text-left font-extrabold md:leading-[3.5rem] leading-[2.8rem] text-paper'>
        <p className='md:text-[3.3rem] text-[2.5rem] opacity-50 text-paper'>Not sure..</p>
        <p className='md:text-[4rem] text-[2.8rem] text-paper'>What to choose ?</p>
        <p className='md:text-[1.5rem] text-[1rem] font-extralight mt-3 leading-[1.4rem] text-paper'>
          Connect, Select, and Shop with Your Own Personal Shopper — Anytime, Anywhere!
        </p>
        <button
          className={`text-main bg-grey300 px-10 py-2 md:py-4 shadow-md rounded-full md:rounded-3xl mt-10 hover:shadow-xl active:scale-90 md:text-[2.5rem] text-[2rem] transition duration-150 w-[50%] md:w-[40%] hover:bg-paper font-extrabold`}>
          LinkUp
        </button>
      </div>
    </section>
  );
};

export default Banner;
