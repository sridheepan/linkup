'use client';
import { Divider } from 'antd';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import MainSection from './home/MainSection';
import AppointmentScheduler from '@/components/book/AppointmentScheduler';
import { InlineWidget } from 'react-calendly';
import Header from '@/components/home/Header';
import Footer from '@/components/common/Footer';
import Banner from '@/components/home/Banner';

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
    <div>
      <Header />
      <Banner />
      <Footer />
    </div>
  );
};

export default page;
