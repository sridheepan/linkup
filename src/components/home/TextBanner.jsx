import React from 'react';

const TextBanner = () => {
  return (
    <section className='w-full h-[100px] text-main flex items-center justify-center text-[1.6rem] md:text-[3rem] font-extrabold md:p-20 p-5 bg-grey100 cursor-pointer hover:bg-main hover:text-paper'>
      <p className=''>Your Purchase Simplified!</p>
    </section>
  );
};

export default TextBanner;
