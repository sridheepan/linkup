import { useRouter } from 'next/router';
import React from 'react';

const UserDetailsForm = () => {
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
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

    router.push('/payment', { state: data });
  };
  return (
    <div>
      <div className='bg-paper p-6 rounded-xl shadow-lg'>
        <h2 className='text-2xl font-bold text-gray-900 mb-4'>Your Information</h2>
        <form onSubmit={handleSubmit} className='space-y-4'>
          <div>
            <Label htmlFor='name'>Name</Label>
            <div className='flex'>
              <div className='bg-gray-100 p-2 rounded-l-md'>
                <IoIosPerson className='text-gray-500' size={24} />
              </div>
              <Input id='name' name='name' required className='rounded-l-none' />
            </div>
          </div>

          <div>
            <Label htmlFor='email'>Email</Label>
            <div className='flex'>
              <div className='bg-gray-100 p-2 rounded-l-md'>
                <MdMail className='text-gray-500' size={24} />
              </div>
              <Input id='email' name='email' type='email' required className='rounded-l-none' />
            </div>
          </div>

          <div>
            <Label htmlFor='guestEmails'>Additional Participant Email(s)</Label>
            <div className='flex'>
              <div className='bg-gray-100 p-2 rounded-l-md'>
                <FaMailBulk className='text-gray-500' size={24} />
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
              <div className='bg-gray-100 p-2 rounded-l-md'>
                <FaPhone className='text-gray-500' size={24} />
              </div>
              <Input id='phone' name='phone' required className='rounded-l-none' />
            </div>
          </div>

          <div>
            <Label htmlFor='shopName'>Shop Name</Label>
            <div className='flex'>
              <div className='bg-gray-100 p-2 rounded-l-md'>
                <FaShop className='text-gray-500' size={24} />
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
              <div className='bg-gray-100 p-2 rounded-l-md'>
                <FaShoppingCart className='text-gray-500' size={24} />
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
              <div className='bg-gray-100 p-2 rounded-l-md'>
                <FaHouse className='text-gray-500' size={24} />
              </div>
              <Input id='address' name='address' required className='rounded-l-none' />
            </div>
          </div>

          <div>
            <Label htmlFor='additionalDetails'>Additional Details</Label>
            <Textarea id='additionalDetails' name='additionalDetails' />
          </div>

          <div className='flex gap-4 pt-4'>
            <Button variant='outline' type='button' onClick={() => navigate(-1)} className='w-full'>
              Back
            </Button>
            <Button type='submit' className='w-full'>
              Next
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserDetailsForm;
