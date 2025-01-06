import Image from 'next/image';
import React from 'react';

const Banner = () => {
  return (
    <section className='relative h-[650px] md:h-[650px] md:p-20 p-5'>
      {/* Image for mobile screens */}
      <div className='absolute inset-0 md:hidden'>
        <img
          src='/assets/hero-f.png'
          alt='hero-desktop'
          className='absolute w-[300px] h-[300px] z-5 top-16 left-1/2 transform -translate-x-1/2 z-10'
        />
        <img
          src='/assets/bg-mob2.png'
          alt='bg-mobile'
          className='absolute top-0 right-0 w-[300px] h-[450px]'
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
      {/* <div className='absolute bottom-0 right-0'>
        <div className='w-[400px] h-20 bg-grey100 rounded-tl-3xl'></div>
      </div> */}
      <div className='relative top-[60%] md:top-[40%] md:text-left text-center font-extrabold md:leading-[3.5rem] leading-[2.5rem]'>
        <p className='md:text-[3.3rem] text-[2.1rem] opacity-50 md:text-paper text-mainB'>
          Not sure..
        </p>
        <p className='md:text-[4rem] text-[2.5rem] md:text-paper text-mainB'>What to choose ?</p>
        <p className='md:text-[1.5rem] text-[0.8rem] font-extralight mt-3 leading-[1rem] text-secondaryMain'>
          <strong className='font-bold'>Connect</strong>,{' '}
          <strong className='font-bold'>Select</strong>, and{' '}
          <strong className='font-bold'>Shop</strong> with Your Own Personal Shopper
        </p>
        <p className='md:text-[1.5rem] text-[0.8rem] font-extralight mt-3 leading-[0.5rem] text-secondaryMain'>
          Anytime, Anywhere!
        </p>
        <button
          className={`md:text-main md:bg-grey300 text-paper bg-mainB py-3 md:py-4 shadow-md rounded-2xl md:rounded-3xl md:mt-10 mt-5 hover:shadow-xl active:scale-90 md:text-[2.5rem] text-[2rem] transition duration-150 w-[50%] md:w-[40%] hover:brightness-110 font-extrabold`}>
          LinkUp
        </button>
      </div>
    </section>
  );
};

export default Banner;
