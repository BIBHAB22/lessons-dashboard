import React from 'react';
import { FaPlay, FaEllipsisH,FaCalendarAlt } from 'react-icons/fa'; // Importing the calendar icon

const LessonCard = ({ date, day, className, topic, status }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md flex flex-col basis-full md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <FaCalendarAlt className="text-red-500 mr-2" />
          <div>
            <p className="text-lg font-bold">{date}</p>
            <p className="text-gray-500">{day}</p>
          </div>
        </div>
        {status === 'draft' && (
          <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs">
            Draft
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
      <button className="bg-[#DFDAD3] text-[#5457C9] px-4 py-2 rounded flex items-center font-bold">
        More
        <FaEllipsisH className="ml-2" /> {/* Icon for More */}
      </button>
      </div>
    </div>
  );
};

export default LessonCard;
