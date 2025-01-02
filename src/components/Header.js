'use client';
import { MenuOutlined } from '@ant-design/icons';
import { ConfigProvider, Drawer, Menu } from 'antd';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { CurrencySwitcher } from './common/CurrencySelector';

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
    handleDrawerToggle();
  };

  const handleDrawerToggle = () => {
    setDrawerVisible(!drawerVisible); // Toggle the drawer visibility
  };

  return (
    <div className='w-screen flex bg-transparent items-center justify-between h-[120px] md:px-[150px] sm:px-[40px] transition-all duration-200'>
      {/* Logo on the left */}
      {/* Mobile Hamburger Icon */}
      <div className='sm:hidden bg-none mx-4'>
        <MenuOutlined
          onClick={handleDrawerToggle}
          style={{ fontSize: '20px', color: '#000' }} // Adjust the size and color
        />
      </div>

      <div
        className='logo flex justify-center items-center bg-none mx-4 md:mx-0 cursor-pointer'
        onClick={() => router.push('/')}>
        <img
          src='/assets/linkUp.png'
          alt='Logo'
          className='cursor-pointer hover:brightness-95 w-[150px] md:w-[200px]'
        />
      </div>

      {/*  Menu */}
      <div className='h-full flex items-center'>
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: '#5DAFD1', // Change hover bar color
              fontSize: 16, // Change font size
              colorText: '#04A3E3',
              fontWeightStrong: 2,
            },
          }}>
          <Menu
            onClick={onClick}
            selectedKeys={[current]}
            mode='horizontal'
            items={items}
            style={{
              backgroundColor: 'transparent',
              boxShadow: 'none',
              borderBottom: 0,
              textTransform: 'uppercase',
              color: '#04A3E3',
              fontWeight: 'bold',
            }}
            className='menu-center w-full items-center justify-center h-[70px] hidden md:flex'
          />
        </ConfigProvider>
        <CurrencySwitcher />
      </div>
      <Drawer
        style={{ fontSize: '30px', marginTop: '0px' }}
        placement='top'
        closable={false}
        onClose={handleDrawerToggle}
        open={drawerVisible}>
        <Menu
          onClick={onClick}
          selectedKeys={[current]}
          mode='inline'
          items={items}
          style={{ border: 'none', fontSize: '20px' }}
        />
      </Drawer>
    </div>
  );
};

export default Header;
