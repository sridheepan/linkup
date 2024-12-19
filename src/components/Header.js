'use client';
import { ConfigProvider, Menu } from 'antd';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const Header = () => {
  const items = [
    {
      label: 'Book',
      key: 'book',
    },
    {
      label: 'Shop',
      key: 'shop',
      children: [
        {
          type: 'group',
          label: 'Item 1',
        },
        {
          type: 'group',
          label: 'Item 1',
        },
        {
          type: 'group',
          label: 'Item 1',
        },
        {
          type: 'group',
          label: 'Item 1',
        },
      ],
    },
    {
      label: 'How it works',
      key: 'howitworks',
    },
    {
      label: 'Partnership',
      key: 'partner',
    },
  ];

  const [current, setCurrent] = useState('mail');

  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  const router = useRouter();

  return (
    <div className='w-screen flex bg-menu items-center h-[70px] md:px-[100px] sm:px-[40px] transition-all duration-200'>
      {/* Logo on the left */}
      <div className='logo bg-menu w-[8rem] mx-4 cursor-pointer ' onClick={() => router.push('/')}>
        <img src='/assets/linkUp.png' alt='Logo' className='cursor-pointer hover:brightness-95' />
      </div>

      {/*  Menu */}
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: '#FFCC00', // Change hover bar color
            fontSize: 16, // Change font size
          },
        }}>
        <Menu
          onClick={onClick}
          selectedKeys={[current]}
          mode='horizontal'
          items={items}
          className='menu-center w-full items-center justify-center bg-menu h-[70px]'
        />
      </ConfigProvider>

      <div className='sign-in bg-menu w-[8rem] mx-4 sm:hidden'>{/* login button ?? */}</div>
    </div>
  );
};

export default Header;
