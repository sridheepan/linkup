'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'; // Use next/router for navigation
import { format, setHours, setMinutes, addMinutes } from 'date-fns';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';
import { Card } from '@/components/ui/card';
import { Loader2 } from 'lucide-react';
import CalendarPicker from './CalendarPicker';
import AvailableTimes from './AvailableTimes';
import moment from 'moment-timezone';

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState();
  const [selectedTime, setSelectedTime] = useState();
  const [duration, setDuration] = useState(1);
  const [timeRanges, setTimeRanges] = useState([]);
  const [minDate, setMinDate] = useState(new Date());

  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const isMobile = useIsMobile();
  const router = useRouter();

  const timeZone = moment.tz.guess(); // Get the guessed time zone

  useEffect(() => {
    const loadEvents = async () => {
      try {
        const data = await fetchGoogleEvents();
        setEvents(data.events ?? []);
        console.log(data.events);
        setIsLoading(false);
      } catch (err) {
        setError(err.message);
        setIsLoading(false);
      }
    };
    const newDateInIST = moment.tz(new Date(), 'Asia/Kolkata');
    setMinDate(newDateInIST.format('YYYY-MM-DD HH:mm:ss'));
    loadEvents();
  }, []);

  const fetchGoogleEvents = async () => {
    const response = await fetch('https://linkup-backend-henna.vercel.app/api/get-events.js');
    if (!response.ok) {
      throw new Error('Failed to fetch calendar events');
    }
    const data = await response.json();
    return data;
  };

  const handleTimeSelect = (time) => {
    setSelectedTime(time);

    // Serialize data into query parameters (optional: you can stringify if necessary)
    const data = {
      selectedDate: selectedDate.toISOString(), // Use .toISOString() for Date
      selectedTime: time,
    };

    // Pass the data to the '/bookingform' page via the query
    router.push(
      `/bookingform?selectedDate=${encodeURIComponent(
        data.selectedDate
      )}&selectedTime=${encodeURIComponent(data.selectedTime)}`
    );
  };

  const convertTimeToUserTimezone = (startTime) => {
    const istTime = moment.tz(startTime, 'YYYY-MM-DD HH:mm', 'Asia/Kolkata');
    const userTime = istTime.clone().tz(moment.tz.guess());
    return { dateTime: userTime, time: userTime.format('h:mma') };
  };

  const isTimeSlotConflicting = (start, end) => {
    // console.log('isTimeSlotConflicting: ', events);
    if (!events) return null;

    return events.some((event) => {
      const eventStart = moment.tz(event.start.dateTime, timeZone);
      const eventEnd = moment.tz(event.end.dateTime, timeZone);
      // console.log(eventStart, eventEnd);
      console.log(start, end);
      // Check if there's any overlap between the time slot and the event
      return (
        start.isBetween(eventStart, eventEnd, undefined, '[]') ||
        end.isBetween(eventStart, eventEnd, undefined, '[]') ||
        eventStart.isBetween(start, end, undefined, '[]') ||
        eventEnd.isBetween(start, end, undefined, '[]')
      );
    });
  };

  const handleDateSelect = (date) => {
    setSelectedDate(date);
    generateTimeRanges(duration, date);
    // Scroll to duration section
    const durationSection = document.getElementById('duration-section');
    if (durationSection) {
      durationSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDurationSelect = (hours) => {
    setDuration(hours, selectedDate);
    generateTimeRanges(hours, selectedDate);
    // Scroll to time slots section
    const timeSlotsSection = document.getElementById('time-slots-section');
    if (timeSlotsSection) {
      timeSlotsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const generateTimeRanges = (duration, date) => {
    const timeRangesArray = [];
    const minDateObj = moment(date);
    let startTime = moment.tz(`${minDateObj.format('YYYY-MM-DD')} 09:00`, 'Asia/Kolkata');
    const endTime = moment.tz(`${minDateObj.format('YYYY-MM-DD')} 19:00`, 'Asia/Kolkata');
    const latestEndTime = moment.tz(`${minDateObj.format('YYYY-MM-DD')} 20:00`, 'Asia/Kolkata');

    // Generate time ranges in 1-hour intervals (adjust based on duration)
    while (startTime.isBefore(endTime)) {
      const end = startTime.clone().add(duration, 'hour'); // Add duration to start time

      if (end.isAfter(latestEndTime)) {
        break;
      }

      // const startToCheck = moment.tz(`${minDateObj.format('YYYY-MM-DD')} ${start.time}`, timeZone);
      // const endToCheck = moment.tz(
      //   `${minDateObj.format('YYYY-MM-DD')} ${endFormatted.time}`,
      //   timeZone
      // );
      // const hasConflict = isTimeSlotConflicting(startToCheck, endToCheck);
      const hasConflict = false;

      if (!hasConflict) {
        // Push the time range with a disabled class if it's past
        const start = convertTimeToUserTimezone(startTime);
        const endFormatted = convertTimeToUserTimezone(end);

        timeRangesArray.push({
          startTime: startTime.format('YYYY-MM-DD HH:mm'),
          endTime: end.format('YYYY-MM-DD HH:mm'),
          timeRange: `${start.time} - ${endFormatted.time}`,
          disabled: false, // Disable if time has passed
        });
      }

      // Move to next time slot
      startTime = startTime.add(1, 'hour');
    }

    setTimeRanges(timeRangesArray);
  };

  return (
    <div className='min-h-screen bg-gray-50 py-20 px-4 sm:px-6 lg:px-8'>
      <div className={`max-w-7xl mx-auto ${isMobile ? 'space-y-8' : 'flex gap-8'}`}>
        <div className='flex-1'>
          <div className='text-center mb-8'>
            <h1 className='text-3xl font-bold text-gray-900 mb-2'>Select a Date & Time</h1>
            <p className='text-gray-600'>
              {selectedDate
                ? `Selected: ${format(selectedDate, 'MMMM d, yyyy')}${
                    selectedTime ? ` at ${selectedTime}` : ''
                  }`
                : 'Choose your preferred date and time'}
            </p>
          </div>

          {isLoading ? (
            <div className='flex justify-center items-center space-x-2'>
              <Loader2 className='animate-spin w-6 h-6 text-gray-500' />
              <span>Loading events...</span>
            </div>
          ) : (
            <CalendarPicker
              selectedDate={selectedDate}
              onDateSelect={handleDateSelect}
              minDate={minDate}
            />
          )}
        </div>

        {selectedDate && (
          <div className={`${isMobile ? 'w-full' : 'w-80'} animate-in fade-in-50 duration-500`}>
            <div className='bg-paper rounded-xl shadow-lg p-4'>
              <div id='duration-section'>
                <h2 className='text-lg font-semibold text-grey900 mb-4'>Select Duration</h2>
                <div className='grid grid-cols-2 gap-2 mb-6'>
                  {[1, 2, 3, 4].map((hours) => (
                    <Button
                      key={hours}
                      variant={duration === hours ? 'default' : 'outline'}
                      className={`${
                        duration === hours
                          ? 'bg-primaryMain hover:bg-primaryMain border-primaryMain border'
                          : 'hover:bg-primaryLight '
                      }`}
                      onClick={() => handleDurationSelect(hours)}>
                      {hours} {hours === 1 ? 'hour' : 'hours'}
                    </Button>
                  ))}
                </div>
              </div>

              <div id='time-slots-section'>
                <h2 className='text-lg font-semibold text-gray-900 mb-4'>Available Times</h2>
                <div className='grid grid-cols-2 gap-2'>
                  {timeRanges.map((slot) => (
                    <Button
                      key={slot.timeRange}
                      variant={selectedTime === slot.timeRange ? 'default' : 'outline'}
                      className={`w-full ${
                        selectedTime === slot.timeRange
                          ? 'bg-blue-500 hover:bg-blue-600'
                          : 'hover:bg-blue-50'
                      }`}
                      disabled={slot.disabled}
                      onClick={() => handleTimeSelect(slot.timeRange)}>
                      {slot.timeRange}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Calendar;
