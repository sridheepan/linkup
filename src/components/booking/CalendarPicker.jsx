import React, { useState } from 'react';
import { format, addMonths, subMonths, isToday, isSameDay, startOfToday } from 'date-fns';
import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import moment from 'moment-timezone';

const CalendarPicker = ({
  onDateSelect,
  selectedDate,
  minDate,
  maxDate = addMonths(new Date(), 3),
}) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const today = startOfToday();

  const daysInMonth = () => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const days = [];

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDay.getDay(); i++) {
      days.push(null);
    }

    // Add all days of the month
    for (let day = 1; day <= lastDay.getDate(); day++) {
      days.push(new Date(year, month, day));
    }

    return days;
  };

  const isDateDisabled = (date) => {
    if (!date) return true;
    // Convert minDate to native JavaScript Date for comparison
    const minDateObj = moment(minDate, 'YYYY-MM-DD HH:mm:ss').toDate();
    return date < minDateObj || date > maxDate;
  };

  const handleDateClick = (date) => {
    if (!isDateDisabled(date)) {
      onDateSelect?.(date);
    }
  };

  const nextMonth = () => setCurrentMonth(addMonths(currentMonth, 1));
  const prevMonth = () => setCurrentMonth(subMonths(currentMonth, 1));

  return (
    <div className='w-full max-w-md mx-auto bg-paper rounded-xl shadow-lg overflow-hidden'>
      <div className='p-4'>
        {/* Calendar Header */}
        <div className='flex items-center justify-between mb-4'>
          <button
            onClick={prevMonth}
            className='p-2 hover:bg-grey100 rounded-full transition-colors duration-200'
            aria-label='Previous month'>
            <ChevronLeft className='w-5 h-5 text-grey600' />
          </button>
          <h2 className='text-lg font-semibold text-grey900'>
            {format(currentMonth, 'MMMM yyyy')}
          </h2>
          <button
            onClick={nextMonth}
            className='p-2 hover:bg-grey100 rounded-full transition-colors duration-200'
            aria-label='Next month'>
            <ChevronRight className='w-5 h-5 text-grey600' />
          </button>
        </div>

        {/* Weekday Headers */}
        <div className='grid grid-cols-7 mb-2'>
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
            <div key={day} className='text-center text-sm font-medium text-grey500 py-2'>
              {day}
            </div>
          ))}
        </div>

        {/* Calendar Grid */}
        <div className='grid grid-cols-7 gap-1'>
          {daysInMonth().map((date, index) => {
            if (!date) {
              return <div key={`empty-${index}`} className='aspect-square' />;
            }

            const isDisabled = isDateDisabled(date);
            const isSelected = selectedDate && isSameDay(date, selectedDate);
            const isCurrentDay = isToday(date);

            return (
              <button
                key={date.toISOString()}
                onClick={() => handleDateClick(date)}
                disabled={isDisabled}
                className={cn(
                  'aspect-square relative w-full',
                  'flex items-center justify-center',
                  'text-sm font-medium transition-all duration-200',
                  'hover:bg-primaryLight focus:outline-none focus:ring-2 focus:ring-primaryMain rounded-lg',
                  isDisabled && 'text-grey300 hover:bg-transparent cursor-not-allowed',
                  isSelected && 'bg-primaryMain text-paper hover:bg-primaryMain/90',
                  isCurrentDay && !isSelected && 'text-primaryMain font-bold'
                )}>
                <span
                  className={cn(
                    'w-10 h-10 flex items-center justify-center rounded-lg',
                    isSelected && 'animate-in zoom-in-50 duration-200',
                    isCurrentDay && !isSelected && 'border-2 border-primaryMain'
                  )}>
                  {format(date, 'd')}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CalendarPicker;
