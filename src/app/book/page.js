import AppointmentScheduler from '@/components/book/AppointmentScheduler';
import React from 'react';

const Book = () => {
  return (
    <div className='relative h-[calc(100vh-120px)] md:mx-[80px] sm:mx-4'>
      <AppointmentScheduler />
    </div>
  );
};

export default Book;
