'use client';
import { MenuOutlined } from '@ant-design/icons';
import { ConfigProvider, Drawer, Menu } from 'antd';
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
    {
      label: 'Jobs',
      key: 'jobs',
    },
  ];

  const [current, setCurrent] = useState('mail');
  const [drawerVisible, setDrawerVisible] = useState(false); // State to control drawer visibility
  const router = useRouter();

  const onClick = (e) => {
    setCurrent(e.key);
    router.push('/book');
  };

  const handleDrawerToggle = () => {
    setDrawerVisible(!drawerVisible); // Toggle the drawer visibility
  };

  return (
    <div className='w-screen flex bg-menu items-center h-[70px] md:px-[100px] sm:px-[40px] transition-all duration-200'>
      {/* Logo on the left */}
      <div
        className='logo bg-menu w-[8rem] mx-4 md:mx-0 cursor-pointer '
        onClick={() => router.push('/')}>
        <img src='/assets/linkUp.png' alt='Logo' className='cursor-pointer hover:brightness-95' />
      </div>

      {/* Mobile Hamburger Icon */}
      <div className='sm:hidden ml-auto mx-4'>
        <MenuOutlined
          onClick={handleDrawerToggle}
          style={{ fontSize: '24px', color: '#000' }} // Adjust the size and color
        />
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
          className='menu-center w-full items-center justify-center bg-menu h-[70px] hidden md:flex'
        />
      </ConfigProvider>

      <div className='sign-in bg-menu w-[8rem] mx-4 hidden md:flex'>
        {/* Drawer for mobile menu */}
      </div>

      <Drawer
        title='Menu'
        placement='left'
        closable={true}
        onClose={handleDrawerToggle}
        open={drawerVisible}>
        <Menu
          onClick={onClick}
          selectedKeys={[current]}
          mode='inline'
          items={items}
          className='w-full'
        />
      </Drawer>
    </div>
  );
};

export default Header;
