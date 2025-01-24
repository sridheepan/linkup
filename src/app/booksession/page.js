'use client';
import Calendar from '@/components/booking/Calendar';
import { CurrencySwitcher } from '@/components/common/CurrencySelector';
import LinkCalendar from '@/components/common/LinkCalendar';
import Header from '@/components/home/Header';
import React, { useState } from 'react';

const page = () => {
  const [date, setDate] = useState(new Date());

  return (
    <div className='min-h-screen w-full'>
      <Header variant={'ghost'} />
      {/* <p>Welcome to the booking page! Choose a session and book it.</p> */}
      <div className='container mt-10 relative min-h-[80vh] h-full bg-paper rounded-2xl'>
        <Calendar />
      </div>
    </div>
  );
};

export default page;
