// src/components/NoUpcomingLessons.js
import React from 'react';
import { FaPencilRuler, FaFileAlt } from 'react-icons/fa'; // Importing the page icon

const NoUpcomingLessons = () => {
  return (
    <div className="flex items-center justify-center h-screen text-center">
      <div className="flex flex-col items-center">
        <FaFileAlt className="text-4xl text-gray-600 mb-4" />
        <h2 className="text-xl text-gray-800">There are no Lessons Planned Yet</h2>
        <p className="mt-4 mb-4 text-gray-600">Create Your First Lesson</p>
        <button className="bg-[#E3E4FF] text-[#5457C9] px-4 py-2 flex items-center rounded font-bold">
          <FaPencilRuler className="text-xl mr-2" />
          Create Lesson
        </button>
      </div>
    </div>
  );
};

export default NoUpcomingLessons;
