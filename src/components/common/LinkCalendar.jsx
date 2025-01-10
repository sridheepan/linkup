import React, { useState, useEffect } from 'react';
import { Calendar } from 'react-date-range';
import { FaRegAddressCard } from 'react-icons/fa';
import { SiGooglemeet } from 'react-icons/si';
import { Divider, Tag } from 'antd';
import { useMediaQuery } from '@react-hook/media-query';
import moment from 'moment-timezone';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import ConfirmationForm from './ConfirmationForm';
import { PriceDisplay } from './PriceDisplay';
import { AiFillDollarCircle } from 'react-icons/ai';

const LinkCalendar = ({ close }) => {
  const [visible, setVisible] = useState(false);
  const [duration, setDuration] = useState(1);
  const [timeRanges, setTimeRanges] = useState([]);
  const [date, setDate] = useState(new Date());
  const [formVisible, setFormVisible] = useState(false);
  const [selectedTag, setSelectedTag] = useState('1');
  const [total, setTotal] = useState(0);
  const [selectedTimeRange, setSelectedTimeRange] = useState(null);

  const isSmallScreen = useMediaQuery('(max-width: 36rem)');
  const hours = ['1', '2', '3', '4', '5'];

  const currentDate = new Date();
  const timeZone = moment.tz.guess(); // Get the guessed time zone
  const offset = moment.tz(timeZone).format('Z'); // Get the GMT offset
  const timeZoneFull = new Intl.DateTimeFormat('en-US', { timeZoneName: 'long' })
    .format(new Date())
    .split(',')[1]; // Get full timezone name (e.g., "Eastern Standard Time")
  const cityName = timeZone.split('/')[1]; // This will return "Toronto" for "America/Toronto"

  useEffect(() => {
    setTimeout(() => setVisible(true), 10);
    return () => setVisible(false);
  }, []);

  useEffect(() => {
    const newDateInIST = moment.tz(new Date(), 'Asia/Kolkata').add(1, 'days');
    setDate(newDateInIST.format('YYYY-MM-DD HH:mm:ss'));
  }, []);

  const handleDateChange = (date) => {
    setDate(date);
  };

  const convertTimeToUserTimezone = (startTime) => {
    const istTime = moment.tz(startTime, 'YYYY-MM-DD HH:mm', 'Asia/Kolkata');
    const userTime = istTime.clone().tz(moment.tz.guess());
    return userTime.format('h:mma');
  };

  const generateTimeRanges = (duration) => {
    const timeRangesArray = [];
    let startTime = moment.tz('2023-01-01 09:00', 'Asia/Kolkata'); // 9 AM IST with a valid date
    const endTime = moment.tz('2023-01-01 19:00', 'Asia/Kolkata'); // 7 PM IST as the latest time slot
    const latestEndTime = moment.tz('2023-01-01 20:00', 'Asia/Kolkata'); // 7 PM IST as the latest valid time

    // Get current IST time
    const currentISTTime = moment.tz('Asia/Kolkata');

    // Generate time ranges in 1-hour intervals (adjust based on duration)
    while (startTime.isBefore(endTime)) {
      const end = startTime.clone().add(duration, 'hour'); // Add duration to start time

      if (end.isAfter(latestEndTime)) {
        break;
      }

      const isPast = currentISTTime.isAfter(end); // Check if the time slot has already passed

      // Format the time range
      const start = convertTimeToUserTimezone(startTime);
      const endFormatted = convertTimeToUserTimezone(end);

      // Push the time range with a disabled class if it's past
      timeRangesArray.push({
        startTime: startTime.format('YYYY-MM-DD HH:mm'),
        endTime: end.format('YYYY-MM-DD HH:mm'),
        timeRange: `${start} - ${endFormatted}`,
        disabled: isPast, // Disable if time has passed
      });

      // Move to next time slot
      startTime = startTime.add(1, 'hour');
    }

    setTimeRanges(timeRangesArray);
  };

  const handleDurationChange = (newDuration) => {
    setSelectedTag(newDuration);
    setDuration(newDuration);
  };

  useEffect(() => {
    generateTimeRanges(duration);
    calculateTotal(duration);
  }, [duration]);

  const calculateTotal = (duration) => {
    if (duration == 1) {
      setTotal(15);
    } else if (duration > 1) {
      const finalTotal = 15 + 10 * (duration - 1);
      setTotal(finalTotal);
    }
  };

  const handleTimeRangeSelect = (timeRange) => {
    console.log(timeRange);
    setSelectedTimeRange(timeRange);
    setFormVisible(true);
  };

  return (
    <div
      className={`h-screen overflow-scroll absolute bg-grey50 top-0 left-1/2 transform -translate-x-1/2 w-full p-2 z-50 transition-all duration-300 ease-in-out ${
        visible ? 'transform translate-y-0' : 'transform translate-y-full'
      }`}>
      <div
        className={`max-w-xl mx-auto flex flex-col items-center justify-center ${
          formVisible ? 'hidden' : ''
        }`}>
        <div className='flex flex-row-reverse w-full items-center justify-between py-2 px-4'>
          <h4 className='text-2xl font-extrabold my-3 text-mainB w-full text-center'>
            Pick a Date
          </h4>
          <button
            className='text-paper flex items-center justify-center bg-[red] font-extrabold hover h-[30px] w-[30px] rounded-lg focus:outline-none hover:brightness-110 active:scale-90'
            onClick={close}>
            x
          </button>
        </div>
        <Calendar
          date={date}
          onChange={handleDateChange}
          minDate={new Date(currentDate.setDate(currentDate.getDate() + 1))} // Set minDate to the next day
          color='#3F7BFE'
          classNames={{
            monthAndYearWrapper: 'text-[1.1rem]',
          }}
          className='rounded-lg'
          style={{
            fontSize: isSmallScreen ? '1rem' : '1.3rem',
            height: '100%',
            width: isSmallScreen ? '350px' : '500px',
          }}
        />

        <div className='flex items-center font-bold w-full p-4'>
          <h2 className='text-md font-semibold text-mainB w-[30%]'>Select Duration: </h2>
          <div className=' h-10 px-5 flex items-center overflow-scroll scrollbar-hidden'>
            {hours.map((tag) => (
              <Tag.CheckableTag
                key={tag}
                checked={selectedTag === tag}
                style={{
                  fontWeight: 500,
                  fontSize: '0.9rem',
                  backgroundColor: selectedTag === tag ? '' : 'lightgray',
                  borderRadius: '6px',
                  padding: 3,
                  paddingRight: 6,
                  paddingLeft: 6,
                }}
                onChange={() => handleDurationChange(tag)}>
                {tag} hr{tag != '1' ? 's' : ''}
              </Tag.CheckableTag>
            ))}
          </div>
        </div>

        <div className='flex flex-col items-center font-bold pb-8 w-full px-12'>
          {timeRanges.length > 0 ? (
            timeRanges.map((timeRange, index) => (
              <button
                key={index}
                className='bg-paper border border-mainB text-mainB w-full h-12 rounded-lg text-md mb-2 hover:brightness-110 active:scale-90 shadow-md hover:shadow-lg'
                onClick={() => handleTimeRangeSelect(timeRange)}>
                {timeRange.timeRange}
              </button>
            ))
          ) : (
            <p className='text-mainB font-semibold'>Select a duration to generate time ranges.</p>
          )}
        </div>
      </div>

      {/* Sliding Form Div */}
      <div
        className={`transition-transform duration-300 transform ${
          formVisible ? 'translate-x-0' : '-translate-x-full'
        } absolute left-0 top-0 w-full bg-paper p-5 pt-14 z-60`}>
        <div className='flex w-full items-center gap-x-6 px-4 sticky'>
          <div className='text-paper flex items-center justify-center h-7 w-7 bg-paper font-extrabold hover rounded-lg focus:outline-none hover:brightness-110 active:scale-90'></div>
          <div className='flex flex-col'>
            <h4 className='text-xl text-black'>Personal Shopper 1-on-1</h4>
            <span className='text-grey700 text-[0.8rem] flex' style={{ fontWeight: 100 }}>
              <p>{date ? moment(date).format('dddd, MMMM D') : 'Not set'}</p>{' '}
              <p className='mx-1'> - </p>
              <p>{selectedTimeRange?.timeRange}</p>
            </span>
            <p className='text-grey700 text-[0.8rem]' style={{ fontWeight: 100 }}>
              {`(GMT${offset}) ${timeZoneFull.replace('Time', '')} - ${cityName}`}
            </p>
          </div>
        </div>
        {/* Section 2 */}
        <div className='flex w-full items-center gap-x-6 px-4 mt-4'>
          <button className='text-paper flex items-center justify-center h-7 w-7 font-extrabold hover rounded-lg focus:outline-none hover:brightness-110 active:scale-90'>
            <SiGooglemeet className='text-mainB' size={22} />
          </button>
          <p className='text-grey700 text-[0.9rem]' style={{ fontWeight: 100 }}>
            Google Meet video conference info added after booking
          </p>
        </div>
        \{' '}
        <div className='flex w-full items-center gap-x-6 px-4 mt-4'>
          <button className='text-paper flex items-center justify-center h-7 w-7 font-extrabold hover rounded-lg focus:outline-none hover:brightness-110 active:scale-90'>
            <AiFillDollarCircle className='text-mainB' size={22} />
          </button>
          <div className='text-grey700 text-[0.9rem]' style={{ fontWeight: 100 }}>
            <PriceDisplay priceInUSD={total} />
          </div>
        </div>
        <Divider />
        {/* Section 3 */}
        <div className='flex w-full items-center gap-x-6 px-4 mt-4'>
          <button
            className='text-paper flex items-center justify-center h-7 w-7 font-extrabold hover rounded-lg focus:outline-none hover:brightness-110 active:scale-90'
            onClick={() => setFormVisible(false)}>
            <FaRegAddressCard className='text-grey700' size={25} />
          </button>
          <p className='text-grey700 text-[1.2rem]' style={{ fontWeight: 600 }}>
            Your Confirmation Details
          </p>
        </div>
        {/* Section 4 */}
        <ConfirmationForm
          duration={duration}
          goBack={() => setFormVisible(false)}
          total={total}
          startTime={selectedTimeRange?.startTime}
          endTime={selectedTimeRange?.endTime}
          timerange={selectedTimeRange?.timeRange}
          timeZone={timeZone}
          date={date}
        />
      </div>
    </div>
  );
};

export default LinkCalendar;
