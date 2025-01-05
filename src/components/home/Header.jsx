'use client';
import { menuItems } from '@/constants';
import { ConfigProvider, Menu } from 'antd';
import { useRouter } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import { CurrencySwitcher } from '../common/CurrencySelector';

const Header = () => {
  const router = useRouter();
  const [current, setCurrent] = useState('mail');
  const [scrolled, setScrolled] = useState(false);

  const onClick = (e) => {
    setCurrent(e.key);
    router.push('/book');
    // handleDrawerToggle();
  };

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`w-full top-0 z-50 grid grid-cols-3 p-3 md:py-2 md:px-6 transition duration-300 ${
        scrolled ? 'bg-paper sticky shadow-md' : 'bg-transparent absolute'
      }`}>
      {/* Logo */}
      <div className='relative flex items-center h-10 cursor-pointer my-auto'>
        <img
          src={scrolled ? '/assets/logo-tr.png' : '/assets/logo-white.png'}
          alt='logo'
          className='relative w-full h-full object-contain'
          style={{ objectPosition: 'left' }}
        />
      </div>
      {/* Nav */}
      <div className='flex items-center justify-end'>
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: scrolled ? '#173C61' : '#FFFFFF', // Change hover bar color
              fontSize: 16, // Change font size
              colorText: scrolled ? '#173C61' : '#FFFFFF',
              fontWeightStrong: 2,
            },
          }}>
          <Menu
            onClick={onClick}
            selectedKeys={[current]}
            mode='horizontal'
            items={menuItems}
            style={{
              backgroundColor: 'transparent',
              boxShadow: 'none',
              borderBottom: 0,
              textTransform: 'uppercase',
              color: '#193556',
              fontWeight: 'bold',
            }}
            className='menu-center w-full items-center justify-center h-[70px] hidden md:flex'
          />
        </ConfigProvider>
      </div>
      {/* Country - Currency */}
      <div className='flex items-center justify-end'>
        <CurrencySwitcher scrolled={scrolled} />
      </div>
    </header>
  );
};

export default Header;
