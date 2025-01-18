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
      className={`w-full h-20 top-0 z-50 grid grid-cols-3 p-3 md:py-2 md:px-6 transition duration-300 ${
        scrolled ? 'bg-paper sticky shadow-md' : 'bg-transparent absolute'
      }`}>
      {/* Logo */}
      <div className='relative flex items-center h-10 cursor-pointer my-auto'>
        <div className='hidden md:block'>
          <img
            src={scrolled ? '/assets/logo.png' : '/assets/logo-black.png'}
            alt='logo'
            className='relative h-12 object-fit opacity-80'
            style={{ objectPosition: 'left' }}
          />
        </div>
        <div className='md:hidden'>
          <img
            src={scrolled ? '/assets/logo.png' : '/assets/logo-black.png'}
            alt='logo'
            className='relative h-12 object-contain'
            style={{ objectPosition: 'left' }}
          />
        </div>
      </div>
      {/* Nav */}
      <div className='flex items-center justify-end'></div>
      {/* Country - Currency */}
      <div className='flex items-center justify-end'>
        <CurrencySwitcher scrolled={scrolled} />
      </div>
    </header>
  );
};

export default Header;
