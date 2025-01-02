import React, { useState } from 'react';
import Calendar from 'react-calendar';
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from 'react-icons/md';

const CustomCalendar = () => {
  const [date, setDate] = useState(new Date()); // Keep track of the selected date
  const [activeMonth, setActiveMonth] = useState(new Date()); // Track the current month for custom header

  // Function to handle hover effect and circle shape on hover
  const tileHoverClassName = ({ date, view }) => {
    if (view === 'month') {
      return 'hover:bg-primaryLight hover:text-paper rounded-full w-[50px] h-[75px] pr-2'; // Circle on hover with background color and white text
    }
    return ''; // No special style for non-month views
  };

  // Handle month change (both next and prev buttons)
  const changeMonth = (direction) => {
    const newMonth = new Date(activeMonth);
    if (direction === 'next') {
      newMonth.setMonth(activeMonth.getMonth() + 1); // Move to next month
    } else if (direction === 'prev') {
      newMonth.setMonth(activeMonth.getMonth() - 1); // Move to previous month
    }
    setActiveMonth(newMonth); // Update the active month
    setDate(newMonth);
  };

  // Handle date change from the calendar
  const handleDateChange = (newDate) => {
    setDate(newDate);
  };
  return (
    <div>
      <div className='bg-paper w-full h-12 flex items-center justify-between p-8 rounded-t-2xl'>
        {/* Month Name */}
        <div className='text-center text-2xl font-light text-secondaryDark'>
          {activeMonth.toLocaleString('default', { month: 'long', year: 'numeric' })}
        </div>
        {/* Prev Button */}
        <div>
          <button className='text-primaryDark' onClick={() => changeMonth('prev')}>
            <MdOutlineKeyboardArrowLeft size={32} />
          </button>

          {/* Next Button */}
          <button className='text-primaryDark' onClick={() => changeMonth('next')}>
            <MdOutlineKeyboardArrowRight size={32} />
          </button>
        </div>
      </div>
      <Calendar
        className='react-calendar rounded-b-2xl p-4 bg-paper text-secondaryDark text-2xl'
        tileClassName={tileHoverClassName} // Apply custom tile class
        value={date} // Set the value to the selected date
        onChange={handleDateChange} // Handle date change
        activeStartDate={date} // Set the active start date
        showNavigation={false} // Hide the default navigation
        calendarType='gregory'
      />
    </div>
  );
};

export default CustomCalendar;
