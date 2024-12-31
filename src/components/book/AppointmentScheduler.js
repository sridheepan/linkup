'use client';
import { Divider } from 'antd';
import React, { useEffect, useState } from 'react';
import { InlineWidget } from 'react-calendly';

const AppointmentScheduler = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Handle screen size detection
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

  const handleCalendlyLoad = () => {
    console.log('test');
  };

  return (
    <div className='w-full md:h-full flex flex-col-reverse md:flex-row items-start justify-between md:items-start md:justify-center'>
      {/* Instruction Section */}
      <div className='w-full h-[30%] md:w-[30%] md:h-full md:pt-[66px] text-primaryMain mb-4 md:mb-0'>
        <h1 className='md:text-2xl text-lg font-bold md:mb-4 mb-1 hidden md:block'>
          Scheduling Instructions
        </h1>
        <p className='md:text-[1.1rem] text-sm md:my-8 font-extralight md:mb-4 mb-1 italic'>
          {`${
            !isMobile
              ? 'Please schedule your virtual shopping session with your shopping assistant.'
              : ''
          } All times are
          shown in **Indian Standard Time (IST)**, so make sure to adjust accordingly if you're in a
          different time zone.`}
        </p>
        <p className='md:text-[1.1rem] text-sm md:my-8 font-extralight md:mb-4 mb-1 italic'>
          Each session is for <strong>1 hour</strong>. If needed, your session can be extended by an
          additional 30 minutes.
        </p>
        <p className='md:text-[1.1rem] text-sm md:my-8 font-extralight md:mb-4 mb-1 italic'>
          Once you schedule your session, you'll receive a confirmation email with the meeting link.
          Feel free to reach out if you have any questions before your session.
        </p>
      </div>

      {/* Calendly Widget Section */}
      <div className='w-full'>
        <InlineWidget
          url='https://calendly.com/go-linkup/30min'
          onLoad={handleCalendlyLoad}
          pageSettings={{
            backgroundColor: '#fcf8f7',
            hideEventTypeDetails: isMobile,
            hideLandingPageDetails: false,
            primaryColor: '00a2ff',
            textColor: '4d5055',
          }}
        />
      </div>
    </div>
  );
};

export default AppointmentScheduler;
