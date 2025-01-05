import React from 'react';
import MenuCard from './MenuCard';

const MenuSection = () => {
  return (
    <div className='flex items-center justify-center md:p-20 p-5'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-y-8 w-full h-full'>
        <div className='flex items-center justify-center'>
          <MenuCard
            name={'Book'}
            description={'Book a session with a global purchaser or service provider.'}
            imageName={'book'}
          />
        </div>
        <div className='flex items-center justify-center'>
          <MenuCard
            name={'Shop from any website'}
            description={'Browse a wide selection of products and make purchases worldwide.'}
            imageName={'shop'}
          />
        </div>
        <div className='flex items-center justify-center'>
          <MenuCard
            name={'Partnership'}
            description={'Explore partnership opportunities and collaborate with us.'}
            imageName={'partnership'}
          />
        </div>
        <div className='flex items-center justify-center'>
          <MenuCard
            name={'Jobs'}
            description={'Find job opportunities or post a vacancy for a global audience.'}
            imageName={'job'}
          />
        </div>
      </div>
    </div>
  );
};

export default MenuSection;
