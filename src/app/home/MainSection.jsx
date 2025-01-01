'use client';
import { Divider } from 'antd';
import { useRouter } from 'next/navigation';
import React, { Fragment, useEffect, useState } from 'react';

const MainSection = () => {
  const router = useRouter();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Mobile view for screens <= 768px
    };

    // Initial check
    handleResize();

    // Add resize event listener
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Fragment>
      <div className='relative mx-auto flex text-center'>
        {/* title */}
        <div className='w-full md:w-1/2 flex flex-col justify-center items-center text-[4.25rem] font-extrabold text-primaryMain md:p-[50px]'>
          <div className='flex flex-col'>
            <p className='flex-wrap line text-[2.7rem] font-light'>Your Purchase,</p>
            <p className='text-[3.8rem] font-bold'>Simplified!</p>
            <span className='text-[1.1rem] mt-4 font-extralight'>
              Connect with global merchandisers in one click.
            </span>
          </div>
          {/* Button */}
          <div className='w-5/6 md:w-1/2'>
            <button
              className='bg-secondaryHigh text-center text-white text-[2.25rem] font-bold py-3 px-6 rounded-2xl hover:bg-secondaryMain transition ease-in-out duration-300 shadow-lg w-full cursor-pointer'
              onClick={() => router.push('/book')}>
              Link Up
            </button>
            <Divider style={{ marginBottom: '0' }}>OR</Divider>
            <button className='bg-primaryDark text-center text-white text-[2.25rem] font-bold py-3 px-6 rounded-2xl hover:bg-primaryMain transition ease-in-out duration-300 shadow-lg w-full cursor-pointer '>
              Join Us
            </button>
          </div>
        </div>
        {/* Video */}
        {!isMobile && (
          <video
            autoPlay
            muted
            loop
            className='hidden md:block md:w-1/2 rounded-3xl shadow-lg object-cover'>
            <source src='/assets/home-banner.mp4' type='video/mp4' />
            Your browser does not support the video tag.
          </video>
        )}
      </div>
    </Fragment>
  );
};

export default MainSection;
