import React from 'react';
import { TbArrowBadgeRightFilled, TbArrowBadgeDownFilled } from 'react-icons/tb';

const WorksBanner = () => {
  return (
    <div className='w-full flex flex-col items-center justify-around text-main p-5 md:p-20 md:pt-0'>
      <h1 className='font-bold text-[2rem] md:text-[3rem] pb-10'>How We Work!</h1>
      <div className='grid grid-cols-1 md:grid-cols-4'>
        <div className='flex flex-row justify-center items-center min-h-[100px] min-w-[100px] p-4'>
          <div className='flex flex-col items-center justify-center'>
            <div className='bg-main rounded-full w-[100px] md:w-[150px]'>
              <img
                src={`/assets/booking.png`}
                alt={`booking.png`}
                className={`object-fill md:p-10 p-6 `}
              />
            </div>
            <div className='text-center p-2'>
              <p>
                <strong>Step 1: </strong> is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy text ever since the
                1500s, when an unknown printer took a galley of type and scrambled it to make a type
                specimen book.
              </p>
            </div>
            <div className='flex md:hidden m-6'>
              <TbArrowBadgeDownFilled size={30} />
            </div>
          </div>
          <div className='hidden md:flex items-center justify-center h-full ml-10 '>
            <TbArrowBadgeRightFilled size={30} />
          </div>
        </div>
        {/*  */}
        <div className='flex flex-row justify-center items-center min-h-[100px] min-w-[100px] p-4'>
          <div className='flex flex-col items-center justify-center'>
            <div className='bg-main rounded-full w-[100px] md:w-[150px]'>
              <img
                src={`/assets/online-meeting.png`}
                alt={`online-meeting.png`}
                className={`object-fill md:p-10 p-6 `}
              />
            </div>
            <div className='text-center p-2'>
              <p>
                <strong>Step 2: </strong>is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy text ever since the
                1500s, when an unknown printer took a galley of type and scrambled it to make a type
                specimen book.
              </p>
            </div>
            <div className='flex md:hidden m-6'>
              <TbArrowBadgeDownFilled size={30} />
            </div>
          </div>
          <div className='hidden md:flex items-center justify-center h-full ml-10 '>
            <TbArrowBadgeRightFilled size={30} />
          </div>
        </div>
        {/*  */}
        <div className='flex flex-row justify-center items-center min-h-[100px] min-w-[100px] p-4'>
          <div className='flex flex-col items-center justify-center'>
            <div className='bg-main rounded-full w-[100px] md:w-[150px]'>
              <img
                src={`/assets/credit-card.png`}
                alt={`credit-card.png`}
                className={`object-fill md:p-10 p-6 `}
              />
            </div>
            <div className='text-center p-2'>
              <p>
                <strong>Step 3: </strong> is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy text ever since the
                1500s, when an unknown printer took a galley of type and scrambled it to make a type
                specimen book.
              </p>
            </div>
            <div className='flex md:hidden m-6'>
              <TbArrowBadgeDownFilled size={30} />
            </div>
          </div>
          <div className='hidden md:flex items-center justify-center h-full ml-10 '>
            <TbArrowBadgeRightFilled size={30} />
          </div>
        </div>
        {/*  */}
        <div className='flex flex-row justify-center items-center min-h-[100px] min-w-[100px] p-4'>
          <div className='flex flex-col items-center justify-center'>
            <div className='bg-main rounded-full w-[100px] md:w-[150px]'>
              <img
                src={`/assets/free-delivery.png`}
                alt={`free-delivery.png`}
                className={`object-fill md:p-8 p-5 `}
              />
            </div>
            <div className='text-center p-2'>
              <p>
                <strong>Step 4: </strong>is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy text ever since the
                1500s, when an unknown printer took a galley of type and scrambled it to make a type
                specimen book.
              </p>
            </div>
            <div className='flex md:hidden m-6'>{/* <TbArrowBadgeDownFilled size={30} /> */}</div>
          </div>
          <div className='hidden md:flex items-center justify-center h-full ml-10 '>
            {/* <TbArrowBadgeRightFilled size={30} /> */}
          </div>
        </div>
        {/*  */}
      </div>
    </div>
  );
};

export default WorksBanner;
