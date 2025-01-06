import { useState, useEffect } from 'react';
import { Calendar } from 'react-date-range';
import { FaClock, FaMinus, FaPlus } from 'react-icons/fa';

import { useMediaQuery } from '@react-hook/media-query';
import moment from 'moment-timezone';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

const LinkCalendar = ({ close }) => {
  const [visible, setVisible] = useState(false);
  const [duration, setDuration] = useState(1);
  const [timeRanges, setTimeRanges] = useState([]);
  const [date, setDate] = useState(new Date());
  const isSmallScreen = useMediaQuery('(max-width: 36rem)');

  useEffect(() => {
    setTimeout(() => setVisible(true), 10);
    return () => setVisible(false);
  }, []);

  useEffect(() => {
    const newDateInIST = moment.tz(new Date(), 'Asia/Kolkata'); // Keep as moment object in IST
    setDate(newDateInIST.format('YYYY-MM-DD HH:mm:ss'));
  }, []);

  const handleDateChange = (date) => {
    setDate(date);
  };

  const convertTimeToUserTimezone = (startTime) => {
    // Default IST time zone (Indian Standard Time)
    const istTime = moment.tz(startTime, 'YYYY-MM-DD HH:mm', 'Asia/Kolkata');
    const userTime = istTime.clone().tz(moment.tz.guess()); // Convert to user's timezone
    return userTime.format('h:mm A'); // Format in user's timezone
  };

  const generateTimeRanges = (duration) => {
    const timeRangesArray = [];
    let startTime = moment.tz('2023-01-01 09:00', 'Asia/Kolkata'); // 9 AM IST with a valid date
    const endTime = moment.tz('2023-01-01 19:00', 'Asia/Kolkata'); // 7 PM IST as the latest time slot

    // Get current IST time
    const currentISTTime = moment.tz('Asia/Kolkata');

    // Generate time ranges in the selected duration (e.g., 1 hour, 2 hours, etc.)
    while (startTime.isBefore(endTime)) {
      const end = startTime.clone().add(duration, 'hour'); // Add duration to start time
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

      // Move to next time slot based on the selected duration
      startTime = startTime.add(duration, 'hour');
    }

    setTimeRanges(timeRangesArray);
  };

  const handleDurationChange = (newDuration) => {
    setDuration(newDuration);
    if (newDuration > 0) {
    }
  };

  useEffect(() => {
    generateTimeRanges(duration);
  }, [duration]);

  const reduceDuration = () => {
    if (duration > 1) {
      setDuration(duration - 1);
    }
  };

  const addDuration = () => {
    if (duration < 5) {
      setDuration(duration + 1);
    }
  };

  return (
    <div
      className={`absolute bg-paper top-0 left-1/2 transform -translate-x-1/2 w-full p-5 md:p-20 z-50 overflow-hidden transition-all duration-300 ease-in-out ${
        visible ? 'transform translate-y-0' : 'transform translate-y-full'
      }`}>
      <div className='max-w-xl mx-auto border-2 flex flex-col items-center justify-center'>
        <div className='flex flex-row w-full items-center justify-between p-4'>
          <h4 className='text-2xl font-extrabold my-3 text-mainB'>Pick a Date</h4>
          <button
            className='text-paper bg-mainB hover h-[30px] w-[30px] rounded-xl focus:outline-none hover:bg-primaryMain active:scale-90'
            onClick={close}>
            x
          </button>
        </div>
        <Calendar
          date={date}
          onChange={handleDateChange}
          minDate={new Date()}
          color='#3F7BFE'
          classNames={{
            monthAndYearWrapper: isSmallScreen ? 'text-md' : 'text-lg', // Increased font size for the month and year
          }}
          style={{
            fontSize: isSmallScreen ? '0.8rem' : '1.3rem',
            height: '100%',
            width: isSmallScreen ? '300px' : '500px',
          }} // Custom height and font size
        />

        <div className='flex items-center font-bold mb-4 w-full p-4'>
          <h2 className='text-lg flex-grow font-semibold text-mainB'>Meeting Duration(hr)</h2>
          <FaMinus
            className='h-5 w-5 text-paper bg-mainB rounded-md p-1 hover:brightness-150 active:scale-95'
            onClick={reduceDuration}
          />
          <span className='px-3 text-black font-light'>{duration}</span>
          <FaPlus
            className='h-5 w-5 text-paper bg-mainB rounded-md p-1 hover:brightness-150 active:scale-95'
            onClick={addDuration}
          />
        </div>
        <div className='flex flex-col items-center font-bold mb-4 w-full px-4'>
          {/* code here gpt */}
          {timeRanges.length > 0 ? (
            timeRanges.map((timeRange, index) => (
              <button
                key={index}
                className='bg-mainB text-paper w-full h-12 rounded-xl text-md mb-2 hover:brightness-150 active:scale-90'>
                {timeRange.timeRange}
              </button>
            ))
          ) : (
            <p className='text-mainB font-semibold'>Select a duration to generate time ranges.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default LinkCalendar;
