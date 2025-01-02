'use client';
import CustomCalendar from '@/components/common/CustomCalendar';
import { Divider } from 'antd';
import { useRouter } from 'next/navigation';
import React, { Fragment, useEffect, useRef, useState } from 'react';

const MainSection = () => {
  const videoRef = useRef(null); // Create a ref to the video element
  const router = useRouter();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.3; // Slow down the video to 50% of normal speed
    }

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
      <div className='relative mx-auto flex h-screen'>
        {/* title */}
        <div className='w-full px-[30px] md:w-[50%] flex flex-col text-[4.25rem] font-extrabold text-paper md:px-[150px] pt-16'>
          <div className='flex flex-col'>
            <p className='flex-wrap line text-[4rem] font-semibold'>Your Purchase,</p>
            <p className='text-[4rem] font-bold mt-[-1rem]'>Simplified!</p>
            <span className='text-[1.8rem] mt-1 font-extralight'>
              Connect with global merchandisers in one click.
            </span>
          </div>
          {/* Button */}
          <div className='w-full'>
            <button
              className='bg-primaryLight text-center text-white text-[2.25rem] font-bold py-3 px-6 rounded-2xl hover:brightness-90 transition ease-in-out duration-300 shadow-lg w-full cursor-pointer'
              onClick={() => router.push('/book')}>
              Link Up
            </button>
            <Divider style={{ marginBottom: '0' }}>OR</Divider>
            <button className='bg-primaryLight text-center text-white text-[2.25rem] font-bold py-3 px-6 rounded-2xl hover:brightness-90 transition ease-in-out duration-300 shadow-lg w-full cursor-pointer'>
              Join Us
            </button>
          </div>
        </div>

        {/* Video */}
        {!isMobile && (
          <div className='relative w-full h-full'>
            <video
              ref={videoRef} // Attach the ref to the video element
              autoPlay
              muted
              loop
              className='absolute w-full h-full rounded-3xl object-cover'>
              <source src='/assets/shapes-anim-3.webm' type='video/webm' />
              Your browser does not support the video tag.
            </video>

            {/* Overlay div */}
            <div className='absolute top-0 left-0 w-full h-full rounded-2xl pt-20 flex justify-center'>
              <CustomCalendar />
            </div>
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default MainSection;
