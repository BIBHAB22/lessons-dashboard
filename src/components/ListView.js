// src/components/ListView.js
import React from 'react';
import { FaPlay, FaEllipsisH } from 'react-icons/fa';

// Helper function to format date
const formatDate = (dateString) => {
  const date = new Date(dateString);
  
  // Get the day of the month
  const day = date.getDate();

  // Get the day of the week and convert it to a 3-letter abbreviation
  const options = { weekday: 'short' }; // Options for the day format
  const dayAbbr = date.toLocaleDateString('en-US', options).toLowerCase(); // Convert to uppercase for 3-letter day
  const titleCaseDayAbbr = dayAbbr.charAt(0).toUpperCase() + dayAbbr.slice(1);
  return `${day} ${titleCaseDayAbbr}`; // Return formatted date
};

const ListView = ({ lessons }) => {
  return (
    <div>

      {/* Lesson Rows */}
      {lessons.map((lesson, index) => (
        <div
          key={index}
          className="border-l-8 flex items-center p-4 mb-4 border rounded-lg shadow-sm"
        >

          {/* Lesson Content */}
          <div className=" flex items-center gap-4 pl-4 w-full">
            <div className="w-16 h-8 bg-[#F9F3EB] flex justify-center items-center rounded-md border-l-4 border-red-500">
              <div className='font-bold'>{formatDate(lesson.date)}</div>
            </div>
            <div className="w-36">
              <p className="text-sm font-semibold text-gray-700">Lesson Date</p>
              {lesson.date ? new Date(lesson.date).toLocaleDateString() : 'N/A'}
            </div>
            <div className="w-48">
              <p className="text-sm font-semibold text-gray-700">Class</p>
              {lesson.className}
            </div>
            <div className="w-120">
              <p className="text-sm font-semibold text-gray-700">Topic</p>
              <span className="font-bold">{lesson.topic}</span>
            </div>
            <div className="flex-1 flex justify-end gap-2">
            <button className="bg-white text-[#5457C9] rounded px-4 py-1 border">
              <FaEllipsisH className="ml-2" />
            </button>
            <button className="bg-[#E3E4FF] text-[#5457C9] rounded px-4 py-1 flex">
              <FaPlay className="mr-2 mt-1" />
                Launch Session
            </button>     
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListView;
