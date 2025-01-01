'use client';
import { Divider } from 'antd';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import MainSection from './home/MainSection';
import AppointmentScheduler from '@/components/book/AppointmentScheduler';
import { InlineWidget } from 'react-calendly';

const page = () => {
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

  return (
    <div className='w-screen p-4'>
      <MainSection />
      <Divider></Divider>
      {isMobile ? (
        <AppointmentScheduler />
      ) : (
        <div className='w-full'>
          <InlineWidget
            url='https://calendly.com/go-linkup/30min'
            pageSettings={{
              backgroundColor: '#fcf8f7',
              hideEventTypeDetails: isMobile,
              hideLandingPageDetails: false,
              primaryColor: '00a2ff',
              textColor: '4d5055',
            }}
          />
        </div>
      )}
      {/* <Divider style={{ marginBottom: '0' }}></Divider> */}
    </div>
  );
};

export default page;
