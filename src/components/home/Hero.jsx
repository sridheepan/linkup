import React from 'react';
import { Button } from '../ui/button';
import { ChevronRight } from 'lucide-react';
import { useRouter } from 'next/navigation';

const Hero = () => {
  const router = useRouter();

  const handleBookSession = () => {
    router.push('/booksession');
  };

  return (
    <div className='relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-blue-50 to-background'>
      <div className='absolute inset-0 z-0'>
        <video
          autoPlay
          loop
          muted
          playsInline
          className='w-full h-full object-cover opacity-50'
          poster='https://images.unsplash.com/photo-1605810230434-7631ac76ec81'></video>
        <div className='absolute inset-0 bg-gradient-to-t from-background to-transparent' />
      </div>

      <div className='container relative z-10 px-4 py-32 text-center'>
        <span className='inline-block px-4 py-1.5 mb-6 text-sm font-medium rounded-full bg-blue-100 text-[#2d78db] animate-fade-in'>
          {/* Revolutionizing Online Shopping */}
        </span>
        <h1
          className='text-4xl md:text-6xl font-bold mb-6 tracking-tight animate-fade-up'
          style={{ animationDelay: '0.2s' }}>
          Experience Shopping Like Never Before
        </h1>
        <p
          className='max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground mb-8 animate-fade-up'
          style={{ animationDelay: '0.4s' }}>
          Connect with expert shoppers in real-time video calls. Get personalized recommendations
          and see products up close before you buy.
        </p>
        <div
          className='flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-up'
          style={{ animationDelay: '0.6s' }}>
          <Button
            size='lg'
            className='bg-[#2d78db] hover:bg-[#2463b5] text-paper'
            onClick={handleBookSession}>
            Start Now
            <ChevronRight className='ml-2 h-4 w-4' />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
