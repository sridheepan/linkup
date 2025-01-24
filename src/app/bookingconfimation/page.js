import CompletePage from '@/components/payment/CompletePage';
import { Header } from 'antd/es/layout/layout';
import React from 'react';

const page = () => {
  return (
    <div className='min-h-screen w-full'>
      <Header variant={'ghost'} />
      {/* <p>Welcome to the booking page! Choose a session and book it.</p> */}
      <div>
        <CompletePage />
      </div>
    </div>
  );
};

export default page;
