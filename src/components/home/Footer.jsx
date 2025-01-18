import { Facebook, Instagram, Twitter } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className='bg-[#2d78db] text-paper py-16'>
      <div className='container px-4'>
        <div className='mb-8'>
          <img src='/assets/logo-full.png' alt='LinkUp' className='w-28 mb-8' />
        </div>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8 mb-8'>
          <div>
            <h3 className='text-lg font-semibold mb-4'>About Us</h3>
            <p className='text-blue-100'>
              Revolutionizing online shopping through live video connections with expert shoppers.
            </p>
          </div>
          <div>
            <h3 className='text-lg font-semibold mb-4'>Quick Links</h3>
            <ul className='space-y-2'>
              <li>
                <a href='#' className='text-blue-100 hover:text-white transition-colors'>
                  How It Works
                </a>
              </li>
              <li>
                <a href='#' className='text-blue-100 hover:text-white transition-colors'>
                  Our Experts
                </a>
              </li>
              <li>
                <a href='#' className='text-blue-100 hover:text-white transition-colors'>
                  Pricing
                </a>
              </li>
              <li>
                <a href='#' className='text-blue-100 hover:text-white transition-colors'>
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className='text-lg font-semibold mb-4'>Contact</h3>
            <ul className='space-y-2'>
              <li className='text-blue-100'>support@linkup.com</li>
              <li className='text-blue-100'>+1 (555) 123-4567</li>
            </ul>
          </div>
          <div>
            <h3 className='text-lg font-semibold mb-4'>Follow Us</h3>
            <div className='flex space-x-4'>
              <a href='#' className='text-blue-100 hover:text-white transition-colors'>
                <Facebook className='h-6 w-6' />
              </a>
              <a
                href='https://www.instagram.com/golinkup?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='
                className='text-blue-100 hover:text-white transition-colors'>
                <Instagram className='h-6 w-6' />
              </a>
              <a href='#' className='text-blue-100 hover:text-white transition-colors'>
                <Twitter className='h-6 w-6' />
              </a>
            </div>
          </div>
        </div>
        <div className='border-t border-grey50 pt-8 text-center text-blue-100'>
          <p>&copy; 2024 LinkUp. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
