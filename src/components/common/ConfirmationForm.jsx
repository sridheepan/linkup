import React from 'react';
import { Button, Divider, Form, Input, Space } from 'antd';
import { FaMailBulk, FaPhone, FaShoppingCart } from 'react-icons/fa';
import { FaHouse, FaShop } from 'react-icons/fa6';
import { IoIosPerson } from 'react-icons/io';
import { MdMail } from 'react-icons/md';
import { AiFillDollarCircle } from 'react-icons/ai';
import { PriceDisplay } from './PriceDisplay';

const ConfirmationForm = ({ duration, goBack, total }) => {
  return (
    <Form
      className='p-3'
      layout='vertical'
      onFinish={(values) => console.log('Form values: ', values)}
      initialValues={{ duration }}>
      <Form.Item
        label='Name'
        name='name'
        rules={[{ required: true, message: 'Please input your name!' }]}
        className='mb-3'>
        <Space.Compact style={{ width: 'calc(100%' }}>
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
        <Space.Compact style={{ width: 'calc(100%' }}>
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
        <Space.Compact style={{ width: 'calc(100%' }}>
          <Button icon={<FaHouse className='text-mainB' size={18} />} size='large' />
          <Input size='large' />
        </Space.Compact>
      </Form.Item>

      <Form.Item label='Additional Details' name='additionalDetails' className='mb-3'>
        <Input.TextArea rows={4} />
      </Form.Item>

      <div className='flex mb-10 mt-8 gap-x-5'>
        <Button onClick={goBack} className='w-full h-10 text-lg bg-secondaryLight  text-paper'>
          Back
        </Button>
        <Button htmlType='submit' className='w-full h-10 text-lg bg-mainB text-paper'>
          Proceed To Payment
        </Button>
      </div>
    </Form>
  );
};

export default ConfirmationForm;
