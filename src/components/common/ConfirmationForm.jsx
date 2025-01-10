import React, { useState } from 'react';
import { Button, Form, Input, Space } from 'antd';
import { FaMailBulk, FaPhone, FaShoppingCart } from 'react-icons/fa';
import { FaHouse, FaShop } from 'react-icons/fa6';
import { IoIosPerson } from 'react-icons/io';
import { MdMail } from 'react-icons/md';
import moment from 'moment-timezone';

const ConfirmationForm = ({ goBack, startTime, endTime, timerange, timeZone, date }) => {
  const [eventCreated, setEventCreated] = useState(false);
  const [loading, setLoading] = useState(false);

  // Handle form submission
  const handleSubmit = async (values) => {
    const { name, email, guestEmails, phone, shopName, productType, address, additionalDetails } =
      values;

    const selectedDateMoment = moment(date); // `date` is the selected date in local time
    const selectedDateFormatted = selectedDateMoment.format('YYYY-MM-DD');

    // Combine the date and time and create a moment object in IST time zone
    const startMoment = moment.tz(
      `${selectedDateFormatted} ${startTime?.split(' ')[1]}`,
      'YYYY-MM-DD HH:mm',
      'Asia/Kolkata'
    );
    const endMoment = moment.tz(
      `${selectedDateFormatted} ${endTime?.split(' ')[1]}`,
      'YYYY-MM-DD HH:mm',
      'Asia/Kolkata'
    );

    // Format to the desired format with the time zone offset included (in this case, IST)
    const startFormatted = startMoment.format('YYYY-MM-DDTHH:mm:ssZ');
    const endFormatted = endMoment.format('YYYY-MM-DDTHH:mm:ssZ');

    // Prepare the event data to be sent to your backend
    const eventData = {
      email: email, // Organizer's email
      guests: guestEmails?.split(',').map((guest) => guest.trim()) ?? [], // Split the guest emails into an array
      startTime: startFormatted,
      endTime: endFormatted,
      eventDetails: {
        summary: `Invitation: Personal Shopper from Go-LinkUp @ ${
          selectedDateMoment.format('ddd MMM DD, YYYY') ?? ''
        } ${timerange} (${moment.tz(timeZone).zoneAbbr() ?? ''})`,
        description: `Shopping session with personal shopper for ${name ?? ''}.`,
        additionalDetails: `Additional Details\n\nName:${name ?? ''}\nPhone:${
          phone ?? '-'
        }\Address:${address ?? '-'}\n\nShop Name:${shopName ?? '-'}\nProduct Type:${
          productType ?? '-'
        }\nShop:${shopName ?? '-'}\n\nAMore Detils:${additionalDetails ?? '-'}`,
      },
    };

    console.log(eventData);

    try {
      // Send the event data to the backend to create the event
      const response = await fetch('https://linkup-backend-henna.vercel.app/api/create-event.js', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(eventData),
      });

      const result = await response.json();
      if (response.ok) {
        setEventCreated(true);
        console.log('Event created:', result);
      } else {
        console.error('Error creating event:', result);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      {/* Render the form */}
      <Form className='p-3' layout='vertical' onFinish={handleSubmit}>
        <Form.Item
          label='Name'
          name='name'
          rules={[{ required: true, message: 'Please input your name!' }]}
          className='mb-3'>
          <Space.Compact style={{ width: 'calc(100%)' }}>
            <Button icon={<IoIosPerson className='text-mainB' size={22} />} size='large' />
            <Input size='large' />
          </Space.Compact>
        </Form.Item>

        <Form.Item
          label='Email'
          name='email'
          size='large'
          rules={[{ required: true, message: 'Please input your email!' }]}
          className='mb-3'>
          <Space.Compact style={{ width: 'calc(100%)' }}>
            <Button icon={<MdMail className='text-mainB' size={22} />} size='large' />
            <Input size='large' />
          </Space.Compact>
        </Form.Item>

        <Form.Item label='Additional Participant Email(s)' name='guestEmails' className='mb-3'>
          <Space.Compact style={{ width: 'calc(100%)' }}>
            <Button icon={<FaMailBulk className='text-mainB' size={20} />} size='large' />
            <Input placeholder='ex: a@a.com, b@b.com' size='large' />
          </Space.Compact>
        </Form.Item>

        <Form.Item
          label='Phone Number'
          name='phone'
          rules={[{ required: true, message: 'Please input your Phone Number!' }]}
          className='mb-3'>
          <Space.Compact style={{ width: 'calc(100%)' }}>
            <Button icon={<FaPhone className='text-mainB' size={16} />} size='large' />
            <Input size='large' />
          </Space.Compact>
        </Form.Item>

        <Form.Item label='Shop Name' name='shopName' className='mb-3'>
          <Space.Compact style={{ width: 'calc(100%)' }}>
            <Button icon={<FaShop className='text-mainB' size={20} />} size='large' />
            <Input placeholder='ex: nalli, kumaran silks' size='large' />
          </Space.Compact>
        </Form.Item>

        <Form.Item label='Product Type' name='productType' className='mb-3'>
          <Space.Compact style={{ width: 'calc(100%)' }}>
            <Button icon={<FaShoppingCart className='text-mainB' size={20} />} size='large' />
            <Input placeholder='sarees, flute' size='large' />
          </Space.Compact>
        </Form.Item>

        <Form.Item
          label='Delivery Address'
          name='address'
          rules={[{ required: true, message: 'Please input your Delivery Address!' }]}
          className='mb-3'>
          <Space.Compact style={{ width: 'calc(100%)' }}>
            <Button icon={<FaHouse className='text-mainB' size={18} />} size='large' />
            <Input size='large' />
          </Space.Compact>
        </Form.Item>

        <Form.Item label='Additional Details' name='additionalDetails' className='mb-3'>
          <Input.TextArea rows={4} />
        </Form.Item>

        <div className='flex mb-10 mt-8 gap-x-5'>
          <Button onClick={goBack} className='w-full h-10 text-lg bg-secondaryLight text-paper'>
            Back
          </Button>
          <Button htmlType='submit' className='w-full h-10 text-lg bg-mainB text-paper'>
            Proceed To Payment
          </Button>
        </div>
      </Form>

      {eventCreated && (
        <div>
          <p>Event created successfully!</p>
          {/* Optionally, show additional event info like the link */}
        </div>
      )}
    </div>
  );
};

export default ConfirmationForm;
