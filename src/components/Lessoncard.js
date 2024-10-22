import React from 'react';
import { FaPlay, FaEllipsisH } from 'react-icons/fa'; // Importing the calendar icon

const LessonCard = ({ date, className, topic, status }) => {
  // Convert the date to a Date object
  const lessonDate = new Date(date);
  
  // Get the date (day of the month)
  const day = lessonDate.getDate(); // This will give you just the day (e.g., 10)

  // Get the day of the week (three-letter abbreviation)
  const weekday = lessonDate.toLocaleString('en-US', { weekday: 'short' }); // e.g., "Thu"
  const formattedWeekday = weekday.charAt(0).toUpperCase() + weekday.slice(1);

  const formattedDate = lessonDate.toLocaleDateString('en-US', {
    month: 'long', day: 'numeric', year: 'numeric'
  });

  return (
    <div className="bg-white p-4 mb-4 mr-4 rounded-lg border border-b-8 flex flex-col basis-full md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
      <div className="flex gap-2 items-center">
        <div className="w-16 h-16 bg-[#F9F3EB] flex justify-center items-center rounded-md border-t-4 border-red-500">
          <div>
            <p className="text-lg font-bold">{day}</p> 
            <p className="text-gray-500">{formattedWeekday}</p>
          </div>
        </div>
        <div className="mt-4">
        <h3 className="text-sm text-gray-500">LESSON DATE</h3>
        <p className="text-lg font-semibold text-gray-900">{formattedDate}</p> {/* Show formatted lesson date */}
      </div>
        {status === 'draft' && (
          <span className="bg-[#FFEDD8] text-[#B35E01] px-2 py-1 rounded-md text-xs font-bold ml-auto">
            DRAFT
          </span>
        )}
      </div>
      <div className="mt-4">
        <h3 className="text-sm text-gray-500">CLASS</h3>
        <p className="text-lg font-semibold text-gray-900">{className}</p>
      </div>
      <div className="mt-2">
        <h3 className="text-sm text-gray-500">TOPIC</h3>
        <p className="text-lg font-bold text-gray-700">{topic}</p>
      </div>
      <div className="mt-8 flex gap-4">
        <button className="bg-[#E3E4FF] text-[#5457C9] px-4 py-2 rounded flex items-center font-bold">
          <FaPlay className="mr-2" /> {/* Icon for Launch lesson */}
          Launch lesson
        </button>
        <button className="bg-white text-[#5457C9] px-4 py-2 rounded-md flex items-center font-bold border">
          More
          <FaEllipsisH className="ml-2" /> {/* Icon for More */}
        </button>
      </div>
    </div>
  );
};

export default LessonCard;
