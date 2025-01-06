import React from 'react';

const MenuCard = ({ name, description, imageName }) => {
  return (
    <div className='flex items-center justify-center h-[300px] w-[300px] md:h-[500px] md:w-[500px] p-5 shadow-lg rounded-3xl border-4 border-t-8 border-grey100 hover:md:bg-main hover:bg-mainB hover:border-grey300 cursor-pointer active:scale-90 select-none hover:text-paper text-mainB md:text-main'>
      <div className='relative h-full w-full flex flex-col items-center justify-between'>
        <img
          src={`/assets/${imageName}.png`}
          alt={`${imageName}.png`}
          className={`object-fill ${
            imageName === 'book' ? 'w-[150px]' : 'w-[125px]'
          } md:w-[300px] md:p-10`}
        />

        <div className='p-5 w-full text-center '>
          <p className='font-extrabold text-[1.4rem] md:text-[2rem] '>{name}</p>
          <p className='font-light text-[0.8rem] md:text-[1rem] text-secondaryMain'>
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
