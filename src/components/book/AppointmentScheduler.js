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
      <div className='w-full h-[30%] md:w-[30%] md:h-full md:pt-[66px] text-grey700 mb-4 md:mb-0'>
        <h1 className='md:text-2xl text-lg font-bold md:mb-4 mb-1 hidden md:block'>
          Scheduling Instructions
        </h1>
        <p className='md:text-[1.1rem] text-sm md:my-8 md:mb-4 mb-1'>
          {`All times are provided in `}
          <strong
            className='italic font-black text-black'
            dangerouslySetInnerHTML={{ __html: `Indian Standard Time (IST)* ` }}
          />
          <span className='ml-[0.1rem]'>
            to ensure your shopping session is booked during the daytime in IST.{' '}
          </span>
        </p>
        <p className='md:text-[1.1rem] text-sm md:my-8 md:mb-4 mb-1'>
          Once your session is confirmed, you will receive a confirmation email with the meeting
          link. If you have any questions, don't hesitate to reach out.
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
