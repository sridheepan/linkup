import { useRouter, useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { format } from 'date-fns';
import { FaMailBulk, FaPhone, FaShoppingCart } from 'react-icons/fa';
import { FaHouse, FaShop } from 'react-icons/fa6';
import { IoIosPerson } from 'react-icons/io';
import { MdMail } from 'react-icons/md';
import Header from '@/components/home/Header';

const BookingForm = () => {
  const router = useRouter();
  const searchParams = useSearchParams(); // Get the search params
  const selectedDate = searchParams.get('selectedDate'); // Retrieve selectedDate from query
  const selectedTime = searchParams.get('selectedTime'); // Retrieve selectedTime from query

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      guestEmails: formData.get('guestEmails'),
      phone: formData.get('phone'),
      shopName: formData.get('shopName'),
      productType: formData.get('productType'),
      address: formData.get('address'),
      additionalDetails: formData.get('additionalDetails'),
      selectedDate,
      selectedTime,
    };

    router.push({
      pathname: '/payment',
      query: data, // Pass the state as query params (optional, depending on your routing method)
    });
  };

  return (
    <>
      <Header variant={'ghost'} />
      <div className='min-h-screen bg-grey50 py-24 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-6xl mx-auto'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            {/* Left side - Booking details */}
            <div className='bg-white p-6 rounded-xl shadow-lg'>
              <h2 className='text-2xl font-bold text-grey900 mb-4'>Booking Details</h2>
              <div className='space-y-4'>
                <div>
                  <p className='text-sm text-primaryMain font-bold'>Date</p>
                  <p className='font-medium'>{format(new Date(selectedDate), 'MMMM d, yyyy')}</p>
                </div>
                <div>
                  <p className='text-sm text-primaryMain font-bold'>Time</p>
                  <p className='font-medium'>{selectedTime}</p>
                </div>
              </div>
            </div>

            {/* Right side - Form */}
            <div className='bg-white p-6 rounded-xl shadow-lg'>
              <h2 className='text-2xl font-bold text-grey900 mb-4'>Your Information</h2>
              <form onSubmit={handleSubmit} className='space-y-4'>
                <div>
                  <Label htmlFor='name'>Name</Label>
                  <div className='flex'>
                    <div className='bg-grey100 rounded-l-md flex items-center px-2'>
                      <IoIosPerson className='text-primaryMain' size={24} />
                    </div>
                    <Input id='name' name='name' required className='rounded-l-none' />
                  </div>
                </div>

                <div>
                  <Label htmlFor='email'>Email</Label>
                  <div className='flex'>
                    <div className='bg-grey100 rounded-l-md flex items-center px-2'>
                      <MdMail className='text-primaryMain' size={24} />
                    </div>
                    <Input
                      id='email'
                      name='email'
                      type='email'
                      required
                      className='rounded-l-none'
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor='guestEmails'>Additional Participant Email(s)</Label>
                  <div className='flex'>
                    <div className='bg-grey100  rounded-l-md flex items-center px-2'>
                      <FaMailBulk className='text-primaryMain' size={24} />
                    </div>
                    <Input
                      id='guestEmails'
                      name='guestEmails'
                      placeholder='ex: a@a.com, b@b.com'
                      className='rounded-l-none'
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor='phone'>Phone Number</Label>
                  <div className='flex'>
                    <div className='bg-grey100 rounded-l-md flex items-center px-2'>
                      <FaPhone className='text-primaryMain' size={20} />
                    </div>
                    <Input id='phone' name='phone' required className='rounded-l-none' />
                  </div>
                </div>

                <div>
                  <Label htmlFor='shopName'>Shop Name</Label>
                  <div className='flex'>
                    <div className='bg-grey100 rounded-l-md flex items-center px-2'>
                      <FaShop className='text-primaryMain' size={24} />
                    </div>
                    <Input
                      id='shopName'
                      name='shopName'
                      placeholder='ex: nalli, kumaran silks'
                      className='rounded-l-none'
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor='productType'>Product Type</Label>
                  <div className='flex'>
                    <div className='bg-grey100 rounded-l-md flex items-center px-2'>
                      <FaShoppingCart className='text-primaryMain' size={24} />
                    </div>
                    <Input
                      id='productType'
                      name='productType'
                      placeholder='sarees, flute'
                      className='rounded-l-none'
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor='address'>Delivery Address</Label>
                  <div className='flex'>
                    <div className='bg-grey100 rounded-l-md flex items-center px-2'>
                      <FaHouse className='text-primaryMain' size={24} />
                    </div>
                    <Input id='address' name='address' required className='rounded-l-none' />
                  </div>
                </div>

                <div>
                  <Label htmlFor='additionalDetails'>Additional Details</Label>
                  <Textarea id='additionalDetails' name='additionalDetails' />
                </div>

                <div className='flex gap-4 pt-4'>
                  <Button
                    variant='outline'
                    type='button'
                    onClick={() => router.back()}
                    className='w-full'>
                    Back
                  </Button>
                  <Button
                    type='submit'
                    className='bg-[#2d78db] hover:bg-[#2463b5] text-paper w-full'>
                    Next
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookingForm;
