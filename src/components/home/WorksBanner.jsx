import React from 'react';
import { TbArrowBadgeRightFilled, TbArrowBadgeDownFilled } from 'react-icons/tb';

const WorksBanner = () => {
  return (
    <div className='w-full flex flex-col items-center justify-around md:text-main text-mainB p-5 md:p-20 md:pt-0'>
      <h1 className='font-bold text-[2rem] md:text-[3rem] pb-10'>How We Work!</h1>
      <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
        {/* Step 1 */}
        <div className='flex flex-col items-center justify-between min-h-full'>
          <div className='bg-mainB md:bg-main rounded-full w-[100px] md:w-[150px]'>
            <img
              src={`/assets/booking.png`}
              alt={`booking.png`}
              className={`object-fill md:p-10 p-6 `}
            />
          </div>
          <div className='text-center p-2 text-secondaryMain mx-8'>
            <h2 className='text-mainB md:text-main font-bold py-2'>
              Step 1: Choose Your Date & Time
            </h2>
            <p>
              Select a time that works best for you and easily book your session. Add one or more
              participants to receive a personalized shopping link. Provide the shop name, address,
              and any additional details to help us tailor your visit. Once your details are in,
              complete your payment to secure your booking and get ready to shop!
            </p>
          </div>
          <div className='flex md:hidden'>
            <TbArrowBadgeDownFilled size={30} />
          </div>
          <div className='hidden md:flex items-center justify-center h-full ml-10'>
            {/* <TbArrowBadgeRightFilled size={30} /> */}
          </div>
        </div>
        {/* Step 2 */}
        <div className='flex flex-col items-center justify-between min-h-full'>
          <div className='bg-mainB md:bg-main rounded-full w-[100px] md:w-[150px]'>
            <img
              src={`/assets/online-meeting.png`}
              alt={`online-meeting.png`}
              className={`object-fill md:p-10 p-6 `}
            />
          </div>
          <div className='text-center p-2 text-secondaryMain mx-8'>
            <h2 className='text-mainB md:text-main font-bold py-2'>
              Step 2: Meet Your Personal Shopper
            </h2>
            <p>
              At your scheduled time, connect with your dedicated personal shopper who will guide
              you through a curated shopping experience. Whether you’re exploring new products or
              searching for something specific, your shopper will provide expert assistance at every
              step, ensuring a smooth and enjoyable journey from the comfort of your home.
            </p>
          </div>
          <div className='flex md:hidden'>
            <TbArrowBadgeDownFilled size={30} />
          </div>
          <div className='hidden md:flex items-center justify-center h-full ml-10'>
            {/* <TbArrowBadgeRightFilled size={30} /> */}
          </div>
        </div>
        {/* Step 3 */}
        <div className='flex flex-col items-center justify-between min-h-full'>
          <div className='bg-mainB md:bg-main rounded-full w-[100px] md:w-[150px]'>
            <img
              src={`/assets/credit-card.png`}
              alt={`credit-card.png`}
              className={`object-fill md:p-10 p-6 `}
            />
          </div>
          <div className='text-center p-2 text-secondaryMain mx-8'>
            <h2 className='text-mainB md:text-main font-bold py-2'>
              Step 3: Confirm Your Purchase
            </h2>
            <p>
              After you’ve found the ideal products, we will send you a payment link that includes
              delivery charges. Simply confirm your order, finalize your payment, and move forward
              with the purchase process.
            </p>
          </div>
          <div className='flex md:hidden'>
            <TbArrowBadgeDownFilled size={30} />
          </div>
          <div className='hidden md:flex items-center justify-center h-full ml-10'>
            {/* <TbArrowBadgeRightFilled size={30} /> */}
          </div>
        </div>
        {/* Step 4 */}
        <div className='flex flex-col items-center justify-between min-h-full'>
          <div className='bg-mainB md:bg-main rounded-full w-[100px] md:w-[150px]'>
            <img
              src={`/assets/free-delivery.png`}
              alt={`credit-card.png`}
              className={`object-fill md:p-10 p-6 `}
            />
          </div>
          <div className='text-center p-2 text-secondaryMain mx-8'>
            <h2 className='text-mainB md:text-main font-bold py-2'>Step 4: Shipment & Tracking</h2>
            <p>
              Once payment is processed, we will prepare and ship your order. You’ll receive a
              tracking ID, allowing you to monitor your order as it’s delivered straight to your
              doorstep within 5-10 business days.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorksBanner;
