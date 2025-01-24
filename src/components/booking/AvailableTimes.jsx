import React from 'react';
import { ScrollArea } from '../ui/scroll-area';
import { addMinutes, format, setHours, setMinutes } from 'date-fns';
import { Button } from '../ui/button';

const AvailableTimes = ({ selectedDate, selectedTime, setSelectedTime, handleTimeSelect }) => {
  const generateTimeSlots = (date) => {
    const slots = [];
    let currentTime = setMinutes(setHours(date, 9), 0);
    const endTime = setHours(date, 17);

    while (currentTime <= endTime) {
      slots.push(new Date(currentTime));
      currentTime = addMinutes(currentTime, 30);
    }
    return slots;
  };

  return (
    <div className='w-full max-w-md mx-auto bg-paper rounded-xl shadow-lg text-center mt-5 p-4'>
      <h2 className='text-lg font-semibold text-grey900 mb-4'>Available Times</h2>
      <ScrollArea className='h-[500px] rounded-md '>
        <div className='space-y-2 pr-4 text-center'>
          {generateTimeSlots(selectedDate).map((slot) => (
            <Button
              key={slot.toISOString()}
              variant={selectedTime === format(slot, 'h:mm a') ? 'default' : 'outline'}
              className='w-full justify-center h-14 border-2 border-primaryMain font-bold text-primaryMain text-[0.95rem] hover:bg-primaryLight'
              onClick={() => handleTimeSelect(format(slot, 'h:mm a'))}>
              {format(slot, 'h:mm a')}
            </Button>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default AvailableTimes;
