import { Divider } from 'antd';

const Home = () => (
  <div>
    <div className='relative mx-auto flex h-[calc(100vh-120px)] px-[40px]'>
      {/* title */}
      <div className='w-full md:w-1/2 flex flex-col text-[4.25rem] font-extrabold text-primaryMain md:p-[50px]'>
        <div className='flex flex-col'>
          <p className=' flex-wrap line'>Your Purchase,</p>
          <p>Simplified...</p>
          <span className='text-[1.1rem] my-8 font-extralight'>
            Connect with global purchasers in one click.
          </span>
        </div>
        {/* Button */}
        <div className='mt-5 w-full md:w-1/2'>
          <div className='bg-secondaryHigh text-center text-white text-[2.25rem] font-bold py-3 px-6 rounded-2xl hover:bg-secondaryMain transition ease-in-out duration-300 shadow-lg w-full cursor-pointer'>
            Link Up
          </div>
          <Divider>OR</Divider>
          <div className='bg-primaryDark text-center text-white text-[2.25rem] font-bold py-3 px-6 rounded-2xl hover:bg-primaryMain transition ease-in-out duration-300 shadow-lg w-full cursor-pointer '>
            Join Us
          </div>
        </div>
      </div>
      {/* Video */}
      <video
        autoPlay
        muted
        loop
        className='hidden md:block md:w-1/2 rounded-3xl shadow-lg object-cover'>
        <source src='/assets/home-banner.mp4' type='video/mp4' />
        Your browser does not support the video tag.
      </video>
    </div>
  </div>
);

export default Home;
