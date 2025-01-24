'use client';
import { Suspense } from 'react'; // Import Suspense
import BookingForm from '@/components/booking/BookingForm';

const Page = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BookingForm />
    </Suspense>
  );
};

export default Page;
